/* ============================================================
   Wave Background — Vanilla JS port
   Simplex-noise 2D implementation + SVG wave animation
   ============================================================ */

(function () {
  'use strict';

  // ─── Simplex Noise 2D (self-contained) ───
  const F2 = 0.5 * (Math.sqrt(3) - 1);
  const G2 = (3 - Math.sqrt(3)) / 6;
  const grad3 = [
    [1, 1], [-1, 1], [1, -1], [-1, -1],
    [1, 0], [-1, 0], [0, 1], [0, -1],
    [1, 1], [-1, 1], [1, -1], [-1, -1]
  ];

  function createNoise2D() {
    const perm = new Uint8Array(512);
    const perm12 = new Uint8Array(512);
    const p = new Uint8Array(256);

    for (let i = 0; i < 256; i++) p[i] = i;
    for (let i = 255; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [p[i], p[j]] = [p[j], p[i]];
    }
    for (let i = 0; i < 512; i++) {
      perm[i] = p[i & 255];
      perm12[i] = perm[i] % 12;
    }

    return function noise2D(xin, yin) {
      let n0, n1, n2;
      const s = (xin + yin) * F2;
      const i = Math.floor(xin + s);
      const j = Math.floor(yin + s);
      const t = (i + j) * G2;

      const X0 = i - t;
      const Y0 = j - t;
      const x0 = xin - X0;
      const y0 = yin - Y0;

      let i1, j1;
      if (x0 > y0) { i1 = 1; j1 = 0; }
      else { i1 = 0; j1 = 1; }

      const x1 = x0 - i1 + G2;
      const y1 = y0 - j1 + G2;
      const x2 = x0 - 1.0 + 2.0 * G2;
      const y2 = y0 - 1.0 + 2.0 * G2;

      const ii = i & 255;
      const jj = j & 255;

      let t0 = 0.5 - x0 * x0 - y0 * y0;
      if (t0 < 0) n0 = 0;
      else {
        t0 *= t0;
        const gi0 = perm12[ii + perm[jj]];
        n0 = t0 * t0 * (grad3[gi0][0] * x0 + grad3[gi0][1] * y0);
      }

      let t1 = 0.5 - x1 * x1 - y1 * y1;
      if (t1 < 0) n1 = 0;
      else {
        t1 *= t1;
        const gi1 = perm12[ii + i1 + perm[jj + j1]];
        n1 = t1 * t1 * (grad3[gi1][0] * x1 + grad3[gi1][1] * y1);
      }

      let t2 = 0.5 - x2 * x2 - y2 * y2;
      if (t2 < 0) n2 = 0;
      else {
        t2 *= t2;
        const gi2 = perm12[ii + 1 + perm[jj + 1]];
        n2 = t2 * t2 * (grad3[gi2][0] * x2 + grad3[gi2][1] * y2);
      }

      return 70.0 * (n0 + n1 + n2);
    };
  }

  // ─── Wave Background Class ───
  class WaveBackground {
    constructor(containerSelector, options = {}) {
      this.container = document.querySelector(containerSelector);
      if (!this.container) return;

      this.options = {
        strokeColor: options.strokeColor || 'rgba(249, 115, 22, 0.07)',
        lineSpacingX: options.lineSpacingX || 10,
        lineSpacingY: options.lineSpacingY || 10,
        waveAmplitude: options.waveAmplitude || 6,
        waveFreqX: options.waveFreqX || 0.003,
        waveFreqY: options.waveFreqY || 0.002,
        waveSpeed: options.waveSpeed || 0.006,
        cursorRadius: options.cursorRadius || 150,
        cursorStrength: options.cursorStrength || 0.00025,
        strokeWidth: options.strokeWidth || 0.8,
      };

      this.mouse = {
        x: -100, y: 0, lx: 0, ly: 0,
        sx: -100, sy: 0, v: 0, vs: 0, a: 0, set: false
      };

      this.lines = [];
      this.paths = [];
      this.noise = createNoise2D();
      this.raf = null;
      this.bounding = null;

      this._init();
    }

    _init() {
      // Create SVG
      this.svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      this.svg.style.cssText = 'display:block;width:100%;height:100%;position:absolute;top:0;left:0;';
      this.container.appendChild(this.svg);

      this._setSize();
      this._setLines();

      // Events
      this._onResize = this._onResize.bind(this);
      this._onMouseMove = this._onMouseMove.bind(this);
      this._onTouchMove = this._onTouchMove.bind(this);
      this._tick = this._tick.bind(this);

      window.addEventListener('resize', this._onResize);
      window.addEventListener('mousemove', this._onMouseMove);
      this.container.addEventListener('touchmove', this._onTouchMove, { passive: false });

      this.raf = requestAnimationFrame(this._tick);
    }

    _setSize() {
      this.bounding = this.container.getBoundingClientRect();
      this.svg.setAttribute('width', this.bounding.width);
      this.svg.setAttribute('height', this.bounding.height);
      this.svg.setAttribute('viewBox', `0 0 ${this.bounding.width} ${this.bounding.height}`);
    }

    _setLines() {
      if (!this.bounding) return;

      const { width, height } = this.bounding;
      const { lineSpacingX, lineSpacingY, strokeColor, strokeWidth } = this.options;

      // Clear
      this.paths.forEach(p => p.remove());
      this.paths = [];
      this.lines = [];

      const oWidth = width + 200;
      const oHeight = height + 30;
      const totalLines = Math.ceil(oWidth / lineSpacingX);
      const totalPoints = Math.ceil(oHeight / lineSpacingY);
      const xStart = (width - lineSpacingX * totalLines) / 2;
      const yStart = (height - lineSpacingY * totalPoints) / 2;

      for (let i = 0; i < totalLines; i++) {
        const points = [];
        for (let j = 0; j < totalPoints; j++) {
          points.push({
            x: xStart + lineSpacingX * i,
            y: yStart + lineSpacingY * j,
            wave: { x: 0, y: 0 },
            cursor: { x: 0, y: 0, vx: 0, vy: 0 }
          });
        }

        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        path.setAttribute('fill', 'none');
        path.setAttribute('stroke', strokeColor);
        path.setAttribute('stroke-width', strokeWidth);
        this.svg.appendChild(path);
        this.paths.push(path);
        this.lines.push(points);
      }
    }

    _onResize() {
      this._setSize();
      this._setLines();
    }

    _onMouseMove(e) {
      this._updateMouse(e.pageX, e.pageY);
    }

    _onTouchMove(e) {
      e.preventDefault();
      const t = e.touches[0];
      this._updateMouse(t.clientX, t.clientY);
    }

    _updateMouse(x, y) {
      if (!this.bounding) return;
      const m = this.mouse;
      m.x = x - this.bounding.left;
      m.y = y - this.bounding.top + window.scrollY;
      if (!m.set) {
        m.sx = m.x; m.sy = m.y;
        m.lx = m.x; m.ly = m.y;
        m.set = true;
      }
    }

    _movePoints(time) {
      const { noise, mouse, options } = this;
      const { waveFreqX, waveFreqY, waveSpeed, waveAmplitude, cursorRadius, cursorStrength } = options;

      this.lines.forEach(points => {
        points.forEach(p => {
          const move = noise(
            (p.x + time * waveSpeed) * waveFreqX,
            (p.y + time * (waveSpeed * 0.4)) * waveFreqY
          ) * waveAmplitude;

          p.wave.x = Math.cos(move) * 10;
          p.wave.y = Math.sin(move) * 5;

          const dx = p.x - mouse.sx;
          const dy = p.y - mouse.sy;
          const d = Math.hypot(dx, dy);
          const l = Math.max(cursorRadius, mouse.vs);

          if (d < l) {
            const s = 1 - d / l;
            const f = Math.cos(d * 0.001) * s;
            p.cursor.vx += Math.cos(mouse.a) * f * l * mouse.vs * cursorStrength;
            p.cursor.vy += Math.sin(mouse.a) * f * l * mouse.vs * cursorStrength;
          }

          p.cursor.vx += (0 - p.cursor.x) * 0.01;
          p.cursor.vy += (0 - p.cursor.y) * 0.01;
          p.cursor.vx *= 0.95;
          p.cursor.vy *= 0.95;
          p.cursor.x += p.cursor.vx;
          p.cursor.y += p.cursor.vy;
          p.cursor.x = Math.min(40, Math.max(-40, p.cursor.x));
          p.cursor.y = Math.min(40, Math.max(-40, p.cursor.y));
        });
      });
    }

    _moved(point, withCursor = true) {
      return {
        x: point.x + point.wave.x + (withCursor ? point.cursor.x : 0),
        y: point.y + point.wave.y + (withCursor ? point.cursor.y : 0)
      };
    }

    _drawLines() {
      this.lines.forEach((points, idx) => {
        if (points.length < 2 || !this.paths[idx]) return;
        const first = this._moved(points[0], false);
        let d = `M ${first.x} ${first.y}`;
        for (let i = 1; i < points.length; i++) {
          const c = this._moved(points[i]);
          d += `L ${c.x} ${c.y}`;
        }
        this.paths[idx].setAttribute('d', d);
      });
    }

    _tick(time) {
      const m = this.mouse;
      m.sx += (m.x - m.sx) * 0.1;
      m.sy += (m.y - m.sy) * 0.1;

      const dx = m.x - m.lx;
      const dy = m.y - m.ly;
      m.v = Math.hypot(dx, dy);
      m.vs += (m.v - m.vs) * 0.1;
      m.vs = Math.min(100, m.vs);
      m.lx = m.x;
      m.ly = m.y;
      m.a = Math.atan2(dy, dx);

      this._movePoints(time);
      this._drawLines();

      this.raf = requestAnimationFrame(this._tick);
    }

    destroy() {
      if (this.raf) cancelAnimationFrame(this.raf);
      window.removeEventListener('resize', this._onResize);
      window.removeEventListener('mousemove', this._onMouseMove);
      this.container?.removeEventListener('touchmove', this._onTouchMove);
      this.svg?.remove();
    }
  }

  // ─── Respect prefers-reduced-motion ───
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (!prefersReducedMotion) {
    // Initialize when DOM ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', initWaves);
    } else {
      initWaves();
    }
  }

  function initWaves() {
    const heroContainer = document.querySelector('.hero__waves');
    if (!heroContainer) return;

    new WaveBackground('.hero__waves', {
      strokeColor: 'rgba(249, 115, 22, 0.18)',   // Orange accent, clearly visible
      strokeWidth: 1,
      lineSpacingX: 8,        // Dense lines matching original component
      lineSpacingY: 8,
      waveAmplitude: 8,       // Stronger wave motion
      waveFreqX: 0.003,
      waveFreqY: 0.002,
      waveSpeed: 0.008,
      cursorRadius: 175,
      cursorStrength: 0.00035,
    });
  }
})();

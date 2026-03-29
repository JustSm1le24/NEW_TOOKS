/* ============================================================
   i18n — Language Switcher (RU / EN)
   ============================================================ */

(function () {
  'use strict';

  const translations = {
    ru: {
      // Nav
      'nav.about': 'О компании',
      'nav.services': 'Услуги',
      'nav.advantages': 'Преимущества',
      'nav.partners': 'Партнёры',
      'nav.contact': 'Контакты',
      'nav.cta': 'Оставить заявку',

      // Hero
      'hero.badge': 'Аттестованная организация',
      'hero.title.line1': 'Экспертиза',
      'hero.title.line2': 'промышленной безопасности',
      'hero.subtitle': 'Профессиональная экспертиза, техническое обследование и аудит безопасности для предприятий Республики Казахстан',
      'hero.cta.primary': 'Связаться с нами',
      'hero.cta.secondary': 'Наши услуги',

      // Stats
      'stat.experience': 'Лет опыта',
      'stat.projects': 'Завершённых проектов',
      'stat.clients': 'Клиентов',
      'stat.experts': 'Сертифицированных экспертов',

      // About
      'about.label': 'О компании',
      'about.title.pre': 'Надёжный партнёр в сфере ',
      'about.title.gradient': 'промышленной безопасности',
      'about.p1': 'ТОО «Қауіпсіздік Сараптамасы» — аттестованная организация, специализирующаяся на проведении экспертизы промышленной безопасности, технического обследования зданий и сооружений, а также аудита в области охраны труда и промышленной безопасности.',
      'about.p2': 'Наша команда сертифицированных экспертов обеспечивает высокое качество работ, соблюдение законодательных требований и индивидуальный подход к каждому клиенту.',
      'about.feature1': 'Аттестация в соответствии с законодательством РК',
      'about.feature2': 'Квалифицированная команда с многолетним опытом',
      'about.feature3': 'Современные методы и оборудование для экспертизы',
      'about.feature4': 'Работа по всей территории Казахстана',

      // About card
      'about.detail.name.label': 'Полное наименование',
      'about.detail.name.value': 'ТОО «Қауіпсіздік Сараптамасы»',
      'about.detail.bin.label': 'БИН',
      'about.detail.legal.label': 'Юридический адрес',
      'about.detail.legal.value': 'г. Астана, район Есіл, ул. Мәңгілік Ел, д. 8',
      'about.detail.actual.label': 'Фактический адрес',
      'about.detail.actual.value': 'г. Астана, район Есіл, ул. Мәңгілік Ел, д. 8',
      'about.detail.status.label': 'Статус',
      'about.detail.status.value': '● Действующее',

      // Services
      'services.label': 'Услуги',
      'services.title.pre': 'Комплексные решения для вашей ',
      'services.title.gradient': 'безопасности',
      'services.subtitle': 'Мы предоставляем полный спектр услуг в области промышленной безопасности и охраны труда',
      'service1.title': 'Экспертиза промышленной безопасности',
      'service1.desc': 'Проведение экспертизы технических устройств, зданий и сооружений на опасных производственных объектах в соответствии с законодательством РК.',
      'service2.title': 'Техническое обследование зданий',
      'service2.desc': 'Комплексное обследование строительных конструкций, определение технического состояния и остаточного ресурса зданий и сооружений.',
      'service3.title': 'Экспертиза проектной документации',
      'service3.desc': 'Экспертная оценка проектной документации на соответствие требованиям промышленной безопасности, строительных норм и правил.',
      'service4.title': 'Аудит безопасности',
      'service4.desc': 'Проведение аудита в области охраны труда и промышленной безопасности, выявление рисков и разработка рекомендаций по их устранению.',
      'service5.title': 'Обучение и аттестация',
      'service5.desc': 'Организация обучения и повышения квалификации специалистов в области промышленной безопасности и охраны труда.',
      'service6.title': 'Разработка документации ПБ',
      'service6.desc': 'Подготовка деклараций промышленной безопасности, планов ликвидации аварий и иной документации для опасных производственных объектов.',

      // Advantages
      'advantages.label': 'Преимущества',
      'advantages.title.pre': 'Почему выбирают ',
      'advantages.title.gradient': 'нас',
      'advantages.subtitle': 'Мы обеспечиваем высочайшее качество услуг и комплексный подход к решению задач наших клиентов',
      'adv1.title': 'Аттестация и лицензирование',
      'adv1.desc': 'Все виды деятельности компании полностью соответствуют требованиям законодательства Республики Казахстан. Мы имеем все необходимые лицензии и аттестации.',
      'adv2.title': 'Опытная команда',
      'adv2.desc': 'Наши специалисты имеют многолетний опыт работы в сфере промышленной безопасности и регулярно повышают свою квалификацию.',
      'adv3.title': 'Индивидуальный подход',
      'adv3.desc': 'Мы разрабатываем оптимальные решения для каждого клиента, учитывая специфику его деятельности и требования отрасли.',
      'adv4.title': 'Оперативность',
      'adv4.desc': 'Выполнение работ в кратчайшие сроки без потери качества. Гибкий график и готовность к срочным заказам по всему Казахстану.',
      'adv5.title': 'Современное оборудование',
      'adv5.desc': 'Использование передовых приборов и методов неразрушающего контроля, что обеспечивает высокую точность результатов экспертизы.',
      'adv6.title': 'Полный цикл услуг',
      'adv6.desc': 'От экспертизы и обследования до разработки документации и обучения персонала — все услуги в одной компании.',

      // Partners
      'partners.label': 'Партнёры',
      'partners.title.pre': 'Нам доверяют ',
      'partners.title.gradient': 'ведущие компании',
      'partners.subtitle': 'Компании и объекты, которые доверяют нам свою безопасность',

      // Partner types
      'partner.type.hotel': 'Гостиничный комплекс',
      'partner.type.expo': 'Выставочный комплекс',
      'partner.type.telecom': 'Телекоммуникации',
      'partner.type.mining': 'Золотодобывающая компания',
      'partner.type.bizz': 'Бизнес-центр',
      'partner.type.auto': 'Автодилер',
      'partner.type.sport': 'Спортивный комплекс',
      'partner.type.medical': 'Медицинский центр',
      'partner.type.partner': 'Партнёр',
      'partner.type.tech': 'Технологический партнёр',
      'partner.type.edu': 'Образовательный партнёр',
      'partner.type.client': 'Партнёр / Клиент',

      // Contact
      'contact.label': 'Контакты',
      'contact.title.pre': 'Свяжитесь с ',
      'contact.title.gradient': 'нами',
      'contact.subtitle': 'Оставьте заявку, и наши специалисты свяжутся с вами для бесплатной консультации',
      'contact.name.label': 'Ваше имя *',
      'contact.name.placeholder': 'Иван Иванов',
      'contact.name.error': 'Введите ваше имя',
      'contact.phone.label': 'Телефон *',
      'contact.phone.placeholder': '+7 (___) ___ __ __',
      'contact.phone.error': 'Введите номер телефона',
      'contact.email.label': 'Email *',
      'contact.email.placeholder': 'example@company.kz',
      'contact.email.error': 'Введите корректный email',
      'contact.company.label': 'Организация',
      'contact.company.placeholder': 'Название вашей организации',
      'contact.message.label': 'Сообщение *',
      'contact.message.placeholder': 'Опишите ваш вопрос или задачу...',
      'contact.message.error': 'Введите сообщение',
      'contact.submit': 'Отправить заявку',
      'contact.address.title': 'Адрес',
      'contact.address.value': 'г. Астана, район Есіл, ул. Мәңгілік Ел, д. 8',
      'contact.phone.title': 'Телефон',
      'contact.email.title': 'Email',
      'contact.schedule.title': 'Режим работы',
      'contact.schedule.weekdays': 'Пн — Пт: 09:00 — 18:00',
      'contact.schedule.weekends': 'Сб — Вс: выходной',

      // Footer
      'footer.desc': 'Профессиональная экспертиза промышленной безопасности для предприятий Республики Казахстан.',
      'footer.nav.title': 'Навигация',
      'footer.services.title': 'Услуги',
      'footer.contacts.title': 'Контакты',
      'footer.service.expertise': 'Экспертиза ПБ',
      'footer.service.inspection': 'Техобследование',
      'footer.service.audit': 'Аудит безопасности',
      'footer.service.training': 'Обучение',
      'footer.service.docs': 'Документация ПБ',
      'footer.copyright': 'ТОО «Қауіпсіздік Сараптамасы». Все права защищены. БИН: 240140032273',
      'footer.privacy': 'Политика конфиденциальности',
      'footer.terms': 'Пользовательское соглашение',

      // Toast
      'toast.success': 'Сообщение отправлено! Мы свяжемся с вами в ближайшее время.',
      'toast.error': 'Пожалуйста, заполните все обязательные поля корректно.',
    },

    en: {
      // Nav
      'nav.about': 'About',
      'nav.services': 'Services',
      'nav.advantages': 'Advantages',
      'nav.partners': 'Partners',
      'nav.contact': 'Contact',
      'nav.cta': 'Get a Quote',

      // Hero
      'hero.badge': 'Certified Organization',
      'hero.title.line1': 'Industrial',
      'hero.title.line2': 'Safety Expertise',
      'hero.subtitle': 'Professional expertise, technical inspection and safety auditing for enterprises across the Republic of Kazakhstan',
      'hero.cta.primary': 'Contact Us',
      'hero.cta.secondary': 'Our Services',

      // Stats
      'stat.experience': 'Years of Experience',
      'stat.projects': 'Completed Projects',
      'stat.clients': 'Clients',
      'stat.experts': 'Certified Experts',

      // About
      'about.label': 'About Us',
      'about.title.pre': 'A Reliable Partner in ',
      'about.title.gradient': 'Industrial Safety',
      'about.p1': 'LLP "Qauipsizdik Saraptamasy" is a certified organization specializing in industrial safety expertise, technical inspection of buildings and structures, as well as auditing in occupational health and industrial safety.',
      'about.p2': 'Our team of certified experts ensures high-quality work, compliance with regulatory requirements, and an individual approach to each client.',
      'about.feature1': 'Certification in accordance with the laws of the Republic of Kazakhstan',
      'about.feature2': 'Qualified team with years of experience',
      'about.feature3': 'Modern methods and equipment for expertise',
      'about.feature4': 'Operating across all of Kazakhstan',

      // About card
      'about.detail.name.label': 'Full Name',
      'about.detail.name.value': 'LLP "Qauipsizdik Saraptamasy"',
      'about.detail.bin.label': 'BIN',
      'about.detail.legal.label': 'Legal Address',
      'about.detail.legal.value': 'Astana, Yesil district, Mangilik El st., 8',
      'about.detail.actual.label': 'Actual Address',
      'about.detail.actual.value': 'Astana, Yesil district, Mangilik El st., 8',
      'about.detail.status.label': 'Status',
      'about.detail.status.value': '● Active',

      // Services
      'services.label': 'Services',
      'services.title.pre': 'Comprehensive Solutions for Your ',
      'services.title.gradient': 'Safety',
      'services.subtitle': 'We provide a full range of services in industrial safety and occupational health',
      'service1.title': 'Industrial Safety Expertise',
      'service1.desc': 'Expertise of technical devices, buildings and structures at hazardous production facilities in accordance with the legislation of the Republic of Kazakhstan.',
      'service2.title': 'Building Technical Inspection',
      'service2.desc': 'Comprehensive inspection of building structures, determining the technical condition and remaining service life of buildings and structures.',
      'service3.title': 'Project Documentation Expertise',
      'service3.desc': 'Expert assessment of project documentation for compliance with industrial safety requirements, building codes and regulations.',
      'service4.title': 'Safety Audit',
      'service4.desc': 'Conducting audits in occupational health and industrial safety, identifying risks and developing recommendations for their elimination.',
      'service5.title': 'Training & Certification',
      'service5.desc': 'Organizing training and professional development for specialists in the field of industrial safety and occupational health.',
      'service6.title': 'Safety Documentation',
      'service6.desc': 'Preparation of industrial safety declarations, emergency response plans and other documentation for hazardous production facilities.',

      // Advantages
      'advantages.label': 'Advantages',
      'advantages.title.pre': 'Why Choose ',
      'advantages.title.gradient': 'Us',
      'advantages.subtitle': 'We provide the highest quality services and a comprehensive approach to solving our clients\' tasks',
      'adv1.title': 'Certification & Licensing',
      'adv1.desc': 'All company activities fully comply with the legislation of the Republic of Kazakhstan. We hold all necessary licenses and certifications.',
      'adv2.title': 'Experienced Team',
      'adv2.desc': 'Our specialists have many years of experience in industrial safety and regularly improve their qualifications.',
      'adv3.title': 'Individual Approach',
      'adv3.desc': 'We develop optimal solutions for each client, taking into account the specifics of their activities and industry requirements.',
      'adv4.title': 'Efficiency',
      'adv4.desc': 'Completing work in the shortest possible time without compromising quality. Flexible schedules and readiness for urgent orders across Kazakhstan.',
      'adv5.title': 'Modern Equipment',
      'adv5.desc': 'Using advanced instruments and non-destructive testing methods, ensuring high accuracy of expertise results.',
      'adv6.title': 'Full Service Cycle',
      'adv6.desc': 'From expertise and inspection to documentation development and personnel training — all services in one company.',

      // Partners
      'partners.label': 'Partners',
      'partners.title.pre': 'Trusted by ',
      'partners.title.gradient': 'Leading Companies',
      'partners.subtitle': 'Companies and facilities that trust us with their safety',

      // Partner types
      'partner.type.hotel': 'Hotel Complex',
      'partner.type.expo': 'Exhibition Complex',
      'partner.type.telecom': 'Telecommunications',
      'partner.type.mining': 'Gold Mining Company',
      'partner.type.bizz': 'Business Centre',
      'partner.type.auto': 'Car Dealership',
      'partner.type.sport': 'Sports Complex',
      'partner.type.medical': 'Medical Centre',
      'partner.type.partner': 'Partner',
      'partner.type.tech': 'Technology Partner',
      'partner.type.edu': 'Educational Partner',
      'partner.type.client': 'Partner / Client',

      // Contact
      'contact.label': 'Contact',
      'contact.title.pre': 'Get in ',
      'contact.title.gradient': 'Touch',
      'contact.subtitle': 'Leave a request and our specialists will contact you for a free consultation',
      'contact.name.label': 'Your Name *',
      'contact.name.placeholder': 'John Smith',
      'contact.name.error': 'Please enter your name',
      'contact.phone.label': 'Phone *',
      'contact.phone.placeholder': '+7 (___) ___ __ __',
      'contact.phone.error': 'Please enter your phone number',
      'contact.email.label': 'Email *',
      'contact.email.placeholder': 'example@company.kz',
      'contact.email.error': 'Please enter a valid email',
      'contact.company.label': 'Company',
      'contact.company.placeholder': 'Your company name',
      'contact.message.label': 'Message *',
      'contact.message.placeholder': 'Describe your question or task...',
      'contact.message.error': 'Please enter a message',
      'contact.submit': 'Send Request',
      'contact.address.title': 'Address',
      'contact.address.value': 'Astana, Yesil district, Mangilik El st., 8',
      'contact.phone.title': 'Phone',
      'contact.email.title': 'Email',
      'contact.schedule.title': 'Working Hours',
      'contact.schedule.weekdays': 'Mon — Fri: 09:00 — 18:00',
      'contact.schedule.weekends': 'Sat — Sun: Day off',

      // Footer
      'footer.desc': 'Professional industrial safety expertise for enterprises across the Republic of Kazakhstan.',
      'footer.nav.title': 'Navigation',
      'footer.services.title': 'Services',
      'footer.contacts.title': 'Contacts',
      'footer.service.expertise': 'Safety Expertise',
      'footer.service.inspection': 'Inspection',
      'footer.service.audit': 'Safety Audit',
      'footer.service.training': 'Training',
      'footer.service.docs': 'Documentation',
      'footer.copyright': 'LLP "Qauipsizdik Saraptamasy". All rights reserved. BIN: 240140032273',
      'footer.privacy': 'Privacy Policy',
      'footer.terms': 'Terms of Service',

      // Toast
      'toast.success': 'Message sent! We will contact you shortly.',
      'toast.error': 'Please fill in all required fields correctly.',
    }
  };

  let currentLang = localStorage.getItem('site-lang') || 'ru';

  function applyLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('site-lang', lang);
    document.documentElement.setAttribute('lang', lang);

    const dict = translations[lang];
    if (!dict) return;

    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (!dict[key]) return;
      el.textContent = dict[key];
    });

    // Update placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (dict[key]) el.setAttribute('placeholder', dict[key]);
    });

    // Update the toggle button text
    const toggleBtn = document.getElementById('lang-toggle');
    if (toggleBtn) {
      toggleBtn.textContent = lang === 'ru' ? 'EN' : 'RU';
      toggleBtn.setAttribute('aria-label', lang === 'ru' ? 'Switch to English' : 'Переключить на русский');
    }
  }

  function toggleLanguage() {
    applyLanguage(currentLang === 'ru' ? 'en' : 'ru');
  }

  // Initialize on DOM ready
  function init() {
    // Create the toggle button and insert it into nav
    const navLinks = document.getElementById('nav-links');
    if (navLinks) {
      const toggleBtn = document.createElement('button');
      toggleBtn.id = 'lang-toggle';
      toggleBtn.className = 'btn btn--ghost btn--compact lang-toggle';
      toggleBtn.textContent = currentLang === 'ru' ? 'EN' : 'RU';
      toggleBtn.setAttribute('aria-label', currentLang === 'ru' ? 'Switch to English' : 'Переключить на русский');
      toggleBtn.addEventListener('click', toggleLanguage);

      // Insert before the CTA button
      const ctaBtn = navLinks.querySelector('.nav__cta');
      if (ctaBtn) {
        navLinks.insertBefore(toggleBtn, ctaBtn);
      } else {
        navLinks.appendChild(toggleBtn);
      }
    }

    // Apply saved language
    applyLanguage(currentLang);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // Expose for external use
  window.i18n = { applyLanguage, toggleLanguage, getCurrentLang: () => currentLang };
})();

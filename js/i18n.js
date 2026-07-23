(function () {
  const lang = 'en';
  document.documentElement.lang = lang;
  document.documentElement.dataset.lang = lang;
  window.__I18N_LANG = lang;

  window.getCharHTML = function (ch) {
    if (ch === ' ') return '&nbsp;';
    if (ch === '🡲' || ch === '🡺') return '<svg style="width: 1.25em; height: 1.25em; vertical-align: -0.25em;" viewBox="0 0 84 85" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M11 38H54L37 21H51L73 43L51 65H37L54 48H11Z"/></svg>';
    if (ch === '🡼') return '<svg style="width: 1.25em; height: 1.25em; vertical-align: -0.25em;" viewBox="0 0 84 85" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><g transform="rotate(-135 42 42.5)"><path d="M11 38H54L37 21H51L73 43L51 65H37L54 48H11Z"/></g></svg>';
    if (ch === '🞣') return '<svg style="width: 0.9em; height: 0.9em; vertical-align: -0.1em; transform: translateY(-0.1em);" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C12 7.5 16.5 12 22 12C16.5 12 12 16.5 12 22C12 16.5 7.5 12 2 12C7.5 12 12 7.5 12 2Z"/></svg>';
    return ch;
  };

  const T = {
    'meta.description': 'Qyvera Technologies creates scalable software products, intelligent systems, and modern digital experiences engineered for growth and performance.',

    'index.title': 'Qyvera Technologies — Scalable Software & Digital Solutions',
    'index.h1': 'Qyvera Technologies — Custom Software, Web Applications, and AI Solutions.',
    'index.hero.tagline': 'Building digital solutions, <span class="other-accent">engineering modern growth</span>,<br>through scalability, design and performance.',
    'index.about.text': 'At <span class="other-accent">Qyvera Technologies</span>, we deliver modern software solutions designed to help businesses <span class="other-accent">grow, automate, and scale</span> efficiently.',
    'index.about.sub': "We build custom platforms, intelligent systems, modern web applications, and premium digital experiences focused on performance, usability, and innovation.",
    'index.cg.phrase': "Each system is engineered to <span class=\"other-accent\">perform</span>, <span class=\"other-accent\">scale</span> and deliver exceptional value.",
    'index.skills.subtitle': 'Services',
    'index.skills.text': 'We build custom platforms, modern web applications, and intelligent systems engineered for efficiency and scale.',
    'index.skills.frontend': 'Custom Software Development',
    'index.skills.animation': 'Web Application Development',
    'index.skills.backend': 'AI & Automation Solutions',
    'index.skills.database': 'UI/UX Design',
    'index.skills.devops': 'SaaS Product Development',
    'index.skills.security': 'Business Technology Solutions',
    'index.skills.design': 'Why Us',
    'index.contact.title': 'Contact',
    'index.contact.dispo1': "Ready to join forces with <span class=\"other-accent\">innovative teams</span> and contribute to high-performance products.",
    'index.contact.dispo2': "We are available for <span class=\"other-accent\">freelance missions worldwide</span>, bringing software engineering expertise to your business.",
    'index.proj.label': 'Preview',
    'index.detail.back': '🡼BACK',

    'info.title': 'About, Qyvera Technologies',
    'info.eyebrow': 'About Us',
    'info.role': 'Crafting modern digital experiences through intelligent engineering and elegant design.',
    'info.desc': "Qyvera Technologies delivers modern software solutions designed to help businesses grow, automate, and scale efficiently. We build custom platforms, intelligent systems, and premium digital experiences.",
    'info.meta.based': 'Based in',
    'info.meta.based.value': 'Kerala',
    'info.skills.frontend': 'Software Development',
    'info.skills.animation': 'AI & Automation',
    'info.skills.backend': 'Design & Usability',
    'info.skills.security': 'SaaS & Enterprise',

    'contact.title': 'Contact, Qyvera Technologies',
    'contact.panel.title': "Let's talk about your project.",
    'contact.panel.copy': "We respond quickly to custom software requests, SaaS products, and freelance collaboration queries.",
    'contact.meta.base': 'Based in',
    'contact.meta.phone': 'Contact us',
    'contact.meta.delay': 'Avg. response',
    'contact.meta.base.value': 'Kerala',
    'contact.meta.phone.value': '6282293694',
    'contact.meta.delay.value': '24h',
    'contact.eyebrow': 'Contact',
    'contact.role': 'Engineering scalable platforms, smart automations, and custom business solutions.',
    'contact.desc': "Whether you need a custom platform, automation system, or modern digital solution, Qyvera Technologies helps transform ideas into impactful products.",
    'contact.shortcuts': 'Shortcuts',
    'contact.brief': 'Brief format',
    'contact.maildirect': 'Direct mail',
    'contact.brief.product': 'Product goal',
    'contact.brief.deadline': 'Target deadline',
    'contact.brief.stack': 'Tech stack',
    'contact.brief.deliverables': 'Expected deliverables',

    'works.title': 'Projects, Qyvera Technologies',
    'works.h1': 'Explore our projects in custom software, AI platforms, automation, and modern web systems.',

    'common.aria.back': 'Back to home',
    'common.aria.menu': 'Main navigation',
    'common.aria.social': 'Social links',
    'common.aria.footer': 'Footer navigation',

    '404.title': '404 — Qyvera Technologies',
    '404.subtitle': 'This page got lost in the void.<br><span class="subtitle-dim">It doesn\'t exist, or no longer does.</span>',
    '404.ticker': '— PAGE NOT FOUND — SIGNAL LOST — ERROR 0x404 — THIS PAGE DOESN\'T EXIST — COORDINATES: NULL — UNKNOWN DESTINATION — ',
    '404.aria.back': 'Back to home',
  };

  document.querySelectorAll('[data-i18n]').forEach(function (el) {
    const key = el.getAttribute('data-i18n');
    if (T[key] != null) el.innerHTML = T[key];
  });

  document.querySelectorAll('[data-i18n-attr]').forEach(function (el) {
    el.getAttribute('data-i18n-attr').split('|').forEach(function (pair) {
      const idx = pair.indexOf(':');
      if (idx < 0) return;
      const attr = pair.slice(0, idx).trim();
      const key = pair.slice(idx + 1).trim();
      if (T[key] != null) el.setAttribute(attr, T[key]);
    });
  });

  const titleKey = document.documentElement.getAttribute('data-i18n-title');
  if (titleKey && T[titleKey]) document.title = T[titleKey];

  const descMeta = document.querySelector('meta[name="description"]');
  if (descMeta && T['meta.description']) descMeta.setAttribute('content', T['meta.description']);

  window.__t = function (key) { return T[key]; };
})();

// ── TRANSLATIONS ──
const T = {
  en: {
    nav_how: 'How it works',
    nav_bank: 'Question bank',
    nav_tutors: 'Tutors',
    nav_pricing: 'Pricing',
    nav_about: 'About',
    nav_login: 'Log in',
    nav_start: 'Start free',
    footer_desc: "Jordan's most complete preparation platform for the Nazari theory driving test. Built by people who failed it first.",
    footer_product: 'Product',
    footer_company: 'Company',
    footer_legal: 'Legal',
    footer_links_product: ['Question bank', 'Mock exams', 'Road signs glossary', 'Progress tracker', 'Tutors'],
    footer_links_product_href: ['bank.html', 'bank.html#mock', 'bank.html#signs', 'dashboard.html', 'tutors.html'],
    footer_links_company: ['About us', 'Blog', 'For institutions', 'Become a tutor', 'Contact'],
    footer_links_company_href: ['about.html', 'blog.html', 'institutions.html', 'tutors.html#become', 'contact.html'],
    footer_links_legal: ['Privacy policy', 'Terms of use', 'Refund policy'],
    footer_links_legal_href: ['privacy.html', 'terms.html', 'refund.html'],
    footer_copy: '2024 NazariPro. Not affiliated with the Jordan Traffic Directorate.',
  },
  ar: {
    nav_how: 'كيف يعمل',
    nav_bank: 'بنك الأسئلة',
    nav_tutors: 'المدرّبون',
    nav_pricing: 'الأسعار',
    nav_about: 'من نحن',
    nav_login: 'تسجيل الدخول',
    nav_start: 'ابدأ مجاناً',
    footer_desc: 'المنصة الأكثر شمولاً في الأردن للتحضير لامتحان النظري. بنيناها لأننا رسبنا فيه أولاً.',
    footer_product: 'المنتج',
    footer_company: 'الشركة',
    footer_legal: 'قانوني',
    footer_links_product: ['بنك الأسئلة', 'اختبارات تجريبية', 'دليل اللافتات', 'تتبع التقدم', 'المدرّبون'],
    footer_links_product_href: ['bank.html', 'bank.html#mock', 'bank.html#signs', 'dashboard.html', 'tutors.html'],
    footer_links_company: ['من نحن', 'المدونة', 'للمؤسسات', 'كن مدرّباً', 'اتصل بنا'],
    footer_links_company_href: ['about.html', 'blog.html', 'institutions.html', 'tutors.html#become', 'contact.html'],
    footer_links_legal: ['سياسة الخصوصية', 'شروط الاستخدام', 'سياسة الاسترداد'],
    footer_links_legal_href: ['privacy.html', 'terms.html', 'refund.html'],
    footer_copy: '2024 NazariPro. غير تابع لمديرية الأمن العام - الإدارة العامة للسير.',
  }
};

let lang = localStorage.getItem('nz_lang') || 'en';

function setLang(l) {
  lang = l;
  localStorage.setItem('nz_lang', l);
  applyLang();
}

function applyLang() {
  const t = T[lang];
  document.querySelectorAll('[data-t]').forEach(el => {
    const key = el.dataset.t;
    if (t[key] !== undefined) el.textContent = t[key];
  });
  document.querySelectorAll('[data-t-href]').forEach(el => {
    const key = el.dataset.tHref;
    if (t[key] !== undefined) {
      const links = el.querySelectorAll('li');
      const hrefs = t[key];
      const textKey = key.replace('_href', '');
      const texts = t[textKey] || [];
      links.forEach((li, i) => {
        const a = li.querySelector('a');
        if (a) {
          if (texts[i]) a.textContent = texts[i];
          if (hrefs[i]) a.href = hrefs[i];
        }
      });
    }
  });
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
  document.body.classList.toggle('rtl', lang === 'ar');
  document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
  document.documentElement.setAttribute('lang', lang);
}

function injectNav(activePage) {
  const pages = [
    { key: 'nav_how',    href: 'index.html#how',    icon: 'ti-route',       page: '' },
    { key: 'nav_bank',   href: 'bank.html',          icon: 'ti-books',       page: 'bank' },
    { key: 'nav_tutors', href: 'tutors.html',         icon: 'ti-users',       page: 'tutors' },
    { key: 'nav_pricing',href: 'pricing.html',        icon: 'ti-badge',       page: 'pricing' },
    { key: 'nav_about',  href: 'about.html',          icon: 'ti-info-circle', page: 'about' },
  ];

  const navHtml = `
  <nav class="nav" role="navigation" aria-label="Main navigation">
    <a class="nav-logo" href="index.html">
      <svg class="logo-svg" width="36" height="36" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <circle cx="19" cy="19" r="17.5" stroke="#C9A84C" stroke-width="1.5" fill="rgba(201,168,76,0.1)"/>
        <circle cx="19" cy="19" r="10.5" stroke="#C9A84C" stroke-width="1.8" fill="none"/>
        <circle cx="19" cy="19" r="2.8" fill="#C9A84C"/>
        <line x1="19" y1="8.5" x2="19" y2="11.5" stroke="#C9A84C" stroke-width="1.8" stroke-linecap="round"/>
        <line x1="19" y1="26.5" x2="19" y2="29.5" stroke="#C9A84C" stroke-width="1.8" stroke-linecap="round"/>
        <line x1="8.5" y1="19" x2="11.5" y2="19" stroke="#C9A84C" stroke-width="1.8" stroke-linecap="round"/>
        <line x1="26.5" y1="19" x2="29.5" y2="19" stroke="#C9A84C" stroke-width="1.8" stroke-linecap="round"/>
        <path d="M19 15.5 L22.5 21.5 L19 20.2 L15.5 21.5 Z" fill="white" opacity="0.88"/>
        <path d="M14.5 23.5 L18 18.5" stroke="#C9A84C" stroke-width="1.4" stroke-linecap="round" opacity="0.55"/>
      </svg>
      <span class="nav-logo-text">نظري<span class="gold">Pro</span></span>
    </a>
    <ul class="nav-links" role="list">
      ${pages.map(p => `
        <li><a href="${p.href}" class="${activePage === p.page ? 'active' : ''}"><i class="ti ${p.icon}" aria-hidden="true"></i><span data-t="${p.key}">${T.en[p.key]}</span></a></li>
      `).join('')}
    </ul>
    <div class="nav-actions">
      <div class="nav-lang" role="group" aria-label="Language selector">
        <button class="lang-btn ${lang === 'en' ? 'active' : ''}" data-lang="en" onclick="setLang('en')" aria-label="Switch to English">EN</button>
        <button class="lang-btn ${lang === 'ar' ? 'active' : ''}" data-lang="ar" onclick="setLang('ar')" aria-label="Switch to Arabic">عربي</button>
      </div>
      <button class="btn-ghost-nav" onclick="location.href='login.html'" data-t="nav_login">Log in</button>
      <button class="btn-gold" onclick="location.href='pricing.html'" data-t="nav_start">Start free</button>
    </div>
  </nav>`;

  document.getElementById('nav-slot').innerHTML = navHtml;
}

function injectFooter() {
  const t = T[lang];
  const footerHtml = `
  <footer class="footer" role="contentinfo">
    <div class="footer-inner">
      <div class="footer-top">
        <div>
          <a class="nav-logo" href="index.html" style="text-decoration:none">
            <svg width="30" height="30" viewBox="0 0 38 38" fill="none" aria-hidden="true">
              <circle cx="19" cy="19" r="17.5" stroke="#C9A84C" stroke-width="1.5" fill="rgba(201,168,76,0.1)"/>
              <circle cx="19" cy="19" r="10.5" stroke="#C9A84C" stroke-width="1.8" fill="none"/>
              <circle cx="19" cy="19" r="2.8" fill="#C9A84C"/>
              <line x1="19" y1="8.5" x2="19" y2="11.5" stroke="#C9A84C" stroke-width="1.8" stroke-linecap="round"/>
              <line x1="19" y1="26.5" x2="19" y2="29.5" stroke="#C9A84C" stroke-width="1.8" stroke-linecap="round"/>
              <line x1="8.5" y1="19" x2="11.5" y2="19" stroke="#C9A84C" stroke-width="1.8" stroke-linecap="round"/>
              <line x1="26.5" y1="19" x2="29.5" y2="19" stroke="#C9A84C" stroke-width="1.8" stroke-linecap="round"/>
              <path d="M19 15.5 L22.5 21.5 L19 20.2 L15.5 21.5 Z" fill="white" opacity="0.88"/>
            </svg>
            <span class="nav-logo-text" style="font-size:18px">نظري<span class="gold">Pro</span></span>
          </a>
          <p class="footer-desc" data-t="footer_desc">${t.footer_desc}</p>
          <div class="nav-lang" style="display:inline-flex">
            <button class="lang-btn ${lang === 'en' ? 'active' : ''}" data-lang="en" onclick="setLang('en')">EN</button>
            <button class="lang-btn ${lang === 'ar' ? 'active' : ''}" data-lang="ar" onclick="setLang('ar')">عربي</button>
          </div>
        </div>
        <div class="footer-col">
          <h4 data-t="footer_product">${t.footer_product}</h4>
          <ul class="footer-links" data-t-href="footer_links_product_href">
            ${t.footer_links_product.map((item, i) => `<li><a href="${t.footer_links_product_href[i]}">${item}</a></li>`).join('')}
          </ul>
        </div>
        <div class="footer-col">
          <h4 data-t="footer_company">${t.footer_company}</h4>
          <ul class="footer-links" data-t-href="footer_links_company_href">
            ${t.footer_links_company.map((item, i) => `<li><a href="${t.footer_links_company_href[i]}">${item}</a></li>`).join('')}
          </ul>
        </div>
        <div class="footer-col">
          <h4 data-t="footer_legal">${t.footer_legal}</h4>
          <ul class="footer-links" data-t-href="footer_links_legal_href">
            ${t.footer_links_legal.map((item, i) => `<li><a href="${t.footer_links_legal_href[i]}">${item}</a></li>`).join('')}
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <span class="footer-copy">&#169; <span data-t="footer_copy">${t.footer_copy}</span></span>
        <span class="footer-copy">Made in Amman, Jordan</span>
      </div>
    </div>
  </footer>`;

  document.getElementById('footer-slot').innerHTML = footerHtml;
}

function initPage(activePage) {
  injectNav(activePage);
  injectFooter();
  applyLang();
}

/* Language switcher
   All translatable copy lives inline in the markup as
   <span class="i18n i18n-en"> / i18n-zh / i18n-es ... . Switching only flips
   <html data-lang>; the CSS reveals the matching spans. Attribute values
   (placeholder, aria-label) are swapped here from data-zh / data-es / etc. */

(function () {
  var KEY = 'tg-lang';
  var NAMES = {
    en: 'English',
    zh: '中文',
    es: 'Español',
    fr: 'Français',
    de: 'Deutsch',
    it: 'Italiano',
    ja: '日本語',
    ko: '한국어',
    ar: 'العربية'
  };
  var VALID = ['en', 'zh', 'es', 'fr', 'de', 'it', 'ja', 'ko', 'ar'];
  var RTL = ['ar'];
  var LANG_MAP = { zh: 'zh-CN', ja: 'ja-JP', ko: 'ko-KR' };

  function current() {
    var v = (document.documentElement.getAttribute('data-lang') || '').toLowerCase();
    return VALID.indexOf(v) > -1 ? v : 'en';
  }

  function swapAttrs(lang) {
    if (lang === 'en') return;
    var nodes = document.querySelectorAll('[data-' + lang + '][data-i18n-attr]');
    Array.prototype.forEach.call(nodes, function (el) {
      el.getAttribute('data-i18n-attr').split('|').forEach(function (attr) {
        el.setAttribute(attr.trim(), el.getAttribute('data-' + lang));
      });
    });
  }

  function restoreAttrs() {
    var nodes = document.querySelectorAll('[data-i18n-attr]');
    Array.prototype.forEach.call(nodes, function (el) {
      el.getAttribute('data-i18n-attr').split('|').forEach(function (attr) {
        var a = attr.trim();
        if (el.hasAttribute('data-orig-' + a)) el.setAttribute(a, el.getAttribute('data-orig-' + a));
      });
    });
  }

  function rememberOriginals() {
    var nodes = document.querySelectorAll('[data-i18n-attr]');
    Array.prototype.forEach.call(nodes, function (el) {
      el.getAttribute('data-i18n-attr').split('|').forEach(function (attr) {
        var a = attr.trim();
        if (!el.hasAttribute('data-orig-' + a)) el.setAttribute('data-orig-' + a, el.getAttribute(a) || '');
      });
    });
  }

  function applyFallback(lang) {
    Array.prototype.forEach.call(document.querySelectorAll('.i18n-fallback'), function (el) {
      el.classList.remove('i18n-fallback');
    });
    if (lang === 'en') return;
    var target = '.i18n-' + lang;
    var parents = [];
    Array.prototype.forEach.call(document.querySelectorAll('.i18n'), function (el) {
      var p = el.parentElement;
      if (p && parents.indexOf(p) < 0) parents.push(p);
    });
    Array.prototype.forEach.call(parents, function (p) {
      if (!p.querySelector(target)) {
        Array.prototype.forEach.call(p.querySelectorAll('.i18n-en'), function (el) {
          el.classList.add('i18n-fallback');
        });
      }
    });
  }

  function set(lang, persist) {
    if (VALID.indexOf(lang) < 0) lang = 'en';
    document.documentElement.setAttribute('data-lang', lang);
    document.documentElement.setAttribute('lang', LANG_MAP[lang] || lang);
    document.documentElement.setAttribute('dir', RTL.indexOf(lang) > -1 ? 'rtl' : 'ltr');
    var cur = document.querySelector('[data-lang-current]');
    if (cur) cur.textContent = NAMES[lang];
    Array.prototype.forEach.call(document.querySelectorAll('[data-lang-set]'), function (b) {
      b.classList.toggle('is-active', b.getAttribute('data-lang-set') === lang);
      b.setAttribute('aria-current', b.getAttribute('data-lang-set') === lang ? 'true' : 'false');
    });
    restoreAttrs();
    if (lang !== 'en') swapAttrs(lang);
    applyFallback(lang);
    if (persist !== false) {
      try { localStorage.setItem(KEY, lang); } catch (e) { }
    }
    document.dispatchEvent(new CustomEvent('tg:lang', { detail: { lang: lang } }));
  }

  function init() {
    rememberOriginals();
    var saved = null;
    try { saved = localStorage.getItem(KEY); } catch (e) { }
    var fromUrl = (location.search.match(/[?&]lang=([a-z]{2})/i) || [])[1];
    set(fromUrl || saved || 'en', false);

    document.addEventListener('click', function (e) {
      var btn = e.target.closest('[data-lang-set]');
      if (btn) {
        e.preventDefault();
        set(btn.getAttribute('data-lang-set'));
        var wrap = btn.closest('.lang');
        if (wrap) wrap.classList.remove('is-open');
        return;
      }
      var toggle = e.target.closest('[data-lang-toggle]');
      if (toggle) {
        e.preventDefault();
        toggle.parentElement.classList.toggle('is-open');
        return;
      }
      if (!e.target.closest('.lang')) {
        Array.prototype.forEach.call(document.querySelectorAll('.lang.is-open'), function (l) { l.classList.remove('is-open'); });
      }
    });
  }

  window.TG = { setLang: set, getLang: current };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();

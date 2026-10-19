/* Slot renderer
   Any container carrying [data-slot] is filled from the site's data files,
   so content added or removed in the editor shows up on the page:
     data-slot="products"  data-cat="c1"       data-limit="8"
     data-slot="blog"                          data-limit="6"
     data-slot="gallery"   data-key="showroom"
     data-slot="img"       data-key="index.hero"
   Whatever is hardcoded in the HTML is kept as the fallback: a slot is only
   replaced when its data actually exists, so a missing file never blanks a
   page that already renders fine. */
(function () {
  var LANGS = ['en', 'zh', 'es', 'fr', 'de', 'it', 'ja', 'ko', 'ar'];

  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;')
      .replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }

  function spans(v) {
    return LANGS.map(function (l) {
      return '<span class="i18n i18n-' + l + '">' + esc((v && v[l]) || '') + '</span>';
    }).join('');
  }

  function lang() {
    return document.documentElement.getAttribute('data-lang') || 'en';
  }

  function pick(v) {
    if (!v) return '';
    if (typeof v === 'string') return v;
    return v[lang()] || v.en || '';
  }

  var GREY = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 240">' +
    '<rect width="320" height="240" fill="#eceff3"/>' +
    '<circle cx="160" cy="120" r="30" fill="none" stroke="#c3ccd6" stroke-width="4"/>' +
    '</svg>');

  function media() {
    return window.TGMedia || {};
  }

  function prodImg(slug) {
    var p = media().products || {};
    if (p[slug] && p[slug][0]) return p[slug][0];
    var g = window.TGImgs && window.TGImgs[slug];
    if (g && g[0]) return g[0];
    return GREY;
  }

  function pageImg(key, fallback) {
    var pg = media().pages || {};
    return pg[key] || fallback || GREY;
  }

  function each(sel, fn) {
    Array.prototype.forEach.call(document.querySelectorAll(sel), fn);
  }

  /* draw the placeholder motifs in freshly injected markup */
  function paint(el) {
    if (window.TGPh) {
      try { window.TGPh.render(el); } catch (e) { /* ignore */ }
    }
  }

  function prodCard(item, slug) {
    return '<a class="prod-card reveal is-in" href="product.html?slug=' + esc(slug) + '">' +
      '<div class="prod-card__media"><img class="ph-img" src="' + esc(prodImg(slug)) +
      '" alt="' + esc(pick(item.title)) + '" loading="lazy"></div>' +
      '<div class="prod-card__body"><h4>' + spans(item.title) + '</h4>' +
      '<p>' + spans(item.sub || item.lead || item.intro) + '</p></div></a>';
  }

  function postCard(a, id) {
    var src = (media().pages || {})['blog.' + id];
    /* no photo yet? fall back to the same drawn placeholder the page used */
    var inner = src
      ? '<img class="ph-img" src="' + esc(src) + '" alt="' + esc(pick(a.title)) + '" loading="lazy">'
      : '<span class="ph" data-ph="' + esc(a.ph || 'blog') + '"></span>';
    return '<a class="post reveal is-in" href="blog-post.html?id=' + esc(id) + '">' +
      '<div class="post__media">' + inner + '</div>' +
      '<div class="post__body"><div class="post__meta"><span>' + esc(a.date || '') +
      '</span><i></i><span>' + spans(a.cat) + '</span></div>' +
      '<h4>' + spans(a.title) + '</h4><p>' + spans(a.excerpt) + '</p></div></a>';
  }

  function galleryItem(it) {
    return '<div class="reveal is-in" style="aspect-ratio:1/1">' +
      '<img class="ph-img" src="' + esc(it.img || GREY) +
      '" alt="' + esc(pick(it.title)) + '" loading="lazy"></div>';
  }

  function render() {
    var P = window.TGProduct || {};
    var B = window.TGBlog || {};
    var M = media();

    /* product grids: data-cat="c1,c2" or empty for every product */
    each('[data-slot="products"]', function (el) {
      var cats = (el.getAttribute('data-cat') || '').split(',').filter(Boolean);
      var limit = parseInt(el.getAttribute('data-limit') || '0', 10);
      var items = P.items || {};
      var list = (P.order || []).filter(function (slug) {
        var it = items[slug];
        if (!it) return false;
        return !cats.length || cats.indexOf(it.cat) >= 0;
      });
      if (limit > 0) list = list.slice(0, limit);
      if (!list.length) return;
      el.innerHTML = list.map(function (s) { return prodCard(items[s], s); }).join('');
      paint(el);
    });

    /* article list */
    each('[data-slot="blog"]', function (el) {
      var limit = parseInt(el.getAttribute('data-limit') || '0', 10);
      var order = B.order || Object.keys(B).filter(function (k) { return k !== 'order'; });
      var list = order.filter(function (id) { return B[id]; });
      if (limit > 0) list = list.slice(0, limit);
      if (!list.length) return;
      el.innerHTML = list.map(function (id) { return postCard(B[id], id); }).join('');
      paint(el);
    });

    /* image collections */
    each('[data-slot="gallery"]', function (el) {
      var arr = M[el.getAttribute('data-key')] || [];
      if (!arr.length) return;
      el.innerHTML = arr.map(galleryItem).join('');
    });

    /* single images: swap the src of every <img> inside the container */
    each('[data-slot="img"]', function (el) {
      var src = pageImg(el.getAttribute('data-key'), '');
      var pg = media().pages || {};
      if (!pg[el.getAttribute('data-key')]) return;
      Array.prototype.forEach.call(el.querySelectorAll('img'), function (im) {
        im.src = src;
      });
      if (!el.querySelector('img') && el.tagName === 'IMG') el.src = src;
    });
  }

  /* page-level photos: TGMedia.pages['<page>.img<n>'] replaces the n-th
     plain <img> of the page, so images uploaded in the editor show up
     here too. Cards and detail pages are skipped - they use their own
     keys (products.<slug> / blog.<id>). */
  function applyPageImages() {
    var pg = media().pages || {};
    var base = (location.pathname.split('/').pop() || 'index.html').replace(/\.html$/, '');
    if (base === 'product' || base === 'blog-post') return;
    var n = 0;
    Array.prototype.forEach.call(document.images, function (im) {
      if (im.closest && im.closest('a[href*="product.html"], a[href*="blog-post.html"]')) return;
      var key = base + '.img' + (n++);
      if (pg[key]) im.src = pg[key];
    });
  }

  function boot() {
    try {
      render();
    } catch (e) {
      /* keep whatever the HTML already rendered */
      if (window.console) console.warn('slot render failed', e);
    }
    try {
      applyPageImages();
    } catch (e) {
      if (window.console) console.warn('page image apply failed', e);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
  window.TGSlots = { render: boot };
})();

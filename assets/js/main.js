/* Page interactions: drawer, mega menu, carousel, FAQ, counters, reveal,
   demo-only quote form. Nothing here talks to a network endpoint. */

(function () {
  function ready(fn) {
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', fn);
    else fn();
  }

  ready(function () {

    /* ---------- mobile drawer ---------- */
    var drawer = document.querySelector('[data-drawer]');
    function openDrawer() {
      if (!drawer) return;
      drawer.classList.add('is-open');
      document.body.classList.add('is-locked');
    }
    function closeDrawer() {
      if (!drawer) return;
      drawer.classList.remove('is-open');
      document.body.classList.remove('is-locked');
    }
    document.addEventListener('click', function (e) {
      if (e.target.closest('[data-drawer-open]')) { openDrawer(); return; }
      if (e.target.closest('[data-drawer-close]')) { closeDrawer(); return; }
      var top = e.target.closest('.drawer__group .drawer__top');
      if (top) {
        var sub = top.parentElement.querySelector('.drawer__sub');
        if (sub) {
          e.preventDefault();
          top.parentElement.classList.toggle('is-open');
        }
      }
      var cat = e.target.closest('.drawer__cat');
      if (cat) {
        e.preventDefault();
        cat.parentElement.classList.toggle('is-open');
      }
    });

    /* ---------- mega menu (hover-intent) ----------
       Rules so the menu stops feeling twitchy:
       1. Only the trigger link can open a menu - the floating panel never
          opens anything, no matter how far it reaches.
       2. The pointer must dwell on a trigger before anything opens, so a
          sweep across the bar (or a cursor passing by) opens nothing.
       3. Switching straight to another top-level menu also needs a dwell,
          so you cannot accidentally jump between panels.
       4. Leaving the bar/panel, scrolling or pressing Esc closes it. */
    var megaItems = Array.prototype.slice.call(document.querySelectorAll('.nav__item.has-mega'));
    if (megaItems.length) {
      var OPEN_DELAY = 200;    /* dwell needed on a trigger, ms */
      var CLOSE_DELAY = 240;   /* grace period after leaving, ms */
      var BRIDGE = 16;         /* tolerated gap between trigger and panel, px */
      var openTimer = null, closeTimer = null, current = null, pending = null;

      function closeNow() {
        /* the visual editor pins a menu open (window.__tgNavPin, set by
           bridge.js on click) - hover-intent must not close it */
        if (window.__tgNavPin) return;
        clearTimeout(openTimer);
        clearTimeout(closeTimer);
        pending = null;
        if (current) { current.classList.remove('is-open'); current = null; }
      }
      function openItem(item) {
        if (current && current !== item) current.classList.remove('is-open');
        current = item;
        item.classList.add('is-open');
        pending = null;
      }
      /* geometric hit-test on the trigger links only */
      function hitTrigger(x, y) {
        for (var i = 0; i < megaItems.length; i++) {
          var link = megaItems[i].querySelector('.nav__link');
          if (!link) continue;
          var r = link.getBoundingClientRect();
          if (x >= r.left && x <= r.right && y >= r.top && y <= r.bottom) return megaItems[i];
        }
        return null;
      }
      /* is the pointer inside the panel that is currently open? */
      function inPanel(x, y) {
        if (!current) return false;
        var m = current.querySelector('.mega');
        if (!m) return false;
        var r = m.getBoundingClientRect();
        if (!r.width || !r.height) return false;
        return x >= r.left - 6 && x <= r.right + 6 && y >= r.top - BRIDGE && y <= r.bottom + 6;
      }

      document.addEventListener('mousemove', function (e) {
        var x = e.clientX, y = e.clientY;
        var hit = hitTrigger(x, y);

        if (hit) {                                  /* over a trigger */
          clearTimeout(closeTimer);
          if (current === hit) { clearTimeout(openTimer); pending = null; return; }
          if (pending !== hit) {                    /* (re)start the dwell */
            pending = hit;
            clearTimeout(openTimer);
            openTimer = setTimeout(function () {
              if (pending === hit) openItem(hit);
            }, OPEN_DELAY);
          }
          return;
        }

        if (inPanel(x, y)) {                        /* inside the open panel */
          clearTimeout(closeTimer);
          clearTimeout(openTimer);
          pending = null;
          return;
        }

        clearTimeout(openTimer);                    /* elsewhere */
        pending = null;
        if (current) {
          clearTimeout(closeTimer);
          closeTimer = setTimeout(closeNow, CLOSE_DELAY);
        }
      }, { passive: true });

      /* deliberate exits */
      document.addEventListener('mouseleave', closeNow);
      window.addEventListener('scroll', closeNow, { passive: true });
      window.addEventListener('blur', closeNow);
      document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeNow(); });

      /* keyboard focus opens, touch tap toggles */
      megaItems.forEach(function (item) {
        var link = item.querySelector('.nav__link');
        /* keyboard only: :focus-visible is not set for plain mouse clicks */
        item.addEventListener('focusin', function () {
          var visible = false;
          try { visible = link.matches(':focus-visible'); } catch (err) { visible = true; }
          if (!visible) return;
          clearTimeout(closeTimer);
          openItem(item);
        });
        item.addEventListener('focusout', function (e) {
          if (!item.contains(e.relatedTarget)) {
            clearTimeout(closeTimer);
            closeTimer = setTimeout(closeNow, CLOSE_DELAY);
          }
        });
        link.addEventListener('click', function (e) {
          if (window.matchMedia('(hover: none)').matches) {
            e.preventDefault();
            if (current === item) closeNow(); else openItem(item);
          }
        });
      });

      document.addEventListener('click', function (e) {
        if (!e.target.closest('.nav__item')) closeNow();
      });
    }

    /* tiered mega: dwell on a category before switching the child-items pane,
       so sliding down the column on the way to the items does not flip panes */
    Array.prototype.forEach.call(document.querySelectorAll('.mega__cat'), function (cat) {
      var dwell;
      function activate() {
        var mega = cat.closest('.mega');
        var idx = cat.getAttribute('data-cat');
        Array.prototype.forEach.call(mega.querySelectorAll('.mega__cat'), function (c) {
          c.classList.toggle('is-active', c === cat);
        });
        Array.prototype.forEach.call(mega.querySelectorAll('.mega__pane'), function (p) {
          p.classList.toggle('is-active', p.getAttribute('data-pane') === idx);
        });
      }
      cat.addEventListener('mouseenter', function () {
        clearTimeout(dwell);
        dwell = setTimeout(activate, 120);
      });
      cat.addEventListener('mouseleave', function () { clearTimeout(dwell); });
      cat.addEventListener('click', activate);
    });

    /* ---------- faq accordion ---------- */
    Array.prototype.forEach.call(document.querySelectorAll('.faq__item .faq__q'), function (q) {
      q.addEventListener('click', function () {
        var item = q.closest('.faq__item');
        var wasOpen = item.classList.contains('is-open');
        var group = item.parentElement;
        Array.prototype.forEach.call(group.querySelectorAll('.faq__item'), function (i) { i.classList.remove('is-open'); });
        if (!wasOpen) item.classList.add('is-open');
      });
    });

    /* ---------- testimonial carousel ---------- */
    Array.prototype.forEach.call(document.querySelectorAll('.tns'), function (tns) {
      var track = tns.querySelector('.tns__track');
      if (!track) return;
      var slides = track.children.length;
      var idx = 0;
      var dotsBox = tns.querySelector('.tns__dots');
      var perView = function () {
        var w = window.innerWidth;
        return w <= 720 ? 1 : (w <= 1100 ? 2 : 3);
      };
      var maxIdx = function () { return Math.max(0, slides - perView()); };

      function buildDots() {
        if (!dotsBox) return;
        dotsBox.innerHTML = '';
        for (var i = 0; i <= maxIdx(); i++) {
          var d = document.createElement('span');
          d.className = 'tns__dot' + (i === idx ? ' is-active' : '');
          d.setAttribute('data-idx', i);
          dotsBox.appendChild(d);
        }
      }
      function go(i) {
        idx = Math.min(Math.max(i, 0), maxIdx());
        var w = track.children[0].getBoundingClientRect().width + 24;
        track.style.transform = 'translateX(' + (-idx * w) + 'px)';
        if (dotsBox) {
          Array.prototype.forEach.call(dotsBox.children, function (d, n) {
            d.classList.toggle('is-active', n === idx);
          });
        }
      }
      var prev = tns.querySelector('[data-tns-prev]');
      var next = tns.querySelector('[data-tns-next]');
      if (prev) prev.addEventListener('click', function () { go(idx - 1); });
      if (next) next.addEventListener('click', function () { go(idx + 1); });
      if (dotsBox) {
        dotsBox.addEventListener('click', function (e) {
          var d = e.target.closest('.tns__dot');
          if (d) go(parseInt(d.getAttribute('data-idx'), 10));
        });
      }
      buildDots();
      go(0);
      window.addEventListener('resize', function () { buildDots(); go(idx); });
    });

    /* ---------- counters ---------- */
    var counters = document.querySelectorAll('[data-count]');
    if (counters.length && 'IntersectionObserver' in window) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (!en.isIntersecting) return;
          var el = en.target;
          var target = parseFloat(el.getAttribute('data-count'));
          var suffix = el.getAttribute('data-suffix') || '';
          var dur = 1200, start = null;
          function step(ts) {
            if (!start) start = ts;
            var p = Math.min((ts - start) / dur, 1);
            var val = Math.round(target * (1 - Math.pow(1 - p, 3)));
            el.textContent = val + (p === 1 ? suffix : '');
            if (p < 1) requestAnimationFrame(step);
          }
          requestAnimationFrame(step);
          io.unobserve(el);
        });
      }, { threshold: .4 });
      Array.prototype.forEach.call(counters, function (c) { io.observe(c); });
    } else {
      Array.prototype.forEach.call(counters, function (c) {
        c.textContent = c.getAttribute('data-count') + (c.getAttribute('data-suffix') || '');
      });
    }

    /* ---------- reveal on scroll ---------- */
    var reveals = document.querySelectorAll('.reveal');
    if (reveals.length && 'IntersectionObserver' in window) {
      var ro = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (en.isIntersecting) { en.target.classList.add('is-in'); ro.unobserve(en.target); }
        });
      }, { threshold: .12, rootMargin: '0px 0px -40px' });
      Array.prototype.forEach.call(reveals, function (r) { ro.observe(r); });
    } else {
      Array.prototype.forEach.call(reveals, function (r) { r.classList.add('is-in'); });
    }

    /* ---------- category filter tabs ---------- */
    Array.prototype.forEach.call(document.querySelectorAll('.filter-bar'), function (bar) {
      var btns = bar.querySelectorAll('button');
      var scope = document.querySelector(bar.getAttribute('data-filter-target'));
      if (!scope) return;
      Array.prototype.forEach.call(btns, function (b) {
        b.addEventListener('click', function () {
          Array.prototype.forEach.call(btns, function (x) { x.classList.remove('is-active'); });
          b.classList.add('is-active');
          var f = b.getAttribute('data-filter');
          Array.prototype.forEach.call(scope.querySelectorAll('[data-cat]'), function (card) {
            card.style.display = (f === 'all' || card.getAttribute('data-cat') === f) ? '' : 'none';
          });
        });
      });
    });

    /* ---------- demo quote form ---------- */
    Array.prototype.forEach.call(document.querySelectorAll('[data-demo-form]'), function (form) {
      form.setAttribute('novalidate', 'novalidate');
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        var ok = true;
        Array.prototype.forEach.call(form.querySelectorAll('.field'), function (field) {
          var input = field.querySelector('input, textarea, select');
          if (!input || !input.hasAttribute('required')) return;
          var bad = !input.value.trim() || (input.type === 'email' && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(input.value));
          field.classList.toggle('has-error', bad);
          if (bad) ok = false;
        });
        var box = form.querySelector('.form-ok');
        if (ok && box) {
          box.classList.add('is-on');
          form.reset();
          setTimeout(function () { box.classList.remove('is-on'); }, 6000);
        }
      });
      form.addEventListener('input', function (e) {
        var field = e.target.closest('.field');
        if (field) field.classList.remove('has-error');
      });
    });

    /* ---------- back to top ---------- */
    var toTop = document.querySelector('[data-to-top]');
    if (toTop) {
      toTop.addEventListener('click', function () { window.scrollTo({ top: 0, behavior: 'smooth' }); });
      window.addEventListener('scroll', function () {
        toTop.classList.toggle('is-on', window.scrollY > 600);
      });
    }

    /* ---------- smooth anchor with header offset ---------- */
    document.addEventListener('click', function (e) {
      var a = e.target.closest('a[href^="#"]');
      if (!a) return;
      var id = a.getAttribute('href').slice(1);
      if (!id) return;
      var el = document.getElementById(id);
      if (!el) return;
      e.preventDefault();
      var y = el.getBoundingClientRect().top + window.scrollY - 96;
      window.scrollTo({ top: y, behavior: 'smooth' });
    });

    /* ---------- re-render placeholders when language changes ---------- */
    document.addEventListener('tg:lang', function () {
      Array.prototype.forEach.call(document.querySelectorAll('[data-ph]'), function (el) {
        el.dataset.phDone = '0';
      });
      if (window.TGPh) window.TGPh.render(document);
    });
  });
})();

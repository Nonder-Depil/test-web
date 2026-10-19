/* Placeholder art generator
   Renders inline SVG motifs into any element carrying [data-ph="type"].
   No external images are downloaded: every motif is drawn locally so the
   replica works fully offline. Replace later by dropping real assets into
   <img src="..."> — the data-ph attribute can stay as documentation. */

(function () {
  var PALETTES = [
    { bg: '#f6ece7', a: '#631e00', b: '#ffc137', c: '#8a4a2b' },
    { bg: '#eaf0f5', a: '#143852', b: '#ffc137', c: '#3d6f92' },
    { bg: '#fbf3e2', a: '#8a5a12', b: '#ffc137', c: '#c9922f' },
    { bg: '#eef1ec', a: '#2f4a37', b: '#c3d3c5', c: '#5f7d68' },
    { bg: '#f2eef6', a: '#4a2d63', b: '#b39dd6', c: '#6d4a8a' },
    { bg: '#fdeee9', a: '#8c3319', b: '#f0a58c', c: '#b8543a' }
  ];

  function pal(seed) {
    var n = 0;
    seed = String(seed || '');
    for (var i = 0; i < seed.length; i++) n += seed.charCodeAt(i);
    return PALETTES[n % PALETTES.length];
  }

  function wrap(p, inner) {
    return '<svg viewBox="0 0 320 240" preserveAspectRatio="xMidYMid slice" role="img" aria-hidden="true">' +
      '<defs><linearGradient id="g' + p.a.slice(1) + '" x1="0" y1="0" x2="1" y2="1">' +
      '<stop offset="0" stop-color="' + p.bg + '"/><stop offset="1" stop-color="' + p.c + '" stop-opacity=".22"/>' +
      '</linearGradient></defs>' +
      '<rect width="320" height="240" fill="url(#g' + p.a.slice(1) + ')"/>' +
      inner + '</svg>';
  }

  var ART = {
    hero: function (p) {
      return wrap(p,
        '<circle cx="96" cy="98" r="52" fill="' + p.a + '" opacity=".14"/>' +
        '<circle cx="96" cy="98" r="38" fill="none" stroke="' + p.a + '" stroke-width="3"/>' +
        '<circle cx="96" cy="98" r="26" fill="' + p.b + '"/>' +
        '<path d="M78 60 L88 98 L96 112 L104 98 L114 60" fill="none" stroke="' + p.a + '" stroke-width="6" stroke-linecap="round"/>' +
        '<rect x="168" y="70" width="86" height="86" rx="18" fill="' + p.a + '" opacity=".12"/>' +
        '<path d="M180 118 h62 v40 a10 10 0 0 1 -10 10 h-42 a10 10 0 0 1 -10 -10 z" fill="' + p.a + '" opacity=".8"/>' +
        '<path d="M180 118 l10 -34 l21 20 l21 -20 l10 34 z" fill="' + p.b + '"/>' +
        '<circle cx="248" cy="180" r="30" fill="' + p.b + '" opacity=".55"/>' +
        '<circle cx="248" cy="180" r="18" fill="none" stroke="' + p.a + '" stroke-width="2.5"/>' +
        '<path d="M40 190 h240" stroke="' + p.a + '" stroke-width="2" opacity=".25"/>');
    },
    medals: function (p) {
      return wrap(p,
        '<path d="M120 44 l16 44 l-16 20 l-16 -20 z" fill="' + p.b + '"/>' +
        '<path d="M104 88 h48 l-24 26 z" fill="' + p.a + '" opacity=".35"/>' +
        '<circle cx="136" cy="156" r="46" fill="' + p.b + '"/>' +
        '<circle cx="136" cy="156" r="36" fill="none" stroke="' + p.a + '" stroke-width="3"/>' +
        '<path d="M120 156 l10 12 l22 -26" fill="none" stroke="' + p.a + '" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>' +
        '<circle cx="228" cy="86" r="26" fill="' + p.a + '" opacity=".18"/>' +
        '<circle cx="228" cy="86" r="16" fill="none" stroke="' + p.a + '" stroke-width="2.5"/>');
    },
    pins: function (p) {
      return wrap(p,
        '<path d="M136 52 l44 18 v46 c0 30 -22 52 -44 64 c-22 -12 -44 -34 -44 -64 v-46 z" fill="' + p.b + '"/>' +
        '<path d="M136 52 l44 18 v46 c0 30 -22 52 -44 64 z" fill="' + p.a + '" opacity=".22"/>' +
        '<path d="M118 116 l12 14 l28 -32" fill="none" stroke="' + p.a + '" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>' +
        '<path d="M92 200 h88" stroke="' + p.a + '" stroke-width="3" opacity=".4" stroke-linecap="round"/>' +
        '<circle cx="248" cy="70" r="22" fill="' + p.a + '" opacity=".16"/>');
    },
    coins: function (p) {
      return wrap(p,
        '<circle cx="140" cy="120" r="60" fill="' + p.b + '"/>' +
        '<circle cx="140" cy="120" r="48" fill="none" stroke="' + p.a + '" stroke-width="3.5" stroke-dasharray="7 6"/>' +
        '<path d="M140 92 l9 20 l22 2 l-16 15 l5 21 l-20 -11 l-20 11 l5 -21 l-16 -15 l22 -2 z" fill="' + p.a + '"/>' +
        '<ellipse cx="244" cy="176" rx="40" ry="16" fill="' + p.a + '" opacity=".14"/>' +
        '<circle cx="244" cy="168" r="20" fill="' + p.a + '" opacity=".18"/>');
    },
    keychains: function (p) {
      return wrap(p,
        '<circle cx="112" cy="86" r="30" fill="none" stroke="' + p.a + '" stroke-width="8"/>' +
        '<rect x="120" y="112" width="12" height="66" rx="6" fill="' + p.a + '" opacity=".7"/>' +
        '<rect x="104" y="160" width="46" height="46" rx="12" fill="' + p.b + '"/>' +
        '<circle cx="127" cy="183" r="9" fill="' + p.a + '"/>' +
        '<rect x="196" y="96" width="70" height="70" rx="16" fill="' + p.a + '" opacity=".16"/>');
    },
    lanyards: function (p) {
      return wrap(p,
        '<path d="M112 46 l44 96 l44 -96" fill="none" stroke="' + p.a + '" stroke-width="14" stroke-linecap="round"/>' +
        '<path d="M112 46 l44 96 l44 -96" fill="none" stroke="' + p.b + '" stroke-width="4" stroke-dasharray="12 10"/>' +
        '<rect x="134" y="146" width="44" height="58" rx="7" fill="' + p.b + '"/>' +
        '<rect x="142" y="158" width="28" height="6" rx="3" fill="' + p.a + '" opacity=".6"/>' +
        '<rect x="142" y="170" width="20" height="6" rx="3" fill="' + p.a + '" opacity=".4"/>' +
        '<circle cx="156" cy="196" r="5" fill="' + p.a + '"/>');
    },
    patches: function (p) {
      return wrap(p,
        '<rect x="86" y="66" width="150" height="112" rx="26" fill="' + p.b + '"/>' +
        '<rect x="98" y="78" width="126" height="88" rx="18" fill="none" stroke="' + p.a + '" stroke-width="3" stroke-dasharray="9 7"/>' +
        '<path d="M124 112 l14 18 l30 -34" fill="none" stroke="' + p.a + '" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>' +
        '<circle cx="248" cy="192" r="24" fill="' + p.a + '" opacity=".16"/>');
    },
    pvc: function (p) {
      return wrap(p,
        '<path d="M90 120 c0 -34 26 -58 60 -58 c38 0 70 24 70 58 c0 36 -32 62 -70 62 c-34 0 -60 -28 -60 -62 z" fill="' + p.b + '"/>' +
        '<path d="M112 106 c10 -12 26 -12 34 0 c8 -12 24 -12 34 0" fill="none" stroke="' + p.a + '" stroke-width="7" stroke-linecap="round"/>' +
        '<circle cx="120" cy="140" r="7" fill="' + p.a + '"/><circle cx="204" cy="140" r="7" fill="' + p.a + '"/>' +
        '<rect x="60" y="192" width="46" height="18" rx="9" fill="' + p.a + '" opacity=".2"/>');
    },
    silicone: function (p) {
      return wrap(p,
        '<rect x="78" y="72" width="164" height="100" rx="50" fill="none" stroke="' + p.b + '" stroke-width="26"/>' +
        '<rect x="78" y="72" width="164" height="100" rx="50" fill="none" stroke="' + p.a + '" stroke-width="2" opacity=".5"/>' +
        '<path d="M132 100 h56 M132 122 h56 M132 144 h34" stroke="' + p.a + '" stroke-width="6" stroke-linecap="round" opacity=".7"/>');
    },
    leather: function (p) {
      return wrap(p,
        '<rect x="80" y="74" width="160" height="96" rx="12" fill="' + p.a + '"/>' +
        '<rect x="92" y="86" width="136" height="72" rx="8" fill="none" stroke="' + p.b + '" stroke-width="2.5" stroke-dasharray="8 6"/>' +
        '<circle cx="112" cy="122" r="8" fill="' + p.bg + '"/>' +
        '<path d="M140 112 h48 M140 132 h30" stroke="' + p.b + '" stroke-width="5" stroke-linecap="round" opacity=".8"/>');
    },
    wooden: function (p) {
      return wrap(p,
        '<rect x="76" y="70" width="168" height="104" rx="10" fill="' + p.c + '"/>' +
        '<path d="M76 96 q42 -14 84 0 t84 0 M76 128 q42 -14 84 0 t84 0 M76 158 q42 -14 84 0 t84 0" fill="none" stroke="' + p.bg + '" stroke-width="3" opacity=".45"/>' +
        '<circle cx="160" cy="122" r="30" fill="none" stroke="' + p.b + '" stroke-width="3"/>' +
        '<path d="M148 122 l8 10 l18 -20" fill="none" stroke="' + p.b + '" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>');
    },
    promotional: function (p) {
      return wrap(p,
        '<rect x="70" y="96" width="110" height="20" rx="10" transform="rotate(-24 125 106)" fill="' + p.b + '"/>' +
        '<path d="M186 78 l26 0 l-8 16 l-26 0 z" fill="' + p.a + '"/>' +
        '<rect x="150" y="120" width="90" height="76" rx="10" fill="' + p.a + '" opacity=".85"/>' +
        '<rect x="164" y="134" width="62" height="34" rx="5" fill="' + p.b + '"/>' +
        '<path d="M212 120 q18 26 0 46" fill="none" stroke="' + p.a + '" stroke-width="7"/>');
    },
    hats: function (p) {
      return wrap(p,
        '<path d="M92 148 c0 -44 30 -72 68 -72 s68 28 68 72 z" fill="' + p.b + '"/>' +
        '<path d="M92 148 c0 -44 30 -72 68 -72 c-8 20 -12 44 -12 72 z" fill="' + p.a + '" opacity=".28"/>' +
        '<path d="M92 148 h136 c14 0 26 10 30 24 h-166 c4 -14 16 -24 30 -24 z" fill="' + p.a + '"/>' +
        '<circle cx="160" cy="88" r="9" fill="' + p.a + '" opacity=".6"/>');
    },
    trophy: function (p) {
      return wrap(p,
        '<path d="M112 60 h96 v34 a48 48 0 0 1 -96 0 z" fill="' + p.b + '"/>' +
        '<path d="M112 70 h-24 v12 a26 26 0 0 0 22 26 M208 70 h24 v12 a26 26 0 0 1 -22 26" fill="none" stroke="' + p.a + '" stroke-width="6"/>' +
        '<rect x="150" y="140" width="20" height="36" fill="' + p.a + '"/>' +
        '<rect x="124" y="176" width="72" height="16" rx="5" fill="' + p.a + '"/>' +
        '<rect x="134" y="192" width="52" height="12" rx="4" fill="' + p.a + '" opacity=".55"/>');
    },
    bottle: function (p) {
      return wrap(p,
        '<circle cx="106" cy="92" r="26" fill="none" stroke="' + p.a + '" stroke-width="10"/>' +
        '<rect x="126" y="104" width="96" height="26" rx="13" fill="' + p.b + '"/>' +
        '<path d="M196 130 h24 a10 10 0 0 1 -4 18 h-20 z" fill="' + p.a + '"/>' +
        '<rect x="86" y="168" width="70" height="26" rx="8" fill="' + p.a + '" opacity=".25"/>');
    },
    buckle: function (p) {
      return wrap(p,
        '<rect x="82" y="82" width="156" height="80" rx="16" fill="none" stroke="' + p.b + '" stroke-width="18"/>' +
        '<rect x="82" y="82" width="156" height="80" rx="16" fill="none" stroke="' + p.a + '" stroke-width="2" opacity=".4"/>' +
        '<rect x="124" y="104" width="72" height="12" rx="6" fill="' + p.a + '" opacity=".75"/>' +
        '<rect x="60" y="112" width="40" height="20" rx="6" fill="' + p.a + '" opacity=".3"/>');
    },
    dogtag: function (p) {
      return wrap(p,
        '<rect x="112" y="70" width="96" height="112" rx="18" fill="' + p.b + '"/>' +
        '<circle cx="160" cy="92" r="10" fill="' + p.a + '" opacity=".5"/>' +
        '<path d="M132 116 h56 M132 134 h56 M132 152 h34" stroke="' + p.a + '" stroke-width="6" stroke-linecap="round"/>' +
        '<path d="M160 70 v-22 a34 34 0 0 0 -34 -34" fill="none" stroke="' + p.a + '" stroke-width="5" opacity=".5"/>');
    },
    magnet: function (p) {
      return wrap(p,
        '<rect x="96" y="66" width="128" height="110" rx="14" fill="' + p.b + '"/>' +
        '<path d="M96 66 h128 v22 h-128 z" fill="' + p.a + '" opacity=".8"/>' +
        '<circle cx="160" cy="134" r="26" fill="none" stroke="' + p.a + '" stroke-width="6"/>' +
        '<circle cx="160" cy="134" r="8" fill="' + p.a + '"/>');
    },
    factory: function (p) {
      return wrap(p,
        '<rect x="40" y="140" width="240" height="70" fill="' + p.a + '" opacity=".85"/>' +
        '<path d="M40 140 l30 -34 l30 34 l30 -34 l30 34 l30 -34 l30 34 l30 -34 l30 34" fill="' + p.b + '"/>' +
        '<rect x="70" y="166" width="34" height="44" fill="' + p.b + '"/>' +
        '<rect x="126" y="166" width="34" height="44" fill="' + p.b + '"/>' +
        '<rect x="182" y="166" width="34" height="44" fill="' + p.b + '"/>' +
        '<rect x="228" y="86" width="20" height="56" fill="' + p.a + '" opacity=".6"/>' +
        '<circle cx="238" cy="70" r="14" fill="' + p.c + '" opacity=".5"/>' +
        '<circle cx="242" cy="58" r="9" fill="' + p.c + '" opacity=".35"/>');
    },
    team: function (p) {
      return wrap(p,
        '<circle cx="92" cy="96" r="22" fill="' + p.a + '" opacity=".8"/>' +
        '<circle cx="160" cy="86" r="26" fill="' + p.b + '"/>' +
        '<circle cx="228" cy="96" r="22" fill="' + p.a + '" opacity=".6"/>' +
        '<path d="M60 166 q32 -40 64 0 M128 168 q32 -44 64 0 M196 166 q32 -40 64 0" fill="' + p.a + '" opacity=".28"/>' +
        '<rect x="52" y="188" width="216" height="12" rx="6" fill="' + p.a + '" opacity=".18"/>');
    },
    showroom: function (p) {
      return wrap(p,
        '<rect x="46" y="60" width="228" height="140" rx="10" fill="' + p.a + '" opacity=".14"/>' +
        '<rect x="46" y="60" width="228" height="10" rx="5" fill="' + p.a + '" opacity=".7"/>' +
        '<rect x="62" y="92" width="60" height="60" rx="6" fill="' + p.b + '"/>' +
        '<rect x="134" y="92" width="60" height="60" rx="6" fill="' + p.c + '" opacity=".6"/>' +
        '<rect x="206" y="92" width="52" height="60" rx="6" fill="' + p.b + '" opacity=".7"/>' +
        '<rect x="62" y="164" width="196" height="8" rx="4" fill="' + p.a + '" opacity=".5"/>');
    },
    process: function (p) {
      return wrap(p,
        '<rect x="52" y="78" width="88" height="88" rx="12" fill="' + p.b + '"/>' +
        '<path d="M72 108 l16 18 l28 -34" fill="none" stroke="' + p.a + '" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>' +
        '<path d="M152 122 h44 l-12 -10 m12 10 l-12 10" fill="none" stroke="' + p.a + '" stroke-width="5" stroke-linecap="round"/>' +
        '<rect x="208" y="78" width="62" height="88" rx="10" fill="' + p.a + '" opacity=".75"/>');
    },
    package: function (p) {
      return wrap(p,
        '<path d="M96 96 h128 v78 a8 8 0 0 1 -8 8 h-112 a8 8 0 0 1 -8 -8 z" fill="' + p.b + '"/>' +
        '<path d="M96 96 l22 -26 h84 l22 26 z" fill="' + p.a + '" opacity=".85"/>' +
        '<rect x="150" y="96" width="20" height="86" fill="' + p.a + '" opacity=".35"/>' +
        '<path d="M160 96 v-26" stroke="' + p.bg + '" stroke-width="4"/>');
    },
    cert: function (p) {
      return wrap(p,
        '<rect x="88" y="56" width="144" height="130" rx="8" fill="#fff"/>' +
        '<rect x="88" y="56" width="144" height="130" rx="8" fill="none" stroke="' + p.a + '" stroke-width="4"/>' +
        '<circle cx="160" cy="104" r="26" fill="none" stroke="' + p.b + '" stroke-width="6"/>' +
        '<path d="M146 104 l10 12 l20 -24" fill="none" stroke="' + p.b + '" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>' +
        '<path d="M108 152 h104 M120 168 h80" stroke="' + p.a + '" stroke-width="5" opacity=".35" stroke-linecap="round"/>');
    },
    avatar: function (p) {
      return wrap(p,
        '<circle cx="160" cy="120" r="52" fill="' + p.a + '" opacity=".2"/>' +
        '<circle cx="160" cy="102" r="26" fill="' + p.a + '"/>' +
        '<path d="M104 196 q56 -56 112 0" fill="' + p.a + '" opacity=".85"/>');
    },
    quote: function (p) {
      return wrap(p,
        '<rect x="70" y="58" width="180" height="126" rx="12" fill="#fff"/>' +
        '<rect x="70" y="58" width="180" height="126" rx="12" fill="none" stroke="' + p.a + '" stroke-width="3"/>' +
        '<path d="M96 96 h44 M96 118 h72 M96 140 h56" stroke="' + p.a + '" stroke-width="6" opacity=".3" stroke-linecap="round"/>' +
        '<circle cx="218" cy="152" r="20" fill="' + p.b + '"/>');
    },
    blog: function (p) {
      return wrap(p,
        '<rect x="60" y="70" width="200" height="112" rx="10" fill="#fff"/>' +
        '<rect x="76" y="88" width="92" height="76" rx="6" fill="' + p.b + '"/>' +
        '<path d="M182 96 h62 M182 116 h62 M182 136 h40" stroke="' + p.a + '" stroke-width="6" opacity=".35" stroke-linecap="round"/>');
    }
  };

  function fallback(p, label) {
    return wrap(p,
      '<rect x="72" y="66" width="176" height="108" rx="14" fill="' + p.b + '" opacity=".7"/>' +
      '<rect x="72" y="66" width="176" height="108" rx="14" fill="none" stroke="' + p.a + '" stroke-width="2.5"/>' +
      '<circle cx="160" cy="120" r="26" fill="none" stroke="' + p.a + '" stroke-width="4"/>' +
      '<path d="M146 120 l10 12 l20 -24" fill="none" stroke="' + p.a + '" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>');
  }

  function render(root) {
    var lang = document.documentElement.getAttribute('data-lang') || 'en';
    var suffix = lang === 'en' ? '' : '-' + lang;
    var nodes = (root || document).querySelectorAll('[data-ph]');
    Array.prototype.forEach.call(nodes, function (el) {
      if (el.dataset.phDone === '1') return;
      var type = el.getAttribute('data-ph');
      var p = pal(type);
      var draw = ART[type] || fallback;
      var text = el.getAttribute('data-ph-text' + suffix) || el.getAttribute('data-ph-text') || type;
      el.innerHTML = draw(p) + (el.getAttribute('data-ph-label') === 'off' ? '' :
        '<span class="ph__label">' + text + '</span>');
      el.dataset.phDone = '1';
    });
  }

  window.TGPh = { render: render };
  document.addEventListener('DOMContentLoaded', function () { render(document); });
})();

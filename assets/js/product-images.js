/* Placeholder imagery generator.
   No photographs ship with this template: every shot is an inline SVG drawn
   locally, so the site stays fully offline. Drop in real assets later by
   replacing this map with paths under assets/img/. */
window.TGImgs = (function () {
  var PAL = [
    { bg: '#f6ece7', a: '#631e00', b: '#ffc137' },
    { bg: '#eaf0f5', a: '#143852', b: '#ffc137' },
    { bg: '#fbf3e2', a: '#8a5a12', b: '#ffc137' },
    { bg: '#eef1ec', a: '#2f4a37', b: '#c3d3c5' },
    { bg: '#f2eef6', a: '#4a2d63', b: '#b39dd6' },
    { bg: '#fdeee9', a: '#8c3319', b: '#f0a58c' }
  ];

  function shot(seed, label) {
    var p = PAL[seed % PAL.length];
    var s = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 240">' +
      '<rect width="320" height="240" fill="' + p.bg + '"/>' +
      '<rect x="72" y="66" width="176" height="108" rx="14" fill="' + p.b + '" opacity=".75"/>' +
      '<rect x="72" y="66" width="176" height="108" rx="14" fill="none" stroke="' + p.a + '" stroke-width="2.5"/>' +
      '<circle cx="160" cy="120" r="26" fill="none" stroke="' + p.a + '" stroke-width="4"/>' +
      '<path d="M146 120 l10 12 l20 -24" fill="none" stroke="' + p.a + '" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>' +
      '<text x="160" y="196" font-family="Arial" font-size="13" fill="' + p.a + '" text-anchor="middle">' + label + '</text>' +
      '</svg>';
    return 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(s);
  }

  var map = {};
  ['c1-p1', 'c1-p2', 'c1-p3', 'c1-p4', 'c1-p5',
   'c2-p1', 'c2-p2', 'c2-p3', 'c2-p4', 'c2-p5',
   'c3-p1', 'c3-p2', 'c3-p3', 'c3-p4', 'c3-p5',
   'c4-p1', 'c4-p2', 'c4-p3', 'c4-p4', 'c4-p5',
   'c5-p1', 'c5-p2', 'c5-p3', 'c5-p4', 'c5-p5',
   'c6-p1', 'c6-p2', 'c6-p3', 'c6-p4', 'c6-p5'].forEach(function (slug, i) {
    map[slug] = [shot(i * 4, slug + ' - 1'), shot(i * 4 + 1, slug + ' - 2'),
                 shot(i * 4 + 2, slug + ' - 3'), shot(i * 4 + 3, slug + ' - 4')];
  });
  /* real photography wins over the generated placeholder, and products added
     in the editor (not present in the list above) get their shots too */
  var M = (window.TGMedia && window.TGMedia.products) || {};
  Object.keys(M).forEach(function (slug) {
    var arr = M[slug];
    if (arr && arr.length) map[slug] = arr.slice(0, 4);
  });
  return map;
})();

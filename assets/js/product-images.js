/* Real product photography mapped to each SKU.
   Images were downloaded from the original site (www.triumphgifts.com).
   Each entry is an ordered list — index 0 is the main shot. */

window.TGImgs = (function () {
  var I = 'assets/img/';
  function g() {
    var a = Array.prototype.slice.call(arguments);
    return a.map(function (x) { return I + x; });
  }

  var slug = {
    /* ---------- metal ---------- */
    'metal-enamel-pins':        g('metal/pin-1.jpg', 'metal/pin-2.jpg', 'metal/pin-3.jpg', 'metal/pin-4.jpg'),
    'metal-medals':             g('metal/medal-1.jpg', 'metal/medal-2.jpg', 'metal/medal-3.jpg', 'metal/medal-4.jpg'),
    'metal-sports-medals':      g('metal/medal-3.jpg', 'metal/medal-4.jpg', 'prod/sports-medals.jpg', 'prod/medal.jpg'),
    'metal-challenge-coins':    g('metal/coin-1.jpg', 'metal/coin-2.jpg', 'metal/coin-3.jpg', 'metal/coin-4.jpg'),
    'metal-badges':             g('metal/pin-3.jpg', 'metal/pin-5.jpg', 'metal/pin-4.jpg', 'metal/pin-1.jpg'),
    'metal-keychains':          g('metal/keychain-1.jpg', 'prod/bottle-opener-alu.jpg', 'prod/bottle-opener-card.jpg', 'metal/keychain-2.jpg'),
    'metal-cufflinks':          g('metal/coin-3.jpg', 'metal/coin-4.jpg', 'metal/pin-5.jpg', 'metal/medal-5.jpg'),
    'metal-dog-tags':           g('metal/military-1.jpg', 'metal/military-4.jpg', 'metal/medal-5.jpg', 'prod/medal.jpg'),
    'metal-bottle-openers':     g('prod/bottle-opener-metal.jpg', 'prod/bottle-opener-card.jpg', 'prod/bottle-opener-alu.jpg', 'metal/keychain-1.jpg'),
    'metal-belt-buckles':       g('prod/belt-buckle.jpg', 'metal/coin-2.jpg', 'metal/medal-2.jpg', 'metal/pin-2.jpg'),
    'metal-fridge-magnets':     g('metal/magnet.jpg', 'metal/pin-3.jpg', 'prod/coin-3d-gold.jpg', 'metal/medal-3.jpg'),
    'metal-military-medals':    g('metal/military-1.jpg', 'metal/military-2.jpg', 'metal/military-3.jpg', 'metal/military-4.jpg'),
    'metal-golf-accessories':   g('metal/coin-3.jpg', 'metal/medal-4.jpg', 'metal/pin-5.jpg', 'metal/coin-4.jpg'),
    'metal-trophies':           g('metal/trophy.jpg', 'metal/medal-1.jpg', 'metal/medal-2.jpg', 'prod/sports-medals.jpg'),
    'metal-luggage-tags':       g('leather/leather-1.jpg', 'metal/coin-4.jpg', 'metal/keychain-2.jpg', 'wooden/wooden-1.jpg'),
    'metal-premium-medals':     g('metal/medal-1.jpg', 'metal/medal-5.jpg', 'prod/medal.jpg', 'prod/sports-medals.jpg'),
    'metal-honor-medals':       g('metal/medal-2.jpg', 'metal/military-2.jpg', 'metal/medal-3.jpg', 'metal/medal-4.jpg'),
    'metal-creative-medals':    g('metal/medal-5.jpg', 'prod/medal.jpg', 'metal/coin-3.jpg', 'metal/medal-2.jpg'),
    'metal-award-medals':       g('metal/medal-3.jpg', 'metal/medal-4.jpg', 'metal/medal-1.jpg', 'prod/sports-medals.jpg'),
    'metal-fiesta-medals':      g('metal/coin-1.jpg', 'metal/medal-2.jpg', 'metal/coin-4.jpg', 'prod/medal.jpg'),
    'metal-eco-friendly-medals':g('metal/wooden-medal.jpg', 'wooden/wooden-2.jpg', 'metal/medal-4.jpg', 'metal/medal-1.jpg'),

    /* ---------- patches & labels ---------- */
    'patches-embroidered-patches':  g('patches/patch-1.jpg', 'patches/patch-2.jpg', 'patches/patch-3.jpg', 'cat/patches.jpg'),
    'patches-woven-patches':        g('patches/patch-3.jpg', 'patches/patch-1.jpg', 'cat/patches.jpg', 'patches/patch-2.jpg'),
    'patches-chenille-patches':     g('patches/patch-1.jpg', 'cat/patches.jpg', 'patches/patch-3.jpg', 'patches/patch-2.jpg'),
    'patches-pvc-patches':          g('pvc/pvc-2.jpg', 'pvc/pvc-1.jpg', 'patches/patch-2.jpg', 'cat/pvc.jpg'),
    'patches-sequin-patches':       g('patches/patch-2.jpg', 'patches/patch-1.jpg', 'cat/patches.jpg', 'patches/patch-3.jpg'),
    'patches-bullion-patches':      g('patches/patch-2.jpg', 'patches/patch-3.jpg', 'cat/patches.jpg', 'patches/patch-1.jpg'),
    'patches-embroidery-keychains': g('metal/keychain-2.jpg', 'patches/patch-1.jpg', 'lanyards/lanyard-1.jpg', 'patches/patch-3.jpg'),
    'patches-epaulettes':           g('patches/patch-3.jpg', 'cat/patches.jpg', 'lanyards/lanyard-2.jpg', 'patches/patch-2.jpg'),
    'patches-woven-labels':         g('patches/patch-3.jpg', 'cat/patches.jpg', 'patches/patch-1.jpg', 'lanyards/lanyard-3.jpg'),
    'patches-leather-patches':      g('leather/leather-2.jpg', 'leather/leather-1.jpg', 'cat/leather.jpg', 'patches/patch-2.jpg'),

    /* ---------- lanyards ---------- */
    'lanyards-polyester-lanyards':   g('lanyards/lanyard-1.jpg', 'prod/lanyards.jpg', 'lanyards/lanyard-2.jpg', 'lanyards/lanyard-3.jpg'),
    'lanyards-nylon-lanyards':       g('lanyards/lanyard-2.jpg', 'prod/lanyards.jpg', 'lanyards/lanyard-1.jpg', 'lanyards/lanyard-3.jpg'),
    'lanyards-tubular-lanyards':     g('lanyards/lanyard-3.jpg', 'lanyards/lanyard-1.jpg', 'prod/lanyards.jpg', 'lanyards/lanyard-2.jpg'),
    'lanyards-woven-lanyards':       g('lanyards/lanyard-3.jpg', 'lanyards/lanyard-2.jpg', 'prod/lanyards.jpg', 'lanyards/lanyard-1.jpg'),
    'lanyards-reflective-lanyards':  g('prod/lanyards.jpg', 'lanyards/lanyard-2.jpg', 'lanyards/lanyard-3.jpg', 'lanyards/lanyard-1.jpg'),
    'lanyards-heat-transfer-lanyards': g('lanyards/lanyard-2.jpg', 'lanyards/lanyard-3.jpg', 'prod/lanyards.jpg', 'lanyards/lanyard-1.jpg'),
    'lanyards-eco-friendly-lanyards':g('lanyards/lanyard-1.jpg', 'lanyards/lanyard-3.jpg', 'prod/lanyards.jpg', 'lanyards/lanyard-2.jpg'),
    'lanyards-badge-reels':          g('lanyards/lanyard-1.jpg', 'metal/keychain-1.jpg', 'lanyards/lanyard-2.jpg', 'prod/lanyards.jpg'),
    'lanyards-cord-lanyards':        g('lanyards/lanyard-3.jpg', 'prod/lanyards.jpg', 'lanyards/lanyard-1.jpg', 'lanyards/lanyard-2.jpg'),
    'lanyards-dog-leashes-collars':  g('lanyards/lanyard-2.jpg', 'lanyards/lanyard-1.jpg', 'prod/lanyards.jpg', 'lanyards/lanyard-3.jpg'),

    /* ---------- soft pvc & silicone ---------- */
    'pvc-pvc-medals':          g('metal/medal-5.jpg', 'pvc/pvc-2.jpg', 'prod/medal.jpg', 'metal/medal-4.jpg'),
    'pvc-pvc-keychains':       g('pvc/pvc-1.jpg', 'metal/keychain-2.jpg', 'pvc/pvc-2.jpg', 'metal/keychain-1.jpg'),
    'pvc-pvc-wristbands':      g('silicone/silicone-1.jpg', 'silicone/silicone-2.jpg', 'pvc/pvc-1.jpg', 'cat/pvc.jpg'),
    'pvc-silicone-wristbands': g('silicone/silicone-1.jpg', 'silicone/silicone-2.jpg', 'cat/silicone.jpg', 'pvc/pvc-1.jpg'),
    'pvc-silicone-keychains':  g('silicone/silicone-1.jpg', 'pvc/pvc-1.jpg', 'metal/keychain-2.jpg', 'cat/silicone.jpg'),
    'pvc-silicone-coasters':   g('silicone/silicone-2.jpg', 'leather/leather-2.jpg', 'wooden/wooden-2.jpg', 'cat/silicone.jpg'),
    'pvc-silicone-straps':     g('silicone/silicone-1.jpg', 'pvc/pvc-1.jpg', 'lanyards/lanyard-3.jpg', 'cat/silicone.jpg'),
    'pvc-pvc-fridge-magnets':  g('metal/magnet.jpg', 'pvc/pvc-2.jpg', 'pvc/pvc-1.jpg', 'metal/pin-3.jpg'),

    /* ---------- leather & wood ---------- */
    'leather-bag-tags':         g('leather/leather-1.jpg', 'cat/leather.jpg', 'leather/leather-2.jpg', 'wooden/wooden-1.jpg'),
    'leather-luggage-tags':     g('leather/leather-1.jpg', 'leather/leather-2.jpg', 'cat/leather.jpg', 'wooden/wooden-1.jpg'),
    'leather-keychains':        g('metal/keychain-1.jpg', 'leather/leather-1.jpg', 'wooden/wooden-1.jpg', 'metal/keychain-2.jpg'),
    'leather-key-fobs':         g('leather/leather-2.jpg', 'metal/keychain-1.jpg', 'leather/leather-1.jpg', 'cat/leather.jpg'),
    'leather-coasters':         g('leather/leather-2.jpg', 'wooden/wooden-1.jpg', 'silicone/silicone-2.jpg', 'cat/leather.jpg'),
    'leather-bookmarks':        g('leather/leather-2.jpg', 'cat/leather.jpg', 'wooden/wooden-2.jpg', 'leather/leather-1.jpg'),
    'leather-money-clips':      g('metal/coin-3.jpg', 'metal/coin-4.jpg', 'leather/leather-2.jpg', 'metal/pin-5.jpg'),
    'leather-bottle-openers':   g('prod/bottle-opener-metal.jpg', 'prod/bottle-opener-card.jpg', 'prod/bottle-opener-alu.jpg', 'leather/leather-1.jpg'),
    'leather-wooden-medals':    g('metal/wooden-medal.jpg', 'wooden/wooden-2.jpg', 'metal/medal-4.jpg', 'cat/wooden.jpg'),
    'leather-wooden-keychains': g('wooden/wooden-1.jpg', 'metal/keychain-2.jpg', 'wooden/wooden-2.jpg', 'cat/wooden.jpg'),
    'leather-wood-name-tags':   g('wooden/wooden-2.jpg', 'cat/wooden.jpg', 'wooden/wooden-1.jpg', 'metal/wooden-medal.jpg'),
    'leather-wooden-trophies':  g('metal/trophy.jpg', 'wooden/wooden-2.jpg', 'metal/medal-1.jpg', 'cat/wooden.jpg'),
    'leather-wood-coasters':    g('wooden/wooden-2.jpg', 'leather/leather-2.jpg', 'silicone/silicone-2.jpg', 'cat/wooden.jpg'),

    /* ---------- promotional & hats ---------- */
    'promotional-acrylic-products':  g('promo/promo-1.jpg', 'metal/trophy.jpg', 'promo/promo-3.jpg', 'cat/promotional.jpg'),
    'promotional-poker-chips':       g('promo/promo-2.jpg', 'metal/coin-2.jpg', 'metal/coin-1.jpg', 'cat/promotional.jpg'),
    'promotional-neoprene-koozies':  g('silicone/silicone-2.jpg', 'pvc/pvc-1.jpg', 'cat/promotional.jpg', 'promo/promo-1.jpg'),
    'promotional-custom-shoelaces':  g('lanyards/lanyard-3.jpg', 'lanyards/lanyard-1.jpg', 'cat/promotional.jpg', 'prod/lanyards.jpg'),
    'promotional-christmas-gifts':   g('metal/medal-3.jpg', 'promo/promo-1.jpg', 'metal/coin-4.jpg', 'cat/promotional.jpg'),
    'promotional-champion-rings':    g('promo/promo-3.jpg', 'metal/coin-3.jpg', 'metal/coin-1.jpg', 'cat/promotional.jpg'),
    'promotional-baseball-caps':     g('hats/hat-1.jpg', 'hats/hat-2.jpg', 'prod/caps.jpg', 'cat/hats.jpg'),
    'promotional-snapback-caps':     g('hats/hat-2.jpg', 'hats/hat-1.jpg', 'prod/caps.jpg', 'cat/hats.jpg'),
    'promotional-trucker-hats':      g('hats/hat-1.jpg', 'prod/caps.jpg', 'hats/hat-3.jpg', 'cat/hats.jpg'),
    'promotional-bucket-hats':       g('hats/hat-3.jpg', 'hats/hat-2.jpg', 'prod/caps.jpg', 'cat/hats.jpg'),
    'promotional-beanie-hats':       g('hats/hat-3.jpg', 'cat/hats.jpg', 'hats/hat-1.jpg', 'prod/caps.jpg'),
    'promotional-eco-friendly-hats': g('cat/hats.jpg', 'hats/hat-2.jpg', 'hats/hat-3.jpg', 'prod/caps.jpg'),
  };

  var cat = {
    metal:       g('metal/pin-1.jpg', 'metal/medal-1.jpg', 'metal/coin-1.jpg', 'metal/keychain-1.jpg'),
    patches:     g('patches/patch-1.jpg', 'patches/patch-2.jpg', 'patches/patch-3.jpg', 'cat/patches.jpg'),
    lanyards:    g('lanyards/lanyard-1.jpg', 'lanyards/lanyard-2.jpg', 'lanyards/lanyard-3.jpg', 'prod/lanyards.jpg'),
    pvc:         g('pvc/pvc-1.jpg', 'pvc/pvc-2.jpg', 'silicone/silicone-1.jpg', 'cat/pvc.jpg'),
    leather:     g('leather/leather-1.jpg', 'leather/leather-2.jpg', 'wooden/wooden-1.jpg', 'cat/leather.jpg'),
    promotional: g('promo/promo-1.jpg', 'promo/promo-2.jpg', 'hats/hat-1.jpg', 'cat/promotional.jpg'),
  };

  return { slug: slug, cat: cat };
})();

/* Shared header, mobile drawer and footer.
   Injected on every page so the 100+ item catalogue menu is authored once.
   Multilingual text uses <span class="i18n i18n-xx"> wrappers which the
   CSS reveals according to <html data-lang>. */

(function () {
  var CHEV = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 9l6 6 6-6"/></svg>';

  /* Shared dictionary for the 9 supported languages. Missing translations fall
     back to English. Extend this object to add more translated phrases. */
  /* Translations for generic labels only; every product/category entry is a placeholder. */
  var DICT = {
    'Home': { fr: 'Accueil', de: 'Startseite', it: 'Home', ja: 'ホーム', ko: '홈', ar: 'الرئيسية' },
    'Products': { fr: 'Produits', de: 'Produkte', it: 'Prodotti', ja: '製品', ko: '제품', ar: 'المنتجات' },
    'Product Catalogue': { fr: 'Catalogue de produits', de: 'Produktkatalog', it: 'Catalogo prodotti', ja: '製品カタログ', ko: '제품 카탈로그', ar: 'كتالوج المنتجات' },
    'Company': { fr: 'Entreprise', de: 'Unternehmen', it: 'Azienda', ja: '会社概要', ko: '회사 소개', ar: 'الشركة' },
    'Blog': { fr: 'Blog', de: 'Blog', it: 'Blog', ja: 'ブログ', ko: '블로그', ar: 'المدونة' },
    'Contact': { fr: 'Contact', de: 'Kontakt', it: 'Contatti', ja: 'お問い合わせ', ko: '문의', ar: 'اتصل بنا' },
    'Get a Quote': { fr: 'Demander un devis', de: 'Angebot anfordern', it: 'Richiedi un preventivo', ja: '見積もりを依頼', ko: '견적 요청', ar: 'اطلب عرض سعر' },
    'Learn More': { fr: 'En savoir plus', de: 'Mehr erfahren', it: 'Scopri di più', ja: '詳細を見る', ko: '자세히 보기', ar: 'اعرف المزيد' },
    'Tel / WhatsApp': { fr: 'Tél / WhatsApp', de: 'Tel / WhatsApp', it: 'Tel / WhatsApp', ja: '電話 / WhatsApp', ko: '전화 / WhatsApp', ar: 'هاتف / واتساب' },
    'Working hours': { fr: 'Heures d\'ouverture', de: 'Öffnungszeiten', it: 'Orari', ja: '営業時間', ko: '근무 시간', ar: 'ساعات العمل' },
    'All rights reserved.': { fr: 'Tous droits réservés.', de: 'Alle Rechte vorbehalten.', it: 'Tutti i diritti riservati.', ja: 'すべての権利を保有。', ko: '모든 권리 보유.', ar: 'جميع الحقوق محفوظة.' },
    'View all in ': { fr: 'Voir tout dans ', de: 'Alle anzeigen in ', it: 'Vedi tutto in ', ja: 'すべて見る ', ko: '모두 보기 ', ar: 'عرض الكل في ' },
    'View all products': { fr: 'Voir tous les produits', de: 'Alle Produkte anzeigen', it: 'Vedi tutti i prodotti', ja: 'すべての製品を見る', ko: '모든 제품 보기', ar: 'عرض جميع المنتجات' },
    'Not sure which craft fits your project? Send us your artwork.': { fr: 'Vous ne savez pas quelle technique choisir ? Envoyez-nous votre design.', de: 'Unsicher, welche Technik passt? Senden Sie uns Ihre Grafik.', it: 'Non sai quale tecnica scegliere? Inviaci il tuo design.', ja: 'どの技術が適しているか不明ですか？お気軽にデザインをお送りください。', ko: '어떤 공정이 적합한지 잘 모르겠다면? 작품을 보내주세요.', ar: 'غير متأكد من التقنية المناسبة؟ أرسل لنا تصميمك.' },
    'From artwork to delivery, one team follows your order.': { fr: 'De la création à la livraison, une équipe suit votre commande.', de: 'Vom Design bis zur Lieferung begleitet ein Team Ihre Bestellung.', it: 'Dal design alla consegna, un team segue il tuo ordine.', ja: 'デザインから配送まで、ひとつのチームが対応します。', ko: '디자인부터 배송까지, 하나의 팀이 주문을 처리합니다.', ar: 'من التصميم إلى التسليم، يتابع فريق واحد طلبك.' },
    'Years of experience serving customers worldwide.': { fr: 'Des annees d experience au service de clients du monde entier.', de: 'Jahrelange Erfahrung mit Kunden weltweit.', it: 'Anni di esperienza al servizio di clienti in tutto il mondo.', ja: '長年の経験で世界中の顧客にサービスを提供。', ko: '오랜 경험으로 전 세계 고객에게 서비스.', ar: 'سنوات من الخبرة في خدمة العملاء حول العالم.' },
    'Factory-direct pricing': { fr: 'Prix direct usine', de: 'Fabrikpreise', it: 'Prezzi di fabbrica', ja: '工場直送価格', ko: '공장 직접 가격', ar: 'أسعار مباشرة من المصنع' },
    'Low minimum order quantity': { fr: 'MOQ 50 pièces', de: 'MOQ ab 50 Stück', it: 'MOQ da 50 pezzi', ja: '最低注文数 50個から', ko: '최소 주문 수량 50개', ar: 'حد أدنى 50 قطعة' },
    'Years of manufacturing experience': { fr: '40+ ans de fabrication', de: 'Über 40 Jahre Erfahrung', it: 'Oltre 40 anni di produzione', ja: '40年以上の製造経験', ko: '40년 이상의 제조 경험', ar: 'أكثر من 40 عامًا في التصنيع' },
    'Our Services': { fr: 'Nos services', de: 'Unsere Leistungen', it: 'I nostri servizi', ja: 'サービス内容', ko: '서비스', ar: 'خدماتنا' },
    'Category 1': { fr: 'Categorie 1', de: 'Kategorie 1', it: 'Categoria 1', ja: 'カテゴリ 1', ko: '카테고리 1', ar: 'الفئة 1' },
    'Category 2': { fr: 'Categorie 2', de: 'Kategorie 2', it: 'Categoria 2', ja: 'カテゴリ 2', ko: '카테고리 2', ar: 'الفئة 2' },
    'Category 3': { fr: 'Categorie 3', de: 'Kategorie 3', it: 'Categoria 3', ja: 'カテゴリ 3', ko: '카테고리 3', ar: 'الفئة 3' },
    'Category 4': { fr: 'Categorie 4', de: 'Kategorie 4', it: 'Categoria 4', ja: 'カテゴリ 4', ko: '카테고리 4', ar: 'الفئة 4' },
    'Category 5': { fr: 'Categorie 5', de: 'Kategorie 5', it: 'Categoria 5', ja: 'カテゴリ 5', ko: '카테고리 5', ar: 'الفئة 5' },
    'Category 6': { fr: 'Categorie 6', de: 'Kategorie 6', it: 'Categoria 6', ja: 'カテゴリ 6', ko: '카테고리 6', ar: 'الفئة 6' },
    'Product 1.1': { fr: 'Nom du produit 1.1', de: 'Produktname 1.1', it: 'Nome prodotto 1.1', ja: '商品名 1.1', ko: '제품명 1.1', ar: 'اسم المنتج 1.1' },
    'Product 1.2': { fr: 'Nom du produit 1.2', de: 'Produktname 1.2', it: 'Nome prodotto 1.2', ja: '商品名 1.2', ko: '제품명 1.2', ar: 'اسم المنتج 1.2' },
    'Product 1.3': { fr: 'Nom du produit 1.3', de: 'Produktname 1.3', it: 'Nome prodotto 1.3', ja: '商品名 1.3', ko: '제품명 1.3', ar: 'اسم المنتج 1.3' },
    'Product 1.4': { fr: 'Nom du produit 1.4', de: 'Produktname 1.4', it: 'Nome prodotto 1.4', ja: '商品名 1.4', ko: '제품명 1.4', ar: 'اسم المنتج 1.4' },
    'Product 1.5': { fr: 'Nom du produit 1.5', de: 'Produktname 1.5', it: 'Nome prodotto 1.5', ja: '商品名 1.5', ko: '제품명 1.5', ar: 'اسم المنتج 1.5' },
    'Product 2.1': { fr: 'Nom du produit 2.1', de: 'Produktname 2.1', it: 'Nome prodotto 2.1', ja: '商品名 2.1', ko: '제품명 2.1', ar: 'اسم المنتج 2.1' },
    'Product 2.2': { fr: 'Nom du produit 2.2', de: 'Produktname 2.2', it: 'Nome prodotto 2.2', ja: '商品名 2.2', ko: '제품명 2.2', ar: 'اسم المنتج 2.2' },
    'Product 2.3': { fr: 'Nom du produit 2.3', de: 'Produktname 2.3', it: 'Nome prodotto 2.3', ja: '商品名 2.3', ko: '제품명 2.3', ar: 'اسم المنتج 2.3' },
    'Product 2.4': { fr: 'Nom du produit 2.4', de: 'Produktname 2.4', it: 'Nome prodotto 2.4', ja: '商品名 2.4', ko: '제품명 2.4', ar: 'اسم المنتج 2.4' },
    'Product 2.5': { fr: 'Nom du produit 2.5', de: 'Produktname 2.5', it: 'Nome prodotto 2.5', ja: '商品名 2.5', ko: '제품명 2.5', ar: 'اسم المنتج 2.5' },
    'Product 3.1': { fr: 'Nom du produit 3.1', de: 'Produktname 3.1', it: 'Nome prodotto 3.1', ja: '商品名 3.1', ko: '제품명 3.1', ar: 'اسم المنتج 3.1' },
    'Product 3.2': { fr: 'Nom du produit 3.2', de: 'Produktname 3.2', it: 'Nome prodotto 3.2', ja: '商品名 3.2', ko: '제품명 3.2', ar: 'اسم المنتج 3.2' },
    'Product 3.3': { fr: 'Nom du produit 3.3', de: 'Produktname 3.3', it: 'Nome prodotto 3.3', ja: '商品名 3.3', ko: '제품명 3.3', ar: 'اسم المنتج 3.3' },
    'Product 3.4': { fr: 'Nom du produit 3.4', de: 'Produktname 3.4', it: 'Nome prodotto 3.4', ja: '商品名 3.4', ko: '제품명 3.4', ar: 'اسم المنتج 3.4' },
    'Product 3.5': { fr: 'Nom du produit 3.5', de: 'Produktname 3.5', it: 'Nome prodotto 3.5', ja: '商品名 3.5', ko: '제품명 3.5', ar: 'اسم المنتج 3.5' },
    'Product 4.1': { fr: 'Nom du produit 4.1', de: 'Produktname 4.1', it: 'Nome prodotto 4.1', ja: '商品名 4.1', ko: '제품명 4.1', ar: 'اسم المنتج 4.1' },
    'Product 4.2': { fr: 'Nom du produit 4.2', de: 'Produktname 4.2', it: 'Nome prodotto 4.2', ja: '商品名 4.2', ko: '제품명 4.2', ar: 'اسم المنتج 4.2' },
    'Product 4.3': { fr: 'Nom du produit 4.3', de: 'Produktname 4.3', it: 'Nome prodotto 4.3', ja: '商品名 4.3', ko: '제품명 4.3', ar: 'اسم المنتج 4.3' },
    'Product 4.4': { fr: 'Nom du produit 4.4', de: 'Produktname 4.4', it: 'Nome prodotto 4.4', ja: '商品名 4.4', ko: '제품명 4.4', ar: 'اسم المنتج 4.4' },
    'Product 4.5': { fr: 'Nom du produit 4.5', de: 'Produktname 4.5', it: 'Nome prodotto 4.5', ja: '商品名 4.5', ko: '제품명 4.5', ar: 'اسم المنتج 4.5' },
    'Product 5.1': { fr: 'Nom du produit 5.1', de: 'Produktname 5.1', it: 'Nome prodotto 5.1', ja: '商品名 5.1', ko: '제품명 5.1', ar: 'اسم المنتج 5.1' },
    'Product 5.2': { fr: 'Nom du produit 5.2', de: 'Produktname 5.2', it: 'Nome prodotto 5.2', ja: '商品名 5.2', ko: '제품명 5.2', ar: 'اسم المنتج 5.2' },
    'Product 5.3': { fr: 'Nom du produit 5.3', de: 'Produktname 5.3', it: 'Nome prodotto 5.3', ja: '商品名 5.3', ko: '제품명 5.3', ar: 'اسم المنتج 5.3' },
    'Product 5.4': { fr: 'Nom du produit 5.4', de: 'Produktname 5.4', it: 'Nome prodotto 5.4', ja: '商品名 5.4', ko: '제품명 5.4', ar: 'اسم المنتج 5.4' },
    'Product 5.5': { fr: 'Nom du produit 5.5', de: 'Produktname 5.5', it: 'Nome prodotto 5.5', ja: '商品名 5.5', ko: '제품명 5.5', ar: 'اسم المنتج 5.5' },
    'Product 6.1': { fr: 'Nom du produit 6.1', de: 'Produktname 6.1', it: 'Nome prodotto 6.1', ja: '商品名 6.1', ko: '제품명 6.1', ar: 'اسم المنتج 6.1' },
    'Product 6.2': { fr: 'Nom du produit 6.2', de: 'Produktname 6.2', it: 'Nome prodotto 6.2', ja: '商品名 6.2', ko: '제품명 6.2', ar: 'اسم المنتج 6.2' },
    'Product 6.3': { fr: 'Nom du produit 6.3', de: 'Produktname 6.3', it: 'Nome prodotto 6.3', ja: '商品名 6.3', ko: '제품명 6.3', ar: 'اسم المنتج 6.3' },
    'Product 6.4': { fr: 'Nom du produit 6.4', de: 'Produktname 6.4', it: 'Nome prodotto 6.4', ja: '商品名 6.4', ko: '제품명 6.4', ar: 'اسم المنتج 6.4' },
    'Product 6.5': { fr: 'Nom du produit 6.5', de: 'Produktname 6.5', it: 'Nome prodotto 6.5', ja: '商品名 6.5', ko: '제품명 6.5', ar: 'اسم المنتج 6.5' }
  };

  /* company details come from assets/js/site-data.js (editable) */
  var SITE = window.TGSite || {};
  function siteVal(v, fb) { return (v === undefined || v === null || v === '') ? (fb || '') : v; }
  function siteTri(v) {
    var d = v || {};
    return T9(d.en || '', d.zh || '', d.es || '', d.fr || '', d.de || '', d.it || '', d.ja || '', d.ko || '', d.ar || '');
  }

  function T9(en, zh, es, fr, de, it, ja, ko, ar) {
    zh = zh || en; es = es || en; fr = fr || en; de = de || en; it = it || en; ja = ja || en; ko = ko || en; ar = ar || en;
    return '<span class="i18n i18n-en">' + en + '</span>' +
      '<span class="i18n i18n-zh">' + zh + '</span>' +
      '<span class="i18n i18n-es">' + es + '</span>' +
      '<span class="i18n i18n-fr">' + fr + '</span>' +
      '<span class="i18n i18n-de">' + de + '</span>' +
      '<span class="i18n i18n-it">' + it + '</span>' +
      '<span class="i18n i18n-ja">' + ja + '</span>' +
      '<span class="i18n i18n-ko">' + ko + '</span>' +
      '<span class="i18n i18n-ar">' + ar + '</span>';
  }

  function T(en, zh, es) {
    var d = DICT[en] || {};
    return T9(en, d.zh || zh, d.es || es, d.fr, d.de, d.it, d.ja, d.ko, d.ar);
  }

  /* product catalogue: names stay in English (industry terms) */
  /* product catalogue: generic placeholders, no real SKUs */
  var MENU = (window.TGMenu && window.TGMenu.menu) || {
    products: [
      {
        h: ['Category 1', '分类 1', 'Categoria 1'],
        items: [
          ['Product 1.1', 'product.html?slug=c1-p1'],
          ['Product 1.2', 'product.html?slug=c1-p2'],
          ['Product 1.3', 'product.html?slug=c1-p3'],
          ['Product 1.4', 'product.html?slug=c1-p4'],
          ['Product 1.5', 'product.html?slug=c1-p5']
        ]
      },
      {
        h: ['Category 2', '分类 2', 'Categoria 2'],
        items: [
          ['Product 2.1', 'product.html?slug=c2-p1'],
          ['Product 2.2', 'product.html?slug=c2-p2'],
          ['Product 2.3', 'product.html?slug=c2-p3'],
          ['Product 2.4', 'product.html?slug=c2-p4'],
          ['Product 2.5', 'product.html?slug=c2-p5']
        ]
      },
      {
        h: ['Category 3', '分类 3', 'Categoria 3'],
        items: [
          ['Product 3.1', 'product.html?slug=c3-p1'],
          ['Product 3.2', 'product.html?slug=c3-p2'],
          ['Product 3.3', 'product.html?slug=c3-p3'],
          ['Product 3.4', 'product.html?slug=c3-p4'],
          ['Product 3.5', 'product.html?slug=c3-p5']
        ]
      },
      {
        h: ['Category 4', '分类 4', 'Categoria 4'],
        items: [
          ['Product 4.1', 'product.html?slug=c4-p1'],
          ['Product 4.2', 'product.html?slug=c4-p2'],
          ['Product 4.3', 'product.html?slug=c4-p3'],
          ['Product 4.4', 'product.html?slug=c4-p4'],
          ['Product 4.5', 'product.html?slug=c4-p5']
        ]
      },
      {
        h: ['Category 5', '分类 5', 'Categoria 5'],
        items: [
          ['Product 5.1', 'product.html?slug=c5-p1'],
          ['Product 5.2', 'product.html?slug=c5-p2'],
          ['Product 5.3', 'product.html?slug=c5-p3'],
          ['Product 5.4', 'product.html?slug=c5-p4'],
          ['Product 5.5', 'product.html?slug=c5-p5']
        ]
      },
      {
        h: ['Category 6', '分类 6', 'Categoria 6'],
        items: [
          ['Product 6.1', 'product.html?slug=c6-p1'],
          ['Product 6.2', 'product.html?slug=c6-p2'],
          ['Product 6.3', 'product.html?slug=c6-p3'],
          ['Product 6.4', 'product.html?slug=c6-p4'],
          ['Product 6.5', 'product.html?slug=c6-p5']
        ]
      }
    ],
    company: {
      h: ['About Us', '关于我们', 'Sobre nosotros'],
      items: [
        ['Company Profile', 'company.html'],
        ['Factory Tour', 'factory.html'],
        ['Showroom', 'showroom.html'],
        ['Certifications', 'company.html#cert'],
        ['Exhibitions', 'showroom.html#fair']
      ]
    },
    services: {
      h: ['Our Services', '服务支持', 'Nuestros servicios'],
      items: [
        ['One-Stop Service', 'services.html'],
        ['Customization Process', 'customization-process.html'],
        ['Payment Methods', 'services.html#payment'],
        ['Return & Refund Policy', 'services.html#refund'],
        ['FAQ', 'faq.html']
      ]
    }
  };
  window.TGMENU_DEFAULT = MENU;

  /* A menu label may be a plain string, a 3-language array or a 9-language
     object - accept all three so the editor can store whatever it needs. */
  function lab(v) {
    if (v && typeof v === 'object' && !Array.isArray(v)) {
      return T9(v.en || '', v.zh || '', v.es || '', v.fr || '', v.de || '',
                v.it || '', v.ja || '', v.ko || '', v.ar || '');
    }
    if (Array.isArray(v)) {
      return T(v[0], v[1] != null ? v[1] : v[0], v[2] != null ? v[2] : v[0]);
    }
    return T(v, v, v);
  }

  /* Desktop mega menu: two-tier for Products (multiple categories),
     simple list for Custom Medal / Company / Services (single category). */
  function megaFor(key) {
    var cols = key === 'products' ? MENU.products : [MENU[key]];
    var isTiered = cols.length > 1;

    var footText, footHref, footLabel;
    if (key === 'products') {
      footText = T('Not sure which craft fits your project? Send us your artwork.',
        '不确定哪种工艺适合你的项目？把设计稿发给我们。',
        '¿No sabes qué técnica encaja? Envíanos tu diseño.');
      footHref = 'contact.html';
      footLabel = T('Get a Quote', '获取报价', 'Pedir presupuesto');
    } else if (key === 'unused_medal') {
      footText = T('Browse the full product range.',
        '浏览完整产品系列。',
        'Explora la gama completa de productos.');
      footHref = 'products.html';
      footLabel = T('All Products', '全部产品', 'Todos');
    } else if (key === 'company') {
      footText = T('Years of experience serving customers worldwide.',
        '多年行业经验，服务全球客户。',
        'Anos de experiencia atendiendo clientes en todo el mundo.');
      footHref = 'company.html';
      footLabel = T('Learn More', '了解更多', 'Saber más');
    } else {
      footText = T('From artwork to delivery, one team follows your order.',
        '从设计稿到交付，一个团队跟到底。',
        'Del diseño a la entrega, un solo equipo.');
      footHref = 'customization-process.html';
      footLabel = T('See Process', '查看流程', 'Ver proceso');
    }

    var foot = '<div class="mega__foot"><p>' + footText + '</p>' +
      '<a class="btn btn--primary btn--sm" href="' + footHref + '">' + footLabel + '</a></div>';

    if (isTiered) {
      var cats = '';
      var panes = '';
      cols.forEach(function (col, i) {
        var title = lab(col.h);
        var list = '';
        col.items.forEach(function (it) {
          list += '<li><a href="' + it[1] + '">' + lab(it[0]) + '</a></li>';
        });
        cats += '<li class="mega__cat' + (i === 0 ? ' is-active' : '') + '" data-cat="' + i + '">' + title + '</li>';
        panes += '<div class="mega__pane' + (i === 0 ? ' is-active' : '') + '" data-pane="' + i + '">' +
          '<div class="mega__pane-head">' + title + '</div>' +
          '<ul class="mega__pane-list">' + list + '</ul>' +
          '<a class="mega__pane-all" href="' + col.items[0][1].split('#')[0] + '">' +
          T('View all in ', '查看全部', 'Ver todo en ') + title + '</a></div>';
      });
      return '<div class="mega mega--tiered">' +
        '<div class="mega__cats-wrap">' +
        '<ul class="mega__cats">' + cats + '</ul>' +
        '</div>' +
        '<div class="mega__panes">' + panes + '</div>' + foot + '</div>';
    }

    var col = cols[0];
    var title = lab(col.h);
    var list = '';
    col.items.forEach(function (it) {
      list += '<li><a href="' + it[1] + '">' + lab(it[0]) + '</a></li>';
    });
    return '<div class="mega mega--simple">' +
      '<div class="mega__simple-head">' + title + '</div>' +
      '<ul class="mega__simple-list">' + list + '</ul>' + foot + '</div>';
  }

  /* label order: en, zh, es, fr, de, it, ja, ko, ar */
  var NAV = [
    { href: 'index.html', label: ['Home', '首页', 'Inicio', 'Accueil', 'Startseite', 'Home', 'ホーム', '홈', 'الرئيسية'] },
    { href: 'products.html', label: ['Products', '产品中心', 'Productos', 'Produits', 'Produkte', 'Prodotti', '製品', '제품', 'المنتجات'], key: 'products' },
    { href: 'company.html', label: ['Company', '关于我们', 'Empresa', 'Entreprise', 'Unternehmen', 'Azienda', '会社概要', '회사 소개', 'الشركة'], key: 'company' },
    { href: 'services.html', label: ['Services', '服务支持', 'Servicios', 'Services', 'Leistungen', 'Servizi', 'サービス', '서비스', 'الخدمات'], key: 'services' },
    { href: 'blog.html', label: ['Blog', '博客', 'Blog', 'Blog', 'Blog', 'Blog', 'ブログ', '블로그', 'المدونة'] },
    { href: 'contact.html', label: ['Contact', '联系我们', 'Contacto', 'Contact', 'Kontakt', 'Contatti', 'お問い合わせ', '문의', 'اتصل بنا'] }
  ];

  function navHtml() {
    var html = '';
    NAV.forEach(function (n) {
      var hasMega = !!n.key;
      html += '<div class="nav__item' + (hasMega ? ' has-mega' : '') + '">' +
        '<a class="nav__link" href="' + n.href + '">' + T9.apply(null, n.label) +
        (hasMega ? CHEV : '') + '</a>' +
        (hasMega ? megaFor(n.key) : '') + '</div>';
    });
    return html;
  }

  function drawerHtml() {
    var html = '';
    NAV.forEach(function (n) {
      html += '<div class="drawer__group' + (n.key ? '' : ' is-static') + '">';
      html += '<a class="drawer__top" href="' + n.href + '">' + T9.apply(null, n.label) +
        (n.key ? CHEV : '') + '</a>';
      if (n.key) {
        html += '<div class="drawer__sub">';
        var pool = n.key === 'products' ? MENU.products : [MENU[n.key]];
        var isTiered = pool.length > 1;
        if (isTiered) {
          pool.forEach(function (col) {
            html += '<div class="drawer__cat-group">' +
              '<button class="drawer__cat" type="button">' + lab(col.h) + CHEV + '</button>' +
              '<div class="drawer__cat-items">';
            col.items.forEach(function (it) { html += '<a href="' + it[1] + '">' + lab(it[0]) + '</a>'; });
            html += '</div></div>';
          });
        } else {
          html += '<div class="drawer__cat-items drawer__cat-items--flat">';
          pool[0].items.forEach(function (it) { html += '<a href="' + it[1] + '">' + lab(it[0]) + '</a>'; });
          html += '</div>';
        }
        html += '</div>';
      }
      html += '</div>';
    });
    return html;
  }

  var LANGS = [
    { c: 'en', n: 'English', s: 'EN' },
    { c: 'zh', n: '中文', s: '中' },
    { c: 'es', n: 'Español', s: 'ES' },
    { c: 'fr', n: 'Français', s: 'FR' },
    { c: 'de', n: 'Deutsch', s: 'DE' },
    { c: 'it', n: 'Italiano', s: 'IT' },
    { c: 'ja', n: '日本語', s: 'JA' },
    { c: 'ko', n: '한국어', s: 'KO' },
    { c: 'ar', n: 'العربية', s: 'AR' }
  ];

  function langHtml() {
    var m = '<button class="lang__btn" type="button" data-lang-toggle>' +
      '<svg class="lang__globe" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18"/></svg>' +
      '<span data-lang-current>English</span>' + CHEV + '</button><div class="lang__menu">';
    LANGS.forEach(function (l) {
      m += '<button type="button" data-lang-set="' + l.c + '"><span class="flag">' + l.s + '</span>' + l.n + '</button>';
    });
    return '<div class="lang">' + m + '</div></div>';
  }

  var SVG_MAIL = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 6h18v12H3z"/><path d="M3 7l9 6 9-6"/></svg>';
  var SVG_PIN = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11z"/><circle cx="12" cy="10" r="2.6"/></svg>';
  var SVG_TEL = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 4h4l2 5-2.5 1.5a12 12 0 0 0 5 5L15 13l5 2v4a1 1 0 0 1-1 1A16 16 0 0 1 4 5a1 1 0 0 1 1-1z"/></svg>';
  var SVG_CLOCK = '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.5 2"/></svg>';

  function render() {
    var top =
      '<div class="topbar"><div class="container"><ul class="topbar__list">' +
      '<li><span><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 6L9 17l-5-5"/></svg>' +
      T('Factory-direct pricing', '工厂直供价格', 'Precio directo de fábrica') + '</span></li>' +
      '<li><span><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 6L9 17l-5-5"/></svg>' +
      T('Low minimum order quantity', '低起订量', 'MOQ bajo') + '</span></li>' +
      '<li><span><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 6L9 17l-5-5"/></svg>' +
      T('Years of manufacturing experience', '多年制造经验', 'Más de 40 años fabricando') + '</span></li>' +
      '</ul><div class="topbar__right">' +
      '<a href="mailto:info@example.com">info@example.com</a>' +
      '<span style="opacity:.4">|</span><a href="tel:+0000000000">+00 0000 0000</a>' +
      '</div></div></div>';

    var head =
      '<header class="header"><div class="container header__inner">' +
      '<a class="logo logo--img" href="index.html"><img src="data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20150%2044%22%3E%3Crect%20width=%22150%22%20height=%2244%22%20rx=%226%22%20fill=%22%23143852%22/%3E%3Ctext%20x=%2275%22%20y=%2228%22%20font-family=%22Arial%22%20font-size=%2216%22%20font-weight=%22bold%22%20fill=%22%23ffc137%22%20text-anchor=%22middle%22%3EYOUR%20LOGO%3C/text%3E%3C/svg%3E" alt="Placeholder image" width="150" height="44"></a>' +
      '<nav class="nav">' + navHtml() + '</nav>' +
      '<div class="nav__cta">' + langHtml() +
      '<a class="btn btn--primary btn--sm" href="contact.html">' +
      T('Get a Quote', '获取报价', 'Pedir presupuesto') + '</a>' +
      '<button class="burger" type="button" data-drawer-open aria-label="Menu"><span></span><span></span><span></span></button>' +
      '</div></div></header>';

    var drawer =
      '<div class="drawer" data-drawer><div class="drawer__head">' +
      '<a class="logo logo--img" href="index.html"><img src="data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20150%2044%22%3E%3Crect%20width=%22150%22%20height=%2244%22%20rx=%226%22%20fill=%22%23143852%22/%3E%3Ctext%20x=%2275%22%20y=%2228%22%20font-family=%22Arial%22%20font-size=%2216%22%20font-weight=%22bold%22%20fill=%22%23ffc137%22%20text-anchor=%22middle%22%3EYOUR%20LOGO%3C/text%3E%3C/svg%3E" alt="Placeholder image" width="150" height="44"></a>' +
      '<button class="drawer__close" type="button" data-drawer-close aria-label="Close">' +
      '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M6 6l12 12M18 6L6 18"/></svg>' +
      '</button></div><div class="drawer__body">' + drawerHtml() +
      '<div class="drawer__foot">' +
      '<a class="btn btn--primary btn--block" href="contact.html">' + T('Get a Quote', '获取报价', 'Pedir presupuesto') + '</a>' +
      '<div class="lang" data-drawer-lang>' +
      '<div class="drawer__langs">' +
      LANGS.map(function (l) {
        return '<button class="btn btn--ghost btn--sm" type="button" data-lang-set="' + l.c + '">' + l.n + '</button>';
      }).join('') + '</div></div>' +
      '</div></div></div>';

    var foot =
      '<footer class="footer"><div class="container"><div class="footer__grid">' +
      '<div class="footer__about"><a class="logo logo--img" href="index.html"><img src="data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20150%2044%22%3E%3Crect%20width=%22150%22%20height=%2244%22%20rx=%226%22%20fill=%22%23143852%22/%3E%3Ctext%20x=%2275%22%20y=%2228%22%20font-family=%22Arial%22%20font-size=%2216%22%20font-weight=%22bold%22%20fill=%22%23ffc137%22%20text-anchor=%22middle%22%3EYOUR%20LOGO%3C/text%3E%3C/svg%3E" alt="Placeholder image" width="150" height="44"></a>' +
      '<p>' + T('A custom manufacturer supplying promotional products to brands worldwide.',
        '面向全球品牌供应定制促销产品的制造商。',
        'Fabricante de productos promocionales para marcas de todo el mundo.') + '</p>' +
      '<div class="socials">' +
      '<a href="#" aria-label="Facebook"><svg viewBox="0 0 24 24"><path d="M13.5 21v-8h2.7l.4-3h-3.1V8.2c0-.9.3-1.5 1.6-1.5H16.7V3.9C16.4 3.9 15.4 3.8 14.3 3.8c-2.3 0-3.8 1.4-3.8 4v2.2H7.8v3h2.7v8z"/></svg></a>' +
      '<a href="#" aria-label="Instagram"><svg viewBox="0 0 24 24"><path d="M12 7.4A4.6 4.6 0 1 0 16.6 12A4.6 4.6 0 0 0 12 7.4m0 7.6A3 3 0 1 1 15 12A3 3 0 0 1 12 15m5.9-7.8a1.1 1.1 0 1 1-1.1-1.1A1.1 1.1 0 0 1 17.9 7.2M12 4.6c2 0 2.3 0 3.1.1a4.2 4.2 0 0 1 1.5.3a2.6 2.6 0 0 1 1.5 1.5a4.2 4.2 0 0 1 .3 1.5c0 .8.1 1.1.1 3.1s0 2.3-.1 3.1a4.2 4.2 0 0 1-.3 1.5a2.6 2.6 0 0 1-1.5 1.5a4.2 4.2 0 0 1-1.5.3c-.8 0-1.1.1-3.1.1s-2.3 0-3.1-.1a4.2 4.2 0 0 1-1.5-.3a2.6 2.6 0 0 1-1.5-1.5a4.2 4.2 0 0 1-.3-1.5c0-.8-.1-1.1-.1-3.1s0-2.3.1-3.1a4.2 4.2 0 0 1 .3-1.5a2.6 2.6 0 0 1 1.5-1.5a4.2 4.2 0 0 1 1.5-.3c.8 0 1.1-.1 3.1-.1M12 3c-2 0-2.4 0-3.2.1a5.9 5.9 0 0 0-2 .4A4.2 4.2 0 0 0 3.5 6.8a5.9 5.9 0 0 0-.4 2C3 9.6 3 10 3 12s0 2.4.1 3.2a5.9 5.9 0 0 0 .4 2a4.2 4.2 0 0 0 3.3 3.3a5.9 5.9 0 0 0 2 .4c.8.1 1.2.1 3.2.1s2.4 0 3.2-.1a5.9 5.9 0 0 0 2-.4a4.2 4.2 0 0 0 3.3-3.3a5.9 5.9 0 0 0 .4-2c.1-.8.1-1.2.1-3.2s0-2.4-.1-3.2a5.9 5.9 0 0 0-.4-2A4.2 4.2 0 0 0 17.2 3.5a5.9 5.9 0 0 0-2-.4C14.4 3 14 3 12 3"/></svg></a>' +
      '<a href="#" aria-label="LinkedIn"><svg viewBox="0 0 24 24"><path d="M6.9 21H3.6V9.4h3.3zM5.25 7.9A1.9 1.9 0 1 1 7.15 6A1.9 1.9 0 0 1 5.25 7.9M21 21h-3.3v-5.6c0-1.4-.5-2.3-1.7-2.3a1.8 1.8 0 0 0-1.7 1.2a2.4 2.4 0 0 0-.1.8V21H11V9.4h3.2v1.6a3.4 3.4 0 0 1 3-1.7c2.2 0 3.8 1.4 3.8 4.4z"/></svg></a>' +
      '<a href="#" aria-label="YouTube"><svg viewBox="0 0 24 24"><path d="M21.6 7.2a2.5 2.5 0 0 0-1.8-1.8C18.2 5 12 5 12 5s-6.2 0-7.8.4a2.5 2.5 0 0 0-1.8 1.8A26 26 0 0 0 2 12a26 26 0 0 0 .4 4.8a2.5 2.5 0 0 0 1.8 1.8C5.8 19 12 19 12 19s6.2 0 7.8-.4a2.5 2.5 0 0 0 1.8-1.8A26 26 0 0 0 22 12a26 26 0 0 0-.4-4.8M10 15.2V8.8l5.5 3.2z"/></svg></a>' +
      '</div></div>' +

      '<div><h5>' + T('Product Catalogue', '产品目录', 'Catálogo') + '</h5><ul>' +
      '<li><a href="category-1.html">' + T('Category 1', '分类 1', 'Categoria 1') + '</a></li>' +
      '<li><a href="category-2.html">' + T('Category 2', '分类 2', 'Categoria 2') + '</a></li>' +
      '<li><a href="category-3.html">' + T('Category 3', '分类 3', 'Categoria 3') + '</a></li>' +
      '<li><a href="category-4.html">' + T('Category 4', '分类 4', 'Categoria 4') + '</a></li>' +
      '<li><a href="category-5.html">' + T('Category 5', '分类 5', 'Categoria 5') + '</a></li>' +
      '<li><a href="category-6.html">' + T('Category 6', '分类 6', 'Categoria 6') + '</a></li>' +
      '<li><a href="products.html">' + T('All Products', '全部产品', 'Todos') + '</a></li>' +
      '</ul></div>' +

      '<div><h5>' + T('Company', '关于我们', 'Empresa') + '</h5><ul>' +
      '<li><a href="company.html">' + T('Company Profile', '公司简介', 'Perfil') + '</a></li>' +
      '<li><a href="factory.html">' + T('Factory Tour', '工厂参观', 'Fábrica') + '</a></li>' +
      '<li><a href="showroom.html">' + T('Showroom', '展示厅', 'Showroom') + '</a></li>' +
      '<li><a href="services.html">' + T('One-Stop Service', '一站式服务', 'Servicio integral') + '</a></li>' +
      '<li><a href="customization-process.html">' + T('Customization Process', '定制流程', 'Proceso') + '</a></li>' +
      '<li><a href="faq.html">' + T('FAQ', '常见问题', 'Preguntas') + '</a></li>' +
      '<li><a href="blog.html">' + T('Blog', '博客', 'Blog') + '</a></li>' +
      '</ul></div>' +

      '<div><h5>' + T('Contact', '联系我们', 'Contacto') + '</h5><ul class="info-list">' +
      '<li class="info-item"><span class="ic">' + SVG_PIN + '</span><div><b>' + siteVal(SITE.name, 'Company Name Ltd.') + '</b><span>' + siteTri(SITE.address) + '</span></div></li>' +
      '<li class="info-item"><span class="ic">' + SVG_MAIL + '</span><div><b>' + T('Email', '邮箱', 'Correo') + '</b><a href="mailto:' + siteVal(SITE.email, 'info@example.com') + '">' + siteVal(SITE.email, 'info@example.com') + '</a></div></li>' +
      '<li class="info-item"><span class="ic">' + SVG_TEL + '</span><div><b>' + T('Tel / WhatsApp', '电话', 'Tel / WhatsApp') + '</b><a href="tel:' + siteVal(SITE.tel, '+00 0000 0000').replace(/ /g, '') + '">' + siteVal(SITE.tel, '+00 0000 0000') + '</a></div></li>' +
      '<li class="info-item"><span class="ic">' + SVG_TEL + '</span><div><b>' + T('Fax', '传真', 'Fax') + '</b><a href="tel:' + siteVal(SITE.fax, '+00 0000 0000').replace(/ /g, '') + '">' + siteVal(SITE.fax, '+00 0000 0000') + '</a></div></li>' +
      '<li class="info-item"><span class="ic">' + SVG_CLOCK + '</span><div><b>' + T('Working hours', '工作时间', 'Horario') + '</b><span>' + siteTri(SITE.hours) + '</span></div></li>' +
      '</ul></div>' +
      '</div>' +

      '<div class="footer__bottom"><span>&copy; ' + siteVal(SITE.year, '2026') + ' ' + siteVal(SITE.name, 'Company Name') + '. ' + siteTri(SITE.legal) + '</span>' +
      '<span>' + siteTri(SITE.note) + '</span>' +
      '</div></div></footer>';

    var toTop = '<button class="to-top" type="button" data-to-top aria-label="Back to top">' +
      '<svg viewBox="0 0 24 24"><path d="M12 19V5M5 12l7-7 7 7"/></svg></button>';

    var host = document.createElement('div');
    host.innerHTML = top + head + drawer;
    document.body.insertBefore(host, document.body.firstChild);
    document.body.insertAdjacentHTML('beforeend', foot + toTop);

    /* Sync the language-switcher label to the active language; i18n.js runs
       before layout.js injects the header, so the initial label stays as
       "English" unless we refresh it here. */
    if (window.TG && window.TG.setLang) {
      window.TG.setLang(window.TG.getLang ? window.TG.getLang() : 'en', false);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', render);
  } else {
    render();
  }
})();

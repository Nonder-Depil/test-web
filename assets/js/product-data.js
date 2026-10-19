/* Local product store for product.html.
   Managed by admin/ - edits made in the content editor land here. */
window.TGProduct = (function () {
  function t9(en, zh, es, fr, de, it, ja, ko, ar) {
    return { en: en, zh: zh, es: es, fr: fr, de: de, it: it, ja: ja, ko: ko, ar: ar };
  }

  var cats = {
    'c1': { en: 'Category 1', zh: '分类 1', es: 'Categoria 1', fr: 'Categorie 1', de: 'Kategorie 1', it: 'Categoria 1', ja: 'カテゴリ 1', ko: '카테고리 1', ar: 'الفئة 1', href: 'category-1.html' },
    'c2': { en: 'Category 2', zh: '分类 2', es: 'Categoria 2', fr: 'Categorie 2', de: 'Kategorie 2', it: 'Categoria 2', ja: 'カテゴリ 2', ko: '카테고리 2', ar: 'الفئة 2', href: 'category-2.html' },
    'c3': { en: 'Category 3', zh: '分类 3', es: 'Categoria 3', fr: 'Categorie 3', de: 'Kategorie 3', it: 'Categoria 3', ja: 'カテゴリ 3', ko: '카테고리 3', ar: 'الفئة 3', href: 'category-3.html' },
    'c4': { en: 'Category 4', zh: '分类 4', es: 'Categoria 4', fr: 'Categorie 4', de: 'Kategorie 4', it: 'Categoria 4', ja: 'カテゴリ 4', ko: '카테고리 4', ar: 'الفئة 4', href: 'category-4.html' },
    'c5': { en: 'Category 5', zh: '分类 5', es: 'Categoria 5', fr: 'Categorie 5', de: 'Kategorie 5', it: 'Categoria 5', ja: 'カテゴリ 5', ko: '카테고리 5', ar: 'الفئة 5', href: 'category-5.html' },
    'c6': { en: 'Category 6', zh: '分类 6', es: 'Categoria 6', fr: 'Categorie 6', de: 'Kategorie 6', it: 'Categoria 6', ja: 'カテゴリ 6', ko: '카테고리 6', ar: 'الفئة 6', href: 'category-6.html' }
  };

  var P = {};

  P['c1-p1'] = {
    cat: 'c1',
    title: t9('Product 1.1', '产品 1.1', 'Producto 1.1', 'Produit 1.1', 'Produkt 1.1', 'Prodotto 1.1', '商品 1.1', '제품 1.1', 'المنتج 1.1'),
    sub: t9('Product subtitle - replace with your own text', '产品副标题，请替换为你的文案', 'Subtitulo del producto: reemplazalo con tu texto', 'Sous-titre du produit - remplacez par votre texte', 'Produkt-Untertitel - durch eigenen Text ersetzen', 'Sottotitolo prodotto - sostituisci con il tuo testo', '商品サブタイトル。独自のテキストに置き換えてください', '제품 부제 - 원하는 문구로 교체하세요', 'عنوان فرعي للمنتج - استبدله بنصك'),
    lead: t9('Lead paragraph for this product. Replace it with your own description.', '产品导语段落。请替换为你的产品描述。', 'Parrafo de introduccion del producto. Reemplazalo con tu descripcion.', 'Paragraphe d\'introduction du produit. Remplacez par votre description.', 'Einleitungsabsatz zum Produkt. Durch eigene Beschreibung ersetzen.', 'Paragrafo introduttivo del prodotto. Sostituiscilo con la tua descrizione.', '商品の導入段落です。独自の説明文に置き換えてください。', '제품 소개 문단입니다. 원하는 설명으로 교체하세요.', 'فقرة تمهيدية للمنتج. استبدلها بوصفك الخاص.'),
    intro: t9('Company introduction placeholder. Replace with your own copy.', '公司介绍占位文本。请替换为你的文案。', 'Texto de presentacion de la empresa. Reemplazalo con tu contenido.', 'Texte de presentation de votre entreprise. Remplacez par votre contenu.', 'Platzhalter fur die Unternehmensvorstellung. Durch eigenen Text ersetzen.', 'Testo segnaposto per la presentazione della tua azienda.', '会社紹介のプレースホルダーです。独自の文案に置き換えてください。', '회사 소개 자리표시자입니다. 원하는 문구로 교체하세요.', 'نص بديل لتعريف الشركة. استبدله بمحتواك.'),
    gallery: ['package', 'process', 'cert', 'promotional'],
    options: [
      t9('Specification 1 - replace with your own value', '规格项 1，请替换为你的内容', 'Especificacion 1: reemplazala con tu valor', 'Specification 1 - remplacez par votre valeur', 'Spezifikation 1 - durch eigenen Wert ersetzen', 'Specifica 1 - sostituisci con il tuo valore', '仕様 1。独自の値に置き換えてください', '사양 1 - 원하는 값으로 교체하세요', 'المواصفة 1 - استبدلها بقيمتك'),
      t9('Specification 2 - replace with your own value', '规格项 2，请替换为你的内容', 'Especificacion 2: reemplazala con tu valor', 'Specification 2 - remplacez par votre valeur', 'Spezifikation 2 - durch eigenen Wert ersetzen', 'Specifica 2 - sostituisci con il tuo valore', '仕様 2。独自の値に置き換えてください', '사양 2 - 원하는 값으로 교체하세요', 'المواصفة 2 - استبدلها بقيمتك'),
      t9('Specification 3 - replace with your own value', '规格项 3，请替换为你的内容', 'Especificacion 3: reemplazala con tu valor', 'Specification 3 - remplacez par votre valeur', 'Spezifikation 3 - durch eigenen Wert ersetzen', 'Specifica 3 - sostituisci con il tuo valore', '仕様 3。独自の値に置き換えてください', '사양 3 - 원하는 값으로 교체하세요', 'المواصفة 3 - استبدلها بقيمتك'),
      t9('Specification 4 - replace with your own value', '规格项 4，请替换为你的内容', 'Especificacion 4: reemplazala con tu valor', 'Specification 4 - remplacez par votre valeur', 'Spezifikation 4 - durch eigenen Wert ersetzen', 'Specifica 4 - sostituisci con il tuo valore', '仕様 4。独自の値に置き換えてください', '사양 4 - 원하는 값으로 교체하세요', 'المواصفة 4 - استبدلها بقيمتك')
    ],
    applications: [
      t9('Application 1 - replace with your own text', '应用场景 1，请替换为你的内容', 'Aplicacion 1: reemplazala con tu texto', 'Application 1 - remplacez par votre texte', 'Anwendung 1 - durch eigenen Text ersetzen', 'Applicazione 1 - sostituisci con il tuo testo', '用途 1。独自のテキストに置き換えてください', '적용 분야 1 - 원하는 문구로 교체하세요', 'الاستخدام 1 - استبدله بنصك'),
      t9('Application 2 - replace with your own text', '应用场景 2，请替换为你的内容', 'Aplicacion 2: reemplazala con tu texto', 'Application 2 - remplacez par votre texte', 'Anwendung 2 - durch eigenen Text ersetzen', 'Applicazione 2 - sostituisci con il tuo testo', '用途 2。独自のテキストに置き換えてください', '적용 분야 2 - 원하는 문구로 교체하세요', 'الاستخدام 2 - استبدله بنصك'),
      t9('Application 3 - replace with your own text', '应用场景 3，请替换为你的内容', 'Aplicacion 3: reemplazala con tu texto', 'Application 3 - remplacez par votre texte', 'Anwendung 3 - durch eigenen Text ersetzen', 'Applicazione 3 - sostituisci con il tuo testo', '用途 3。独自のテキストに置き換えてください', '적용 분야 3 - 원하는 문구로 교체하세요', 'الاستخدام 3 - استبدله بنصك')
    ]
  };

  P['c1-p2'] = {
    cat: 'c1',
    title: t9('Product 1.2', '产品 1.2', 'Producto 1.2', 'Produit 1.2', 'Produkt 1.2', 'Prodotto 1.2', '商品 1.2', '제품 1.2', 'المنتج 1.2'),
    sub: t9('Product subtitle - replace with your own text', '产品副标题，请替换为你的文案', 'Subtitulo del producto: reemplazalo con tu texto', 'Sous-titre du produit - remplacez par votre texte', 'Produkt-Untertitel - durch eigenen Text ersetzen', 'Sottotitolo prodotto - sostituisci con il tuo testo', '商品サブタイトル。独自のテキストに置き換えてください', '제품 부제 - 원하는 문구로 교체하세요', 'عنوان فرعي للمنتج - استبدله بنصك'),
    lead: t9('Lead paragraph for this product. Replace it with your own description.', '产品导语段落。请替换为你的产品描述。', 'Parrafo de introduccion del producto. Reemplazalo con tu descripcion.', 'Paragraphe d\'introduction du produit. Remplacez par votre description.', 'Einleitungsabsatz zum Produkt. Durch eigene Beschreibung ersetzen.', 'Paragrafo introduttivo del prodotto. Sostituiscilo con la tua descrizione.', '商品の導入段落です。独自の説明文に置き換えてください。', '제품 소개 문단입니다. 원하는 설명으로 교체하세요.', 'فقرة تمهيدية للمنتج. استبدلها بوصفك الخاص.'),
    intro: t9('Company introduction placeholder. Replace with your own copy.', '公司介绍占位文本。请替换为你的文案。', 'Texto de presentacion de la empresa. Reemplazalo con tu contenido.', 'Texte de presentation de votre entreprise. Remplacez par votre contenu.', 'Platzhalter fur die Unternehmensvorstellung. Durch eigenen Text ersetzen.', 'Testo segnaposto per la presentazione della tua azienda.', '会社紹介のプレースホルダーです。独自の文案に置き換えてください。', '회사 소개 자리표시자입니다. 원하는 문구로 교체하세요.', 'نص بديل لتعريف الشركة. استبدله بمحتواك.'),
    gallery: ['package', 'process', 'cert', 'promotional'],
    options: [
      t9('Specification 1 - replace with your own value', '规格项 1，请替换为你的内容', 'Especificacion 1: reemplazala con tu valor', 'Specification 1 - remplacez par votre valeur', 'Spezifikation 1 - durch eigenen Wert ersetzen', 'Specifica 1 - sostituisci con il tuo valore', '仕様 1。独自の値に置き換えてください', '사양 1 - 원하는 값으로 교체하세요', 'المواصفة 1 - استبدلها بقيمتك'),
      t9('Specification 2 - replace with your own value', '规格项 2，请替换为你的内容', 'Especificacion 2: reemplazala con tu valor', 'Specification 2 - remplacez par votre valeur', 'Spezifikation 2 - durch eigenen Wert ersetzen', 'Specifica 2 - sostituisci con il tuo valore', '仕様 2。独自の値に置き換えてください', '사양 2 - 원하는 값으로 교체하세요', 'المواصفة 2 - استبدلها بقيمتك'),
      t9('Specification 3 - replace with your own value', '规格项 3，请替换为你的内容', 'Especificacion 3: reemplazala con tu valor', 'Specification 3 - remplacez par votre valeur', 'Spezifikation 3 - durch eigenen Wert ersetzen', 'Specifica 3 - sostituisci con il tuo valore', '仕様 3。独自の値に置き換えてください', '사양 3 - 원하는 값으로 교체하세요', 'المواصفة 3 - استبدلها بقيمتك'),
      t9('Specification 4 - replace with your own value', '规格项 4，请替换为你的内容', 'Especificacion 4: reemplazala con tu valor', 'Specification 4 - remplacez par votre valeur', 'Spezifikation 4 - durch eigenen Wert ersetzen', 'Specifica 4 - sostituisci con il tuo valore', '仕様 4。独自の値に置き換えてください', '사양 4 - 원하는 값으로 교체하세요', 'المواصفة 4 - استبدلها بقيمتك')
    ],
    applications: [
      t9('Application 1 - replace with your own text', '应用场景 1，请替换为你的内容', 'Aplicacion 1: reemplazala con tu texto', 'Application 1 - remplacez par votre texte', 'Anwendung 1 - durch eigenen Text ersetzen', 'Applicazione 1 - sostituisci con il tuo testo', '用途 1。独自のテキストに置き換えてください', '적용 분야 1 - 원하는 문구로 교체하세요', 'الاستخدام 1 - استبدله بنصك'),
      t9('Application 2 - replace with your own text', '应用场景 2，请替换为你的内容', 'Aplicacion 2: reemplazala con tu texto', 'Application 2 - remplacez par votre texte', 'Anwendung 2 - durch eigenen Text ersetzen', 'Applicazione 2 - sostituisci con il tuo testo', '用途 2。独自のテキストに置き換えてください', '적용 분야 2 - 원하는 문구로 교체하세요', 'الاستخدام 2 - استبدله بنصك'),
      t9('Application 3 - replace with your own text', '应用场景 3，请替换为你的内容', 'Aplicacion 3: reemplazala con tu texto', 'Application 3 - remplacez par votre texte', 'Anwendung 3 - durch eigenen Text ersetzen', 'Applicazione 3 - sostituisci con il tuo testo', '用途 3。独自のテキストに置き換えてください', '적용 분야 3 - 원하는 문구로 교체하세요', 'الاستخدام 3 - استبدله بنصك')
    ]
  };

  P['c1-p3'] = {
    cat: 'c1',
    title: t9('Product 1.3', '产品 1.3', 'Producto 1.3', 'Produit 1.3', 'Produkt 1.3', 'Prodotto 1.3', '商品 1.3', '제품 1.3', 'المنتج 1.3'),
    sub: t9('Product subtitle - replace with your own text', '产品副标题，请替换为你的文案', 'Subtitulo del producto: reemplazalo con tu texto', 'Sous-titre du produit - remplacez par votre texte', 'Produkt-Untertitel - durch eigenen Text ersetzen', 'Sottotitolo prodotto - sostituisci con il tuo testo', '商品サブタイトル。独自のテキストに置き換えてください', '제품 부제 - 원하는 문구로 교체하세요', 'عنوان فرعي للمنتج - استبدله بنصك'),
    lead: t9('Lead paragraph for this product. Replace it with your own description.', '产品导语段落。请替换为你的产品描述。', 'Parrafo de introduccion del producto. Reemplazalo con tu descripcion.', 'Paragraphe d\'introduction du produit. Remplacez par votre description.', 'Einleitungsabsatz zum Produkt. Durch eigene Beschreibung ersetzen.', 'Paragrafo introduttivo del prodotto. Sostituiscilo con la tua descrizione.', '商品の導入段落です。独自の説明文に置き換えてください。', '제품 소개 문단입니다. 원하는 설명으로 교체하세요.', 'فقرة تمهيدية للمنتج. استبدلها بوصفك الخاص.'),
    intro: t9('Company introduction placeholder. Replace with your own copy.', '公司介绍占位文本。请替换为你的文案。', 'Texto de presentacion de la empresa. Reemplazalo con tu contenido.', 'Texte de presentation de votre entreprise. Remplacez par votre contenu.', 'Platzhalter fur die Unternehmensvorstellung. Durch eigenen Text ersetzen.', 'Testo segnaposto per la presentazione della tua azienda.', '会社紹介のプレースホルダーです。独自の文案に置き換えてください。', '회사 소개 자리표시자입니다. 원하는 문구로 교체하세요.', 'نص بديل لتعريف الشركة. استبدله بمحتواك.'),
    gallery: ['package', 'process', 'cert', 'promotional'],
    options: [
      t9('Specification 1 - replace with your own value', '规格项 1，请替换为你的内容', 'Especificacion 1: reemplazala con tu valor', 'Specification 1 - remplacez par votre valeur', 'Spezifikation 1 - durch eigenen Wert ersetzen', 'Specifica 1 - sostituisci con il tuo valore', '仕様 1。独自の値に置き換えてください', '사양 1 - 원하는 값으로 교체하세요', 'المواصفة 1 - استبدلها بقيمتك'),
      t9('Specification 2 - replace with your own value', '规格项 2，请替换为你的内容', 'Especificacion 2: reemplazala con tu valor', 'Specification 2 - remplacez par votre valeur', 'Spezifikation 2 - durch eigenen Wert ersetzen', 'Specifica 2 - sostituisci con il tuo valore', '仕様 2。独自の値に置き換えてください', '사양 2 - 원하는 값으로 교체하세요', 'المواصفة 2 - استبدلها بقيمتك'),
      t9('Specification 3 - replace with your own value', '规格项 3，请替换为你的内容', 'Especificacion 3: reemplazala con tu valor', 'Specification 3 - remplacez par votre valeur', 'Spezifikation 3 - durch eigenen Wert ersetzen', 'Specifica 3 - sostituisci con il tuo valore', '仕様 3。独自の値に置き換えてください', '사양 3 - 원하는 값으로 교체하세요', 'المواصفة 3 - استبدلها بقيمتك'),
      t9('Specification 4 - replace with your own value', '规格项 4，请替换为你的内容', 'Especificacion 4: reemplazala con tu valor', 'Specification 4 - remplacez par votre valeur', 'Spezifikation 4 - durch eigenen Wert ersetzen', 'Specifica 4 - sostituisci con il tuo valore', '仕様 4。独自の値に置き換えてください', '사양 4 - 원하는 값으로 교체하세요', 'المواصفة 4 - استبدلها بقيمتك')
    ],
    applications: [
      t9('Application 1 - replace with your own text', '应用场景 1，请替换为你的内容', 'Aplicacion 1: reemplazala con tu texto', 'Application 1 - remplacez par votre texte', 'Anwendung 1 - durch eigenen Text ersetzen', 'Applicazione 1 - sostituisci con il tuo testo', '用途 1。独自のテキストに置き換えてください', '적용 분야 1 - 원하는 문구로 교체하세요', 'الاستخدام 1 - استبدله بنصك'),
      t9('Application 2 - replace with your own text', '应用场景 2，请替换为你的内容', 'Aplicacion 2: reemplazala con tu texto', 'Application 2 - remplacez par votre texte', 'Anwendung 2 - durch eigenen Text ersetzen', 'Applicazione 2 - sostituisci con il tuo testo', '用途 2。独自のテキストに置き換えてください', '적용 분야 2 - 원하는 문구로 교체하세요', 'الاستخدام 2 - استبدله بنصك'),
      t9('Application 3 - replace with your own text', '应用场景 3，请替换为你的内容', 'Aplicacion 3: reemplazala con tu texto', 'Application 3 - remplacez par votre texte', 'Anwendung 3 - durch eigenen Text ersetzen', 'Applicazione 3 - sostituisci con il tuo testo', '用途 3。独自のテキストに置き換えてください', '적용 분야 3 - 원하는 문구로 교체하세요', 'الاستخدام 3 - استبدله بنصك')
    ]
  };

  P['c1-p4'] = {
    cat: 'c1',
    title: t9('Product 1.4', '产品 1.4', 'Producto 1.4', 'Produit 1.4', 'Produkt 1.4', 'Prodotto 1.4', '商品 1.4', '제품 1.4', 'المنتج 1.4'),
    sub: t9('Product subtitle - replace with your own text', '产品副标题，请替换为你的文案', 'Subtitulo del producto: reemplazalo con tu texto', 'Sous-titre du produit - remplacez par votre texte', 'Produkt-Untertitel - durch eigenen Text ersetzen', 'Sottotitolo prodotto - sostituisci con il tuo testo', '商品サブタイトル。独自のテキストに置き換えてください', '제품 부제 - 원하는 문구로 교체하세요', 'عنوان فرعي للمنتج - استبدله بنصك'),
    lead: t9('Lead paragraph for this product. Replace it with your own description.', '产品导语段落。请替换为你的产品描述。', 'Parrafo de introduccion del producto. Reemplazalo con tu descripcion.', 'Paragraphe d\'introduction du produit. Remplacez par votre description.', 'Einleitungsabsatz zum Produkt. Durch eigene Beschreibung ersetzen.', 'Paragrafo introduttivo del prodotto. Sostituiscilo con la tua descrizione.', '商品の導入段落です。独自の説明文に置き換えてください。', '제품 소개 문단입니다. 원하는 설명으로 교체하세요.', 'فقرة تمهيدية للمنتج. استبدلها بوصفك الخاص.'),
    intro: t9('Company introduction placeholder. Replace with your own copy.', '公司介绍占位文本。请替换为你的文案。', 'Texto de presentacion de la empresa. Reemplazalo con tu contenido.', 'Texte de presentation de votre entreprise. Remplacez par votre contenu.', 'Platzhalter fur die Unternehmensvorstellung. Durch eigenen Text ersetzen.', 'Testo segnaposto per la presentazione della tua azienda.', '会社紹介のプレースホルダーです。独自の文案に置き換えてください。', '회사 소개 자리표시자입니다. 원하는 문구로 교체하세요.', 'نص بديل لتعريف الشركة. استبدله بمحتواك.'),
    gallery: ['package', 'process', 'cert', 'promotional'],
    options: [
      t9('Specification 1 - replace with your own value', '规格项 1，请替换为你的内容', 'Especificacion 1: reemplazala con tu valor', 'Specification 1 - remplacez par votre valeur', 'Spezifikation 1 - durch eigenen Wert ersetzen', 'Specifica 1 - sostituisci con il tuo valore', '仕様 1。独自の値に置き換えてください', '사양 1 - 원하는 값으로 교체하세요', 'المواصفة 1 - استبدلها بقيمتك'),
      t9('Specification 2 - replace with your own value', '规格项 2，请替换为你的内容', 'Especificacion 2: reemplazala con tu valor', 'Specification 2 - remplacez par votre valeur', 'Spezifikation 2 - durch eigenen Wert ersetzen', 'Specifica 2 - sostituisci con il tuo valore', '仕様 2。独自の値に置き換えてください', '사양 2 - 원하는 값으로 교체하세요', 'المواصفة 2 - استبدلها بقيمتك'),
      t9('Specification 3 - replace with your own value', '规格项 3，请替换为你的内容', 'Especificacion 3: reemplazala con tu valor', 'Specification 3 - remplacez par votre valeur', 'Spezifikation 3 - durch eigenen Wert ersetzen', 'Specifica 3 - sostituisci con il tuo valore', '仕様 3。独自の値に置き換えてください', '사양 3 - 원하는 값으로 교체하세요', 'المواصفة 3 - استبدلها بقيمتك'),
      t9('Specification 4 - replace with your own value', '规格项 4，请替换为你的内容', 'Especificacion 4: reemplazala con tu valor', 'Specification 4 - remplacez par votre valeur', 'Spezifikation 4 - durch eigenen Wert ersetzen', 'Specifica 4 - sostituisci con il tuo valore', '仕様 4。独自の値に置き換えてください', '사양 4 - 원하는 값으로 교체하세요', 'المواصفة 4 - استبدلها بقيمتك')
    ],
    applications: [
      t9('Application 1 - replace with your own text', '应用场景 1，请替换为你的内容', 'Aplicacion 1: reemplazala con tu texto', 'Application 1 - remplacez par votre texte', 'Anwendung 1 - durch eigenen Text ersetzen', 'Applicazione 1 - sostituisci con il tuo testo', '用途 1。独自のテキストに置き換えてください', '적용 분야 1 - 원하는 문구로 교체하세요', 'الاستخدام 1 - استبدله بنصك'),
      t9('Application 2 - replace with your own text', '应用场景 2，请替换为你的内容', 'Aplicacion 2: reemplazala con tu texto', 'Application 2 - remplacez par votre texte', 'Anwendung 2 - durch eigenen Text ersetzen', 'Applicazione 2 - sostituisci con il tuo testo', '用途 2。独自のテキストに置き換えてください', '적용 분야 2 - 원하는 문구로 교체하세요', 'الاستخدام 2 - استبدله بنصك'),
      t9('Application 3 - replace with your own text', '应用场景 3，请替换为你的内容', 'Aplicacion 3: reemplazala con tu texto', 'Application 3 - remplacez par votre texte', 'Anwendung 3 - durch eigenen Text ersetzen', 'Applicazione 3 - sostituisci con il tuo testo', '用途 3。独自のテキストに置き換えてください', '적용 분야 3 - 원하는 문구로 교체하세요', 'الاستخدام 3 - استبدله بنصك')
    ]
  };

  P['c1-p5'] = {
    cat: 'c1',
    title: t9('Product 1.5', '产品 1.5', 'Producto 1.5', 'Produit 1.5', 'Produkt 1.5', 'Prodotto 1.5', '商品 1.5', '제품 1.5', 'المنتج 1.5'),
    sub: t9('Product subtitle - replace with your own text', '产品副标题，请替换为你的文案', 'Subtitulo del producto: reemplazalo con tu texto', 'Sous-titre du produit - remplacez par votre texte', 'Produkt-Untertitel - durch eigenen Text ersetzen', 'Sottotitolo prodotto - sostituisci con il tuo testo', '商品サブタイトル。独自のテキストに置き換えてください', '제품 부제 - 원하는 문구로 교체하세요', 'عنوان فرعي للمنتج - استبدله بنصك'),
    lead: t9('Lead paragraph for this product. Replace it with your own description.', '产品导语段落。请替换为你的产品描述。', 'Parrafo de introduccion del producto. Reemplazalo con tu descripcion.', 'Paragraphe d\'introduction du produit. Remplacez par votre description.', 'Einleitungsabsatz zum Produkt. Durch eigene Beschreibung ersetzen.', 'Paragrafo introduttivo del prodotto. Sostituiscilo con la tua descrizione.', '商品の導入段落です。独自の説明文に置き換えてください。', '제품 소개 문단입니다. 원하는 설명으로 교체하세요.', 'فقرة تمهيدية للمنتج. استبدلها بوصفك الخاص.'),
    intro: t9('Company introduction placeholder. Replace with your own copy.', '公司介绍占位文本。请替换为你的文案。', 'Texto de presentacion de la empresa. Reemplazalo con tu contenido.', 'Texte de presentation de votre entreprise. Remplacez par votre contenu.', 'Platzhalter fur die Unternehmensvorstellung. Durch eigenen Text ersetzen.', 'Testo segnaposto per la presentazione della tua azienda.', '会社紹介のプレースホルダーです。独自の文案に置き換えてください。', '회사 소개 자리표시자입니다. 원하는 문구로 교체하세요.', 'نص بديل لتعريف الشركة. استبدله بمحتواك.'),
    gallery: ['package', 'process', 'cert', 'promotional'],
    options: [
      t9('Specification 1 - replace with your own value', '规格项 1，请替换为你的内容', 'Especificacion 1: reemplazala con tu valor', 'Specification 1 - remplacez par votre valeur', 'Spezifikation 1 - durch eigenen Wert ersetzen', 'Specifica 1 - sostituisci con il tuo valore', '仕様 1。独自の値に置き換えてください', '사양 1 - 원하는 값으로 교체하세요', 'المواصفة 1 - استبدلها بقيمتك'),
      t9('Specification 2 - replace with your own value', '规格项 2，请替换为你的内容', 'Especificacion 2: reemplazala con tu valor', 'Specification 2 - remplacez par votre valeur', 'Spezifikation 2 - durch eigenen Wert ersetzen', 'Specifica 2 - sostituisci con il tuo valore', '仕様 2。独自の値に置き換えてください', '사양 2 - 원하는 값으로 교체하세요', 'المواصفة 2 - استبدلها بقيمتك'),
      t9('Specification 3 - replace with your own value', '规格项 3，请替换为你的内容', 'Especificacion 3: reemplazala con tu valor', 'Specification 3 - remplacez par votre valeur', 'Spezifikation 3 - durch eigenen Wert ersetzen', 'Specifica 3 - sostituisci con il tuo valore', '仕様 3。独自の値に置き換えてください', '사양 3 - 원하는 값으로 교체하세요', 'المواصفة 3 - استبدلها بقيمتك'),
      t9('Specification 4 - replace with your own value', '规格项 4，请替换为你的内容', 'Especificacion 4: reemplazala con tu valor', 'Specification 4 - remplacez par votre valeur', 'Spezifikation 4 - durch eigenen Wert ersetzen', 'Specifica 4 - sostituisci con il tuo valore', '仕様 4。独自の値に置き換えてください', '사양 4 - 원하는 값으로 교체하세요', 'المواصفة 4 - استبدلها بقيمتك')
    ],
    applications: [
      t9('Application 1 - replace with your own text', '应用场景 1，请替换为你的内容', 'Aplicacion 1: reemplazala con tu texto', 'Application 1 - remplacez par votre texte', 'Anwendung 1 - durch eigenen Text ersetzen', 'Applicazione 1 - sostituisci con il tuo testo', '用途 1。独自のテキストに置き換えてください', '적용 분야 1 - 원하는 문구로 교체하세요', 'الاستخدام 1 - استبدله بنصك'),
      t9('Application 2 - replace with your own text', '应用场景 2，请替换为你的内容', 'Aplicacion 2: reemplazala con tu texto', 'Application 2 - remplacez par votre texte', 'Anwendung 2 - durch eigenen Text ersetzen', 'Applicazione 2 - sostituisci con il tuo testo', '用途 2。独自のテキストに置き換えてください', '적용 분야 2 - 원하는 문구로 교체하세요', 'الاستخدام 2 - استبدله بنصك'),
      t9('Application 3 - replace with your own text', '应用场景 3，请替换为你的内容', 'Aplicacion 3: reemplazala con tu texto', 'Application 3 - remplacez par votre texte', 'Anwendung 3 - durch eigenen Text ersetzen', 'Applicazione 3 - sostituisci con il tuo testo', '用途 3。独自のテキストに置き換えてください', '적용 분야 3 - 원하는 문구로 교체하세요', 'الاستخدام 3 - استبدله بنصك')
    ]
  };

  P['c2-p1'] = {
    cat: 'c2',
    title: t9('Product 2.1', '产品 2.1', 'Producto 2.1', 'Produit 2.1', 'Produkt 2.1', 'Prodotto 2.1', '商品 2.1', '제품 2.1', 'المنتج 2.1'),
    sub: t9('Product subtitle - replace with your own text', '产品副标题，请替换为你的文案', 'Subtitulo del producto: reemplazalo con tu texto', 'Sous-titre du produit - remplacez par votre texte', 'Produkt-Untertitel - durch eigenen Text ersetzen', 'Sottotitolo prodotto - sostituisci con il tuo testo', '商品サブタイトル。独自のテキストに置き換えてください', '제품 부제 - 원하는 문구로 교체하세요', 'عنوان فرعي للمنتج - استبدله بنصك'),
    lead: t9('Lead paragraph for this product. Replace it with your own description.', '产品导语段落。请替换为你的产品描述。', 'Parrafo de introduccion del producto. Reemplazalo con tu descripcion.', 'Paragraphe d\'introduction du produit. Remplacez par votre description.', 'Einleitungsabsatz zum Produkt. Durch eigene Beschreibung ersetzen.', 'Paragrafo introduttivo del prodotto. Sostituiscilo con la tua descrizione.', '商品の導入段落です。独自の説明文に置き換えてください。', '제품 소개 문단입니다. 원하는 설명으로 교체하세요.', 'فقرة تمهيدية للمنتج. استبدلها بوصفك الخاص.'),
    intro: t9('Company introduction placeholder. Replace with your own copy.', '公司介绍占位文本。请替换为你的文案。', 'Texto de presentacion de la empresa. Reemplazalo con tu contenido.', 'Texte de presentation de votre entreprise. Remplacez par votre contenu.', 'Platzhalter fur die Unternehmensvorstellung. Durch eigenen Text ersetzen.', 'Testo segnaposto per la presentazione della tua azienda.', '会社紹介のプレースホルダーです。独自の文案に置き換えてください。', '회사 소개 자리표시자입니다. 원하는 문구로 교체하세요.', 'نص بديل لتعريف الشركة. استبدله بمحتواك.'),
    gallery: ['package', 'process', 'cert', 'promotional'],
    options: [
      t9('Specification 1 - replace with your own value', '规格项 1，请替换为你的内容', 'Especificacion 1: reemplazala con tu valor', 'Specification 1 - remplacez par votre valeur', 'Spezifikation 1 - durch eigenen Wert ersetzen', 'Specifica 1 - sostituisci con il tuo valore', '仕様 1。独自の値に置き換えてください', '사양 1 - 원하는 값으로 교체하세요', 'المواصفة 1 - استبدلها بقيمتك'),
      t9('Specification 2 - replace with your own value', '规格项 2，请替换为你的内容', 'Especificacion 2: reemplazala con tu valor', 'Specification 2 - remplacez par votre valeur', 'Spezifikation 2 - durch eigenen Wert ersetzen', 'Specifica 2 - sostituisci con il tuo valore', '仕様 2。独自の値に置き換えてください', '사양 2 - 원하는 값으로 교체하세요', 'المواصفة 2 - استبدلها بقيمتك'),
      t9('Specification 3 - replace with your own value', '规格项 3，请替换为你的内容', 'Especificacion 3: reemplazala con tu valor', 'Specification 3 - remplacez par votre valeur', 'Spezifikation 3 - durch eigenen Wert ersetzen', 'Specifica 3 - sostituisci con il tuo valore', '仕様 3。独自の値に置き換えてください', '사양 3 - 원하는 값으로 교체하세요', 'المواصفة 3 - استبدلها بقيمتك'),
      t9('Specification 4 - replace with your own value', '规格项 4，请替换为你的内容', 'Especificacion 4: reemplazala con tu valor', 'Specification 4 - remplacez par votre valeur', 'Spezifikation 4 - durch eigenen Wert ersetzen', 'Specifica 4 - sostituisci con il tuo valore', '仕様 4。独自の値に置き換えてください', '사양 4 - 원하는 값으로 교체하세요', 'المواصفة 4 - استبدلها بقيمتك')
    ],
    applications: [
      t9('Application 1 - replace with your own text', '应用场景 1，请替换为你的内容', 'Aplicacion 1: reemplazala con tu texto', 'Application 1 - remplacez par votre texte', 'Anwendung 1 - durch eigenen Text ersetzen', 'Applicazione 1 - sostituisci con il tuo testo', '用途 1。独自のテキストに置き換えてください', '적용 분야 1 - 원하는 문구로 교체하세요', 'الاستخدام 1 - استبدله بنصك'),
      t9('Application 2 - replace with your own text', '应用场景 2，请替换为你的内容', 'Aplicacion 2: reemplazala con tu texto', 'Application 2 - remplacez par votre texte', 'Anwendung 2 - durch eigenen Text ersetzen', 'Applicazione 2 - sostituisci con il tuo testo', '用途 2。独自のテキストに置き換えてください', '적용 분야 2 - 원하는 문구로 교체하세요', 'الاستخدام 2 - استبدله بنصك'),
      t9('Application 3 - replace with your own text', '应用场景 3，请替换为你的内容', 'Aplicacion 3: reemplazala con tu texto', 'Application 3 - remplacez par votre texte', 'Anwendung 3 - durch eigenen Text ersetzen', 'Applicazione 3 - sostituisci con il tuo testo', '用途 3。独自のテキストに置き換えてください', '적용 분야 3 - 원하는 문구로 교체하세요', 'الاستخدام 3 - استبدله بنصك')
    ]
  };

  P['c2-p2'] = {
    cat: 'c2',
    title: t9('Product 2.2', '产品 2.2', 'Producto 2.2', 'Produit 2.2', 'Produkt 2.2', 'Prodotto 2.2', '商品 2.2', '제품 2.2', 'المنتج 2.2'),
    sub: t9('Product subtitle - replace with your own text', '产品副标题，请替换为你的文案', 'Subtitulo del producto: reemplazalo con tu texto', 'Sous-titre du produit - remplacez par votre texte', 'Produkt-Untertitel - durch eigenen Text ersetzen', 'Sottotitolo prodotto - sostituisci con il tuo testo', '商品サブタイトル。独自のテキストに置き換えてください', '제품 부제 - 원하는 문구로 교체하세요', 'عنوان فرعي للمنتج - استبدله بنصك'),
    lead: t9('Lead paragraph for this product. Replace it with your own description.', '产品导语段落。请替换为你的产品描述。', 'Parrafo de introduccion del producto. Reemplazalo con tu descripcion.', 'Paragraphe d\'introduction du produit. Remplacez par votre description.', 'Einleitungsabsatz zum Produkt. Durch eigene Beschreibung ersetzen.', 'Paragrafo introduttivo del prodotto. Sostituiscilo con la tua descrizione.', '商品の導入段落です。独自の説明文に置き換えてください。', '제품 소개 문단입니다. 원하는 설명으로 교체하세요.', 'فقرة تمهيدية للمنتج. استبدلها بوصفك الخاص.'),
    intro: t9('Company introduction placeholder. Replace with your own copy.', '公司介绍占位文本。请替换为你的文案。', 'Texto de presentacion de la empresa. Reemplazalo con tu contenido.', 'Texte de presentation de votre entreprise. Remplacez par votre contenu.', 'Platzhalter fur die Unternehmensvorstellung. Durch eigenen Text ersetzen.', 'Testo segnaposto per la presentazione della tua azienda.', '会社紹介のプレースホルダーです。独自の文案に置き換えてください。', '회사 소개 자리표시자입니다. 원하는 문구로 교체하세요.', 'نص بديل لتعريف الشركة. استبدله بمحتواك.'),
    gallery: ['package', 'process', 'cert', 'promotional'],
    options: [
      t9('Specification 1 - replace with your own value', '规格项 1，请替换为你的内容', 'Especificacion 1: reemplazala con tu valor', 'Specification 1 - remplacez par votre valeur', 'Spezifikation 1 - durch eigenen Wert ersetzen', 'Specifica 1 - sostituisci con il tuo valore', '仕様 1。独自の値に置き換えてください', '사양 1 - 원하는 값으로 교체하세요', 'المواصفة 1 - استبدلها بقيمتك'),
      t9('Specification 2 - replace with your own value', '规格项 2，请替换为你的内容', 'Especificacion 2: reemplazala con tu valor', 'Specification 2 - remplacez par votre valeur', 'Spezifikation 2 - durch eigenen Wert ersetzen', 'Specifica 2 - sostituisci con il tuo valore', '仕様 2。独自の値に置き換えてください', '사양 2 - 원하는 값으로 교체하세요', 'المواصفة 2 - استبدلها بقيمتك'),
      t9('Specification 3 - replace with your own value', '规格项 3，请替换为你的内容', 'Especificacion 3: reemplazala con tu valor', 'Specification 3 - remplacez par votre valeur', 'Spezifikation 3 - durch eigenen Wert ersetzen', 'Specifica 3 - sostituisci con il tuo valore', '仕様 3。独自の値に置き換えてください', '사양 3 - 원하는 값으로 교체하세요', 'المواصفة 3 - استبدلها بقيمتك'),
      t9('Specification 4 - replace with your own value', '规格项 4，请替换为你的内容', 'Especificacion 4: reemplazala con tu valor', 'Specification 4 - remplacez par votre valeur', 'Spezifikation 4 - durch eigenen Wert ersetzen', 'Specifica 4 - sostituisci con il tuo valore', '仕様 4。独自の値に置き換えてください', '사양 4 - 원하는 값으로 교체하세요', 'المواصفة 4 - استبدلها بقيمتك')
    ],
    applications: [
      t9('Application 1 - replace with your own text', '应用场景 1，请替换为你的内容', 'Aplicacion 1: reemplazala con tu texto', 'Application 1 - remplacez par votre texte', 'Anwendung 1 - durch eigenen Text ersetzen', 'Applicazione 1 - sostituisci con il tuo testo', '用途 1。独自のテキストに置き換えてください', '적용 분야 1 - 원하는 문구로 교체하세요', 'الاستخدام 1 - استبدله بنصك'),
      t9('Application 2 - replace with your own text', '应用场景 2，请替换为你的内容', 'Aplicacion 2: reemplazala con tu texto', 'Application 2 - remplacez par votre texte', 'Anwendung 2 - durch eigenen Text ersetzen', 'Applicazione 2 - sostituisci con il tuo testo', '用途 2。独自のテキストに置き換えてください', '적용 분야 2 - 원하는 문구로 교체하세요', 'الاستخدام 2 - استبدله بنصك'),
      t9('Application 3 - replace with your own text', '应用场景 3，请替换为你的内容', 'Aplicacion 3: reemplazala con tu texto', 'Application 3 - remplacez par votre texte', 'Anwendung 3 - durch eigenen Text ersetzen', 'Applicazione 3 - sostituisci con il tuo testo', '用途 3。独自のテキストに置き換えてください', '적용 분야 3 - 원하는 문구로 교체하세요', 'الاستخدام 3 - استبدله بنصك')
    ]
  };

  P['c2-p3'] = {
    cat: 'c2',
    title: t9('Product 2.3', '产品 2.3', 'Producto 2.3', 'Produit 2.3', 'Produkt 2.3', 'Prodotto 2.3', '商品 2.3', '제품 2.3', 'المنتج 2.3'),
    sub: t9('Product subtitle - replace with your own text', '产品副标题，请替换为你的文案', 'Subtitulo del producto: reemplazalo con tu texto', 'Sous-titre du produit - remplacez par votre texte', 'Produkt-Untertitel - durch eigenen Text ersetzen', 'Sottotitolo prodotto - sostituisci con il tuo testo', '商品サブタイトル。独自のテキストに置き換えてください', '제품 부제 - 원하는 문구로 교체하세요', 'عنوان فرعي للمنتج - استبدله بنصك'),
    lead: t9('Lead paragraph for this product. Replace it with your own description.', '产品导语段落。请替换为你的产品描述。', 'Parrafo de introduccion del producto. Reemplazalo con tu descripcion.', 'Paragraphe d\'introduction du produit. Remplacez par votre description.', 'Einleitungsabsatz zum Produkt. Durch eigene Beschreibung ersetzen.', 'Paragrafo introduttivo del prodotto. Sostituiscilo con la tua descrizione.', '商品の導入段落です。独自の説明文に置き換えてください。', '제품 소개 문단입니다. 원하는 설명으로 교체하세요.', 'فقرة تمهيدية للمنتج. استبدلها بوصفك الخاص.'),
    intro: t9('Company introduction placeholder. Replace with your own copy.', '公司介绍占位文本。请替换为你的文案。', 'Texto de presentacion de la empresa. Reemplazalo con tu contenido.', 'Texte de presentation de votre entreprise. Remplacez par votre contenu.', 'Platzhalter fur die Unternehmensvorstellung. Durch eigenen Text ersetzen.', 'Testo segnaposto per la presentazione della tua azienda.', '会社紹介のプレースホルダーです。独自の文案に置き換えてください。', '회사 소개 자리표시자입니다. 원하는 문구로 교체하세요.', 'نص بديل لتعريف الشركة. استبدله بمحتواك.'),
    gallery: ['package', 'process', 'cert', 'promotional'],
    options: [
      t9('Specification 1 - replace with your own value', '规格项 1，请替换为你的内容', 'Especificacion 1: reemplazala con tu valor', 'Specification 1 - remplacez par votre valeur', 'Spezifikation 1 - durch eigenen Wert ersetzen', 'Specifica 1 - sostituisci con il tuo valore', '仕様 1。独自の値に置き換えてください', '사양 1 - 원하는 값으로 교체하세요', 'المواصفة 1 - استبدلها بقيمتك'),
      t9('Specification 2 - replace with your own value', '规格项 2，请替换为你的内容', 'Especificacion 2: reemplazala con tu valor', 'Specification 2 - remplacez par votre valeur', 'Spezifikation 2 - durch eigenen Wert ersetzen', 'Specifica 2 - sostituisci con il tuo valore', '仕様 2。独自の値に置き換えてください', '사양 2 - 원하는 값으로 교체하세요', 'المواصفة 2 - استبدلها بقيمتك'),
      t9('Specification 3 - replace with your own value', '规格项 3，请替换为你的内容', 'Especificacion 3: reemplazala con tu valor', 'Specification 3 - remplacez par votre valeur', 'Spezifikation 3 - durch eigenen Wert ersetzen', 'Specifica 3 - sostituisci con il tuo valore', '仕様 3。独自の値に置き換えてください', '사양 3 - 원하는 값으로 교체하세요', 'المواصفة 3 - استبدلها بقيمتك'),
      t9('Specification 4 - replace with your own value', '规格项 4，请替换为你的内容', 'Especificacion 4: reemplazala con tu valor', 'Specification 4 - remplacez par votre valeur', 'Spezifikation 4 - durch eigenen Wert ersetzen', 'Specifica 4 - sostituisci con il tuo valore', '仕様 4。独自の値に置き換えてください', '사양 4 - 원하는 값으로 교체하세요', 'المواصفة 4 - استبدلها بقيمتك')
    ],
    applications: [
      t9('Application 1 - replace with your own text', '应用场景 1，请替换为你的内容', 'Aplicacion 1: reemplazala con tu texto', 'Application 1 - remplacez par votre texte', 'Anwendung 1 - durch eigenen Text ersetzen', 'Applicazione 1 - sostituisci con il tuo testo', '用途 1。独自のテキストに置き換えてください', '적용 분야 1 - 원하는 문구로 교체하세요', 'الاستخدام 1 - استبدله بنصك'),
      t9('Application 2 - replace with your own text', '应用场景 2，请替换为你的内容', 'Aplicacion 2: reemplazala con tu texto', 'Application 2 - remplacez par votre texte', 'Anwendung 2 - durch eigenen Text ersetzen', 'Applicazione 2 - sostituisci con il tuo testo', '用途 2。独自のテキストに置き換えてください', '적용 분야 2 - 원하는 문구로 교체하세요', 'الاستخدام 2 - استبدله بنصك'),
      t9('Application 3 - replace with your own text', '应用场景 3，请替换为你的内容', 'Aplicacion 3: reemplazala con tu texto', 'Application 3 - remplacez par votre texte', 'Anwendung 3 - durch eigenen Text ersetzen', 'Applicazione 3 - sostituisci con il tuo testo', '用途 3。独自のテキストに置き換えてください', '적용 분야 3 - 원하는 문구로 교체하세요', 'الاستخدام 3 - استبدله بنصك')
    ]
  };

  P['c2-p4'] = {
    cat: 'c2',
    title: t9('Product 2.4', '产品 2.4', 'Producto 2.4', 'Produit 2.4', 'Produkt 2.4', 'Prodotto 2.4', '商品 2.4', '제품 2.4', 'المنتج 2.4'),
    sub: t9('Product subtitle - replace with your own text', '产品副标题，请替换为你的文案', 'Subtitulo del producto: reemplazalo con tu texto', 'Sous-titre du produit - remplacez par votre texte', 'Produkt-Untertitel - durch eigenen Text ersetzen', 'Sottotitolo prodotto - sostituisci con il tuo testo', '商品サブタイトル。独自のテキストに置き換えてください', '제품 부제 - 원하는 문구로 교체하세요', 'عنوان فرعي للمنتج - استبدله بنصك'),
    lead: t9('Lead paragraph for this product. Replace it with your own description.', '产品导语段落。请替换为你的产品描述。', 'Parrafo de introduccion del producto. Reemplazalo con tu descripcion.', 'Paragraphe d\'introduction du produit. Remplacez par votre description.', 'Einleitungsabsatz zum Produkt. Durch eigene Beschreibung ersetzen.', 'Paragrafo introduttivo del prodotto. Sostituiscilo con la tua descrizione.', '商品の導入段落です。独自の説明文に置き換えてください。', '제품 소개 문단입니다. 원하는 설명으로 교체하세요.', 'فقرة تمهيدية للمنتج. استبدلها بوصفك الخاص.'),
    intro: t9('Company introduction placeholder. Replace with your own copy.', '公司介绍占位文本。请替换为你的文案。', 'Texto de presentacion de la empresa. Reemplazalo con tu contenido.', 'Texte de presentation de votre entreprise. Remplacez par votre contenu.', 'Platzhalter fur die Unternehmensvorstellung. Durch eigenen Text ersetzen.', 'Testo segnaposto per la presentazione della tua azienda.', '会社紹介のプレースホルダーです。独自の文案に置き換えてください。', '회사 소개 자리표시자입니다. 원하는 문구로 교체하세요.', 'نص بديل لتعريف الشركة. استبدله بمحتواك.'),
    gallery: ['package', 'process', 'cert', 'promotional'],
    options: [
      t9('Specification 1 - replace with your own value', '规格项 1，请替换为你的内容', 'Especificacion 1: reemplazala con tu valor', 'Specification 1 - remplacez par votre valeur', 'Spezifikation 1 - durch eigenen Wert ersetzen', 'Specifica 1 - sostituisci con il tuo valore', '仕様 1。独自の値に置き換えてください', '사양 1 - 원하는 값으로 교체하세요', 'المواصفة 1 - استبدلها بقيمتك'),
      t9('Specification 2 - replace with your own value', '规格项 2，请替换为你的内容', 'Especificacion 2: reemplazala con tu valor', 'Specification 2 - remplacez par votre valeur', 'Spezifikation 2 - durch eigenen Wert ersetzen', 'Specifica 2 - sostituisci con il tuo valore', '仕様 2。独自の値に置き換えてください', '사양 2 - 원하는 값으로 교체하세요', 'المواصفة 2 - استبدلها بقيمتك'),
      t9('Specification 3 - replace with your own value', '规格项 3，请替换为你的内容', 'Especificacion 3: reemplazala con tu valor', 'Specification 3 - remplacez par votre valeur', 'Spezifikation 3 - durch eigenen Wert ersetzen', 'Specifica 3 - sostituisci con il tuo valore', '仕様 3。独自の値に置き換えてください', '사양 3 - 원하는 값으로 교체하세요', 'المواصفة 3 - استبدلها بقيمتك'),
      t9('Specification 4 - replace with your own value', '规格项 4，请替换为你的内容', 'Especificacion 4: reemplazala con tu valor', 'Specification 4 - remplacez par votre valeur', 'Spezifikation 4 - durch eigenen Wert ersetzen', 'Specifica 4 - sostituisci con il tuo valore', '仕様 4。独自の値に置き換えてください', '사양 4 - 원하는 값으로 교체하세요', 'المواصفة 4 - استبدلها بقيمتك')
    ],
    applications: [
      t9('Application 1 - replace with your own text', '应用场景 1，请替换为你的内容', 'Aplicacion 1: reemplazala con tu texto', 'Application 1 - remplacez par votre texte', 'Anwendung 1 - durch eigenen Text ersetzen', 'Applicazione 1 - sostituisci con il tuo testo', '用途 1。独自のテキストに置き換えてください', '적용 분야 1 - 원하는 문구로 교체하세요', 'الاستخدام 1 - استبدله بنصك'),
      t9('Application 2 - replace with your own text', '应用场景 2，请替换为你的内容', 'Aplicacion 2: reemplazala con tu texto', 'Application 2 - remplacez par votre texte', 'Anwendung 2 - durch eigenen Text ersetzen', 'Applicazione 2 - sostituisci con il tuo testo', '用途 2。独自のテキストに置き換えてください', '적용 분야 2 - 원하는 문구로 교체하세요', 'الاستخدام 2 - استبدله بنصك'),
      t9('Application 3 - replace with your own text', '应用场景 3，请替换为你的内容', 'Aplicacion 3: reemplazala con tu texto', 'Application 3 - remplacez par votre texte', 'Anwendung 3 - durch eigenen Text ersetzen', 'Applicazione 3 - sostituisci con il tuo testo', '用途 3。独自のテキストに置き換えてください', '적용 분야 3 - 원하는 문구로 교체하세요', 'الاستخدام 3 - استبدله بنصك')
    ]
  };

  P['c2-p5'] = {
    cat: 'c2',
    title: t9('Product 2.5', '产品 2.5', 'Producto 2.5', 'Produit 2.5', 'Produkt 2.5', 'Prodotto 2.5', '商品 2.5', '제품 2.5', 'المنتج 2.5'),
    sub: t9('Product subtitle - replace with your own text', '产品副标题，请替换为你的文案', 'Subtitulo del producto: reemplazalo con tu texto', 'Sous-titre du produit - remplacez par votre texte', 'Produkt-Untertitel - durch eigenen Text ersetzen', 'Sottotitolo prodotto - sostituisci con il tuo testo', '商品サブタイトル。独自のテキストに置き換えてください', '제품 부제 - 원하는 문구로 교체하세요', 'عنوان فرعي للمنتج - استبدله بنصك'),
    lead: t9('Lead paragraph for this product. Replace it with your own description.', '产品导语段落。请替换为你的产品描述。', 'Parrafo de introduccion del producto. Reemplazalo con tu descripcion.', 'Paragraphe d\'introduction du produit. Remplacez par votre description.', 'Einleitungsabsatz zum Produkt. Durch eigene Beschreibung ersetzen.', 'Paragrafo introduttivo del prodotto. Sostituiscilo con la tua descrizione.', '商品の導入段落です。独自の説明文に置き換えてください。', '제품 소개 문단입니다. 원하는 설명으로 교체하세요.', 'فقرة تمهيدية للمنتج. استبدلها بوصفك الخاص.'),
    intro: t9('Company introduction placeholder. Replace with your own copy.', '公司介绍占位文本。请替换为你的文案。', 'Texto de presentacion de la empresa. Reemplazalo con tu contenido.', 'Texte de presentation de votre entreprise. Remplacez par votre contenu.', 'Platzhalter fur die Unternehmensvorstellung. Durch eigenen Text ersetzen.', 'Testo segnaposto per la presentazione della tua azienda.', '会社紹介のプレースホルダーです。独自の文案に置き換えてください。', '회사 소개 자리표시자입니다. 원하는 문구로 교체하세요.', 'نص بديل لتعريف الشركة. استبدله بمحتواك.'),
    gallery: ['package', 'process', 'cert', 'promotional'],
    options: [
      t9('Specification 1 - replace with your own value', '规格项 1，请替换为你的内容', 'Especificacion 1: reemplazala con tu valor', 'Specification 1 - remplacez par votre valeur', 'Spezifikation 1 - durch eigenen Wert ersetzen', 'Specifica 1 - sostituisci con il tuo valore', '仕様 1。独自の値に置き換えてください', '사양 1 - 원하는 값으로 교체하세요', 'المواصفة 1 - استبدلها بقيمتك'),
      t9('Specification 2 - replace with your own value', '规格项 2，请替换为你的内容', 'Especificacion 2: reemplazala con tu valor', 'Specification 2 - remplacez par votre valeur', 'Spezifikation 2 - durch eigenen Wert ersetzen', 'Specifica 2 - sostituisci con il tuo valore', '仕様 2。独自の値に置き換えてください', '사양 2 - 원하는 값으로 교체하세요', 'المواصفة 2 - استبدلها بقيمتك'),
      t9('Specification 3 - replace with your own value', '规格项 3，请替换为你的内容', 'Especificacion 3: reemplazala con tu valor', 'Specification 3 - remplacez par votre valeur', 'Spezifikation 3 - durch eigenen Wert ersetzen', 'Specifica 3 - sostituisci con il tuo valore', '仕様 3。独自の値に置き換えてください', '사양 3 - 원하는 값으로 교체하세요', 'المواصفة 3 - استبدلها بقيمتك'),
      t9('Specification 4 - replace with your own value', '规格项 4，请替换为你的内容', 'Especificacion 4: reemplazala con tu valor', 'Specification 4 - remplacez par votre valeur', 'Spezifikation 4 - durch eigenen Wert ersetzen', 'Specifica 4 - sostituisci con il tuo valore', '仕様 4。独自の値に置き換えてください', '사양 4 - 원하는 값으로 교체하세요', 'المواصفة 4 - استبدلها بقيمتك')
    ],
    applications: [
      t9('Application 1 - replace with your own text', '应用场景 1，请替换为你的内容', 'Aplicacion 1: reemplazala con tu texto', 'Application 1 - remplacez par votre texte', 'Anwendung 1 - durch eigenen Text ersetzen', 'Applicazione 1 - sostituisci con il tuo testo', '用途 1。独自のテキストに置き換えてください', '적용 분야 1 - 원하는 문구로 교체하세요', 'الاستخدام 1 - استبدله بنصك'),
      t9('Application 2 - replace with your own text', '应用场景 2，请替换为你的内容', 'Aplicacion 2: reemplazala con tu texto', 'Application 2 - remplacez par votre texte', 'Anwendung 2 - durch eigenen Text ersetzen', 'Applicazione 2 - sostituisci con il tuo testo', '用途 2。独自のテキストに置き換えてください', '적용 분야 2 - 원하는 문구로 교체하세요', 'الاستخدام 2 - استبدله بنصك'),
      t9('Application 3 - replace with your own text', '应用场景 3，请替换为你的内容', 'Aplicacion 3: reemplazala con tu texto', 'Application 3 - remplacez par votre texte', 'Anwendung 3 - durch eigenen Text ersetzen', 'Applicazione 3 - sostituisci con il tuo testo', '用途 3。独自のテキストに置き換えてください', '적용 분야 3 - 원하는 문구로 교체하세요', 'الاستخدام 3 - استبدله بنصك')
    ]
  };

  P['c3-p1'] = {
    cat: 'c3',
    title: t9('Product 3.1', '产品 3.1', 'Producto 3.1', 'Produit 3.1', 'Produkt 3.1', 'Prodotto 3.1', '商品 3.1', '제품 3.1', 'المنتج 3.1'),
    sub: t9('Product subtitle - replace with your own text', '产品副标题，请替换为你的文案', 'Subtitulo del producto: reemplazalo con tu texto', 'Sous-titre du produit - remplacez par votre texte', 'Produkt-Untertitel - durch eigenen Text ersetzen', 'Sottotitolo prodotto - sostituisci con il tuo testo', '商品サブタイトル。独自のテキストに置き換えてください', '제품 부제 - 원하는 문구로 교체하세요', 'عنوان فرعي للمنتج - استبدله بنصك'),
    lead: t9('Lead paragraph for this product. Replace it with your own description.', '产品导语段落。请替换为你的产品描述。', 'Parrafo de introduccion del producto. Reemplazalo con tu descripcion.', 'Paragraphe d\'introduction du produit. Remplacez par votre description.', 'Einleitungsabsatz zum Produkt. Durch eigene Beschreibung ersetzen.', 'Paragrafo introduttivo del prodotto. Sostituiscilo con la tua descrizione.', '商品の導入段落です。独自の説明文に置き換えてください。', '제품 소개 문단입니다. 원하는 설명으로 교체하세요.', 'فقرة تمهيدية للمنتج. استبدلها بوصفك الخاص.'),
    intro: t9('Company introduction placeholder. Replace with your own copy.', '公司介绍占位文本。请替换为你的文案。', 'Texto de presentacion de la empresa. Reemplazalo con tu contenido.', 'Texte de presentation de votre entreprise. Remplacez par votre contenu.', 'Platzhalter fur die Unternehmensvorstellung. Durch eigenen Text ersetzen.', 'Testo segnaposto per la presentazione della tua azienda.', '会社紹介のプレースホルダーです。独自の文案に置き換えてください。', '회사 소개 자리표시자입니다. 원하는 문구로 교체하세요.', 'نص بديل لتعريف الشركة. استبدله بمحتواك.'),
    gallery: ['package', 'process', 'cert', 'promotional'],
    options: [
      t9('Specification 1 - replace with your own value', '规格项 1，请替换为你的内容', 'Especificacion 1: reemplazala con tu valor', 'Specification 1 - remplacez par votre valeur', 'Spezifikation 1 - durch eigenen Wert ersetzen', 'Specifica 1 - sostituisci con il tuo valore', '仕様 1。独自の値に置き換えてください', '사양 1 - 원하는 값으로 교체하세요', 'المواصفة 1 - استبدلها بقيمتك'),
      t9('Specification 2 - replace with your own value', '规格项 2，请替换为你的内容', 'Especificacion 2: reemplazala con tu valor', 'Specification 2 - remplacez par votre valeur', 'Spezifikation 2 - durch eigenen Wert ersetzen', 'Specifica 2 - sostituisci con il tuo valore', '仕様 2。独自の値に置き換えてください', '사양 2 - 원하는 값으로 교체하세요', 'المواصفة 2 - استبدلها بقيمتك'),
      t9('Specification 3 - replace with your own value', '规格项 3，请替换为你的内容', 'Especificacion 3: reemplazala con tu valor', 'Specification 3 - remplacez par votre valeur', 'Spezifikation 3 - durch eigenen Wert ersetzen', 'Specifica 3 - sostituisci con il tuo valore', '仕様 3。独自の値に置き換えてください', '사양 3 - 원하는 값으로 교체하세요', 'المواصفة 3 - استبدلها بقيمتك'),
      t9('Specification 4 - replace with your own value', '规格项 4，请替换为你的内容', 'Especificacion 4: reemplazala con tu valor', 'Specification 4 - remplacez par votre valeur', 'Spezifikation 4 - durch eigenen Wert ersetzen', 'Specifica 4 - sostituisci con il tuo valore', '仕様 4。独自の値に置き換えてください', '사양 4 - 원하는 값으로 교체하세요', 'المواصفة 4 - استبدلها بقيمتك')
    ],
    applications: [
      t9('Application 1 - replace with your own text', '应用场景 1，请替换为你的内容', 'Aplicacion 1: reemplazala con tu texto', 'Application 1 - remplacez par votre texte', 'Anwendung 1 - durch eigenen Text ersetzen', 'Applicazione 1 - sostituisci con il tuo testo', '用途 1。独自のテキストに置き換えてください', '적용 분야 1 - 원하는 문구로 교체하세요', 'الاستخدام 1 - استبدله بنصك'),
      t9('Application 2 - replace with your own text', '应用场景 2，请替换为你的内容', 'Aplicacion 2: reemplazala con tu texto', 'Application 2 - remplacez par votre texte', 'Anwendung 2 - durch eigenen Text ersetzen', 'Applicazione 2 - sostituisci con il tuo testo', '用途 2。独自のテキストに置き換えてください', '적용 분야 2 - 원하는 문구로 교체하세요', 'الاستخدام 2 - استبدله بنصك'),
      t9('Application 3 - replace with your own text', '应用场景 3，请替换为你的内容', 'Aplicacion 3: reemplazala con tu texto', 'Application 3 - remplacez par votre texte', 'Anwendung 3 - durch eigenen Text ersetzen', 'Applicazione 3 - sostituisci con il tuo testo', '用途 3。独自のテキストに置き換えてください', '적용 분야 3 - 원하는 문구로 교체하세요', 'الاستخدام 3 - استبدله بنصك')
    ]
  };

  P['c3-p2'] = {
    cat: 'c3',
    title: t9('Product 3.2', '产品 3.2', 'Producto 3.2', 'Produit 3.2', 'Produkt 3.2', 'Prodotto 3.2', '商品 3.2', '제품 3.2', 'المنتج 3.2'),
    sub: t9('Product subtitle - replace with your own text', '产品副标题，请替换为你的文案', 'Subtitulo del producto: reemplazalo con tu texto', 'Sous-titre du produit - remplacez par votre texte', 'Produkt-Untertitel - durch eigenen Text ersetzen', 'Sottotitolo prodotto - sostituisci con il tuo testo', '商品サブタイトル。独自のテキストに置き換えてください', '제품 부제 - 원하는 문구로 교체하세요', 'عنوان فرعي للمنتج - استبدله بنصك'),
    lead: t9('Lead paragraph for this product. Replace it with your own description.', '产品导语段落。请替换为你的产品描述。', 'Parrafo de introduccion del producto. Reemplazalo con tu descripcion.', 'Paragraphe d\'introduction du produit. Remplacez par votre description.', 'Einleitungsabsatz zum Produkt. Durch eigene Beschreibung ersetzen.', 'Paragrafo introduttivo del prodotto. Sostituiscilo con la tua descrizione.', '商品の導入段落です。独自の説明文に置き換えてください。', '제품 소개 문단입니다. 원하는 설명으로 교체하세요.', 'فقرة تمهيدية للمنتج. استبدلها بوصفك الخاص.'),
    intro: t9('Company introduction placeholder. Replace with your own copy.', '公司介绍占位文本。请替换为你的文案。', 'Texto de presentacion de la empresa. Reemplazalo con tu contenido.', 'Texte de presentation de votre entreprise. Remplacez par votre contenu.', 'Platzhalter fur die Unternehmensvorstellung. Durch eigenen Text ersetzen.', 'Testo segnaposto per la presentazione della tua azienda.', '会社紹介のプレースホルダーです。独自の文案に置き換えてください。', '회사 소개 자리표시자입니다. 원하는 문구로 교체하세요.', 'نص بديل لتعريف الشركة. استبدله بمحتواك.'),
    gallery: ['package', 'process', 'cert', 'promotional'],
    options: [
      t9('Specification 1 - replace with your own value', '规格项 1，请替换为你的内容', 'Especificacion 1: reemplazala con tu valor', 'Specification 1 - remplacez par votre valeur', 'Spezifikation 1 - durch eigenen Wert ersetzen', 'Specifica 1 - sostituisci con il tuo valore', '仕様 1。独自の値に置き換えてください', '사양 1 - 원하는 값으로 교체하세요', 'المواصفة 1 - استبدلها بقيمتك'),
      t9('Specification 2 - replace with your own value', '规格项 2，请替换为你的内容', 'Especificacion 2: reemplazala con tu valor', 'Specification 2 - remplacez par votre valeur', 'Spezifikation 2 - durch eigenen Wert ersetzen', 'Specifica 2 - sostituisci con il tuo valore', '仕様 2。独自の値に置き換えてください', '사양 2 - 원하는 값으로 교체하세요', 'المواصفة 2 - استبدلها بقيمتك'),
      t9('Specification 3 - replace with your own value', '规格项 3，请替换为你的内容', 'Especificacion 3: reemplazala con tu valor', 'Specification 3 - remplacez par votre valeur', 'Spezifikation 3 - durch eigenen Wert ersetzen', 'Specifica 3 - sostituisci con il tuo valore', '仕様 3。独自の値に置き換えてください', '사양 3 - 원하는 값으로 교체하세요', 'المواصفة 3 - استبدلها بقيمتك'),
      t9('Specification 4 - replace with your own value', '规格项 4，请替换为你的内容', 'Especificacion 4: reemplazala con tu valor', 'Specification 4 - remplacez par votre valeur', 'Spezifikation 4 - durch eigenen Wert ersetzen', 'Specifica 4 - sostituisci con il tuo valore', '仕様 4。独自の値に置き換えてください', '사양 4 - 원하는 값으로 교체하세요', 'المواصفة 4 - استبدلها بقيمتك')
    ],
    applications: [
      t9('Application 1 - replace with your own text', '应用场景 1，请替换为你的内容', 'Aplicacion 1: reemplazala con tu texto', 'Application 1 - remplacez par votre texte', 'Anwendung 1 - durch eigenen Text ersetzen', 'Applicazione 1 - sostituisci con il tuo testo', '用途 1。独自のテキストに置き換えてください', '적용 분야 1 - 원하는 문구로 교체하세요', 'الاستخدام 1 - استبدله بنصك'),
      t9('Application 2 - replace with your own text', '应用场景 2，请替换为你的内容', 'Aplicacion 2: reemplazala con tu texto', 'Application 2 - remplacez par votre texte', 'Anwendung 2 - durch eigenen Text ersetzen', 'Applicazione 2 - sostituisci con il tuo testo', '用途 2。独自のテキストに置き換えてください', '적용 분야 2 - 원하는 문구로 교체하세요', 'الاستخدام 2 - استبدله بنصك'),
      t9('Application 3 - replace with your own text', '应用场景 3，请替换为你的内容', 'Aplicacion 3: reemplazala con tu texto', 'Application 3 - remplacez par votre texte', 'Anwendung 3 - durch eigenen Text ersetzen', 'Applicazione 3 - sostituisci con il tuo testo', '用途 3。独自のテキストに置き換えてください', '적용 분야 3 - 원하는 문구로 교체하세요', 'الاستخدام 3 - استبدله بنصك')
    ]
  };

  P['c3-p3'] = {
    cat: 'c3',
    title: t9('Product 3.3', '产品 3.3', 'Producto 3.3', 'Produit 3.3', 'Produkt 3.3', 'Prodotto 3.3', '商品 3.3', '제품 3.3', 'المنتج 3.3'),
    sub: t9('Product subtitle - replace with your own text', '产品副标题，请替换为你的文案', 'Subtitulo del producto: reemplazalo con tu texto', 'Sous-titre du produit - remplacez par votre texte', 'Produkt-Untertitel - durch eigenen Text ersetzen', 'Sottotitolo prodotto - sostituisci con il tuo testo', '商品サブタイトル。独自のテキストに置き換えてください', '제품 부제 - 원하는 문구로 교체하세요', 'عنوان فرعي للمنتج - استبدله بنصك'),
    lead: t9('Lead paragraph for this product. Replace it with your own description.', '产品导语段落。请替换为你的产品描述。', 'Parrafo de introduccion del producto. Reemplazalo con tu descripcion.', 'Paragraphe d\'introduction du produit. Remplacez par votre description.', 'Einleitungsabsatz zum Produkt. Durch eigene Beschreibung ersetzen.', 'Paragrafo introduttivo del prodotto. Sostituiscilo con la tua descrizione.', '商品の導入段落です。独自の説明文に置き換えてください。', '제품 소개 문단입니다. 원하는 설명으로 교체하세요.', 'فقرة تمهيدية للمنتج. استبدلها بوصفك الخاص.'),
    intro: t9('Company introduction placeholder. Replace with your own copy.', '公司介绍占位文本。请替换为你的文案。', 'Texto de presentacion de la empresa. Reemplazalo con tu contenido.', 'Texte de presentation de votre entreprise. Remplacez par votre contenu.', 'Platzhalter fur die Unternehmensvorstellung. Durch eigenen Text ersetzen.', 'Testo segnaposto per la presentazione della tua azienda.', '会社紹介のプレースホルダーです。独自の文案に置き換えてください。', '회사 소개 자리표시자입니다. 원하는 문구로 교체하세요.', 'نص بديل لتعريف الشركة. استبدله بمحتواك.'),
    gallery: ['package', 'process', 'cert', 'promotional'],
    options: [
      t9('Specification 1 - replace with your own value', '规格项 1，请替换为你的内容', 'Especificacion 1: reemplazala con tu valor', 'Specification 1 - remplacez par votre valeur', 'Spezifikation 1 - durch eigenen Wert ersetzen', 'Specifica 1 - sostituisci con il tuo valore', '仕様 1。独自の値に置き換えてください', '사양 1 - 원하는 값으로 교체하세요', 'المواصفة 1 - استبدلها بقيمتك'),
      t9('Specification 2 - replace with your own value', '规格项 2，请替换为你的内容', 'Especificacion 2: reemplazala con tu valor', 'Specification 2 - remplacez par votre valeur', 'Spezifikation 2 - durch eigenen Wert ersetzen', 'Specifica 2 - sostituisci con il tuo valore', '仕様 2。独自の値に置き換えてください', '사양 2 - 원하는 값으로 교체하세요', 'المواصفة 2 - استبدلها بقيمتك'),
      t9('Specification 3 - replace with your own value', '规格项 3，请替换为你的内容', 'Especificacion 3: reemplazala con tu valor', 'Specification 3 - remplacez par votre valeur', 'Spezifikation 3 - durch eigenen Wert ersetzen', 'Specifica 3 - sostituisci con il tuo valore', '仕様 3。独自の値に置き換えてください', '사양 3 - 원하는 값으로 교체하세요', 'المواصفة 3 - استبدلها بقيمتك'),
      t9('Specification 4 - replace with your own value', '规格项 4，请替换为你的内容', 'Especificacion 4: reemplazala con tu valor', 'Specification 4 - remplacez par votre valeur', 'Spezifikation 4 - durch eigenen Wert ersetzen', 'Specifica 4 - sostituisci con il tuo valore', '仕様 4。独自の値に置き換えてください', '사양 4 - 원하는 값으로 교체하세요', 'المواصفة 4 - استبدلها بقيمتك')
    ],
    applications: [
      t9('Application 1 - replace with your own text', '应用场景 1，请替换为你的内容', 'Aplicacion 1: reemplazala con tu texto', 'Application 1 - remplacez par votre texte', 'Anwendung 1 - durch eigenen Text ersetzen', 'Applicazione 1 - sostituisci con il tuo testo', '用途 1。独自のテキストに置き換えてください', '적용 분야 1 - 원하는 문구로 교체하세요', 'الاستخدام 1 - استبدله بنصك'),
      t9('Application 2 - replace with your own text', '应用场景 2，请替换为你的内容', 'Aplicacion 2: reemplazala con tu texto', 'Application 2 - remplacez par votre texte', 'Anwendung 2 - durch eigenen Text ersetzen', 'Applicazione 2 - sostituisci con il tuo testo', '用途 2。独自のテキストに置き換えてください', '적용 분야 2 - 원하는 문구로 교체하세요', 'الاستخدام 2 - استبدله بنصك'),
      t9('Application 3 - replace with your own text', '应用场景 3，请替换为你的内容', 'Aplicacion 3: reemplazala con tu texto', 'Application 3 - remplacez par votre texte', 'Anwendung 3 - durch eigenen Text ersetzen', 'Applicazione 3 - sostituisci con il tuo testo', '用途 3。独自のテキストに置き換えてください', '적용 분야 3 - 원하는 문구로 교체하세요', 'الاستخدام 3 - استبدله بنصك')
    ]
  };

  P['c3-p4'] = {
    cat: 'c3',
    title: t9('Product 3.4', '产品 3.4', 'Producto 3.4', 'Produit 3.4', 'Produkt 3.4', 'Prodotto 3.4', '商品 3.4', '제품 3.4', 'المنتج 3.4'),
    sub: t9('Product subtitle - replace with your own text', '产品副标题，请替换为你的文案', 'Subtitulo del producto: reemplazalo con tu texto', 'Sous-titre du produit - remplacez par votre texte', 'Produkt-Untertitel - durch eigenen Text ersetzen', 'Sottotitolo prodotto - sostituisci con il tuo testo', '商品サブタイトル。独自のテキストに置き換えてください', '제품 부제 - 원하는 문구로 교체하세요', 'عنوان فرعي للمنتج - استبدله بنصك'),
    lead: t9('Lead paragraph for this product. Replace it with your own description.', '产品导语段落。请替换为你的产品描述。', 'Parrafo de introduccion del producto. Reemplazalo con tu descripcion.', 'Paragraphe d\'introduction du produit. Remplacez par votre description.', 'Einleitungsabsatz zum Produkt. Durch eigene Beschreibung ersetzen.', 'Paragrafo introduttivo del prodotto. Sostituiscilo con la tua descrizione.', '商品の導入段落です。独自の説明文に置き換えてください。', '제품 소개 문단입니다. 원하는 설명으로 교체하세요.', 'فقرة تمهيدية للمنتج. استبدلها بوصفك الخاص.'),
    intro: t9('Company introduction placeholder. Replace with your own copy.', '公司介绍占位文本。请替换为你的文案。', 'Texto de presentacion de la empresa. Reemplazalo con tu contenido.', 'Texte de presentation de votre entreprise. Remplacez par votre contenu.', 'Platzhalter fur die Unternehmensvorstellung. Durch eigenen Text ersetzen.', 'Testo segnaposto per la presentazione della tua azienda.', '会社紹介のプレースホルダーです。独自の文案に置き換えてください。', '회사 소개 자리표시자입니다. 원하는 문구로 교체하세요.', 'نص بديل لتعريف الشركة. استبدله بمحتواك.'),
    gallery: ['package', 'process', 'cert', 'promotional'],
    options: [
      t9('Specification 1 - replace with your own value', '规格项 1，请替换为你的内容', 'Especificacion 1: reemplazala con tu valor', 'Specification 1 - remplacez par votre valeur', 'Spezifikation 1 - durch eigenen Wert ersetzen', 'Specifica 1 - sostituisci con il tuo valore', '仕様 1。独自の値に置き換えてください', '사양 1 - 원하는 값으로 교체하세요', 'المواصفة 1 - استبدلها بقيمتك'),
      t9('Specification 2 - replace with your own value', '规格项 2，请替换为你的内容', 'Especificacion 2: reemplazala con tu valor', 'Specification 2 - remplacez par votre valeur', 'Spezifikation 2 - durch eigenen Wert ersetzen', 'Specifica 2 - sostituisci con il tuo valore', '仕様 2。独自の値に置き換えてください', '사양 2 - 원하는 값으로 교체하세요', 'المواصفة 2 - استبدلها بقيمتك'),
      t9('Specification 3 - replace with your own value', '规格项 3，请替换为你的内容', 'Especificacion 3: reemplazala con tu valor', 'Specification 3 - remplacez par votre valeur', 'Spezifikation 3 - durch eigenen Wert ersetzen', 'Specifica 3 - sostituisci con il tuo valore', '仕様 3。独自の値に置き換えてください', '사양 3 - 원하는 값으로 교체하세요', 'المواصفة 3 - استبدلها بقيمتك'),
      t9('Specification 4 - replace with your own value', '规格项 4，请替换为你的内容', 'Especificacion 4: reemplazala con tu valor', 'Specification 4 - remplacez par votre valeur', 'Spezifikation 4 - durch eigenen Wert ersetzen', 'Specifica 4 - sostituisci con il tuo valore', '仕様 4。独自の値に置き換えてください', '사양 4 - 원하는 값으로 교체하세요', 'المواصفة 4 - استبدلها بقيمتك')
    ],
    applications: [
      t9('Application 1 - replace with your own text', '应用场景 1，请替换为你的内容', 'Aplicacion 1: reemplazala con tu texto', 'Application 1 - remplacez par votre texte', 'Anwendung 1 - durch eigenen Text ersetzen', 'Applicazione 1 - sostituisci con il tuo testo', '用途 1。独自のテキストに置き換えてください', '적용 분야 1 - 원하는 문구로 교체하세요', 'الاستخدام 1 - استبدله بنصك'),
      t9('Application 2 - replace with your own text', '应用场景 2，请替换为你的内容', 'Aplicacion 2: reemplazala con tu texto', 'Application 2 - remplacez par votre texte', 'Anwendung 2 - durch eigenen Text ersetzen', 'Applicazione 2 - sostituisci con il tuo testo', '用途 2。独自のテキストに置き換えてください', '적용 분야 2 - 원하는 문구로 교체하세요', 'الاستخدام 2 - استبدله بنصك'),
      t9('Application 3 - replace with your own text', '应用场景 3，请替换为你的内容', 'Aplicacion 3: reemplazala con tu texto', 'Application 3 - remplacez par votre texte', 'Anwendung 3 - durch eigenen Text ersetzen', 'Applicazione 3 - sostituisci con il tuo testo', '用途 3。独自のテキストに置き換えてください', '적용 분야 3 - 원하는 문구로 교체하세요', 'الاستخدام 3 - استبدله بنصك')
    ]
  };

  P['c3-p5'] = {
    cat: 'c3',
    title: t9('Product 3.5', '产品 3.5', 'Producto 3.5', 'Produit 3.5', 'Produkt 3.5', 'Prodotto 3.5', '商品 3.5', '제품 3.5', 'المنتج 3.5'),
    sub: t9('Product subtitle - replace with your own text', '产品副标题，请替换为你的文案', 'Subtitulo del producto: reemplazalo con tu texto', 'Sous-titre du produit - remplacez par votre texte', 'Produkt-Untertitel - durch eigenen Text ersetzen', 'Sottotitolo prodotto - sostituisci con il tuo testo', '商品サブタイトル。独自のテキストに置き換えてください', '제품 부제 - 원하는 문구로 교체하세요', 'عنوان فرعي للمنتج - استبدله بنصك'),
    lead: t9('Lead paragraph for this product. Replace it with your own description.', '产品导语段落。请替换为你的产品描述。', 'Parrafo de introduccion del producto. Reemplazalo con tu descripcion.', 'Paragraphe d\'introduction du produit. Remplacez par votre description.', 'Einleitungsabsatz zum Produkt. Durch eigene Beschreibung ersetzen.', 'Paragrafo introduttivo del prodotto. Sostituiscilo con la tua descrizione.', '商品の導入段落です。独自の説明文に置き換えてください。', '제품 소개 문단입니다. 원하는 설명으로 교체하세요.', 'فقرة تمهيدية للمنتج. استبدلها بوصفك الخاص.'),
    intro: t9('Company introduction placeholder. Replace with your own copy.', '公司介绍占位文本。请替换为你的文案。', 'Texto de presentacion de la empresa. Reemplazalo con tu contenido.', 'Texte de presentation de votre entreprise. Remplacez par votre contenu.', 'Platzhalter fur die Unternehmensvorstellung. Durch eigenen Text ersetzen.', 'Testo segnaposto per la presentazione della tua azienda.', '会社紹介のプレースホルダーです。独自の文案に置き換えてください。', '회사 소개 자리표시자입니다. 원하는 문구로 교체하세요.', 'نص بديل لتعريف الشركة. استبدله بمحتواك.'),
    gallery: ['package', 'process', 'cert', 'promotional'],
    options: [
      t9('Specification 1 - replace with your own value', '规格项 1，请替换为你的内容', 'Especificacion 1: reemplazala con tu valor', 'Specification 1 - remplacez par votre valeur', 'Spezifikation 1 - durch eigenen Wert ersetzen', 'Specifica 1 - sostituisci con il tuo valore', '仕様 1。独自の値に置き換えてください', '사양 1 - 원하는 값으로 교체하세요', 'المواصفة 1 - استبدلها بقيمتك'),
      t9('Specification 2 - replace with your own value', '规格项 2，请替换为你的内容', 'Especificacion 2: reemplazala con tu valor', 'Specification 2 - remplacez par votre valeur', 'Spezifikation 2 - durch eigenen Wert ersetzen', 'Specifica 2 - sostituisci con il tuo valore', '仕様 2。独自の値に置き換えてください', '사양 2 - 원하는 값으로 교체하세요', 'المواصفة 2 - استبدلها بقيمتك'),
      t9('Specification 3 - replace with your own value', '规格项 3，请替换为你的内容', 'Especificacion 3: reemplazala con tu valor', 'Specification 3 - remplacez par votre valeur', 'Spezifikation 3 - durch eigenen Wert ersetzen', 'Specifica 3 - sostituisci con il tuo valore', '仕様 3。独自の値に置き換えてください', '사양 3 - 원하는 값으로 교체하세요', 'المواصفة 3 - استبدلها بقيمتك'),
      t9('Specification 4 - replace with your own value', '规格项 4，请替换为你的内容', 'Especificacion 4: reemplazala con tu valor', 'Specification 4 - remplacez par votre valeur', 'Spezifikation 4 - durch eigenen Wert ersetzen', 'Specifica 4 - sostituisci con il tuo valore', '仕様 4。独自の値に置き換えてください', '사양 4 - 원하는 값으로 교체하세요', 'المواصفة 4 - استبدلها بقيمتك')
    ],
    applications: [
      t9('Application 1 - replace with your own text', '应用场景 1，请替换为你的内容', 'Aplicacion 1: reemplazala con tu texto', 'Application 1 - remplacez par votre texte', 'Anwendung 1 - durch eigenen Text ersetzen', 'Applicazione 1 - sostituisci con il tuo testo', '用途 1。独自のテキストに置き換えてください', '적용 분야 1 - 원하는 문구로 교체하세요', 'الاستخدام 1 - استبدله بنصك'),
      t9('Application 2 - replace with your own text', '应用场景 2，请替换为你的内容', 'Aplicacion 2: reemplazala con tu texto', 'Application 2 - remplacez par votre texte', 'Anwendung 2 - durch eigenen Text ersetzen', 'Applicazione 2 - sostituisci con il tuo testo', '用途 2。独自のテキストに置き換えてください', '적용 분야 2 - 원하는 문구로 교체하세요', 'الاستخدام 2 - استبدله بنصك'),
      t9('Application 3 - replace with your own text', '应用场景 3，请替换为你的内容', 'Aplicacion 3: reemplazala con tu texto', 'Application 3 - remplacez par votre texte', 'Anwendung 3 - durch eigenen Text ersetzen', 'Applicazione 3 - sostituisci con il tuo testo', '用途 3。独自のテキストに置き換えてください', '적용 분야 3 - 원하는 문구로 교체하세요', 'الاستخدام 3 - استبدله بنصك')
    ]
  };

  P['c4-p1'] = {
    cat: 'c4',
    title: t9('Product 4.1', '产品 4.1', 'Producto 4.1', 'Produit 4.1', 'Produkt 4.1', 'Prodotto 4.1', '商品 4.1', '제품 4.1', 'المنتج 4.1'),
    sub: t9('Product subtitle - replace with your own text', '产品副标题，请替换为你的文案', 'Subtitulo del producto: reemplazalo con tu texto', 'Sous-titre du produit - remplacez par votre texte', 'Produkt-Untertitel - durch eigenen Text ersetzen', 'Sottotitolo prodotto - sostituisci con il tuo testo', '商品サブタイトル。独自のテキストに置き換えてください', '제품 부제 - 원하는 문구로 교체하세요', 'عنوان فرعي للمنتج - استبدله بنصك'),
    lead: t9('Lead paragraph for this product. Replace it with your own description.', '产品导语段落。请替换为你的产品描述。', 'Parrafo de introduccion del producto. Reemplazalo con tu descripcion.', 'Paragraphe d\'introduction du produit. Remplacez par votre description.', 'Einleitungsabsatz zum Produkt. Durch eigene Beschreibung ersetzen.', 'Paragrafo introduttivo del prodotto. Sostituiscilo con la tua descrizione.', '商品の導入段落です。独自の説明文に置き換えてください。', '제품 소개 문단입니다. 원하는 설명으로 교체하세요.', 'فقرة تمهيدية للمنتج. استبدلها بوصفك الخاص.'),
    intro: t9('Company introduction placeholder. Replace with your own copy.', '公司介绍占位文本。请替换为你的文案。', 'Texto de presentacion de la empresa. Reemplazalo con tu contenido.', 'Texte de presentation de votre entreprise. Remplacez par votre contenu.', 'Platzhalter fur die Unternehmensvorstellung. Durch eigenen Text ersetzen.', 'Testo segnaposto per la presentazione della tua azienda.', '会社紹介のプレースホルダーです。独自の文案に置き換えてください。', '회사 소개 자리표시자입니다. 원하는 문구로 교체하세요.', 'نص بديل لتعريف الشركة. استبدله بمحتواك.'),
    gallery: ['package', 'process', 'cert', 'promotional'],
    options: [
      t9('Specification 1 - replace with your own value', '规格项 1，请替换为你的内容', 'Especificacion 1: reemplazala con tu valor', 'Specification 1 - remplacez par votre valeur', 'Spezifikation 1 - durch eigenen Wert ersetzen', 'Specifica 1 - sostituisci con il tuo valore', '仕様 1。独自の値に置き換えてください', '사양 1 - 원하는 값으로 교체하세요', 'المواصفة 1 - استبدلها بقيمتك'),
      t9('Specification 2 - replace with your own value', '规格项 2，请替换为你的内容', 'Especificacion 2: reemplazala con tu valor', 'Specification 2 - remplacez par votre valeur', 'Spezifikation 2 - durch eigenen Wert ersetzen', 'Specifica 2 - sostituisci con il tuo valore', '仕様 2。独自の値に置き換えてください', '사양 2 - 원하는 값으로 교체하세요', 'المواصفة 2 - استبدلها بقيمتك'),
      t9('Specification 3 - replace with your own value', '规格项 3，请替换为你的内容', 'Especificacion 3: reemplazala con tu valor', 'Specification 3 - remplacez par votre valeur', 'Spezifikation 3 - durch eigenen Wert ersetzen', 'Specifica 3 - sostituisci con il tuo valore', '仕様 3。独自の値に置き換えてください', '사양 3 - 원하는 값으로 교체하세요', 'المواصفة 3 - استبدلها بقيمتك'),
      t9('Specification 4 - replace with your own value', '规格项 4，请替换为你的内容', 'Especificacion 4: reemplazala con tu valor', 'Specification 4 - remplacez par votre valeur', 'Spezifikation 4 - durch eigenen Wert ersetzen', 'Specifica 4 - sostituisci con il tuo valore', '仕様 4。独自の値に置き換えてください', '사양 4 - 원하는 값으로 교체하세요', 'المواصفة 4 - استبدلها بقيمتك')
    ],
    applications: [
      t9('Application 1 - replace with your own text', '应用场景 1，请替换为你的内容', 'Aplicacion 1: reemplazala con tu texto', 'Application 1 - remplacez par votre texte', 'Anwendung 1 - durch eigenen Text ersetzen', 'Applicazione 1 - sostituisci con il tuo testo', '用途 1。独自のテキストに置き換えてください', '적용 분야 1 - 원하는 문구로 교체하세요', 'الاستخدام 1 - استبدله بنصك'),
      t9('Application 2 - replace with your own text', '应用场景 2，请替换为你的内容', 'Aplicacion 2: reemplazala con tu texto', 'Application 2 - remplacez par votre texte', 'Anwendung 2 - durch eigenen Text ersetzen', 'Applicazione 2 - sostituisci con il tuo testo', '用途 2。独自のテキストに置き換えてください', '적용 분야 2 - 원하는 문구로 교체하세요', 'الاستخدام 2 - استبدله بنصك'),
      t9('Application 3 - replace with your own text', '应用场景 3，请替换为你的内容', 'Aplicacion 3: reemplazala con tu texto', 'Application 3 - remplacez par votre texte', 'Anwendung 3 - durch eigenen Text ersetzen', 'Applicazione 3 - sostituisci con il tuo testo', '用途 3。独自のテキストに置き換えてください', '적용 분야 3 - 원하는 문구로 교체하세요', 'الاستخدام 3 - استبدله بنصك')
    ]
  };

  P['c4-p2'] = {
    cat: 'c4',
    title: t9('Product 4.2', '产品 4.2', 'Producto 4.2', 'Produit 4.2', 'Produkt 4.2', 'Prodotto 4.2', '商品 4.2', '제품 4.2', 'المنتج 4.2'),
    sub: t9('Product subtitle - replace with your own text', '产品副标题，请替换为你的文案', 'Subtitulo del producto: reemplazalo con tu texto', 'Sous-titre du produit - remplacez par votre texte', 'Produkt-Untertitel - durch eigenen Text ersetzen', 'Sottotitolo prodotto - sostituisci con il tuo testo', '商品サブタイトル。独自のテキストに置き換えてください', '제품 부제 - 원하는 문구로 교체하세요', 'عنوان فرعي للمنتج - استبدله بنصك'),
    lead: t9('Lead paragraph for this product. Replace it with your own description.', '产品导语段落。请替换为你的产品描述。', 'Parrafo de introduccion del producto. Reemplazalo con tu descripcion.', 'Paragraphe d\'introduction du produit. Remplacez par votre description.', 'Einleitungsabsatz zum Produkt. Durch eigene Beschreibung ersetzen.', 'Paragrafo introduttivo del prodotto. Sostituiscilo con la tua descrizione.', '商品の導入段落です。独自の説明文に置き換えてください。', '제품 소개 문단입니다. 원하는 설명으로 교체하세요.', 'فقرة تمهيدية للمنتج. استبدلها بوصفك الخاص.'),
    intro: t9('Company introduction placeholder. Replace with your own copy.', '公司介绍占位文本。请替换为你的文案。', 'Texto de presentacion de la empresa. Reemplazalo con tu contenido.', 'Texte de presentation de votre entreprise. Remplacez par votre contenu.', 'Platzhalter fur die Unternehmensvorstellung. Durch eigenen Text ersetzen.', 'Testo segnaposto per la presentazione della tua azienda.', '会社紹介のプレースホルダーです。独自の文案に置き換えてください。', '회사 소개 자리표시자입니다. 원하는 문구로 교체하세요.', 'نص بديل لتعريف الشركة. استبدله بمحتواك.'),
    gallery: ['package', 'process', 'cert', 'promotional'],
    options: [
      t9('Specification 1 - replace with your own value', '规格项 1，请替换为你的内容', 'Especificacion 1: reemplazala con tu valor', 'Specification 1 - remplacez par votre valeur', 'Spezifikation 1 - durch eigenen Wert ersetzen', 'Specifica 1 - sostituisci con il tuo valore', '仕様 1。独自の値に置き換えてください', '사양 1 - 원하는 값으로 교체하세요', 'المواصفة 1 - استبدلها بقيمتك'),
      t9('Specification 2 - replace with your own value', '规格项 2，请替换为你的内容', 'Especificacion 2: reemplazala con tu valor', 'Specification 2 - remplacez par votre valeur', 'Spezifikation 2 - durch eigenen Wert ersetzen', 'Specifica 2 - sostituisci con il tuo valore', '仕様 2。独自の値に置き換えてください', '사양 2 - 원하는 값으로 교체하세요', 'المواصفة 2 - استبدلها بقيمتك'),
      t9('Specification 3 - replace with your own value', '规格项 3，请替换为你的内容', 'Especificacion 3: reemplazala con tu valor', 'Specification 3 - remplacez par votre valeur', 'Spezifikation 3 - durch eigenen Wert ersetzen', 'Specifica 3 - sostituisci con il tuo valore', '仕様 3。独自の値に置き換えてください', '사양 3 - 원하는 값으로 교체하세요', 'المواصفة 3 - استبدلها بقيمتك'),
      t9('Specification 4 - replace with your own value', '规格项 4，请替换为你的内容', 'Especificacion 4: reemplazala con tu valor', 'Specification 4 - remplacez par votre valeur', 'Spezifikation 4 - durch eigenen Wert ersetzen', 'Specifica 4 - sostituisci con il tuo valore', '仕様 4。独自の値に置き換えてください', '사양 4 - 원하는 값으로 교체하세요', 'المواصفة 4 - استبدلها بقيمتك')
    ],
    applications: [
      t9('Application 1 - replace with your own text', '应用场景 1，请替换为你的内容', 'Aplicacion 1: reemplazala con tu texto', 'Application 1 - remplacez par votre texte', 'Anwendung 1 - durch eigenen Text ersetzen', 'Applicazione 1 - sostituisci con il tuo testo', '用途 1。独自のテキストに置き換えてください', '적용 분야 1 - 원하는 문구로 교체하세요', 'الاستخدام 1 - استبدله بنصك'),
      t9('Application 2 - replace with your own text', '应用场景 2，请替换为你的内容', 'Aplicacion 2: reemplazala con tu texto', 'Application 2 - remplacez par votre texte', 'Anwendung 2 - durch eigenen Text ersetzen', 'Applicazione 2 - sostituisci con il tuo testo', '用途 2。独自のテキストに置き換えてください', '적용 분야 2 - 원하는 문구로 교체하세요', 'الاستخدام 2 - استبدله بنصك'),
      t9('Application 3 - replace with your own text', '应用场景 3，请替换为你的内容', 'Aplicacion 3: reemplazala con tu texto', 'Application 3 - remplacez par votre texte', 'Anwendung 3 - durch eigenen Text ersetzen', 'Applicazione 3 - sostituisci con il tuo testo', '用途 3。独自のテキストに置き換えてください', '적용 분야 3 - 원하는 문구로 교체하세요', 'الاستخدام 3 - استبدله بنصك')
    ]
  };

  P['c4-p3'] = {
    cat: 'c4',
    title: t9('Product 4.3', '产品 4.3', 'Producto 4.3', 'Produit 4.3', 'Produkt 4.3', 'Prodotto 4.3', '商品 4.3', '제품 4.3', 'المنتج 4.3'),
    sub: t9('Product subtitle - replace with your own text', '产品副标题，请替换为你的文案', 'Subtitulo del producto: reemplazalo con tu texto', 'Sous-titre du produit - remplacez par votre texte', 'Produkt-Untertitel - durch eigenen Text ersetzen', 'Sottotitolo prodotto - sostituisci con il tuo testo', '商品サブタイトル。独自のテキストに置き換えてください', '제품 부제 - 원하는 문구로 교체하세요', 'عنوان فرعي للمنتج - استبدله بنصك'),
    lead: t9('Lead paragraph for this product. Replace it with your own description.', '产品导语段落。请替换为你的产品描述。', 'Parrafo de introduccion del producto. Reemplazalo con tu descripcion.', 'Paragraphe d\'introduction du produit. Remplacez par votre description.', 'Einleitungsabsatz zum Produkt. Durch eigene Beschreibung ersetzen.', 'Paragrafo introduttivo del prodotto. Sostituiscilo con la tua descrizione.', '商品の導入段落です。独自の説明文に置き換えてください。', '제품 소개 문단입니다. 원하는 설명으로 교체하세요.', 'فقرة تمهيدية للمنتج. استبدلها بوصفك الخاص.'),
    intro: t9('Company introduction placeholder. Replace with your own copy.', '公司介绍占位文本。请替换为你的文案。', 'Texto de presentacion de la empresa. Reemplazalo con tu contenido.', 'Texte de presentation de votre entreprise. Remplacez par votre contenu.', 'Platzhalter fur die Unternehmensvorstellung. Durch eigenen Text ersetzen.', 'Testo segnaposto per la presentazione della tua azienda.', '会社紹介のプレースホルダーです。独自の文案に置き換えてください。', '회사 소개 자리표시자입니다. 원하는 문구로 교체하세요.', 'نص بديل لتعريف الشركة. استبدله بمحتواك.'),
    gallery: ['package', 'process', 'cert', 'promotional'],
    options: [
      t9('Specification 1 - replace with your own value', '规格项 1，请替换为你的内容', 'Especificacion 1: reemplazala con tu valor', 'Specification 1 - remplacez par votre valeur', 'Spezifikation 1 - durch eigenen Wert ersetzen', 'Specifica 1 - sostituisci con il tuo valore', '仕様 1。独自の値に置き換えてください', '사양 1 - 원하는 값으로 교체하세요', 'المواصفة 1 - استبدلها بقيمتك'),
      t9('Specification 2 - replace with your own value', '规格项 2，请替换为你的内容', 'Especificacion 2: reemplazala con tu valor', 'Specification 2 - remplacez par votre valeur', 'Spezifikation 2 - durch eigenen Wert ersetzen', 'Specifica 2 - sostituisci con il tuo valore', '仕様 2。独自の値に置き換えてください', '사양 2 - 원하는 값으로 교체하세요', 'المواصفة 2 - استبدلها بقيمتك'),
      t9('Specification 3 - replace with your own value', '规格项 3，请替换为你的内容', 'Especificacion 3: reemplazala con tu valor', 'Specification 3 - remplacez par votre valeur', 'Spezifikation 3 - durch eigenen Wert ersetzen', 'Specifica 3 - sostituisci con il tuo valore', '仕様 3。独自の値に置き換えてください', '사양 3 - 원하는 값으로 교체하세요', 'المواصفة 3 - استبدلها بقيمتك'),
      t9('Specification 4 - replace with your own value', '规格项 4，请替换为你的内容', 'Especificacion 4: reemplazala con tu valor', 'Specification 4 - remplacez par votre valeur', 'Spezifikation 4 - durch eigenen Wert ersetzen', 'Specifica 4 - sostituisci con il tuo valore', '仕様 4。独自の値に置き換えてください', '사양 4 - 원하는 값으로 교체하세요', 'المواصفة 4 - استبدلها بقيمتك')
    ],
    applications: [
      t9('Application 1 - replace with your own text', '应用场景 1，请替换为你的内容', 'Aplicacion 1: reemplazala con tu texto', 'Application 1 - remplacez par votre texte', 'Anwendung 1 - durch eigenen Text ersetzen', 'Applicazione 1 - sostituisci con il tuo testo', '用途 1。独自のテキストに置き換えてください', '적용 분야 1 - 원하는 문구로 교체하세요', 'الاستخدام 1 - استبدله بنصك'),
      t9('Application 2 - replace with your own text', '应用场景 2，请替换为你的内容', 'Aplicacion 2: reemplazala con tu texto', 'Application 2 - remplacez par votre texte', 'Anwendung 2 - durch eigenen Text ersetzen', 'Applicazione 2 - sostituisci con il tuo testo', '用途 2。独自のテキストに置き換えてください', '적용 분야 2 - 원하는 문구로 교체하세요', 'الاستخدام 2 - استبدله بنصك'),
      t9('Application 3 - replace with your own text', '应用场景 3，请替换为你的内容', 'Aplicacion 3: reemplazala con tu texto', 'Application 3 - remplacez par votre texte', 'Anwendung 3 - durch eigenen Text ersetzen', 'Applicazione 3 - sostituisci con il tuo testo', '用途 3。独自のテキストに置き換えてください', '적용 분야 3 - 원하는 문구로 교체하세요', 'الاستخدام 3 - استبدله بنصك')
    ]
  };

  P['c4-p4'] = {
    cat: 'c4',
    title: t9('Product 4.4', '产品 4.4', 'Producto 4.4', 'Produit 4.4', 'Produkt 4.4', 'Prodotto 4.4', '商品 4.4', '제품 4.4', 'المنتج 4.4'),
    sub: t9('Product subtitle - replace with your own text', '产品副标题，请替换为你的文案', 'Subtitulo del producto: reemplazalo con tu texto', 'Sous-titre du produit - remplacez par votre texte', 'Produkt-Untertitel - durch eigenen Text ersetzen', 'Sottotitolo prodotto - sostituisci con il tuo testo', '商品サブタイトル。独自のテキストに置き換えてください', '제품 부제 - 원하는 문구로 교체하세요', 'عنوان فرعي للمنتج - استبدله بنصك'),
    lead: t9('Lead paragraph for this product. Replace it with your own description.', '产品导语段落。请替换为你的产品描述。', 'Parrafo de introduccion del producto. Reemplazalo con tu descripcion.', 'Paragraphe d\'introduction du produit. Remplacez par votre description.', 'Einleitungsabsatz zum Produkt. Durch eigene Beschreibung ersetzen.', 'Paragrafo introduttivo del prodotto. Sostituiscilo con la tua descrizione.', '商品の導入段落です。独自の説明文に置き換えてください。', '제품 소개 문단입니다. 원하는 설명으로 교체하세요.', 'فقرة تمهيدية للمنتج. استبدلها بوصفك الخاص.'),
    intro: t9('Company introduction placeholder. Replace with your own copy.', '公司介绍占位文本。请替换为你的文案。', 'Texto de presentacion de la empresa. Reemplazalo con tu contenido.', 'Texte de presentation de votre entreprise. Remplacez par votre contenu.', 'Platzhalter fur die Unternehmensvorstellung. Durch eigenen Text ersetzen.', 'Testo segnaposto per la presentazione della tua azienda.', '会社紹介のプレースホルダーです。独自の文案に置き換えてください。', '회사 소개 자리표시자입니다. 원하는 문구로 교체하세요.', 'نص بديل لتعريف الشركة. استبدله بمحتواك.'),
    gallery: ['package', 'process', 'cert', 'promotional'],
    options: [
      t9('Specification 1 - replace with your own value', '规格项 1，请替换为你的内容', 'Especificacion 1: reemplazala con tu valor', 'Specification 1 - remplacez par votre valeur', 'Spezifikation 1 - durch eigenen Wert ersetzen', 'Specifica 1 - sostituisci con il tuo valore', '仕様 1。独自の値に置き換えてください', '사양 1 - 원하는 값으로 교체하세요', 'المواصفة 1 - استبدلها بقيمتك'),
      t9('Specification 2 - replace with your own value', '规格项 2，请替换为你的内容', 'Especificacion 2: reemplazala con tu valor', 'Specification 2 - remplacez par votre valeur', 'Spezifikation 2 - durch eigenen Wert ersetzen', 'Specifica 2 - sostituisci con il tuo valore', '仕様 2。独自の値に置き換えてください', '사양 2 - 원하는 값으로 교체하세요', 'المواصفة 2 - استبدلها بقيمتك'),
      t9('Specification 3 - replace with your own value', '规格项 3，请替换为你的内容', 'Especificacion 3: reemplazala con tu valor', 'Specification 3 - remplacez par votre valeur', 'Spezifikation 3 - durch eigenen Wert ersetzen', 'Specifica 3 - sostituisci con il tuo valore', '仕様 3。独自の値に置き換えてください', '사양 3 - 원하는 값으로 교체하세요', 'المواصفة 3 - استبدلها بقيمتك'),
      t9('Specification 4 - replace with your own value', '规格项 4，请替换为你的内容', 'Especificacion 4: reemplazala con tu valor', 'Specification 4 - remplacez par votre valeur', 'Spezifikation 4 - durch eigenen Wert ersetzen', 'Specifica 4 - sostituisci con il tuo valore', '仕様 4。独自の値に置き換えてください', '사양 4 - 원하는 값으로 교체하세요', 'المواصفة 4 - استبدلها بقيمتك')
    ],
    applications: [
      t9('Application 1 - replace with your own text', '应用场景 1，请替换为你的内容', 'Aplicacion 1: reemplazala con tu texto', 'Application 1 - remplacez par votre texte', 'Anwendung 1 - durch eigenen Text ersetzen', 'Applicazione 1 - sostituisci con il tuo testo', '用途 1。独自のテキストに置き換えてください', '적용 분야 1 - 원하는 문구로 교체하세요', 'الاستخدام 1 - استبدله بنصك'),
      t9('Application 2 - replace with your own text', '应用场景 2，请替换为你的内容', 'Aplicacion 2: reemplazala con tu texto', 'Application 2 - remplacez par votre texte', 'Anwendung 2 - durch eigenen Text ersetzen', 'Applicazione 2 - sostituisci con il tuo testo', '用途 2。独自のテキストに置き換えてください', '적용 분야 2 - 원하는 문구로 교체하세요', 'الاستخدام 2 - استبدله بنصك'),
      t9('Application 3 - replace with your own text', '应用场景 3，请替换为你的内容', 'Aplicacion 3: reemplazala con tu texto', 'Application 3 - remplacez par votre texte', 'Anwendung 3 - durch eigenen Text ersetzen', 'Applicazione 3 - sostituisci con il tuo testo', '用途 3。独自のテキストに置き換えてください', '적용 분야 3 - 원하는 문구로 교체하세요', 'الاستخدام 3 - استبدله بنصك')
    ]
  };

  P['c4-p5'] = {
    cat: 'c4',
    title: t9('Product 4.5', '产品 4.5', 'Producto 4.5', 'Produit 4.5', 'Produkt 4.5', 'Prodotto 4.5', '商品 4.5', '제품 4.5', 'المنتج 4.5'),
    sub: t9('Product subtitle - replace with your own text', '产品副标题，请替换为你的文案', 'Subtitulo del producto: reemplazalo con tu texto', 'Sous-titre du produit - remplacez par votre texte', 'Produkt-Untertitel - durch eigenen Text ersetzen', 'Sottotitolo prodotto - sostituisci con il tuo testo', '商品サブタイトル。独自のテキストに置き換えてください', '제품 부제 - 원하는 문구로 교체하세요', 'عنوان فرعي للمنتج - استبدله بنصك'),
    lead: t9('Lead paragraph for this product. Replace it with your own description.', '产品导语段落。请替换为你的产品描述。', 'Parrafo de introduccion del producto. Reemplazalo con tu descripcion.', 'Paragraphe d\'introduction du produit. Remplacez par votre description.', 'Einleitungsabsatz zum Produkt. Durch eigene Beschreibung ersetzen.', 'Paragrafo introduttivo del prodotto. Sostituiscilo con la tua descrizione.', '商品の導入段落です。独自の説明文に置き換えてください。', '제품 소개 문단입니다. 원하는 설명으로 교체하세요.', 'فقرة تمهيدية للمنتج. استبدلها بوصفك الخاص.'),
    intro: t9('Company introduction placeholder. Replace with your own copy.', '公司介绍占位文本。请替换为你的文案。', 'Texto de presentacion de la empresa. Reemplazalo con tu contenido.', 'Texte de presentation de votre entreprise. Remplacez par votre contenu.', 'Platzhalter fur die Unternehmensvorstellung. Durch eigenen Text ersetzen.', 'Testo segnaposto per la presentazione della tua azienda.', '会社紹介のプレースホルダーです。独自の文案に置き換えてください。', '회사 소개 자리표시자입니다. 원하는 문구로 교체하세요.', 'نص بديل لتعريف الشركة. استبدله بمحتواك.'),
    gallery: ['package', 'process', 'cert', 'promotional'],
    options: [
      t9('Specification 1 - replace with your own value', '规格项 1，请替换为你的内容', 'Especificacion 1: reemplazala con tu valor', 'Specification 1 - remplacez par votre valeur', 'Spezifikation 1 - durch eigenen Wert ersetzen', 'Specifica 1 - sostituisci con il tuo valore', '仕様 1。独自の値に置き換えてください', '사양 1 - 원하는 값으로 교체하세요', 'المواصفة 1 - استبدلها بقيمتك'),
      t9('Specification 2 - replace with your own value', '规格项 2，请替换为你的内容', 'Especificacion 2: reemplazala con tu valor', 'Specification 2 - remplacez par votre valeur', 'Spezifikation 2 - durch eigenen Wert ersetzen', 'Specifica 2 - sostituisci con il tuo valore', '仕様 2。独自の値に置き換えてください', '사양 2 - 원하는 값으로 교체하세요', 'المواصفة 2 - استبدلها بقيمتك'),
      t9('Specification 3 - replace with your own value', '规格项 3，请替换为你的内容', 'Especificacion 3: reemplazala con tu valor', 'Specification 3 - remplacez par votre valeur', 'Spezifikation 3 - durch eigenen Wert ersetzen', 'Specifica 3 - sostituisci con il tuo valore', '仕様 3。独自の値に置き換えてください', '사양 3 - 원하는 값으로 교체하세요', 'المواصفة 3 - استبدلها بقيمتك'),
      t9('Specification 4 - replace with your own value', '规格项 4，请替换为你的内容', 'Especificacion 4: reemplazala con tu valor', 'Specification 4 - remplacez par votre valeur', 'Spezifikation 4 - durch eigenen Wert ersetzen', 'Specifica 4 - sostituisci con il tuo valore', '仕様 4。独自の値に置き換えてください', '사양 4 - 원하는 값으로 교체하세요', 'المواصفة 4 - استبدلها بقيمتك')
    ],
    applications: [
      t9('Application 1 - replace with your own text', '应用场景 1，请替换为你的内容', 'Aplicacion 1: reemplazala con tu texto', 'Application 1 - remplacez par votre texte', 'Anwendung 1 - durch eigenen Text ersetzen', 'Applicazione 1 - sostituisci con il tuo testo', '用途 1。独自のテキストに置き換えてください', '적용 분야 1 - 원하는 문구로 교체하세요', 'الاستخدام 1 - استبدله بنصك'),
      t9('Application 2 - replace with your own text', '应用场景 2，请替换为你的内容', 'Aplicacion 2: reemplazala con tu texto', 'Application 2 - remplacez par votre texte', 'Anwendung 2 - durch eigenen Text ersetzen', 'Applicazione 2 - sostituisci con il tuo testo', '用途 2。独自のテキストに置き換えてください', '적용 분야 2 - 원하는 문구로 교체하세요', 'الاستخدام 2 - استبدله بنصك'),
      t9('Application 3 - replace with your own text', '应用场景 3，请替换为你的内容', 'Aplicacion 3: reemplazala con tu texto', 'Application 3 - remplacez par votre texte', 'Anwendung 3 - durch eigenen Text ersetzen', 'Applicazione 3 - sostituisci con il tuo testo', '用途 3。独自のテキストに置き換えてください', '적용 분야 3 - 원하는 문구로 교체하세요', 'الاستخدام 3 - استبدله بنصك')
    ]
  };

  P['c5-p1'] = {
    cat: 'c5',
    title: t9('Product 5.1', '产品 5.1', 'Producto 5.1', 'Produit 5.1', 'Produkt 5.1', 'Prodotto 5.1', '商品 5.1', '제품 5.1', 'المنتج 5.1'),
    sub: t9('Product subtitle - replace with your own text', '产品副标题，请替换为你的文案', 'Subtitulo del producto: reemplazalo con tu texto', 'Sous-titre du produit - remplacez par votre texte', 'Produkt-Untertitel - durch eigenen Text ersetzen', 'Sottotitolo prodotto - sostituisci con il tuo testo', '商品サブタイトル。独自のテキストに置き換えてください', '제품 부제 - 원하는 문구로 교체하세요', 'عنوان فرعي للمنتج - استبدله بنصك'),
    lead: t9('Lead paragraph for this product. Replace it with your own description.', '产品导语段落。请替换为你的产品描述。', 'Parrafo de introduccion del producto. Reemplazalo con tu descripcion.', 'Paragraphe d\'introduction du produit. Remplacez par votre description.', 'Einleitungsabsatz zum Produkt. Durch eigene Beschreibung ersetzen.', 'Paragrafo introduttivo del prodotto. Sostituiscilo con la tua descrizione.', '商品の導入段落です。独自の説明文に置き換えてください。', '제품 소개 문단입니다. 원하는 설명으로 교체하세요.', 'فقرة تمهيدية للمنتج. استبدلها بوصفك الخاص.'),
    intro: t9('Company introduction placeholder. Replace with your own copy.', '公司介绍占位文本。请替换为你的文案。', 'Texto de presentacion de la empresa. Reemplazalo con tu contenido.', 'Texte de presentation de votre entreprise. Remplacez par votre contenu.', 'Platzhalter fur die Unternehmensvorstellung. Durch eigenen Text ersetzen.', 'Testo segnaposto per la presentazione della tua azienda.', '会社紹介のプレースホルダーです。独自の文案に置き換えてください。', '회사 소개 자리표시자입니다. 원하는 문구로 교체하세요.', 'نص بديل لتعريف الشركة. استبدله بمحتواك.'),
    gallery: ['package', 'process', 'cert', 'promotional'],
    options: [
      t9('Specification 1 - replace with your own value', '规格项 1，请替换为你的内容', 'Especificacion 1: reemplazala con tu valor', 'Specification 1 - remplacez par votre valeur', 'Spezifikation 1 - durch eigenen Wert ersetzen', 'Specifica 1 - sostituisci con il tuo valore', '仕様 1。独自の値に置き換えてください', '사양 1 - 원하는 값으로 교체하세요', 'المواصفة 1 - استبدلها بقيمتك'),
      t9('Specification 2 - replace with your own value', '规格项 2，请替换为你的内容', 'Especificacion 2: reemplazala con tu valor', 'Specification 2 - remplacez par votre valeur', 'Spezifikation 2 - durch eigenen Wert ersetzen', 'Specifica 2 - sostituisci con il tuo valore', '仕様 2。独自の値に置き換えてください', '사양 2 - 원하는 값으로 교체하세요', 'المواصفة 2 - استبدلها بقيمتك'),
      t9('Specification 3 - replace with your own value', '规格项 3，请替换为你的内容', 'Especificacion 3: reemplazala con tu valor', 'Specification 3 - remplacez par votre valeur', 'Spezifikation 3 - durch eigenen Wert ersetzen', 'Specifica 3 - sostituisci con il tuo valore', '仕様 3。独自の値に置き換えてください', '사양 3 - 원하는 값으로 교체하세요', 'المواصفة 3 - استبدلها بقيمتك'),
      t9('Specification 4 - replace with your own value', '规格项 4，请替换为你的内容', 'Especificacion 4: reemplazala con tu valor', 'Specification 4 - remplacez par votre valeur', 'Spezifikation 4 - durch eigenen Wert ersetzen', 'Specifica 4 - sostituisci con il tuo valore', '仕様 4。独自の値に置き換えてください', '사양 4 - 원하는 값으로 교체하세요', 'المواصفة 4 - استبدلها بقيمتك')
    ],
    applications: [
      t9('Application 1 - replace with your own text', '应用场景 1，请替换为你的内容', 'Aplicacion 1: reemplazala con tu texto', 'Application 1 - remplacez par votre texte', 'Anwendung 1 - durch eigenen Text ersetzen', 'Applicazione 1 - sostituisci con il tuo testo', '用途 1。独自のテキストに置き換えてください', '적용 분야 1 - 원하는 문구로 교체하세요', 'الاستخدام 1 - استبدله بنصك'),
      t9('Application 2 - replace with your own text', '应用场景 2，请替换为你的内容', 'Aplicacion 2: reemplazala con tu texto', 'Application 2 - remplacez par votre texte', 'Anwendung 2 - durch eigenen Text ersetzen', 'Applicazione 2 - sostituisci con il tuo testo', '用途 2。独自のテキストに置き換えてください', '적용 분야 2 - 원하는 문구로 교체하세요', 'الاستخدام 2 - استبدله بنصك'),
      t9('Application 3 - replace with your own text', '应用场景 3，请替换为你的内容', 'Aplicacion 3: reemplazala con tu texto', 'Application 3 - remplacez par votre texte', 'Anwendung 3 - durch eigenen Text ersetzen', 'Applicazione 3 - sostituisci con il tuo testo', '用途 3。独自のテキストに置き換えてください', '적용 분야 3 - 원하는 문구로 교체하세요', 'الاستخدام 3 - استبدله بنصك')
    ]
  };

  P['c5-p2'] = {
    cat: 'c5',
    title: t9('Product 5.2', '产品 5.2', 'Producto 5.2', 'Produit 5.2', 'Produkt 5.2', 'Prodotto 5.2', '商品 5.2', '제품 5.2', 'المنتج 5.2'),
    sub: t9('Product subtitle - replace with your own text', '产品副标题，请替换为你的文案', 'Subtitulo del producto: reemplazalo con tu texto', 'Sous-titre du produit - remplacez par votre texte', 'Produkt-Untertitel - durch eigenen Text ersetzen', 'Sottotitolo prodotto - sostituisci con il tuo testo', '商品サブタイトル。独自のテキストに置き換えてください', '제품 부제 - 원하는 문구로 교체하세요', 'عنوان فرعي للمنتج - استبدله بنصك'),
    lead: t9('Lead paragraph for this product. Replace it with your own description.', '产品导语段落。请替换为你的产品描述。', 'Parrafo de introduccion del producto. Reemplazalo con tu descripcion.', 'Paragraphe d\'introduction du produit. Remplacez par votre description.', 'Einleitungsabsatz zum Produkt. Durch eigene Beschreibung ersetzen.', 'Paragrafo introduttivo del prodotto. Sostituiscilo con la tua descrizione.', '商品の導入段落です。独自の説明文に置き換えてください。', '제품 소개 문단입니다. 원하는 설명으로 교체하세요.', 'فقرة تمهيدية للمنتج. استبدلها بوصفك الخاص.'),
    intro: t9('Company introduction placeholder. Replace with your own copy.', '公司介绍占位文本。请替换为你的文案。', 'Texto de presentacion de la empresa. Reemplazalo con tu contenido.', 'Texte de presentation de votre entreprise. Remplacez par votre contenu.', 'Platzhalter fur die Unternehmensvorstellung. Durch eigenen Text ersetzen.', 'Testo segnaposto per la presentazione della tua azienda.', '会社紹介のプレースホルダーです。独自の文案に置き換えてください。', '회사 소개 자리표시자입니다. 원하는 문구로 교체하세요.', 'نص بديل لتعريف الشركة. استبدله بمحتواك.'),
    gallery: ['package', 'process', 'cert', 'promotional'],
    options: [
      t9('Specification 1 - replace with your own value', '规格项 1，请替换为你的内容', 'Especificacion 1: reemplazala con tu valor', 'Specification 1 - remplacez par votre valeur', 'Spezifikation 1 - durch eigenen Wert ersetzen', 'Specifica 1 - sostituisci con il tuo valore', '仕様 1。独自の値に置き換えてください', '사양 1 - 원하는 값으로 교체하세요', 'المواصفة 1 - استبدلها بقيمتك'),
      t9('Specification 2 - replace with your own value', '规格项 2，请替换为你的内容', 'Especificacion 2: reemplazala con tu valor', 'Specification 2 - remplacez par votre valeur', 'Spezifikation 2 - durch eigenen Wert ersetzen', 'Specifica 2 - sostituisci con il tuo valore', '仕様 2。独自の値に置き換えてください', '사양 2 - 원하는 값으로 교체하세요', 'المواصفة 2 - استبدلها بقيمتك'),
      t9('Specification 3 - replace with your own value', '规格项 3，请替换为你的内容', 'Especificacion 3: reemplazala con tu valor', 'Specification 3 - remplacez par votre valeur', 'Spezifikation 3 - durch eigenen Wert ersetzen', 'Specifica 3 - sostituisci con il tuo valore', '仕様 3。独自の値に置き換えてください', '사양 3 - 원하는 값으로 교체하세요', 'المواصفة 3 - استبدلها بقيمتك'),
      t9('Specification 4 - replace with your own value', '规格项 4，请替换为你的内容', 'Especificacion 4: reemplazala con tu valor', 'Specification 4 - remplacez par votre valeur', 'Spezifikation 4 - durch eigenen Wert ersetzen', 'Specifica 4 - sostituisci con il tuo valore', '仕様 4。独自の値に置き換えてください', '사양 4 - 원하는 값으로 교체하세요', 'المواصفة 4 - استبدلها بقيمتك')
    ],
    applications: [
      t9('Application 1 - replace with your own text', '应用场景 1，请替换为你的内容', 'Aplicacion 1: reemplazala con tu texto', 'Application 1 - remplacez par votre texte', 'Anwendung 1 - durch eigenen Text ersetzen', 'Applicazione 1 - sostituisci con il tuo testo', '用途 1。独自のテキストに置き換えてください', '적용 분야 1 - 원하는 문구로 교체하세요', 'الاستخدام 1 - استبدله بنصك'),
      t9('Application 2 - replace with your own text', '应用场景 2，请替换为你的内容', 'Aplicacion 2: reemplazala con tu texto', 'Application 2 - remplacez par votre texte', 'Anwendung 2 - durch eigenen Text ersetzen', 'Applicazione 2 - sostituisci con il tuo testo', '用途 2。独自のテキストに置き換えてください', '적용 분야 2 - 원하는 문구로 교체하세요', 'الاستخدام 2 - استبدله بنصك'),
      t9('Application 3 - replace with your own text', '应用场景 3，请替换为你的内容', 'Aplicacion 3: reemplazala con tu texto', 'Application 3 - remplacez par votre texte', 'Anwendung 3 - durch eigenen Text ersetzen', 'Applicazione 3 - sostituisci con il tuo testo', '用途 3。独自のテキストに置き換えてください', '적용 분야 3 - 원하는 문구로 교체하세요', 'الاستخدام 3 - استبدله بنصك')
    ]
  };

  P['c5-p3'] = {
    cat: 'c5',
    title: t9('Product 5.3', '产品 5.3', 'Producto 5.3', 'Produit 5.3', 'Produkt 5.3', 'Prodotto 5.3', '商品 5.3', '제품 5.3', 'المنتج 5.3'),
    sub: t9('Product subtitle - replace with your own text', '产品副标题，请替换为你的文案', 'Subtitulo del producto: reemplazalo con tu texto', 'Sous-titre du produit - remplacez par votre texte', 'Produkt-Untertitel - durch eigenen Text ersetzen', 'Sottotitolo prodotto - sostituisci con il tuo testo', '商品サブタイトル。独自のテキストに置き換えてください', '제품 부제 - 원하는 문구로 교체하세요', 'عنوان فرعي للمنتج - استبدله بنصك'),
    lead: t9('Lead paragraph for this product. Replace it with your own description.', '产品导语段落。请替换为你的产品描述。', 'Parrafo de introduccion del producto. Reemplazalo con tu descripcion.', 'Paragraphe d\'introduction du produit. Remplacez par votre description.', 'Einleitungsabsatz zum Produkt. Durch eigene Beschreibung ersetzen.', 'Paragrafo introduttivo del prodotto. Sostituiscilo con la tua descrizione.', '商品の導入段落です。独自の説明文に置き換えてください。', '제품 소개 문단입니다. 원하는 설명으로 교체하세요.', 'فقرة تمهيدية للمنتج. استبدلها بوصفك الخاص.'),
    intro: t9('Company introduction placeholder. Replace with your own copy.', '公司介绍占位文本。请替换为你的文案。', 'Texto de presentacion de la empresa. Reemplazalo con tu contenido.', 'Texte de presentation de votre entreprise. Remplacez par votre contenu.', 'Platzhalter fur die Unternehmensvorstellung. Durch eigenen Text ersetzen.', 'Testo segnaposto per la presentazione della tua azienda.', '会社紹介のプレースホルダーです。独自の文案に置き換えてください。', '회사 소개 자리표시자입니다. 원하는 문구로 교체하세요.', 'نص بديل لتعريف الشركة. استبدله بمحتواك.'),
    gallery: ['package', 'process', 'cert', 'promotional'],
    options: [
      t9('Specification 1 - replace with your own value', '规格项 1，请替换为你的内容', 'Especificacion 1: reemplazala con tu valor', 'Specification 1 - remplacez par votre valeur', 'Spezifikation 1 - durch eigenen Wert ersetzen', 'Specifica 1 - sostituisci con il tuo valore', '仕様 1。独自の値に置き換えてください', '사양 1 - 원하는 값으로 교체하세요', 'المواصفة 1 - استبدلها بقيمتك'),
      t9('Specification 2 - replace with your own value', '规格项 2，请替换为你的内容', 'Especificacion 2: reemplazala con tu valor', 'Specification 2 - remplacez par votre valeur', 'Spezifikation 2 - durch eigenen Wert ersetzen', 'Specifica 2 - sostituisci con il tuo valore', '仕様 2。独自の値に置き換えてください', '사양 2 - 원하는 값으로 교체하세요', 'المواصفة 2 - استبدلها بقيمتك'),
      t9('Specification 3 - replace with your own value', '规格项 3，请替换为你的内容', 'Especificacion 3: reemplazala con tu valor', 'Specification 3 - remplacez par votre valeur', 'Spezifikation 3 - durch eigenen Wert ersetzen', 'Specifica 3 - sostituisci con il tuo valore', '仕様 3。独自の値に置き換えてください', '사양 3 - 원하는 값으로 교체하세요', 'المواصفة 3 - استبدلها بقيمتك'),
      t9('Specification 4 - replace with your own value', '规格项 4，请替换为你的内容', 'Especificacion 4: reemplazala con tu valor', 'Specification 4 - remplacez par votre valeur', 'Spezifikation 4 - durch eigenen Wert ersetzen', 'Specifica 4 - sostituisci con il tuo valore', '仕様 4。独自の値に置き換えてください', '사양 4 - 원하는 값으로 교체하세요', 'المواصفة 4 - استبدلها بقيمتك')
    ],
    applications: [
      t9('Application 1 - replace with your own text', '应用场景 1，请替换为你的内容', 'Aplicacion 1: reemplazala con tu texto', 'Application 1 - remplacez par votre texte', 'Anwendung 1 - durch eigenen Text ersetzen', 'Applicazione 1 - sostituisci con il tuo testo', '用途 1。独自のテキストに置き換えてください', '적용 분야 1 - 원하는 문구로 교체하세요', 'الاستخدام 1 - استبدله بنصك'),
      t9('Application 2 - replace with your own text', '应用场景 2，请替换为你的内容', 'Aplicacion 2: reemplazala con tu texto', 'Application 2 - remplacez par votre texte', 'Anwendung 2 - durch eigenen Text ersetzen', 'Applicazione 2 - sostituisci con il tuo testo', '用途 2。独自のテキストに置き換えてください', '적용 분야 2 - 원하는 문구로 교체하세요', 'الاستخدام 2 - استبدله بنصك'),
      t9('Application 3 - replace with your own text', '应用场景 3，请替换为你的内容', 'Aplicacion 3: reemplazala con tu texto', 'Application 3 - remplacez par votre texte', 'Anwendung 3 - durch eigenen Text ersetzen', 'Applicazione 3 - sostituisci con il tuo testo', '用途 3。独自のテキストに置き換えてください', '적용 분야 3 - 원하는 문구로 교체하세요', 'الاستخدام 3 - استبدله بنصك')
    ]
  };

  P['c5-p4'] = {
    cat: 'c5',
    title: t9('Product 5.4', '产品 5.4', 'Producto 5.4', 'Produit 5.4', 'Produkt 5.4', 'Prodotto 5.4', '商品 5.4', '제품 5.4', 'المنتج 5.4'),
    sub: t9('Product subtitle - replace with your own text', '产品副标题，请替换为你的文案', 'Subtitulo del producto: reemplazalo con tu texto', 'Sous-titre du produit - remplacez par votre texte', 'Produkt-Untertitel - durch eigenen Text ersetzen', 'Sottotitolo prodotto - sostituisci con il tuo testo', '商品サブタイトル。独自のテキストに置き換えてください', '제품 부제 - 원하는 문구로 교체하세요', 'عنوان فرعي للمنتج - استبدله بنصك'),
    lead: t9('Lead paragraph for this product. Replace it with your own description.', '产品导语段落。请替换为你的产品描述。', 'Parrafo de introduccion del producto. Reemplazalo con tu descripcion.', 'Paragraphe d\'introduction du produit. Remplacez par votre description.', 'Einleitungsabsatz zum Produkt. Durch eigene Beschreibung ersetzen.', 'Paragrafo introduttivo del prodotto. Sostituiscilo con la tua descrizione.', '商品の導入段落です。独自の説明文に置き換えてください。', '제품 소개 문단입니다. 원하는 설명으로 교체하세요.', 'فقرة تمهيدية للمنتج. استبدلها بوصفك الخاص.'),
    intro: t9('Company introduction placeholder. Replace with your own copy.', '公司介绍占位文本。请替换为你的文案。', 'Texto de presentacion de la empresa. Reemplazalo con tu contenido.', 'Texte de presentation de votre entreprise. Remplacez par votre contenu.', 'Platzhalter fur die Unternehmensvorstellung. Durch eigenen Text ersetzen.', 'Testo segnaposto per la presentazione della tua azienda.', '会社紹介のプレースホルダーです。独自の文案に置き換えてください。', '회사 소개 자리표시자입니다. 원하는 문구로 교체하세요.', 'نص بديل لتعريف الشركة. استبدله بمحتواك.'),
    gallery: ['package', 'process', 'cert', 'promotional'],
    options: [
      t9('Specification 1 - replace with your own value', '规格项 1，请替换为你的内容', 'Especificacion 1: reemplazala con tu valor', 'Specification 1 - remplacez par votre valeur', 'Spezifikation 1 - durch eigenen Wert ersetzen', 'Specifica 1 - sostituisci con il tuo valore', '仕様 1。独自の値に置き換えてください', '사양 1 - 원하는 값으로 교체하세요', 'المواصفة 1 - استبدلها بقيمتك'),
      t9('Specification 2 - replace with your own value', '规格项 2，请替换为你的内容', 'Especificacion 2: reemplazala con tu valor', 'Specification 2 - remplacez par votre valeur', 'Spezifikation 2 - durch eigenen Wert ersetzen', 'Specifica 2 - sostituisci con il tuo valore', '仕様 2。独自の値に置き換えてください', '사양 2 - 원하는 값으로 교체하세요', 'المواصفة 2 - استبدلها بقيمتك'),
      t9('Specification 3 - replace with your own value', '规格项 3，请替换为你的内容', 'Especificacion 3: reemplazala con tu valor', 'Specification 3 - remplacez par votre valeur', 'Spezifikation 3 - durch eigenen Wert ersetzen', 'Specifica 3 - sostituisci con il tuo valore', '仕様 3。独自の値に置き換えてください', '사양 3 - 원하는 값으로 교체하세요', 'المواصفة 3 - استبدلها بقيمتك'),
      t9('Specification 4 - replace with your own value', '规格项 4，请替换为你的内容', 'Especificacion 4: reemplazala con tu valor', 'Specification 4 - remplacez par votre valeur', 'Spezifikation 4 - durch eigenen Wert ersetzen', 'Specifica 4 - sostituisci con il tuo valore', '仕様 4。独自の値に置き換えてください', '사양 4 - 원하는 값으로 교체하세요', 'المواصفة 4 - استبدلها بقيمتك')
    ],
    applications: [
      t9('Application 1 - replace with your own text', '应用场景 1，请替换为你的内容', 'Aplicacion 1: reemplazala con tu texto', 'Application 1 - remplacez par votre texte', 'Anwendung 1 - durch eigenen Text ersetzen', 'Applicazione 1 - sostituisci con il tuo testo', '用途 1。独自のテキストに置き換えてください', '적용 분야 1 - 원하는 문구로 교체하세요', 'الاستخدام 1 - استبدله بنصك'),
      t9('Application 2 - replace with your own text', '应用场景 2，请替换为你的内容', 'Aplicacion 2: reemplazala con tu texto', 'Application 2 - remplacez par votre texte', 'Anwendung 2 - durch eigenen Text ersetzen', 'Applicazione 2 - sostituisci con il tuo testo', '用途 2。独自のテキストに置き換えてください', '적용 분야 2 - 원하는 문구로 교체하세요', 'الاستخدام 2 - استبدله بنصك'),
      t9('Application 3 - replace with your own text', '应用场景 3，请替换为你的内容', 'Aplicacion 3: reemplazala con tu texto', 'Application 3 - remplacez par votre texte', 'Anwendung 3 - durch eigenen Text ersetzen', 'Applicazione 3 - sostituisci con il tuo testo', '用途 3。独自のテキストに置き換えてください', '적용 분야 3 - 원하는 문구로 교체하세요', 'الاستخدام 3 - استبدله بنصك')
    ]
  };

  P['c5-p5'] = {
    cat: 'c5',
    title: t9('Product 5.5', '产品 5.5', 'Producto 5.5', 'Produit 5.5', 'Produkt 5.5', 'Prodotto 5.5', '商品 5.5', '제품 5.5', 'المنتج 5.5'),
    sub: t9('Product subtitle - replace with your own text', '产品副标题，请替换为你的文案', 'Subtitulo del producto: reemplazalo con tu texto', 'Sous-titre du produit - remplacez par votre texte', 'Produkt-Untertitel - durch eigenen Text ersetzen', 'Sottotitolo prodotto - sostituisci con il tuo testo', '商品サブタイトル。独自のテキストに置き換えてください', '제품 부제 - 원하는 문구로 교체하세요', 'عنوان فرعي للمنتج - استبدله بنصك'),
    lead: t9('Lead paragraph for this product. Replace it with your own description.', '产品导语段落。请替换为你的产品描述。', 'Parrafo de introduccion del producto. Reemplazalo con tu descripcion.', 'Paragraphe d\'introduction du produit. Remplacez par votre description.', 'Einleitungsabsatz zum Produkt. Durch eigene Beschreibung ersetzen.', 'Paragrafo introduttivo del prodotto. Sostituiscilo con la tua descrizione.', '商品の導入段落です。独自の説明文に置き換えてください。', '제품 소개 문단입니다. 원하는 설명으로 교체하세요.', 'فقرة تمهيدية للمنتج. استبدلها بوصفك الخاص.'),
    intro: t9('Company introduction placeholder. Replace with your own copy.', '公司介绍占位文本。请替换为你的文案。', 'Texto de presentacion de la empresa. Reemplazalo con tu contenido.', 'Texte de presentation de votre entreprise. Remplacez par votre contenu.', 'Platzhalter fur die Unternehmensvorstellung. Durch eigenen Text ersetzen.', 'Testo segnaposto per la presentazione della tua azienda.', '会社紹介のプレースホルダーです。独自の文案に置き換えてください。', '회사 소개 자리표시자입니다. 원하는 문구로 교체하세요.', 'نص بديل لتعريف الشركة. استبدله بمحتواك.'),
    gallery: ['package', 'process', 'cert', 'promotional'],
    options: [
      t9('Specification 1 - replace with your own value', '规格项 1，请替换为你的内容', 'Especificacion 1: reemplazala con tu valor', 'Specification 1 - remplacez par votre valeur', 'Spezifikation 1 - durch eigenen Wert ersetzen', 'Specifica 1 - sostituisci con il tuo valore', '仕様 1。独自の値に置き換えてください', '사양 1 - 원하는 값으로 교체하세요', 'المواصفة 1 - استبدلها بقيمتك'),
      t9('Specification 2 - replace with your own value', '规格项 2，请替换为你的内容', 'Especificacion 2: reemplazala con tu valor', 'Specification 2 - remplacez par votre valeur', 'Spezifikation 2 - durch eigenen Wert ersetzen', 'Specifica 2 - sostituisci con il tuo valore', '仕様 2。独自の値に置き換えてください', '사양 2 - 원하는 값으로 교체하세요', 'المواصفة 2 - استبدلها بقيمتك'),
      t9('Specification 3 - replace with your own value', '规格项 3，请替换为你的内容', 'Especificacion 3: reemplazala con tu valor', 'Specification 3 - remplacez par votre valeur', 'Spezifikation 3 - durch eigenen Wert ersetzen', 'Specifica 3 - sostituisci con il tuo valore', '仕様 3。独自の値に置き換えてください', '사양 3 - 원하는 값으로 교체하세요', 'المواصفة 3 - استبدلها بقيمتك'),
      t9('Specification 4 - replace with your own value', '规格项 4，请替换为你的内容', 'Especificacion 4: reemplazala con tu valor', 'Specification 4 - remplacez par votre valeur', 'Spezifikation 4 - durch eigenen Wert ersetzen', 'Specifica 4 - sostituisci con il tuo valore', '仕様 4。独自の値に置き換えてください', '사양 4 - 원하는 값으로 교체하세요', 'المواصفة 4 - استبدلها بقيمتك')
    ],
    applications: [
      t9('Application 1 - replace with your own text', '应用场景 1，请替换为你的内容', 'Aplicacion 1: reemplazala con tu texto', 'Application 1 - remplacez par votre texte', 'Anwendung 1 - durch eigenen Text ersetzen', 'Applicazione 1 - sostituisci con il tuo testo', '用途 1。独自のテキストに置き換えてください', '적용 분야 1 - 원하는 문구로 교체하세요', 'الاستخدام 1 - استبدله بنصك'),
      t9('Application 2 - replace with your own text', '应用场景 2，请替换为你的内容', 'Aplicacion 2: reemplazala con tu texto', 'Application 2 - remplacez par votre texte', 'Anwendung 2 - durch eigenen Text ersetzen', 'Applicazione 2 - sostituisci con il tuo testo', '用途 2。独自のテキストに置き換えてください', '적용 분야 2 - 원하는 문구로 교체하세요', 'الاستخدام 2 - استبدله بنصك'),
      t9('Application 3 - replace with your own text', '应用场景 3，请替换为你的内容', 'Aplicacion 3: reemplazala con tu texto', 'Application 3 - remplacez par votre texte', 'Anwendung 3 - durch eigenen Text ersetzen', 'Applicazione 3 - sostituisci con il tuo testo', '用途 3。独自のテキストに置き換えてください', '적용 분야 3 - 원하는 문구로 교체하세요', 'الاستخدام 3 - استبدله بنصك')
    ]
  };

  P['c6-p1'] = {
    cat: 'c6',
    title: t9('Product 6.1', '产品 6.1', 'Producto 6.1', 'Produit 6.1', 'Produkt 6.1', 'Prodotto 6.1', '商品 6.1', '제품 6.1', 'المنتج 6.1'),
    sub: t9('Product subtitle - replace with your own text', '产品副标题，请替换为你的文案', 'Subtitulo del producto: reemplazalo con tu texto', 'Sous-titre du produit - remplacez par votre texte', 'Produkt-Untertitel - durch eigenen Text ersetzen', 'Sottotitolo prodotto - sostituisci con il tuo testo', '商品サブタイトル。独自のテキストに置き換えてください', '제품 부제 - 원하는 문구로 교체하세요', 'عنوان فرعي للمنتج - استبدله بنصك'),
    lead: t9('Lead paragraph for this product. Replace it with your own description.', '产品导语段落。请替换为你的产品描述。', 'Parrafo de introduccion del producto. Reemplazalo con tu descripcion.', 'Paragraphe d\'introduction du produit. Remplacez par votre description.', 'Einleitungsabsatz zum Produkt. Durch eigene Beschreibung ersetzen.', 'Paragrafo introduttivo del prodotto. Sostituiscilo con la tua descrizione.', '商品の導入段落です。独自の説明文に置き換えてください。', '제품 소개 문단입니다. 원하는 설명으로 교체하세요.', 'فقرة تمهيدية للمنتج. استبدلها بوصفك الخاص.'),
    intro: t9('Company introduction placeholder. Replace with your own copy.', '公司介绍占位文本。请替换为你的文案。', 'Texto de presentacion de la empresa. Reemplazalo con tu contenido.', 'Texte de presentation de votre entreprise. Remplacez par votre contenu.', 'Platzhalter fur die Unternehmensvorstellung. Durch eigenen Text ersetzen.', 'Testo segnaposto per la presentazione della tua azienda.', '会社紹介のプレースホルダーです。独自の文案に置き換えてください。', '회사 소개 자리표시자입니다. 원하는 문구로 교체하세요.', 'نص بديل لتعريف الشركة. استبدله بمحتواك.'),
    gallery: ['package', 'process', 'cert', 'promotional'],
    options: [
      t9('Specification 1 - replace with your own value', '规格项 1，请替换为你的内容', 'Especificacion 1: reemplazala con tu valor', 'Specification 1 - remplacez par votre valeur', 'Spezifikation 1 - durch eigenen Wert ersetzen', 'Specifica 1 - sostituisci con il tuo valore', '仕様 1。独自の値に置き換えてください', '사양 1 - 원하는 값으로 교체하세요', 'المواصفة 1 - استبدلها بقيمتك'),
      t9('Specification 2 - replace with your own value', '规格项 2，请替换为你的内容', 'Especificacion 2: reemplazala con tu valor', 'Specification 2 - remplacez par votre valeur', 'Spezifikation 2 - durch eigenen Wert ersetzen', 'Specifica 2 - sostituisci con il tuo valore', '仕様 2。独自の値に置き換えてください', '사양 2 - 원하는 값으로 교체하세요', 'المواصفة 2 - استبدلها بقيمتك'),
      t9('Specification 3 - replace with your own value', '规格项 3，请替换为你的内容', 'Especificacion 3: reemplazala con tu valor', 'Specification 3 - remplacez par votre valeur', 'Spezifikation 3 - durch eigenen Wert ersetzen', 'Specifica 3 - sostituisci con il tuo valore', '仕様 3。独自の値に置き換えてください', '사양 3 - 원하는 값으로 교체하세요', 'المواصفة 3 - استبدلها بقيمتك'),
      t9('Specification 4 - replace with your own value', '规格项 4，请替换为你的内容', 'Especificacion 4: reemplazala con tu valor', 'Specification 4 - remplacez par votre valeur', 'Spezifikation 4 - durch eigenen Wert ersetzen', 'Specifica 4 - sostituisci con il tuo valore', '仕様 4。独自の値に置き換えてください', '사양 4 - 원하는 값으로 교체하세요', 'المواصفة 4 - استبدلها بقيمتك')
    ],
    applications: [
      t9('Application 1 - replace with your own text', '应用场景 1，请替换为你的内容', 'Aplicacion 1: reemplazala con tu texto', 'Application 1 - remplacez par votre texte', 'Anwendung 1 - durch eigenen Text ersetzen', 'Applicazione 1 - sostituisci con il tuo testo', '用途 1。独自のテキストに置き換えてください', '적용 분야 1 - 원하는 문구로 교체하세요', 'الاستخدام 1 - استبدله بنصك'),
      t9('Application 2 - replace with your own text', '应用场景 2，请替换为你的内容', 'Aplicacion 2: reemplazala con tu texto', 'Application 2 - remplacez par votre texte', 'Anwendung 2 - durch eigenen Text ersetzen', 'Applicazione 2 - sostituisci con il tuo testo', '用途 2。独自のテキストに置き換えてください', '적용 분야 2 - 원하는 문구로 교체하세요', 'الاستخدام 2 - استبدله بنصك'),
      t9('Application 3 - replace with your own text', '应用场景 3，请替换为你的内容', 'Aplicacion 3: reemplazala con tu texto', 'Application 3 - remplacez par votre texte', 'Anwendung 3 - durch eigenen Text ersetzen', 'Applicazione 3 - sostituisci con il tuo testo', '用途 3。独自のテキストに置き換えてください', '적용 분야 3 - 원하는 문구로 교체하세요', 'الاستخدام 3 - استبدله بنصك')
    ]
  };

  P['c6-p2'] = {
    cat: 'c6',
    title: t9('Product 6.2', '产品 6.2', 'Producto 6.2', 'Produit 6.2', 'Produkt 6.2', 'Prodotto 6.2', '商品 6.2', '제품 6.2', 'المنتج 6.2'),
    sub: t9('Product subtitle - replace with your own text', '产品副标题，请替换为你的文案', 'Subtitulo del producto: reemplazalo con tu texto', 'Sous-titre du produit - remplacez par votre texte', 'Produkt-Untertitel - durch eigenen Text ersetzen', 'Sottotitolo prodotto - sostituisci con il tuo testo', '商品サブタイトル。独自のテキストに置き換えてください', '제품 부제 - 원하는 문구로 교체하세요', 'عنوان فرعي للمنتج - استبدله بنصك'),
    lead: t9('Lead paragraph for this product. Replace it with your own description.', '产品导语段落。请替换为你的产品描述。', 'Parrafo de introduccion del producto. Reemplazalo con tu descripcion.', 'Paragraphe d\'introduction du produit. Remplacez par votre description.', 'Einleitungsabsatz zum Produkt. Durch eigene Beschreibung ersetzen.', 'Paragrafo introduttivo del prodotto. Sostituiscilo con la tua descrizione.', '商品の導入段落です。独自の説明文に置き換えてください。', '제품 소개 문단입니다. 원하는 설명으로 교체하세요.', 'فقرة تمهيدية للمنتج. استبدلها بوصفك الخاص.'),
    intro: t9('Company introduction placeholder. Replace with your own copy.', '公司介绍占位文本。请替换为你的文案。', 'Texto de presentacion de la empresa. Reemplazalo con tu contenido.', 'Texte de presentation de votre entreprise. Remplacez par votre contenu.', 'Platzhalter fur die Unternehmensvorstellung. Durch eigenen Text ersetzen.', 'Testo segnaposto per la presentazione della tua azienda.', '会社紹介のプレースホルダーです。独自の文案に置き換えてください。', '회사 소개 자리표시자입니다. 원하는 문구로 교체하세요.', 'نص بديل لتعريف الشركة. استبدله بمحتواك.'),
    gallery: ['package', 'process', 'cert', 'promotional'],
    options: [
      t9('Specification 1 - replace with your own value', '规格项 1，请替换为你的内容', 'Especificacion 1: reemplazala con tu valor', 'Specification 1 - remplacez par votre valeur', 'Spezifikation 1 - durch eigenen Wert ersetzen', 'Specifica 1 - sostituisci con il tuo valore', '仕様 1。独自の値に置き換えてください', '사양 1 - 원하는 값으로 교체하세요', 'المواصفة 1 - استبدلها بقيمتك'),
      t9('Specification 2 - replace with your own value', '规格项 2，请替换为你的内容', 'Especificacion 2: reemplazala con tu valor', 'Specification 2 - remplacez par votre valeur', 'Spezifikation 2 - durch eigenen Wert ersetzen', 'Specifica 2 - sostituisci con il tuo valore', '仕様 2。独自の値に置き換えてください', '사양 2 - 원하는 값으로 교체하세요', 'المواصفة 2 - استبدلها بقيمتك'),
      t9('Specification 3 - replace with your own value', '规格项 3，请替换为你的内容', 'Especificacion 3: reemplazala con tu valor', 'Specification 3 - remplacez par votre valeur', 'Spezifikation 3 - durch eigenen Wert ersetzen', 'Specifica 3 - sostituisci con il tuo valore', '仕様 3。独自の値に置き換えてください', '사양 3 - 원하는 값으로 교체하세요', 'المواصفة 3 - استبدلها بقيمتك'),
      t9('Specification 4 - replace with your own value', '规格项 4，请替换为你的内容', 'Especificacion 4: reemplazala con tu valor', 'Specification 4 - remplacez par votre valeur', 'Spezifikation 4 - durch eigenen Wert ersetzen', 'Specifica 4 - sostituisci con il tuo valore', '仕様 4。独自の値に置き換えてください', '사양 4 - 원하는 값으로 교체하세요', 'المواصفة 4 - استبدلها بقيمتك')
    ],
    applications: [
      t9('Application 1 - replace with your own text', '应用场景 1，请替换为你的内容', 'Aplicacion 1: reemplazala con tu texto', 'Application 1 - remplacez par votre texte', 'Anwendung 1 - durch eigenen Text ersetzen', 'Applicazione 1 - sostituisci con il tuo testo', '用途 1。独自のテキストに置き換えてください', '적용 분야 1 - 원하는 문구로 교체하세요', 'الاستخدام 1 - استبدله بنصك'),
      t9('Application 2 - replace with your own text', '应用场景 2，请替换为你的内容', 'Aplicacion 2: reemplazala con tu texto', 'Application 2 - remplacez par votre texte', 'Anwendung 2 - durch eigenen Text ersetzen', 'Applicazione 2 - sostituisci con il tuo testo', '用途 2。独自のテキストに置き換えてください', '적용 분야 2 - 원하는 문구로 교체하세요', 'الاستخدام 2 - استبدله بنصك'),
      t9('Application 3 - replace with your own text', '应用场景 3，请替换为你的内容', 'Aplicacion 3: reemplazala con tu texto', 'Application 3 - remplacez par votre texte', 'Anwendung 3 - durch eigenen Text ersetzen', 'Applicazione 3 - sostituisci con il tuo testo', '用途 3。独自のテキストに置き換えてください', '적용 분야 3 - 원하는 문구로 교체하세요', 'الاستخدام 3 - استبدله بنصك')
    ]
  };

  P['c6-p3'] = {
    cat: 'c6',
    title: t9('Product 6.3', '产品 6.3', 'Producto 6.3', 'Produit 6.3', 'Produkt 6.3', 'Prodotto 6.3', '商品 6.3', '제품 6.3', 'المنتج 6.3'),
    sub: t9('Product subtitle - replace with your own text', '产品副标题，请替换为你的文案', 'Subtitulo del producto: reemplazalo con tu texto', 'Sous-titre du produit - remplacez par votre texte', 'Produkt-Untertitel - durch eigenen Text ersetzen', 'Sottotitolo prodotto - sostituisci con il tuo testo', '商品サブタイトル。独自のテキストに置き換えてください', '제품 부제 - 원하는 문구로 교체하세요', 'عنوان فرعي للمنتج - استبدله بنصك'),
    lead: t9('Lead paragraph for this product. Replace it with your own description.', '产品导语段落。请替换为你的产品描述。', 'Parrafo de introduccion del producto. Reemplazalo con tu descripcion.', 'Paragraphe d\'introduction du produit. Remplacez par votre description.', 'Einleitungsabsatz zum Produkt. Durch eigene Beschreibung ersetzen.', 'Paragrafo introduttivo del prodotto. Sostituiscilo con la tua descrizione.', '商品の導入段落です。独自の説明文に置き換えてください。', '제품 소개 문단입니다. 원하는 설명으로 교체하세요.', 'فقرة تمهيدية للمنتج. استبدلها بوصفك الخاص.'),
    intro: t9('Company introduction placeholder. Replace with your own copy.', '公司介绍占位文本。请替换为你的文案。', 'Texto de presentacion de la empresa. Reemplazalo con tu contenido.', 'Texte de presentation de votre entreprise. Remplacez par votre contenu.', 'Platzhalter fur die Unternehmensvorstellung. Durch eigenen Text ersetzen.', 'Testo segnaposto per la presentazione della tua azienda.', '会社紹介のプレースホルダーです。独自の文案に置き換えてください。', '회사 소개 자리표시자입니다. 원하는 문구로 교체하세요.', 'نص بديل لتعريف الشركة. استبدله بمحتواك.'),
    gallery: ['package', 'process', 'cert', 'promotional'],
    options: [
      t9('Specification 1 - replace with your own value', '规格项 1，请替换为你的内容', 'Especificacion 1: reemplazala con tu valor', 'Specification 1 - remplacez par votre valeur', 'Spezifikation 1 - durch eigenen Wert ersetzen', 'Specifica 1 - sostituisci con il tuo valore', '仕様 1。独自の値に置き換えてください', '사양 1 - 원하는 값으로 교체하세요', 'المواصفة 1 - استبدلها بقيمتك'),
      t9('Specification 2 - replace with your own value', '规格项 2，请替换为你的内容', 'Especificacion 2: reemplazala con tu valor', 'Specification 2 - remplacez par votre valeur', 'Spezifikation 2 - durch eigenen Wert ersetzen', 'Specifica 2 - sostituisci con il tuo valore', '仕様 2。独自の値に置き換えてください', '사양 2 - 원하는 값으로 교체하세요', 'المواصفة 2 - استبدلها بقيمتك'),
      t9('Specification 3 - replace with your own value', '规格项 3，请替换为你的内容', 'Especificacion 3: reemplazala con tu valor', 'Specification 3 - remplacez par votre valeur', 'Spezifikation 3 - durch eigenen Wert ersetzen', 'Specifica 3 - sostituisci con il tuo valore', '仕様 3。独自の値に置き換えてください', '사양 3 - 원하는 값으로 교체하세요', 'المواصفة 3 - استبدلها بقيمتك'),
      t9('Specification 4 - replace with your own value', '规格项 4，请替换为你的内容', 'Especificacion 4: reemplazala con tu valor', 'Specification 4 - remplacez par votre valeur', 'Spezifikation 4 - durch eigenen Wert ersetzen', 'Specifica 4 - sostituisci con il tuo valore', '仕様 4。独自の値に置き換えてください', '사양 4 - 원하는 값으로 교체하세요', 'المواصفة 4 - استبدلها بقيمتك')
    ],
    applications: [
      t9('Application 1 - replace with your own text', '应用场景 1，请替换为你的内容', 'Aplicacion 1: reemplazala con tu texto', 'Application 1 - remplacez par votre texte', 'Anwendung 1 - durch eigenen Text ersetzen', 'Applicazione 1 - sostituisci con il tuo testo', '用途 1。独自のテキストに置き換えてください', '적용 분야 1 - 원하는 문구로 교체하세요', 'الاستخدام 1 - استبدله بنصك'),
      t9('Application 2 - replace with your own text', '应用场景 2，请替换为你的内容', 'Aplicacion 2: reemplazala con tu texto', 'Application 2 - remplacez par votre texte', 'Anwendung 2 - durch eigenen Text ersetzen', 'Applicazione 2 - sostituisci con il tuo testo', '用途 2。独自のテキストに置き換えてください', '적용 분야 2 - 원하는 문구로 교체하세요', 'الاستخدام 2 - استبدله بنصك'),
      t9('Application 3 - replace with your own text', '应用场景 3，请替换为你的内容', 'Aplicacion 3: reemplazala con tu texto', 'Application 3 - remplacez par votre texte', 'Anwendung 3 - durch eigenen Text ersetzen', 'Applicazione 3 - sostituisci con il tuo testo', '用途 3。独自のテキストに置き換えてください', '적용 분야 3 - 원하는 문구로 교체하세요', 'الاستخدام 3 - استبدله بنصك')
    ]
  };

  P['c6-p4'] = {
    cat: 'c6',
    title: t9('Product 6.4', '产品 6.4', 'Producto 6.4', 'Produit 6.4', 'Produkt 6.4', 'Prodotto 6.4', '商品 6.4', '제품 6.4', 'المنتج 6.4'),
    sub: t9('Product subtitle - replace with your own text', '产品副标题，请替换为你的文案', 'Subtitulo del producto: reemplazalo con tu texto', 'Sous-titre du produit - remplacez par votre texte', 'Produkt-Untertitel - durch eigenen Text ersetzen', 'Sottotitolo prodotto - sostituisci con il tuo testo', '商品サブタイトル。独自のテキストに置き換えてください', '제품 부제 - 원하는 문구로 교체하세요', 'عنوان فرعي للمنتج - استبدله بنصك'),
    lead: t9('Lead paragraph for this product. Replace it with your own description.', '产品导语段落。请替换为你的产品描述。', 'Parrafo de introduccion del producto. Reemplazalo con tu descripcion.', 'Paragraphe d\'introduction du produit. Remplacez par votre description.', 'Einleitungsabsatz zum Produkt. Durch eigene Beschreibung ersetzen.', 'Paragrafo introduttivo del prodotto. Sostituiscilo con la tua descrizione.', '商品の導入段落です。独自の説明文に置き換えてください。', '제품 소개 문단입니다. 원하는 설명으로 교체하세요.', 'فقرة تمهيدية للمنتج. استبدلها بوصفك الخاص.'),
    intro: t9('Company introduction placeholder. Replace with your own copy.', '公司介绍占位文本。请替换为你的文案。', 'Texto de presentacion de la empresa. Reemplazalo con tu contenido.', 'Texte de presentation de votre entreprise. Remplacez par votre contenu.', 'Platzhalter fur die Unternehmensvorstellung. Durch eigenen Text ersetzen.', 'Testo segnaposto per la presentazione della tua azienda.', '会社紹介のプレースホルダーです。独自の文案に置き換えてください。', '회사 소개 자리표시자입니다. 원하는 문구로 교체하세요.', 'نص بديل لتعريف الشركة. استبدله بمحتواك.'),
    gallery: ['package', 'process', 'cert', 'promotional'],
    options: [
      t9('Specification 1 - replace with your own value', '规格项 1，请替换为你的内容', 'Especificacion 1: reemplazala con tu valor', 'Specification 1 - remplacez par votre valeur', 'Spezifikation 1 - durch eigenen Wert ersetzen', 'Specifica 1 - sostituisci con il tuo valore', '仕様 1。独自の値に置き換えてください', '사양 1 - 원하는 값으로 교체하세요', 'المواصفة 1 - استبدلها بقيمتك'),
      t9('Specification 2 - replace with your own value', '规格项 2，请替换为你的内容', 'Especificacion 2: reemplazala con tu valor', 'Specification 2 - remplacez par votre valeur', 'Spezifikation 2 - durch eigenen Wert ersetzen', 'Specifica 2 - sostituisci con il tuo valore', '仕様 2。独自の値に置き換えてください', '사양 2 - 원하는 값으로 교체하세요', 'المواصفة 2 - استبدلها بقيمتك'),
      t9('Specification 3 - replace with your own value', '规格项 3，请替换为你的内容', 'Especificacion 3: reemplazala con tu valor', 'Specification 3 - remplacez par votre valeur', 'Spezifikation 3 - durch eigenen Wert ersetzen', 'Specifica 3 - sostituisci con il tuo valore', '仕様 3。独自の値に置き換えてください', '사양 3 - 원하는 값으로 교체하세요', 'المواصفة 3 - استبدلها بقيمتك'),
      t9('Specification 4 - replace with your own value', '规格项 4，请替换为你的内容', 'Especificacion 4: reemplazala con tu valor', 'Specification 4 - remplacez par votre valeur', 'Spezifikation 4 - durch eigenen Wert ersetzen', 'Specifica 4 - sostituisci con il tuo valore', '仕様 4。独自の値に置き換えてください', '사양 4 - 원하는 값으로 교체하세요', 'المواصفة 4 - استبدلها بقيمتك')
    ],
    applications: [
      t9('Application 1 - replace with your own text', '应用场景 1，请替换为你的内容', 'Aplicacion 1: reemplazala con tu texto', 'Application 1 - remplacez par votre texte', 'Anwendung 1 - durch eigenen Text ersetzen', 'Applicazione 1 - sostituisci con il tuo testo', '用途 1。独自のテキストに置き換えてください', '적용 분야 1 - 원하는 문구로 교체하세요', 'الاستخدام 1 - استبدله بنصك'),
      t9('Application 2 - replace with your own text', '应用场景 2，请替换为你的内容', 'Aplicacion 2: reemplazala con tu texto', 'Application 2 - remplacez par votre texte', 'Anwendung 2 - durch eigenen Text ersetzen', 'Applicazione 2 - sostituisci con il tuo testo', '用途 2。独自のテキストに置き換えてください', '적용 분야 2 - 원하는 문구로 교체하세요', 'الاستخدام 2 - استبدله بنصك'),
      t9('Application 3 - replace with your own text', '应用场景 3，请替换为你的内容', 'Aplicacion 3: reemplazala con tu texto', 'Application 3 - remplacez par votre texte', 'Anwendung 3 - durch eigenen Text ersetzen', 'Applicazione 3 - sostituisci con il tuo testo', '用途 3。独自のテキストに置き換えてください', '적용 분야 3 - 원하는 문구로 교체하세요', 'الاستخدام 3 - استبدله بنصك')
    ]
  };

  P['c6-p5'] = {
    cat: 'c6',
    title: t9('Product 6.5', '产品 6.5', 'Producto 6.5', 'Produit 6.5', 'Produkt 6.5', 'Prodotto 6.5', '商品 6.5', '제품 6.5', 'المنتج 6.5'),
    sub: t9('Product subtitle - replace with your own text', '产品副标题，请替换为你的文案', 'Subtitulo del producto: reemplazalo con tu texto', 'Sous-titre du produit - remplacez par votre texte', 'Produkt-Untertitel - durch eigenen Text ersetzen', 'Sottotitolo prodotto - sostituisci con il tuo testo', '商品サブタイトル。独自のテキストに置き換えてください', '제품 부제 - 원하는 문구로 교체하세요', 'عنوان فرعي للمنتج - استبدله بنصك'),
    lead: t9('Lead paragraph for this product. Replace it with your own description.', '产品导语段落。请替换为你的产品描述。', 'Parrafo de introduccion del producto. Reemplazalo con tu descripcion.', 'Paragraphe d\'introduction du produit. Remplacez par votre description.', 'Einleitungsabsatz zum Produkt. Durch eigene Beschreibung ersetzen.', 'Paragrafo introduttivo del prodotto. Sostituiscilo con la tua descrizione.', '商品の導入段落です。独自の説明文に置き換えてください。', '제품 소개 문단입니다. 원하는 설명으로 교체하세요.', 'فقرة تمهيدية للمنتج. استبدلها بوصفك الخاص.'),
    intro: t9('Company introduction placeholder. Replace with your own copy.', '公司介绍占位文本。请替换为你的文案。', 'Texto de presentacion de la empresa. Reemplazalo con tu contenido.', 'Texte de presentation de votre entreprise. Remplacez par votre contenu.', 'Platzhalter fur die Unternehmensvorstellung. Durch eigenen Text ersetzen.', 'Testo segnaposto per la presentazione della tua azienda.', '会社紹介のプレースホルダーです。独自の文案に置き換えてください。', '회사 소개 자리표시자입니다. 원하는 문구로 교체하세요.', 'نص بديل لتعريف الشركة. استبدله بمحتواك.'),
    gallery: ['package', 'process', 'cert', 'promotional'],
    options: [
      t9('Specification 1 - replace with your own value', '规格项 1，请替换为你的内容', 'Especificacion 1: reemplazala con tu valor', 'Specification 1 - remplacez par votre valeur', 'Spezifikation 1 - durch eigenen Wert ersetzen', 'Specifica 1 - sostituisci con il tuo valore', '仕様 1。独自の値に置き換えてください', '사양 1 - 원하는 값으로 교체하세요', 'المواصفة 1 - استبدلها بقيمتك'),
      t9('Specification 2 - replace with your own value', '规格项 2，请替换为你的内容', 'Especificacion 2: reemplazala con tu valor', 'Specification 2 - remplacez par votre valeur', 'Spezifikation 2 - durch eigenen Wert ersetzen', 'Specifica 2 - sostituisci con il tuo valore', '仕様 2。独自の値に置き換えてください', '사양 2 - 원하는 값으로 교체하세요', 'المواصفة 2 - استبدلها بقيمتك'),
      t9('Specification 3 - replace with your own value', '规格项 3，请替换为你的内容', 'Especificacion 3: reemplazala con tu valor', 'Specification 3 - remplacez par votre valeur', 'Spezifikation 3 - durch eigenen Wert ersetzen', 'Specifica 3 - sostituisci con il tuo valore', '仕様 3。独自の値に置き換えてください', '사양 3 - 원하는 값으로 교체하세요', 'المواصفة 3 - استبدلها بقيمتك'),
      t9('Specification 4 - replace with your own value', '规格项 4，请替换为你的内容', 'Especificacion 4: reemplazala con tu valor', 'Specification 4 - remplacez par votre valeur', 'Spezifikation 4 - durch eigenen Wert ersetzen', 'Specifica 4 - sostituisci con il tuo valore', '仕様 4。独自の値に置き換えてください', '사양 4 - 원하는 값으로 교체하세요', 'المواصفة 4 - استبدلها بقيمتك')
    ],
    applications: [
      t9('Application 1 - replace with your own text', '应用场景 1，请替换为你的内容', 'Aplicacion 1: reemplazala con tu texto', 'Application 1 - remplacez par votre texte', 'Anwendung 1 - durch eigenen Text ersetzen', 'Applicazione 1 - sostituisci con il tuo testo', '用途 1。独自のテキストに置き換えてください', '적용 분야 1 - 원하는 문구로 교체하세요', 'الاستخدام 1 - استبدله بنصك'),
      t9('Application 2 - replace with your own text', '应用场景 2，请替换为你的内容', 'Aplicacion 2: reemplazala con tu texto', 'Application 2 - remplacez par votre texte', 'Anwendung 2 - durch eigenen Text ersetzen', 'Applicazione 2 - sostituisci con il tuo testo', '用途 2。独自のテキストに置き換えてください', '적용 분야 2 - 원하는 문구로 교체하세요', 'الاستخدام 2 - استبدله بنصك'),
      t9('Application 3 - replace with your own text', '应用场景 3，请替换为你的内容', 'Aplicacion 3: reemplazala con tu texto', 'Application 3 - remplacez par votre texte', 'Anwendung 3 - durch eigenen Text ersetzen', 'Applicazione 3 - sostituisci con il tuo testo', '用途 3。独自のテキストに置き換えてください', '적용 분야 3 - 원하는 문구로 교체하세요', 'الاستخدام 3 - استبدله بنصك')
    ]
  };

  return {
    cats: cats,
    order: ['c1-p1', 'c1-p2', 'c1-p3', 'c1-p4', 'c1-p5', 'c2-p1', 'c2-p2', 'c2-p3', 'c2-p4', 'c2-p5', 'c3-p1', 'c3-p2', 'c3-p3', 'c3-p4', 'c3-p5', 'c4-p1', 'c4-p2', 'c4-p3', 'c4-p4', 'c4-p5', 'c5-p1', 'c5-p2', 'c5-p3', 'c5-p4', 'c5-p5', 'c6-p1', 'c6-p2', 'c6-p3', 'c6-p4', 'c6-p5'],
    items: P
  };
})();

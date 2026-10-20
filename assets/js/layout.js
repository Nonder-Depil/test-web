/* Shared header, mobile drawer and footer.
   Injected on every page so the 100+ item catalogue menu is authored once.
   Multilingual text uses <span class="i18n i18n-xx"> wrappers which the
   CSS reveals according to <html data-lang>. */

(function () {
  var CHEV = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 9l6 6 6-6"/></svg>';

  /* Shared dictionary for the 9 supported languages. Missing translations fall
     back to English. Extend this object to add more translated phrases. */
  var DICT = {'Custom Sports Medals': { fr: 'Médailles sportives sur mesure', de: 'Individuelle Sportmedaillen', it: 'Medaglie sportive personalizzate', ja: 'カスタムスポーツメダル', ko: '맞춤형 스포츠 메달', ar: 'ميداليات رياضية مخصصة', zh: '定制运动奖牌', es: 'Medallas deportivas personalizadas' },
'Certifications': { fr: 'Certifications', de: 'Zertifizierungen', it: 'Certificazioni', ja: '認証', ko: '인증', ar: 'الشهادات', zh: '认证', es: 'Certificaciones' },
'Exhibitions': { fr: 'Salons', de: 'Messen', it: 'Fiere', ja: '展示会', ko: '전시회', ar: 'المعارض', zh: '展会', es: 'Exposiciones' },
'Payment Methods': { fr: 'Moyens de paiement', de: 'Zahlungsmethoden', it: 'Metodi di pagamento', ja: 'お支払い方法', ko: '결제 방법', ar: 'طرق الدفع', zh: '支付方式', es: 'Métodos de pago' },
'Return & Refund Policy': { fr: 'Politique de retour et remboursement', de: 'Rückgabe- und Erstattungsrichtlinie', it: 'Politica di reso e rimborso', ja: '返品・返金ポリシー', ko: '반품 및 환불 정책', ar: 'سياسة الإرجاع والاسترداد', zh: '退换货政策', es: 'Política de devolución y reembolso' },
    'Explore Medals': { fr: 'Voir les médailles', de: 'Medaillen entdecken', it: 'Scopri le medaglie', ja: 'メダルを見る', ko: '메달 보기', ar: 'استعرض الميداليات' },
    'Learn More': { fr: 'En savoir plus', de: 'Mehr erfahren', it: 'Scopri di più', ja: '詳細を見る', ko: '자세히 보기', ar: 'اعرف المزيد' },
    'See Process': { fr: 'Voir le processus', de: 'Prozess ansehen', it: 'Vedi il processo', ja: 'プロセスを見る', ko: '프로세스 보기', ar: 'اطلع على العملية' },
    'Factory-direct pricing': { fr: 'Prix direct usine', de: 'Fabrikpreise', it: 'Prezzi di fabbrica', ja: '工場直送価格', ko: '공장 직접 가격', ar: 'أسعار مباشرة من المصنع' },
    'Low MOQ from 50 pcs': { fr: 'MOQ 50 pièces', de: 'MOQ ab 50 Stück', it: 'MOQ da 50 pezzi', ja: '最低注文数 50個から', ko: '최소 주문 수량 50개', ar: 'حد أدنى 50 قطعة' },
    '40+ years manufacturing': { fr: '40+ ans de fabrication', de: 'Über 40 Jahre Erfahrung', it: 'Oltre 40 anni di produzione', ja: '40年以上の製造経験', ko: '40년 이상의 제조 경험', ar: 'أكثر من 40 عامًا في التصنيع' },
    'Get a Quote': { fr: 'Demander un devis', de: 'Angebot anfordern', it: 'Richiedi un preventivo', ja: '見積もりを依頼', ko: '견적 요청', ar: 'اطلب عرض سعر' },
    'Not sure which craft fits your project? Send us your artwork.': { fr: 'Vous ne savez pas quelle technique choisir ? Envoyez-nous votre design.', de: 'Unsicher, welche Technik passt? Senden Sie uns Ihre Grafik.', it: 'Non sai quale tecnica scegliere? Inviaci il tuo design.', ja: 'どの技術が適しているか不明ですか？お気軽にデザインをお送りください。', ko: '어떤 공정이 적합한지 잘 모르겠다면? 작품을 보내주세요.', ar: 'غير متأكد من التقنية المناسبة؟ أرسل لنا تصميمك.' },
    'Marathon, school, military and corporate award medals.': { fr: 'Médailles pour marathons, écoles, militaires et entreprises.', de: 'Medaillen für Marathon, Schule, Militär und Unternehmen.', it: 'Medaglie per maratone, scuole, militari e aziende.', ja: 'マラソン、学校、軍隊、企業向け表彰メダル。', ko: '마라톤, 학교, 군대, 기업 시상 메달.', ar: 'ميداليات للماراثون والمدارس والجيش والشركات.' },
    'Established in 1984, serving customers on five continents.': { fr: 'Fondée en 1984, clients sur cinq continents.', de: 'Seit 1984, Kunden auf fünf Kontinenten.', it: 'Fondata nel 1984, serviamo clienti in cinque continenti.', ja: '1984年創業、五大洲のお客様にサービスを提供。', ko: '1984년 설립, 5대륙 고객에게 서비스.', ar: 'تأسست عام 1984، نخدم العملاء في خمس قارات.' },
    'From artwork to delivery, one team follows your order.': { fr: 'De la création à la livraison, une équipe suit votre commande.', de: 'Vom Design bis zur Lieferung begleitet ein Team Ihre Bestellung.', it: 'Dal design alla consegna, un team segue il tuo ordine.', ja: 'デザインから配送まで、ひとつのチームが対応します。', ko: '디자인부터 배송까지, 하나의 팀이 주문을 처리합니다.', ar: 'من التصميم إلى التسليم، يتابع فريق واحد طلبك.' },
    'View all in ': { fr: 'Voir tout dans ', de: 'Alle anzeigen in ', it: 'Vedi tutto in ', ja: 'すべて見る ', ko: '모두 보기 ', ar: 'عرض الكل في ' },
    'View all products': { fr: 'Voir tous les produits', de: 'Alle Produkte anzeigen', it: 'Vedi tutti i prodotti', ja: 'すべての製品を見る', ko: '모든 제품 보기', ar: 'عرض جميع المنتجات' },
    'Metal Products': { fr: 'Produits métalliques', de: 'Metallprodukte', it: 'Prodotti in metallo', ja: '金属製品', ko: '금속 제품', ar: 'منتجات معدنية' },
    'Patches & Labels': { fr: 'Patchs et étiquettes', de: 'Aufnäher und Etiketten', it: 'Patch e etichette', ja: 'ワッペンとラベル', ko: '패치 및 라벨', ar: 'الشارات والملصقات' },
    'Lanyards & Fabric': { fr: 'Cordons et textiles', de: 'Lanyards und Textilien', it: 'Lanyard e tessuti', ja: 'ランヤードとファブリック', ko: '랜야드 및 원단', ar: 'الحبال والمنسوجات' },
    'Soft PVC & Silicone': { fr: 'PVC souple et silicone', de: 'Weich-PVC und Silikon', it: 'PVC morbido e silicone', ja: 'ソフトPVCとシリコン', ko: '소프트 PVC 및 실리콘', ar: 'PVC مرن وسيليكون' },
    'Leather & Wood': { fr: 'Cuir et bois', de: 'Leder und Holz', it: 'Pelle e legno', ja: 'レザーとウッド', ko: '가죽 및 우드', ar: 'الجلود والخشب' },
    'Promotional & Hats': { fr: 'Promotionnels et casquettes', de: 'Werbeartikel und Caps', it: 'Promozionali e cappelli', ja: '販促品と帽子', ko: '프로모션 및 모자', ar: 'الهدايا الترويجية والقبعات' },
    'Medal Categories': { fr: 'Catégories de médailles', de: 'Medaillenkategorien', it: 'Categorie di medaglie', ja: 'メダルカテゴリー', ko: '메달 카테고리', ar: 'فئات الميداليات' },
    'About Triumph': { fr: 'À propos de Triumph', de: 'Über Triumph', it: 'Chi siamo', ja: 'Triumphについて', ko: 'Triumph 소개', ar: 'عن Triumph' },
    'Our Services': { fr: 'Nos services', de: 'Unsere Leistungen', it: 'I nostri servizi', ja: 'サービス内容', ko: '서비스', ar: 'خدماتنا' },
    'Home': { fr: 'Accueil', de: 'Startseite', it: 'Home', ja: 'ホーム', ko: '홈', ar: 'الرئيسية' },
    'Products': { fr: 'Produits', de: 'Produkte', it: 'Prodotti', ja: '製品', ko: '제품', ar: 'المنتجات' },
    'Custom Medal': { fr: 'Médailles sur mesure', de: 'Individuelle Medaillen', it: 'Medaglie personalizzate', ja: 'カスタムメダル', ko: '커스텀 메달', ar: 'ميداليات مخصصة' },
    'Company': { fr: 'Entreprise', de: 'Unternehmen', it: 'Azienda', ja: '会社概要', ko: '회사 소개', ar: 'الشركة' },
    'Services': { fr: 'Services', de: 'Leistungen', it: 'Servizi', ja: 'サービス', ko: '서비스', ar: 'الخدمات' },
    'A custom promotional products manufacturer established in 1984, supplying metal gifts, patches, lanyards and silicone items to brands in over 60 countries.': { fr: 'Fabricant de produits promotionnels personnalisés depuis 1984, fournissant des cadeaux métalliques, patchs, cordons et articles en silicone à des marques dans plus de 60 pays.', de: 'Hersteller von Werbeartikeln seit 1984, liefert Metallgeschenke, Aufnäher, Lanyards und Silikonartikel an Marken in über 60 Ländern.', it: 'Produttore di articoli promozionali personalizzati dal 1984, fornisce regali in metallo, patch, lanyard e articoli in silicone a marchi in oltre 60 paesi.', ja: '1984年設立のカスタムプロモーション製品メーカー。金属ギフト、ワッペン、ランヤード、シリコン製品を60カ国以上のブランドに供給。', ko: '1984년 설립된 맞춤형 홍보 제품 제조업체. 60개국 이상의 브랜드에 금속 선물, 패치, 랜야드, 실리콘 제품을 공급합니다.', ar: 'شركة مصنعة للهدايا الترويجية المخصصة منذ عام 1984، تزوّد العلامات التجارية في أكثر من 60 دولة بالهدايا المعدنية والشارات والحبال والمنتجات السيليكونية.' },
    'Product Catalogue': { fr: 'Catalogue de produits', de: 'Produktkatalog', it: 'Catalogo prodotti', ja: '製品カタログ', ko: '제품 카탈로그', ar: 'كتالوج المنتجات' },
    'Custom Metal Products': { fr: 'Produits métalliques sur mesure', de: 'Individuelle Metallprodukte', it: 'Prodotti in metallo personalizzati', ja: 'カスタム金属製品', ko: '맞춤형 금속 제품', ar: 'منتجات معدنية مخصصة' },
    'Custom Patches & Labels': { fr: 'Patchs et étiquettes sur mesure', de: 'Individuelle Aufnäher und Etiketten', it: 'Patch e etichette personalizzate', ja: 'カスタムワッペンとラベル', ko: '맞춤형 패치 및 라벨', ar: 'شارات وملصقات مخصصة' },
    'Custom Lanyards': { fr: 'Cordons sur mesure', de: 'Individuelle Lanyards', it: 'Lanyard personalizzati', ja: 'カスタムランヤード', ko: '맞춤형 랜야드', ar: 'حبال مخصصة' },
    'Leather & Wooden Items': { fr: 'Articles en cuir et bois', de: 'Leder- und Holzartikel', it: 'Articoli in pelle e legno', ja: 'レザーと木製アイテム', ko: '가죽 및 우드 제품', ar: 'منتجات جلدية وخشبية' },
'All Products': { fr: 'Tous les produits', de: 'Alle Produkte', it: 'Tutti i prodotti', ja: 'すべての製品', ko: '모든 제품', ar: 'جميع المنتجات', zh: '全部产品', es: 'Todos los productos' },
'Company Profile': { fr: 'Profil de l\'entreprise', de: 'Unternehmensprofil', it: 'Profilo aziendale', ja: '会社概要', ko: '회사 프로필', ar: 'ملف الشركة', zh: '公司简介', es: 'Perfil de la empresa' },
'Factory Tour': { fr: 'Visite de l\'usine', de: 'Werksführung', it: 'Tour in fabbrica', ja: '工場見学', ko: '공장 투어', ar: 'جولة في المصنع', zh: '工厂参观', es: 'Tour de fábrica' },
'Showroom': { fr: 'Showroom', de: 'Showroom', it: 'Showroom', ja: 'ショールーム', ko: '쇼룸', ar: 'صالة العرض', zh: '展示厅', es: 'Showroom' },
'One-Stop Service': { fr: 'Service tout-en-un', de: 'Komplettservice', it: 'Servizio completo', ja: 'ワンストップサービス', ko: '원스톱 서비스', ar: 'خدمة شاملة', zh: '一站式服务', es: 'Servicio integral' },
'Customization Process': { fr: 'Processus de personnalisation', de: 'Anpassungsprozess', it: 'Processo di personalizzazione', ja: 'カスタマイズプロセス', ko: '맞춤화 프로세스', ar: 'عملية التخصيص', zh: '定制流程', es: 'Proceso de personalización' },
'FAQ': { fr: 'FAQ', de: 'FAQ', it: 'FAQ', ja: 'よくある質問', ko: 'FAQ', ar: 'الأسئلة الشائعة', zh: '常见问题', es: 'Preguntas frecuentes' },
    'Blog': { fr: 'Blog', de: 'Blog', it: 'Blog', ja: 'ブログ', ko: '블로그', ar: 'المدونة' },
    'Contact': { fr: 'Contact', de: 'Kontakt', it: 'Contatti', ja: 'お問い合わせ', ko: '문의', ar: 'اتصل بنا' },
    'Tel / WhatsApp': { fr: 'Tél / WhatsApp', de: 'Tel / WhatsApp', it: 'Tel / WhatsApp', ja: '電話 / WhatsApp', ko: '전화 / WhatsApp', ar: 'هاتف / واتساب' },
    'Working hours': { fr: 'Heures d\'ouverture', de: 'Öffnungszeiten', it: 'Orari', ja: '営業時間', ko: '근무 시간', ar: 'ساعات العمل' },
    'Mon - Sat, 9:00 - 18:00 (GMT+8)': { fr: 'Lun - Sam, 9h00 - 18h00 (GMT+8)', de: 'Mo - Sa, 9:00 - 18:00 (GMT+8)', it: 'Lun - Sab, 9:00 - 18:00 (GMT+8)', ja: '月〜土 9:00 - 18:00 (GMT+8)', ko: '월-토, 9:00 - 18:00 (GMT+8)', ar: 'السبت - الاثنين، 9:00 - 18:00 (GMT+8)' },
    'All rights reserved.': { fr: 'Tous droits réservés.', de: 'Alle Rechte vorbehalten.', it: 'Tutti i diritti riservati.', ja: 'すべての権利を保有。', ko: '모든 권리 보유.', ar: 'جميع الحقوق محفوظة.' },
    'Demo replica - no external services connected.': { fr: 'Réplica de démonstration - aucun service externe connecté.', de: 'Demo-Replik - keine externen Dienste verbunden.', it: 'Replica dimostrativa - nessun servizio esterno collegato.', ja: 'デモ版レプリカ - 外部サービス未接続。', ko: '데모 복제본 - 외부 서비스 미연결.', ar: 'نسخة تجريبية - لا توجد خدمات خارجية متصلة.' },
    'Back to top': { fr: 'Retour en haut', de: 'Nach oben', it: 'Torna su', ja: 'トップへ戻る', ko: '맨 위로', ar: 'العودة إلى الأعلى' },

    /* product sub-category names used in the mega menu (added for 9-language support) */
'Enamel Pins & Lapel Pins': { fr: 'Épingles en émail et à revers', de: 'Emailnadeln & Reversnadeln', it: 'Spille smaltate e da bavero', ja: 'エナメルピン＆ラペルピン', ko: '에나멜 핀 & 라펠 핀', ar: 'دبابيس المينا والتلبيب', zh: '珐琅徽章与翻领别针', es: 'Pines de esmalte y solapa' },
'Custom Medals': { fr: 'Médailles personnalisées', de: 'Individuelle Medaillen', it: 'Medaglie personalizzate', ja: 'カスタムメダル', ko: '맞춤형 메달', ar: 'ميداليات مخصصة', zh: '定制奖牌', es: 'Medallas personalizadas' },
'Sports Medals': { fr: 'Médailles de sport', de: 'Sportmedaillen', it: 'Medaglie sportive', ja: 'スポーツメダル', ko: '스포츠 메달', ar: 'ميداليات رياضية', zh: '运动奖牌', es: 'Medallas deportivas' },
'Challenge Coins': { fr: 'Pièces de défi', de: 'Challenge Coins', it: 'Monete da sfida', ja: 'チャレンジコイン', ko: '챌린지 코인', ar: 'عملات تحدي', zh: '挑战币', es: 'Monedas de desafío' },
'Metal Badges & Emblems': { fr: 'Badges et emblèmes métalliques', de: 'Metallabzeichen & Embleme', it: 'Distintivi ed emblemi in metallo', ja: 'メタルバッジ＆エンブレム', ko: '금속 배지 및 엠블럼', ar: 'شارات وشعارات معدنية', zh: '金属徽章', es: 'Insignias y emblemas metálicos' },
'Metal Keychains': { fr: 'Porte-clés métalliques', de: 'Metallschlüsselanhänger', it: 'Portachiavi in metallo', ja: 'メタルキーホルダー', ko: '금속 키링', ar: 'ميداليات مفاتيح معدنية', zh: '金属钥匙扣', es: 'Llaveros metálicos' },
'Cufflinks & Tie Bars': { fr: 'Boutons de manchette et pinces à cravate', de: 'Manschettenknöpfe & Krawattennadeln', it: 'Gemelli e fermacravatte', ja: 'カフス＆タイバー', ko: '커프스링크스 및 타이바', ar: 'أزرار أكمام ومشابك ربطات', zh: '袖扣与领带夹', es: 'Gemelos y pasadores de corbata' },
'Dog Tags': { fr: 'Plaques militaires', de: 'Erkennungsmarken', it: 'Piastrine militari', ja: 'ドッグタグ', ko: '군번줄', ar: 'علامات الكلاب', zh: '军牌', es: 'Placas de identificación' },
'Bottle Openers': { fr: 'Décapsuleurs', de: 'Flaschenöffner', it: 'Apribottiglie', ja: '栓抜き', ko: '병따개', ar: 'فتاحات زجاجات', zh: '开瓶器', es: 'Abridores de botella' },
'Belt Buckles': { fr: 'Boucles de ceinture', de: 'Gürtelschnallen', it: 'Fibbie per cinture', ja: 'ベルトバックル', ko: '벨트버클', ar: 'إبازيم حزام', zh: '皮带扣', es: 'Hebillas de cinturón' },
'Fridge Magnets': { fr: 'Magnets pour réfrigérateur', de: 'Kühlschrankmagnete', it: 'Magneti frigo', ja: '冷蔵庫マグネット', ko: '냉장고 자석', ar: 'مغناطيس الثلاجة', zh: '冰箱贴', es: 'Imanes de nevera' },
'Military Medals': { fr: 'Médailles militaires', de: 'Militärmedaillen', it: 'Medaglie militari', ja: 'ミリタリーメダル', ko: '군용 메달', ar: 'ميداليات عسكرية', zh: '军功章', es: 'Medallas militares' },
'Golf Accessories': { fr: 'Accessoires de golf', de: 'Golfzubehör', it: 'Accessori da golf', ja: 'ゴルフアクセサリー', ko: '골프 액세서리', ar: 'إكسسوارات الجولف', zh: '高尔夫配件', es: 'Accesorios de golf' },
'Metal Trophies': { fr: 'Trophées métalliques', de: 'Metalltrophäen', it: 'Trofei in metallo', ja: 'メタルトロフィー', ko: '금속 트로피', ar: 'جوائز معدنية', zh: '金属奖杯', es: 'Trofeos metálicos' },
'Luggage Tags': { fr: 'Étiquettes de bagage', de: 'Kofferanhänger', it: 'Targhette bagaglio', ja: 'ラゲッジタグ', ko: '러기지 태그', ar: 'بطاقات الأمتعة', zh: '行李牌', es: 'Etiquetas de equipaje' },
'Embroidered Patches': { fr: 'Patchs brodés', de: 'Bestickte Aufnäher', it: 'Patch ricamate', ja: '刺繍ワッペン', ko: '자수 패치', ar: 'بقع مطرزة', zh: '刺绣补丁', es: 'Parches bordados' },
'Woven Patches': { fr: 'Patchs tissés', de: 'Gewebte Aufnäher', it: 'Patch tessute', ja: '織りワッペン', ko: '직조 패치', ar: 'بقع منسوجة', zh: '织唛补丁', es: 'Parches tejidos' },
'Chenille Patches': { fr: 'Patchs en chenille', de: 'Chenille-Aufnäher', it: 'Patch in ciniglia', ja: 'シニールワッペン', ko: '셔닐 패치', ar: 'بقع شينيل', zh: '雪尼尔补丁', es: 'Parches de chenilla' },
'PVC & Silicone Patches': { fr: 'Patchs en PVC et silicone', de: 'PVC- und Silikon-Aufnäher', it: 'Patch in PVC e silicone', ja: 'PVC＆シリコンワッペン', ko: 'PVC 및 실리콘 패치', ar: 'بقع PVC والسيليكون', zh: 'PVC 和硅胶补丁', es: 'Parches de PVC y silicona' },
'Sequin Patches': { fr: 'Patchs à paillettes', de: 'Pailletten-Aufnäher', it: 'Patch con paillettes', ja: 'スパンコールワッペン', ko: '스팽글 패치', ar: 'بقع ترتر', zh: '亮片补丁', es: 'Parches de lentejuelas' },
'Bullion Patches': { fr: 'Patchs en filigrane', de: 'Filigrane Aufnäher', it: 'Patch in filigrana', ja: 'ブリオンワッペン', ko: '불리온 패치', ar: 'بقع حلي ذهبي', zh: '金丝刺绣补丁', es: 'Parches de galón' },
'Embroidery Keychains': { fr: 'Porte-clés brodés', de: 'Bestickte Schlüsselanhänger', it: 'Portachiavi ricamati', ja: '刺繍キーホルダー', ko: '자수 키링', ar: 'ميداليات مفاتيح مطرزة', zh: '刺绣钥匙扣', es: 'Llaveros bordados' },
'Epaulettes': { fr: 'Épaulettes', de: 'Schulterklappen', it: 'Spalline', ja: '肩章', ko: '견장', ar: 'كتفيات', zh: '肩章', es: 'Hombreras' },
'Woven Labels': { fr: 'Étiquettes tissées', de: 'Gewebte Etiketten', it: 'Etichette tessute', ja: '織りラベル', ko: '직조 라벨', ar: 'ملصقات نسيجية', zh: '织唛标签', es: 'Etiquetas tejidas' },
'Leather Patches': { fr: 'Patchs en cuir', de: 'Lederpatches', it: 'Patch in pelle', ja: 'レザーワッペン', ko: '가죽 패치', ar: 'بقع جلدية', zh: '皮革补丁', es: 'Parches de cuero' },
'Polyester Lanyards': { fr: 'Cordons en polyester', de: 'Polyester-Lanyards', it: 'Lanyard in poliestere', ja: 'ポリエステルランヤード', ko: '폴리에스터 랜야드', ar: 'حبال بوليستر', zh: '涤纶挂绳', es: 'Cordones de poliéster' },
'Nylon Lanyards': { fr: 'Cordons en nylon', de: 'Nylon-Lanyards', it: 'Lanyard in nylon', ja: 'ナイロンランヤード', ko: '나일론 랜야드', ar: 'حبال نايلون', zh: '尼龙挂绳', es: 'Cordones de nylon' },
'Tubular Lanyards': { fr: 'Cordons tubulaires', de: 'Schlauch-Lanyards', it: 'Lanyard tubolari', ja: 'チューブランヤード', ko: '튜불 랜야드', ar: 'حبال أنبوبية', zh: '管状挂绳', es: 'Cordones tubulares' },
'Woven Lanyards': { fr: 'Cordons tissés', de: 'Gewebte Lanyards', it: 'Lanyard tessuti', ja: '織りランヤード', ko: '직조 랜야드', ar: 'حبال منسوجة', zh: '织唛挂绳', es: 'Cordones tejidos' },
'Reflective Lanyards': { fr: 'Cordons réfléchissants', de: 'Reflektierende Lanyards', it: 'Lanyard riflettenti', ja: '反射ランヤード', ko: '반사 랜야드', ar: 'حبال عاكسة', zh: '反光挂绳', es: 'Cordones reflectantes' },
'Heat Transfer Lanyards': { fr: 'Cordons par transfert thermique', de: 'Wärmeübertragungs-Lanyards', it: 'Lanyard con trasferimento termico', ja: '熱転写ランヤード', ko: '열전사 랜야드', ar: 'حبال نقل حراري', zh: '热转印挂绳', es: 'Cordones por transferencia térmica' },
'Eco-Friendly Lanyards': { fr: 'Cordons écologiques', de: 'Umweltfreundliche Lanyards', it: 'Lanyard ecologici', ja: 'エコランヤード', ko: '친환경 랜야드', ar: 'حبال صديقة للبيئة', zh: '环保挂绳', es: 'Cordones ecológicos' },
'Badge Reels': { fr: 'Enrouleurs de badge', de: 'Badge-Reels', it: 'Portabadge a bobina', ja: 'バッジリール', ko: '배지 릴', ar: 'بكرات الشارات', zh: '易拉扣', es: 'Portacredenciales retráctiles' },
'Cord Lanyards': { fr: 'Cordons ronds', de: 'Kordel-Lanyards', it: 'Lanyard in cordino', ja: '紐ランヤード', ko: '코드 랜야드', ar: 'حبال حبلية', zh: '圆绳挂绳', es: 'Cordones de cordón' },
'Dog Leashes & Collars': { fr: 'Laisses et colliers pour chiens', de: 'Hundeleinen & Halsbänder', it: 'Guinzagli e collari per cani', ja: '犬用リードと首輪', ko: '강아지 목줄과 가슴줄', ar: 'أربطة وطوق للكلاب', zh: '狗绳与项圈', es: 'Correas y collares de perro' },
'Soft PVC Medals': { fr: 'Médailles en PVC souple', de: 'Weich-PVC-Medaillen', it: 'Medaglie in PVC morbido', ja: 'ソフトPVCメダル', ko: '소프트 PVC 메달', ar: 'ميداليات PVC مرنة', zh: '软胶 PVC 奖牌', es: 'Medallas de PVC blando' },
'Soft PVC Keychains': { fr: 'Porte-clés en PVC souple', de: 'Weich-PVC-Schlüsselanhänger', it: 'Portachiavi in PVC morbido', ja: 'ソフトPVCキーホルダー', ko: '소프트 PVC 키링', ar: 'ميداليات مفاتيح PVC مرنة', zh: '软胶 PVC 钥匙扣', es: 'Llaveros de PVC blando' },
'Soft PVC Wristbands': { fr: 'Bracelets en PVC souple', de: 'Weich-PVC-Armbänder', it: 'Braccialetti in PVC morbido', ja: 'ソフトPVCリストバンド', ko: '소프트 PVC 손목 밴드', ar: 'أساور PVC مرنة', zh: '软胶 PVC 手环', es: 'Pulseras de PVC blando' },
'Silicone Wristbands': { fr: 'Bracelets en silicone', de: 'Silikon-Armbänder', it: 'Braccialetti in silicone', ja: 'シリコンリストバンド', ko: '실리콘 손목 밴드', ar: 'أساور سيليكون', zh: '硅胶手环', es: 'Pulseras de silicona' },
'Silicone Keychains': { fr: 'Porte-clés en silicone', de: 'Silikon-Schlüsselanhänger', it: 'Portachiavi in silicone', ja: 'シリコンキーホルダー', ko: '실리콘 키링', ar: 'ميداليات مفاتيح سيليكون', zh: '硅胶钥匙扣', es: 'Llaveros de silicona' },
'Silicone Coasters': { fr: 'Dessous de verre en silicone', de: 'Silikon-Untersetzer', it: 'Sottobicchieri in silicone', ja: 'シリコンコースター', ko: '실리콘 코스터', ar: 'قواعد أكواب سيليكون', zh: '硅胶杯垫', es: 'Posavasos de silicona' },
'Silicone Straps': { fr: 'Sangles en silicone', de: 'Silikon-Träger', it: 'Cinturini in silicone', ja: 'シリコンストラップ', ko: '실리콘 스트랩', ar: 'أشرطة سيليكون', zh: '硅胶挂带', es: 'Correas de silicona' },
'PVC Fridge Magnets': { fr: 'Magnets en PVC', de: 'PVC-Kühlschrankmagnete', it: 'Magneti in PVC', ja: 'PVC冷蔵庫マグネット', ko: 'PVC 냉장고 자석', ar: 'مغناطيس ثلاجة PVC', zh: 'PVC 冰箱贴', es: 'Imanes de PVC' },
'Leather Bag Tags': { fr: 'Étiquettes de sac en cuir', de: 'Leder-Taschenanhänger', it: 'Targhette per borse in pelle', ja: 'レザーバッグタグ', ko: '가죽 가방 태그', ar: 'بطاقات حقائب جلدية', zh: '皮革行李牌', es: 'Etiquetas de bolso de cuero' },
'Leather Luggage Tags': { fr: 'Étiquettes de bagage en cuir', de: 'Leder-Kofferanhänger', it: 'Targhette bagaglio in pelle', ja: 'レザーラゲッジタグ', ko: '가죽 러기지 태그', ar: 'بطاقات أمتعة جلدية', zh: '皮革行李牌', es: 'Etiquetas de equipaje de cuero' },
'Leather Keychains': { fr: 'Porte-clés en cuir', de: 'Leder-Schlüsselanhänger', it: 'Portachiavi in pelle', ja: 'レザーキーホルダー', ko: '가죽 키링', ar: 'ميداليات مفاتيح جلدية', zh: '皮革钥匙扣', es: 'Llaveros de cuero' },
'Leather Key Fobs': { fr: 'Porte-clés en cuir', de: 'Leder-Schlüsselanhänger', it: 'Portachiavi in pelle', ja: 'レザーキーフォブ', ko: '가죽 키 포브', ar: 'ميداليات مفاتيح جلدية', zh: '皮革钥匙扣', es: 'Llaveros de cuero' },
'Leather Coasters': { fr: 'Dessous de verre en cuir', de: 'Leder-Untersetzer', it: 'Sottobicchieri in pelle', ja: 'レザーコースター', ko: '가죽 코스터', ar: 'قواعد أكواب جلدية', zh: '皮革杯垫', es: 'Posavasos de cuero' },
'Leather Bookmarks': { fr: 'Signets en cuir', de: 'Leder-Lesezeichen', it: 'Segnalibri in pelle', ja: 'レザーブックマーク', ko: '가죽 책갈피', ar: 'إشارات مرجعية جلدية', zh: '皮革书签', es: 'Marcadores de cuero' },
'Leather Money Clips': { fr: 'Pinces à billets en cuir', de: 'Leder-Geldklammern', it: 'Fermasoldi in pelle', ja: 'レザーマネークリップ', ko: '가죽 머니 클립', ar: 'مشابك نقود جلدية', zh: '皮革钱夹', es: 'Clips para billetes de cuero' },
'Leather Bottle Openers': { fr: 'Décapsuleurs en cuir', de: 'Leder-Flaschenöffner', it: 'Apribottiglie in pelle', ja: 'レザー栓抜き', ko: '가죽 병따개', ar: 'فتاحات زجاجات جلدية', zh: '皮革开瓶器', es: 'Abridores de botella de cuero' },
'Wooden Medals': { fr: 'Médailles en bois', de: 'Holzmedaillen', it: 'Medaglie in legno', ja: '木製メダル', ko: '우드 메달', ar: 'ميداليات خشبية', zh: '木质奖牌', es: 'Medallas de madera' },
'Wooden Keychains': { fr: 'Porte-clés en bois', de: 'Holzschlüsselanhänger', it: 'Portachiavi in legno', ja: '木製キーホルダー', ko: '우드 키링', ar: 'ميداليات مفاتيح خشبية', zh: '木质钥匙扣', es: 'Llaveros de madera' },
'Wood Name Tags': { fr: 'Badges nominatifs en bois', de: 'Holz-Namensschilder', it: 'Targhette nome in legno', ja: '木製ネームタグ', ko: '우드 네임 태그', ar: 'بطاقات أسماء خشبية', zh: '木质姓名牌', es: 'Etiquetas de nombre de madera' },
'Wooden Trophies': { fr: 'Trophées en bois', de: 'Holztrophäen', it: 'Trofei in legno', ja: '木製トロフィー', ko: '우드 트로피', ar: 'جوائز خشبية', zh: '木质奖杯', es: 'Trofeos de madera' },
'Wood Coasters': { fr: 'Dessous de verre en bois', de: 'Holzuntersetzer', it: 'Sottobicchieri in legno', ja: '木製コースター', ko: '우드 코스터', ar: 'قواعد أكواب خشبية', zh: '木质杯垫', es: 'Posavasos de madera' },
'Acrylic Products': { fr: 'Produits en acrylique', de: 'Acryl-Produkte', it: 'Prodotti in acrilico', ja: 'アクリル製品', ko: '아크릴 제품', ar: 'منتجات أكريليك', zh: '亚克力产品', es: 'Productos de acrílico' },
'Poker Chips': { fr: 'Jetons de poker', de: 'Pokerchips', it: 'Fiches da poker', ja: 'ポーカーチップ', ko: '포커 칩', ar: 'رقائق بوكر', zh: '筹码', es: 'Fichas de póker' },
'Neoprene Koozies': { fr: 'Gourdes en néoprène', de: 'Neopren-Koozies', it: 'Portabevande in neoprene', ja: 'ネオプレンクージー', ko: '네오프렌 쿠지', ar: 'حاملات نيوبرين', zh: '氯丁橡胶杯套', es: 'Fundas de neopreno' },
'Custom Shoelaces': { fr: 'Lacets personnalisés', de: 'Individuelle Schnürsenkel', it: 'Lacci personalizzati', ja: 'カスタムシューレース', ko: '맞춤형 신발끈', ar: 'أربطة حذاء مخصصة', zh: '定制鞋带', es: 'Cordones personalizados' },
'Christmas Gifts': { fr: 'Cadeaux de Noël', de: 'Weihnachtsgeschenke', it: 'Regali di Natale', ja: 'クリスマスギフト', ko: '크리스마스 선물', ar: 'هدايا عيد الميلاد', zh: '圣诞礼品', es: 'Regalos navideños' },
'Champion Rings': { fr: 'Bagues de champion', de: 'Champion-Ringe', it: 'Anelli da campione', ja: 'チャンピオンリング', ko: '챔피언 반지', ar: 'خواتم بطل', zh: '冠军戒指', es: 'Anillos de campeón' },
'Baseball Caps': { fr: 'Casquettes de baseball', de: 'Baseball-Caps', it: 'Cappellini da baseball', ja: '野球帽', ko: '야구 모자', ar: 'قبعات البيسبول', zh: '棒球帽', es: 'Gorras de béisbol' },
'Snapback Caps': { fr: 'Casquettes snapback', de: 'Snapback-Caps', it: 'Cappellini snapback', ja: 'スナップバックキャップ', ko: '스냅백', ar: 'قبعات سنابباك', zh: '平檐帽', es: 'Gorras snapback' },
'Trucker Hats': { fr: 'Casquettes trucker', de: 'Trucker-Caps', it: 'Cappellini trucker', ja: 'トラッカーハット', ko: '트러커 모자', ar: 'قبعات سائق الشاحنات', zh: '卡车司机帽', es: 'Gorras trucker' },
'Bucket Hats': { fr: 'Bob', de: 'Fischerhüte', it: 'Cappelli da pescatore', ja: 'バケットハット', ko: '버킷햇', ar: 'قبعات دلو', zh: '渔夫帽', es: 'Gorros de pescador' },
'Beanie Hats': { fr: 'Bonnets', de: 'Beanie-Mützen', it: 'Berretti', ja: 'ビーニー', ko: '비니', ar: 'قبعات بيني', zh: '针织帽', es: 'Gorros de lana' },
'Eco-Friendly Hats': { fr: 'Casquettes écologiques', de: 'Umweltfreundliche Caps', it: 'Cappelli ecologici', ja: 'エコハット', ko: '친환경 모자', ar: 'قبعات صديقة للبيئة', zh: '环保帽子', es: 'Gorras ecológicas' },
'Custom Premium Medals': { fr: 'Médailles premium personnalisées', de: 'Premium-Medaillen', it: 'Medaglie premium personalizzate', ja: 'プレミアムカスタムメダル', ko: '프리미엄 맞춤 메달', ar: 'ميداليات مخصصة ممتازة', zh: '高端定制奖牌', es: 'Medallas premium personalizadas' },
'Custom Honor Medals': { fr: 'Médailles d\'honneur personnalisées', de: 'Ehrenmedaillen', it: 'Medaglie d\'onore personalizzate', ja: '名誉メダル', ko: '명예 메달', ar: 'ميداليات شرف مخصصة', zh: '荣誉奖牌', es: 'Medallas de honor personalizadas' },
'Custom Creative Medals': { fr: 'Médailles créatives personnalisées', de: 'Kreative Medaillen', it: 'Medaglie creative personalizzate', ja: 'クリエイティブメダル', ko: '크리에이티브 메달', ar: 'ميداليات إبداعية مخصصة', zh: '创意奖牌', es: 'Medallas creativas personalizadas' },
'Custom Award Medals': { fr: 'Médailles de récompense personnalisées', de: 'Auszeichnungsmedaillen', it: 'Medaglie premio personalizzate', ja: 'アワードメダル', ko: '어워드 메달', ar: 'ميداليات جوائز مخصصة', zh: '颁奖奖牌', es: 'Medallas de premio personalizadas' },
'Custom Fiesta Medals': { fr: 'Médailles de fiesta personnalisées', de: 'Fiesta-Medaillen', it: 'Medaglie da festa personalizzate', ja: 'フィエスタメダル', ko: '피에스타 메달', ar: 'ميداليات احتفالية مخصصة', zh: '节庆奖牌', es: 'Medallas de fiesta personalizadas' },
'Custom Eco-friendly Medals': { fr: 'Médailles écologiques personnalisées', de: 'Umweltfreundliche Medaillen', it: 'Medaglie ecologiche personalizzate', ja: 'エコメダル', ko: '친환경 메달', ar: 'ميداليات صديقة للبيئة مخصصة', zh: '环保奖牌', es: 'Medallas ecológicas personalizadas' },
'Custom Military Medals': { fr: 'Médailles militaires personnalisées', de: 'Militärmedaillen', it: 'Medaglie militari personalizzate', ja: 'ミリタリーメダル', ko: '군용 메달', ar: 'ميداليات عسكرية مخصصة', zh: '定制军功奖牌', es: 'Medallas militares personalizadas' },
  };

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
  var MENU = {
    products: [
      {
        h: ['Metal Products', '金属制品', 'Productos de metal'],
        items: [
          ['Enamel Pins & Lapel Pins', 'product.html?slug=metal-enamel-pins'],
          ['Custom Medals', 'product.html?slug=metal-medals'],
          ['Sports Medals', 'product.html?slug=metal-sports-medals'],
          ['Challenge Coins', 'product.html?slug=metal-challenge-coins'],
          ['Metal Badges & Emblems', 'product.html?slug=metal-badges'],
          ['Metal Keychains', 'product.html?slug=metal-keychains'],
          ['Cufflinks & Tie Bars', 'product.html?slug=metal-cufflinks'],
          ['Dog Tags', 'product.html?slug=metal-dog-tags'],
          ['Bottle Openers', 'product.html?slug=metal-bottle-openers'],
          ['Belt Buckles', 'product.html?slug=metal-belt-buckles'],
          ['Fridge Magnets', 'product.html?slug=metal-fridge-magnets'],
          ['Military Medals', 'product.html?slug=metal-military-medals'],
          ['Golf Accessories', 'product.html?slug=metal-golf-accessories'],
          ['Metal Trophies', 'product.html?slug=metal-trophies'],
          ['Luggage Tags', 'product.html?slug=metal-luggage-tags']
        ]
      },
      {
        h: ['Patches & Labels', '织唛与徽章', 'Parches y etiquetas'],
        items: [
          ['Embroidered Patches', 'product.html?slug=patches-embroidered-patches'],
          ['Woven Patches', 'product.html?slug=patches-woven-patches'],
          ['Chenille Patches', 'product.html?slug=patches-chenille-patches'],
          ['PVC & Silicone Patches', 'product.html?slug=patches-pvc-patches'],
          ['Sequin Patches', 'product.html?slug=patches-sequin-patches'],
          ['Bullion Patches', 'product.html?slug=patches-bullion-patches'],
          ['Embroidery Keychains', 'product.html?slug=patches-embroidery-keychains'],
          ['Epaulettes', 'product.html?slug=patches-epaulettes'],
          ['Woven Labels', 'product.html?slug=patches-woven-labels'],
          ['Leather Patches', 'product.html?slug=patches-leather-patches']
        ]
      },
      {
        h: ['Lanyards & Fabric', '挂绳与织带', 'Cordones y textiles'],
        items: [
          ['Polyester Lanyards', 'product.html?slug=lanyards-polyester-lanyards'],
          ['Nylon Lanyards', 'product.html?slug=lanyards-nylon-lanyards'],
          ['Tubular Lanyards', 'product.html?slug=lanyards-tubular-lanyards'],
          ['Woven Lanyards', 'product.html?slug=lanyards-woven-lanyards'],
          ['Reflective Lanyards', 'product.html?slug=lanyards-reflective-lanyards'],
          ['Heat Transfer Lanyards', 'product.html?slug=lanyards-heat-transfer-lanyards'],
          ['Eco-Friendly Lanyards', 'product.html?slug=lanyards-eco-friendly-lanyards'],
          ['Badge Reels', 'product.html?slug=lanyards-badge-reels'],
          ['Cord Lanyards', 'product.html?slug=lanyards-cord-lanyards'],
          ['Dog Leashes & Collars', 'product.html?slug=lanyards-dog-leashes-collars']
        ]
      },
      {
        h: ['Soft PVC & Silicone', '软胶与硅胶', 'PVC suave y silicona'],
        items: [
          ['Soft PVC Medals', 'product.html?slug=pvc-pvc-medals'],
          ['Soft PVC Keychains', 'product.html?slug=pvc-pvc-keychains'],
          ['Soft PVC Wristbands', 'product.html?slug=pvc-pvc-wristbands'],
          ['Silicone Wristbands', 'product.html?slug=pvc-silicone-wristbands'],
          ['Silicone Keychains', 'product.html?slug=pvc-silicone-keychains'],
          ['Silicone Coasters', 'product.html?slug=pvc-silicone-coasters'],
          ['Silicone Straps', 'product.html?slug=pvc-silicone-straps'],
          ['PVC Fridge Magnets', 'product.html?slug=pvc-pvc-fridge-magnets']
        ]
      },
      {
        h: ['Leather & Wood', '皮革与木质', 'Cuero y madera'],
        items: [
          ['Leather Bag Tags', 'product.html?slug=leather-bag-tags'],
          ['Leather Luggage Tags', 'product.html?slug=leather-luggage-tags'],
          ['Leather Keychains', 'product.html?slug=leather-keychains'],
          ['Leather Key Fobs', 'product.html?slug=leather-key-fobs'],
          ['Leather Coasters', 'product.html?slug=leather-coasters'],
          ['Leather Bookmarks', 'product.html?slug=leather-bookmarks'],
          ['Leather Money Clips', 'product.html?slug=leather-money-clips'],
          ['Leather Bottle Openers', 'product.html?slug=leather-bottle-openers'],
          ['Wooden Medals', 'product.html?slug=leather-wooden-medals'],
          ['Wooden Keychains', 'product.html?slug=leather-wooden-keychains'],
          ['Wood Name Tags', 'product.html?slug=leather-wood-name-tags'],
          ['Wooden Trophies', 'product.html?slug=leather-wooden-trophies'],
          ['Wood Coasters', 'product.html?slug=leather-wood-coasters']
        ]
      },
      {
        h: ['Promotional & Hats', '促销品与帽子', 'Promocionales y gorras'],
        items: [
          ['Acrylic Products', 'product.html?slug=promotional-acrylic-products'],
          ['Poker Chips', 'product.html?slug=promotional-poker-chips'],
          ['Neoprene Koozies', 'product.html?slug=promotional-neoprene-koozies'],
          ['Custom Shoelaces', 'product.html?slug=promotional-custom-shoelaces'],
          ['Christmas Gifts', 'product.html?slug=promotional-christmas-gifts'],
          ['Champion Rings', 'product.html?slug=promotional-champion-rings'],
          ['Baseball Caps', 'product.html?slug=promotional-baseball-caps'],
          ['Snapback Caps', 'product.html?slug=promotional-snapback-caps'],
          ['Trucker Hats', 'product.html?slug=promotional-trucker-hats'],
          ['Bucket Hats', 'product.html?slug=promotional-bucket-hats'],
          ['Beanie Hats', 'product.html?slug=promotional-beanie-hats'],
          ['Eco-Friendly Hats', 'product.html?slug=promotional-eco-friendly-hats']
        ]
      }
    ],
    medal: {
      h: ['Medal Categories', '奖牌分类', 'Categorías de medallas'],
      items: [
        ['Custom Sports Medals', 'product.html?slug=metal-sports-medals'],
        ['Custom Premium Medals', 'product.html?slug=metal-premium-medals'],
        ['Custom Honor Medals', 'product.html?slug=metal-honor-medals'],
        ['Custom Creative Medals', 'product.html?slug=metal-creative-medals'],
        ['Custom Award Medals', 'product.html?slug=metal-award-medals'],
        ['Custom Fiesta Medals', 'product.html?slug=metal-fiesta-medals'],
        ['Custom Eco-friendly Medals', 'product.html?slug=metal-eco-friendly-medals'],
        ['Custom Military Medals', 'product.html?slug=metal-military-medals']
      ]
    },
    company: {
      h: ['About Triumph', '关于我们', 'Sobre nosotros'],
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
    } else if (key === 'medal') {
      footText = T('Marathon, school, military and corporate award medals.',
        '马拉松、学校、军队与企业颁奖奖牌。',
        'Medallas para maratones, escuelas, fuerzas armadas y empresas.');
      footHref = 'product.html?slug=metal-medals';
      footLabel = T('Explore Medals', '查看奖牌', 'Ver medallas');
    } else if (key === 'company') {
      footText = T('Established in 1984, serving customers on five continents.',
        '创立于 1984 年，服务五大洲客户。',
        'Fundada en 1984, atendemos clientes en cinco continentes.');
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
        var title = T(col.h[0], col.h[1], col.h[2]);
        var list = '';
        col.items.forEach(function (it) {
          list += '<li><a href="' + it[1] + '">' + T(it[0], it[0], it[0]) + '</a></li>';
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
    var title = T(col.h[0], col.h[1], col.h[2]);
    var list = '';
    col.items.forEach(function (it) {
      list += '<li><a href="' + it[1] + '">' + T(it[0], it[0], it[0]) + '</a></li>';
    });
    return '<div class="mega mega--simple">' +
      '<div class="mega__simple-head">' + title + '</div>' +
      '<ul class="mega__simple-list">' + list + '</ul>' + foot + '</div>';
  }

  /* label order: en, zh, es, fr, de, it, ja, ko, ar */
  var NAV = [
    { href: 'index.html', label: ['Home', '首页', 'Inicio', 'Accueil', 'Startseite', 'Home', 'ホーム', '홈', 'الرئيسية'] },
    { href: 'products.html', label: ['Products', '产品中心', 'Productos', 'Produits', 'Produkte', 'Prodotti', '製品', '제품', 'المنتجات'], key: 'products' },
    { href: 'product.html?slug=metal-medals', label: ['Custom Medal', '定制奖牌', 'Medallas', 'Médailles sur mesure', 'Individuelle Medaillen', 'Medaglie personalizzate', 'カスタムメダル', '커스텀 메달', 'ميداليات مخصصة'], key: 'medal' },
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
              '<button class="drawer__cat" type="button">' + T(col.h[0], col.h[1], col.h[2]) + CHEV + '</button>' +
              '<div class="drawer__cat-items">';
            col.items.forEach(function (it) { html += '<a href="' + it[1] + '">' + T(it[0], it[0], it[0]) + '</a>'; });
            html += '</div></div>';
          });
        } else {
          html += '<div class="drawer__cat-items drawer__cat-items--flat">';
          pool[0].items.forEach(function (it) { html += '<a href="' + it[1] + '">' + T(it[0], it[0], it[0]) + '</a>'; });
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
      T('Low MOQ from 50 pcs', '50 件起订', 'MOQ desde 50 uds') + '</span></li>' +
      '<li><span><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 6L9 17l-5-5"/></svg>' +
      T('40+ years manufacturing', '40 余年制造经验', 'Más de 40 años fabricando') + '</span></li>' +
      '</ul><div class="topbar__right">' +
      '<a href="mailto:sales@triumphgifts.com">sales@triumphgifts.com</a>' +
      '<span style="opacity:.4">|</span><a href="tel:+8613650325891">+86-136 5032 5891</a>' +
      '</div></div></div>';

    var head =
      '<header class="header"><div class="container header__inner">' +
      '<a class="logo logo--img" href="index.html"><img src="assets/img/logo/logo.png" alt="Triumph Gifts" width="150" height="44"></a>' +
      '<nav class="nav">' + navHtml() + '</nav>' +
      '<div class="nav__cta">' + langHtml() +
      '<a class="btn btn--primary btn--sm" href="contact.html">' +
      T('Get a Quote', '获取报价', 'Pedir presupuesto') + '</a>' +
      '<button class="burger" type="button" data-drawer-open aria-label="Menu"><span></span><span></span><span></span></button>' +
      '</div></div></header>';

    var drawer =
      '<div class="drawer" data-drawer><div class="drawer__head">' +
      '<a class="logo logo--img" href="index.html"><img src="assets/img/logo/logo.png" alt="Triumph Gifts" width="140" height="41"></a>' +
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
      '<div class="footer__about"><a class="logo logo--img" href="index.html"><img src="assets/img/logo/logo-footer.png" alt="Triumph Gifts" width="150" height="39"></a>' +
      '<p>' + T('A custom promotional products manufacturer established in 1984, supplying metal gifts, patches, lanyards and silicone items to brands in over 60 countries.',
        '创立于 1984 年的定制促销礼品制造商，向 60 多个国家的品牌供应金属礼品、织唛、挂绳与硅胶制品。',
        'Fabricante de artículos promocionales desde 1984. Suministramos regalos metálicos, parches, cordones y silicona a marcas en más de 60 países.') + '</p>' +
      '<div class="socials">' +
      '<a href="#" aria-label="Facebook"><svg viewBox="0 0 24 24"><path d="M13.5 21v-8h2.7l.4-3h-3.1V8.2c0-.9.3-1.5 1.6-1.5H16.7V3.9C16.4 3.9 15.4 3.8 14.3 3.8c-2.3 0-3.8 1.4-3.8 4v2.2H7.8v3h2.7v8z"/></svg></a>' +
      '<a href="#" aria-label="Instagram"><svg viewBox="0 0 24 24"><path d="M12 7.4A4.6 4.6 0 1 0 16.6 12A4.6 4.6 0 0 0 12 7.4m0 7.6A3 3 0 1 1 15 12A3 3 0 0 1 12 15m5.9-7.8a1.1 1.1 0 1 1-1.1-1.1A1.1 1.1 0 0 1 17.9 7.2M12 4.6c2 0 2.3 0 3.1.1a4.2 4.2 0 0 1 1.5.3a2.6 2.6 0 0 1 1.5 1.5a4.2 4.2 0 0 1 .3 1.5c0 .8.1 1.1.1 3.1s0 2.3-.1 3.1a4.2 4.2 0 0 1-.3 1.5a2.6 2.6 0 0 1-1.5 1.5a4.2 4.2 0 0 1-1.5.3c-.8 0-1.1.1-3.1.1s-2.3 0-3.1-.1a4.2 4.2 0 0 1-1.5-.3a2.6 2.6 0 0 1-1.5-1.5a4.2 4.2 0 0 1-.3-1.5c0-.8-.1-1.1-.1-3.1s0-2.3.1-3.1a4.2 4.2 0 0 1 .3-1.5a2.6 2.6 0 0 1 1.5-1.5a4.2 4.2 0 0 1 1.5-.3c.8 0 1.1-.1 3.1-.1M12 3c-2 0-2.4 0-3.2.1a5.9 5.9 0 0 0-2 .4A4.2 4.2 0 0 0 3.5 6.8a5.9 5.9 0 0 0-.4 2C3 9.6 3 10 3 12s0 2.4.1 3.2a5.9 5.9 0 0 0 .4 2a4.2 4.2 0 0 0 3.3 3.3a5.9 5.9 0 0 0 2 .4c.8.1 1.2.1 3.2.1s2.4 0 3.2-.1a5.9 5.9 0 0 0 2-.4a4.2 4.2 0 0 0 3.3-3.3a5.9 5.9 0 0 0 .4-2c.1-.8.1-1.2.1-3.2s0-2.4-.1-3.2a5.9 5.9 0 0 0-.4-2A4.2 4.2 0 0 0 17.2 3.5a5.9 5.9 0 0 0-2-.4C14.4 3 14 3 12 3"/></svg></a>' +
      '<a href="#" aria-label="LinkedIn"><svg viewBox="0 0 24 24"><path d="M6.9 21H3.6V9.4h3.3zM5.25 7.9A1.9 1.9 0 1 1 7.15 6A1.9 1.9 0 0 1 5.25 7.9M21 21h-3.3v-5.6c0-1.4-.5-2.3-1.7-2.3a1.8 1.8 0 0 0-1.7 1.2a2.4 2.4 0 0 0-.1.8V21H11V9.4h3.2v1.6a3.4 3.4 0 0 1 3-1.7c2.2 0 3.8 1.4 3.8 4.4z"/></svg></a>' +
      '<a href="#" aria-label="YouTube"><svg viewBox="0 0 24 24"><path d="M21.6 7.2a2.5 2.5 0 0 0-1.8-1.8C18.2 5 12 5 12 5s-6.2 0-7.8.4a2.5 2.5 0 0 0-1.8 1.8A26 26 0 0 0 2 12a26 26 0 0 0 .4 4.8a2.5 2.5 0 0 0 1.8 1.8C5.8 19 12 19 12 19s6.2 0 7.8-.4a2.5 2.5 0 0 0 1.8-1.8A26 26 0 0 0 22 12a26 26 0 0 0-.4-4.8M10 15.2V8.8l5.5 3.2z"/></svg></a>' +
      '</div></div>' +

      '<div><h5>' + T('Product Catalogue', '产品目录', 'Catálogo') + '</h5><ul>' +
      '<li><a href="metal-products.html">' + T('Custom Metal Products', '定制金属制品', 'Productos de metal') + '</a></li>' +
      '<li><a href="patches-labels.html">' + T('Custom Patches & Labels', '定制织唛与标签', 'Parches y etiquetas') + '</a></li>' +
      '<li><a href="lanyards.html">' + T('Custom Lanyards', '定制挂绳', 'Cordones') + '</a></li>' +
      '<li><a href="pvc-silicone.html">' + T('Soft PVC & Silicone', '软胶与硅胶', 'PVC y silicona') + '</a></li>' +
      '<li><a href="leather-wood.html">' + T('Leather & Wooden Items', '皮革与木质', 'Cuero y madera') + '</a></li>' +
      '<li><a href="promotional-hats.html">' + T('Promotional & Hats', '促销品与帽子', 'Promocionales y gorras') + '</a></li>' +
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
      '<li class="info-item"><span class="ic">' + SVG_PIN + '</span><div><b>Triumph Gifts Co., Ltd.</b><span>' +
      T('Room 505, TCL Plaza, 18 Haizhou Road, Haizhu District, Guangzhou 510335, China', '中国广州市海珠区海洲路18号TCL广场505室，邮编510335', 'Sala 505, TCL Plaza, 18 Haizhou Road, Haizhu, Guangzhou 510335, China') + '</span></div></li>' +
      '<li class="info-item"><span class="ic">' + SVG_MAIL + '</span><div><b>' + T('Email', '邮箱', 'Correo') + '</b><a href="mailto:sales@triumphgifts.com">sales@triumphgifts.com</a></div></li>' +
      '<li class="info-item"><span class="ic">' + SVG_TEL + '</span><div><b>' + T('Tel / WhatsApp', '电话', 'Tel / WhatsApp') + '</b><a href="tel:+8613650325891">+86-136 5032 5891</a></div></li>' +
      '<li class="info-item"><span class="ic">' + SVG_TEL + '</span><div><b>' + T('Fax', '传真', 'Fax') + '</b><a href="tel:+862080928520">+86-20-8092 8520</a></div></li>' +
      '<li class="info-item"><span class="ic">' + SVG_CLOCK + '</span><div><b>' + T('Working hours', '工作时间', 'Horario') + '</b><span>' +
      T('Mon - Sat, 9:00 - 18:00 (GMT+8)', '周一至周六 9:00 - 18:00', 'Lun - Sáb, 9:00 - 18:00') + '</span></div></li>' +
      '</ul></div>' +
      '</div>' +

      '<div class="footer__bottom"><span>&copy; 1984-2026 Triumph Gifts. ' +
      T('All rights reserved.', '保留所有权利。', 'Todos los derechos reservados.') + '</span>' +
      '<span>' + T('Demo replica - no external services connected.', '演示复刻站 - 未连接任何外部服务。', 'Réplica de demostración - sin servicios externos.') + '</span>' +
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

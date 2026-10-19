/* Company / contact details used by the footer and contact page.
   Managed by admin/ - edits made in the content editor land here. */
window.TGSite = (function () {
  function t9(en, zh, es, fr, de, it, ja, ko, ar) {
    return { en: en, zh: zh, es: es, fr: fr, de: de, it: it, ja: ja, ko: ko, ar: ar };
  }

  return {
    name: 'Company Name Ltd.',
    year: '2026',
    email: 'info@example.com',
    tel: '+00 0000 0000',
    fax: '+00 0000 0000',
    address: t9('Address line, City, Region, Country', '地址行，城市，省份，国家', 'Linea de direccion, Ciudad, Region, Pais', 'Ligne d\'adresse, Ville, Region, Pays', 'Adresszeile, Stadt, Region, Land', 'Riga indirizzo, Citta, Regione, Paese', '住所行、市区町村、都道府県、国', '주소 행, 도시, 지역, 국가', 'سطر العنوان، المدينة، المنطقة، الدولة'),
    hours: t9('Mon - Sat, 9:00 - 18:00 (GMT+8)', '周一至周六 9:00 - 18:00（GMT+8）', 'Lun - Sab, 9:00 - 18:00 (GMT+8)', 'Lun - Sam, 9:00 - 18:00 (GMT+8)', 'Mo - Sa, 9:00 - 18:00 (GMT+8)', 'Lun - Sab, 9:00 - 18:00 (GMT+8)', '月曜〜土曜 9:00 - 18:00 (GMT+8)', '월 - 토, 9:00 - 18:00 (GMT+8)', 'الاثنين - السبت، 9:00 - 18:00 (GMT+8)'),
    legal: t9('All rights reserved.', '保留所有权利。', 'Todos los derechos reservados.', 'Tous droits reserves.', 'Alle Rechte vorbehalten.', 'Tutti i diritti riservati.', 'すべての権利を保有。', '모든 권리 보유.', 'جميع الحقوق محفوظة.'),
    note: t9('Demo replica - no external services connected.', '演示复刻站 - 未连接任何外部服务。', 'Replica de demostracion - sin servicios externos conectados.', 'Replique de demonstration - aucun service externe connecte.', 'Demo-Replik - keine externen Dienste verbunden.', 'Replica demo - nessun servizio esterno collegato.', 'デモ用レプリカ - 外部サービスには接続していません。', '데모 복제 사이트 - 외부 서비스에 연결되지 않았습니다.', 'نسخة تجريبية - لا توجد خدمات خارجية متصلة.')
  };
})();

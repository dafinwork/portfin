// Portfolio interactions: mobile burger menu, EN/ID toggle, preview reload.
var I18N_ID = {
  'skip': 'Lewati ke karya',
  'nav.works': 'Karya',
  'nav.systems': 'Sistem',
  'nav.exp': 'Pengalaman',
  'nav.about': 'Tentang',
  'nav.contact': 'Kontak',
  'nav.cta': 'Hubungi saya <span aria-hidden="true">↗</span>',
  'hero.h1': 'Halo<br>semua<span class="dot">!</span>',
  'hero.lede': 'Saya <strong>Muhamad Dafin Al Dzaky</strong>, full-stack web developer dan software engineer berbasis di Bekasi, Indonesia. Berfokus pada pembangunan aplikasi web tangguh dengan Laravel, PHP, dan JavaScript modern untuk membangun sistem manajemen terintegrasi, otomasi API, serta platform berbasis data. Saya juga menangani perakitan hardware PC/laptop, troubleshooting, dan instalasi sistem.',
  'hero.see': 'Lihat karya <span aria-hidden="true">↓</span>',
  'hero.email': 'Email saya',
  'stat.sites': 'situs produksi rilis',
  'stat.roles': 'peran dev, freelance remote',
  'stat.certs': 'sertifikasi · IBM &amp; Cisco',
  'side.curLabel': 'Saat ini',
  'side.curTitle': 'Full-Stack Web Developer @ Z3 Techno Solution',
  'side.curDesc': 'Platform tiket engineering gedung, POS &amp; inventaris multi-cabang, dan PMS hotel dengan OCR (Laravel, SQLite, MySQL, Python).',
  'side.prevLabel': 'Sebelumnya',
  'side.prevTitle': 'AI &amp; Automation Developer @ KLIK Rekrut',
  'side.prevDesc': 'Sistem lead-gen LinkedIn (Google X-Ray), filter intent Gemini + Groq, dan bot dispatch WhatsApp Baileys.',
  'side.prevBtn': 'Riwayat kerja <span aria-hidden="true">↓</span>',
  'side.mini': 'Full-stack + hardware. Siap remote.',
  'works.no': '01 / Galeri',
  'works.h2': 'Karya Pilihan<span class="dot">.</span>',
  'works.sub': 'Pilihan website produksi dan build front-end. Klik kartu atau Buka situs untuk menjelajahi proyek.',
  'w1.desc': 'Demo front-end untuk marketplace barang bekas. Daftar produk, kategori, halaman detail. Static build yang di-deploy di GitHub Pages.',
  'openlive': 'Buka situs <span aria-hidden="true">↗</span>',
  'site.hint': '↕ Arahkan kursor / sentuh untuk slide halaman preview',
  'reload': 'Muat ulang',
  'w2.desc': 'Platform perusahaan yang saya kerjakan sebagai web developer: sistem promo kode voucher dan wallet dengan penarikan, dirangkaikan dengan Google Apps Script.',
  'w3.desc': 'Situs katalog dan custom-order live untuk brand apparel Kaos Dilio, dibangun dengan React + Supabase. Jelajahi storefront aslinya di dalam frame ini.',
  'w4.desc': 'Situs company profile dan publikasi riset Indonesia Research Institute Japan. Dibangun dan dikustomisasi dengan WordPress, PHP, HTML, CSS, dan JavaScript.',
  'embednote.irij': 'Preview gambar dipakai karena situs live dapat memblokir embed iframe.',
  'embednote.klik': 'Jika frame ini kosong, berarti situsnya memblokir embed: klik <a href="https://klikrekrut.com/" target="_blank" rel="noopener">Buka situs ↗</a>.',
  'embednote.dilio': 'Jika frame ini kosong, berarti situsnya memblokir embed: klik <a href="https://kaosdilio.com/" target="_blank" rel="noopener">Buka situs ↗</a>.',
  'sys.no': '02 / Otomasi',
  'sys.h2': 'Di Balik Layar<span class="dot">.</span>',
  'sys.sub': 'Project ini berjalan headless. Bagian pentingnya ada di pipeline: dari mana lead masuk, bagaimana lead difilter, dan kapan bot mengirimkannya ke WhatsApp.',
  's1.d1': 'Scraping dual-engine memakai Playwright Chromium persisten untuk feed real-time 24 jam terakhir dan Google X-Ray untuk deep search tanpa login.',
  's1.d2': 'Decoding Snowflake activity ID LinkedIn untuk filter umur presisi milidetik, deduplikasi SQLite, dan menyingkirkan postingan non-personal atau asing.',
  's1.d3': 'Analisis semantik Gemini dan Groq dengan key pooling otomatis untuk mendeteksi niat beli B2B asli (mencari vendor rekrutmen vs memasang loker).',
  's1.d4': 'Dibangun di atas socket Baileys. Mengirim lead terkonsolidasi lewat antrean 2 jam bertahap dan menangani perintah query interaktif real-time di grup sales.',
  's1.note': 'Headless by design. Worker latar 24/7. Walkthrough arsitektur dan source code tersedia jika diminta.',
  'exp.no': '03 / Riwayat Kerja',
  'exp.h2': 'Pengalaman<span class="dot">.</span>',
  'jz3.role': 'Full-Stack Web Developer / Software Engineer',
  'jz3.date': '2025 – Sekarang',
  'jz3.li1': '<strong>Building Engineering &amp; Inspection Ticketing System:</strong> Mengembangkan platform operasional dan tiket engineering gedung (Laravel 11, SQLite) dengan denah interaktif 2D berbasis koordinat persentase (x%, y%), pelacakan siklus aset, dan keamanan RBAC 6 tingkatan.',
  'jz3.li2': '<strong>Multi-Outlet Inventory &amp; POS Platform:</strong> Merancang sistem inventaris dan kasir multi-cabang (Laravel 12, MySQL) dengan konversi multi-satuan (Dus -&gt; Pak -&gt; Pcs), audit kartu stok real-time, pencarian barcode global, dan UI kasir responsif untuk tablet.',
  'jz3.li3': '<strong>Hotel Property Management System (PMS):</strong> Membangun sistem operasional hotel (PMS) terintegrasi Python Tesseract OCR untuk scan KTP otomatis, penanganan data tamu berulang, alur reservasi OTA, dan 41 automated test PHPUnit.',
  'jz3.li4': '<strong>Corporate Web &amp; Automation Tooling:</strong> Mengembangkan web profil dan katalog perusahaan serta skrip otomasi Python untuk deployment FTP otomatis, backup database, dan verifikasi data.',
  'j1.li1': 'Otomasi lead generation LinkedIn dengan query Google X-Ray untuk HR / Talent Acquisition / Founders.',
  'j1.li2': 'Filtering engine dengan LLM Google Gemini + Groq: analisis intent semantik, membuang company pages.',
  'j1.li3': 'Bot dispatch WhatsApp (Baileys) dengan cron scheduling dan perintah query ke grup sales.',
  'j1.li4': 'Memperbaiki drift timestamp dengan men-decode snowflake activity ID LinkedIn untuk umur postingan yang tepat.',
  'j2.li1': 'Sistem promo kode voucher yang terintegrasi ke platform.',
  'j2.li2': 'Sistem wallet dengan penarikan dan cash-out saldo di platform.',
  'j2.li3': 'Dibangun di atas Google Apps Script yang menghubungkan logika web ke data backend.',
  'j3.li1': 'Mendesain ulang situs profile WordPress perusahaan: struktur, konsistensi visual, organisasi konten.',
  'j3.li2': 'Ekstensi PHP / HTML / CSS / JS kustom di luar perilaku default WP.',
  'j3.li3': 'Selesai sesuai jadwal dengan tool project management, fully remote.',
  'j4.li1': 'Template Blade modular, layout responsif mobile-friendly, animasi JS.',
  'j4.li2': 'Kolaborasi remote berbasis Git.',
  'barista.p': 'Menyiapkan dan menyajikan pesanan kopi dan minuman di kafe yang sibuk; menjaga standar layanan.',
  'exp.cta': 'Mari kerja sama <span aria-hidden="true">↓</span>',
  'about.no': '04 / Profil',
  'about.h2': 'Tentang<span class="dot">.</span>',
  'about.bio': 'Lulusan S1 Informatika (konsentrasi Software Engineering), Universitas Bhayangkara Jakarta Raya, 2022-2026. Latar SMK RPL (SMKN 5 Bekasi, 2019-2022). Saya membangun website full-stack end to end, dan juga menangani hardware: assembly, config, troubleshooting, instal.',
  'about.tech': 'Tech Stack',
  'about.hw': 'Hardware &amp; dukungan',
  'about.certs': 'Sertifikat',
  'contact.no': '05 / Kontak',
  'contact.h2': 'Ada yang mau disampaikan?',
  'contact.desc': 'Terbuka untuk full-time, freelance, dan project. Respon tercepat: email atau WhatsApp. Berbasis di Bekasi Utara. Remote OK.',
  'contact.availLabel': 'SEDANG MENERIMA',
  'contact.avail2': 'Full-time · Freelance · Proyek',
  'contact.availNote': 'Pembuatan website, WordPress, dan sistem otomasi.',
  'foot.top': 'Kembali ke atas ↑'
};

var currentLang = 'en';
try { currentLang = localStorage.getItem('dafin-lang') || 'en'; } catch (e) {}
if (currentLang !== 'id') currentLang = 'en';

function setLang(lang) {
  currentLang = (lang === 'id') ? 'id' : 'en';
  document.documentElement.lang = (currentLang === 'id') ? 'id' : 'en';
  document.querySelectorAll('[data-i18n]').forEach(function (el) {
    var key = el.getAttribute('data-i18n');
    if (!el._en) el._en = el.innerHTML;
    if (currentLang === 'id' && I18N_ID[key]) {
      el.innerHTML = I18N_ID[key];
    } else {
      el.innerHTML = el._en;
    }
  });
  document.querySelectorAll('.lang [data-lang]').forEach(function (btn) {
    var on = btn.getAttribute('data-lang') === currentLang;
    btn.classList.toggle('on', on);
    btn.setAttribute('aria-pressed', on ? 'true' : 'false');
  });
  try { localStorage.setItem('dafin-lang', currentLang); } catch (e) {}
  syncBurgerLabel(document.body.classList.contains('menu-open'));
}

document.querySelectorAll('.lang [data-lang]').forEach(function (btn) {
  btn.addEventListener('click', function () { setLang(btn.getAttribute('data-lang')); });
});

// Mobile burger menu.
var burger = document.querySelector('.burger');
var nav = document.getElementById('primary-nav');
function syncBurgerLabel(open) {
  if (!burger) return;
  var id = document.documentElement.lang === 'id';
  burger.setAttribute('aria-label', id ? (open ? 'Tutup menu' : 'Buka menu') : (open ? 'Close menu' : 'Open menu'));
}
function setMenu(open) {
  document.body.classList.toggle('menu-open', open);
  if (!burger) return;
  burger.setAttribute('aria-expanded', open ? 'true' : 'false');
  burger.textContent = open ? '✕' : '☰';
  syncBurgerLabel(open);
}
if (burger && nav) {
  burger.addEventListener('click', function () {
    setMenu(!document.body.classList.contains('menu-open'));
  });
  nav.addEventListener('click', function (e) {
    if (e.target.closest('a')) setMenu(false);
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') setMenu(false);
  });
}

setLang(currentLang);

// Reload iframe previews
document.querySelectorAll('[data-reload]').forEach(function (btn) {
  btn.addEventListener('click', function () {
    var id = btn.getAttribute('data-reload');
    var iframe = document.getElementById(id);
    if (!iframe) return;
    var src = iframe.src;
    iframe.src = 'about:blank';
    setTimeout(function () { iframe.src = src; }, 60);
  });
});

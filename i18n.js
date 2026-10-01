// Language switch (EN / ID)
// English text lives in index.html. Indonesian translations are below —
// edit a value here to change the Indonesian text for that part of the page.
const ID_TEXT = {
  navHome: "Beranda",
  navResume: "Resume",
  navCert: "Sertifikasi",
  navProcess: "Cara Saya Testing",
  navProjects: "Proyek",
  navContact: "Kontak",
  downloadCv: "Unduh CV",
  hello: "Halo! Saya",
  about1: "Saya berfokus memastikan keandalan ekosistem aplikasi web dan mobile, UI/UX, serta integrasi API backend. Pekerjaan utama saya meliputi penyusunan test suite fungsional, penelusuran bug hingga ke akar masalahnya, dokumentasi hasil QA, dan penulisan user manual yang mudah dipahami.",
  about2: "Sebelum menjadi QA, saya bekerja sebagai Mobile &amp; Front-End Developer. Latar belakang ini membantu saya memahami sistem dari sudut pandang developer — sehingga laporan bug saya lebih tepat, dan koordinasi dengan tim BA serta developer berjalan lebih cepat.",
  seeWork: "Lihat Karya Saya",
  contactMe: "Hubungi Saya",
  stat1: "Tahun di Software QA",
  stat2: "Peran profesional",
  stat3: "IPK, Sistem Informasi",
  resumeTitle: "Keahlian, pengalaman &amp; pendidikan.",
  tabSkills: "Keahlian",
  tabExp: "Pengalaman",
  tabEdu: "Pendidikan",
  skBug: "Bug Tracking &amp; Dokumentasi",
  skTech: "Latar Belakang Teknis",
  now: "Saat ini",
  date1: "Sep 2023 – Sekarang",
  xp1a: "Merancang dan mengeksekusi skenario pengujian yang mencakup logika, alur bisnis, integrasi sistem, hingga end-to-end testing.",
  xp1b: "Melakukan manual testing pada web dan mobile dengan positive dan negative test case.",
  xp1c: "Mendokumentasikan hasil SIT dan UAT secara lengkap untuk mendukung kesiapan pengujian oleh user sebelum production.",
  xp1d: "Membuat dokumentasi user manual untuk sistem web dan mobile.",
  xp1e: "Berkolaborasi dengan tim BA dan developer untuk menyelesaikan defect dan mencegahnya terulang.",
  xp2a: "Mengembangkan portal lowongan kerja untuk web (React JS) dan mobile (Flutter).",
  xp2b: "Mengembangkan aplikasi absensi karyawan berbasis mobile untuk check-in/check-out dan pengajuan cuti.",
  xp2c: "Mengembangkan aplikasi web untuk program MBKM dari Kementerian Pendidikan.",
  xp3a: "Menginstal Office 365 dan memastikan tidak terjadi crash setelah instalasi.",
  xp3b: "Mendokumentasikan user dan perangkat yang telah di-upgrade ke Office 365.",
  xp4a: "Menyampaikan materi dasar keamanan informasi, keamanan jaringan, ethical hacking, dan keamanan aplikasi.",
  xp4b: "Mengevaluasi perkembangan belajar peserta melalui pre-test dan post-test.",
  toolDoc: "Dokumentasi",
  toolEval: "Evaluasi",
  edu1org: "Sarjana Sistem Informasi · 2021 – 2025",
  edu1desc: "IPK 3,74/4,00. Analisis &amp; perancangan sistem, manajemen basis data, pengembangan perangkat lunak, dan tata kelola TI.",
  edu2name: "SMK Wikrama",
  edu2org: "Rekayasa Perangkat Lunak · 2018 – 2021",
  edu2desc: "Logika pemrograman, analisis kebutuhan sistem, dan metodologi pengembangan aplikasi.",
  certLabel: "Lisensi &amp; Sertifikasi",
  certTitle: "Sertifikasi.",
  certWeb: "Pengembangan Web",
  certNet: "Jaringan Komputer",
  certMod: "Modul Security+ &amp; CySA+",
  certCyber: "Pelatihan Cyber Security",
  viewCert: "Lihat Sertifikat",
  processTitle: "Alur kerja QA saya, dari kebutuhan hingga rilis.",
  st1: "Analisis Kebutuhan",
  st1d: "Mempelajari BRD/user story dan alur bisnis bersama BA untuk memahami ruang lingkup, acceptance criteria, dan hal yang dapat diuji.",
  st2: "Perencanaan Test",
  st2d: "Menentukan ruang lingkup, pendekatan, jenis pengujian, environment, dan jadwal pengujian untuk rilis.",
  st3: "Desain Test Case",
  st3d: "Menyusun skenario dan test case — positive, negative, dan edge case — serta menyiapkan data uji.",
  st4: "Eksekusi Test (SIT)",
  st4d: "Menjalankan pengujian fungsional, integrasi, API, dan end-to-end pada web dan mobile di environment SIT.",
  st5: "Laporan Defect &amp; Retest",
  st5d: "Mencatat defect yang dapat direproduksi di Jira, berkoordinasi dengan developer untuk perbaikan, lalu melakukan retest dan regression test.",
  st6: "Pendampingan UAT",
  st6d: "Mendampingi user selama UAT — menjelaskan skenario, mengklarifikasi kendala, dan memantau temuan UAT hingga selesai.",
  st7: "Sign-off &amp; Rilis",
  st7d: "Menyelesaikan laporan SIT/UAT dan user manual, memberikan QA sign-off, serta memastikan rilis siap ke production.",
  tagIns: "QA · Asuransi",
  tagFe: "Pengembangan Front-End",
  tagMob: "Pengembangan Mobile",
  pj1: "Melakukan pengujian fungsional, integrasi, dan end-to-end, mengelola defect bersama tim developer, serta mendokumentasikan hasil SIT &amp; UAT untuk Kumkara, core system asuransi BRI Life yang mencakup product setup, polis dan peserta, keuangan, klaim, reasuransi, akuntansi, dan underwriting.",
  pj2: "Melakukan manual testing, defect tracking, dan pendampingan UAT untuk Orbit, pricing kit BRI Life yang membantu tim marketing mengelola prospek, membuat ilustrasi asuransi, serta memantau closing, klaim, dan renewal melalui dashboard.",
  pj3: "Menguji Orange Planner versi web, portal agen Hanwha Life Indonesia untuk penjualan produk asuransi, mencakup alur bisnis end-to-end dengan positive dan negative test case serta mendokumentasikan hasil SIT &amp; UAT sebelum rilis.",
  pj4: "Melakukan manual testing dengan positive dan negative test case pada aplikasi mobile Orange Planner, platform penjualan produk asuransi Hanwha Life Indonesia yang memudahkan agen bekerja dari ponsel.",
  pj5: "Menguji Hanwha Life Web Console, sistem internal bagi staf untuk mengelola agen dan penjualan, mulai dari desain dan eksekusi skenario pengujian hingga pelaporan defect bersama developer dan dokumentasi SIT &amp; UAT.",
  pj6: "Menjalankan end-to-end testing di environment UAT untuk Cordoba, platform web CAR Syariah Life Insurance, serta mendokumentasikan hasil SIT &amp; UAT untuk memastikan sistem siap ke production.",
  pj7: "Mengembangkan front end web Jobshub, portal lowongan kerja yang menghubungkan pencari kerja dengan perusahaan dalam dan luar negeri, termasuk halaman masuk, pencarian lowongan, dan lamaran kerja. Dibangun dengan React JS.",
  pj8: "Mengembangkan aplikasi mobile Jobshub bagi pencari kerja untuk melihat lowongan, mencari berdasarkan posisi, memfilter dan mengurutkan lowongan berdasarkan tanggal posting, serta menyimpan lowongan. Dibangun dengan Flutter.",
  pj9: "Mengembangkan dashboard back office untuk program MBKM (Merdeka Belajar Kampus Merdeka) yang digunakan admin untuk mengelola pendaftar, dosen, mitra, program akademik, mata kuliah, berita, dan file. Dibangun dengan React JS.",
  pj10: "Mengembangkan website publik program MBKM Binawan yang menampilkan program dan fasilitas, berita dan publikasi, klien, serta informasi kontak untuk calon mahasiswa. Dibangun dengan React JS.",
  viewProject: "Lihat Proyek",
  contactTitle: "Mari bekerja sama.",
  getInTouch: "Hubungi saya",
  contactLead: "Punya lowongan QA, proyek, atau sekadar pertanyaan? Saya senang mendengar dari Anda.",
  location: "Lokasi",
  topicQ: "Topik pesan",
  topicJob: "Lowongan Kerja",
  topicCollab: "Kolaborasi",
  topicOther: "Lainnya",
  fName: "Nama lengkap",
  fEmail: "Alamat email",
  fMsg: "Pesan",
  send: "Kirim Pesan",
  note: "Tombol ini akan membuka aplikasi email Anda dengan pesan yang siap dikirim.",
  fCompany: "Perusahaan <em>(opsional)</em>",
  phName: "cth. Sarah Wijaya",
  phEmail: "anda@perusahaan.com",
  phCompany: "Nama perusahaan",
  phMsg: "Ceritakan sedikit tentang posisi atau proyeknya..."
};

(() => {
  const nodes = [...document.querySelectorAll('[data-i18n]')];
  const fields = [...document.querySelectorAll('[data-i18n-ph]')];
  const en = new Map(nodes.map(n => [n, n.innerHTML]));
  const enPh = new Map(fields.map(f => [f, f.placeholder]));
  const buttons = document.querySelectorAll('.lang-switch button');

  const setLang = lang => {
    nodes.forEach(n => { n.innerHTML = lang === 'id' ? (ID_TEXT[n.dataset.i18n] ?? en.get(n)) : en.get(n); });
    fields.forEach(f => { f.placeholder = lang === 'id' ? (ID_TEXT[f.dataset.i18nPh] ?? enPh.get(f)) : enPh.get(f); });
    document.documentElement.lang = lang;
    buttons.forEach(b => {
      const on = b.dataset.lang === lang;
      b.classList.toggle('active', on);
      b.setAttribute('aria-pressed', on);
    });
    try { localStorage.setItem('lang', lang); } catch (e) {}
  };

  buttons.forEach(b => b.addEventListener('click', () => setLang(b.dataset.lang)));
  let saved = 'en';
  try { saved = localStorage.getItem('lang') || 'en'; } catch (e) {}
  setLang(saved === 'id' ? 'id' : 'en');
})();

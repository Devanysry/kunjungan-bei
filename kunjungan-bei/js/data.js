/* ============================================================
   DATA & KONFIGURASI
   Ubah bagian IDENTITAS di bawah ini dengan data kamu sendiri.
   ============================================================ */

const IDENTITAS = {
  nama: "Nama Siswa",        // GANTI: nama lengkap
  kelas: "XI-A",             // GANTI: kelas
  sekolah: "Nama Sekolah",   // GANTI: nama sekolah
  tanggal: "23 November 2026"
};

const TICKER = ["IHSG", "LQ45", "IDX30", "BUMN20", "KOMPAS100", "SRI-KEHATI", "ISSI", "JII", "IDXHIDIV20", "IDXQ30"];

const STATS = [
  { value: 24, suffix: "×", label: "IHSG mencetak rekor baru sepanjang 2025" },
  { value: 20, suffix: " juta", label: "investor pasar modal Indonesia" },
  { value: 16005, prefix: "Rp", suffix: " T", label: "rekor kapitalisasi pasar (8 Des 2025)" },
  { value: 17.9, prefix: "Rp", suffix: " T", label: "rata-rata nilai transaksi harian (RNTH)", decimals: 1 }
];

const SEJARAH = [
  { year: "1912", title: "Bursa efek pertama di Batavia", text: "Bursa efek pertama di Hindia Belanda dibuka di Batavia oleh pemerintah kolonial untuk membantu perusahaan perkebunan Belanda mendapatkan modal." },
  { year: "1952", title: "Diaktifkan kembali", text: "Setelah sempat terhenti pada masa perang, pemerintah Republik Indonesia mengaktifkan kembali bursa efek. Cuplikan film sejarah di galeri menampilkan masa-masa ini." },
  { year: "1977", title: "Pasar modal dihidupkan lagi", text: "Pasar modal kembali diaktifkan dan Bursa Efek Jakarta berada di bawah pembinaan Bapepam. Perdagangan masih dilakukan secara manual oleh para pialang." },
  { year: "1992", title: "Bursa diswastakan", text: "Bursa Efek Jakarta diswastakan dan pengelolaannya diserahkan kepada pihak swasta, mendorong pasar modal lebih mandiri." },
  { year: "1995", title: "Perdagangan otomatis (JATS)", text: "Sistem perdagangan otomatis JATS diperkenalkan. Alat seperti binokular, kertas saham, dan handheld transceiver yang kami lihat di galeri berasal dari era sebelum otomasi." },
  { year: "2007", title: "Lahirnya BEI", text: "Bursa Efek Jakarta dan Bursa Efek Surabaya bergabung menjadi Bursa Efek Indonesia (BEI) seperti yang kita kenal sekarang." }
];

const KEGIATAN = [
  {
    judul: "Tiba di Lobi Gedung BEI",
    img: "assets/img/foto-09.jpg",
    teks: "Rombongan disambut di lobi dengan layar LED besar dan logo IDX. Spanduk kampanye “Aku Investor Saham” menjadi pengantar bahwa siapa saja bisa menjadi investor.",
    belajar: "Identitas BEI dan peran iDClear, IDX, serta KSEI dalam satu ekosistem."
  },
  {
    judul: "Pengantar dan Film Sejarah",
    img: "assets/img/foto-10.jpg",
    teks: "Di ruang proyeksi kami menonton animasi pengantar pasar modal dan film dokumenter sejarah bursa yang menampilkan arsip hitam putih dari tahun 1950-an.",
    belajar: "Bagaimana pasar modal Indonesia tumbuh dari masa kolonial hingga era digital."
  },
  {
    judul: "Galeri Sejarah",
    img: "assets/img/foto-05.jpg",
    teks: "Pemandu menjelaskan benda-benda bersejarah yang tersusun dari nomor 01 dan seterusnya: prospektus, binokular, kertas saham, dan handheld transceiver.",
    belajar: "Prospektus adalah dokumen informasi perusahaan yang akan menjual saham ke publik; binokular dan HT dipakai pialang sebelum perdagangan otomatis."
  },
  {
    judul: "Pilihan Investasi",
    img: "assets/img/foto-06.jpg",
    teks: "Dua pemandu memaparkan zona Pilihan Investasi, lengkap dengan grafik cahaya yang membandingkan pertumbuhan saham, emas, deposito, dan tabungan selama 10 tahun, serta peta indeks saham dunia.",
    belajar: "Setiap instrumen punya risiko dan potensi imbal hasil berbeda; saham pada grafik ilustrasi tumbuh paling tinggi dalam jangka panjang."
  },
  {
    judul: "Perencanaan Keuangan",
    img: "assets/img/foto-08.jpg",
    teks: "Zona Ekspektasi dan Realita, Nilai Uang, dan Perencanaan Keuangan mengajak pengunjung mengenali kemampuan menyisihkan uang dan nilai uang terhadap waktu.",
    belajar: "Inflasi menggerus nilai uang, sehingga menabung saja belum cukup tanpa perencanaan."
  },
  {
    judul: "Pojok Prestasi dan Papan Pencapaian",
    img: "assets/img/foto-03.jpg",
    teks: "Rak-rak putih memajang miniatur dan plakat peringatan IPO perusahaan tercatat. Di dekatnya, papan pencapaian BEI 2025 merangkum rekor IHSG, pertumbuhan investor, dan Liquidity Provider Saham.",
    belajar: "IPO adalah pintu perusahaan mendapat dana publik; likuiditas dan jumlah investor menjadi ukuran sehatnya pasar."
  },
  {
    judul: "Main Hall dan Financial Forum",
    img: "assets/img/foto-13.jpg",
    teks: "Kami berkeliling Main Hall dengan atrium tinggi, ring layar LED pergerakan indeks, dan panggung acara Financial Forum yang sedang bersiap.",
    belajar: "Pergerakan indeks dan harga ditampilkan real-time; BEI juga menjadi tempat diskusi kebijakan ekonomi."
  }
];

const FOTO = [
  { src: "assets/img/foto-01.jpg", cap: "Miniatur IPO PT Nusantara Sawit Sejahtera di pojok prestasi", cat: "prestasi" },
  { src: "assets/img/foto-02.jpg", cap: "Rak koleksi penghargaan dan wayang di galeri BEI", cat: "prestasi" },
  { src: "assets/img/foto-03.jpg", cap: "Papan Pencapaian BEI Sepanjang Tahun 2025", cat: "edukasi" },
  { src: "assets/img/foto-04.jpg", cap: "Plakat dan memorabilia perusahaan tercatat", cat: "prestasi" },
  { src: "assets/img/foto-05.jpg", cap: "Galeri sejarah: prospektus, binokular, kertas saham, handheld transceiver", cat: "sejarah" },
  { src: "assets/img/foto-06.jpg", cap: "Penjelasan zona Pilihan Investasi oleh pemandu", cat: "edukasi" },
  { src: "assets/img/foto-07.jpg", cap: "Kutipan motivasi di dinding galeri", cat: "edukasi" },
  { src: "assets/img/foto-08.jpg", cap: "Zona Nilai Uang dan Perencanaan Keuangan", cat: "edukasi" },
  { src: "assets/img/foto-09.jpg", cap: "Gerbang Bursa Efek Indonesia", cat: "suasana" },
  { src: "assets/img/foto-10.jpg", cap: "Cuplikan film arsip sejarah bursa", cat: "sejarah" },
  { src: "assets/img/foto-11.jpg", cap: "Main Hall dengan ring layar LED", cat: "suasana" },
  { src: "assets/img/foto-12.jpg", cap: "Atrium Main Hall dan rak penghargaan", cat: "suasana" },
  { src: "assets/img/foto-13.jpg", cap: "Panggung acara Financial Forum dan logo IDX Mobile", cat: "suasana" }
];

const KATEGORI = { semua: "Semua", sejarah: "Sejarah", edukasi: "Edukasi", prestasi: "Prestasi", suasana: "Suasana" };

/* Bab video: waktu mulai dalam detik pada vlog-kunjungan-bei.mp4 */
const BAB_VIDEO = [
  { t: 0,  label: "Pembuka" },
  { t: 4,  label: "Tiba di Gedung BEI" },
  { t: 6.5, label: "Pengantar dan sejarah" },
  { t: 20.3, label: "Sesi edukasi" },
  { t: 25, label: "Video profil dan proyeksi" },
  { t: 39, label: "Pilihan investasi" },
  { t: 43.2, label: "Menyusuri Main Hall" },
  { t: 62, label: "Financial Forum" },
  { t: 69.6, label: "Kilas foto" },
  { t: 85.8, label: "Penutup" }
];

const KESIMPULAN = "Kunjungan ke Bursa Efek Indonesia menunjukkan bahwa pasar modal bukan dunia yang jauh dan eksklusif, melainkan sarana nyata bagi perusahaan untuk mendapat modal dan bagi masyarakat untuk menumbuhkan kekayaan. Dari galeri sejarah kami melihat bahwa bursa terus berkembang dari pialang yang berteriak dengan binokular menjadi sistem digital. Dari zona edukasi kami belajar bahwa nilai uang turun oleh inflasi, sehingga perencanaan keuangan dan pemilihan instrumen investasi yang tepat itu penting. Papan pencapaian 2025 menegaskan bahwa jumlah investor terus bertambah, dan itu berarti literasi keuangan harus ikut naik.";

const REFLEKSI = [
  { judul: "Hal baru yang saya pelajari", teks: "Ternyata saham dan bursa punya sejarah panjang, dan prospektus adalah dokumen penting yang menjelaskan perusahaan sebelum sahamnya dijual ke publik. Saya juga baru tahu bahwa BEI bekerja bersama OJK, KSEI, dan iDClear." },
  { judul: "Yang paling berkesan", teks: "Grafik cahaya yang membandingkan pertumbuhan saham, emas, deposito, dan tabungan selama 10 tahun. Visualnya membuat konsep imbal hasil dan risiko mudah dipahami." },
  { judul: "Hubungan dengan pelajaran", teks: "Kunjungan ini memperkuat materi tentang pasar modal dan literasi keuangan, terutama fungsi bursa sebagai tempat bertemunya penjual dan pembeli efek." },
  { judul: "Rencana ke depan", teks: "Saya ingin mulai membiasakan mencatat keuangan, menabung rutin, dan belajar analisis dasar sebelum berinvestasi, dengan dana yang sesuai kemampuan dan risiko." }
];

const KUIS = [
  { q: "Apa kepanjangan dari IHSG?", opts: ["Indeks Harga Saham Gabungan", "Indeks Harga Saham Global", "Indikator Harga Saham Gabungan"], a: 0 },
  { q: "Dokumen yang memuat informasi perusahaan yang akan menawarkan sahamnya kepada publik disebut?", opts: ["Kuitansi", "Prospektus", "Proposal"], a: 1 },
  { q: "Bursa Efek Jakarta dan Bursa Efek Surabaya bergabung menjadi BEI pada tahun?", opts: ["1995", "2007", "1977"], a: 1 },
  { q: "Lembaga yang berperan sebagai kliring dan penjaminan penyelesaian transaksi bursa adalah?", opts: ["iDClear", "Bank Indonesia", "Pegadaian"], a: 0 },
  { q: "Pada grafik ilustrasi di zona Pilihan Investasi, instrumen yang tumbuh paling tinggi dalam 10 tahun adalah?", opts: ["Tabungan", "Deposito", "Saham"], a: 2 }
];

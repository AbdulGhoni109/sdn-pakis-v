/**
 * ============================================================
 *  content.js — SATU FILE SUMBER SEMUA KONTEN WEBSITE
 *  SDN PAKIS V/372 SURABAYA
 * ============================================================
 *
 *  Petunjuk edit:
 *  - Cari bagian berlabel [DATA ASLI] → sudah terisi, verifikasi ulang jika perlu
 *  - Cari bagian berlabel [DUMMY]     → WAJIB diganti dengan data nyata
 *  - Cari komentar // TODO            → hal spesifik yang perlu diisi
 * ============================================================
 */

// ─────────────────────────────────────────────
// 1. DATA SEKOLAH — [DATA ASLI]
// ─────────────────────────────────────────────
export const schoolInfo = {
  npsn: '20533190',
  name: 'SDN PAKIS V/372',
  shortName: 'SDN Pakis V',
  address: 'Jl. Pakis Sidokumpul',
  kelurahan: 'Kel. Pakis',
  kecamatan: 'Kec. Sawahan',
  kodePos: '60256',
  city: 'Surabaya',
  fullAddress: 'Jl. Pakis Sidokumpul, Kel. Pakis, Kec. Sawahan, Surabaya 60256',
  akreditasi: 'A',
  kepalaSekolah: 'IRAWAN MUHANIK, M.Pd',
  telp: '031-5665149',
  email: 'sdnpakis5@gmail.com', // TODO: ganti dengan email resmi jika ada
  website: '#',                  // TODO: ganti dengan URL website resmi
  tanggalPendirian: '31 Desember 1969',
  naungan: 'Dinas Pendidikan Kota Surabaya',
  statusSekolah: 'Negeri',
};

// ─────────────────────────────────────────────
// 2. VISI & MISI — [DATA ASLI]
// ─────────────────────────────────────────────
export const visiMisi = {
  visi: 'Unggul Dalam Prestasi, Terampil, Mandiri, Cinta Lingkungan Dan Berbudi Pekerti Yang Luhur Dengan Berlandasan Iman Dan Taqwa Kepada Tuhan Yang Maha Esa',
  misi: [
    'Mewujudkan siswa yang unggul dalam prestasi akademik maupun non-akademik.',
    'Menanamkan kemandirian dan keterampilan melalui proses belajar yang aktif.',
    'Membentuk karakter siswa yang berbudi pekerti luhur dan berakhlak mulia.',
    'Menciptakan lingkungan sekolah yang bersih, sehat, dan peduli lingkungan.',
    'Memperkuat nilai-nilai keimanan dan ketaqwaan kepada Tuhan Yang Maha Esa.',
  ],
};

// ─────────────────────────────────────────────
// 3. STATISTIK RINGKAS — sebagian [DATA ASLI], sebagian [DUMMY]
// ─────────────────────────────────────────────
export const stats = [
  {
    label: 'Peserta Didik',
    value: '480+',  // [DUMMY] — TODO: ganti dengan jumlah siswa aktif
    icon: 'Users',
    color: 'primary',
  },
  {
    label: 'Tenaga Pendidik',
    value: '32',    // [DUMMY] — TODO: ganti dengan jumlah guru + pegawai
    icon: 'GraduationCap',
    color: 'accent',
  },
  {
    label: 'Akreditasi',
    value: 'A',     // [DATA ASLI]
    icon: 'Award',
    color: 'primary',
  },
  {
    label: 'Tahun Berdiri',
    value: '1969',  // [DATA ASLI]
    icon: 'Calendar',
    color: 'accent',
  },
];

// ─────────────────────────────────────────────
// 4. SARANA & PRASARANA — [DATA ASLI]
// ─────────────────────────────────────────────
export const facilities = [
  { name: 'Ruang Teori / Kelas',          count: 41, icon: 'BookOpen' },
  { name: 'Laboratorium Komputer',         count: 2,  icon: 'Monitor' },
  { name: 'Ruang Perpustakaan',            count: 2,  icon: 'Library' },
  { name: 'Ruang Guru',                    count: 2,  icon: 'Users' },
  { name: 'Ruang Kepala Sekolah',          count: 2,  icon: 'Briefcase' },
  { name: 'Ruang TU',                      count: 2,  icon: 'FileText' },
  { name: 'Ruang UKS',                     count: 2,  icon: 'Heart' },
  { name: 'Ruang Ibadah',                  count: 2,  icon: 'Star' },
  { name: 'Ruang Serba Guna / Aula',       count: 2,  icon: 'Layout' },
  { name: 'Lapangan Olahraga',             count: 2,  icon: 'Dumbbell' },
  { name: 'Ruang Olahraga',               count: 2,  icon: 'Activity' },
  { name: 'Ruang Keterampilan',            count: 2,  icon: 'Wrench' },
  { name: 'Ruang Sumber Belajar',          count: 2,  icon: 'BookMarked' },
  { name: 'Ruang Pameran',                 count: 2,  icon: 'Image' },
  { name: 'Ruang Sirkulasi',               count: 2,  icon: 'ArrowLeftRight' },
  { name: 'Ruang Khusus',                  count: 2,  icon: 'Lock' },
  { name: 'Ruang TU',                      count: 2,  icon: 'ClipboardList' },
  { name: 'Koperasi / Toko',              count: 2,  icon: 'ShoppingBag' },
  { name: 'Kamar Mandi / WC Siswa L',     count: 1,  icon: 'Droplets' },
  { name: 'Kamar Mandi / WC Siswa P',     count: 1,  icon: 'Droplets' },
  { name: 'Gudang',                        count: 4,  icon: 'Package' },
  { name: 'Rumah Penjaga Sekolah',         count: 2,  icon: 'Home' },
  { name: 'Lainnya',                       count: 5,  icon: 'MoreHorizontal' },
];

// ─────────────────────────────────────────────
// 5. BERITA — [DUMMY] — TODO: ganti dengan berita asli
// ─────────────────────────────────────────────
export const news = [
  {
    id: 1,
    title: 'Peringatan Hari Pendidikan Nasional 2025 di SDN Pakis V',
    date: '2025-05-02',
    dateFormatted: '2 Mei 2025',
    thumbnail: null, // TODO: ganti dengan path gambar asli
    thumbnailAlt: 'Foto Hardiknas 2025',
    excerpt: 'Seluruh warga sekolah mengikuti upacara bendera dan berbagai lomba kreatif dalam rangka memperingati Hari Pendidikan Nasional tahun 2025.',
    category: 'Kegiatan',
    content: '', // TODO: isi konten lengkap berita
  },
  {
    id: 2,
    title: 'Juara 1 Lomba Matematika Tingkat Kecamatan Sawahan',
    date: '2025-04-15',
    dateFormatted: '15 April 2025',
    thumbnail: null, // TODO: ganti dengan path gambar asli
    thumbnailAlt: 'Foto Lomba Matematika',
    excerpt: 'Siswa SDN Pakis V berhasil meraih juara pertama dalam olimpiade matematika tingkat kecamatan yang diselenggarakan di Balai Kecamatan Sawahan.',
    category: 'Prestasi',
    content: '',
  },
  {
    id: 3,
    title: 'Kegiatan P5: Projek Penguatan Profil Pelajar Pancasila',
    date: '2025-03-20',
    dateFormatted: '20 Maret 2025',
    thumbnail: null, // TODO: ganti dengan path gambar asli
    thumbnailAlt: 'Foto Kegiatan P5',
    excerpt: 'Siswa kelas 4, 5, dan 6 mengikuti projek P5 bertema "Gaya Hidup Berkelanjutan" dengan membuat karya daur ulang dari bahan bekas.',
    category: 'Kurikulum',
    content: '',
  },
  {
    id: 4,
    title: 'Pentas Seni Akhir Tahun Ajaran 2024/2025',
    date: '2025-06-21',
    dateFormatted: '21 Juni 2025',
    thumbnail: null, // TODO: ganti dengan path gambar asli
    thumbnailAlt: 'Foto Pentas Seni',
    excerpt: 'SDN Pakis V menggelar pentas seni yang menampilkan berbagai pertunjukan tari, paduan suara, dan drama yang melibatkan seluruh siswa dari kelas 1 hingga 6.',
    category: 'Kegiatan',
    content: '',
  },
];

// ─────────────────────────────────────────────
// 6. PRESTASI — [DUMMY] — TODO: ganti dengan data prestasi asli
// ─────────────────────────────────────────────
export const achievements = [
  {
    id: 1,
    title: 'Juara 1 Olimpiade Matematika',
    student: 'Ahmad Fariz Maulana',
    level: 'Kecamatan',
    levelColor: 'blue',
    month: 'April',
    year: '2025',
    organizer: 'UPT Pendidikan Kec. Sawahan',
  },
  {
    id: 2,
    title: 'Juara 2 Lomba Cerdas Cermat PKn',
    student: 'Siti Nur Aisyah & Tim',
    level: 'Kota',
    levelColor: 'green',
    month: 'Maret',
    year: '2025',
    organizer: 'Dinas Pendidikan Kota Surabaya',
  },
  {
    id: 3,
    title: 'Juara 1 Lomba Tari Tradisional',
    student: 'Tim Tari SDN Pakis V',
    level: 'Kecamatan',
    levelColor: 'blue',
    month: 'Februari',
    year: '2025',
    organizer: 'UPT Pendidikan Kec. Sawahan',
  },
  {
    id: 4,
    title: 'Juara 3 Kejuaraan Futsal Pelajar SD',
    student: 'Tim Futsal SDN Pakis V',
    level: 'Kota',
    levelColor: 'green',
    month: 'Januari',
    year: '2025',
    organizer: 'KONI Kota Surabaya',
  },
  {
    id: 5,
    title: 'Penghargaan Sekolah Peduli Lingkungan',
    student: 'SDN Pakis V (Institusi)',
    level: 'Provinsi',
    levelColor: 'purple',
    month: 'November',
    year: '2024',
    organizer: 'Dinas Lingkungan Hidup Prov. Jawa Timur',
  },
];

// ─────────────────────────────────────────────
// 7. EKSTRAKURIKULER — [DUMMY] — TODO: sesuaikan dengan ekskul aktual
// ─────────────────────────────────────────────
export const extracurricular = [
  {
    id: 1,
    name: 'Pramuka',
    emoji: '⛺',
    description: 'Membentuk karakter mandiri, disiplin, dan cinta tanah air melalui kegiatan kepramukaan yang menyenangkan dan edukatif.',
    schedule: 'Jumat, 14.00 – 16.00 WIB',
    pembina: 'Bpk. Suryanto, S.Pd', // [DUMMY] — TODO: ganti nama pembina
    thumbnail: null,
  },
  {
    id: 2,
    name: 'Futsal',
    emoji: '⚽',
    description: 'Melatih kerjasama tim, sportivitas, dan ketangkasan fisik melalui olahraga futsal yang kompetitif.',
    schedule: 'Rabu, 15.00 – 17.00 WIB',
    pembina: 'Bpk. Agus Setiawan, S.Pd', // [DUMMY]
    thumbnail: null,
  },
  {
    id: 3,
    name: 'Tari Tradisional',
    emoji: '💃',
    description: 'Melestarikan budaya bangsa melalui seni tari tradisional Jawa dan Nusantara dengan bimbingan pelatih berpengalaman.',
    schedule: 'Sabtu, 09.00 – 11.00 WIB',
    pembina: 'Ibu Dewi Rahayu, S.Sn', // [DUMMY]
    thumbnail: null,
  },
  {
    id: 4,
    name: 'Paduan Suara',
    emoji: '🎵',
    description: 'Mengembangkan bakat bernyanyi, kekompakan, dan apresiasi musik melalui latihan paduan suara rutin.',
    schedule: 'Kamis, 14.00 – 15.30 WIB',
    pembina: 'Ibu Rina Kusuma, S.Pd', // [DUMMY]
    thumbnail: null,
  },
  {
    id: 5,
    name: 'Renang',
    emoji: '🏊',
    description: 'Meningkatkan kemampuan berenang sebagai keterampilan hidup sekaligus olahraga kesehatan bagi siswa SD.',
    schedule: 'Sabtu, 07.00 – 09.00 WIB',
    pembina: 'Bpk. Hendra Wijaya', // [DUMMY]
    thumbnail: null,
  },
  {
    id: 6,
    name: 'Seni Lukis',
    emoji: '🎨',
    description: 'Mengembangkan kreativitas dan ekspresi seni rupa melalui kegiatan melukis, menggambar, dan berkarya visual.',
    schedule: 'Selasa, 14.00 – 15.30 WIB',
    pembina: 'Ibu Sari Indah, S.Pd', // [DUMMY]
    thumbnail: null,
  },
];

// ─────────────────────────────────────────────
// 8. REKAP GURU & PEGAWAI — [DUMMY] — TODO: ganti dengan data riil
// ─────────────────────────────────────────────
export const staffRecap = {
  total: 32,                           // [DUMMY]
  breakdown: [
    { category: 'Guru PNS',           count: 18 }, // [DUMMY]
    { category: 'Guru Honorer / GTT', count: 8  }, // [DUMMY]
    { category: 'Tenaga Kependidikan PNS',  count: 3 }, // [DUMMY]
    { category: 'Tenaga Kependidikan Honorer', count: 3 }, // [DUMMY]
  ],
  pendidikan: [
    { label: 'S2', count: 3 },   // [DUMMY]
    { label: 'S1', count: 24 },  // [DUMMY]
    { label: 'D3', count: 2 },   // [DUMMY]
    { label: 'SMA/SMK', count: 3 }, // [DUMMY]
  ],
};

// ─────────────────────────────────────────────
// 9. REKAP PESERTA DIDIK — [DUMMY] — TODO: ganti dengan data riil
// ─────────────────────────────────────────────
export const studentRecap = {
  total: 480,  // [DUMMY]
  perKelas: [
    { kelas: 'Kelas 1', rombel: 3, siswa: 84 }, // [DUMMY]
    { kelas: 'Kelas 2', rombel: 3, siswa: 82 }, // [DUMMY]
    { kelas: 'Kelas 3', rombel: 3, siswa: 80 }, // [DUMMY]
    { kelas: 'Kelas 4', rombel: 3, siswa: 79 }, // [DUMMY]
    { kelas: 'Kelas 5', rombel: 3, siswa: 78 }, // [DUMMY]
    { kelas: 'Kelas 6', rombel: 3, siswa: 77 }, // [DUMMY]
  ],
  lakiLaki: 245,   // [DUMMY]
  perempuan: 235,  // [DUMMY]
};

// ─────────────────────────────────────────────
// 10. PERANGKAT PEMBELAJARAN — [DUMMY URL] — TODO: ganti dengan link download asli
// ─────────────────────────────────────────────
export const learningTools = [
  {
    id: 1,
    title: 'Panduan Kurikulum Merdeka',
    description: 'Dokumen panduan resmi implementasi Kurikulum Merdeka untuk jenjang SD, lengkap dengan prinsip dan strategi pembelajaran.',
    icon: 'BookOpen',
    type: 'download',
    fileType: 'PDF',
    url: '#', // TODO: ganti dengan link download asli
  },
  {
    id: 2,
    title: 'Panduan Pembelajaran Berdiferensiasi',
    description: 'Panduan praktis menerapkan diferensiasi konten, proses, dan produk dalam pembelajaran sesuai kebutuhan siswa.',
    icon: 'Layers',
    type: 'download',
    fileType: 'PDF',
    url: '#', // TODO: ganti dengan link download asli
  },
  {
    id: 3,
    title: 'Template Modul Ajar',
    description: 'Template siap pakai untuk menyusun Modul Ajar Kurikulum Merdeka sesuai format Kemendikbudristek.',
    icon: 'FileText',
    type: 'download',
    fileType: 'DOCX',
    url: '#', // TODO: ganti dengan link download asli
  },
  {
    id: 4,
    title: 'Contoh Modul Ajar',
    description: 'Kumpulan contoh Modul Ajar jadi berbagai mata pelajaran SD sebagai referensi dan inspirasi guru.',
    icon: 'FilePlus',
    type: 'download',
    fileType: 'PDF',
    url: '#', // TODO: ganti dengan link download asli
  },
  {
    id: 5,
    title: 'Generator Modul Ajar (AI)',
    description: 'Buat Modul Ajar secara otomatis menggunakan kecerdasan buatan. Hemat waktu, hasil terstruktur.',
    icon: 'Sparkles',
    type: 'external',
    fileType: 'LINK',
    url: '#', // TODO: ganti dengan URL tools AI generator
  },
  {
    id: 6,
    title: 'Asesmen Diagnostik',
    description: 'Instrumen asesmen diagnostik awal untuk mengetahui kemampuan dan kebutuhan belajar siswa di awal tahun ajaran.',
    icon: 'ClipboardCheck',
    type: 'download',
    fileType: 'PDF',
    url: '#', // TODO: ganti dengan link download asli
  },
  {
    id: 7,
    title: 'Rubrik Penilaian',
    description: 'Rubrik penilaian lengkap untuk berbagai kompetensi: pengetahuan, keterampilan, dan sikap.',
    icon: 'CheckSquare',
    type: 'download',
    fileType: 'PDF',
    url: '#', // TODO: ganti dengan link download asli
  },
  {
    id: 8,
    title: 'Unduh File Word (.docx)',
    description: 'Kumpulan file Word siap edit: surat menyurat, laporan, administrasi kelas, dan dokumen sekolah lainnya.',
    icon: 'FileDown',
    type: 'download',
    fileType: 'DOCX',
    url: '#', // TODO: ganti dengan link download asli
  },
];

// ─────────────────────────────────────────────
// 11. NAVIGASI
// ─────────────────────────────────────────────
export const navLinks = [
  { label: 'Beranda',                id: 'beranda' },
  { label: 'Profil',                 id: 'profil' },
  { label: 'Berita',                 id: 'berita' },
  { label: 'Prestasi',               id: 'prestasi' },
  { label: 'Ekstrakurikuler',        id: 'ekskul' },
  { label: 'Rekap',                  id: 'rekap' },
  { label: 'Perangkat Pembelajaran', id: 'perangkat' },
];

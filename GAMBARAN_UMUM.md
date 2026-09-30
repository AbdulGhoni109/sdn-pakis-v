# Gambaran Umum & Panduan Penggunaan Website SDN Pakis V Surabaya

---

## DAFTAR ISI

1. [Website Ini Dibangun Menggunakan Apa? (Penjelasan Teknologi Detail)](#1-website-ini-dibangun-menggunakan-apa-penjelasan-teknologi-detail)
   - [A. Ringkasan Ekosistem Teknologi](#a-ringkasan-ekosistem-teknologi)
   - [B. Bahasa Pemrograman Dasar (Pondasi Web)](#b-bahasa-pemrograman-dasar-pondasi-web)
   - [C. Pustaka Utama Tampilan (Framework & UI Core)](#c-pustaka-utama-tampilan-framework--ui-core)
   - [D. Alat Pengembang & Kompilator (Build Tooling)](#d-alat-pengembang--kompilator-build-tooling)
   - [E. Penataan Tampilan & Desain (Styling Engine)](#e-penataan-tampilan--desain-styling-engine)
   - [F. Pustaka Pendukung Interaktif (Ikon & Grafik)](#f-pustaka-pendukung-interaktif-ikon--grafik)
2. [Bagaimana Alur Kerja Sistem (How It Works)?](#2-bagaimana-alur-kerja-sistem-how-it-works)
   - [Alur 1: Saat Pengunjung Membuka Website](#alur-1-saat-pengunjung-membuka-website)
   - [Alur 2: Navigasi dan Perpindahan Halaman (SPA)](#alur-2-navigasi-dan-perpindahan-halaman-spa)
   - [Alur 3: Pemisahan Data dan Tampilan](#alur-3-pemisahan-data-dan-tampilan)
   - [Alur 4: Pengubahan Data oleh Pengelola Website](#alur-4-pengubahan-data-oleh-pengelola-website)
   - [Alur 5: Proses Kompilasi (Build Process)](#alur-5-proses-kompilasi-build-process)
3. [Bedah Struktur Kode dan Peta Komponen (Rincian Berkas)](#3-bedah-struktur-kode-dan-peta-komponen-rincian-berkas)
   - [A. Pohon Struktur Folder Utama](#a-pohon-struktur-folder-utama)
   - [B. Berkas Pintu Masuk & Konfigurasi (`index.html`, `main.jsx`, `App.jsx`)](#b-berkas-pintu-masuk--konfigurasi-indexhtml-mainjsx-appjsx)
   - [C. Berkas Pusat Data (`src/data/content.js`)](#c-berkas-pusat-data-srcdatacontentjs)
   - [D. Bedah Komponen Layout (`Navbar.jsx` & `Footer.jsx`)](#d-bedah-komponen-layout-navbarjsx--footerjsx)
   - [E. Bedah Komponen UI Pembungkus (`ScrollReveal.jsx` & `SectionHeader.jsx`)](#e-bedah-komponen-ui-pembungkus-scrollrevealjsx--sectionheaderjsx)
   - [F. Bedah 8 Komponen Halaman Utama (`src/pages/`)](#f-bedah-8-komponen-halaman-utama-srcpages)
4. [Panduan Hosting Menggunakan Netlify (dan Alternatifnya)](#4-panduan-hosting-menggunakan-netlify-dan-alternatifnya)
   - [Apa itu Netlify?](#apa-itu-netlify)
   - [Mengapa Netlify Gratis?](#mengapa-netlify-gratis)
   - [Panduan Cara Upload Website ke Netlify](#panduan-cara-upload-website-ke-netlify)
   - [Pengaturan Khusus Netlify (`_redirects` / `netlify.toml`)](#pengaturan-khusus-netlify-_redirects--netlifytoml)
5. [Biaya Operasional & Keberlangsungan Jangka Panjang](#5-biaya-operasional--keberlangsungan-jangka-panjang)
   - [Skenario Gratis (Rp 0 / Tahun)](#skenario-gratis-rp-0--tahun)
   - [Skenario Domain Resmi `.sch.id` (~Rp 150.000 / Tahun)](#skenario-domain-resmi-schid-rp-150000--tahun)
   - [Apakah Website Tetap Aktif Jika Tidak Ada Pembayaran?](#apakah-website-tetap-aktif-jika-tidak-ada-pembayaran)

---

## 1. Website Ini Dibangun Menggunakan Apa? (Penjelasan Teknologi Detail)

Website SDN Pakis V Surabaya dirancang menggunakan arsitektur perangkat lunak modern berbantuan teknologi *front-end web development* terkini. Seluruh teknologi yang dipilih bertujuan agar website **memiliki performa super cepat**, **tampilan responsif di HP/komputer**, **bebas biaya operasional bulanan**, serta **mudah dirawat di masa depan**.

---

### A. Ringkasan Ekosistem Teknologi

Tabel di bawah ini merangkum seluruh teknologi yang menyusun website SDN Pakis V:

| Kategori Teknologi | Nama Teknologi | Versi | Peran & Fungsi Utama |
|---|---|---|---|
| **Bahasa Dasar** | HTML5 | Standard | Menyediakan struktur elemen dasar halaman web (`index.html`) |
| **Bahasa Dasar** | CSS3 | Standard | Menyediakan aturan desain visual, variabel warna, dan efek animasi |
| **Bahasa Utama** | JavaScript (ES6+ / JSX) | Standard | Menyusun logika pemrograman, interaktivitas, dan sintaks tampilan JSX |
| **UI Framework** | React JS (React DOM) | `v19.2.7` | Pustaka utama penyusun komponen modular dan pemroses Virtual DOM |
| **Build Tooling** | Vite | `v8.1.1` | Pembangun proyek super cepat (Dev server instan & bundling file akhir) |
| **Styling Engine** | Tailwind CSS | `v3.4.19` | Framework CSS *utility-first* untuk tata letak & responsivitas layar |
| **CSS Preprocessor**| PostCSS & Autoprefixer | `v8.5` / `v10.5` | Memastikan sintaks CSS kompatibel di seluruh browser (Safari, Chrome, Firefox) |
| **Navigasi** | React Router DOM | `v7.18.1` | Mengelola navigasi halaman tunggal (*Single Page Application / SPA*) |
| **Grafik & Chart** | Recharts | `v3.9.2` | Engine pembuat grafik statistik data siswa & guru berbasis SVG |
| **Ikonografi** | Lucide React | `v1.24.0` | Kumpulan ikon vektor modern yang ringan dan tajam |
| **Lingkungan Kerja**| Node.js & npm | Modern | Environment pengembang lokal untuk mengelola pustaka dan skrip perintah |

```text
+-----------------------------------------------------------------------------------+
|                            TAMPILAN AKHIR BROWSER                                 |
|            (Komputer Desktop, Laptop, Tablet, Smartphone Android/iOS)             |
+-----------------------------------------------------------------------------------+
                                         ^
                                         | (Diakses via HTTPS / Netlify CDN)
+-----------------------------------------------------------------------------------+
|                              PRODUK HASIL BUILD (dist/)                            |
|             Folder terkompresi berisi: index.html, app.js, & app.css              |
+-----------------------------------------------------------------------------------+
                                         ^
                                         | (Diolah & Dipadatkan oleh Vite v8)
+-----------------------------------------------------------------------------------+
|                             KODE SUMBER (src/)                                    |
|                                                                                   |
|   +---------------------------------+     +-----------------------------------+   |
|   |         REACT JS (v19)          |     |          TAILWIND CSS 3           |   |
|   | Menyusun komponen UI & Logika   |     | Menghias warna & Tata letak HP    |   |
|   +---------------------------------+     +-----------------------------------+   |
|                    |                                        |                     |
|                    v                                        v                     |
|   +---------------------------------+     +-----------------------------------+   |
|   |     RECHARTS & LUCIDE REACT     |     |       REACT ROUTER DOM (v7)       |   |
|   | Grafik data & Ikon vektor SVG   |     | Navigasi halaman cepat (SPA)      |   |
|   +---------------------------------+     +-----------------------------------+   |
+-----------------------------------------------------------------------------------+
```

---

### B. Bahasa Pemrograman Dasar (Pondasi Web)

#### 1. HTML5 (HyperText Markup Language)
* **Apa itu?** Bahasa standar internasional untuk membuat kerangka dasar dokumen web.
* **Perannya pada website ini:** Di dalam proyek ini, HTML5 hadir sebagai berkas tunggal `index.html`. Berkas ini menyediakan titik tumpu bernama `<div id="root"></div>` serta metadata SEO (seperti judul website, deskripsi google, dan pengaturan resolusi viewport HP).

#### 2. CSS3 (Cascading Style Sheets)
* **Apa itu?** Bahasa standar untuk mengatur estetika visual (warna, jenis huruf, bayangan, dan tata letak).
* **Perannya pada website ini:** Digunakan di berkas `src/index.css` untuk menentukan warna latar belakang global, efek animasi kemunculan elemen (*fade-up scroll reveal*), serta efek buram transparan (*backdrop blur*) pada menu navigasi atas.

#### 3. JavaScript ES6+ & JSX (JavaScript XML)
* **Apa itu?** JavaScript adalah bahasa pemrograman utama di dunia web. **JSX** adalah ekstensi dari JavaScript yang memungkinkan penulisan kode mirip HTML secara langsung di dalam kode JavaScript.
* **Perannya pada website ini:** Memungkinkan logika dinamis, seperti menghitung posisi scroll layar, membuka/menutup menu navigasi di HP, memformat angka statistik, dan mengolah data dari file `src/data/content.js`.

---

### C. Pustaka Utama Tampilan (Framework & UI Core)

#### 1. React JS (Versi 19.2.7)
* **Apa itu?** React adalah pustaka (*library*) JavaScript paling populer di dunia buatan Meta (Facebook) untuk membangun antarmuka pengguna (*User Interface*).
* **Mengapa Menggunakan React v19?**
  * **Sistem Komponen (Component-Based):** Halaman web dibuat terpisah-pisah dalam komponen kecil (`Navbar`, `Beranda`, `Profil`, `Berita`, `Prestasi`, `Ekskul`, `Rekap`, `Perangkat`, `Footer`). Hal ini membuat kode sangat rapi dan mudah diperbaiki jika ada perubahan.
  * **Virtual DOM (Document Object Model):** React menyimpan gambaran antarmuka di dalam memori komputer. Ketika pengguna mengeklik menu atau menggeser layar, React hanya memperbarui bagian yang berubah saja tanpa memuat ulang seluruh layar. Hasilnya, aplikasi terasa sangat responsif.
  * **React Hooks (`useState`, `useEffect`, `useRef`):**
    * `useState`: Menyimpan status interaktif (misalnya apakah menu HP sedang terbuka atau tertutup).
    * `useEffect`: Menjalankan logika otomatis (misalnya mengamati posisi scroll layar menggunakan *Intersection Observer*).
    * `useRef`: Menunjuk ke elemen fisik HTML di layar untuk memberikan animasi atau efek penggeseran mulus.

#### 2. React Router DOM (Versi 7.18.1)
* **Apa itu?** Pustaka khusus untuk mengelola navigasi dan perpindahan URL pada aplikasi React.
* **Perannya pada website ini:** Memungkinkan website berjalan sebagai **Single Page Application (SPA)**. Ketika pengunjung mengklik tombol navigasi seperti "Ekstrakurikuler", alamat web atau tampilan layar langsung berpindah dengan mulus tanpa memicu *reload* browser yang lambat.

---

### D. Alat Pengembang & Kompilator (Build Tooling)

#### 1. Vite (Versi 8.1.1)
* **Apa itu?** Vite (bahasa Prancis untuk *"Cepat"*) adalah alat pembangun (*build tool*) generasi baru yang menggantikan alat lama seperti Webpack.
* **Mengapa Menggunakan Vite v8?**
  * **Kecepatan Pengembangan Instan (*Hot Module Replacement / HMR*):** Saat pengembang mengubah teks atau warna di kode program, perubahan langsung muncul di browser dalam waktu kurang dari 0,1 detik tanpa me-refresh halaman.
  * **Proses Kompilasi Akhir yang Sangat Efisien:** Saat perintah `npm run build` dijalankan, Vite mengumpulkan ratusan berkas React, CSS, dan aset gambar, lalu memadatkannya menjadi berkas yang berukuran sangat kecil di folder `dist/`.

#### 2. Node.js & npm (Node Package Manager)
* **Apa itu?** **Node.js** adalah lingkungan untuk menjalankan JavaScript di komputer pengembang. **npm** adalah pengelola paket pustaka software terbesar di dunia.
* **Perannya pada website ini:** npm bertugas mengunduh, memperbarui, dan mengelola seluruh pustaka pendukung (seperti React, Tailwind, Recharts, Lucide) secara otomatis dan terorganisir melalui berkas `package.json`.

---

### E. Penataan Tampilan & Desain (Styling Engine)

#### 1. Tailwind CSS (Versi 3.4.19)
* **Apa itu?** Tailwind CSS adalah kerangka kerja (*framework*) CSS berbasis *utility-first* yang sangat populer di kalangan pengembang software modern.
* **Mengapa Menggunakan Tailwind CSS?**
  * **Desain Responsif Otomatis (*Responsive Breakpoints*):** Kode Tailwind memudahkan penyesuaian layar HP dan Komputer dengan kode singkat (misalnya `hidden lg:flex` artinya: sembunyikan di HP, tampilkan di laptop).
  * **Warna Terkurasi & Konsisten:** Menggunakan skema warna profesional, seperti warna utama hijau/biru sekolah (`primary-700`) dan warna aksen (`accent-500`), sehingga tampilan tampak modern dan tidak kaku.
  * **Performa Tinggi:** Tailwind hanya memasukkan kelas CSS yang benar-benar digunakan ke dalam produk akhir, membuat ukuran file CSS menjadi sangat kecil (hanya beberapa Kilobyte).

#### 2. PostCSS (v8.5) & Autoprefixer (v10.5)
* **Apa itu?** Alat bantu otomatis untuk memproses CSS.
* **Perannya pada website ini:** Autoprefixer secara otomatis menambahkan *vendor prefix* (seperti `-webkit-` atau `-moz-`) pada kode CSS agar efek visual (seperti animasi dan bayangan) dapat tampil secara sempurna di semua merek browser, baik Chrome di Android, Safari di iPhone, maupun Edge di Windows.

---

### F. Pustaka Pendukung Interaktif (Ikon & Grafik)

#### 1. Lucide React (Versi 1.24.0)
* **Apa itu?** Pustaka ikon berbasis vektor (SVG) yang modern dan konsisten.
* **Perannya pada website ini:** Menyediakan puluhan ikon visual seperti `GraduationCap`, `Users`, `BookOpen`, `Monitor`, `Library`, `Dumbbell`, `Menu`, dan `X`. Ikon berbasis SVG selalu terlihat tajam di layar HP beresolusi tinggi (Retina display) dan tidak akan pecah saat di-zoom.

#### 2. Recharts (Versi 3.9.2)
* **Apa itu?** Pustaka visualisasi data khusus untuk React yang dibangun di atas teknologi SVG.
* **Perannya pada website ini:** Digunakan pada bagian **Rekapitulasi Data (`Rekap.jsx`)** untuk menampilkan Grafik Batang jumlah siswa per kelas dan diagram rekapitulasi kepegawaian guru lengkap dengan kotak petunjuk (*tooltip*) interaktif saat disentuh/diarahkan kursor.

---

## 2. Bagaimana Alur Kerja Sistem (How It Works)?

Untuk memahami bagaimana website ini berjalan dari awal dibuka hingga data ditampilkan, mari kita bahas alurnya step-by-step:

### Alur 1: Saat Pengunjung Membuka Website
1. Pengunjung mengetikkan alamat website (misalnya: `sdnpakisv.netlify.app`) di browser HP atau komputer.
2. Server Netlify mengirimkan berkas utama `index.html` beserta file hasil olahan Vite (`app.js` dan `app.css`).
3. Browser membaca file tersebut dan langsung menampilkan kerangka dasar aplikasi dalam hitungan milidetik.

---

### Alur 2: Navigasi dan Perpindahan Halaman (SPA)
Website ini dirancang menggunakan konsep **Single Page Application (SPA)**:

```text
[ Pengunjung mengklik menu "Prestasi" ]
                  |
                  v
[ Navbar mendeteksi klik & membaca ID bagian "#prestasi" ]
                  |
                  v
[ Layar bergeser secara mulus (Smooth Scroll) ke bagian Prestasi ]
                  |
                  v
[ Tanpa Loading Ulang / Reload Halaman Browser ]
```

* **Keunggulan Alur Ini:** Pengunjung merasa sangat nyaman karena perpindahan menu terasa seperti menggunakan aplikasi HP (*native app*), tidak ada jeda layar putih atau *refresh* berulang-ulang.

---

### Alur 3: Pemisahan Data dan Tampilan
Salah satu aspek penting dalam arsitektur website ini adalah **Clean Architecture (Pemisahan Konten & Kode Tampilan)**.

* Seluruh teks informasi sekolah (nama sekolah, visi-misi, daftar berita, daftar ekskul, data guru, data siswa) **TIDAK** dicampur ke dalam kode tampilan HTML/CSS.
* Seluruh data disimpan terpusat di satu berkas khusus, yaitu: `src/data/content.js`.
* Komponen tampilan (seperti `Berita.jsx` atau `Profil.jsx`) hanya bertugas mengambil data dari `content.js` lalu menampilkannya secara rapi.

```text
+-------------------------------------------------------+
|                 src/data/content.js                   |
|  (Pusat Data: Teks Visi Misi, Daftar Berita, dll)     |
+-------------------------------------------------------+
                           |
                           | (Di-import oleh)
                           v
+-------------------------------------------------------+
|                 src/pages/Berita.jsx                  |
|  (Komponen Tampilan: Menyusun bentuk kartu berita)    |
+-------------------------------------------------------+
                           |
                           v
+-------------------------------------------------------+
|               Layar Browser Pengunjung                |
+-------------------------------------------------------+
```

---

### Alur 4: Pengubahan Data oleh Pengelola Website
Jika suatu saat sekolah ingin memperbarui data (misalnya mengganti nama Kepala Sekolah atau menambah berita baru):

1. Pengelola cukup membuka berkas `src/data/content.js`.
2. Pengelola mencari bagian teks yang ingin diubah.
3. Pengelola menyimpannya, lalu melakukan *update* ke Netlify.
4. Tampilan website di seluruh dunia akan otomatis berubah tanpa perlu merombak alur desain.

---

### Alur 5: Proses Kompilasi (Build Process)
Saat pengembangan selesai dan siap di-upload ke internet, alurnya adalah:

1. Pengembang menjalankan perintah kompilasi: `npm run build`.
2. **Vite** akan memeriksa seluruh kode React dan CSS.
3. Vite mengompresi dan menggabungkan ratusan baris kode menjadi folder baru bernama `dist/`.
4. Berkas di dalam folder `dist/` inilah yang kemudian diunggah dan dijalankan di hosting **Netlify**.

---

## 3. Bedah Struktur Kode dan Peta Komponen (Rincian Berkas)

### A. Pohon Struktur Folder Utama

Berikut adalah susunan lengkap seluruh berkas di dalam proyek `sdn-pakis-v`:

```text
sdn-pakis-v/
├── index.html                     # Berkas HTML utama (Pintu masuk browser & model-viewer)
├── package.json                   # Catatan library & script perintah npm
├── postcss.config.js              # Pengaturan CSS preprocessor
├── tailwind.config.js             # Pengaturan tema, warna & font Tailwind
├── vite.config.js                 # Pengaturan pengompilasi Vite
├── public/                        # Tempat berkas statis
│   ├── images/                    # Aset grafis (garuda.png, garuda.svg)
│   └── models/                    # Model 3D WebAR (garuda.glb)
└── src/                           # KODE SUMBER UTAMA APLIKASI
    ├── main.jsx                   # Titik awal pemasangan React ke DOM
    ├── App.jsx                    # Komponen utama penumpuk seluruh bagian halaman
    ├── index.css                  # Pengaturan style global & animasi scroll
    ├── data/
    │   ├── content.js             # [PUSAT DATA] Seluruh isi teks & informasi sekolah
    │   └── pancasilaData.js       # [DATA AR] Data 5 sila, filosofi 17-8-1945, & kuis
    ├── components/
    │   ├── layout/
    │   │   ├── Navbar.jsx         # Menu navigasi bagian atas (Sticky Header)
    │   │   └── Footer.jsx         # Kaki website (Kontak, Alamat, & Hak Cipta)
    │   ├── ui/
    │   │   ├── ScrollReveal.jsx   # Komponen animasi pembungkus (Fade-in on scroll)
    │   │   └── SectionHeader.jsx  # Komponen judul & sub-judul bagian halaman
    │   └── ar/
    │       ├── ThreeDExplorer.jsx # Eksplorasi 3D interaktif & Audio Narasi AI
    │       ├── WebcamARViewer.jsx # Kamera WebAR (rotasi, skala, filter, snapshot)
    │       ├── NativeModelViewer.jsx # WebAR ARCore / Apple QuickLook (<model-viewer>)
    │       └── PancasilaQuiz.jsx  # Kuis interaktif evaluasi pemahaman siswa
    └── pages/
        ├── Beranda.jsx            # Tampilan Selamat Datang & Sambutan Kepsek
        ├── Profil.jsx             # Visi, Misi, & Sarana Prasarana Sekolah
        ├── MediaAR.jsx            # [INOVASI] Media Pembelajaran WebAR Garuda Pancasila
        ├── Berita.jsx             # Daftar Berita & Kegiatan Sekolah
        ├── Prestasi.jsx           # Penghargaan & Kejuaraan Siswa
        ├── Ekskul.jsx             # Kegiatan Ekstrakurikuler & Pembina
        ├── Rekap.jsx              # Grafik & Statistik Guru/Siswa (Recharts)
        └── Perangkat.jsx          # Download Modul Ajar & Kurikulum Merdeka
```

---

### B. Berkas Pintu Masuk & Konfigurasi (`index.html`, `main.jsx`, `App.jsx`)

#### 1. `index.html` (Pondasi Terluar HTML)
* **Logika Kode:** Berkas ini adalah satu-satunya file HTML di seluruh aplikasi. Di dalamnya terdapat tag `<div id="root"></div>`.
* **Fungsi:** Tempat awal di mana seluruh tampilan React akan disuntikkan dan ditampilkan ke layar pengguna. Juga berisi metadata SEO dan judul tab browser (`<title>SDN Pakis V Surabaya</title>`).

#### 2. `src/main.jsx` (Jembatan React ke DOM)
* **Logika Kode:**
  ```javascript
  import React from 'react';
  import ReactDOM from 'react-dom/client';
  import App from './App';
  import './index.css';

  ReactDOM.createRoot(document.getElementById('root')).render(<App />);
  ```
* **Fungsi:** Mengambil wadah `root` dari `index.html` lalu memasang komponen utama `<App />` di dalamnya.

#### 3. `src/App.jsx` (Penumpuk Tata Letak Utama)
* **Logika Kode:**
  ```javascript
  export default function App() {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Beranda />
          <Profil />
          <Berita />
          <Prestasi />
          <Ekskul />
          <Rekap />
          <Perangkat />
        </main>
        <Footer />
      </div>
    );
  }
  ```
* **Fungsi:** Mengatur urutan tampilan halaman dari atas ke bawah secara rapi dan kontinu.

---

### C. Berkas Pusat Data (`src/data/content.js`)

File `content.js` menyimpan seluruh informasi sekolah dalam bentuk objek JavaScript yang diekspor (`export const`).

Berikut adalah rincian struktur data yang tersimpan di dalamnya:

1. **`schoolInfo`**: Objek berisi data profil dasar sekolah (NPSN `20533190`, Akreditasi `A`, Kepala Sekolah `IRAWAN MUHANIK, M.Pd`, alamat lengkap, nomor telepon, dan email resmi).
2. **`visiMisi`**: Teks kalimat Visi sekolah serta 5 poin Misi sekolah.
3. **`stats`**: Array data statistik cepat (Jumlah Siswa `480+`, Guru `32`, Akreditasi `A`, Tahun Berdiri `1969`).
4. **`facilities`**: Array 23 sarana dan prasarana (Ruang Kelas 41, Lab Komputer 2, Perpustakaan 2, Ruang UKS, Aula, Lapangan Olahraga, dll) lengkap dengan jumlah dan ikon Lucide-nya.
5. **`news`**: Array artikel berita kegiatan sekolah (judul, tanggal, cuplikan/excerpt, kategori, dan gambar).
6. **`achievements`**: Array daftar kejuaraan dan prestasi siswa (judul lomba, nama siswa/tim, tingkat kejuaraan, bulan, tahun, dan pihak penyelenggara).
7. **`extracurricular`**: Array 6 kegiatan ekskul (Pramuka, Futsal, Tari Tradisional, Paduan Suara, Renang, Seni Lukis) lengkap dengan jadwal dan nama pembina.
8. **`staffRecap` & `studentRecap`**: Data statistik distribusi guru (PNS/Honorer, tingkat pendidikan S2/S1/D3) dan data jumlah siswa per rombel/kelas (Kelas 1 s.d. 6).
9. **`learningTools`**: Array modul ajar Kurikulum Merdeka, panduan diferensiasi, template word, serta link generator AI untuk guru.
10. **`navLinks`**: Array daftar label dan ID navigasi untuk menu atas (`beranda`, `profil`, `berita`, `prestasi`, `ekskul`, `rekap`, `perangkat`).

---

### D. Bedah Komponen Layout (`Navbar.jsx` & `Footer.jsx`)

#### 1. `src/components/layout/Navbar.jsx` (Header Navigasi Pintar)
Komponen ini sangat krusial untuk pengalaman pengguna (*User Experience*). Di dalamnya terdapat beberapa logika utama:

* **State `scrolled`:** Mengamati scroll layar. Jika pengguna scroll lebih dari 20px, warna background navigasi berubah dari agak transparan menjadi putih bersih lengkap dengan bayangan halus (`shadow-md`).
* **State `activeId` & `IntersectionObserver`:** Logika otomatis yang mengamati elemen bagian mana yang sedang berada di layar pengguna. Jika pengguna scroll sampai ke bagian "Ekstrakurikuler", tombol menu "Ekstrakurikuler" di bagian atas otomatis menyala dengan garis bawah warna aksen (`accent-500`).
* **State `isOpen` (Hamburger Menu):** Mengatur buka/tutup menu navigasi saat website dibuka di smartphone berlayar kecil.
* **Fungsi `scrollTo(id)`:** Menghitung posisi koordinat Y dari elemen yang dituju dan menggeser layar secara halus (*smooth scroll*) minus 64px (agar tidak tertutup tinggi Navbar).

#### 2. `src/components/layout/Footer.jsx` (Kaki Website)
Menampilkan informasi penutup di bagian paling bawah halaman:
* Logo sekolah & ringkasan singkat profil SDN Pakis V.
* Tautan navigasi cepat ke tiap bagian halaman.
* Informasi alamat lengkap, nomor telepon, email, serta peta lokasi.
* Hak cipta resmi (*Copyright*) sekolah.

---

### E. Bedah Komponen UI Pembungkus (`ScrollReveal.jsx` & `SectionHeader.jsx`)

#### 1. `src/components/ui/ScrollReveal.jsx` (Animasi Kemunculan Scroll)
* **Logika Kode:**
  Komponen ini menggunakan API browser `IntersectionObserver`. Ketika komponen ini mulai masuk ke area layar (threshold 12%), kode akan otomatis menambahkan kelas CSS `.visible` yang memicu animasi gerakan halus naik ke atas (*fade-up animation*).
* **Fitur `delay`:** Mendukung opsi jeda waktu (misalnya delay 100ms, 200ms, 300ms) sehingga kartu-kartu berita atau foto ekskul dapat muncul secara berurutan (*staggered effect*).

#### 2. `src/components/ui/SectionHeader.jsx` (Judul Bagian Halaman)
* **Logika Kode:** Komponen standar yang menerima prop `title` (judul) dan `subtitle` (sub-judul).
* **Fungsi:** Memastikan seluruh judul bagian (seperti judul "Profil Sekolah", "Berita Terbaru", "Prestasi Siswa") memiliki bentuk tulisan, ukuran font, dan garis hiasan warna yang seragam di seluruh website.

---

### F. Bedah 8 Komponen Halaman Utama (`src/pages/`)

Seluruh konten website dipecah menjadi 8 file komponen halaman yang independen:

1. **`Beranda.jsx` (Halaman Utama / Hero Banner):**
   * Menampilkan spanduk ucapan selamat datang dengan tombol aksi (*Call to Action*).
   * Menampilkan ucapan sambutan resmi dari Kepala Sekolah (IRAWAN MUHANIK, M.Pd).
   * Menampilkan 4 kartu statistik ringkas (Jumlah Siswa, Guru, Akreditasi A, Tahun Berdiri 1969).

2. **`Profil.jsx` (Visi, Misi, & Fasilitas):**
   * Menampilkan kartu besar berisi Teks Visi Sekolah dan 5 poin Misi.
   * Menampilkan grid 23 sarana prasarana sekolah lengkap dengan ikon khusus dan jumlah unitnya.

3. **`MediaAR.jsx` (Inovasi Media Pembelajaran WebAR: Garuda Pancasila):**
   * **Inovasi Pendidikan Digital Sekolah:** Media pembelajaran imersif Kurikulum Merdeka (P5) tanpa perlu download aplikasi dari PlayStore/AppStore.
   * **4 Mode Interaktif:**
     1. *Eksplorasi 3D & Suara*: Membedah makna 5 sila dan filosofi kemerdekaan 17-8-1945 dilengkapi teknologi *Text-to-Speech* narasi suara bahasa Indonesia.
     2. *Kamera WebAR Interaktif*: Menggunakan kamera laptop/HP untuk memproyeksikan lambang Garuda di meja siswa dengan kontrol geser, putar, perbesar/perkecil, efek kilau emas, dan tombol foto bersama AR (*snapshot watermark*).
     3. *Native AR HP (ARCore / QuickLook)*: Menggunakan komponen Google `<model-viewer>` dan barcode QR untuk menampilkan model 3D nyata (`garuda.glb`) berdiri di lantai/meja fisik ruangan.
     4. *Kuis Pendidikan Pancasila*: Evaluasi pemahaman siswa dengan penilaian instan dan pembahasan guru.

4. **`Berita.jsx` (Berita & Kegiatan):**
   * Menampilkan daftar berita sekolah dalam bentuk kartu informasi.
   * Dilengkapi badge kategori (Kegiatan, Prestasi, Kurikulum) dan tanggal publikasi.

5. **`Prestasi.jsx` (Penghargaan Siswa):**
   * Menampilkan deretan kartu prestasi kejuaraan yang diraih siswa.
   * Dilengkapi badge warna penanda tingkat kejuaraan (Warna Biru = Kecamatan, Warna Hijau = Kota, Warna Ungu = Provinsi).

6. **`Ekskul.jsx` (Ekstrakurikuler):**
   * Menampilkan grid kegiatan ekstrakurikuler sekolah.
   * Menyajikan informasi jadwal latihan rutin, nama guru pembina, dan deskripsi kegiatan.

7. **`Rekap.jsx` (Visualisasi Data Grafik Recharts):**
   * Mengolah data `staffRecap` dan `studentRecap` dari `content.js`.
   * Menampilkan **Grafik Batang (*Bar Chart*)** untuk jumlah siswa per kelas.
   * Menampilkan **Diagram Lingkaran/Batang** untuk rekapitulasi kualifikasi pendidikan dan status kepegawaian guru (PNS vs Honorer).

8. **`Perangkat.jsx` (Pusat Unduhan Modul Ajar):**
   * Menyediakan kartu-kartu dokumen modul pembelajaran Kurikulum Merdeka yang bisa diunduh langsung dalam format PDF/DOCX oleh para guru atau wali murid.
   * Menyediakan tautan ke alat bantu generator modul ajar AI.

---

## 4. Panduan Hosting Menggunakan Netlify (dan Alternatifnya)

### Apa itu Netlify?
**Netlify** adalah platform layanan *cloud hosting* modern yang dirancang khusus untuk meng-host aplikasi web front-end modern seperti React, Vite, Vue, atau web statis lainnya.

### Mengapa Netlify Gratis?
Netlify menggunakan model bisnis *Freemium*. Untuk penggunaan skala kecil hingga menengah (seperti website sekolah, portfolio, atau profil institusi), Netlify memberikan **Paket Gratis (Starter Plan)** dengan kuota yang sangat besar:
* Bandwidth gratis hingga 100 GB per bulan (setara kapasitas jutaan pengunjung per bulan untuk web sekolah).
* Pemrosesan build gratis hingga 300 menit per bulan.
* Sertifikat Keamanan SSL gratis (HTTPS / Ikon gembok hijau di browser).

---

### Panduan Cara Upload Website ke Netlify

Ada dua metode mudah untuk mengunggah website ini ke Netlify:

#### Metode A: Hubungkan ke GitHub (Otomatis & Direkomendasikan)
1. Simpan seluruh kode proyek ini ke dalam repositori **GitHub**.
2. Buka situs [netlify.com](https://www.netlify.com) dan buat akun (bisa login dengan akun GitHub).
3. Klik tombol **"Add new site"** -> **"Import an existing project"**.
4. Pilih **GitHub** dan pilih repositori `sdn-pakis-v`.
5. Isikan konfigurasi build berikut:
   * **Build command:** `npm run build`
   * **Publish directory:** `dist`
6. Klik **"Deploy site"**.
7. Dalam waktu 1-2 menit, Netlify akan selesai memproses dan memberikan alamat website resmi (contoh: `sdnpakisv.netlify.app`).

#### Metode B: Drag and Drop Folder `dist` (Manual Tanpa GitHub)
1. Di komputer lokal, buka terminal dan jalankan perintah:
   ```bash
   npm run build
   ```
2. Tunggu hingga selesai, maka akan tercipta folder bernama `dist/` di dalam direktori proyek.
3. Login ke [netlify.com](https://www.netlify.com).
4. Di halaman utama Netlify, cari area bernama **"Sites"**, lalu *drag & drop* (seret dan lepas) folder `dist/` ke area tersebut.
5. Netlify akan langsung mengunggah dan mempublikasikan website dalam beberapa detik.

---

### Pengaturan Khusus Netlify (`_redirects` / `netlify.toml`)
Karena website ini berbasis *Single Page Application (SPA)* dengan React Router, kadang jika pengguna me-refresh halaman pada URL tertentu, server Netlify bisa menampilkan error 404.

Untuk mencegah hal tersebut, kita menambahkan berkas bernama `_redirects` di folder `public/` dengan isi:
```text
/*    /index.html   200
```
Atau membuat berkas `netlify.toml` di direktori utama dengan isi:
```toml
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```
Artinya: *Seluruh permintaan rute halaman harus diarahkan kembali ke `index.html` agar React yang mengaturnya.*

---

## 5. Biaya Operasional & Keberlangsungan Jangka Panjang

Salah satu keunggulan utama dari arsitektur website ini adalah **efisiensi biaya operasional**.

### Skenario Gratis (Rp 0 / Tahun)
Jika sekolah memilih opsi gratis sepenuhnya:
* **Hosting:** Menggunakan Netlify Starter Plan (Gratis Rp 0).
* **Domain:** Menggunakan subdomain bawaan Netlify, misalnya: `sdnpakisv.netlify.app`.
* **Sertifikat SSL (HTTPS):** Otomatis Gratis dari Netlify.
* **Total Biaya:** **Rp 0 / Tahun (Gratis Selamanya)**.

---

### Skenario Domain Resmi `.sch.id` (~Rp 150.000 / Tahun)
Jika sekolah ingin menggunakan nama domain resmi sekolah di Indonesia agar terlihat lebih profesional:
* **Hosting:** Tetap Netlify (Gratis Rp 0).
* **Domain Resmi:** Membeli domain `sdnpakisv.sch.id` melalui penyedia domain seperti Niagahoster, Dewaweb, atau Rumahweb.
* **Prosedur:** Daftarkan domain dengan melampirkan Surat Permohonan Kepala Sekolah dan SK Pendirian Sekolah (persyaratan standar domain sekolah).
* **Penyambungan:** Atur DNS (*Domain Name Server*) domain tersebut agar mengarah ke alamat Netlify.
* **Total Biaya:** **Hanya sewa domain sekitar Rp 100.000 – Rp 150.000 / Tahun**.

---

### Apakah Website Tetap Aktif Jika Tidak Ada Pembayaran?

* **Jawab:** **YA, WEBSITE TETAP BISA DIAKSES 24 JAM TANPA HENTI.**
* **Penjelasan:** Karena Netlify tidak menerapkan sistem tagihan untuk paket standar web statis, tidak ada istilah "website di-suspend karena menunggak biaya hosting". Website akan terus aktif selama akun Netlify tidak dihapus.
* **Catatan Khusus jika memakai domain `.sch.id`:** Jika tahun depan sekolah lupa memperpanjang sewa domain `.sch.id`, hanya nama domain `.sch.id` tersebut yang tidak bisa dibuka sementara. Namun website dasarnya **tetap aman dan aktif** di alamat `sdnpakisv.netlify.app`.

---

*Dokumen ini dibuat secara resmi untuk menunjang dokumentasi dan panduan serah terima website SDN Pakis V Surabaya.*

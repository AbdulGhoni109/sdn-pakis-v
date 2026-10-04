# 📘 BUKU PANDUAN LENGKAP PROYEK
# WEBSITE & MEDIA PEMBELAJARAN WEBAR GARUDA PANCASILA
### SDN Pakis V/372 Surabaya

---

## DAFTAR ISI
1. **Ringkasan Proyek & Tujuan Pembuatan Media**
2. **Daftar Lengkap Teknologi & Perangkat yang Digunakan (Alat & Bahan)**
3. **Alur Kronologis Pembuatan: Apa Dulu yang Dibangun, Lalu Kelanjutannya Bagaimana?**
4. **Cara Kerja Teknis Setiap Fitur AR (Bagaimana Fitur Tersebut Berjalan)**
5. **Panduan Lengkap Penggunaan Fitur AR (Untuk Guru & Siswa di Kelas)**
6. **Tanya-Jawab Teknis, Pemecahan Masalah (Troubleshooting) & Biaya Perawatan**

---

## 1. Ringkasan Proyek & Tujuan Pembuatan Media

### Apa Sebenarnya Proyek Ini?
Proyek ini adalah pembuatan **Website Resmi Profil SDN Pakis V Surabaya** yang di dalamnya diintegrasikan sebuah modul inovasi khusus berupa **Media Pembelajaran Interaktif Berbasis WebAR (Web Augmented Reality)** dengan materi **Simbol & Lambang Negara Garuda Pancasila**.

### Mengapa Media Ini Dibuat?
- **Masalah Pembelajaran Tradisional:** Di sekolah dasar, pembelajaran Pendidikan Pancasila materi simbol negara umumnya hanya mengandalkan buku paket teks atau gambar 2D datar di dinding. Siswa dituntut menghafal secara pasif tanpa melihat visual nyata.
- **Karakteristik Siswa SD (Tahap Operasional Konkret):** Berdasarkan psikologi perkembangan anak, siswa usia sekolah dasar (7–12 tahun) sangat membutuhkan media pembelajaran yang visual, nyata, dan konkret agar materi tidak terasa abstrak dan membosankan.
- **Solusi yang Dihadirkan:** Website ini menghadirkan replika patung 3D Garuda Pancasila yang bisa diputar 360 derajat, dilengkapi pembaca suara otomatis, serta dapat dimunculkan langsung ke dunia nyata (di atas meja belajar atau lantai kelas) menggunakan kamera HP/laptop siswa melalui teknologi Augmented Reality (AR) tanpa perlu mengunduh aplikasi tambahan dari PlayStore/AppStore.

---

## 2. Daftar Lengkap Teknologi & Perangkat yang Digunakan

Agar jelas *"dibangun pakai apa saja"*, berikut adalah rincian seluruh perangkat lunak, bahasa pemrograman, pustaka (*library*), dan teknologi yang digunakan dalam proyek ini beserta fungsinya masing-masing dalam bahasa yang mudah dipahami:

```text
====================================================================================
                        ARSITEKTUR TEKNOLOGI PROYEK
====================================================================================
[ Antarmuka Web ]  --> React 19 + Vite + Tailwind CSS + Lucide Icons
[ Pengolah 3D ]    --> Blender (Format .GLB / glTF 2.0) + Three.js + Model-Viewer
[ Kamera & AR ]    --> WebAR + WebRTC (getUserMedia API) + HTML5 Canvas
[ Audio & Kuis ]   --> Web Speech API (Text-to-Speech) + React State Management
[ Server & Cloud ] --> Node.js + Git + GitHub Repository + Netlify Cloud (HTTPS)
====================================================================================
```

### A. Perangkat Lunak & Bahasa Pemrograman Website (Frontend)
1. **HTML5 (Hypertext Markup Language versi 5):**
   - *Fungsi:* Menjadi kerangka dasar seluruh halaman web (menentukan letak judul, teks, gambar, video kamera, tombol navigasi, dan kanvas 3D).
2. **CSS3 & Tailwind CSS (Sistem Tata Letak & Desain Modern):**
   - *Fungsi:* Mengatur keindahan tampilan web—mulai dari warna Biru Resmi (*Navy Blue*) dan Emas Kenegaraan (*Golden Amber*), ukuran tulisan, animasi transisi yang halus, hingga tata letak responsif (tampilan web otomatis menyesuaikan ukuran layar HP, tablet, maupun layar proyektor laptop).
3. **JavaScript (ES6+) & JSX:**
   - *Fungsi:* Bahasa pemrograman yang memberi "otak" dan logika interaktivitas pada website. Mengatur agar tombol bisa diklik, menghitung skor kuis, mengaktifkan kamera, dan memutar patung 3D saat disentuh jari.
4. **React 19 (Pondasi Pemrograman Berbasis Komponen):**
   - *Fungsi:* Teknologi tampilan web modern buatan Meta (Facebook). Cara kerjanya seperti menyusun balok lego mandiri (*komponen*). Website dipecah menjadi komponen Profil, komponen Berita, komponen Kamera AR, komponen 3D Explorer, dan komponen Kuis. Jika ingin mengubah satu bagian, bagian lain tidak akan rusak.
5. **Vite (Mesin Perakit Kilat / Build Tool):**
   - *Fungsi:* Alat pengemas kode generasi baru yang merapikan dan mengompresi ribuan baris kode menjadi file kecil siap tayang. Vite membuat website memuat halaman dalam hitungan milidetik sehingga sangat hemat kuota dan tidak lemot di HP siswa.
6. **Lucide React (Ikonografi Visual):**
   - *Fungsi:* Menyediakan ikon-ikon interaktif yang ramah anak, seperti ikon kamera, speaker suara, rotasi putar, panah maju-mundur, centang hijau kuis, dan tombol reset.

---

### B. Teknologi Pembuatan & Penampil 3D
1. **Perangkat Lunak Pemodelan 3D (Blender / 3D Modeling Software):**
   - *Fungsi:* Software untuk membentuk geometri patung burung Garuda Pancasila secara digital—mulai dari sayap, ekor, cakar pita Bhinneka Tunggal Ika, hingga perisai 5 sila di dada.
2. **Format Berkas `.GLB` (glTF 2.0 / GL Transmission Format):**
   - *Fungsi:* Format standar internasional untuk benda 3D di internet (ibarat format MP3 untuk musik atau MP4 untuk video). File 3D Garuda dioptimalkan dan dikompresi hingga ukurannya sangat kecil, yaitu **hanya ~580 KB** (kurang dari 1 MB), sehingga sangat cepat diunduh meski sinyal internet di sekolah pas-pasan.
3. **Three.js (Mesin Grafis 3D Web):**
   - *Fungsi:* Pustaka grafis JavaScript yang menghitung pencahayaan, bayangan, kedalaman ruang, dan sudut pandang kamera 3D di browser tanpa memerlukan komputer dengan VGA mahal.
4. **Google `<model-viewer>` (Komponen Resmi Web 3D & AR dari Google):**
   - *Fungsi:* Komponen web resmi yang memungkinkan browser menampilkan patung 3D secara interaktif sekaligus memicu sensor AR pada smartphone (mendukung teknologi Google ARCore di Android dan Apple Quick Look di iPhone).

---

### C. Teknologi Fitur Kamera & Augmented Reality (WebAR)
1. **WebAR (Web Augmented Reality):**
   - *Fungsi:* Teknologi AR yang berjalan langsung di dalam browser web (Google Chrome atau Safari). Berbeda dengan AR lama yang mewajibkan pengguna mengunduh aplikasi 100–300 MB dari Google PlayStore, WebAR cukup dibuka lewat link URL website.
2. **WebRTC & API Akses Kamera (`navigator.mediaDevices.getUserMedia`):**
   - *Fungsi:* Jalur izin resmi browser untuk menyalakan kamera HP atau webcam laptop siswa secara *real-time*. Seluruh pemrosesan video dilakukan langsung di dalam HP pengguna (tidak ada video yang dikirim ke internet), sehingga 100% aman bagi privasi anak-anak.
3. **HTML5 `<canvas>` API (Mesin Penggabung Foto):**
   - *Fungsi:* Ketika tombol "Foto Bersama AR" ditekan, mesin Canvas secara otomatis menangkap rekaman video kamera dan menumpuk gambar Garuda di atasnya, lalu menyatukannya menjadi sebuah file foto format PNG yang langsung terunduh ke galeri HP siswa.

---

### D. Fitur Suara Otomatis & Logika Kuis
1. **Web Speech API (Text-to-Speech Otomatis Bahasa Indonesia):**
   - *Fungsi:* Fitur cerdas bawaan browser yang mengubah tulisan naskah menjadi suara manusia asli berbahasa Indonesia (`id-ID`). Suara ini ramah anak dan otomatis membacakan makna 5 sila saat tombol speaker ditekan, tanpa perlu menyewa pengisi suara atau membayar langganan server audio.
2. **React State Management (`useState`, `useEffect`, `useRef`):**
   - *Fungsi:* Sistem memori internal web yang mencatat secara akurat: tab mana yang sedang aktif, berapa soal yang sudah dijawab siswa, berapa skor nilai yang diraih, serta koordinat letak geser (*drag*) lambang Garuda di meja.

---

### E. Lingkungan Pengembangan & Server Publikasi Online (Hosting)
1. **Node.js & NPM (Node Package Manager):**
   - *Fungsi:* Lingkungan kerja di komputer pengembang untuk menginstal dan mengelola pustaka-pustaka pendukung proyek secara rapi.
2. **Git & GitHub (Repositori Kode Sumber):**
   - *Fungsi:* Lemari arsip digital di internet (`AbdulGhoni109/sdn-pakis-v`) yang menyimpan seluruh kode program proyek secara aman lengkap dengan riwayat revisinya.
3. **Netlify Cloud Hosting (Server Siar 24 Jam):**
   - *Fungsi:* Server internet modern yang menyiarkan website ini ke seluruh dunia secara otomatis selama 24 jam sehari. Dilengkapi tautan aman resmi berkeamanan gembok hijau (**HTTPS**).
4. **Total Biaya Pengadaan & Pemeliharaan:**
   - **Rp 0 (100% Gratis Seumur Hidup)**. Tidak ada API berbayar, tidak ada langganan server, dan tidak ada biaya perawatan bulanan.

---

## 3. Alur Kronologis Pembuatan: Apa Dulu yang Dibangun, Lalu Kelanjutannya Bagaimana?

Berikut adalah alur langkah kerja nyata dari hari pertama sampai website terbit secara online:

```text
TAHAP 1: Perencanaan Materi Kurikulum & Profil Sekolah
   ↓
TAHAP 2: Pembuatan Fondasi & Struktur Dasar Web (Vite + React)
   ↓
TAHAP 3: Pembuatan Halaman Informasi Profil Sekolah SDN Pakis V
   ↓
TAHAP 4: Pemodelan & Kompresi Aset Patung 3D Garuda Pancasila (.GLB)
   ↓
TAHAP 5: Perancangan Basis Data Edukasi (Makna Sila, Anatomi & Kuis)
   ↓
TAHAP 6: Pemrograman 4 Modul Fitur Pembelajaran Media AR
   ↓
TAHAP 7: Integrasi Modul AR ke Navigasi Website Utama
   ↓
TAHAP 8: Pengujian di Berbagai Perangkat (Laptop, HP Android & iPhone)
   ↓
TAHAP 9: Peluncuran ke Internet Melalui GitHub & Netlify (Deploy)
```

---

### Rincian Lengkap Setiap Tahap Pembangunan:

#### Tahap 1: Perencanaan Materi Kurikulum & Profil Sekolah
- **Apa yang dibuat pertama kali?**
  Mengumpulkan seluruh data teks profil resmi SDN Pakis V/372 Surabaya (Visi, Misi, data fasilitas, profil guru, berita sekolah, ekstrakurikuler, dan prestasi).
- **Materi Edukasi:**
  Menyelaraskan materi dengan Kurikulum Merdeka Fase B (Kelas 4 SD) muatan Pendidikan Pancasila. Menulis naskah arti lambang 5 sila, contoh perilaku baik di lingkungan sekolah, makna angka kemerdekaan pada bulu burung Garuda (17-8-1945), serta membuat 4 butir soal evaluasi pemahaman anak.

#### Tahap 2: Pembuatan Fondasi & Struktur Dasar Web
- Menginisiasi (*setup*) proyek web baru di komputer lokal menggunakan **Vite** dan **React 19**.
- Memasang dan mengonfigurasi **Tailwind CSS** untuk standarisasi warna, tata letak, dan jenis font yang mudah dibaca anak (*Plus Jakarta Sans*).
- Membuat struktur direktori proyek yang teratur:
  - `src/components/` : Tempat komponen tombol, kartu informasi, dan modul AR.
  - `src/pages/` : Tempat halaman-halaman web (Beranda, Profil, Media AR, Berita, dll).
  - `src/data/` : Tempat naskah teks sekolah dan bank soal.
  - `public/models/` : Tempat menyimpan file patung 3D `.glb`.
  - `public/images/` : Tempat menyimpan foto sekolah dan logo lambang Garuda.

#### Tahap 3: Pembuatan Halaman Informasi Profil Sekolah
- Sebelum masuk ke AR, bagian website sekolah dibangun terlebih dahulu:
  1. **Navbar (Menu Atas):** Menu navigasi yang responsif dan fleksibel.
  2. **Beranda (Hero Section):** Menampilkan sambutan kepala sekolah dan foto sekolah.
  3. **Profil & Visi Misi:** Menampilkan sejarah sekolah dan komitmen mutu pendidikan.
  4. **Fasilitas & Tenaga Pendidik:** Menampilkan sarana belajar dan profil dewan guru.
  5. **Berita, Prestasi & Ekstrakurikuler:** Menampilkan prestasi siswa dan kegiatan pramuka/ekskul.
  6. **Footer:** Bagian bawah website berisi alamat, kontak, dan tautan resmi sekolah.

#### Tahap 4: Pemodelan & Kompresi Aset Patung 3D Garuda
- Menyiapkan objek patung 3D burung Garuda Pancasila dengan tekstur warna emas, perisai merah-putih di dada, dan pita cengkeraman kaki bertuliskan *"Bhinneka Tunggal Ika"*.
- **Optimasi Ukuran File:** Mengompresi file 3D ke format standar web `.glb` dengan ukuran **~580 KB** agar tidak membebani memori HP siswa saat diakses.
- Menyiapkan gambar lambang Garuda resolusi tinggi tanpa latar belakang (transparan format PNG dan SVG) untuk digunakan pada fitur kamera AR.

#### Tahap 5: Perancangan Basis Data Edukasi (`pancasilaData.js`)
- Seluruh teks materi pembelajaran disimpan ke dalam file data terstruktur (`src/data/pancasilaData.js`):
  - *Data 5 Sila:* Lambang bintang, rantai, beringin, banteng, padi-kapas; bunyi sila, makna perisai, contoh perilaku konkret di sekolah, dan kalimat narasi suara.
  - *Data Anatomi Bulu:* 17 bulu sayap, 8 bulu ekor, 19 bulu pangkal ekor, 45 bulu leher (tanggal proklamasi 17 Agustus 1945).
  - *Data Kuis:* 4 butir soal pilihan ganda, kunci jawaban, dan kotak penjelasan guru.

#### Tahap 6: Pemrograman 4 Modul Fitur Pembelajaran Media AR
Setelah aset dan data siap, dibuat halaman utama `MediaAR.jsx` yang menaungi 4 komponen sub-fitur:
1. **Membangun Mode 1 (ThreeDExplorer.jsx):**
   Menampilkan patung 3D Garuda di layar yang bisa diputar 360 derajat. Menghubungkannya dengan tombol 5 sila dan tombol anatomi bulu. Memasang **Web Speech API** agar saat tombol speaker ditekan, suara narasi otomatis membacakan materi dalam bahasa Indonesia.
2. **Membangun Mode 2 (WebcamARViewer.jsx):**
   Membangun fitur kamera interaktif:
   - Menulis kode permintaan izin kamera ke browser (`getUserMedia`).
   - Menampilkan video kamera langsung di layar.
   - Meletakkan gambar transparan lambang Garuda di atas rekaman video.
   - Membuat fungsi sentuh/geser (*drag and drop*) sehingga siswa bisa menggeser lambang Garuda ke meja belajarnya.
   - Menambahkan slider pengatur ukuran (skala), slider putaran (rotasi), dan efek pendaran cahaya emas (*glow*).
   - Menambahkan tombol "Foto Bersama AR" yang menggunakan Canvas API untuk menggabungkan video dan lambang Garuda menjadi foto PNG yang langsung tersimpan di galeri HP.
3. **Membangun Mode 3 (NativeModelViewer.jsx):**
   Memasang komponen `<model-viewer>` Google. Mode ini mendeteksi permukaan lantai atau meja kelas melalui sensor AR smartphone (Google ARCore di Android / QuickLook di iPhone), sehingga patung Garuda 3D dapat berdiri tegak di lantai kelas secara nyata. Dilengkapi fitur Kode QR agar siswa di depan laptop guru bisa langsung scan dan membuka mode ini di HP mereka.
4. **Membangun Mode 4 (PancasilaQuiz.jsx):**
   Membangun kuis pilihan ganda 4 soal interaktif. Dilengkapi umpan balik instan (tombol hijau jika benar, merah jika salah), kotak pembahasan guru, indikator progres, kartu skor akhir (0–100), dan tombol pengulangan kuis.

#### Tahap 7: Integrasi Modul AR ke Navigasi Website Utama
- Memasukkan komponen `<MediaAR />` ke dalam file induk `App.jsx`, diletakkan secara strategis di antara seksi Profil Sekolah dan seksi Berita.
- Menambahkan tautan "Media AR" ke menu navigasi Navbar dan Footer sehingga siswa maupun guru dapat mengaksesnya dalam sekali klik dari halaman mana pun.

#### Tahap 8: Pengujian di Berbagai Perangkat (Testing & Perbaikan Tampilan)
- Diuji pada layar komputer/laptop menggunakan browser Google Chrome, Safari, dan Microsoft Edge.
- Diuji langsung pada berbagai smartphone Android dan iPhone:
  - Memastikan kamera belakang langsung menyala dengan lancar.
  - Memperbaiki kontras warna tombol: misalnya tombol *"Nyalakan Kamera AR"* diubah menjadi warna emas solid dengan teks hitam pekat agar tidak menyatu dengan warna latar belakang.
  - Memastikan respon sentuhan jari saat memutar 3D dan menggeser lambang di layar sentuh HP terasa mulus dan tidak lambat.

#### Tahap 9: Peluncuran ke Internet (Deployment ke GitHub & Netlify)
- Seluruh file proyek dikirim ke repositori GitHub (`AbdulGhoni109/sdn-pakis-v`).
- Server cloud Netlify dihubungkan langsung ke repositori GitHub tersebut.
- Setiap kali ada berkas baru atau perbaikan, Netlify secara otomatis merakit ulang proyek dalam hitungan detik dan menyiarkannya ke alamat web resmi berkeamanan HTTPS yang bisa dibuka gratis oleh siswa kapan pun dari rumah.

---

## 4. Cara Kerja Teknis Setiap Fitur AR (Bagaimana Fitur Tersebut Berjalan)

Agar dapat memahami bagaimana masing-masing fitur bekerja di balik layar, berikut penjelasannya:

```text
+-----------------------------------------------------------------------------------+
| FITUR 1: EKSPLORASI 3D & SUARA                                                    |
| Browser memuat file .GLB -> Three.js merender objek 3D -> Siswa menggeser layar   |
| -> Objek berputar 360° -> Klik lambang sila -> Suara narasi berbahasa Indonesia   |
+-----------------------------------------------------------------------------------+
| FITUR 2: KAMERA WEBAR INTERAKTIF                                                  |
| Izin kamera disetujui -> Video live tampil di layar -> Lambang Garuda ditempel    |
| di atas video -> Siswa menggeser lambang ke meja belajar -> Klik tombol foto      |
| -> Canvas API menyatukan video + gambar -> Foto otomatis tersimpan di galeri HP   |
+-----------------------------------------------------------------------------------+
| FITUR 3: 3D NYATA DI RUANGAN (NATIVE WEBAR)                                       |
| Scan QR Code di HP -> Google Model-Viewer mendeteksi lantai/meja melalui sensor   |
| kamera & gyroscope HP -> Patung 3D Garuda muncul berdiri di atas meja nyata       |
| -> Siswa bisa berjalan mengelilingi patung dari sisi depan, samping, dan belakang |
+-----------------------------------------------------------------------------------+
| FITUR 4: KUIS PENDIDIKAN PANCASILA                                                |
| Siswa memilih jawaban A/B/C/D -> Sistem memvalidasi detik itu juga -> Tombol      |
| berubah hijau/merah -> Kotak penjelasan guru muncul -> Skor akhir dihitung        |
+-----------------------------------------------------------------------------------+
```

---

## 5. Panduan Lengkap Penggunaan Fitur AR (Untuk Guru & Siswa di Kelas)

Berikut adalah panduan langkah demi langkah saat memanfaatkan menu **Media AR** dalam kegiatan belajar-mengajar di kelas:

### Mode 1: Eksplorasi 3D & Suara
- **Tujuan Pembelajaran:** Mengamati bentuk fisik lambang negara secara menyeluruh dari segala sisi dan mendengarkan penjelasan audio.
- **Langkah Penggunaan:**
  1. Klik tab **"Eksplorasi 3D & Suara"**.
  2. Sentuh dan geser patung Garuda di layar untuk memutarnya 360 derajat. Gunakan dua jari untuk memperbesar (*zoom in*).
  3. Klik salah satu dari 5 lambang sila di bagian bawah layar (Bintang, Rantai, Beringin, Banteng, Padi & Kapas).
  4. Baca makna lambang dan contoh pengamalannya di lingkungan sekolah.
  5. Tekan tombol speaker **"Dengarkan Narasi Suara"** agar website membacakan penjelasan materi dengan suara ramah anak secara otomatis.
  6. Klik tab **"Anatomi 17-8-1945"** untuk mempelajari rahasia jumlah bulu sayap, ekor, dan leher burung Garuda.

---

### Mode 2: Kamera WebAR Interaktif
- **Tujuan Pembelajaran:** Menghadirkan lambang Garuda tepat di atas meja belajar siswa menggunakan kamera dan mengambil foto hasil karya belajar.
- **Langkah Penggunaan:**
  1. Klik tab **"Kamera WebAR Interaktif"**.
  2. Tekan tombol emas besar: **"Nyalakan Kamera AR"**.
  3. Ketika browser memunculkan pertanyaan izin: *"Izinkan website mengakses kamera Anda?"*, pilih **"Izinkan" (Allow)**.
  4. Arahkan kamera HP ke meja belajar atau lantai ruang kelas.
  5. Lambang Garuda akan muncul melayang di atas rekaman kamera:
     - **Geser Posisi:** Sentuh dan tahan lambang Garuda, lalu geser ke titik meja yang diinginkan.
     - **Atur Ukuran:** Geser slider *"Ukuran Lambang"* untuk membesarkan atau mengecilkan.
     - **Atur Sudut:** Geser slider *"Rotasi Derajat"* untuk memutar kemiringan lambang.
     - **Efek Cahaya:** Beri centang pada opsi *"Efek Cahaya Emas"* agar lambang berpendar cerah.
  6. Tekan tombol hijau **"Foto Bersama AR"**: Foto di layar akan langsung dijepret dan diunduh otomatis ke galeri HP siswa sebagai portofolio belajar.
  7. *Catatan:* Jika perangkat tidak memiliki kamera (misal di lab komputer lama), siswa dapat menekan tombol **"Gunakan Simulasi Meja"** untuk tetap belajar menggunakan meja virtual.

---

### Mode 3: 3D Nyata di Ruangan (Native AR HP)
- **Tujuan Pembelajaran:** Memproyeksikan patung 3D Garuda berdimensi nyata berdiri di lantai kelas menggunakan sensor Augmented Reality smartphone modern.
- **Langkah Penggunaan:**
  1. Buka website di HP. Jika guru sedang menampilkan web di layar laptop kelas, siswa cukup mengarahkan kamera HP ke **Kode QR** yang ada di layar untuk langsung membuka halaman di HP mereka.
  2. Klik tab **"3D Nyata di Ruangan"**.
  3. Tekan tombol emas: **"📱 Tampilkan AR di Ruangan Nyata"**.
  4. Kamera HP akan membuka mode AR:
     - Arahkan kamera HP ke lantai atau meja kelas yang datar dan berpenerangan cukup.
     - Gerakkan HP perlahan memutar agar sensor smartphone mengenali permukaan meja/lantai.
     - Patung 3D Garuda berukuran nyata akan muncul berdiri tegak di atas meja atau lantai kelas!
     - Siswa dapat berjalan mendekat atau mengitari patung dari sisi depan, samping, dan belakang seolah-olah patung tersebut ada di hadapan mereka.

---

### Mode 4: Kuis Pendidikan Pancasila
- **Tujuan Pembelajaran:** Melakukan evaluasi pemahaman mandiri setelah mengeksplorasi materi.
- **Langkah Penggunaan:**
  1. Klik tab **"Kuis Pendidikan Pancasila"**.
  2. Baca pertanyaan soal dan pilih salah satu pilihan jawaban (A, B, C, atau D).
  3. Sistem langsung memberi respons detik itu juga: tombol hijau jika benar atau merah jika salah, disertai **Kotak Penjelasan Guru** yang menerangkan alasan materi tersebut.
  4. Klik tombol **"Lanjut ke Soal Berikutnya"** hingga soal nomor 4 selesai.
  5. Kartu hasil belajar akan tampil memuat skor akhir (skala 0–100), jumlah jawaban benar, serta tombol **"Ulangi Kuis"** jika siswa ingin mencoba kembali.

---

## 6. Tanya-Jawab Teknis, Pemecahan Masalah (Troubleshooting) & Biaya Perawatan

### 1. Bagaimana jika kamera HP tidak mau menyala saat tombol diklik?
- **Penyebab:** Pengguna biasanya tidak sengaja menekan tombol "Blokir" (*Block*) saat browser meminta izin kamera, atau izin kamera pada aplikasi Google Chrome di pengaturan HP belum aktif.
- **Solusi Langkah demi Langkah:**
  1. Pada aplikasi browser Google Chrome di HP, perhatikan bilah alamat web (URL) di bagian atas.
  2. Klik ikon pengaturan atau gembok di sebelah kiri alamat web.
  3. Pilih menu **"Izin" (Permissions) -> "Kamera" (Camera)**, lalu ubah pilihannya menjadi **"Izinkan" (Allow)**.
  4. Muat ulang (*refresh*) halaman web, lalu tekan kembali tombol "Nyalakan Kamera AR".

### 2. Apakah media ini bisa digunakan di HP lama yang tidak memiliki sensor AR canggih?
- **Sangat bisa.** Inilah alasan utama mengapa media ini dirancang dengan 4 mode belajar berbeda:
  - Jika HP siswa belum memiliki sensor AR ruang (Mode 3), siswa tetap dapat belajar dengan lancar menggunakan **Mode 1 (Eksplorasi 3D & Suara)** dan **Mode 2 (Kamera WebAR Interaktif)** yang kompatibel dengan 99% semua jenis smartphone berlayar sentuh.
  - Bahkan jika siswa tidak memegang HP sama sekali di kelas, guru dapat memandu pembelajaran secara klasikal menggunakan 1 buah laptop dan proyektor kelas.

### 3. Apakah website ini menghabiskan banyak kuota internet siswa?
- **Sangat hemat.** Semua aset grafis dan model 3D di website ini telah dikompresi secara maksimal. Patung 3D Garuda hanya berukuran sekitar **~580 KB** (kurang dari 1 MB), jauh lebih kecil dibandingkan membuka 1 foto di aplikasi Instagram (yang rata-rata memakan kuota 2–5 MB). Sekali website dibuka, seluruh halaman akan tersimpan di memori sementara (*cache*) browser sehingga pembukaan berikutnya berjalan instan tanpa menyedot kuota lagi.

### 4. Apakah pihak sekolah harus mengeluarkan biaya langganan bulanan atau tahunan?
- **Sama sekali tidak ada biaya (100% Gratis Seumur Hidup / Rp 0).**
  - Server siar cloud Netlify menggunakan paket gratis selamanya.
  - Repositori kode tersimpan gratis di GitHub.
  - Suara narasi otomatis menggunakan Web Speech API yang sudah ada di dalam sistem operasi HP/laptop pengguna (bukan API berbayar dari pihak luar).
  - Tidak ada biaya perawatan bulanan yang membebani kas sekolah.

---
*Dokumen ini merupakan panduan teknis dan operasional resmi proyek Website & Media Pembelajaran WebAR SDN Pakis V/372 Surabaya.*

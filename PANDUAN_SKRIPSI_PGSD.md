# 📘 BUKU PANDUAN LENGKAP PROYEK
# WEBSITE & MEDIA PEMBELAJARAN WEBAR GARUDA PANCASILA
### SDN Pakis V/372 Surabaya

---

## DAFTAR ISI
1. **Ringkasan Proyek & Tujuan Media**
2. **Pengertian Teknologi yang Ada di Dalam Website**
3. **Bagaimana Sebenarnya Web & AR Ini Dibuat?**
4. **Alur Pembuatan Proyek (Step-by-Step dari Awal Sampai Online)**
5. **Panduan Lengkap Penggunaan Fitur AR (Untuk Guru & Siswa)**
6. **Tanya-Jawab Teknis Populer (FAQ & Troubleshooting)**

---

## 1. Ringkasan Proyek & Tujuan Media

### Apa Sebenarnya Proyek Ini?
Proyek ini adalah pembuatan **Website Resmi Profil SDN Pakis V Surabaya** yang di dalamnya diintegrasikan sebuah modul inovasi khusus berupa **Media Pembelajaran Interaktif Berbasis WebAR (Web Augmented Reality)** dengan tema **Lambang Negara Garuda Pancasila**.

### Mengapa Media Ini Dibuat?
- **Masalah Pembelajaran Tradisional:** Selama ini pembelajaran materi simbol dan lambang negara di Sekolah Dasar umumnya hanya menggunakan gambar dua dimensi (2D) di buku paket atau poster dinding kelas yang bersifat pasif dan datar.
- **Karakteristik Siswa SD:** Siswa usia sekolah dasar membutuhkan media peraga yang nyata, visual, dan konkret agar materi yang dipelajari tidak abstrak dan mudah diingat.
- **Solusi yang Dihadirkan:** Website ini menghadirkan replika patung 3D Garuda Pancasila yang bisa diputar 360 derajat, bersuara otomatis, serta bisa dimunculkan langsung ke dunia nyata melalui kamera HP/laptop siswa menggunakan teknologi Augmented Reality (AR) tanpa perlu download aplikasi apapun.

---

## 2. Pengertian Teknologi yang Ada di Dalam Website

Semua teknologi yang dipakai di website ini dipilih agar **sangat cepat dibuka, ramah untuk anak-anak, dan 100% gratis tanpa biaya langganan**. Berikut penjelasan fungsi masing-masing teknologi dalam bahasa sederhana:

### A. Teknologi Antarmuka & Tampilan Website
1. **Website Berbasis Web (Bukan Aplikasi PlayStore / AppStore):**
   - *Artinya:* Media ini berbentuk halaman web yang cukup dibuka menggunakan aplikasi browser biasa (Google Chrome, Safari, atau Edge) melalui link URL.
   - *Fungsi & Keuntungan:* Siswa, guru, maupun wali murid tidak perlu mengunduh (*install*) aplikasi berat berukuran ratusan Megabyte yang sering ditolak karena memori HP penuh. Cukup klik link, website langsung terbuka.

2. **React (Pondasi Pemrograman Tampilan):**
   - *Artinya:* Teknologi penyusun tampilan web modern buatan Meta (Facebook) yang cara kerjanya seperti menyusun balok lego.
   - *Fungsi di Proyek:* Halaman web dibagi menjadi balok-balok kecil mandiri (disebut *komponen*), seperti komponen Profil, komponen Berita, komponen Kamera AR, dan komponen Kuis. Jika kita ingin mengubah teks profil sekolah atau soal kuis, kita cukup mengganti balok komponen tersebut tanpa merusak bagian web yang lain.

3. **Vite (Mesin Perakit Kilat):**
   - *Artinya:* Alat pengemas (*bundler*) kode program modern yang bertugas merapikan dan mengecilkan ukuran seluruh file web sebelum diterbitkan ke internet.
   - *Fungsi di Proyek:* Membuat website memuat gambar dan halaman dalam hitungan milidetik sehingga tidak lemot saat dibuka di HP dengan koneksi internet terbatas.

4. **Tailwind CSS (Perias Desain & Tata Letak):**
   - *Artinya:* Sistem penataan gaya (*styling*) tampilan web yang mengatur tata letak, warna, ukuran tulisan, dan animasi.
   - *Fungsi di Proyek:* Menjamin tampilan website rapi dan responsif. Artinya, tata letak otomatis menyesuaikan ukuran layar—baik dibuka di layar laptop guru, tablet, maupun layar HP siswa yang kecil. Tombol-tombol dibuat besar dan berwarna kontras agar nyaman disentuh jari anak-anak.

---

### B. Teknologi 3D & Augmented Reality (AR)
1. **Model 3D Format `.GLB` (Patung Digital Garuda):**
   - *Artinya:* Berkas (*file*) patung digital 3 dimensi. Format `.glb` adalah format standar internasional untuk objek 3D di internet (ibarat format `.mp3` untuk lagu atau `.mp4` untuk video).
   - *Fungsi di Proyek:* Objek Garuda Pancasila memiliki volume ruang nyata (panjang, lebar, tinggi, dan sudut 360 derajat), lengkap dengan perisai 5 sila dan pita Bhinneka Tunggal Ika. Ukuran filenya sudah dioptimalkan dan dikompresi sangat ringan (hanya sekitar ~580 KB) sehingga hemat kuota internet siswa.

2. **Three.js & Google Model-Viewer (Mesin Penampil 3D Web):**
   - *Artinya:* Perangkat lunak khusus penampil 3D di browser yang dikembangkan oleh Google dan komunitas web global.
   - *Fungsi di Proyek:* Menjadikan browser Google Chrome di HP maupun laptop mampu memutar, memperbesar (*zoom*), dan menggerakkan patung Garuda 3D secara mulus tanpa memerlukan kartu grafis (*VGA*) komputer yang mahal.

3. **WebAR (Web Augmented Reality):**
   - *Artinya:* Teknologi yang menggabungkan dunia maya dengan dunia nyata secara langsung melalui kamera browser web.
   - *Fungsi di Proyek:* Ada 2 jenis AR yang disediakan di web ini:
     - **AR Mode Kamera Interaktif (Webcam AR):** Menggunakan kamera laptop atau kamera HP, lalu menempelkan lambang Garuda di atas rekaman video kamera secara live. Siswa bisa menggeser lambang Garuda ke meja belajarnya, memperbesar/memperkecil, memutar posisi, dan memotret hasilnya.
     - **Native AR (3D Nyata di Ruangan):** Memanfaatkan sensor kamera dan sensor gerak (*gyroscope*) pada smartphone canggih (fitur ARCore di Android / QuickLook di iPhone). HP mendeteksi permukaan lantai atau meja kelas secara otomatis, lalu meletakkan patung 3D Garuda berdimensi nyata di atas meja tersebut. Siswa bisa berjalan mengelilingi meja untuk melihat patung Garuda dari sisi depan, samping, maupun belakang.

4. **Webcam Stream (`getUserMedia`):**
   - *Artinya:* Fitur izin akses kamera yang aman di browser.
   - *Fungsi di Proyek:* Ketika pengguna menekan tombol *"Nyalakan Kamera AR"*, browser akan meminta izin sopan kepada pengguna untuk menyalakan kamera. Tidak ada rekaman yang dikirim ke internet, semua pemrosesan video terjadi langsung di dalam perangkat siswa sehingga aman untuk privasi anak.

---

### C. Teknologi Fitur Pendukung Pembelajaran
1. **Web Speech API (Text-to-Speech / Suara Narasi Otomatis):**
   - *Artinya:* Teknologi pintar yang secara otomatis membaca teks tulisan menjadi suara manusia asli berbahasa Indonesia.
   - *Fungsi di Proyek:* Ketika siswa menekan tombol speaker di bawah lambang sila (misal: Sila ke-1 Bintang), website otomatis membacakan makna sila dan contoh perilakunya dengan suara wanita yang ramah. Fitur ini sangat membantu siswa kelas rendah yang belum lancar membaca (mengakomodasi gaya belajar auditori).

2. **Mesin Kuis Interaktif:**
   - *Artinya:* Sistem evaluasi otomatis yang memvalidasi jawaban pilihan ganda siswa seketika.
   - *Fungsi di Proyek:* Siswa langsung tahu apakah jawabannya Benar atau Salah detik itu juga, disertai kotak penjelasan tambahan dari guru dan perolehan skor akhir (skala 100).

---

### D. Teknologi Penyimpanan & Penerbitan Online (Gratis Rp 0)
1. **GitHub (Gudang Arsip Kode Proyek):**
   - *Artinya:* Tempat penyimpanan berkas-berkas proyek website secara aman di awan (*cloud*), lengkap dengan riwayat setiap perubahan file.
2. **Netlify (Server Hosting Cloud):**
   - *Artinya:* Komputer server di internet yang bertugas menyiarkan website ini 24 jam sehari tanpa henti ke seluruh dunia.
   - *Fungsi di Proyek:* Menyediakan link website resmi dengan sertifikat keamanan gembok hijau (**HTTPS**). Server ini menggunakan paket gratis selamanya (*Free Tier*) yang cukup untuk melayani ribuan kunjungan siswa per bulan.
3. **Total Biaya Pemeliharaan:**
   - **Rp 0 (100% Gratis)**. Tidak ada API berbayar, tidak ada database langganan bulanan, dan tidak ada biaya perpanjangan server.

---

## 3. Bagaimana Sebenarnya Web & AR Ini Dibuat?

Berikut penjelasan nyata mengenai bagaimana website dan fitur AR-nya dirakit dari nol:

```text
[ 1. RANCANG KONTEN ]   --> Mengumpulkan materi 5 sila, makna bulu 17-8-1945 & profil sekolah
        ↓
[ 2. SIAPKAN ASET 3D ]  --> Membuat patung digital Garuda .GLB & gambar transparan lambang
        ↓
[ 3. BIKIN KERANGKA WEB]--> Menyusun struktur halaman (Beranda, Profil, Media AR, Berita, dll)
        ↓
[ 4. RAKIT 4 FITUR AR ] --> Memprogram 3D Viewer, Kamera Interaktif, Native AR, & Kuis
        ↓
[ 5. UJI COBA (TESTING)]--> Mengetes di HP & Laptop (cek kamera, tombol, ukuran huruf)
        ↓
[ 6. ONLINE-KAN (DEPLOY)]--> Mengunggah kode ke GitHub dan menyambungkannya ke Netlify
```

### Rincian Proses Pembuatannya:

#### Langkah 1: Merancang Konten & Struktur Informasi
- Materi kurikulum disusun berdasarkan muatan Pendidikan Pancasila tingkat SD (Capaian Pembelajaran Fase B/Kelas 4):
  - Membedah 5 Sila: Bintang Emas, Rantai Baja, Pohon Beringin, Kepala Banteng, serta Padi & Kapas.
  - Menghubungkan contoh pengamalan yang konkret di sekolah (misal: Sila 1 berdoa sebelum belajar, Sila 2 menolong teman yang jatuh, Sila 3 tidak membeda-bedakan suku teman, Sila 4 musyawarah memilih ketua kelas, Sila 5 hidup hemat dan adil).
  - Merangkum filosofi angka kemerdekaan pada bulu Garuda (17 helai sayap, 8 helai ekor, 19 helai pangkal ekor, 45 helai leher).
  - Menyusun 4 butir soal evaluasi pemahaman beserta penjelasannya.

#### Langkah 2: Pembuatan dan Optimasi Aset 3D
- Lambang burung Garuda dibuat dalam bentuk model patung digital 3 dimensi.
- Model ini diwarnai dengan tekstur emas, perisai merah-putih, dan pita cengkeraman bertuliskan "Bhinneka Tunggal Ika".
- Agar file tidak berat saat diakses siswa lewat HP, model tersebut di-*compress* (dikecilkan) ke format `.glb` dengan ukuran sangat ringkas (~580 Kilobyte).
- Disiapkan pula gambar resolusi tinggi berlatar belakang transparan (`.png` dan `.svg`) untuk keperluan mode kamera interaktif.

#### Langkah 3: Perakitan Halaman Website (Frontend)
- Membuat struktur navigasi utama: Beranda, Profil SDN Pakis V, Media AR, Berita Sekolah, Prestasi, Ekstrakurikuler, Rekap Kegiatan, dan Perangkat Belajar.
- Menentukan tema warna visual: Menggunakan kombinasi warna Biru Resmi (*Navy Blue*) dan Emas Kenegaraan (*Golden Amber*), sesuai identitas pendidikan dan lambang Garuda.
- Menggunakan jenis huruf (*font*) *Plus Jakarta Sans* yang bulat, tegas, dan mudah dibaca oleh mata anak-anak.

#### Langkah 4: Perakitan 4 Mode Pembelajaran AR
Bagian Media AR dipecah menjadi 4 tab menu belajar agar siswa dapat memilih sesuai kondisi perangkat yang mereka pegang:
1. **Mode 1 - Eksplorasi 3D & Suara:** Mengintegrasikan model 3D Garuda ke layar. Dibuat sistem tombol sentuh 5 sila. Saat siswa menekan lambang Bintang, layar otomatis menampilkan makna sila ke-1 dan memicu suara narasi audio Indonesia.
2. **Mode 2 - Kamera WebAR Interaktif:** Menghubungkan kamera perangkat ke kanvas layar. Di atas tampilan kamera, diletakkan gambar Garuda yang bisa diatur posisinya (drag & drop menggunakan sentuhan jari atau mouse), diperbesar/perkecil dengan slider ukuran, diputar dengan slider derajat rotasi, dan dilengkapi tombol foto seketika untuk menyimpan gambar ke galeri HP.
3. **Mode 3 - Patung 3D Nyata di Ruangan:** Memasang modul `<model-viewer>` Google yang memiliki kemampuan mengenali bidang datar (meja/lantai) lewat sensor ARCore/QuickLook di smartphone.
4. **Mode 4 - Kuis Pendidikan Pancasila:** Membuat sistem kuis 4 soal pilihan ganda interaktif lengkap dengan sistem perhitungan skor otomatis, batang indikator progres, dan tombol pengulangan kuis.

#### Langkah 5: Pengujian Perangkat (Testing)
- Diuji pada layar laptop (Chrome, Edge, Safari).
- Diuji pada berbagai smartphone Android dan iPhone: memastikan kamera langsung menyala saat diizinkan, tombol tidak tumpang tindih, dan tulisan tidak kekecilan.
- Memastikan tombol-tombol memiliki kontras warna yang tajam (misal tombol kuning emas dengan tulisan hitam pekat) agar tidak menyatu dengan warna latar belakang.

#### Langkah 6: Publikasi ke Internet (Deployment)
- Seluruh file proyek dikirim ke repositori GitHub (`AbdulGhoni109/sdn-pakis-v`).
- Server Netlify dihubungkan langsung ke GitHub tersebut. Setiap kali ada berkas baru atau perbaikan, Netlify secara otomatis merakit ulang dan menyiarkan website versi terbaru dalam hitungan detik.

---

## 4. Alur Pembuatan Proyek (Step-by-Step dari Awal Sampai Online)

Jika diringkas secara kronologis dari hari pertama hingga website online, berikut urutan langkah nyatanya:

| Tahapan | Pekerjaan yang Dilakukan | Hasil yang Didapat |
|---|---|---|
| **Tahap 1: Konsep & Materi** | Mengumpulkan informasi sekolah SDN Pakis V dan materi lambang Garuda Pancasila untuk kelas SD. | Naskah teks profil sekolah, naskah makna 5 sila, dan 4 butir soal kuis. |
| **Tahap 2: Pengolahan Aset** | Menyiapkan logo sekolah, foto kegiatan, serta model 3D Garuda berformat `.glb` dan gambar transparan `.png`. | Berkas aset visual yang siap dimasukkan ke dalam folder proyek. |
| **Tahap 3: Pembuatan Struktur Web** | Menginisiasi proyek web dengan React + Vite + Tailwind CSS. Membuat kerangka halaman dan menu navigasi. | Kerangka dasar website yang sudah bisa dibuka di komputer lokal. |
| **Tahap 4: Pengembangan Fitur AR** | Menulis komponen visual 3D, menghubungkan kamera webcam, memasang suara narasi otomatis (*Text-to-Speech*), dan menyusun kuis interaktif. | Fitur Media AR interaktif lengkap dengan 4 mode belajar yang aktif. |
| **Tahap 5: Desain & Responsivitas** | Menyesuaikan tampilan agar nyaman dilihat di layar HP, tablet, maupun laptop guru. Memperbaiki kontras warna tombol dan teks. | Tampilan website yang rapi dan mudah dioperasikan oleh anak-anak. |
| **Tahap 6: Pengujian (Testing)** | Mengetes fitur kamera di berbagai HP, mencoba kuis, dan memastikan tidak ada eror saat memutar model 3D. | Website berjalan lancar tanpa kendala teknis. |
| **Tahap 7: Peluncuran (Deploy)** | Menyimpan kode ke GitHub dan mempublikasikannya melalui Netlify. | Website resmi memiliki alamat tautan online yang aman (HTTPS) dan bisa diakses gratis oleh siapa saja. |

---

## 5. Panduan Lengkap Penggunaan Fitur AR (Untuk Guru & Siswa)

Bagian ini menjelaskan cara mengoperasikan 4 mode belajar di menu **Media AR**:

```text
===========================================================
               MENU UTAMA: MEDIA AR GARUDA
-----------------------------------------------------------
[Tab 1] Eksplorasi 3D & Suara  --> Putar 360° + Dengarkan Audio
[Tab 2] Kamera Interaktif     --> Tampilkan Garuda di Meja HP
[Tab 3] 3D Nyata di Ruangan   --> Patung AR Berdiri di Lantai
[Tab 4] Kuis Pancasila        --> Uji Pemahaman Mandiri
===========================================================
```

### Mode 1: Eksplorasi 3D & Suara
- **Cocok Untuk:** Pembelajaran klasikal di depan kelas menggunakan proyektor laptop guru, atau eksplorasi mandiri di HP.
- **Cara Menggunakannya:**
  1. Klik tab **"Eksplorasi 3D & Suara"**.
  2. Gunakan jari (di layar sentuh HP) atau kursor mouse (di laptop) untuk menggeser dan memutar patung Garuda 3D ke segala arah (360 derajat). Gunakan dua jari untuk memperbesar (*zoom in*) atau memperkecil (*zoom out*).
  3. Di bawah patung, klik salah satu dari 5 lambang sila (Bintang, Rantai, Beringin, Banteng, Padi & Kapas).
  4. Baca penjelasan makna dan contoh perilakunya di sekolah.
  5. Klik tombol berikon speaker **"Dengarkan Narasi Suara"** untuk mendengarkan website membacakan penjelasannya secara otomatis.
  6. Klik tab **"Anatomi 17-8-1945"** untuk melihat rahasia jumlah bulu kemerdekaan pada tubuh Garuda.

---

### Mode 2: Kamera WebAR Interaktif
- **Cocok Untuk:** Pembelajaran interaktif di kelas menggunakan kamera HP siswa atau webcam laptop.
- **Cara Menggunakannya:**
  1. Klik tab **"Kamera WebAR Interaktif"**.
  2. Klik tombol besar berwarna kuning emas: **"Nyalakan Kamera AR"**.
  3. Ketika browser memunculkan kotak pertanyaan: *"Izinkan website menggunakan kamera Anda?"*, pilih **"Izinkan" (Allow)**.
  4. Kamera akan menyala dan menampilkan suasana ruangan kelas / meja belajar secara langsung di layar.
  5. Lambang Garuda Pancasila akan muncul melayang di atas rekaman kamera:
     - **Geser Posisi:** Sentuh dan tahan gambar Garuda, lalu geser ke titik meja yang diinginkan.
     - **Atur Ukuran:** Geser slider *"Ukuran Lambang"* ke kiri untuk memperkecil atau ke kanan untuk memperbesar.
     - **Atur Sudut:** Geser slider *"Rotasi Derajat"* untuk memutar kemiringan lambang Garuda.
     - **Efek Cahaya:** Centang opsi *"Efek Cahaya Emas"* untuk memberikan pendaran cahaya berkilau di belakang lambang.
  6. Klik tombol hijau **"Foto Bersama AR"**: Gambar di layar akan langsung difoto dan diunduh otomatis ke galeri HP / laptop sebagai hasil karya belajar siswa.
  7. Jika kelas tidak memiliki kamera, siswa dapat mengklik tombol **"Gunakan Simulasi Meja"** untuk belajar dengan latar belakang meja virtual.

---

### Mode 3: 3D Nyata di Ruangan (Native AR HP)
- **Cocok Untuk:** Pengalaman AR tingkat tinggi di smartphone yang mendukung teknologi AR modern (Google ARCore di Android atau QuickLook di Apple iPhone).
- **Cara Menggunakannya:**
  1. Buka website di HP. Jika guru membuka di laptop, siswa cukup mengarahkan kamera HP ke **Kode QR** yang tampil di layar laptop guru untuk langsung membuka halaman ini di HP mereka.
  2. Klik tab **"3D Nyata di Ruangan"**.
  3. Patung 3D Garuda akan muncul di dalam kotak interaktif.
  4. Klik tombol emas bertuliskan: **"📱 Tampilkan AR di Ruangan Nyata"**.
  5. Kamera HP akan terbuka dalam mode AR khusus:
     - Arahkan kamera HP ke permukaan lantai atau meja yang datar dan terang.
     - Gerakkan HP perlahan memutar agar sensor HP mengenali permukaan lantai/meja.
     - Patung 3D Garuda berukuran nyata akan muncul berdiri di atas meja kelas!
     - Siswa bisa berjalan mendekati patung, mengitari patung dari samping dan belakang, seolah-olah patung tersebut benar-benar ada di dalam kelas.

---

### Mode 4: Kuis Pendidikan Pancasila
- **Cocok Untuk:** Evaluasi pemahaman dan penutupan kegiatan belajar.
- **Cara Menggunakannya:**
  1. Klik tab **"Kuis Pendidikan Pancasila"**.
  2. Soal nomor 1 akan tampil beserta 4 pilihan jawaban (A, B, C, D).
  3. Siswa mengklik salah satu jawaban yang dianggap paling benar:
     - Jika jawaban **Benar**: Tombol berubah menjadi hijau dan muncul tanda centang.
     - Jika jawaban **Salah**: Tombol berubah menjadi merah dan pilihan yang benar ditunjukkan.
     - Kotak **"Penjelasan Guru"** akan langsung muncul menjelaskan alasan jawaban tersebut.
  4. Klik tombol **"Lanjut ke Soal Berikutnya"**.
  5. Setelah menyelesaikan 4 soal, kartu hasil belajar akan tampil memuat skor akhir (skala 0–100), jumlah jawaban benar, serta tombol **"Ulangi Kuis"** jika siswa ingin mencoba kembali.

---

## 6. Tanya-Jawab Teknis Populer (FAQ & Troubleshooting)

Berikut jawaban atas pertanyaan-pertanyaan yang paling sering muncul seputar operasional media ini:

### 1. Bagaimana jika kamera HP tidak mau menyala saat tombol diklik?
- **Penyebab:** Biasanya pengguna secara tidak sengaja menekan tombol "Blokir" (*Block*) saat browser meminta izin kamera, atau izin kamera di aplikasi Google Chrome HP belum diaktifkan.
- **Solusi:**
  1. Di HP, buka browser Chrome, klik ikon gembok / pengaturan situs di sebelah kiri alamat web (URL).
  2. Cari menu **"Izin" (Permissions) -> "Kamera" (Camera)**, lalu ubah dari "Blokir" menjadi **"Izinkan" (Allow)**.
  3. Muat ulang (*refresh*) halaman web dan klik tombol nyalakan kamera kembali.

### 2. Apakah media ini bisa dibuka di HP jadul yang tidak mendukung AR?
- **Bisa!** Inilah alasan mengapa media ini dibagi menjadi 4 mode belajar.
  - Jika HP siswa belum mendukung sensor AR canggih (Mode 3), siswa tetap bisa belajar menggunakan **Mode 1 (Eksplorasi 3D)** dan **Mode 2 (Kamera WebAR Interaktif)** yang kompatibel dengan 99% semua jenis smartphone yang memiliki kamera dan browser.
  - Bahkan jika tidak memiliki HP sama sekali, siswa tetap bisa belajar bersama di kelas melalui laptop dan proyektor yang dipandu oleh guru.

### 3. Apakah website ini membutuhkan kuota internet yang banyak?
- **Sangat hemat.** Semua berkas gambar dan model 3D di website ini telah dikompresi sedemikian rupa. Model 3D Garuda hanya berukuran sekitar ~580 KB (kurang dari 1 MB), jauh lebih kecil dibandingkan membuka 1 foto di media sosial Instagram (yang bisa memakan 2–5 MB). Begitu website sudah terbuka sekali, halaman akan tersimpan di memori sementara (*cache*) browser sehingga pembukaan berikutnya jauh lebih cepat.

### 4. Apakah sekolah harus membayar biaya bulanan untuk merawat web ini?
- **Tidak ada biaya sama sekali (Rp 0 / Gratis Seumur Hidup).**
  - Penyimpanan file dan server disiarkan oleh Netlify paket gratis.
  - Fitur pembaca suara menggunakan Web Speech API yang ada di dalam HP pengguna (bukan langganan layanan berbayar).
  - Repositori kode tersimpan gratis di GitHub.

---
*Dokumen ini merupakan panduan resmi penjelasan proyek Website Profil & Media Pembelajaran WebAR SDN Pakis V Surabaya.*

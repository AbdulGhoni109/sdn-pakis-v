# 📘 BUKU PANDUAN LENGKAP PROYEK
# WEBSITE & MEDIA PEMBELAJARAN WEBAR GARUDA PANCASILA
### SDN Pakis V/372 Surabaya

---

## DAFTAR ISI
1. **Ringkasan Proyek & Tujuan Pembuatan Media**
2. **Daftar Lengkap Teknologi: Definisi Umum (Bahasa Awam) & Fungsinya di Web**
3. **Alur Kronologis Pembuatan: Apa Dulu yang Dibangun, Lalu Kelanjutannya Bagaimana?**
4. **Cara Kerja Teknis Setiap Fitur AR (Di Balik Layar)**
5. **Panduan Lengkap Penggunaan Fitur AR (Untuk Guru & Siswa di Kelas)**
6. **Tanya-Jawab Teknis, Pemecahan Masalah (Troubleshooting) & Biaya Perawatan**

---

## 1. Ringkasan Proyek & Tujuan Pembuatan Media

### Apa Sebenarnya Proyek Ini?
Proyek ini adalah pembuatan **Website Resmi Profil SDN Pakis V Surabaya** yang di dalamnya diintegrasikan sebuah modul inovasi khusus berupa **Media Pembelajaran Interaktif Berbasis WebAR (Web Augmented Reality)** dengan materi **Simbol & Lambang Negara Garuda Pancasila**.

### Mengapa Media Ini Dibuat?
- **Masalah Pembelajaran Tradisional:** Di sekolah dasar, pembelajaran Pendidikan Pancasila materi lambang negara umumnya hanya mengandalkan buku paket teks atau gambar 2D datar di dinding. Siswa dituntut menghafal secara pasif tanpa melihat visual nyata.
- **Karakteristik Siswa SD (Tahap Operasional Konkret):** Berdasarkan psikologi perkembangan anak, siswa usia sekolah dasar (7–12 tahun) sangat membutuhkan media pembelajaran yang visual, nyata, dan konkret agar materi tidak terasa abstrak dan membosankan.
- **Solusi yang Dihadirkan:** Website ini menghadirkan replika patung 3D Garuda Pancasila yang bisa diputar 360 derajat, dilengkapi pembaca suara otomatis, serta dapat dimunculkan langsung ke dunia nyata (di atas meja belajar atau lantai kelas) menggunakan kamera HP/laptop siswa melalui teknologi Augmented Reality (AR) tanpa perlu mengunduh aplikasi tambahan dari PlayStore/AppStore.

---

## 2. Daftar Lengkap Teknologi: Definisi Umum (Bahasa Awam) & Fungsinya di Web

Agar siapa pun yang membaca dokumen ini (bahkan yang **sama sekali tidak mengerti teknologi**) bisa memahami dengan mudah, setiap teknologi dijelaskan dengan pola dua hal: **Definisi Umumnya dalam Bahasa Sehari-hari** dan **Fungsi Nyatanya di Website SDN Pakis V**.

```text
====================================================================================
                        ARSITEKTUR TEKNOLOGI PROYEK
====================================================================================
[ Antarmuka Web ]  --> HTML5 + CSS3 + Tailwind CSS + JavaScript + React 19 + Vite
[ Pengolah 3D ]    --> Blender (Format .GLB / glTF) + Three.js + Google Model-Viewer
[ Kamera & AR ]    --> WebAR + WebRTC (getUserMedia API) + HTML5 Canvas
[ Audio & Kuis ]   --> Web Speech API (Text-to-Speech) + React State Management
[ Server & Cloud ] --> Node.js + Git + GitHub Repository + Netlify Cloud (HTTPS)
====================================================================================
```

---

### A. Teknologi Tampilan Website (Frontend)

#### 1. Website (Bukan Aplikasi Unduhan)
- **Definisi Umum (Bahasa Awam):** Halaman informasi digital di internet yang bisa langsung dibuka lewat aplikasi penjelajah (seperti Google Chrome atau Safari) cukup dengan mengklik tautan/link, tanpa perlu memasang (*install*) berkas apa pun ke memori HP.
- **Fungsinya di Web Ini:** Siswa, guru, dan wali murid tidak perlu mengunduh aplikasi 100–200 MB dari PlayStore yang sering ditolak karena memori HP penuh. Cukup klik link atau scan Kode QR, media langsung siap digunakan detik itu juga.

#### 2. HTML5 (Hypertext Markup Language versi 5)
- **Definisi Umum (Bahasa Awam):** Bahasa kerangka dasar atau "tulang punggung" sebuah halaman website. Ibarat membangun sebuah rumah, HTML adalah tiang-tiang fondasi, bata dinding, lantai, dan atapnya.
- **Fungsinya di Web Ini:** Menentukan tempat dan susunan dasar teks judul, tulisan paragraf profil sekolah, posisi foto dewan guru, kotak video kamera, serta tombol-tombol navigasi.

#### 3. CSS3 & Tailwind CSS
- **Definisi Umum (Bahasa Awam):** Alat perias dan penata gaya tampilan website. Jika HTML adalah dinding rumah polos, maka CSS adalah cat warna, keramik, lampu hias, dan tata letak perabotannya. *Tailwind CSS* adalah kotak perkakas modern yang menyediakan ribuan pilihan warna dan gaya siap pakai.
- **Fungsinya di Web Ini:** Memberikan warna khas sekolah (Biru Resmi dan Kuning Emas), membuat tulisan terlihat rapi dan elegan, mengatur animasi lembut saat halaman digeser, serta memastikan tampilan website otomatis menyesuaikan ukuran layar (*responsif*)—tetap rapi baik di layar HP kecil maupun di layar proyektor laptop guru.

#### 4. JavaScript (JS ES6+)
- **Definisi Umum (Bahasa Awam):** Bahasa pemrograman yang memberikan "nyawa" atau gerakan interaktif pada website. Jika HTML adalah tubuh dan CSS adalah pakaian, maka JavaScript adalah saraf dan otot yang membuat website bisa bergerak dan merespons tindakan manusia.
- **Fungsinya di Web Ini:** Mengatur interaktivitas tombol—seperti menghitung nilai kuis saat siswa memilih jawaban, menyalakan kamera saat tombol ditekan, dan merespons sentuhan jari siswa saat menggeser lambang Garuda di layar HP.

#### 5. React 19
- **Definisi Umum (Bahasa Awam):** Alat pembuat tampilan website modern buatan Meta (Facebook) yang cara kerjanya seperti menyusun balok-balok mainan Lego (disebut *komponen*).
- **Fungsinya di Web Ini:** Memecah website menjadi balok-balok terpisah yang mandiri (balok Profil, balok Berita, balok Eksplorasi 3D, balok Kamera AR, dan balok Kuis). Keuntungannya, jika kita ingin mengganti tulisan profil atau menambah soal kuis, kita cukup mencabut dan mengganti balok tersebut tanpa takut merusak bagian website lainnya.

#### 6. Vite
- **Definisi Umum (Bahasa Awam):** Mesin perakit dan pengemas berkas website modern yang bertugas merapikan, memadatkan, dan mengecilkan ribuan baris kode program sebelum diterbitkan ke internet.
- **Fungsinya di Web Ini:** Membuat website terbuka secepat kilat (dalam hitungan milidetik). Sangat berguna bagi siswa yang membuka website menggunakan smartphone dengan sinyal internet sekolah yang pas-pasan.

#### 7. Lucide React (Ikon Digital)
- **Definisi Umum (Bahasa Awam):** Kumpulan gambar simbol atau lambang kecil (ikon digital) yang bersih, jelas, dan seragam.
- **Fungsinya di Web Ini:** Menampilkan simbol-simbol ramah anak yang mudah dimengerti tanpa membaca teks panjang, seperti lambang kamera foto, lambang speaker suara, lambang putar 360°, lambang centang hijau kuis, dan lambang panah.

---

### B. Teknologi Pembuatan & Penampil 3D

#### 1. Software Pemodelan 3D (Blender / 3D Modeling Tools)
- **Definisi Umum (Bahasa Awam):** Perangkat lunak komputer yang berfungsi seperti meja pemahat digital untuk membuat patung atau benda tiga dimensi (3D) dari nol di dalam komputer.
- **Fungsinya di Web Ini:** Digunakan untuk memahat dan mewarnai bentuk fisik burung Garuda Pancasila secara digital—mulai dari sayap, ekor, cakar pita Bhinneka Tunggal Ika, hingga perisai 5 sila di dada.

#### 2. Format Berkas `.GLB` (glTF 2.0)
- **Definisi Umum (Bahasa Awam):** Jenis berkas standar internasional khusus untuk patung atau objek 3D di internet. Ibarat format `.mp3` untuk rekaman lagu, atau `.mp4` untuk rekaman video.
- **Fungsinya di Web Ini:** Menyimpan seluruh bentuk fisik, warna emas, dan tekstur patung burung Garuda ke dalam 1 file yang telah dikompresi menjadi sangat kecil (**hanya sekitar ~580 Kilobyte**, kurang dari 1 Megabyte) sehingga sangat hemat kuota siswa.

#### 3. Three.js
- **Definisi Umum (Bahasa Awam):** Pustaka (*library*) grafis komputer yang bertugas menampilkan dan menggerakkan benda 3D di dalam halaman browser internet tanpa perlu memasang program tambahan.
- **Fungsinya di Web Ini:** Mengatur tata cahaya lampu digital, bayangan patung, serta sudut pandang kamera 3D di browser sehingga patung Garuda terlihat bervolume nyata dan bisa diputar halus saat disentuh kursor mouse atau jari siswa.

#### 4. Google `<model-viewer>`
- **Definisi Umum (Bahasa Awam):** Komponen penampil 3D dan AR resmi buatan Google yang dirancang khusus untuk memunculkan benda 3D ke dunia nyata lewat browser smartphone.
- **Fungsinya di Web Ini:** Menghubungkan website dengan sensor kamera dan sensor ruang di HP siswa (Google ARCore di Android dan Apple QuickLook di iPhone), sehingga patung Garuda 3D bisa "turun" dan berdiri tegak di lantai atau meja kelas nyata.

---

### C. Teknologi Fitur Kamera & Augmented Reality (WebAR)

#### 1. WebAR (Web Augmented Reality)
- **Definisi Umum (Bahasa Awam):** Teknologi yang menggabungkan dunia nyata dengan benda digital 3D secara langsung melalui layar kamera browser web. Beda dengan Virtual Reality (VR) yang menutup mata pakai kacamata helm khusus, AR tetap memperlihatkan ruangan asli kita dan hanya menambahkan objek baru ke dalamnya.
- **Fungsinya di Web Ini:** Membawa lambang burung Garuda Pancasila masuk ke ruang kelas SDN Pakis V, sehingga siswa seolah-olah melihat dan meletakkan lambang Garuda secara nyata di atas meja belajar mereka.

#### 2. WebRTC & API Akses Kamera (`navigator.mediaDevices.getUserMedia`)
- **Definisi Umum (Bahasa Awam):** Pintu izin resmi di browser yang meminta izin sopan kepada pemilik perangkat sebelum menyalakan kamera.
- **Fungsinya di Web Ini:** Menyalakan kamera depan atau belakang HP/laptop siswa saat tombol *"Nyalakan Kamera AR"* ditekan. Video kamera hanya diproses langsung di layar HP siswa (tidak ada rekaman video yang dikirim atau disimpan ke server internet), sehingga 100% aman bagi privasi anak-anak.

#### 3. HTML5 `<canvas>` API (Mesin Penggabung Foto)
- **Definisi Umum (Bahasa Awam):** Kanvas gambar tak terlihat di dalam browser yang berfungsi seperti kertas foto otomatis untuk menempelkan dan menggabungkan beberapa gambar menjadi satu.
- **Fungsinya di Web Ini:** Saat siswa menekan tombol *"Foto Bersama AR"*, kanvas ini langsung menangkap rekaman video kamera ruangan dan menempelkan gambar Garuda di atasnya, lalu menyimpannya menjadi sebuah foto kenang-kenangan format PNG yang langsung terunduh ke galeri HP siswa.

---

### D. Fitur Audio, Logika Kuis & Server Cloud

#### 1. Web Speech API (Text-to-Speech Otomatis Bahasa Indonesia)
- **Definisi Umum (Bahasa Awam):** Fitur pintar di dalam sistem operasi HP dan komputer yang mampu membaca tulisan teks biasa lalu mengubahnya menjadi suara ucapan manusia asli secara otomatis.
- **Fungsinya di Web Ini:** Membacakan makna 5 sila dan contoh perilakunya dalam bahasa Indonesia (`id-ID`) dengan suara wanita yang ramah anak saat tombol speaker diklik. Sangat membantu siswa kelas rendah yang belum lancar membaca (gaya belajar auditori).

#### 2. React State Management (`useState`, `useEffect`, `useRef`)
- **Definisi Umum (Bahasa Awam):** Papan catatan memori internal di dalam website yang mengingat apa saja yang sedang dilakukan oleh pengguna saat itu juga.
- **Fungsinya di Web Ini:** Mencatat secara akurat tab mana yang sedang dibuka siswa, berapa soal kuis yang sudah dijawab, skor nilai akhir yang diraih, serta letak koordinat geser (*drag*) lambang Garuda di meja.

#### 3. Git & GitHub
- **Definisi Umum (Bahasa Awam):** Lemari arsip digital di internet tempat menyimpan seluruh naskah kode program proyek secara rapi dan aman, lengkap dengan catatan tanggal pembuatannya.
- **Fungsinya di Web Ini:** Menyimpan repositori proyek resmi (`AbdulGhoni109/sdn-pakis-v`) agar berkas tidak hilang dan dapat diperbarui kapan saja.

#### 4. Netlify Cloud Hosting
- **Definisi Umum (Bahasa Awam):** Komputer peladen (*server*) raksasa di internet (cloud) yang bertugas menyiarkan website selama 24 jam sehari tanpa henti ke seluruh penjuru dunia.
- **Fungsinya di Web Ini:** Menyediakan tautan resmi website SDN Pakis V berkeamanan gembok hijau (**HTTPS**) yang bisa diakses gratis oleh guru, siswa, dan masyarakat luas kapan pun. Layanan ini **100% bebas biaya (Rp 0 selamanya)** tanpa biaya bulanan bagi sekolah.

---

## 3. Alur Kronologis Pembuatan: Apa Dulu yang Dibangun, Lalu Kelanjutannya Bagaimana?

Berikut adalah alur urutan kerja nyata dari hari pertama perencanaan sampai website terbit secara online:

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
- **Kelanjutannya:** Menginisiasi (*setup*) proyek web di komputer lokal menggunakan **Vite** dan **React 19**.
- Memasang dan mengonfigurasi **Tailwind CSS** untuk standarisasi warna, tata letak, dan jenis font ramah anak (*Plus Jakarta Sans*).
- Membuat struktur direktori proyek yang teratur:
  - `src/components/` : Tempat komponen tombol, kartu informasi, dan modul AR.
  - `src/pages/` : Tempat halaman-halaman web (Beranda, Profil, Media AR, Berita, dll).
  - `src/data/` : Tempat naskah teks sekolah dan bank soal.
  - `public/models/` : Tempat menyimpan file patung 3D `.glb`.
  - `public/images/` : Tempat menyimpan foto sekolah dan logo lambang Garuda.

#### Tahap 3: Pembuatan Halaman Informasi Profil Sekolah
- **Kelanjutannya:** Membangun kerangka dan tampilan profil sekolah terlebih dahulu:
  1. **Navbar (Menu Atas):** Menu navigasi yang responsif dan fleksibel.
  2. **Beranda (Hero Section):** Menampilkan sambutan kepala sekolah dan foto sekolah.
  3. **Profil & Visi Misi:** Menampilkan sejarah sekolah dan komitmen mutu pendidikan.
  4. **Fasilitas & Tenaga Pendidik:** Menampilkan sarana belajar dan profil dewan guru.
  5. **Berita, Prestasi & Ekstrakurikuler:** Menampilkan prestasi siswa dan kegiatan pramuka/ekskul.
  6. **Footer:** Bagian bawah website berisi alamat, kontak, dan tautan resmi sekolah.

#### Tahap 4: Pemodelan & Kompresi Aset Patung 3D Garuda
- **Kelanjutannya:** Sebelum fitur AR bisa diprogram, aset 3D-nya harus disiapkan terlebih dahulu:
  - Menyiapkan objek patung 3D burung Garuda Pancasila dengan tekstur warna emas, perisai merah-putih di dada, dan pita cengkeraman kaki bertuliskan *"Bhinneka Tunggal Ika"*.
  - **Optimasi Ukuran File:** Mengompresi file 3D ke format standar web `.glb` dengan ukuran **~580 KB** agar tidak membebani memori HP siswa saat diakses.
  - Menyiapkan gambar lambang Garuda resolusi tinggi tanpa latar belakang (transparan format PNG dan SVG) untuk digunakan pada fitur kamera AR.

#### Tahap 5: Perancangan Basis Data Edukasi (`pancasilaData.js`)
- **Kelanjutannya:** Seluruh teks materi pembelajaran disimpan ke dalam file data terstruktur (`src/data/pancasilaData.js`):
  - *Data 5 Sila:* Lambang bintang, rantai, beringin, banteng, padi-kapas; bunyi sila, makna perisai, contoh perilaku konkret di sekolah, dan kalimat narasi suara.
  - *Data Anatomi Bulu:* 17 bulu sayap, 8 bulu ekor, 19 bulu pangkal ekor, 45 bulu leher (tanggal proklamasi 17 Agustus 1945).
  - *Data Kuis:* 4 butir soal pilihan ganda, kunci jawaban, dan kotak penjelasan guru.

#### Tahap 6: Pemrograman 4 Modul Fitur Pembelajaran Media AR
- **Kelanjutannya:** Merakit halaman utama `MediaAR.jsx` beserta 4 komponen sub-fiturnya:
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
- **Kelanjutannya:** Memasukkan komponen `<MediaAR />` ke dalam file induk `App.jsx`, diletakkan secara strategis di antara seksi Profil Sekolah dan seksi Berita.
- Menambahkan tautan "Media AR" ke menu navigasi Navbar dan Footer sehingga siswa maupun guru dapat mengaksesnya dalam sekali klik dari halaman mana pun.

#### Tahap 8: Pengujian di Berbagai Perangkat (Testing & Perbaikan Tampilan)
- **Kelanjutannya:** Diuji pada layar komputer/laptop menggunakan browser Google Chrome, Safari, dan Microsoft Edge.
- Diuji langsung pada berbagai smartphone Android dan iPhone:
  - Memastikan kamera belakang langsung menyala dengan lancar.
  - Memperbaiki kontras warna tombol: misalnya tombol *"Nyalakan Kamera AR"* diubah menjadi warna emas solid dengan teks hitam pekat agar tidak menyatu dengan warna latar belakang.
  - Memastikan respon sentuhan jari saat memutar 3D dan menggeser lambang di layar sentuh HP terasa mulus dan tidak lambat.

#### Tahap 9: Peluncuran ke Internet (Deployment ke GitHub & Netlify)
- **Kelanjutannya (Tahap Terakhir):** Seluruh file proyek dikirim ke repositori GitHub (`AbdulGhoni109/sdn-pakis-v`).
- Server cloud Netlify dihubungkan langsung ke repositori GitHub tersebut.
- Setiap kali ada berkas baru atau perbaikan, Netlify secara otomatis merakit ulang proyek dalam hitungan detik dan menyiarkannya ke alamat web resmi berkeamanan HTTPS yang bisa dibuka gratis oleh siswa kapan pun dari rumah.

---

## 4. Cara Kerja Teknis Setiap Fitur AR (Di Balik Layar)

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

# 📘 BUKU PANDUAN & MATERI SIDANG SKRIPSI PGSD
## Media Pembelajaran Interaktif WebAR: Garuda Pancasila
**SDN Pakis V/372 Surabaya**

---

> 💡 **Petunjuk untuk Mahasiswa:**
> Dokumen ini disusun khusus dengan bahasa yang ramah, tidak teknis, dan berbasis ilmu pendidikan (PGSD). Dokumen ini berisi jawaban atas 4 hal yang diminta dosen pembimbing:
> 1. **Pengertian teknologi di dalam website (bahasa awam & analogi guru)**
> 2. **Cara kerja dan cara pembuatan Web & AR**
> 3. **Alur pembuatan media pembelajaran (Model ADDIE)**
> 4. **Panduan operasional AR di kelas (skenario RPP/Modul Ajar)**
> 5. **Bocoran tanya-jawab sidang skripsi beserta kalimat jawabannya**
>
> 🖨️ *Tips:* Anda juga bisa membuka berkas `public/PANDUAN_SKRIPSI_PGSD.html` di Google Chrome lalu klik tombol **"Cetak / Simpan Jadi PDF"** untuk mencetaknya menjadi buku saku PDF yang sangat rapi!

---

## 1. Pengertian Teknologi di Website (Bahasa Awam & Analogi Guru SD)

Jika dosen bertanya mengenai teknologi apa saja yang digunakan, jelaskan dengan **analogi kehidupan sehari-hari** agar dosen paham bahwa Anda menguasai fungsinya:

| Istilah Teknologi | Penjelasan Bahasa Guru | Analogi Mudah untuk Dosen |
|---|---|---|
| **Website (Bukan Aplikasi)** | Media yang dibuka cukup melalui Google Chrome / Safari tanpa install di PlayStore/AppStore. | *"Ibarat membaca koran digital online, siswa & wali murid tidak perlu install aplikasi berat yang menghabiskan memori HP."* |
| **WebAR (Web Augmented Reality)** | Teknologi yang memunculkan benda maya 3D ke ruangan nyata melalui layar kamera HP secara langsung. | *"Seperti filter kamera Instagram/TikTok, tetapi difokuskan untuk media edukasi: lambang burung Garuda bisa 'mendarat' tepat di atas meja belajar anak."* |
| **Model 3D (.GLB)** | Patung digital burung Garuda yang memiliki ruang, kedalaman, dan dapat diputar 360 derajat. | *"Ibarat patung Garuda di depan kelas, namun dalam bentuk digital yang bisa diperbesar dan diputar oleh sentuhan jari siswa."* |
| **Text-to-Speech (Suara Otomatis)** | Fitur pembaca teks otomatis menjadi suara wanita bahasa Indonesia yang ramah anak. | *"Ibarat guru membacakan cerita bagi siswa kelas rendah yang belum lancar membaca (mengakomodasi gaya belajar auditori)."* |
| **Kuis Interaktif** | Lembar evaluasi pemahaman yang langsung memberikan nilai dan penjelasan guru seketika. | *"Ibarat kuis cerdas cermat otomatis; siswa langsung mengetahui jawaban benar/salah tanpa menunggu guru mengoreksi kertas ujian."* |
| **Cloud Hosting Netlify** | Tempat menyimpan berkas website di internet agar bisa dibuka kapan saja selama 24 jam. | *"Ibarat perpustakaan digital terbuka yang melayani siswa 24 jam gratis tanpa ada biaya sewa gedung."* |

> 🌟 **Kunci Jawaban Mahasiswa PGSD:**  
> *"Bapak/Ibu Dosen, posisi saya adalah **perancang media pembelajaran (Instructional Designer)**. Fokus utama saya adalah menyelaraskan media ini dengan **Kurikulum Merdeka (Capaian Pembelajaran Pendidikan Pancasila)** agar siswa SD tidak hanya menghafal teks secara abstrak di buku, melainkan dapat melihat, mendengar, dan berinteraksi secara visual konkret."*

---

## 2. Alur Pembuatan Media (Gunakan Model Pengembangan ADDIE)

Dosen PGSD sangat senang jika alur pembuatan media dijelaskan menggunakan model pengembangan pendidikan yang baku, yaitu **Model ADDIE**:

```text
[ 1. ANALYSIS ]  --> Masalah: Pembelajaran PKn abstrak & gambar 2D buku paket monoton
       ↓
[ 2. DESIGN ]    --> Merancang materi 5 sila, filosofi 17-8-1945, suara & 4 soal kuis
       ↓
[ 3. DEVELOPMENT]--> Pembuatan model 3D Garuda, antarmuka ramah anak & integrasi WebAR
       ↓
[ 4. IMPLEMENT ] --> Uji coba pembelajaran di kelas SDN Pakis V (HP/Laptop)
       ↓
[ 5. EVALUATION ]--> Evaluasi hasil belajar melalui skor kuis pemahaman siswa
```

### Rincian Tiap Tahap:

1. **A - Analysis (Analisis Kebutuhan):**
   - Menemukan masalah nyata di kelas: Pembelajaran PKn materi simbol negara sering bersifat hafalan abstrak di buku paket.
   - Menurut **Teori Jean Piaget**, siswa SD (usia 7–12 tahun) berada pada tahap **operasional konkret**; mereka membutuhkan media visual konkret untuk memahami konsep abstrak.

2. **D - Design (Perancangan):**
   - Menyusun materi: Arti dan makna filosofis 5 lambang sila Pancasila dan contoh pengamalan konkret di sekolah (misal: berdoa, menolong teman, musyawarah pemilihan ketua kelas, hidup hemat).
   - Menghubungkan anatomi burung Garuda dengan tanggal proklamasi kemerdekaan (17 sayap, 8 ekor, 19 pangkal ekor, 45 leher).
   - Merancang 4 butir soal evaluasi pemahaman ramah anak.

3. **D - Development (Pengembangan):**
   - Menyiapkan aset visual 3D Garuda (`.glb`) dengan ukuran file terkompresi sangat ringan (~580 KB) agar hemat kuota internet siswa.
   - Merancang tata letak yang ramah anak: tulisan besar, warna cerah kontras, tombol responsif.
   - Memasang fitur pembaca narasi suara otomatis (*Text-to-Speech*) dan kamera WebAR.

4. **I - Implementation (Penerapan di Kelas):**
   - Menguji coba media di kelas: Guru menggunakan laptop/proyektor di depan kelas, dan siswa membuka link di HP kelompok masing-masing.

5. **E - Evaluation (Evaluasi):**
   - Siswa mengerjakan kuis pemahaman digital. Guru mendapatkan umpan balik langsung dari skor yang diraih siswa untuk melihat efektivitas media.

---

## 3. Cara Membuat Web & AR-nya (Cara Menjawab Tanpa Koding)

Jika dosen meminta diceritakan bagaimana cara membuatnya:

1. **Tahap Konsep & Kurikulum:**
   - Menyusun silabus/materi ajar Pendidikan Pancasila Fase B (Kelas 4 SD) sesuai Kurikulum Merdeka.
2. **Tahap Pengolahan Visual 3D:**
   - Mengolah aset vektor lambang Garuda menjadi model digital 3 dimensi berformat `.glb` (format standar web yang dapat diputar 360 derajat).
3. **Tahap Penyusunan Tampilan (Interface):**
   - Mengatur tampilan menjadi 4 mode belajar:
     - *Mode 1: Eksplorasi 3D & Suara*
     - *Mode 2: Kamera WebAR Interaktif*
     - *Mode 3: Patung 3D Nyata di Ruangan (Native AR)*
     - *Mode 4: Kuis Pendidikan Pancasila*
4. **Tahap Publikasi Online:**
   - Mempublikasikan website ke internet melalui hosting cloud modern (Netlify) sehingga memiliki tautan resmi (HTTPS) yang bisa dibuka kapan saja secara gratis.

---

## 4. Panduan Penggunaan AR di Kelas (Alur RPP / Modul Ajar)

Berikut adalah panduan langkah operasional saat guru mengajar menggunakan media ini di kelas:

### A. Kegiatan Awal / Apersepsi (10 Menit)
- Guru membuka website dan menampilkan menu **"Media AR"** di proyektor kelas.
- Guru memilih tab **"Eksplorasi 3D & Suara"**. Siswa diajak memutar patung Garuda 3D di layar dan menekan tombol suara narasi bahasa Indonesia untuk mendengarkan makna sila 1 sampai 5.

### B. Kegiatan Inti / Eksplorasi Mandiri (45 Menit)
- Siswa berkelompok (atau individu) membuka website di HP masing-masing (bisa scan kode QR dari layar laptop guru agar tidak perlu mengetik link).
- Siswa memilih tab **"Kamera WebAR Interaktif"** dan menekan tombol emas **"Nyalakan Kamera AR"**.
- Kamera HP diarahkan ke meja belajar:
  - Siswa menggeser dan mengatur ukuran lambang Garuda di mejanya.
  - Siswa menekan tombol hijau **"Foto Bersama AR"** sebagai bukti portofolio tugas kelompok.
- Siswa yang HP-nya mendukung fitur AR lanjutan dapat memilih tab **"3D Nyata"** untuk memproyeksikan patung Garuda berdiri di lantai ruang kelas.

### C. Kegiatan Penutup & Evaluasi (15 Menit)
- Siswa membuka tab **"Kuis Pendidikan Pancasila"** dan menjawab 4 soal kuis.
- Skor otomatis muncul (skala 100). Siswa yang menjawab salah dapat membaca kotak penjelasan guru untuk memperbaiki pemahamannya.

---

## 5. Bocoran Pertanyaan Dosen Penguji & Kunci Jawabannya

Berikut adalah 5 pertanyaan paling sering ditanyakan dosen penguji PGSD beserta jawaban terbaik:

### ❓ Pertanyaan 1:
> *"Kamu kan mahasiswa PGSD, kenapa membuat media AR? Bukankah itu bidangnya anak Informatika/IT?"*

**Jawaban Anda:**
> *"Bapak/Ibu Dosen, dalam pembelajaran abad ke-21 dan Kurikulum Merdeka, guru dituntut memiliki kompetensi **TPACK (Technological Pedagogical Content Knowledge)**. Saya berperan sebagai **desainer pembelajaran** yang memadukan materi pedagogik dengan media visual konkret.*  
> *Menurut teori Jean Piaget, anak usia SD (7–12 tahun) berada pada fase **operasional konkret**. Mereka sulit memahami materi simbol negara jika hanya membaca teks abstrak di buku paket. Dengan media WebAR ini, materi Pancasila yang tadinya abstrak menjadi tampak nyata, kontekstual, dan mudah dipahami anak."*

---

### ❓ Pertanyaan 2:
> *"Bagaimana jika di sekolah siswa tidak boleh bawa HP, atau ada siswa yang tidak punya HP canggih?"*

**Jawaban Anda:**
> *"Media ini dirancang sangat fleksibel dan inklusif dengan 3 skenario penerapan:*  
> 1. ***Skenario Klasikal (Hanya 1 Perangkat):*** *Guru cukup membuka web di 1 laptop dan LCD Proyektor kelas untuk mendemonstrasikan eksplorasi 3D dan suara narasi kepada seluruh siswa.*  
> 2. ***Skenario Kelompok:*** *Hanya membutuhkan 1 HP untuk satu kelompok belajar (4–5 siswa).*  
> 3. ***Di Lab Komputer / Tanpa Kamera:*** *Website menyediakan fitur **'Simulasi Meja Belajar'**, sehingga tetap bisa dipelajari di komputer sekolah tanpa memerlukan kamera HP."*

---

### ❓ Pertanyaan 3:
> *"Apakah pembuatan dan pemeliharaan website ini membebani anggaran operasional sekolah?"*

**Jawaban Anda:**
> *"Sama sekali tidak, Bapak/Ibu. Media ini **100% bebas biaya (Rp 0)**. Server hosting menggunakan paket gratis Netlify seumur hidup, suara narasi menggunakan Web Speech bawaan sistem operasi (tanpa bayar API luar), dan teknologi WebAR tidak membutuhkan kacamata VR/AR yang mahal. Sekolah tidak perlu mengeluarkan biaya langganan bulanan."*

---

### ❓ Pertanyaan 4:
> *"Apa kaitan media pembelajaran ini dengan Kurikulum Merdeka?"*

**Jawaban Anda:**
> *"Media ini secara langsung mendukung perwujudan **Projek Penguatan Profil Pelajar Pancasila (P5)**, khususnya:*  
> - ***Dimensi Beriman & Bertakwa kepada Tuhan YME:*** *Tercermin pada pendalaman makna Sila ke-1 dan contoh pengamalannya (berdoa sebelum belajar).*  
> - ***Dimensi Berkebinekaan Global & Persatuan:*** *Tercermin pada pembedahan semboyan Bhinneka Tunggal Ika dan 17 helai bulu sayap kemerdekaan.*  
> - ***Dimensi Bernalar Kritis:*** *Dilatih melalui kuis evaluasi pemahaman mandiri."*

---

### ❓ Pertanyaan 5:
> *"Apa keunggulan WebAR ini dibanding aplikasi AR yang biasa di-download di Google PlayStore?"*

**Jawaban Anda:**
> *"Keunggulan utamanya adalah **Zero Installation (Tanpa Unduh Aplikasi)**. Aplikasi di PlayStore biasanya berukuran besar (100–300 MB) yang sering ditolak oleh wali murid karena memori HP penuh. Dengan WebAR, siswa cukup mengklik tautan di browser bawaan (Chrome/Safari) dan langsung dapat belajar dalam hitungan detik di HP merek apa pun (Android maupun iPhone)."*

---

*(Buku panduan ini dapat dicetak langsung atau disimpan sebagai PDF dengan membuka berkas `public/PANDUAN_SKRIPSI_PGSD.html` di browser)*

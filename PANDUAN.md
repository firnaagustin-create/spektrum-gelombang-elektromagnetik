# 📚 PANDUAN LENGKAP - Spektrum Gelombang Elektromagnetik

## 📖 Daftar Isi

1. [Pengenalan Aplikasi](#pengenalan-aplikasi)
2. [Cara Instalasi & Setup](#cara-instalasi--setup)
3. [Panduan Mode Eksplorasi](#panduan-mode-eksplorasi)
4. [Panduan Mode Pembelajaran](#panduan-mode-pembelajaran)
5. [Fitur-Fitur Detil](#fitur-fitur-detil)
6. [FAQ & Troubleshooting](#faq--troubleshooting)
7. [Tips & Tricks](#tips--tricks)
8. [Konten Fisika](#konten-fisika)

---

## Pengenalan Aplikasi

### Apa itu Media Pembelajaran ini?

Aplikasi **Spektrum Gelombang Elektromagnetik** adalah platform pembelajaran interaktif berbasis web yang dirancang khusus untuk siswa kelas XII SMA mempelajari materi spektrum gelombang elektromagnetik.

### Apa Bedanya dengan JavaLab?

| Aspek | JavaLab | Aplikasi Ini |
|---|---|---|
| **Instalasi** | Perlu install Java | Tidak perlu install apa-apa |
| **Kompatibilitas** | Hanya Windows/Mac | Semua OS & Browser |
| **Mobile** | ❌ Tidak support | ✅ Fully responsive |
| **Offline** | ✅ Ya | ✅ Ya |
| **Interface** | Klasik | Modern & Interaktif |
| **Animasi** | Sederhana | Smooth & Real-time |
| **Pembelajaran** | Eksplorasi saja | Eksplorasi + Terstruktur |
| **Evaluasi** | Terbatas | Kuis + Matching + Refleksi |
| **Ukuran** | ~50MB | ~1MB |

---

## Cara Instalasi & Setup

### **OPSI 1: Membuka Langsung (Paling Sederhana)**

#### Untuk Desktop:
1. Unduh atau clone repository
2. Cari file `index.html`
3. Double-click → akan terbuka di browser default
4. **Selesai! Aplikasi siap digunakan**

#### Untuk Smartphone/Tablet:
1. Transfer file ke device (via USB, email, atau cloud)
2. Gunakan file manager → cari `index.html`
3. Tap file → buka dengan browser
4. **Selesai!**

### **OPSI 2: Menggunakan Local Server (Rekomendasi)**

**Mengapa perlu server lokal?**
- Beberapa fitur lebih smooth
- Tidak ada warning security
- Performa lebih optimal

#### Setup dengan Python (Tersedia di semua OS):

```bash
# Buka Terminal/Command Prompt
# Masuk ke folder aplikasi
cd /path/to/spektrum-gelombang-elektromagnetik

# Python 3 (paling umum)
python -m http.server 8000

# Atau Python 2
python -m SimpleHTTPServer 8000
```

Kemudian buka browser dan ketik: `http://localhost:8000`

#### Setup dengan Node.js:

```bash
# Install global (jika belum)
npm install -g http-server

# Jalankan di folder aplikasi
http-server

# Akan muncul: http://127.0.0.1:8080
```

#### Setup dengan VS Code Live Server:

1. Install extension "Live Server" dari Microsoft
2. Right-click `index.html`
3. Pilih "Open with Live Server"
4. Browser otomatis terbuka

---

## Panduan Mode Eksplorasi

### Tujuan Mode Eksplorasi
Siswa dapat menjelajahi spektrum gelombang secara bebas tanpa batasan, mengamati perubahan real-time, dan mempelajari karakteristik setiap spektrum.

### Langkah-Langkah:

#### **1. Masuk Mode Eksplorasi**
```
Home Page → Klik "Mode Eksplorasi"
```
Atau klik tombol "🔍 Mode Eksplorasi" di card menu.

#### **2. Geser Slider Spektrum**
```
Spectrum Bar → Geser slider dari kiri ke kanan
```
- **Posisi Kiri** = Radio (gelombang panjang)
- **Posisi Tengah** = Cahaya Tampak
- **Posisi Kanan** = Sinar Gamma (gelombang pendek)

#### **3. Amati Perubahan Real-Time**

**Visualisasi Gelombang (Kiri):**
- ⭕ Gelombang berubah bentuk sesuai spektrum
- 📊 Semakin kanan (gamma) = gelombang lebih rapat
- 📊 Semakin kiri (radio) = gelombang lebih renggang

**Nilai Fisika (Bawah Kiri):**
```
λ (Panjang Gelombang): Menurun saat geser kanan
f (Frekuensi):         Meningkat saat geser kanan
E (Energi Foton):      Meningkat saat geser kanan
```

**Informasi Spektrum (Kanan):**
```
📡 Sumber
💡 Aplikasi Praktis
✨ Manfaat
⚠️ Potensi Bahaya
```

#### **4. Pelajari Setiap Spektrum**

Geser slider ke setiap posisi dan pelajari:

| Posisi | Spektrum | Panjang Gelombang | Aplikasi |
|---|---|---|---|
| 1 | Radio | > 1m | Siaran, komunikasi |
| 2 | Microwave | 1mm-1m | Oven, satelit |
| 3 | Inframerah | 700nm-1mm | Remote, termostat |
| 4 | Cahaya Tampak | 400-700nm | Penglihatan |
| 5 | Ultraviolet | 10-400nm | Desinfeksi |
| 6 | Sinar-X | 0.01-10nm | Radiologi |
| 7 | Sinar Gamma | <0.01nm | Terapi kanker |

#### **5. Tips Eksplorasi Optimal**
- ✅ Geser pelan-pelan untuk melihat perubahan
- ✅ Amati grafik gelombang berubah bentuk
- ✅ Bandingkan energi foton antara spektrum
- ✅ Pahami hubungan λ dan f (selalu berbanding terbalik)

#### **6. Keluar Mode Eksplorasi**
```
Klik "Kembali ke Home" untuk kembali
Atau ESC untuk shortcut
```

---

## Panduan Mode Pembelajaran

### Tujuan Mode Pembelajaran
Mengikuti alur LKPD (Lembar Kerja Peserta Didik) terstruktur dengan 5 langkah untuk memastikan pemahaman menyeluruh.

### Progress Tracking
```
Progress Bar (Atas) → Menunjukkan langkah (1/5, 2/5, dst)
```

---

### **LANGKAH 1: EKSPLORASI SPEKTRUM**

#### Aktivitas:
1. Geser slider spektrum seperti di Mode Eksplorasi
2. Pelajari setiap jenis spektrum
3. Amati visualisasi gelombang
4. Pahami data λ, f, E untuk setiap spektrum

#### Apa yang Dipelajari:
- ✅ Definisi setiap spektrum
- ✅ Rentang panjang gelombang
- ✅ Rentang frekuensi
- ✅ Energi foton (E = hf)
- ✅ Hubungan λ ↔ f (berbanding terbalik)
- ✅ Hubungan f ↔ E (berbanding lurus)

#### Tips:
- Perhatikan urutan spektrum (Radio → Gamma)
- Semakin kanan, semakin tinggi energi
- Gunakan 5 menit untuk setiap spektrum

#### Lanjut ke Langkah 2:
```
Klik "Selanjutnya →" di bawah halaman
```

---

### **LANGKAH 2: TABEL PENGAMATAN & REFLEKSI**

#### A. Tabel Pengamatan

**Apa yang Harus Diisi:**

| Kolom | Isi | Contoh |
|---|---|---|
| Jenis Spektrum | Nama spektrum | Radio, Microwave, dst |
| Panjang Gelombang (λ) | Dari eksplorasi | 1 m, 1 mm, 700 nm |
| Frekuensi (f) | Dari visualisasi | 3 × 10⁵ Hz, 6 × 10¹⁴ Hz |
| Energi (E) | Dari perhitungan | 1.24 × 10⁻⁶ eV, 3.97 eV |
| Aplikasi | Dari info spektrum | Siaran radio, penglihatan |

**Cara Mengisi:**

1. Kembali ke **Langkah 1** jika perlu referensi
2. Atau gunakan informasi yang sudah dilihat
3. Isi semua 7 baris (Radio hingga Gamma)
4. Pastikan data akurat

**Contoh Isi Tabel:**
```
1. Radio | 1 m | 3 × 10⁵ Hz | 1.24 × 10⁻⁶ eV | Siaran radio & TV
2. Microwave | 1 cm | 3 × 10⁹ Hz | 1.24 × 10⁻⁴ eV | Oven microwave
... dst
```

#### B. Pertanyaan Refleksi

**Soal 1: Hubungan λ dan f**
```
Pertanyaan: Apa hubungan antara panjang gelombang dan frekuensi?

Jawaban Harapan:
- Berbanding terbalik (inversely proportional)
- Semakin panjang λ → semakin kecil f
- Semakin pendek λ → semakin besar f
- Hubungan: c = λ × f (konstan)
```

**Soal 2: Mengapa Energi Meningkat dengan Frekuensi?**
```
Pertanyaan: Mengapa energi foton meningkat seiring dengan 
peningkatan frekuensi?

Jawaban Harapan:
- Karena E = hf (energi = Planck × frekuensi)
- h adalah konstanta Planck yang konstan
- Jika f naik, E naik secara proporsional
- Setiap foton lebih energik pada frekuensi tinggi
```

**Soal 3: Spektrum Paling Berbahaya**
```
Pertanyaan: Spektrum mana yang paling berbahaya bagi manusia 
dan mengapa?

Jawaban Harapan:
- Sinar Gamma (paling energik)
- Radiasi ionisasi sangat tinggi
- Dapat merusak DNA dan sel
- Dapat menyebabkan kanker jika paparan tinggi
- Sinar-X juga berbahaya (ionisasi)
```

#### Lanjut ke Langkah 3:
```
Klik "Selanjutnya →" untuk Pencocokan Aplikasi
```

---

### **LANGKAH 3: PENCOCOKAN APLIKASI (DRAG & DROP)**

#### Tujuan:
Menguji pemahaman siswa tentang aplikasi praktis setiap spektrum.

#### Cara Bermain:

**1. Lihat Kolom Spektrum (Kiri)**
```
📻 Radio
🌊 Microwave
🔥 Inframerah
👁️ Cahaya Tampak
☀️ Ultraviolet
🩻 Sinar-X
☢️ Sinar Gamma
```

**2. Lihat Kolom Aplikasi (Kanan)**
```
□ Pemeriksaan Medis (Radiologi)
□ Siaran Radio & TV
□ Memasak (Oven Microwave)
... dst
```

**3. Tarik (Drag) Aplikasi ke Spektrum yang Sesuai**

```
Langkah:
1. Tekan & tahan aplikasi
2. Geser ke drop zone spektrum
3. Lepaskan mouse/touchpad
4. Item akan masuk ke spektrum
```

#### Penycocokan yang Benar:

| Spektrum | ← | Aplikasi |
|---|---|---|
| 📻 Radio | ← | Siaran Radio & TV |
| 🌊 Microwave | ← | Memasak (Oven Microwave) |
| 🔥 Inframerah | ← | Termostat & Sensor Suhu |
| 👁️ Cahaya Tampak | ← | Fotografi & Penglihatan |
| ☀️ Ultraviolet | ← | Desinfeksi & Tabir Surya |
| 🩻 Sinar-X | ← | Pemeriksaan Medis (Radiologi) |
| ☢️ Sinar Gamma | ← | Sterilisasi & Terapi Kanker |

#### Feedback:
- ✅ **Hijau** = Benar! (aplikasi sesuai spektrum)
- ❌ **Merah** = Salah (aplikasi tidak sesuai)

#### Tips:
- Ingat karakteristik setiap spektrum
- Radio = komunikasi jarak jauh
- Gamma = energi tinggi, terapi/sterilisasi
- Reset jika mau coba lagi

#### Lanjut ke Langkah 4:
```
Klik "Selanjutnya →" untuk Kuis Interaktif
```

---

### **LANGKAH 4: KUIS INTERAKTIF**

#### Tujuan:
Mengukur pemahaman siswa melalui soal pilihan ganda.

#### 5 Soal Kuis:

**Soal 1: Urutan Spektrum**
```
Soal: Urutan spektrum elektromagnetik dari panjang gelombang 
terpanjang ke terpendek adalah?

A. ✓ Radio → Microwave → Inframerah → Cahaya Tampak 
   → Ultraviolet → Sinar-X → Sinar Gamma

B. ✗ Sinar Gamma → Sinar-X → ... → Radio
   (ini urutan paling pendek ke panjang)

C. ✗ Microwave → Radio → ... 
   (urutan salah)

D. ✗ Cahaya Tampak → Radio → ...
   (urutan salah)

Tips: Ingat "ROY G. BIV" tapi ditambah radio & gamma
```

**Soal 2: Hubungan λ dan f**
```
Soal: Jika panjang gelombang meningkat, maka frekuensi akan?

A. ✗ Meningkat (salah - berbanding terbalik)
B. ✓ Menurun (benar! λ ↑ → f ↓)
C. ✗ Tetap sama (salah)
D. ✗ Tidak dapat diprediksi (salah)

Rumus: c = λ × f (konstant)
Jika λ besar → f harus kecil agar c tetap konstan
```

**Soal 3: Energi Tertinggi**
```
Soal: Spektrum elektromagnetik manakah yang memiliki 
energi foton tertinggi?

A. ✗ Radio (energi rendah)
B. ✗ Cahaya Tampak (energi sedang)
C. ✗ Sinar-X (energi tinggi, tapi...)
D. ✓ Sinar Gamma (energi TERTINGGI!)

Karena: E = hf
Sinar Gamma memiliki frekuensi paling tinggi
```

**Soal 4: Aplikasi Inframerah**
```
Soal: Aplikasi inframerah dalam kehidupan sehari-hari adalah?

A. ✗ Siaran televisi (radio waves)
B. ✗ Sterilisasi alat medis (UV/Gamma)
C. ✓ Remote control dan termostat (inframerah!)
D. ✗ Pemeriksaan tulang (Sinar-X)

Inframerah = energi panas
Remote & termostat menggunakan inframerah
```

**Soal 5: Bahaya UV**
```
Soal: Bahaya utama sinar ultraviolet bagi manusia adalah?

A. ✗ Menyebabkan keracunan makanan (salah)
B. ✗ Merusak pendengaran (salah - itu noise)
C. ✗ Meningkatkan tekanan darah (salah)
D. ✓ Dapat menyebabkan kanker kulit (benar!)

UV = ionizing radiation → merusak DNA
Paparan lama → kanker kulit, katarak mata
```

#### Cara Menjawab:

1. Baca soal dengan teliti
2. Pikirkan jawaban sebelum memilih
3. Klik salah satu radio button
4. Langsung muncul feedback (benar/salah)
5. Lanjut ke soal berikutnya

#### Tips Menjawab:
- ✅ Pikirkan rumus E = hf, c = λ × f
- ✅ Ingat urutan spektrum
- ✅ Pahami aplikasi setiap spektrum
- ✅ Jangan asal tebak - baca dengan teliti

#### Setelah Semua Terjawab:
```
Klik "Selesaikan & Lihat Hasil →"
Akan otomatis ke Langkah 5
```

---

### **LANGKAH 5: HASIL & RINGKASAN BELAJAR**

#### Apa yang Ditampilkan:

**1. Skor Kuis (Lingkaran Besar)**
```
         │ 80% │
    Skor Kuis

Skala: 0-100%
```

**2. Ringkasan Hasil**
```
✓ Soal Dijawab Benar: 4 / 5
✗ Soal Dijawab Salah: 1 / 5
📊 Pencocokan Aplikasi: 90%
```

**3. Feedback Performa**
```
Skor 80-100: "🌟 Luar biasa! Pemahaman sangat baik"
Skor 60-79:  "👍 Bagus! Terus tingkatkan"
Skor 40-59:  "📚 Sudah baik, pelajari lebih lanjut"
Skor <40:    "💪 Jangan menyerah, coba lagi"
```

**4. Pencapaian**
```
🏆 Anda telah menyelesaikan pembelajaran 
spektrum gelombang elektromagnetik!
```

**5. Rekomendasi Tindak Lanjut**
```
💡 Saran untuk pembelajaran selanjutnya:
- Pelajari lebih lanjut tentang efek fotolistrik
- Eksplorasi aplikasi sinar-X dalam industri
- Pahami mekanisme radiasi Matahari
```

#### Apa Selanjutnya:

**Opsi 1: Ulangi Pembelajaran**
```
Klik "🔄 Reset & Ulangi Pembelajaran"
Kembali ke Langkah 1, semua data reset
```

**Opsi 2: Kembali ke Home**
```
Klik "🏠 Kembali ke Home"
Pilih mode lain atau keluar
```

#### Menyimpan Hasil:
```
📷 Screenshot halaman hasil
🖨️ Print ke PDF (Ctrl+P)
📝 Catat skor manual
```

---

## Fitur-Fitur Detil

### **1. Slider Interaktif**

**Karakteristik:**
- Smooth animation saat digeser
- Label spektrum di bawah slider
- Warna gradient (Radio → Gamma)
- Real-time update informasi

**Tips Penggunaan:**
- Geser pelan untuk melihat transisi smooth
- Klik label untuk langsung ke spektrum
- Tombol keyboard untuk fine control

### **2. Visualisasi Gelombang Canvas**

**Karakteristik:**
- Animasi gelombang real-time
- Bentuk berubah sesuai frekuensi
- Warna sesuai spektrum
- Grid background untuk referensi

**Cara Membaca:**
```
Radio (posisi 1):        ╱╲___╱╲___╱╲__ (renggang)
Cahaya Tampak (posisi 4): ╱╲╱╲╱╲╱╲╱╲╱╲ (sedang)
Gamma (posisi 7):       ╱╲╱╲╱╱╲╱╲╱╲╱ (rapat)

Semakin rapat = frekuensi tinggi = energi tinggi
```

### **3. Real-Time Data Display**

**Panjang Gelombang (λ):**
- Dalam satuan meter, mm, μm, nm, pm
- Otomatis konversi ke satuan terdekat
- Akurat berdasarkan posisi slider

**Frekuensi (f):**
- Dalam satuan Hz dengan notasi ilmiah
- Formula: f = c / λ
- Konstan Planck h = 6.626 × 10⁻³⁴

**Energi Foton (E):**
- Dalam satuan eV (electron volt)
- Formula: E = hf
- Konversi otomatis dari Joule ke eV

### **4. Drag & Drop Matching**

**Teknologi:**
- HTML5 Drag & Drop API
- Visual feedback (color change)
- Auto-scoring

**Usability:**
- Bisa di-drag berkali-kali
- Ada button remove untuk item
- Reset button untuk mengulang

**Performa:**
- Smooth di desktop & tablet
- Mobile support dengan touch events
- Tidak hang atau lag

### **5. Kuis Interaktif**

**Fitur:**
- Instant feedback setelah jawab
- Visual indicator (hijau/merah)
- Tidak bisa change jawaban (security)
- Auto-calculate score

**Question Types:**
- Multiple choice hanya (5 soal)
- Satu jawaban benar per soal
- Explanasi feedback untuk tiap soal

### **6. Progress Tracking**

**Visualisasi:**
- Progress bar di atas halaman
- Persentase progress
- Langkah saat ini (Langkah 1/5)

**Update:**
- Otomatis saat pindah langkah
- Smooth animation
- Visual satisfaction

---

## FAQ & Troubleshooting

### **Q1: Aplikasi tidak buka?**

**Jawab:**
```
A. Pastikan double-click index.html
   - Bukan style.css atau script.js
   
B. Jika tidak buka, coba:
   - Right-click → Open with → Chrome/Firefox
   - Copy-paste path ke browser address bar
   - Gunakan local server (http://localhost:8000)
```

### **Q2: Gelombang tidak animasi?**

**Jawab:**
```
A. Refresh halaman (F5 atau Ctrl+R)

B. Clear cache browser:
   - Chrome: Ctrl+Shift+Delete
   - Firefox: Ctrl+Shift+Delete
   - Safari: Cmd+Option+E

C. Coba browser lain (Chrome, Firefox, Edge)

D. Pastikan JavaScript enabled:
   - Settings → Privacy → JavaScript ✓
```

### **Q3: Drag & drop tidak bekerja?**

**Jawab:**
```
A. Jika desktop:
   - Coba drag lebih perlahan
   - Pastikan mouse button tertekan fully
   - Refresh halaman

B. Jika mobile:
   - Long-press dulu sebelum drag
   - Landscape mode lebih smooth
   - Beberapa browser mobile limited
   - Try: Chrome, Firefox, Safari

C. Jika tetap tidak bisa:
   - Gunakan desktop untuk matching
   - Atau manual input data
```

### **Q4: Data tidak tersimpan?**

**Jawab:**
```
⚠️ NORMAL - Aplikasi tidak auto-save

Solusi:
A. Screenshot hasil sebelum tutup browser
   - Windows: Print Screen (PrtScn)
   - Mac: Cmd+Shift+4
   - Linux: PrintScreen

B. Print ke PDF (Ctrl+P atau Cmd+P)

C. Catat skor manual ke buku

D. Jika perlu auto-save:
   - Hubungi developer untuk feature
   - Bisa sync dengan database
```

### **Q5: Ukuran teks terlalu besar/kecil di mobile?**

**Jawab:**
```
A. Zoom in/out:
   - Pinch to zoom (dua jari)
   - Browser menu → Zoom
   - Ctrl + / Ctrl -

B. Rotate device:
   - Landscape lebih nyaman untuk slider
   - Portrait untuk membaca

C. Settings browser:
   - Accessibility → Font Size
```

### **Q6: Bagaimana jika ada error di console?**

**Jawab:**
```
A. Lihat error message (F12 → Console)

B. Common errors:
   - "Cannot read property" → Refresh
   - CORS error → Gunakan local server
   - Undefined element → File rusak

C. Solusi:
   - Re-download files
   - Clear browser cache
   - Coba browser lain
```

### **Q7: Apakah bisa offline?**

**Jawab:**
```
✅ YA! 100% offline

Cara:
1. Download semua file
2. Buka index.html langsung
3. Tidak perlu internet

Catatan:
- Tetap perlu browser (Chrome/Firefox)
- Tidak perlu instalasi apapun
- Bisa dibawa ke pelajaran di sekolah
```

### **Q8: Bisakah digunakan di Chromebook?**

**Jawab:**
```
✅ YA! Chromebook support

Cara:
1. Download zip file
2. Extract di Files app
3. Buka index.html dengan Chrome
4. Siap digunakan

Chrome OS fully support HTML5
```

### **Q9: Kompatibel dengan tablet apa saja?**

**Jawab:**
```
✅ Semua tablet dengan browser:

iOS (iPad):
- Safari
- Chrome
- Firefox
- Edge

Android (Samsung, Xiaomi, dll):
- Chrome
- Firefox
- Samsung Internet
- Edge
- Opera

Tips: Landscape mode lebih nyaman
```

### **Q10: Bagaimana jika ada bug?**

**Jawab:**
```
Report ke developer dengan info:
1. Browser & versi (Chrome v90+)
2. Device (desktop/mobile/tablet)
3. OS (Windows/Mac/Linux/Android/iOS)
4. Screenshot/video bug
5. Langkah untuk reproduce

Email: [developer email]
GitHub Issue: [repository link]
```

---

## Tips & Tricks

### **Tips Pembelajaran Efektif**

**1. Urutan Optimal:**
```
1. Mode Eksplorasi dulu (5 menit)
   → Familiar dengan spektrum
   
2. Mode Pembelajaran (20-30 menit)
   → Terstruktur & mendalam
   
3. Ulangi jika skor < 80%
   → Pahami yang salah
```

**2. Manfaatkan Visualisasi Gelombang:**
```
✅ Perhatikan perubahan bentuk gelombang
✅ Hubungkan dengan λ dan f
✅ Bandingkan radio (panjang) vs gamma (pendek)
✅ Bayangkan energi dalam setiap gelombang
```

**3. Isi Tabel dengan Teliti:**
```
✅ Copy data dari real-time display
✅ Jangan asal tebak-tebakan
✅ Perhatikan satuan (m, mm, nm, Hz, eV)
✅ Double-check sebelum lanjut
```

**4. Pahami Hubungan 3 Variabel:**
```
λ (Panjang Gelombang) ─────────────────
│                                    │
├─ Inverse ─ Frekuensi (f) ──── Proportional ──┤
                                         │
                                    Energi (E)
                                    
c = λ × f (konstant)
E = h × f (h = konstant)
```

**5. Jangan Hafal, Pahami:**
```
❌ Hafal urutan spektrum
✅ Pahami mengapa urutan itu

❌ Hafal rumus tanpa makna
✅ Pahami: E = hf berarti energi proporsional frekuensi

❌ Tebak di kuis
✅ Pahami setiap konsep
```

### **Tips Troubleshooting Cepat**

| Masalah | Solusi Cepat |
|---|---|
| Tidak buka | Refresh (F5) |
| Gelombang tidak gerak | Clear cache + refresh |
| Drag drop tidak bisa | Coba di desktop / refresh |
| Teks terlalu besar | Zoom out (Ctrl+-) |
| Lambat | Tutup tab lain, refresh |
| Error | F12 → Console → lihat error |

### **Tips untuk Guru**

**1. Pre-Class Preparation:**
```
- Test aplikasi di lab komputer
- Pastikan semua file ter-copy dengan baik
- Coba di berbagai browser
- Familiarize dengan fitur
```

**2. During Class:**
```
- Start dengan Mode Eksplorasi (ice breaker)
- Demonstrasikan slider & animasi
- Guide siswa through Mode Pembelajaran
- Discuss hasil matching & refleksi
```

**3. Assessment:**
```
- Lihat skor kuis setiap siswa
- Review tabel pengamatan
- Periksa jawaban refleksi
- Tanyakan pemahaman langsung
```

**4. Post-Class:**
```
- Collect hasil belajar (screenshot/print)
- Discuss common misconceptions
- Assign homework (research aplikasi spektrum)
- Provide additional materials
```

### **Tips untuk Siswa Self-Study**

**1. Optimal Learning Path:**
```
Hari 1: Mode Eksplorasi (30 menit)
- Pahami setiap spektrum

Hari 2: Mode Pembelajaran (45 menit)
- Kerjakan LKPD lengkap
- Isi tabel pengamatan
- Jawab refleksi

Hari 3: Review & Practice (30 menit)
- Ulangi kuis
- Review jawaban yang salah
- Pelajari resource tambahan
```

**2. Debugging Process:**
```
Jika skor < 60%:
1. Pahami soal yang salah
2. Baca ulang materi tentang soal itu
3. Geser slider ke spektrum tersebut
4. Pahami relationship λ-f-E
5. Coba lagi next time
```

**3. Maximize Learning:**
```
✅ Aktif bukan pasif (geser, click, drag)
✅ Amati setiap detail perubahan
✅ Buat catatan di buku
✅ Coba explain ke teman
✅ Connect dengan dunia nyata
```

---

## Konten Fisika

### **Konsep Inti Spektrum Elektromagnetik**

#### **1. Gelombang Elektromagnetik**

**Definisi:**
Gelombang yang terdiri dari medan listrik dan medan magnet yang berosilasi tegak lurus satu sama lain, merambat dengan kecepatan cahaya.

**Karakteristik:**
- Tidak perlu medium (bisa merambat di vakum)
- Kecepatan = 3 × 10⁸ m/s (c)
- Energi proporsional dengan frekuensi

#### **2. Spektrum Elektromagnetik**

**Definisi:**
Jajaran gelombang EM dari panjang gelombang terpanjang hingga terpendek (atau frekuensi terendah hingga tertinggi).

**7 Jenis Spektrum:**

```
Radio ← Microwave ← Infrared ← Visible ← UV ← X-ray ← Gamma
│      │           │          │        │    │       │
← Panjang Gelombang ────────────────────────────────→ Pendek →
← Frekuensi Rendah ────────────────────────────────→ Tinggi →
← Energi Rendah ────────────────────────────────→ Tinggi →
```

#### **3. Hubungan λ, f, c**

**Persamaan Gelombang:**
```
c = λ × f

Dimana:
c = kecepatan cahaya = 3 × 10⁸ m/s (konstan)
λ = panjang gelombang (meter)
f = frekuensi (Hz)
```

**Makna:**
- Jika λ naik → f turun (untuk mempertahankan c konstan)
- Jika λ turun → f naik
- Hubungan INVERSELY PROPORTIONAL

**Analogi:**
```
Bayangkan lorry mengangkut kotak:
λ = ukuran setiap kotak
f = jumlah kotak per satuan waktu
c = total barang yang tiba per satuan waktu (konstan)

Jika kotak besar (λ besar) → sedikit kotak per waktu (f kecil)
Jika kotak kecil (λ kecil) → banyak kotak per waktu (f besar)
```

#### **4. Energi Foton (E = hf)**

**Persamaan Energi:**
```
E = h × f

Dimana:
E = energi foton (Joule atau eV)
h = konstanta Planck = 6.626 × 10⁻³⁴ J·s
f = frekuensi (Hz)
```

**Makna:**
- Energi foton PROPORSIONAL dengan frekuensi
- Semakin tinggi f → semakin besar E
- Setiap foton menjadi lebih "energik"

**Kombinasi dengan λ:**
```
E = hf = hc/λ

Jadi:
- Jika λ besar → E kecil (radio: energi rendah)
- Jika λ kecil → E besar (gamma: energi tinggi)
```

#### **5. Setiap Spektrum**

**📻 RADIO**
- λ: > 1 m (panjang!)
- f: < 3 GHz
- E: < 10 μeV
- Energi paling rendah
- Penetrasi: sangat baik
- Aplikasi: komunikasi, broadcast
- Bahaya: minimal

**🌊 MICROWAVE**
- λ: 1 mm - 1 m
- f: 300 MHz - 300 GHz
- E: 0.1 meV - 100 meV
- Penetrasi: baik (tapi diserap air)
- Aplikasi: oven, radar, WiFi
- Bahaya: paparan tinggi merusak jaringan

**🔥 INFRAMERAH**
- λ: 700 nm - 1 mm
- f: 300 GHz - 430 THz
- E: 100 meV - 1.77 eV
- Heat radiation
- Aplikasi: thermal imaging, remote
- Bahaya: paparan intensitas tinggi

**👁️ CAHAYA TAMPAK**
- λ: 400 nm - 700 nm (spektrum warna!)
- f: 430 - 750 THz
- E: 1.8 - 3.1 eV
- Satunya yang mata manusia bisa lihat!
- ROY G. BIV: Red Orange Yellow Green Blue Indigo Violet
- Aplikasi: penglihatan, fotografi
- Bahaya: cahaya terang merusak mata

**☀️ ULTRAVIOLET**
- λ: 10 nm - 400 nm
- f: 750 THz - 30 PHz
- E: 3.1 - 124 eV
- Ionizing radiation mulai dari sini
- Aplikasi: desinfeksi, tabir surya
- Bahaya: kanker kulit, kerusakan mata

**🩻 SINAR-X**
- λ: 0.01 nm - 10 nm
- f: 30 PHz - 30 EHz
- E: 124 eV - 124 keV
- Ionizing radiation tinggi
- Penetrasi: menembus jaringan lunak
- Aplikasi: radiologi, analisis material
- Bahaya: kanker, mutasi DNA

**☢️ SINAR GAMMA**
- λ: < 0.01 nm (SANGAT PENDEK!)
- f: > 30 EHz
- E: > 124 keV
- Energi TERTINGGI
- Dari peluruhan radioaktif
- Aplikasi: terapi kanker, sterilisasi
- Bahaya: SANGAT BERBAHAYA

### **Aplikasi Praktis Setiap Spektrum**

| Spektrum | Aplikasi | Alasan |
|---|---|---|
| Radio | Siaran radio, TV, komunikasi jarak jauh | Penetrasi baik, energi rendah, aman |
| Microwave | Oven, satelit, radar, WiFi | Diserap air, tepat untuk pemanasan |
| Inframerah | Remote, termostat, thermal imaging | Heat detection, bisa fokus di lensa |
| Cahaya Tampak | Penglihatan, fotografi, lighting | Mata sensitif, energi sesuai |
| Ultraviolet | Desinfeksi, sterilisasi, tabir surya | Ionizing, membunuh bakteri |
| Sinar-X | Radiologi medis, analisis kristal | Penetrasi tinggi, gambar dalam |
| Sinar Gamma | Terapi kanker, sterilisasi | Energi tertinggi, radiasi ionisasi |

### **Safety & Health Implications**

**Non-Ionizing Radiation (Radio - Infrared):**
```
✅ Aman pada intensitas normal
⚠️ Paparan tinggi bisa merusak jaringan (panas)
📋 Contoh: microwave oven shield, thermal burns
```

**Ionizing Radiation (UV - Gamma):**
```
❌ Berbahaya! Merusak DNA
📋 UV: kanker kulit, kerusakan mata
📋 X-ray: kanker, mutasi (perlu lead apron)
📋 Gamma: sangat berbahaya, radioaktif
⚠️ Harus dengan proteksi khusus
```

### **Rumus-Rumus Penting**

```
c = λ × f           (Persamaan gelombang)
E = hf              (Energi foton)
E = hc/λ            (Energi foton via wavelength)
f = 1/T             (Frekuensi = 1/Periode)
v = d/t             (Kecepatan = jarak/waktu)

Konstanta:
h = 6.626 × 10⁻³⁴ J·s (Planck)
c = 3 × 10⁸ m/s (Speed of light)
1 eV = 1.602 × 10⁻¹⁹ J (Electron volt)
```

### **Unit Konversi**

```
Panjang Gelombang:
1 m = 10³ mm = 10⁶ μm = 10⁹ nm = 10¹² pm

Frekuensi:
1 Hz = 1/s
1 kHz = 10³ Hz
1 MHz = 10⁶ Hz = 1 Megahertz
1 GHz = 10⁹ Hz = 1 Gigahertz
1 THz = 10¹² Hz = 1 Terahertz

Energi:
1 eV = 1.602 × 10⁻¹⁹ J
1 keV = 10³ eV = 1000 eV
1 meV = 10⁻³ eV = 0.001 eV
```

---

## Referensi Tambahan

### **Buku Panduan:**
- Fisika Kelas XII (Kemendikbud)
- University Physics (Young & Freedman)
- Physics 101 (Khan Academy)

### **Video Edukatif:**
- Khan Academy: Electromagnetic Spectrum
- Kurzgesagt: Electromagnetic Spectrum
- TED-Ed: How Do We See Colors?

### **Website Referensi:**
- NASA: Electromagnetic Spectrum
- PhET Interactive Simulations
- Hyperphysics (Georgia State)

---

## Feedback & Improvement

Kami terus improve aplikasi ini. Jika ada saran:

```
📧 Email: [developer@email.com]
🐛 GitHub Issues: [repository/issues]
💬 Forum Diskusi: [platform]
```

---

**Terima kasih telah menggunakan Media Pembelajaran Spektrum Gelombang Elektromagnetik!**

Semoga aplikasi ini membantu Anda memahami dunia gelombang elektromagnetik dengan lebih baik. 🌌✨

---

**Dokumen ini terakhir diupdate: Juli 2024**

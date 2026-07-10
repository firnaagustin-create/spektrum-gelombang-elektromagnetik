# 📚 Spektrum Gelombang Elektromagnetik - Media Pembelajaran Interaktif

Selamat datang! Ini adalah media pembelajaran interaktif berbasis web untuk mempelajari **Spektrum Gelombang Elektromagnetik** kelas XII SMA. Media ini dirancang menggantikan JavaLab dengan fitur-fitur modern, responsif, dan mudah digunakan.

![Status](https://img.shields.io/badge/Status-Active-brightgreen)
![Version](https://img.shields.io/badge/Version-1.0.0-blue)
![License](https://img.shields.io/badge/License-Educational-orange)

## 🎯 Tujuan Media Pembelajaran

Media pembelajaran ini membantu siswa untuk:

✅ Mengeksplorasi spektrum gelombang elektromagnetik secara interaktif  
✅ Memahami hubungan antara panjang gelombang (λ), frekuensi (f), dan energi foton (E = hf)  
✅ Mengidentifikasi sumber dan contoh pemanfaatan setiap spektrum  
✅ Melengkapi tabel hasil pengamatan  
✅ Menjawab pertanyaan refleksi dan kuis evaluasi  
✅ Belajar mandiri dengan pace yang fleksibel  

## 🌟 Fitur Utama

### 1. **Dual Mode Pembelajaran**
- **Mode Eksplorasi**: Jelajahi spektrum secara bebas tanpa batasan
- **Mode Pembelajaran**: Ikuti alur LKPD yang terstruktur langkah demi langkah

### 2. **Slider Interaktif Spektrum**
- Geser slider dari Radio hingga Sinar Gamma
- Real-time visualization: λ, f, E
- Update otomatis untuk setiap posisi slider

### 3. **Visualisasi Gelombang Dinamis**
- Animasi bentuk gelombang yang berubah sesuai spektrum
- Gelombang radio panjang, gamma pendek
- Canvas-based rendering untuk performa optimal

### 4. **Data Spektrum Lengkap**
Untuk setiap spektrum ditampilkan:
- 📊 Rentang panjang gelombang
- 📊 Rentang frekuensi
- ⚡ Energi foton
- 📡 Sumber
- 💡 Aplikasi praktis
- ✨ Manfaat
- ⚠️ Potensi bahaya

### 5. **Tabel Pengamatan**
- Siswa mengisi data hasil eksplorasi
- 7 baris untuk 7 jenis spektrum
- Input fields untuk λ, f, E, dan aplikasi

### 6. **Pertanyaan Refleksi**
- 3 pertanyaan konsep tingkat tinggi
- Mendorong pemahaman mendalam
- Textarea untuk jawaban siswa

### 7. **Matching Activity (Drag & Drop)**
- Tarik aplikasi ke spektrum yang sesuai
- 7 aplikasi untuk 7 spektrum
- Feedback warna (hijau=benar, merah=salah)
- Real-time scoring

### 8. **Kuis Interaktif**
- 5 soal pilihan ganda
- Instant feedback untuk setiap jawaban
- Pembedaan visual (benar/salah)
- Perhitungan otomatis skor

### 9. **Hasil & Ringkasan Belajar**
- Skor berbentuk persentase dengan animasi
- Ringkasan soal benar/salah
- Skor pencocokan aplikasi
- Feedback performa
- Rekomendasi tindak lanjut

### 10. **Responsive Design**
- ✅ Desktop (1920px ke atas)
- ✅ Tablet (768px - 1024px)
- ✅ Mobile (480px - 768px)
- ✅ Smartphone (< 480px)

### 11. **Offline Capability**
- Tidak memerlukan koneksi internet
- Semua file lokal (HTML/CSS/JS murni)
- Dapat dijalankan dari file lokal

### 12. **UI/UX Modern**
- Gradient backgrounds
- Smooth animations & transitions
- Color-coded spectrum (Radio hingga Gamma)
- Konsisten dengan prinsip desain pendidikan
- Dark-friendly dengan light theme

## 📋 Persyaratan Sistem

### Browser yang Didukung
- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Opera 76+

### Spesifikasi Minimum
- RAM: 512MB (cukup untuk browser)
- Storage: 1MB (ukuran keseluruhan)
- OS: Windows, macOS, Linux, Android, iOS

## 📁 Struktur Folder

```
spektrum-gelombang-elektromagnetik/
│
├── index.html              # File HTML utama
├── style.css               # Stylesheet lengkap
├── script.js               # JavaScript semua fungsi
│
├── README.md               # File ini (dokumentasi singkat)
├── PANDUAN.md              # Panduan lengkap & cara penggunaan
│
└── assets/                 # (Opsional untuk gambar/ikon)
    ├── images/
    │   ├── radio.svg
    │   ├── microwave.svg
    │   ├── infrared.svg
    │   ├── visible.svg
    │   ├── ultraviolet.svg
    │   ├── xray.svg
    │   └── gamma.svg
    └── data/
        └── spektrum-data.json
```

## 🚀 Cara Menjalankan

### **Desktop (Windows/macOS/Linux)**

1. **Unduh file**
   ```bash
   git clone https://github.com/firnaagustin-create/spektrum-gelombang-elektromagnetik.git
   cd spektrum-gelombang-elektromagnetik
   ```

2. **Buka file HTML**
   - Cara 1: Double-click `index.html`
   - Cara 2: Klik kanan → Open with → Browser pilihan Anda
   - Cara 3: Gunakan Local Server (rekomendasi untuk fitur tertentu)

   **Menggunakan Local Server (Python):**
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Buka browser: http://localhost:8000
   ```

   **Menggunakan Local Server (Node.js):**
   ```bash
   npm install -g http-server
   http-server
   ```

### **Smartphone/Tablet**

1. **Transfer file ke device**
   - Via USB cable, email, atau cloud storage
   - Letakkan di folder yang mudah diakses

2. **Buka dengan browser**
   - Chrome, Firefox, Safari, atau browser lainnya
   - Navigasi ke file `index.html`

3. **Simpan shortcut (opsional)**
   - Buka di browser → Menu → "Add to Home Screen"
   - Akan muncul seperti aplikasi native

## 🎓 Alur Pembelajaran

### **Mode Eksplorasi**
1. Klik "Mode Eksplorasi" di home
2. Geser slider untuk menjelajahi spektrum
3. Amati perubahan λ, f, E secara real-time
4. Baca informasi detail setiap spektrum
5. Lihat animasi gelombang berubah
6. Dapat kembali ke home atau lanjut ke mode pembelajaran

### **Mode Pembelajaran (5 Langkah)**

**Langkah 1: Eksplorasi Spektrum**
- Geser slider dengan panduan terstruktur
- Pelajari setiap jenis spektrum
- Amati visualisasi gelombang

**Langkah 2: Tabel Pengamatan**
- Isi tabel dengan data dari eksplorasi
- Jawab 3 pertanyaan refleksi
- Simpan jawaban di memori browser (opsional)

**Langkah 3: Pencocokan Aplikasi**
- Tarik aplikasi ke spektrum yang sesuai
- Dapatkan feedback warna-warni
- Reset jika ingin mengulang

**Langkah 4: Kuis Interaktif**
- Jawab 5 soal pilihan ganda
- Lihat feedback untuk setiap soal
- Sistem auto-calculate skor

**Langkah 5: Hasil & Ringkasan**
- Lihat skor kuis dalam lingkaran animasi
- Review ringkasan hasil belajar
- Baca rekomendasi tindak lanjut
- Reset pembelajaran atau kembali home

## 📊 Data Spektrum

Media ini mencakup 7 jenis spektrum elektromagnetik:

| No | Spektrum | Rentang λ | Rentang f | Aplikasi |
|---|---|---|---|---|
| 1 | 📻 Radio | 1m - 1km | 3×10⁵ - 3×10⁹ Hz | Siaran radio, TV |
| 2 | 🌊 Microwave | 1mm - 1m | 3×10⁸ - 3×10¹¹ Hz | Oven, satelit, radar |
| 3 | 🔥 Inframerah | 700nm - 1mm | 3×10¹¹ - 4.3×10¹⁴ Hz | Remote, termostat |
| 4 | 👁️ Cahaya Tampak | 400nm - 700nm | 4.3×10¹⁴ - 7.5×10¹⁴ Hz | Penglihatan, foto |
| 5 | ☀️ Ultraviolet | 10nm - 400nm | 7.5×10¹⁴ - 3×10¹⁶ Hz | Desinfeksi, UV |
| 6 | 🩻 Sinar-X | 0.01nm - 10nm | 3×10¹⁶ - 3×10¹⁹ Hz | Radiologi, analisis |
| 7 | ☢️ Sinar Gamma | 0.0001nm - 0.01nm | 3×10¹⁹ - 3×10²⁴ Hz | Terapi, sterilisasi |

## ⌨️ Keyboard Shortcuts

| Tombol | Fungsi |
|---|---|
| `ESC` | Kembali ke Home |
| `→` (Arrow Right) | Langkah Berikutnya |
| `←` (Arrow Left) | Langkah Sebelumnya |

## 💾 Penyimpanan Data

Media ini **tidak menyimpan data secara permanen** di server. Semua data input:
- ✅ Tersimpan di browser memory (selama session)
- ❌ Tidak tersimpan setelah browser ditutup
- ❌ Tidak dikirim ke server

Untuk menyimpan hasil, siswa dapat:
1. Screenshot halaman hasil
2. Print ke PDF (Ctrl+P)
3. Catat manual jawaban penting

## 🔧 Customization

### Mengubah Warna Spektrum
Edit di `style.css`:
```css
--color-radio: #FF6B6B;
--color-microwave: #FFA500;
--color-infrared: #FF8C42;
--color-visible: #FFD700;
--color-ultraviolet: #9D4EDD;
--color-xray: #3A86FF;
--color-gamma: #00D9FF;
```

### Mengubah Data Spektrum
Edit di `script.js`, array `spectrumData`:
```javascript
const spectrumData = [
    {
        name: "Radio",
        // ... data lainnya
    }
];
```

### Menambah/Mengurangi Soal Kuis
Tambahkan HTML di `index.html` section Kuis, lalu update logic di `script.js`.

## 📱 Tips Penggunaan

### Untuk Guru
1. **Pre-Learning**: Gunakan di kelas untuk motivasi
2. **Main Activity**: Siswa eksplorasi dengan Mode Eksplorasi
3. **Structured Learning**: Mode Pembelajaran untuk LKPD
4. **Assessment**: Kuis interaktif untuk evaluasi
5. **Discussion**: Bahas hasil matching dan refleksi

### Untuk Siswa
1. Mulai dengan Mode Eksplorasi untuk familiarisasi
2. Pahami hubungan λ-f-E dengan visualisasi
3. Isi tabel pengamatan dengan teliti
4. Jangan hanya menebak di kuis - pahami setiap soal
5. Ulangi pembelajaran jika skor kurang memuaskan

## 🐛 Troubleshooting

### Gelombang tidak animasi
- ✅ Refresh halaman (F5)
- ✅ Bersihkan cache browser
- ✅ Gunakan browser yang lebih baru
- ✅ Pastikan JavaScript enabled

### Drag & Drop tidak bekerja
- ✅ Gunakan browser desktop (mobile kadang limited)
- ✅ Refresh halaman
- ✅ Jika mobile, gunakan landscape mode
- ✅ Coba browser berbeda

### Nilai tidak tersimpan
- ⚠️ Ini normal - data hanya di memory
- 📷 Screenshot atau print hasil sebelum tutup browser
- 💾 Simpan jawaban ke notepad jika perlu

### Mobile display bermasalah
- ✅ Jangan rotate terlalu cepat
- ✅ Zoom out jika teks terlalu besar
- ✅ Gunakan landscape untuk slider lebih smooth

## 📚 Referensi Fisika

**Formula Penting:**
- c = λ × f (kecepatan cahaya = λ × frekuensi)
- E = hf (energi foton = Planck × frekuensi)
- h = 6.626 × 10⁻³⁴ J·s (Konstanta Planck)
- c = 3 × 10⁸ m/s (Kecepatan cahaya)

**Hubungan Spektrum:**
- Semakin panjang λ → Semakin kecil f → Semakin kecil E
- Semakin pendek λ → Semakin besar f → Semakin besar E

## 🎨 Design Philosophy

Media ini mengikuti prinsip UI/UX untuk pendidikan:

1. **Simplicity**: Interface bersih, tidak membingungkan
2. **Clarity**: Informasi jelas dan terorganisir
3. **Consistency**: Desain konsisten di semua halaman
4. **Color Coding**: Warna untuk spektrum yang akurat
5. **Feedback**: Instant feedback untuk interaksi
6. **Accessibility**: Dapat diakses semua kalangan
7. **Responsiveness**: Beradaptasi dengan semua ukuran layar

## 📄 Lisensi & Credit

**Lisensi**: Educational License - Bebas digunakan untuk pembelajaran  
**Developer**: Firna Agustin (Education Tech)  
**Created**: 2024-2025  

Dibuat khusus untuk pembelajaran fisika SMA tentang Spektrum Gelombang Elektromagnetik.

## 🤝 Kontribusi & Feedback

Kami menerima feedback untuk perbaikan:
- 🐛 Lapor bug
- 💡 Saran fitur
- ✨ Improvement
- 📖 Konten tambahan

## 📞 Support

Untuk bantuan lebih lanjut, lihat file **PANDUAN.md** yang berisi:
- Penjelasan detail setiap fitur
- FAQ (Frequently Asked Questions)
- Tips & tricks
- Contoh penggunaan
- Troubleshooting lengkap

---

## 🎉 Selamat Belajar!

Semoga media pembelajaran ini membantu Anda memahami **Spektrum Gelombang Elektromagnetik** dengan lebih mudah, interaktif, dan menyenangkan!

**Ingat**: Fisika bukan hanya tentang rumus, tapi tentang memahami alam semesta! 🌌✨

---

**Last Updated**: July 2024  
**Version**: 1.0.0

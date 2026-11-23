# Sistem Pembelian Tiket Bioskop "Cinema Ku" (CLI)

**Kelas / Kelompok:** T1B / Kelompok-2
**Link Repository:** https://github.com/izzamkvinn/Sistem-Pemesanan-Tiket-Bioskop
**Mata Kuliah:** Pemrograman Dasar
**Tahun Akademik:** 2026/2027

---

## A. Daftar Anggota & Pembagian Tugas

| No. | Nama Anggota | NIM | Akun GitHub | Tugas dan Tanggung Jawab |
|---|---|---|---|---|
| 1 | Vaneisha Raissa Hendriska | `263140701111032` | `@vaneisharaissa` | Identifikasi entitas dan properti data, Penyusunan proposal/laporan, dokumentasi (`README.md` & draft laporan), serta pengembangan fitur **Registrasi, Login, Verifikasi Usia, Pemilihan Genre Film, dan Pemilihan Jadwal Hari**. |
| 2 | Kevin Izzam Muhammad | `263140701111005` | `@izzamkvinn` | Pengelolaan repository GitHub, konfigurasi awal project (`.gitignore`, `tsconfig.json`, `package.json`), Penyusunan proposal/laporan, analisis permasalahan, serta pengembangan fitur **Pemilihan Jumlah Tiket, Perhitungan Harga, Diskon, dan Mencetak Struk**. |
| 3 | Reni Andriani | `263140701111002` | `@reniandriani282628-droid` | Penyusunan proposal/laporan, Pencatatan kontribusi anggota, pengembangan fitur **Registrasi Akun, Riwayat Pemesanan, Pembatalan Pemesanan, dan Logout**, serta pengujian program. |

---

## B. Proposal & Analisis Awal

### 1. Tema & Deskripsi Masalah
* **Tema:** Sistem Pembelian & Manajemen Tiket Bioskop "Cinema Ku" Berbasis Console (TypeScript).
* **Deskripsi Masalah:** Pengelola bioskop membutuhkan aplikasi berbasis teks (*command-line*) yang praktis agar pelanggan dapat memesan tiket secara mandiri dan terstruktur. Pelanggan harus mendaftar dan login terlebih dahulu, lalu sistem memverifikasi usia agar film dengan batasan umur (misalnya genre **Horor** 17+) hanya dapat dipesan oleh pelanggan yang memenuhi syarat. Setelah memilih **genre film**, **jumlah tiket**, dan **jadwal tayang : Senin-Minggu (Weekday/Weekend)**, sistem menghitung harga serta **diskon secara otomatis**, mencetak **struk**, dan menyimpan **riwayat pemesanan** yang dapat dibatalkan jika pelanggan berubah pikiran. Dengan begitu, kesalahan hitung manual dan antrean di loket dapat dikurangi.

### 2. Identifikasi Entitas & Properti Data

**Entitas 1: `Akun`**
* `username`: `string` — Nama pengguna unik untuk login
* `password`: `string` — Kata sandi akun
* `namaLengkap`: `string` — Nama lengkap pengguna
* `usia`: `number` — Usia pengguna (hasil verifikasi usia)

**Entitas 2: `PesananTiket`**
* `idPesanan`: `string` — Kode unik pesanan (contoh: `ORD-001`)
* `username`: `string` — Pemilik pesanan (relasi ke `Akun`)
* `genreFilm`: `string` — Genre yang dipilih (`Aksi`, `Komedi`, `Animasi`, `Drama`, `Horor`)
* `batasUsia`: `number` — Batas usia minimum genre (Animasi: 0, Komedi: 13, Aksi: 13, Drama: 13, Horor: 17)
* `jadwal`: `string` — Jadwal tayang (`Weekday` atau `Weekend`)
* `jumlahTiket`: `number` — Banyak tiket yang dipesan (maksimal 10)
* `hargaPerTiket`: `number` — Harga dasar per tiket (Weekday: Rp 35.000, Weekend: Rp 50.000)
* `subtotal`: `number` — `hargaPerTiket × jumlahTiket`
* `diskon`: `number` — Potongan harga otomatis (lihat aturan diskon)
* `totalBayar`: `number` — `subtotal − diskon`
* `status`: `string` — Status pesanan (`Aktif` atau `Dibatalkan`)

**Aturan Diskon Otomatis:**
| Kondisi | Diskon |
|---|---|
| Jadwal **Weekday** | 10% dari subtotal |
| Membeli **3–4 tiket** | 5% dari subtotal |
| Membeli **≥ 5 tiket** | 10% dari subtotal |

> Diskon Weekday dan diskon jumlah tiket dapat digabung (dijumlahkan persentasenya).

### 3. Daftar Fitur Utama & Decomposition Awal
1. **Registrasi Akun:** Menerima nama lengkap, usia, username, dan password; memvalidasi username belum dipakai, lalu menyimpan akun ke dalam array.
2. **Login:** Memeriksa kecocokan username dan password; batas percobaan login maksimal 3 kali.
3. **Verifikasi Usia:** Memeriksa `usia` akun terhadap `batasUsia` genre yang dipilih; pesanan ditolak jika usia belum mencukupi.
4. **Pilih Genre Film:** Menampilkan menu genre beserta batas usianya, lalu memvalidasi pilihan.
5. **Pilih Jumlah Tiket:** Menerima jumlah tiket (1–10) dengan validasi input angka.
6. **Pilih Jadwal (Weekday/Weekend):** Menentukan harga dasar per tiket berdasarkan jadwal.
7. **Hitung Harga Otomatis:** Menghitung `subtotal = hargaPerTiket × jumlahTiket`.
8. **Diskon Otomatis:** Menerapkan aturan diskon pada subtotal dan menghasilkan `totalBayar`.
9. **Cetak Struk:** Menampilkan rincian pesanan (ID, nama, genre, jadwal, jumlah, subtotal, diskon, total bayar) di console.
10. **Riwayat Pemesanan:** Menampilkan seluruh pesanan milik akun yang sedang login beserta statusnya.
11. **Batalkan Pesanan:** Mengubah status pesanan menjadi `Dibatalkan` berdasarkan `idPesanan` (disertai konfirmasi sebelum membatalkan).
12. **Log out:** Mengakhiri sesi pengguna dan kembali ke menu awal (Login/Registrasi).

**Alur Program (Decomposition):**
```
Menu Awal → Registrasi / Login
   └─ Menu Utama (setelah login)
        ├─ Pesan Tiket
        │    ├─ Pilih Genre → Verifikasi Usia
        │    ├─ Pilih Jadwal → Pilih Jumlah Tiket
        │    ├─ Hitung Harga → Hitung Diskon
        │    └─ Simpan Pesanan → Cetak Struk
        ├─ Riwayat Pemesanan
        ├─ Batalkan Pesanan
        └─ Log out
```

---

## C. Rencana Pengembangan Project
Pengembangan project dilakukan melalui beberapa tahapan:
1. Persiapan repository public dan konfigurasi awal TypeScript (`.gitignore`, `tsconfig.json`, `package.json`, `src/index.ts`).
2. Penyusunan proposal, analisis permasalahan, serta draft awal laporan (Sampul, Sub-bab 1.1, 1.2, dan rencana 3.2) di folder `docs/`.
3. Perancangan struktur data (`interface` `Akun` dan `PesananTiket`) dan alur logika program (*decomposition*).
4. Implementasi fitur autentikasi (Registrasi, Login, Log out) dan verifikasi usia.
5. Implementasi fitur pemesanan (genre, jumlah, jadwal), perhitungan harga & diskon, serta cetak struk.
6. Implementasi riwayat pemesanan dan pembatalan pesanan.
7. Pengujian dan evaluasi program pada seluruh skenario input dan validasi.
8. Penyusunan dokumentasi akhir dan laporan UAS.

---

## D. Progress Pengerjaan

### Progress 1
- [ ] Membuat repository GitHub dengan visibilitas **Public**.
- [ ] Menyiapkan struktur awal project (`.gitignore`, `tsconfig.json`, `package.json`, dan `src/index.ts`).
- [ ] Menyiapkan program `"Hello console"` di `src/index.ts` dan memastikan dapat dijalankan oleh semua anggota.
- [ ] Setiap anggota melakukan minimal 1 *commit* menggunakan akun GitHub masing-masing.
- [ ] Melengkapi `README.md` awal (daftar anggota, NIM, akun GitHub, dan tabel pembagian tugas).
- [ ] Mengunggah proposal & analisis awal (tema, deskripsi masalah, entitas & properti, daftar fitur, *decomposition* awal) pada `docs/` atau `README.md`.
- [ ] Menyimpan draft awal laporan (Halaman Sampul, Sub-bab 1.1, 1.2 awal, dan rencana tabel kontribusi 3.2) di folder `docs/` pada *branch* `main`.

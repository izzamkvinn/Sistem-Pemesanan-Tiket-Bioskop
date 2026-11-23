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

### Tema & Deskripsi Masalah
* **Tema:** Sistem Pembelian & Manajemen Tiket Bioskop "Cinema Ku" Berbasis Console (TypeScript).
* **Deskripsi Masalah:** Pengelolaan data pemesanan tiket bioskop yang masih dilakukan secara manual rentan terhadap kesalahan pencatatan, data ganda, dan salah hitung harga, terutama saat ada biaya tambahan akhir pekan dan diskon. Aplikasi console ini dibutuhkan agar data tiket dapat ditambah, dilihat, diubah, dihapus, dan dicari dengan cepat dan akurat. Total harga dihitung otomatis dari genre film, jumlah tiket, dan jenis hari tayang, sehingga kasir tidak perlu menghitung manual..

###  Pengguna Sistem
Kasir / petugas loket bioskop — operator utama yang mencatat dan mengubah pemesanan.
Admin bioskop — mengelola dan memantau seluruh data tiket.

### Identifikasi Entitas & Properti Data
| Properti | Tipe | Keterangan |
|----------|------|------------|
| id | string | Kode unik tiket, misal "TKT001" |
| namaPemesan | string | Nama pembeli tiket |
| genre | string | Action / Drama / Horor |
| jumlahTiket | number | Banyak tiket yang dibeli |
| totalHarga | number | Total bayar setelah biaya akhir pekan dan diskon |
| isWeekend | boolean | true jika tayang akhir pekan |
| sudahBayar | boolean | Status pembayaran |

interface Tiket {
  id: string;
  namaPemesan: string;
  genre: string;
  jumlahTiket: number;
  totalHarga: number;
  isWeekend: boolean;
  sudahBayar: boolean;
}


## Aturan Perhitungan Harga

| Genre | Harga Dasar |
|-------|-------------|
| Action | Rp 50.000 |
| Drama | Rp 40.000 |
| Horor | Rp 45.000 |

| Komponen | Aturan |
|----------|--------|
| Biaya tambahan Weekend | + Rp 15.000 per tiket. |
| Harga per tiket | = harga dasar genre + biaya tambahan hari. |
| Subtotal | = harga per tiket × jumlah tiket. |
| Diskon 10% | diberikan jika subtotal ≥ Rp 150.000. |
| Total bayar | = subtotal − diskon. |

**Contoh:** 3 tiket Action di Weekend

| Langkah | Perhitungan |
|---------|-------------|
| Subtotal | (50.000 + 15.000) × 3 = Rp 195.000 |
| Diskon 10% | Rp 19.500 |
| Total bayar | Rp 175.500 |

> Diskon Weekday dan diskon jumlah tiket dapat digabung (dijumlahkan persentasenya).


**Fitur**
Create	Menambah pemesanan tiket baru
Read	Menampilkan seluruh tiket dalam bentuk tabel di terminal
Read by ID	Menampilkan detail satu tiket berdasarkan ID
Update	Mengubah genre, jumlah tiket, jenis hari, dan status pembayaran
Delete	Menghapus tiket berdasarkan ID
Search	Mencari tiket berdasarkan nama pemesan atau genre film

### Data Input
Menu	Input
Create	ID tiket, nama pemesan, genre film (Action/Drama/Horor), jumlah tiket, jenis hari (Weekday/Weekend)
Read by ID	ID tiket yang dicari
Update	ID tiket + data baru (genre, jumlah tiket, jenis hari, status pembayaran)
Delete	ID tiket yang akan dihapus
Search	Kata kunci (nama pemesan atau genre film)

### Data Output
Daftar seluruh tiket dalam bentuk tabel di terminal.
Detail satu tiket (hasil Read by ID).
Hasil pencarian berdasarkan kata kunci.
Kalkulasi otomatis: harga per tiket, diskon 10% (jika total ≥ Rp 150.000), dan total bayar.
Pesan notifikasi & validasi, misalnya:
Data berhasil ditambahkan
ID tidak ditemukan
ID sudah terdaftar
Jumlah tiket minimal 1
Pilihan menu tidak valid

### Struktur proyek

UTS/
├── src/
│   ├── tiketbioskop.ts      # kode sumber utama
│   └── tiketbioskop.js      # hasil kompilasi
├── package.json
├── package-lock.json
└── tsconfig.json


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
## Yang sudah selesai di Progress 1

1. Repositori dibuat (Publik) — **Selesai**
2. Pembagian tugas ditulis di README — **Selesai**
3. Proposal dan analisis awal — **Selesai**
4. Draf laporan di folder `docs/` — **Selesai**
5. Semua anggota sudah punya minimal 1 komitmen — **Selesai**
   
**Tautan DOCS Laporan Bagian A:** [isi tautan di sini](https://docs.google.com/)

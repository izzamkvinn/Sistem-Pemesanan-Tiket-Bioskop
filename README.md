# Sistem Pemesanan Tiket Bioskop (CLI)

**Kelas / Kelompok:** T1B / Kelompok 2
**Mata Kuliah:** Pemrograman Dasar
**Dosen Pengampu:** Salnan Ratih Asriningtias, ST., MT.
**Link Repository:** https://github.com/izzamkvinn/Sistem-Pemesanan-Tiket-Bioskop

---

## Daftar Anggota

| No | Nama | NIM | Akun GitHub |
|---|---|---|---|
| 1 | Vaneisha Raissa Hendriska | 263140700111032 | [@vaneisharaissa](https://github.com/vaneisharaissa) |
| 2 | Kevin Izzam Muhammad | 263140701111005 | [@izzamkvinn](https://github.com/izzamkvinn) |
| 3 | Reni Andriani | 263140701111002 | [@reniandriani282628-droid](https://github.com/reniandriani282628-droid) |

## Pembagian Tugas

| Anggota | Tugas Program | Tugas Dokumentasi |
|---|---|---|
| Vaneisha Raissa Hendriska | Menu utama, Create (input dan validasi usia, genre, jadwal), Delete | README | 
| Kevin Izzam Muhammad | Membuat repository GitHub, Konfigurasi project, Read, Search, Update, pengelolaan repository |Dekomposisi masalah (Bab 1.2) |
| Reni Andriani | Perhitungan harga, diskon, dan cetak struk (bagian Create), pengujian | Deskripsi masalah (Bab 1.1) |

---

## Deskripsi Aplikasi

Aplikasi ini adalah program pemesanan tiket bioskop berbasis terminal. Di UTS, program hanya memproses satu transaksi. Di UAS, program dikembangkan agar kasir dapat mengelola data pesanan tiket: menambah, melihat, mengubah, menghapus, dan mencari menggunakan array.

**Masalah yang terselesaikan:** pencatatan tiket secara manual sering salah saat antrean ramai. Kasir harus menghitung harga berdasarkan genre, biaya tambahan akhir pekan, dan diskon, sehingga mudah keliru dan antrean menjadi panjang.

**Pengguna:** kasir atau admin bioskop.

---

## Data yang Dikelola (Entitas Tiket)

| Properti | Tipe | Keterangan |
|---|---|---|
| `id` | string | Kode unik tiket, contoh `TKT001` |
| `namaPemesan` | string | Nama pembeli tiket |
| `genre` | string | Action, Drama, atau Horor |
| `jenisHari` | string | Weekday atau Weekend |
| `jumlahTiket` | number | Banyak tiket yang dibeli |
| `totalHarga` | number | Total bayar setelah diskon |
| `dapatDiskon` | boolean | `true` jika total mencapai Rp 150.000 atau lebih |
| `sudahBayar` | boolean | Status pembayaran, awalnya `false` dan dapat diubah lewat menu Update |

**Aturan harga:**
- Action Rp 50.000, Drama Rp 40.000, Horor Rp 45.000 per tiket
- Weekend: tambahan Rp 15.000 per tiket
- Diskon 10% jika total belanja mencapai Rp 150.000 atau lebih
- Usia minimum pembeli 13 tahun
- Total harga dihitung ulang otomatis setiap data diubah

---

## Fitur yang Direncanakan

1. **Menu utama:** menampilkan pilihan menu 1-7, memvalidasi input ("Pilihan menu tidak valid"), dan berulang sampai pengguna memilih keluar.
2. **Create (Pemesanan Tiket):** menambah tiket baru dengan validasi usia (minimal 13 tahun), ID unik, nama tidak kosong, genre, jumlah tiket lebih dari 0, dan jenis hari. Harga dan diskon dihitung otomatis, lalu struk dicetak. Status pembayaran awal adalah belum bayar.
3. **Read (Daftar Tiket):** menampilkan seluruh tiket dalam bentuk tabel, atau pesan informasi jika data masih kosong.
4. **Read by ID (Detail Tiket):** menampilkan detail satu tiket berdasarkan ID, atau pesan "ID tidak ditemukan".
5. **Search (Pencarian Tiket):** mencari tiket berdasarkan kata kunci nama pemesan atau genre film dengan linear search.
6. **Update (Ubah Pesanan):** mengubah genre, jumlah tiket, jenis hari, dan status pembayaran berdasarkan ID, lalu total harga dan diskon dihitung ulang.
7. **Delete (Batal / Hapus Tiket):** menghapus tiket berdasarkan ID dengan konfirmasi Y/N.

---

## Progress

| Progress | Tanggal | Target | Status |
|---|---|---|---|
| 1 | 23 Nov | Repository, pembagian tugas, proposal awal | Sedang dikerjakan |
| 2 | 27 Nov | Flowchart, struktur data dan fungsi, kerangka menu | Belum |
| 3 | 30 Nov | Fitur Create | Belum |
| 4 | 2 Des | Fitur Read | Belum |
| 5 | 4 Des | Fitur Update dan Delete | Belum |
| 6 | 7 Des | Fitur Search | Belum |
| 7 | 11 Des | Finalisasi program, laporan, dan README | Belum |

**Yang sudah selesai di Progress 1:**
-  Repository dibuat (Public) **selesai**
-  Pembagian tugas ditulis di README **selesai**
-  Proposal dan analisis awal **selesai**
- Draf laporan di folder `docs/` **selesai**
- Semua anggota sudah punya minimal 1 commit **selesai**

**Ringkasan Capaian Progress 1:**
- Repository Public aktif dengan struktur awal (`.gitignore`, `tsconfig.json`, `package.json`, `src/index.ts`) dan program "Hello console" dapat dijalankan semua anggota.
- README.md awal berisi daftar anggota, akun GitHub, dan tabel pembagian tugas.
- Proposal dan analisis awal (Bagian A) telah diunggah pada `docs/`.
- Draft laporan (Sampul, 1.1, 1.2 awal, rencana 3.2) tersimpan di `docs/` pada branch `main`.

**Tautan dokumen laporan Bagian A:** https://docs.google.com/document/d/1HWptUiUtK90lmpQoBF5mq_1dN1tpH-hY/edit?usp=sharing&ouid=117903689650903335769&rtpof=true&sd=true

## Cara Menjalankan

```bash
git clone https://github.com/izzamkvinn/Sistem-Pemesanan-Tiket-Bioskop.git
cd Sistem-Pemesanan-Tiket-Bioskop
npm install
npx ts-node src/index.ts
```

# Portfolio Mundir Muhtadi

Portfolio profesional satu halaman untuk Mundir Muhtadi, Electronics & IT Support Technician. Website ini dibuat ringan, responsif, dan dapat dipublikasikan melalui GitHub Pages.

## Isi portfolio

- Profil dan ringkasan keahlian
- IT support, embedded system, pemrograman, dan otomasi industri
- Pengalaman di MD Service Elektronik dan PT Intidaya Dinamika Sejati
- Pendidikan, prestasi, dan sertifikasi
- Lima project elektronika, IoT, FPGA, manajemen energi, dan computer vision
- Tujuh sertifikat/penghargaan dengan thumbnail dan file bukti
- Galeri dokumentasi proses pengembangan, pengerjaan alat, service, dan magang
- Kontak email, telepon, lokasi, dan GitHub

## Fitur

- Responsive design untuk mobile, tablet, dan desktop
- Dark/light mode tersimpan di `localStorage`
- Navigasi aktif, menu mobile, dan smooth scrolling
- Fallback visual ketika screenshot project belum tersedia
- Semantic HTML, keyboard focus, reduced-motion support, dan SEO dasar
- Tanpa dependency JavaScript

## Struktur file

```text
portfolio-mundir-muhtadi/
├── index.html
├── style.css
├── script.js
├── README.md
└── assets/
    ├── icons/favicon.svg
    ├── images/profile.jpg
    ├── images/certificates/*.jpg
    ├── images/evidence/*.jpeg
    ├── images/documentation/*
    ├── documents/cv.pdf
    └── documents/certificates/*.pdf
```

## Menjalankan secara lokal

Buka `index.html` langsung di browser, gunakan Live Server di VS Code, atau jalankan:

```bash
python -m http.server 8000
```

Kemudian buka `http://localhost:8000`.

## Menambahkan screenshot project

Simpan screenshot dengan nama berikut agar otomatis tampil menggantikan visual fallback:

- `assets/images/project-1.jpg`
- `assets/images/project-2.jpg`
- `assets/images/project-3.jpg`
- `assets/images/project-4.jpg`

Foto dokumentasi yang sudah tersedia berada di `assets/images/evidence/` dan `assets/images/documentation/`. Keterangan pada section Documentation disesuaikan dengan konteks visual dan nama file.

## Sertifikat

Sertifikat dan penghargaan tersedia pada `assets/documents/certificates/` serta `assets/images/certificates/`, lalu ditampilkan dengan thumbnail pada section Certificates. Dokumen yang berupa PDF dapat dibuka dan diunduh dari halaman.

Tautan repository project atau demo dapat ditambahkan langsung pada card project di `index.html` jika sudah tersedia.

## Deployment ke GitHub Pages

1. Buat repository GitHub baru, misalnya `portfolio-mundir-muhtadi`.
2. Upload seluruh isi folder ini dan pastikan `index.html` berada di root repository.
3. Buka **Settings → Pages**.
4. Pada **Build and deployment**, pilih **Deploy from a branch**.
5. Pilih branch `main` dan folder `/(root)`, lalu klik **Save**.

Jika menggunakan repository bernama `mundirmuhtadi.github.io`, alamat website menjadi `https://mundirmuhtadi.github.io/`. Jika menggunakan nama repository lain, alamatnya biasanya `https://mundirmuhtadi.github.io/nama-repository/`.

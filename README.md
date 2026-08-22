# RA & Partners — Landing Page

Landing page profil firma hukum RA & Partners, dibangun dengan React + TypeScript + Vite + Tailwind CSS, disusun dari materi Portofolio RA & Partners.

## Menjalankan secara lokal

```bash
npm install
npm run dev
```

Buka http://localhost:5173

## Build production

```bash
npm run build
npm run preview
```

## Deploy ke Vercel

**Opsi 1 — via Vercel CLI**
```bash
npm i -g vercel
vercel
```
Ikuti instruksi, lalu `vercel --prod` untuk deploy ke production.

**Opsi 2 — via dashboard Vercel**
1. Push folder ini ke repository GitHub/GitLab/Bitbucket.
2. Buka https://vercel.com/new, import repo tersebut.
3. Vercel otomatis mendeteksi framework Vite — Build Command: `npm run build`, Output Directory: `dist`. Tidak perlu konfigurasi tambahan.
4. Klik Deploy.

## Struktur konten

Semua data/salinan diedit langsung di masing-masing komponen pada `src/components/`:
- `Hero.tsx` — judul utama & kutipan pembuka
- `About.tsx` — tentang firma, visi & misi
- `Philosophy.tsx` — paradigma lama vs pendekatan RA & Partners
- `Approach.tsx` — alur kerja penanganan perkara (4 tahap)
- `Services.tsx` — empat pilar layanan & skema retainer
- `TrackRecord.tsx` — daftar pengalaman kasus
- `Testimonials.tsx` — testimoni klien
- `Contact.tsx` — kontak & CTA

## Catatan desain

Palet warna navy/brass/ivory dan tipografi Fraunces (display) + IBM Plex Sans/Mono
dipilih untuk kesan institusional-editorial, selaras dengan latar belakang firma
di ranah pengawasan publik (Ombudsman) dan audit investigatif. Elemen "berkas/registry"
(nomor berkas, notasi mono) dipakai sebagai motif visual khas, bukan dekorasi generik.

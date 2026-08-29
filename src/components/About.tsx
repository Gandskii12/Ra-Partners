const CREDENTIALS = [
  "Advokat & Investigator Senior",
  "Memiliki reputasi dan pengalaman dalam bidang advokasi hukum & pelayanan publik lebih dari 23 tahun, di antaranya 18 tahun lebih di Ombudsman RI dengan jabatan terakhir sebagai Kepala Pemeriksaan",
  "Ratusan perkara diselesaikan tanpa ke pengadilan",
  "Biaya terjangkau, pro bono untuk yang tidak mampu",
  "Jaringan luas di APH, lembaga negara & instansi pemerintah",
];

const CERTS = [
  "Audit Investigatif — Pusdiklatwas BPKP",
  "Ahli Pengadaan Barang/Jasa Pemerintah — LKPP",
  "Mediator Profesional — Pusat Mediasi Nasional",
  "Kompetensi MSDM Level VII — BNSP",
];

export default function About() {
  return (
    <section id="tentang" className="bg-paper py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="grid md:grid-cols-12 gap-8 md:gap-12">
          <div className="md:col-span-4">
            <p className="font-mono text-xs uppercase tracking-widest2 text-brass mb-4">
              Tentang Kami
            </p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl leading-[1.05] text-ink">
              Menjembatani warga dengan<br className="hidden md:block" /> penyelenggara negara.
            </h2>
          </div>

          <div className="md:col-span-8 md:pl-10 md:border-l border-ink/10">
            <p className="text-ink/80 text-lg leading-relaxed max-w-2xl text-justify">
              <strong className="font-semibold">Rully Amirulloh And Partners</strong>{" "}
              — selanjutnya disebut <strong className="font-semibold">RA & Partners</strong>,
              adalah firma hukum yang didirikan oleh Rully Amirulloh untuk menjembatani
              kesenjangan antara masyarakat, baik perorangan maupun
              korporasi, dengan penyelenggara negara. Kami memastikan setiap
              warga negara dan pelaku usaha mendapatkan hak administratifnya
              secara adil, transparan, dan terbebas dari tindakan
              maladministrasi.
            </p>

            <ul className="mt-10 grid sm:grid-cols-2 gap-x-8 gap-y-4">
              {CREDENTIALS.map((c, index) => (
                <li 
                  key={c} 
                  className={`flex gap-3 text-[15px] text-ink/75 leading-snug ${
                    index === 1 ? 'sm:col-span-2' : ''
                  }`}
                >
                  <span className="mt-2 h-1 w-1 shrink-0 bg-brass" aria-hidden="true" />
                  {c}
                </li>
              ))}
            </ul>

            <div className="mt-12 pt-8 border-t border-ink/10">
              <p className="font-mono text-xs uppercase tracking-widest2 text-ink/50 mb-4">
                Sertifikasi Profesi
              </p>
              <div className="flex flex-wrap gap-2">
                {CERTS.map((c) => (
                  <span
                    key={c}
                    className="text-xs text-ink/70 border border-ink/20 px-3 py-1.5"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 grid sm:grid-cols-2 md:grid-cols-2 gap-px bg-ink/10 border border-ink/10">
          <div className="bg-paper p-8 md:p-10">
            <p className="font-mono text-xs uppercase tracking-widest2 text-brass mb-3">Visi</p>
            <p className="font-display text-xl md:text-2xl leading-snug text-ink">
              Mewujudkan Indonesia yang adil, transparan, dan bebas
              maladministrasi melalui pengawasan berintegritas dan advokasi
              hukum yang nyata.
            </p>
          </div>
          <div className="bg-paper p-8 md:p-10">
            <p className="font-mono text-xs uppercase tracking-widest2 text-brass mb-3">Misi</p>
            <ul className="space-y-2 text-[16px] text-ink/75 leading-snug">
              <li>Audit investigatif atas penggunaan anggaran publik.</li>
              <li>Advokasi hukum rakyat tanpa pungutan liar.</li>
              <li>Mendorong reformasi birokrasi dari akar rumput.</li>
              <li>Mengadvokasi keadilan ruang & ekonomi lokal.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

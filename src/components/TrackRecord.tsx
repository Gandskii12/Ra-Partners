const CASES = [
  "Pendampingan anak perusahaan BUMN yang diperiksa Aparat Penegak Hukum",
  "Pembebasan bersyarat terhadap tahanan Polda di wilayah Indonesia timur",
  "Advokasi sekelompok warga korban investasi ilegal",
  "Penanganan pemerasan terhadap direksi swasta terbesar di Indonesia",
  "Pendampingan sekitar 130 pedagang yang terancam penggusuran",
  "Advokasi pembebasan pajak untuk yayasan sosial",
  "Penyusunan naskah akademik & Raperda penyelenggaraan HAM",
  "Advokasi perolehan sertifikat tanah untuk warga perumahan",
];

export default function TrackRecord() {
  return (
    <section id="rekam-jejak" className="bg-paper py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="grid md:grid-cols-12 gap-12 mb-16">
          <div className="md:col-span-5">
            <p className="font-mono text-xs uppercase tracking-widest2 text-brass mb-4">
              Rekam Jejak
            </p>
            <h2 className="font-display text-4xl md:text-5xl leading-[1.05] text-ink">
              Pengalaman menangani kasus lintas sektor.
            </h2>
          </div>
          <div className="md:col-span-6 md:col-start-7 self-end">
            <p className="text-ink/70 leading-relaxed">
              Dari sengketa perorangan hingga korporasi besar, penanganan
              kami konsisten pada satu prinsip: menyelesaikan masalah tanpa
              menciptakan kegaduhan baru.
            </p>
          </div>
        </div>

        <ol className="border-t border-ink/10">
          {CASES.map((c, i) => (
            <li
              key={c}
              className="grid grid-cols-[3rem,1fr] md:grid-cols-[5rem,1fr] gap-4 py-6 border-b border-ink/10 items-baseline"
            >
              <span className="font-mono text-sm text-brass">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-ink/80 text-[15px] md:text-base leading-snug">{c}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

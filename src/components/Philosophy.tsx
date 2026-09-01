export default function Philosophy() {
  return (
    <section className="bg-paper py-24 md:py-32 border-t border-ink/10">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <p className="font-mono text-xs uppercase tracking-widest2 text-brass mb-4">
          Filosofi
        </p>
        <h2 className="font-display text-4xl md:text-5xl leading-[1.05] text-ink max-w-3xl mb-16">
          Gotong royong hukum, bukan tukang gugat.
        </h2>

        <div className="grid md:grid-cols-2 gap-px bg-ink/10 border border-ink/10">
          <div className="bg-paper p-8 md:p-12">
            <p className="font-mono text-xs uppercase tracking-widest2 text-ink/40 mb-4">
              Paradigma Lama
            </p>
            <p className="text-ink/70 leading-relaxed mb-6">
              Setiap ada sengketa; tanah, waris, utang-piutang, pikiran
              pertama adalah &ldquo;lapor polisi&rdquo; atau &ldquo;gugat ke
              pengadilan&rdquo;.
            </p>
            <ul className="space-y-2 text-sm text-ink/60">
              <li>Waktu: berbulan-bulan hingga bertahun-tahun</li>
              <li>Biaya: operasional perkara yang tinggi</li>
              <li>Hubungan: menang jadi arang, kalah jadi abu</li>
            </ul>
          </div>
          <div className="bg-paper p-8 md:p-12">
            <p className="font-mono text-xs uppercase tracking-widest2 text-brass mb-4">
              Pendekatan RA Partners
            </p>
            <p className="text-ink/70 leading-relaxed mb-6">
              Hukum bukan hanya soal pasal, tapi soal harmoni sosial.
              Kekuatan komunitas dalam memahami aturan dapat mencegah
              sengketa meluas.
            </p>
            <p className="text-ink font-display italic text-lg leading-snug">
              Kami hadir bukan sebagai &ldquo;tukang gugat&rdquo;, melainkan
              sebagai jembatan informasi dan pendampingan agar masyarakat
              berdaya secara hukum.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

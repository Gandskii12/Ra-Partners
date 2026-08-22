import ownerPakRully from "../assets/Owner-PakRully.jpeg";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-ink text-paper pt-24 pb-20 md:pt-32 md:pb-24 lg:pt-40 lg:pb-32">
      <div className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(#f4efe2 1px, transparent 1px), linear-gradient(90deg, #f4efe2 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-4 md:px-10">
        <div className="grid md:grid-cols-12 gap-6 md:gap-10 items-end">
          <div className="md:col-span-8">
            <p className="font-mono text-sm md:text-base lg:text-lg uppercase tracking-widest2 text-brass-light mb-4 md:mb-6">
              Advokasi Layanan Publik &amp; Penyelesaian Sengketa
            </p>
            <h1 className="font-display font-light text-[10vw] leading-[0.95] md:text-4xl lg:text-6xl xl:text-[4.5rem] tracking-tight">
              Transformasi
              <br />
              <span className="italic">penyelesaian</span> sengketa.
            </h1>
          </div>

          <div className="md:col-span-4 border-l border-brass-light/30 pl-4 md:pl-8 hidden md:block">
            <p className="text-paper/75 text-[13px] md:text-[15px] leading-relaxed">
              Perubahan paradigma dan metode menangani konflik dari cara
              konvensional menuju pendekatan yang efisien, adaptif, dan
              berbasis teknologi.
            </p>
          </div>
        </div>

        <div className="mt-12 md:mt-16 grid md:grid-cols-12 gap-6 md:gap-10">
          <div className="md:col-span-7 md:col-start-1">
            <blockquote className="font-display italic text-lg md:text-xl lg:text-2xl text-brass-light leading-snug border-l-2 border-brass pl-4 md:pl-6">
              &ldquo;Barang siapa yang memberi kemudahan orang yang kesulitan,
              maka Tuhan akan memberikan kemudahan baginya di dunia dan
              akhirat.&rdquo;
            </blockquote>
          </div>
        </div>

        <div className="mt-12 md:mt-16 flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-10 border-t border-paper/15 pt-8 md:pt-10">
          <div className="flex flex-col sm:flex-row items-center gap-6 md:gap-8">
            <img
              src={ownerPakRully}
              alt="Rully Amirulloh"
              className="w-48 h-48 md:w-56 md:h-56 lg:w-96 lg:h-96 rounded-full object-cover shadow-2xl flex-shrink-0"
            />
            <div className="text-center sm:text-left">
              <p className="font-display text-2xl md:text-3xl lg:text-4xl">Rully Amirulloh</p>
              <p className="text-brass-light text-sm md:text-base uppercase tracking-widest2 mt-2">
                Advokat &amp; Investigator — RA &amp; Partners
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
            <a
              href="#kontak"
              className="focus-ring bg-brass text-ink px-6 md:px-8 py-3 md:py-4 text-sm md:text-base uppercase tracking-widest2 hover:bg-brass-light transition-colors"
            >
              Konsultasi Kasus
            </a>
            <a
              href="#layanan"
              className="focus-ring border border-paper/40 px-6 md:px-8 py-3 md:py-4 text-sm md:text-base uppercase tracking-widest2 hover:border-paper transition-colors"
            >
              Lihat Layanan
            </a>
          </div>
        </div>

        <div className="mt-8 md:mt-10 flex flex-wrap items-center justify-center md:justify-start gap-x-4 md:gap-x-6 gap-y-2 text-[10px] md:text-xs uppercase tracking-widest2 text-paper/50">
          <span>Public Services Advocacy ·</span>
          <span>Legal Advice ·</span>
          <span>Legal Drafting ·</span>
          <span>Sengketa Pertanahan ·</span>
          <span>Audit Investigatif</span>
        </div>
      </div>
    </section>
  );
}

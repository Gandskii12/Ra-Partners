export default function Contact() {
  return (
    <section id="kontak" className="bg-ink text-paper py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-6">
            <p className="font-mono text-xs uppercase tracking-widest2 text-brass-light mb-4">
              Konsultasi
            </p>
            <h2 className="font-display text-4xl md:text-5xl leading-[1.05] mb-6">
              Mulai dengan satu percakapan.
            </h2>
            <p className="text-paper/70 leading-relaxed max-w-md">
              Ceritakan permasalahan Anda — birokrasi, sengketa lahan,
              maupun kepatuhan usaha. Kami akan menelaah kasus Anda dan
              menawarkan langkah penyelesaian yang paling efisien.
            </p>

            <div className="mt-12 flex flex-wrap gap-3">
              <a
                href="mailto:rully.amirulloh@gmail.com"
                className="focus-ring bg-brass text-ink px-6 py-3 text-sm uppercase tracking-widest2 hover:bg-brass-light transition-colors"
              >
                Kirim Email
              </a>
              <a
                href="https://wa.me/6281218249403"
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring border border-paper/40 px-6 py-3 text-sm uppercase tracking-widest2 hover:border-paper transition-colors"
              >
                WhatsApp
              </a>
            </div>
          </div>

          <div className="md:col-span-5 md:col-start-8">
            <dl className="space-y-8 border-t border-paper/15 pt-8">
              <div>
                <dt className="font-mono text-xs uppercase tracking-widest2 text-paper/40 mb-2">
                  Alamat
                </dt>
                <dd className="text-paper/85 leading-relaxed">
                  Jl. HR Rasuna Said, Pedurenan Masjid No. 32,
                  <br />
                  Setiabudi, Jakarta Selatan
                </dd>
              </div>
              <div>
                <dt className="font-mono text-xs uppercase tracking-widest2 text-paper/40 mb-2">
                  Email
                </dt>
                <dd className="text-paper/85">
                  <a href="mailto:rully.amirulloh@gmail.com" className="focus-ring hover:text-brass-light">
                    rully.amirulloh@gmail.com
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-mono text-xs uppercase tracking-widest2 text-paper/40 mb-2">
                  Telepon
                </dt>
                <dd className="text-paper/85">
                  <a href="tel:+6281218249403" className="focus-ring hover:text-brass-light">
                    0812-1824-9403
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}

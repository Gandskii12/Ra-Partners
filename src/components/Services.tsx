import gavel from "../assets/gavel.png";
import map from "../assets/map.png";
import checklist from "../assets/checklist.png";
import lawBook from "../assets/law-book.png";
import warning from "../assets/warning.png";
import penpaper from "../assets/penpaper.png";
import briefcase from "../assets/briefcase.png";
import magnifier from "../assets/magnifier.png";
import bell from "../assets/bell.png";
import handshake from "../assets/hand-shake.png";

const PILLARS = [
  {
    no: "01",
    title: "Advokasi Layanan Publik",
    body: "Pendampingan hukum bagi masyarakat maupun korporasi yang dirugikan oleh tindakan atau kebijakan pejabat publik, mulai tingkat kelurahan hingga kementerian, APH, dan instansi pemerintah lainnya.",
    icon: gavel,
  },
  {
    no: "02",
    title: "Sertifikasi & Sengketa Pertanahan",
    body: "Spesialisasi dalam pengurusan konversi tanah, audit dokumen pertanahan, dan penanganan sengketa administratif di Badan Pertanahan Nasional (BPN).",
    icon: map,
  },
  {
    no: "03",
    title: "Audit Kepatuhan Administrasi",
    body: "Membantu instansi maupun perusahaan memastikan seluruh prosedur berjalan sesuai Undang-Undang Pelayanan Publik dan regulasi daerah yang berlaku (legal audit).",
    icon: checklist,
  },
  {
    no: "04",
    title: "Konsultan Regulasi",
    body: "Penyusunan naskah akademik dan perumusan aturan perundang-undangan; kajian kebijakan substansi HAM, perizinan berusaha, dan masalah lingkungan hidup.",
    icon: lawBook,
  },
];

const RETAINER_SCOPE = [
  { t: "Legal Advice & Early Warning System", d: "Pendapat hukum lisan & tertulis serta sistem peringatan dini.", icon: warning },
  { t: "Contract Drafting & Review", d: "Penyusunan dan penelaahan perjanjian, kontrak, dan dokumen legal lain.", icon: penpaper },
  { t: "Corporate Secretarial Support", d: "Pendampingan RUPS, perubahan anggaran dasar, dan perizinan melalui OSS.", icon: briefcase },
  { t: "Legal Audit (High-Level)", d: "Pemeriksaan berkala untuk memastikan kepatuhan terhadap regulasi terbaru.", icon: magnifier },
  { t: "Updates on Regulations", d: "Informasi berkala mengenai perubahan regulasi yang berdampak pada operasional.", icon: bell },
  { t: "Advokasi Non-Litigasi", d: "Pendampingan hukum pada Aparat Penegak Hukum, lembaga pengawas, dan instansi lain.", icon: handshake },
];

export default function Services() {
  return (
    <section id="layanan" className="bg-parchment py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <p className="font-mono text-xs uppercase tracking-widest2 text-brass mb-4">
          Layanan
        </p>
        <h2 className="font-display text-4xl md:text-5xl leading-[1.05] text-ink max-w-2xl">
          Empat pilar layanan utama.
        </h2>

        <div className="mt-16 grid md:grid-cols-2 gap-px bg-ink/10 border border-ink/10">
          {PILLARS.map((p) => (
            <div key={p.no} className="bg-parchment p-6 md:p-8 lg:p-10">
              <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
                {p.icon && (
                  <img src={p.icon} alt="" className="w-10 h-10 sm:w-12 sm:h-12 object-contain flex-shrink-0" />
                )}
                <div className="flex-1">
                  <span className="font-mono text-[10px] sm:text-xs text-brass tracking-widest2">{p.no}</span>
                  <h3 className="font-display text-xl sm:text-2xl text-ink mt-2 sm:mt-3 mb-2 sm:mb-3">{p.title}</h3>
                  <p className="text-ink/70 text-[13px] sm:text-[15px] leading-relaxed">{p.body}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <p className="font-mono text-xs uppercase tracking-widest2 text-brass mb-4">
              Jasa Hukum — Retainer
            </p>
            <h3 className="font-display text-3xl leading-tight text-ink mb-4">
              Pendampingan hukum berkelanjutan untuk badan usaha.
            </h3>
            <p className="text-ink/70 text-[15px] leading-relaxed text-justify">
              Skema layanan tetap (<em className="italic">retainer basis</em>) yang
              mendukung kepatuhan hukum dan perlindungan kepentingan bisnis
              secara berkelanjutan; <strong className="font-semibold">preventif, aplikatif, dan akuntabel</strong>.
            </p>
          </div>

          <div className="md:col-span-8 grid sm:grid-cols-2 gap-x-6 sm:gap-x-8 gap-y-4 sm:gap-y-6">
            {RETAINER_SCOPE.map((s) => (
              <div key={s.t} className="border-t border-ink/15 pt-3 sm:pt-4">
                <div className="flex items-start gap-3 sm:gap-4">
                  {s.icon && (
                    <img src={s.icon} alt="" className="w-10 h-10 sm:w-12 sm:h-12 object-contain flex-shrink-0 mt-0.5" />
                  )}
                  <div className="flex-1">
                    <p className="text-ink font-medium text-[13px] sm:text-[15px]">{s.t}</p>
                    <p className="text-ink/60 text-xs sm:text-sm mt-1 leading-relaxed">{s.d}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

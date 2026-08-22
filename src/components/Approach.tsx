import { useState } from "react";
import takingnotesGif from "../assets/takingnotes.gif";
import takingnotesPng from "../assets/takingnotes.png";
import researchGif from "../assets/research.gif";
import researchPng from "../assets/research.png";
import solutionGif from "../assets/solution.gif";
import solutionPng from "../assets/solution.png";
import monitorGif from "../assets/monitor.gif";
import monitorPng from "../assets/monitor.png";

const STEPS = [
  {
    no: "01",
    ref: "PDT-A",
    title: "Penelaahan",
    body: "Mencatat kronologi permasalahan secara detail, meminta dokumen dan kelengkapan data awal, serta menyimpulkan ekspektasi klien.",
    gif: takingnotesGif,
    fallback: takingnotesPng,
  },
  {
    no: "02",
    ref: "PDT-B",
    title: "Pendalaman Materi",
    body: "Menggali akar pokok permasalahan, mempelajari peraturan perundang-undangan terkait, dan menghubungkan fakta lapangan dengan hukum positif.",
    gif: researchGif,
    fallback: researchPng,
  },
  {
    no: "03",
    ref: "PDT-C",
    title: "Penyelesaian",
    body: "Menawarkan alternatif skenario solusi, memberikan gambaran utuh risiko penyelesaian, dan mendampingi langsung proses eksekusi.",
    gif: solutionGif,
    fallback: solutionPng,
  },
  {
    no: "04",
    ref: "PDT-D",
    title: "Monitoring",
    body: "Mengawal proses penyelesaian hingga tuntas, menyiapkan mitigasi lanjutan, serta memberi edukasi agar masalah serupa tidak terulang.",
    gif: monitorGif,
    fallback: monitorPng,
  },
];

function StepIcon({ gif, fallback }: { gif: string; fallback: string }) {
  const [useFallback, setUseFallback] = useState(false);

  return (
    <img
      src={useFallback ? fallback : gif}
      alt=""
      className="w-20 h-20 object-contain mb-4"
      loading="lazy"
      onError={() => setUseFallback(true)}
    />
  );
}

export default function Approach() {
  return (
    <section id="pendekatan" className="bg-ink text-paper py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="grid md:grid-cols-12 gap-12 mb-16">
          <div className="md:col-span-5">
            <p className="font-mono text-xs uppercase tracking-widest2 text-brass-light mb-4">
              Pendekatan Kami
            </p>
            <h2 className="font-display text-4xl md:text-5xl leading-[1.05]">
              Non-litigasi lebih dulu, pengadilan jalan terakhir.
            </h2>
          </div>
          <div className="md:col-span-6 md:col-start-7 self-end">
            <p className="text-paper/70 leading-relaxed">
              Kami tidak mengawali proses dengan somasi yang konfrontatif.
              Pendekatan kami persuasif, proaktif, dan partisipatif,
              berorientasi pada solusi bersama (<em className="italic">win-win
              solution</em>) sebelum langkah hukum yang lebih ketat
              dipertimbangkan.
            </p>
          </div>
        </div>

        <div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 py-8 md:py-10">
            {STEPS.map((s, index) => (
              <div key={s.no} className="relative">
                <div className="flex flex-col items-center text-center">
                  <StepIcon gif={s.gif} fallback={s.fallback} />
                  <span className="font-display text-3xl md:text-4xl text-brass-light mb-2">
                    {s.no}
                  </span>
                  <span className="font-mono text-[11px] tracking-widest2 text-paper/40 mb-3">
                    BERKAS/{s.ref}
                  </span>
                  <h3 className="font-display text-lg md:text-xl lg:text-2xl mb-3">{s.title}</h3>
                  <p className="text-paper/70 text-xs md:text-sm leading-relaxed">{s.body}</p>
                </div>
                {index < STEPS.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-brass-light/30">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <p className="mt-12 md:mt-16 text-base md:text-lg lg:text-xl text-paper/70 max-w-3xl mx-auto text-center">
          Langkah hukum litigasi yang ketat dan terukur baru ditempuh apabila
          tahapan persuasif di atas tidak menemukan jalan keluar.
        </p>

        {/* Flowchart Section */}
        <div className="mt-24 pt-20 border-t border-paper/15">
          <div className="text-center mb-16">
            <p className="font-mono text-sm uppercase tracking-widest2 text-brass-light mb-3">
              Alur Tindak Lanjut Advokasi
            </p>
            <h3 className="font-display text-4xl md:text-5xl text-paper leading-tight">
              Prosedur Penanganan Laporan
            </h3>
          </div>

          <div className="max-w-5xl mx-auto">
            {/* Step 1 */}
            <div className="flex flex-col items-center mb-8">
              <div className="bg-gradient-to-br from-paper/20 to-paper/5 border border-paper/30 px-10 py-6 rounded-2xl text-center max-w-md w-full backdrop-blur-sm">
                <p className="font-display text-2xl md:text-3xl font-bold text-brass-light mb-2">01</p>
                <p className="font-display text-xl md:text-2xl font-semibold text-paper mb-2">Laporan Masyarakat</p>
                <p className="text-paper/50 text-sm md:text-base">Pengaduan atau aspirasi dari masyarakat</p>
              </div>
              <div className="flex items-center justify-center mt-6">
                <svg className="w-10 h-10 text-brass-light/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
            </div>

            {/* Step 2 - Verifikasi */}
            <div className="flex flex-col items-center mb-8">
              <div className="bg-gradient-to-br from-brass to-brass/80 border-2 border-brass-light/50 px-10 py-6 rounded-2xl text-center max-w-md w-full shadow-xl shadow-brass/20">
                <p className="font-display text-2xl md:text-3xl font-bold text-ink mb-2">02</p>
                <p className="font-display text-xl md:text-2xl font-semibold text-ink mb-2">Verifikasi</p>
                <p className="text-ink/70 text-sm md:text-base">Penilaian awal kewenangan laporan</p>
              </div>
              <div className="flex items-center justify-center mt-6">
                <svg className="w-10 h-10 text-brass-light/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
            </div>

            {/* Decision branches */}
            <div className="grid md:grid-cols-2 gap-12 md:gap-20 mt-12">
              {/* Left branch */}
              <div className="flex flex-col items-center">
                <div className="bg-paper/5 border border-paper/20 px-6 py-3 rounded-xl text-center mb-6 w-full">
                  <p className="font-display text-lg font-medium text-paper/40">Bukan Kewenangan</p>
                </div>
                <div className="flex items-center justify-center mb-8">
                  <svg className="w-8 h-8 text-paper/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </div>
                
                <div className="bg-paper/10 border border-paper/30 px-8 py-5 rounded-2xl text-center w-full mb-6">
                  <p className="font-display text-xl font-bold text-brass-light mb-1">03</p>
                  <p className="font-display text-lg font-semibold text-paper">Konsultasi</p>
                  <p className="text-paper/50 text-sm mt-2">Bantuan konsultatif</p>
                </div>
                
                <div className="flex items-center justify-center mb-8">
                  <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </div>
                
                <div className="bg-green-900/20 border-2 border-green-500 px-8 py-5 rounded-2xl text-center w-full">
                  <p className="font-display text-xl font-bold text-green-400 mb-1">06</p>
                  <p className="font-display text-lg font-semibold text-green-300">Selesai</p>
                </div>
              </div>

              {/* Right branch */}
              <div className="flex flex-col items-center">
                <div className="bg-brass/10 border border-brass/40 px-6 py-3 rounded-xl text-center mb-6 w-full">
                  <p className="font-display text-lg font-medium text-brass-light">Kewenangan</p>
                </div>
                <div className="flex items-center justify-center mb-8">
                  <svg className="w-8 h-8 text-brass-light/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </div>
                
                <div className="bg-paper/10 border border-paper/30 px-8 py-5 rounded-2xl text-center w-full mb-6">
                  <p className="font-display text-xl font-bold text-brass-light mb-1">04</p>
                  <p className="font-display text-lg font-semibold text-paper">Pemeriksaan</p>
                  <p className="text-paper/50 text-sm mt-2">Investigasi mendalam</p>
                </div>
                
                <div className="flex items-center justify-center mb-8">
                  <svg className="w-8 h-8 text-brass-light/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </div>
                
                <div className="bg-gradient-to-br from-brass to-brass/90 border-2 border-brass-light/50 px-8 py-5 rounded-2xl text-center w-full mb-6 shadow-lg">
                  <p className="font-display text-xl font-bold text-ink mb-1">05</p>
                  <p className="font-display text-lg font-semibold text-ink">Rekomendasi</p>
                  <p className="text-ink/70 text-sm mt-2">Keputusan solusi</p>
                </div>
                
                <div className="flex items-center justify-center mb-8">
                  <svg className="w-8 h-8 text-brass-light/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </div>
                
                {/* Sub-decision */}
                <div className="w-full space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="bg-green-900/20 border border-green-500/40 px-4 py-2 rounded-lg flex-shrink-0">
                      <p className="font-display text-sm font-medium text-green-300">Dilaksanakan</p>
                    </div>
                    <div className="flex-1 flex items-center">
                      <div className="w-full h-0.5 bg-gradient-to-r from-green-500/50 to-green-500/20"></div>
                      <svg className="w-4 h-4 text-green-400 ml-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                    <div className="bg-green-900/20 border-2 border-green-500 px-5 py-3 rounded-xl text-center flex-shrink-0">
                      <p className="font-display text-lg font-bold text-green-400">06</p>
                      <p className="font-display text-sm font-semibold text-green-300">Selesai</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="bg-red-900/20 border border-red-500/40 px-4 py-2 rounded-lg flex-shrink-0">
                      <p className="font-display text-sm font-medium text-red-300">Ditolak</p>
                    </div>
                    <div className="flex-1 flex items-center">
                      <div className="w-full h-0.5 bg-gradient-to-r from-red-500/50 to-red-500/20"></div>
                      <svg className="w-4 h-4 text-red-400 ml-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                    <div className="bg-red-900/20 border-2 border-red-500 px-5 py-3 rounded-xl text-center flex-shrink-0">
                      <p className="font-display text-lg font-bold text-red-400">07</p>
                      <p className="font-display text-sm font-semibold text-red-300">Upaya Hukum</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 8 - Testimoni */}
            <div className="flex flex-col items-center mt-16">
              <div className="flex items-center justify-center mb-10">
                <svg className="w-10 h-10 text-brass-light/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
              <div className="bg-gradient-to-br from-paper/20 to-paper/5 border-2 border-brass/50 px-10 py-6 rounded-2xl text-center max-w-md w-full backdrop-blur-sm">
                <p className="font-display text-2xl md:text-3xl font-bold text-brass-light mb-2">08</p>
                <p className="font-display text-xl md:text-2xl font-semibold text-paper mb-2">Testimoni</p>
                <p className="text-paper/50 text-sm md:text-base">Umpan balik layanan advokasi</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

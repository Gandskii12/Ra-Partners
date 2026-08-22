export default function Flowchart() {
  return (
    <section id="alur-advokasi" className="bg-paper py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <p className="font-mono text-xs uppercase tracking-widest2 text-brass mb-4">
          Alur Advokasi
        </p>
        <h2 className="font-display text-4xl md:text-5xl leading-[1.05] text-ink max-w-3xl mb-16">
          Flowchart Alur Tindak Lanjut Advokasi
        </h2>

        <div className="space-y-4">
          {/* Step 1 */}
          <div className="flex flex-col items-center">
            <div className="relative bg-ink text-paper px-8 py-5 rounded-xl text-center max-w-md w-full shadow-lg">
              <div className="absolute -top-3 -left-3 w-8 h-8 bg-brass rounded-full flex items-center justify-center text-ink font-display font-bold text-sm">
                1
              </div>
              <p className="font-display text-xl md:text-2xl font-semibold">Laporan Masyarakat</p>
              <p className="text-paper/70 text-sm mt-2">Masyarakat menyampaikan pengaduan atau aspirasi</p>
            </div>
            <div className="flex items-center justify-center my-2">
              <svg className="w-6 h-6 text-brass" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>

          {/* Step 2 - Verifikasi with decision */}
          <div className="flex flex-col items-center">
            <div className="relative bg-brass text-ink px-8 py-5 rounded-xl text-center max-w-md w-full shadow-lg">
              <div className="absolute -top-3 -left-3 w-8 h-8 bg-ink rounded-full flex items-center justify-center text-brass font-display font-bold text-sm">
                2
              </div>
              <p className="font-display text-xl md:text-2xl font-semibold">Verifikasi</p>
              <p className="text-ink/70 text-sm mt-2">Penilaian awal kewenangan laporan</p>
            </div>
            <div className="flex items-center justify-center my-2">
              <svg className="w-6 h-6 text-brass" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>

          {/* Decision branches */}
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 mt-4">
            {/* Left branch - Bukan Kewenangan */}
            <div className="flex flex-col items-center">
              <div className="bg-ink/5 border-2 border-ink/20 px-4 py-2 rounded-lg text-center mb-4">
                <p className="font-mono text-xs uppercase tracking-widest2 text-ink/60">Bukan Kewenangan</p>
              </div>
              <div className="flex items-center justify-center my-2">
                <svg className="w-6 h-6 text-ink/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
              <div className="relative bg-paper border-2 border-ink/30 px-6 py-4 rounded-xl text-center w-full shadow-md">
                <div className="absolute -top-3 -left-3 w-8 h-8 bg-ink/30 rounded-full flex items-center justify-center text-ink font-display font-bold text-sm">
                  3
                </div>
                <p className="font-display text-lg font-semibold text-ink">Konsultasi</p>
                <p className="text-ink/60 text-sm mt-1">Bantuan konsultatif</p>
              </div>
              <div className="flex items-center justify-center my-2">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
              <div className="relative bg-green-50 border-2 border-green-500 px-6 py-4 rounded-xl text-center w-full shadow-md">
                <div className="absolute -top-3 -left-3 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-display font-bold text-sm">
                  6
                </div>
                <p className="font-display text-lg font-semibold text-green-800">Selesai</p>
              </div>
            </div>

            {/* Right branch - Kewenangan */}
            <div className="flex flex-col items-center">
              <div className="bg-brass/10 border-2 border-brass px-4 py-2 rounded-lg text-center mb-4">
                <p className="font-mono text-xs uppercase tracking-widest2 text-brass/80">Kewenangan</p>
              </div>
              <div className="flex items-center justify-center my-2">
                <svg className="w-6 h-6 text-brass" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
              <div className="relative bg-ink text-paper px-6 py-4 rounded-xl text-center w-full shadow-lg">
                <div className="absolute -top-3 -left-3 w-8 h-8 bg-brass rounded-full flex items-center justify-center text-ink font-display font-bold text-sm">
                  4
                </div>
                <p className="font-display text-lg font-semibold">Pemeriksaan</p>
                <p className="text-paper/70 text-sm mt-1">Investigasi mendalam</p>
              </div>
              <div className="flex items-center justify-center my-2">
                <svg className="w-6 h-6 text-brass" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
              <div className="relative bg-brass text-ink px-6 py-4 rounded-xl text-center w-full shadow-lg">
                <div className="absolute -top-3 -left-3 w-8 h-8 bg-ink rounded-full flex items-center justify-center text-brass font-display font-bold text-sm">
                  5
                </div>
                <p className="font-display text-lg font-semibold">Rekomendasi</p>
                <p className="text-ink/70 text-sm mt-1">Keputusan solusi</p>
              </div>
              <div className="flex items-center justify-center my-2">
                <svg className="w-6 h-6 text-brass" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
              
              {/* Sub-decision */}
              <div className="w-full space-y-3">
                <div className="flex items-center gap-3">
                  <div className="bg-green-50 border border-green-300 px-3 py-1.5 rounded-lg flex-shrink-0">
                    <p className="font-mono text-xs uppercase tracking-widest2 text-green-700">Dilaksanakan</p>
                  </div>
                  <div className="flex-1 flex items-center">
                    <div className="w-px h-6 bg-green-300"></div>
                    <svg className="w-4 h-4 text-green-600 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                  <div className="relative bg-green-50 border-2 border-green-500 px-4 py-3 rounded-xl text-center flex-shrink-0 shadow-md">
                    <div className="absolute -top-2 -left-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white font-display font-bold text-xs">
                      6
                    </div>
                    <p className="font-display text-base font-semibold text-green-800">Selesai</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-red-50 border border-red-300 px-3 py-1.5 rounded-lg flex-shrink-0">
                    <p className="font-mono text-xs uppercase tracking-widest2 text-red-700">Ditolak</p>
                  </div>
                  <div className="flex-1 flex items-center">
                    <div className="w-px h-6 bg-red-300"></div>
                    <svg className="w-4 h-4 text-red-600 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                  <div className="relative bg-red-50 border-2 border-red-400 px-4 py-3 rounded-xl text-center flex-shrink-0 shadow-md">
                    <div className="absolute -top-2 -left-2 w-6 h-6 bg-red-400 rounded-full flex items-center justify-center text-white font-display font-bold text-xs">
                      7
                    </div>
                    <p className="font-display text-sm font-semibold text-red-800">Upaya Hukum Lainnya</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 8 - Testimoni */}
          <div className="flex flex-col items-center mt-8">
            <div className="flex items-center justify-center my-2">
              <svg className="w-6 h-6 text-brass" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
            <div className="relative bg-paper border-2 border-brass px-8 py-5 rounded-xl text-center max-w-md w-full shadow-lg">
              <div className="absolute -top-3 -left-3 w-8 h-8 bg-brass rounded-full flex items-center justify-center text-ink font-display font-bold text-sm">
                8
              </div>
              <p className="font-display text-xl md:text-2xl font-semibold text-ink">Testimoni</p>
              <p className="text-ink/60 text-sm mt-2">Umpan balik layanan advokasi</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

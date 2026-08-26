import { useState, useEffect, useCallback, useRef } from "react";
import testimoni1 from "../assets/testimoni1.jpeg";
import testimoni2 from "../assets/testimoni2.jpeg";
import testimoni3 from "../assets/testimoni3.jpeg";
import testimoni4 from "../assets/testimoni4.jpeg";
import testimoni5 from "../assets/testimoni5.jpeg";
import testimoni6 from "../assets/testimoni6.jpeg";
import testimoni7 from "../assets/testimoni7.jpeg";
import testimoni8 from "../assets/testimoni8.jpeg";
import testimoni9 from "../assets/testimoni9.jpeg";
import vidtesti from "../assets/vidtesti.mp4";
import poster1 from "../assets/poster1.jpeg";
import poster2 from "../assets/poster2.jpeg";
import poster3 from "../assets/poster3.jpeg";

const TESTIMONIAL_IMAGES = [
  { image: testimoni1, alt: "Testimoni 1" },
  { image: testimoni2, alt: "Testimoni 2" },
  { image: testimoni3, alt: "Testimoni 3" },
  { image: testimoni4, alt: "Testimoni 4" },
  { image: testimoni5, alt: "Testimoni 5" },
  { image: testimoni6, alt: "Testimoni 6" },
  { image: testimoni7, alt: "Testimoni 7" },
  { image: testimoni8, alt: "Testimoni 8" },
  { image: testimoni9, alt: "Testimoni 9" },
];

const POSTERS = [
  { image: poster1, alt: "Poster 1" },
  { image: poster2, alt: "Poster 2" },
  { image: poster3, alt: "Poster 3" },
];

const TESTIMONIALS = [
  {
    quote:
      "Terima kasih atas bantuan advokasinya terhadap kasus kami — pengaduan masyarakat terkait TKI yang terkatung-katung nasibnya, serta pengaduan perusahaan kontraktor atas perlakuan sewenang-wenang oleh pejabat pengadaan.",
    context: "Klien korporasi, pengaduan pengadaan pemerintah",
  },
  {
    quote:
      "Alhamdulillah, dengan izin Allah dan bantuan Pak Rully selaku konsultan hukum dan layanan publik, anak kami diterima di madrasah negeri setelah sebelumnya merasa dizalimi oleh oknum panitia PPDB. Terima kasih atas bantuannya memediasi pendaftaran anak saya.",
    context: "Orang tua siswa, sengketa PPDB madrasah negeri",
  },
];

export default function Testimonials() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startPos, setStartPos] = useState(0);
  const [currentTranslate, setCurrentTranslate] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [isLowEndDevice, setIsLowEndDevice] = useState(false);
  const intervalRef = useRef<number | null>(null);
  const animationFrameRef = useRef<number | null>(null);
  
  // Video state
  const [isPlaying, setIsPlaying] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState<string | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  
  // Poster carousel state
  const [currentPosterIndex, setCurrentPosterIndex] = useState(0);
  const [isPosterDragging, setIsPosterDragging] = useState(false);
  const [posterStartPos, setPosterStartPos] = useState(0);
  const [posterTranslate, setPosterTranslate] = useState(0);
  const posterIntervalRef = useRef<number | null>(null);
  const posterAnimationFrameRef = useRef<number | null>(null);

  // Detect low-end device
  useEffect(() => {
    const checkLowEndDevice = () => {
      try {
        const hardwareConcurrency = navigator.hardwareConcurrency || 4;
        const memory = (navigator as any).deviceMemory || 4;
        const connection = (navigator as any).connection?.effectiveType || '4g';
        
        const isLowEnd = hardwareConcurrency <= 2 || memory <= 2 || connection === 'slow-2g' || connection === '2g';
        setIsLowEndDevice(isLowEnd);
      } catch (e) {
        // Feature detection failed, assume not low-end
        setIsLowEndDevice(false);
      }
    };
    
    checkLowEndDevice();
  }, []);

  // Preload images
  useEffect(() => {
    let mounted = true;
    let loadedCount = 0;
    
    const preloadImages = () => {
      TESTIMONIAL_IMAGES.forEach((t) => {
        const img = new Image();
        img.src = t.image;
        img.onload = () => {
          loadedCount++;
          if (mounted && loadedCount === TESTIMONIAL_IMAGES.length) {
            setImagesLoaded(true);
          }
        };
        img.onerror = () => {
          loadedCount++;
          if (mounted && loadedCount === TESTIMONIAL_IMAGES.length) {
            setImagesLoaded(true);
          }
        };
      });
    };
    
    preloadImages();
    
    return () => {
      mounted = false;
    };
  }, []);

  // Auto-rotation with reduced frequency for low-end devices
  useEffect(() => {
    if (!imagesLoaded) return;
    
    const intervalTime = isLowEndDevice ? 8000 : 5000;
    
    intervalRef.current = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % TESTIMONIAL_IMAGES.length);
    }, intervalTime);
    
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [imagesLoaded, isLowEndDevice]);

  // Touch handlers with passive event listeners for better performance
  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    try {
      setIsDragging(true);
      setStartPos(e.touches[0].clientX);
      setCurrentTranslate(0);
    } catch (err) {
      console.error('Touch start error:', err);
    }
  }, []);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    if (!isDragging) return;
    try {
      const currentPos = e.touches[0].clientX;
      const diff = currentPos - startPos;
      
      // Use requestAnimationFrame for smoother performance on low-end devices
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      
      animationFrameRef.current = requestAnimationFrame(() => {
        setCurrentTranslate(diff);
      });
    } catch (err) {
      console.error('Touch move error:', err);
    }
  }, [isDragging, startPos]);

  const handleTouchEnd = useCallback(() => {
    if (!isDragging) return;
    try {
      setIsDragging(false);
      const threshold = 50;
      
      if (currentTranslate > threshold) {
        setCurrentImageIndex((prev) => (prev - 1 + TESTIMONIAL_IMAGES.length) % TESTIMONIAL_IMAGES.length);
      } else if (currentTranslate < -threshold) {
        setCurrentImageIndex((prev) => (prev + 1) % TESTIMONIAL_IMAGES.length);
      }
      
      setCurrentTranslate(0);
      
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
        animationFrameRef.current = null;
      }
    } catch (err) {
      console.error('Touch end error:', err);
      setIsDragging(false);
      setCurrentTranslate(0);
    }
  }, [isDragging, currentTranslate]);

  // Mouse handlers with feature detection
  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    try {
      setIsDragging(true);
      setStartPos(e.clientX);
      setCurrentTranslate(0);
    } catch (err) {
      console.error('Mouse down error:', err);
    }
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isDragging) return;
    try {
      const currentPos = e.clientX;
      const diff = currentPos - startPos;
      
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      
      animationFrameRef.current = requestAnimationFrame(() => {
        setCurrentTranslate(diff);
      });
    } catch (err) {
      console.error('Mouse move error:', err);
    }
  }, [isDragging, startPos]);

  const handleMouseUp = useCallback(() => {
    if (!isDragging) return;
    try {
      setIsDragging(false);
      const threshold = 50;
      
      if (currentTranslate > threshold) {
        setCurrentImageIndex((prev) => (prev - 1 + TESTIMONIAL_IMAGES.length) % TESTIMONIAL_IMAGES.length);
      } else if (currentTranslate < -threshold) {
        setCurrentImageIndex((prev) => (prev + 1) % TESTIMONIAL_IMAGES.length);
      }
      
      setCurrentTranslate(0);
      
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
        animationFrameRef.current = null;
      }
    } catch (err) {
      console.error('Mouse up error:', err);
      setIsDragging(false);
      setCurrentTranslate(0);
    }
  }, [isDragging, currentTranslate]);

  const handleMouseLeave = useCallback(() => {
    if (isDragging) {
      try {
        setIsDragging(false);
        setCurrentTranslate(0);
        
        if (animationFrameRef.current) {
          cancelAnimationFrame(animationFrameRef.current);
          animationFrameRef.current = null;
        }
      } catch (err) {
        console.error('Mouse leave error:', err);
      }
    }
  }, [isDragging]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      if (posterIntervalRef.current) {
        clearInterval(posterIntervalRef.current);
      }
      if (posterAnimationFrameRef.current) {
        cancelAnimationFrame(posterAnimationFrameRef.current);
      }
      if (videoRef.current) {
        videoRef.current.pause();
        videoRef.current.src = "";
      }
    };
  }, []);

  // Video handlers
  const handleVideoLoaded = () => {
    setIsVideoLoaded(true);
    setVideoError(null);
  };

  const handleVideoError = () => {
    setVideoError("Gagal memuat video. Periksa koneksi internet Anda.");
    setIsVideoLoaded(false);
  };

  const toggleVideoPlay = () => {
    if (!videoRef.current) return;
    
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  // Poster carousel handlers (similar to image carousel)
  const handlePosterTouchStart = useCallback((e: React.TouchEvent) => {
    try {
      setIsPosterDragging(true);
      setPosterStartPos(e.touches[0].clientX);
      setPosterTranslate(0);
    } catch (err) {
      console.error('Poster touch start error:', err);
    }
  }, []);

  const handlePosterTouchMove = useCallback((e: React.TouchEvent) => {
    if (!isPosterDragging) return;
    try {
      const currentPos = e.touches[0].clientX;
      const diff = currentPos - posterStartPos;
      
      if (posterAnimationFrameRef.current) {
        cancelAnimationFrame(posterAnimationFrameRef.current);
      }
      
      posterAnimationFrameRef.current = requestAnimationFrame(() => {
        setPosterTranslate(diff);
      });
    } catch (err) {
      console.error('Poster touch move error:', err);
    }
  }, [isPosterDragging, posterStartPos]);

  const handlePosterTouchEnd = useCallback(() => {
    if (!isPosterDragging) return;
    try {
      setIsPosterDragging(false);
      const threshold = 50;
      
      if (posterTranslate > threshold) {
        setCurrentPosterIndex((prev) => (prev - 1 + POSTERS.length) % POSTERS.length);
      } else if (posterTranslate < -threshold) {
        setCurrentPosterIndex((prev) => (prev + 1) % POSTERS.length);
      }
      
      setPosterTranslate(0);
      
      if (posterAnimationFrameRef.current) {
        cancelAnimationFrame(posterAnimationFrameRef.current);
        posterAnimationFrameRef.current = null;
      }
    } catch (err) {
      console.error('Poster touch end error:', err);
      setIsPosterDragging(false);
      setPosterTranslate(0);
    }
  }, [isPosterDragging, posterTranslate]);

  const transitionDuration = isLowEndDevice ? 300 : 500;

  return (
    <section className="bg-parchment py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <p className="font-mono text-xs uppercase tracking-widest2 text-brass mb-4">
          Testimoni
        </p>
        <h2 className="font-display text-4xl md:text-5xl leading-[1.05] text-ink max-w-2xl mb-16">
          Dari klien yang kami dampingi.
        </h2>

        {/* Image Carousel */}
        <div className="relative mb-16">
          {!imagesLoaded && (
            <div className="overflow-hidden rounded-2xl shadow-2xl bg-ink/10 h-64 md:h-96 flex items-center justify-center">
              <p className="text-ink/50 text-sm">Memuat gambar...</p>
            </div>
          )}
          
          <div 
            className={`overflow-hidden rounded-2xl shadow-2xl cursor-grab active:cursor-grabbing ${!imagesLoaded ? 'hidden' : ''}`}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
          >
            <div
              className="flex"
              style={{ 
                transform: `translateX(calc(-${currentImageIndex * 100}% + ${currentTranslate}px))`,
                transition: isDragging ? 'none' : `transform ${transitionDuration}ms ease-in-out`
              }}
            >
              {TESTIMONIAL_IMAGES.map((t, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <img
                    src={t.image}
                    alt={t.alt}
                    className="w-full h-auto max-h-[500px] object-contain"
                    draggable={false}
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center gap-3 mt-6">
            {TESTIMONIAL_IMAGES.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentImageIndex ? "bg-brass w-8" : "bg-ink/30 hover:bg-ink/50"
                }`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Text Testimonials */}
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 mb-16">
          {TESTIMONIALS.map((t) => (
            <figure key={t.context} className="border-l-2 border-seal pl-6 md:pl-8">
              <blockquote className="font-display italic text-lg md:text-xl leading-snug text-ink">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-5 font-mono text-xs uppercase tracking-widest2 text-ink/50">
                {t.context}
              </figcaption>
            </figure>
          ))}
        </div>

        {/* Video Testimonial */}
        <div className="border-t border-ink/10 pt-16 mb-16">
          <p className="font-mono text-xs uppercase tracking-widest2 text-brass mb-4">
            Video Testimoni
          </p>
          <h3 className="font-display text-2xl md:text-3xl text-ink mb-8">
            Testimoni Klien
          </h3>

          <div className="relative">
            {videoError && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-4">
                {videoError}
              </div>
            )}

            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-ink/10 max-w-2xl mx-auto">
              {!isVideoLoaded && !videoError && (
                <div className="aspect-video flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-12 h-12 border-4 border-brass border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                    <p className="text-ink/50 text-sm">Memuat video...</p>
                  </div>
                </div>
              )}

              <video
                ref={videoRef}
                src={vidtesti}
                className={`w-full h-auto ${isVideoLoaded ? 'block' : 'hidden'}`}
                onLoadedData={handleVideoLoaded}
                onError={handleVideoError}
                controls={isLowEndDevice}
                preload={isLowEndDevice ? 'none' : 'metadata'}
                playsInline
                {...(isLowEndDevice && {
                  muted: true,
                  autoPlay: false,
                })}
              />

              {!isLowEndDevice && isVideoLoaded && (
                <button
                  onClick={toggleVideoPlay}
                  className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition-colors group"
                  aria-label={isPlaying ? "Pause" : "Play"}
                >
                  <div className={`w-16 h-16 md:w-20 md:h-20 rounded-full bg-brass flex items-center justify-center shadow-xl transform transition-transform group-hover:scale-110 ${isPlaying ? 'opacity-0' : 'opacity-100'}`}>
                    <svg 
                      className="w-8 h-8 md:w-10 md:h-10 text-ink ml-1" 
                      fill="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </button>
              )}
            </div>

            <div className="mt-6 text-center">
              <p className="text-ink/60 text-sm">
                {isLowEndDevice 
                  ? "Mode hemat data diaktifkan untuk perangkat dengan performa terbatas"
                  : "Klik video untuk memutar/pause"
                }
              </p>
            </div>
          </div>
        </div>

        {/* Poster Carousel */}
        <div className="border-t border-ink/10 pt-16">
          <p className="font-mono text-xs uppercase tracking-widest2 text-brass mb-4">
            Galeri
          </p>
          <h3 className="font-display text-2xl md:text-3xl text-ink mb-8">
            Poster &amp; Materi
          </h3>

          <div className="relative">
            <div 
              className="overflow-hidden rounded-2xl shadow-2xl cursor-grab active:cursor-grabbing"
              onTouchStart={handlePosterTouchStart}
              onTouchMove={handlePosterTouchMove}
              onTouchEnd={handlePosterTouchEnd}
            >
              <div
                className="flex"
                style={{ 
                  transform: `translateX(calc(-${currentPosterIndex * 100}% + ${posterTranslate}px))`,
                  transition: isPosterDragging ? 'none' : `transform ${transitionDuration}ms ease-in-out`
                }}
              >
                {POSTERS.map((p, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <img
                      src={p.image}
                      alt={p.alt}
                      className="w-full h-auto max-h-[600px] object-contain"
                      draggable={false}
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center gap-3 mt-6">
              {POSTERS.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPosterIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentPosterIndex ? "bg-brass w-8" : "bg-ink/30 hover:bg-ink/50"
                  }`}
                  aria-label={`Go to poster ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

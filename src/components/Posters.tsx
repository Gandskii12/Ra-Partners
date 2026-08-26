import { useState, useEffect, useCallback, useRef } from "react";
import poster1 from "../assets/poster1.jpeg";
import poster2 from "../assets/poster2.jpeg";
import poster3 from "../assets/poster3.jpeg";

const POSTERS = [
  { image: poster1, alt: "Poster 1" },
  { image: poster2, alt: "Poster 2" },
  { image: poster3, alt: "Poster 3" },
];

export default function Posters() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startPos, setStartPos] = useState(0);
  const [currentTranslate, setCurrentTranslate] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [isLowEndDevice, setIsLowEndDevice] = useState(false);
  const intervalRef = useRef<number | null>(null);
  const animationFrameRef = useRef<number | null>(null);

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
      POSTERS.forEach((p) => {
        const img = new Image();
        img.src = p.image;
        img.onload = () => {
          loadedCount++;
          if (mounted && loadedCount === POSTERS.length) {
            setImagesLoaded(true);
          }
        };
        img.onerror = () => {
          loadedCount++;
          if (mounted && loadedCount === POSTERS.length) {
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
    
    const intervalTime = isLowEndDevice ? 10000 : 6000;
    
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % POSTERS.length);
    }, intervalTime);
    
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [imagesLoaded, isLowEndDevice]);

  // Touch handlers
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
        setCurrentIndex((prev) => (prev - 1 + POSTERS.length) % POSTERS.length);
      } else if (currentTranslate < -threshold) {
        setCurrentIndex((prev) => (prev + 1) % POSTERS.length);
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

  // Mouse handlers
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
        setCurrentIndex((prev) => (prev - 1 + POSTERS.length) % POSTERS.length);
      } else if (currentTranslate < -threshold) {
        setCurrentIndex((prev) => (prev + 1) % POSTERS.length);
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
    };
  }, []);

  const transitionDuration = isLowEndDevice ? 300 : 500;

  return (
    <section id="galeri" className="bg-ink text-paper py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <p className="font-mono text-xs uppercase tracking-widest2 text-brass-light mb-4">
          Galeri
        </p>
        <h2 className="font-display text-4xl md:text-5xl leading-[1.05] max-w-2xl mb-16">
          Poster &amp; Materi
        </h2>

        <div className="relative">
          {!imagesLoaded && (
            <div className="overflow-hidden rounded-2xl shadow-2xl bg-paper/10 h-64 md:h-96 flex items-center justify-center">
              <p className="text-paper/50 text-sm">Memuat poster...</p>
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
                transform: `translateX(calc(-${currentIndex * 100}% + ${currentTranslate}px))`,
                transition: isDragging ? 'none' : `transform ${transitionDuration}ms ease-in-out`
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
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-brass w-8" : "bg-paper/30 hover:bg-paper/50"
                }`}
                aria-label={`Go to poster ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

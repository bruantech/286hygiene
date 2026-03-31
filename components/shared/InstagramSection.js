'use client';

import { useEffect, useState, useRef } from 'react';
import Script from 'next/script';
import useEmblaCarousel from "embla-carousel-react";
import { useInView } from "framer-motion";
import { Instagram } from 'lucide-react';

export default function InstagramSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    skipSnaps: false,
    duration: 35,
  });

  const [slideDelay, setSlideDelay] = useState(3000);

  useEffect(() => {
    if (window.instgrm) {
      window.instgrm.Embeds.process();
    }
  }, []);

  useEffect(() => {
    if (!emblaApi || !isInView) return;
    const timer = setInterval(() => {
      emblaApi.scrollNext();
    }, slideDelay);
    
    return () => clearInterval(timer);
  }, [emblaApi, slideDelay, isInView]);
  
  const posts = [
    { id: '1', url: 'https://www.instagram.com/reel/DAtJHlsMr1e/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==' }, 
    { id: '2', url: 'https://www.instagram.com/reel/DFIE4beM49T/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==' },
    { id: '3', url: 'https://www.instagram.com/reel/DE9loNZMkrl/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==' },
    { id: '4', url: 'https://www.instagram.com/reel/DJH4ju7sJQL/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==' },
    { id: '5', url: 'https://www.instagram.com/reel/DE9loNZMkrl/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==' },
  ];

  return (
    <section ref={sectionRef} className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-4">
            Latest From Instagram
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full opacity-80" />
        </div>

        <div 
          className="relative mx-auto max-w-[1400px] mb-12"
          onMouseEnter={() => setSlideDelay(3000)} 
          onMouseLeave={() => setSlideDelay(2500)}
        >
          <div className="embla overflow-hidden px-2" ref={emblaRef}>
            <div className="embla__container flex touch-pan-y py-4 -ml-4">
              {posts.map((post, index) => (
                <div 
                  key={post.id} 
                  className="embla__slide min-w-0 flex-[0_0_85%] md:flex-[0_0_33.33%] lg:flex-[0_0_20%] pl-4 flex justify-center"
                >
                  <div 
                    className="w-full max-w-[280px] aspect-[9/16] overflow-hidden  flex justify-center group relative transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl mx-auto bg-gray-50 [&_iframe]:!-mt-[54px]"
                  >
                    <blockquote
                      className="instagram-media"
                      data-instgrm-permalink={post.url}
                      data-instgrm-version="14"
                      style={{
                        background: '#FFF',
                        border: '0',
                        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                        margin: '0',
                        maxWidth: '100%',
                        minWidth: '200px',
                        padding: '0',
                        width: '100%'
                      }}
                    >
                      <div className="p-4 text-center text-gray-500 bg-gray-50 rounded-xl h-[250px] flex items-center justify-center border border-gray-100">
                        
                      </div>
                    </blockquote>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>

      <Script
        src="https://www.instagram.com/embed.js"
        strategy="lazyOnload"
        onLoad={() => {
          if (window.instgrm) {
             window.instgrm.Embeds.process();
          }
        }}
      />
    </section>
  );
}

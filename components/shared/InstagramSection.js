'use client';

import { useEffect } from 'react';
import Script from 'next/script';
import { Instagram } from 'lucide-react';

export default function InstagramSection() {
  
  useEffect(() => {
    if (window.instgrm) {
      window.instgrm.Embeds.process();
    }
  }, []);

  
  const posts = [
    { id: '1', url: 'https://www.instagram.com/286_hygiene/' }, 
    { id: '2', url: 'https://www.instagram.com/286_hygiene/' },
    { id: '3', url: 'https://www.instagram.com/286_hygiene/' },
  ];

  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-4">
            Latest From Instagram
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full opacity-80" />
        </div>

   
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center mb-12">
          {posts.map((post, index) => (
            <div 
              key={post.id} 
              className="w-full max-w-sm flex justify-center group relative transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl rounded-xl"
            >
              
              <blockquote
                className="instagram-media"
                data-instgrm-permalink={post.url}
                data-instgrm-version="14"
                style={{
                  background: '#FFF',
                  border: '0',
                  borderRadius: '12px',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                  margin: '0',
                  maxWidth: '100%',
                  minWidth: '300px',
                  padding: '0',
                  width: '100%'
                }}
              >
                <div className="p-8 text-center text-gray-500 bg-gray-50 rounded-xl h-[400px] flex items-center justify-center border border-gray-100">
                  
                </div>
              </blockquote>
            </div>
          ))}
        </div>

        {/* <div className="flex justify-center mt-4">
          <a
            href="https://www.instagram.com/286_hygiene?igsh=MWhncnh0OXZ3aXh4cg=="
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gray-900 text-white font-medium rounded-full hover:bg-gray-800 transition-colors duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
          >
            <Instagram className="w-5 h-5" />
            <span>Follow Us on Instagram</span>
          </a>
        </div> */}
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

import { useState, useEffect } from 'react'

function ComingSoon() {
  const [carouselIndex, setCarouselIndex] = useState(0)
  const [carouselImages] = useState([
    '/images/about/img_10_1748934970444-1024x1024.jpg',
    '/images/about/img_2_1748934863752-1024x1024.jpg',
    '/images/about/IMG-20250630-WA0019-1-1012x1024.jpg',
    '/images/about/IMG-20250630-WA0017-1-1024x557.jpg',
    '/images/about/IMG-20250701-WA0001-1-1024x661.jpg',
    '/images/about/IMG-20250630-WA0020-1024x661.jpg',
    '/images/about/Immagine WhatsApp 2025-07-16 ore 12.51.35_262278f9.jpg',
    '/images/about/Immagine WhatsApp 2025-07-16 ore 12.51.35_6591ba25.jpg',
    '/images/about/Immagine WhatsApp 2025-07-16 ore 12.51.35_795dcfc7.jpg',
  ])

  // Rotazione automatica del carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCarouselIndex((prevIndex) => (prevIndex + 1) % carouselImages.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [carouselImages.length])

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 relative overflow-hidden">
      {/* Particelle di sfondo animate */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-2 h-2 bg-white rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-32 w-1 h-1 bg-white rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-white rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-20 right-20 w-1 h-1 bg-white rounded-full animate-pulse delay-3000"></div>
      </div>

      {/* Contenuto principale */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <div className="text-center max-w-4xl mx-auto">
          {/* Logo grande centrato */}
          <div className="mb-12">
            <img
              src="/LOGO-CLUB019.png"
              alt="Logo Club019"
              className="w-32 h-32 md:w-48 md:h-48 object-contain rounded-full border-4 border-white shadow-2xl bg-white mx-auto transform hover:scale-105 transition-transform duration-300"
              style={{ boxShadow: '0 8px 32px 0 rgba(0,0,0,0.25)' }}
            />
          </div>
          
          {/* Titolo principale */}
          <h1 className="text-6xl md:text-8xl font-extrabold text-white mb-6 tracking-widest font-mono drop-shadow-2xl select-none">
            CLUB019
          </h1>
          
          {/* Sottotitolo */}
          <p className="text-xl md:text-3xl text-white font-semibold drop-shadow-lg mb-8">
            Team di BJJ del savonese
          </p>
          
          {/* Messaggio Coming Soon */}
          <div className="mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-2xl">
              Coming Soon
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Il nostro nuovo sito web è in costruzione. 
              <br />
              Presto potrai scoprire tutto sul nostro team di Brazilian Jiu Jitsu.
            </p>
          </div>
          
          {/* Carousel immagini */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="bg-black bg-opacity-40 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="relative overflow-hidden rounded-xl h-64 md:h-80">
                <div className="flex transition-transform duration-700 h-full" style={{transform: `translateX(-${carouselIndex * 100}%)`}}>
                  {carouselImages.map((img, idx) => (
                    <img key={idx} src={img} alt={`Club019 - Foto ${idx+1}`} className="w-full h-full object-cover flex-shrink-0" />
                  ))}
                </div>
                {/* Dots indicator */}
                <div className="flex gap-3 justify-center absolute bottom-4 left-1/2 -translate-x-1/2">
                  {carouselImages.map((_, idx) => (
                    <button 
                      key={idx} 
                      onClick={() => setCarouselIndex(idx)} 
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        carouselIndex === idx ? 'bg-[#e10412] scale-125' : 'bg-gray-500 hover:bg-gray-400'
                      }`}
                    ></button>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Social links */}
          <div className="flex justify-center space-x-8">
            <a 
              href="https://www.instagram.com/clubzero19_sabatiabjj/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white hover:text-[#e10412] transition-colors duration-300 transform hover:scale-110"
              title="Instagram Vado Ligure"
            >
              <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a 
              href="https://www.instagram.com/clubzero19_varazze/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white hover:text-[#e10412] transition-colors duration-300 transform hover:scale-110"
              title="Instagram Varazze"
            >
              <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
          </div>

          {/* Footer */}
          <div className="mt-16 text-gray-400 text-sm">
            <p>© 2024 Club019 - Brazilian Jiu Jitsu</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ComingSoon 
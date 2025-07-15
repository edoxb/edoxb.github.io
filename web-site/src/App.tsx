import React, { useState } from 'react'
import Header from './components/Header'

function App() {
  const [activeSection, setActiveSection] = useState<'about' | 'bjj' | null>(null)
  const [selectedLocation, setSelectedLocation] = useState<'varazze' | 'vado'>('varazze')
  const [aboutCarouselIndex, setAboutCarouselIndex] = useState(0)
  const [aboutCarouselImages, setAboutCarouselImages] = useState([
    'https://via.placeholder.com/300x300?text=Instagram+1',
    'https://via.placeholder.com/300x300?text=Instagram+2',
    'https://via.placeholder.com/300x300?text=Instagram+3',
    'https://via.placeholder.com/300x300?text=Instagram+4',
    'https://via.placeholder.com/300x300?text=Instagram+5',
  ])

  return (
    <div className="relative">
      {/* Hero Section con Video Background */}
      <div className="h-screen relative overflow-hidden">
                {/* Video Background */}
        <div className="absolute inset-0 w-full h-full">
          <iframe
            src="https://www.youtube.com/embed/HkwFwGYtqfk?autoplay=1&mute=1&loop=1&playlist=HkwFwGYtqfk&start=180&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1"
            title="BJJ Background Video"
            className="w-full h-full object-cover"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          {/* Overlay scuro per leggibilità */}
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>

        {/* Header nella hero section */}
        <div className="relative z-10">
          <Header />
        </div>

        {/* Contenuto Hero */}
        <div className="relative z-10 flex items-start justify-start h-full">
          <div className="pl-60 pt-60 text-left">
            <h1 className="text-9xl font-extrabold text-white mb-4 tracking-widest font-mono drop-shadow-2xl select-none">
              CLUB019
            </h1>
            <p className="text-2xl text-white font-semibold drop-shadow-lg ml-4">
              Gianluca gay a capo di hamas
            </p>
          </div>
        </div>
      </div>

      {/* Contenuto del Sito - sotto il video */}
      <div className="bg-white">
        {/* Sezione Navigazione con Foto */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Scopri di Più</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Foto About */}
              <div 
                className="relative cursor-pointer group overflow-hidden rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105"
                onClick={() => setActiveSection(activeSection === 'about' ? null : 'about')}
              >
                <img 
                  src="https://wallpapercat.com/w/full/1/d/d/1118886-3200x1800-desktop-hd-brazilian-jiu-jitsu-background-image.jpg" 
                  alt="Brazilian Jiu Jitsu Training" 
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-4xl font-bold text-white drop-shadow-2xl">ABOUT US</h3>
                </div>
                {activeSection === 'about' && (
                  <div className="absolute inset-0 bg-white bg-opacity-20"></div>
                )}
              </div>

              {/* Foto Brazilian Jiu Jitsu */}
              <div 
                className="relative cursor-pointer group overflow-hidden rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105"
                onClick={() => setActiveSection(activeSection === 'bjj' ? null : 'bjj')}
              >
                <img 
                  src="https://www.shutterstock.com/image-photo/brazilian-jiu-jistu-bjj-nogi-600nw-2108920379.jpg" 
                  alt="Brazilian Jiu Jitsu Competition" 
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-4xl font-bold text-white drop-shadow-2xl">BRAZILIAN JIU JITSU</h3>
                </div>
                {activeSection === 'bjj' && (
                  <div className="absolute inset-0 bg-white bg-opacity-20"></div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Sezione About Us - visibile solo se cliccata */}
        {activeSection === 'about' && (
          <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#2d2d2d]">
            <div className="max-w-7xl mx-auto">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-4xl font-bold text-white">Chi Siamo</h2>
                <button 
                  onClick={() => setActiveSection(null)}
                  className="text-[#e10412] hover:text-[#c00410] font-bold text-lg transition-colors"
                >
                  ✕ Chiudi
                </button>
              </div>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <p className="text-lg text-gray-300 leading-relaxed mb-6">
                    Entra nel mondo dinamico del Brazilian JiuJitsu nella nostra palestra! Qui non solo impari tecniche di combattimento efficaci, ma costruisci anche fiducia e disciplina. Siamo una comunità appassionata, pronta a supportarti in ogni passo del tuo percorso, che tu sia un principiante o un veterano.
                  </p>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    Unisciti a noi per scoprire il tuo potenziale e vivere un'esperienza unica che trasformerà il tuo corpo e la tua mente.
                  </p>
                </div>
                {/* Carousel Instagram */}
                <div className="bg-gray-800 rounded-lg p-4 shadow-lg flex flex-col items-center">
                  <h3 className="text-2xl font-bold text-white mb-4">Dalla nostra Instagram</h3>
                  <div className="w-full max-w-md relative">
                    <div className="overflow-hidden rounded-lg">
                      {/* Semplice carousel manuale, puoi sostituire le immagini con quelle reali */}
                      <div className="flex transition-transform duration-500" style={{transform: `translateX(-${aboutCarouselIndex * 100}%)`}}>
                        {aboutCarouselImages.map((img, idx) => (
                          <img key={idx} src={img} alt={`Instagram ${idx+1}`} className="w-full h-64 object-cover flex-shrink-0" />
                        ))}
                      </div>
                    </div>
                    {/* Bottoni prev/next */}
                    <button onClick={() => setAboutCarouselIndex((aboutCarouselIndex - 1 + aboutCarouselImages.length) % aboutCarouselImages.length)} className="absolute left-0 top-1/2 -translate-y-1/2 bg-black bg-opacity-40 text-white px-3 py-1 rounded-full hover:bg-opacity-70 transition-all">&#8592;</button>
                    <button onClick={() => setAboutCarouselIndex((aboutCarouselIndex + 1) % aboutCarouselImages.length)} className="absolute right-0 top-1/2 -translate-y-1/2 bg-black bg-opacity-40 text-white px-3 py-1 rounded-full hover:bg-opacity-70 transition-all">&#8594;</button>
                  </div>
                  {/* Dots */}
                  <div className="flex gap-2 mt-4">
                    {aboutCarouselImages.map((_, idx) => (
                      <button key={idx} onClick={() => setAboutCarouselIndex(idx)} className={`w-3 h-3 rounded-full ${aboutCarouselIndex === idx ? 'bg-[#e10412]' : 'bg-gray-500'}`}></button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Sezione Brazilian Jiu Jitsu - visibile solo se cliccata */}
        {activeSection === 'bjj' && (
          <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#2d2d2d]">
            <div className="max-w-7xl mx-auto">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-4xl font-bold text-white">Brazilian Jiu Jitsu</h2>
                <button 
                  onClick={() => setActiveSection(null)}
                  className="text-[#e10412] hover:text-[#c00410] font-bold text-lg transition-colors"
                >
                  ✕ Chiudi
                </button>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-gray-800 rounded-lg shadow-lg p-6">
                  <div className="w-16 h-16 bg-[#e10412] rounded-full flex items-center justify-center mb-4">
                    <span className="text-white text-2xl">🥋</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Tecnica</h3>
                  <p className="text-gray-300">
                    Impara le tecniche fondamentali e avanzate del BJJ con istruttori qualificati 
                    e un programma strutturato per tutti i livelli.
                  </p>
                </div>
                <div className="bg-gray-800 rounded-lg shadow-lg p-6">
                  <div className="w-16 h-16 bg-[#e10412] rounded-full flex items-center justify-center mb-4">
                    <span className="text-white text-2xl">💪</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Fisico</h3>
                  <p className="text-gray-300">
                    Sviluppa forza, resistenza e flessibilità attraverso allenamenti specifici 
                    e programmi di condizionamento fisico.
                  </p>
                </div>
                <div className="bg-gray-800 rounded-lg shadow-lg p-6">
                  <div className="w-16 h-16 bg-[#e10412] rounded-full flex items-center justify-center mb-4">
                    <span className="text-white text-2xl">🏆</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Competizione</h3>
                  <p className="text-gray-300">
                    Partecipa a competizioni locali e nazionali con il supporto della nostra 
                    squadra e preparazione specifica.
                  </p>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Sezione Schedule */}
        <section id="schedule" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">Orari delle Lezioni</h2>
            
            {/* Selezione Sede */}
            <div className="flex justify-center mb-12">
              <div className="flex gap-4 bg-gray-100 rounded-xl p-2">
                <button 
                  onClick={() => setSelectedLocation('varazze')}
                  className={`px-8 py-3 rounded-lg font-bold text-lg transition-all duration-200 ${
                    selectedLocation === 'varazze' 
                      ? 'bg-[#e10412] text-white shadow-lg' 
                      : 'bg-transparent text-gray-700 hover:text-[#e10412]'
                  }`}
                >
                  Varazze
                </button>
                <button 
                  onClick={() => setSelectedLocation('vado')}
                  className={`px-8 py-3 rounded-lg font-bold text-lg transition-all duration-200 ${
                    selectedLocation === 'vado' 
                      ? 'bg-[#e10412] text-white shadow-lg' 
                      : 'bg-transparent text-gray-700 hover:text-[#e10412]'
                  }`}
                >
                  Vado Ligure
                </button>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Orari */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  {selectedLocation === 'varazze' ? 'Varazze' : 'Vado Ligure'}
                </h3>
                        <div className="space-y-0 border border-gray-200 rounded-lg overflow-hidden">
          {selectedLocation === 'varazze' ? (
            <>
              <div className="flex items-center p-4 bg-gray-50 border-b border-gray-200">
                <span className="font-semibold text-gray-900 w-24">Lunedì</span>
                <span className="text-gray-700 flex-1 text-center">19:30 - 21:30</span>
                <span className="font-bold text-[#e10412] w-20 text-right">GI</span>
              </div>
              <div className="flex items-center p-4 bg-gray-100 border-b border-gray-200">
                <span className="font-semibold text-gray-900 w-24">Martedì</span>
                <span className="text-gray-700 flex-1 text-center">Riposo</span>
                <span className="font-bold text-gray-400 w-20 text-right">-</span>
              </div>
              <div className="flex items-center p-4 bg-gray-50 border-b border-gray-200">
                <span className="font-semibold text-gray-900 w-24">Mercoledì</span>
                <span className="text-gray-700 flex-1 text-center">Riposo</span>
                <span className="font-bold text-gray-400 w-20 text-right">-</span>
              </div>
              <div className="flex items-center p-4 bg-gray-100 border-b border-gray-200">
                <span className="font-semibold text-gray-900 w-24">Giovedì</span>
                <span className="text-gray-700 flex-1 text-center">19:30 - 21:30</span>
                <span className="font-bold text-[#e10412] w-20 text-right">GI</span>
              </div>
              <div className="flex items-center p-4 bg-gray-50 border-b border-gray-200">
                <span className="font-semibold text-gray-900 w-24">Venerdì</span>
                <span className="text-gray-700 flex-1 text-center">Riposo</span>
                <span className="font-bold text-gray-400 w-20 text-right">-</span>
              </div>
              <div className="flex items-center p-4 bg-gray-100 border-b border-gray-200">
                <span className="font-semibold text-gray-900 w-24">Sabato</span>
                <span className="text-gray-700 flex-1 text-center">9:30 - 11:30</span>
                <span className="font-bold text-[#e10412] w-20 text-right">GI/No-GI</span>
              </div>
              <div className="flex items-center p-4 bg-gray-50">
                <span className="font-semibold text-gray-900 w-24">Domenica</span>
                <span className="text-gray-700 flex-1 text-center">Riposo</span>
                <span className="font-bold text-gray-400 w-20 text-right">-</span>
              </div>
            </>
          ) : (
            <>
              <div className="flex items-center p-4 bg-gray-50 border-b border-gray-200">
                <span className="font-semibold text-gray-900 w-24">Lunedì</span>
                <span className="text-gray-700 flex-1 text-center">18:00 - 20:00</span>
                <span className="font-bold text-[#e10412] w-20 text-right">GI</span>
              </div>
              <div className="flex items-center p-4 bg-gray-100 border-b border-gray-200">
                <span className="font-semibold text-gray-900 w-24">Martedì</span>
                <span className="text-gray-700 flex-1 text-center">18:00 - 20:00</span>
                <span className="font-bold text-[#e10412] w-20 text-right">NO-GI</span>
              </div>
              <div className="flex items-center p-4 bg-gray-50 border-b border-gray-200">
                <span className="font-semibold text-gray-900 w-24">Mercoledì</span>
                <span className="text-gray-700 flex-1 text-center">18:00 - 20:00</span>
                <span className="font-bold text-[#e10412] w-20 text-right">GI</span>
              </div>
              <div className="flex items-center p-4 bg-gray-100 border-b border-gray-200">
                <span className="font-semibold text-gray-900 w-24">Giovedì</span>
                <span className="text-gray-700 flex-1 text-center">18:00 - 20:00</span>
                <span className="font-bold text-[#e10412] w-20 text-right">NO-GI</span>
              </div>
              <div className="flex items-center p-4 bg-gray-50 border-b border-gray-200">
                <span className="font-semibold text-gray-900 w-24">Venerdì</span>
                <span className="text-gray-700 flex-1 text-center">18:00 - 20:00</span>
                <span className="font-bold text-[#e10412] w-20 text-right">GI/NO-GI</span>
              </div>
              <div className="flex items-center p-4 bg-gray-100 border-b border-gray-200">
                <span className="font-semibold text-gray-900 w-24">Sabato</span>
                <span className="text-gray-700 flex-1 text-center">11:00 - 13:00</span>
                <span className="font-bold text-[#e10412] w-20 text-right">Open Mat</span>
              </div>
              <div className="flex items-center p-4 bg-gray-50">
                <span className="font-semibold text-gray-900 w-24">Domenica</span>
                <span className="text-gray-700 flex-1 text-center">11:00 - 13:00</span>
                <span className="font-bold text-[#e10412] w-20 text-right">Open Mat</span>
              </div>
            </>
          )}
        </div>
              </div>

              {/* Mappa Google Maps */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Dove Siamo</h3>
                <div className="bg-gray-100 rounded-lg overflow-hidden shadow-lg">
                  {selectedLocation === 'varazze' ? (
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2858.1234567890123!2d8.5678!3d44.1234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDTCsDA3JzM0LjQiTiA4wrAzNCcwNC4wIkU!5e0!3m2!1sit!2sit!4v1234567890123"
                      width="100%"
                      height="300"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Club019 Varazze"
                    ></iframe>
                  ) : (
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2858.1234567890123!2d8.4321!3d44.5678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDTCsDM0JzA0LjQiTiA4wrAyNicwNC4wIkU!5e0!3m2!1sit!2sit!4v1234567890123"
                      width="100%"
                      height="300"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Club019 Vado Ligure"
                    ></iframe>
                  )}
                </div>
                <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                  <p className="text-gray-700 font-semibold">
                    {selectedLocation === 'varazze' 
                      ? 'Via Milano n. 1 - 17019 Varazze (SV)' 
                      : 'Via alla Costa n. 38 - 17047 Vado Ligure (SV)'
                    }
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#e10412] to-[#c00410] flex items-center justify-center shadow-lg mx-auto mb-6">
              <span className="text-white text-2xl font-bold">🥋</span>
            </div>
            <h3 className="text-2xl font-bold mb-4">CLUB019</h3>
            <p className="text-gray-400 mb-6">
              La tua palestra di Brazilian Jiu Jitsu a Varazze e Vado Ligure
            </p>
            <div className="flex justify-center space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Contatti
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Termini di Servizio
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default App
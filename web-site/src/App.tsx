import { useState, useEffect } from 'react'
import Header from './components/Header'

function App() {
  const [activeSection, setActiveSection] = useState<'about' | 'bjj' | null>(null)
  const [selectedLocation, setSelectedLocation] = useState<'varazze' | 'vado'>('vado')
  const [selectedContactsLocation, setSelectedContactsLocation] = useState<'varazze' | 'vado'>('vado')
  const [aboutCarouselIndex, setAboutCarouselIndex] = useState(0)
  const [aboutCarouselImages] = useState([
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
  // 1. Aggiungi stato per l'espansione della card di Alessandro Bottaro
  const [expandedBottaro, setExpandedBottaro] = useState(false)
  const [expandedGianluca, setExpandedGianluca] = useState(false)
  // Rotazione automatica del carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setAboutCarouselIndex((prevIndex) => (prevIndex + 1) % aboutCarouselImages.length)
    }, 6000) // Cambia immagine ogni 3 secondi

    return () => clearInterval(interval)
  }, [aboutCarouselImages.length])

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
          <Header setActiveSection={setActiveSection} activeSection={activeSection} />
        </div>

        {/* Contenuto Hero */}
        <div className="relative z-10 flex items-start justify-start h-full">
          <div className="pl-0 pt-32 text-center md:pl-60 md:pt-60 md:text-left">
            <h1 className="text-5xl md:text-9xl font-extrabold text-white mb-4 tracking-widest font-mono drop-shadow-2xl select-none">
              CLUB019
            </h1>
            <p className="text-lg md:text-2xl text-white font-semibold drop-shadow-lg ml-0 md:ml-4">
              Team di BJJ del savonese
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
          <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#2d2d2d] relative">
            <div className="max-w-7xl mx-auto">
              <button 
                onClick={() => setActiveSection(null)}
                className="absolute top-4 right-4 text-[#e10412] hover:text-[#c00410] font-bold text-2xl transition-colors z-10"
              >
                ✕
              </button>
              <div className="mb-8">
                <h2 className="text-4xl font-bold text-white">Chi Siamo</h2>
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
                {/* Carousel Immagini */}
                <div className="bg-gray-800 rounded-lg shadow-lg h-full">
                  <div className="w-full h-full relative">
                    <div className="overflow-hidden rounded-lg h-full">
                      {/* Carousel automatico */}
                      <div className="flex transition-transform duration-500 h-full" style={{transform: `translateX(-${aboutCarouselIndex * 100}%)`}}>
                        {aboutCarouselImages.map((img, idx) => (
                          <img key={idx} src={img} alt={`Club019 - Foto ${idx+1}`} className="w-full h-full object-cover flex-shrink-0" />
                        ))}
                      </div>
                    </div>
                    {/* Bottoni prev/next */}
                    <button onClick={() => setAboutCarouselIndex((aboutCarouselIndex - 1 + aboutCarouselImages.length) % aboutCarouselImages.length)} className="absolute left-0 top-1/2 -translate-y-1/2 bg-black bg-opacity-40 text-white px-3 py-1 rounded-full hover:bg-opacity-70 transition-all">&#8592;</button>
                    <button onClick={() => setAboutCarouselIndex((aboutCarouselIndex + 1) % aboutCarouselImages.length)} className="absolute right-0 top-1/2 -translate-y-1/2 bg-black bg-opacity-40 text-white px-3 py-1 rounded-full hover:bg-opacity-70 transition-all">&#8594;</button>
                  </div>
                  {/* Dots */}
                  <div className="flex gap-2 justify-center absolute bottom-4 left-1/2 -translate-x-1/2">
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
          <section id="bjj" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#2d2d2d] relative">
            <div className="max-w-7xl mx-auto">
              <button 
                onClick={() => setActiveSection(null)}
                className="absolute top-4 right-4 text-[#e10412] hover:text-[#c00410] font-bold text-2xl transition-colors z-10"
              >
                ✕
              </button>
              <div className="mb-8">
                <h2 className="text-4xl font-bold text-white">Brazilian Jiu Jitsu</h2>
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

        {/* Sezione Contatti - Istruttori */}
        <section id="contacts" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            {/* Switch sedi Varazze/Vado Ligure - SPOSTATO SOPRA IL TITOLO */}
            <div className="flex justify-center mb-8">
              <div className="flex gap-4 bg-gray-100 rounded-xl p-2">
                <button
                  onClick={() => setSelectedContactsLocation('varazze')}
                  className={`px-8 py-3 rounded-lg font-bold text-lg transition-all duration-200 ${selectedContactsLocation === 'varazze' ? 'bg-[#e10412] text-white shadow-lg' : 'bg-transparent text-gray-700 hover:text-[#e10412]'}`}
                >
                  Varazze
                </button>
                <button
                  onClick={() => setSelectedContactsLocation('vado')}
                  className={`px-8 py-3 rounded-lg font-bold text-lg transition-all duration-200 ${selectedContactsLocation === 'vado' ? 'bg-[#e10412] text-white shadow-lg' : 'bg-transparent text-gray-700 hover:text-[#e10412]'}`}
                >
                  Vado Ligure
                </button>
              </div>
            </div>
            <div className="flex items-center justify-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 text-center mr-4">Collaboratori</h2>
              <span className="text-4xl font-semibold text-[#e10412]">
                {selectedContactsLocation === 'varazze' ? 'Crossfit Varazze' : "Master's Club"}
              </span>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {selectedContactsLocation === 'varazze' ? (
                <>
                  {/* Card Istruttore Varazze 1 */}
                  <div className="bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center">
                    <img src="data:image/jpeg;base64,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" alt="Istruttore 1" className="w-32 h-32 object-cover rounded-full mb-6 shadow-lg" />
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Giovanni Tropiano</h3>
                    <p className="text-gray-700 mb-2">Tel: <a href="tel:+393406648169" className="text-[#e10412] font-semibold">+39 3406648169</a></p>
                    <p className="text-gray-700 mb-2">Email: <a href="mailto:istruttore@email.com" className="text-[#e10412] font-semibold">istruttore@email.com</a></p>
                    <p className="text-gray-700">Instagram: <a href="https://www.instagram.com/gio.tropiano?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="text-[#e10412] font-semibold">@gio.tropiano</a></p>

                  </div>
                  {/* Card Istruttore Varazze 2 */}
                  <div className="bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center transition-all duration-500 cursor-pointer" onClick={() => setExpandedBottaro((prev) => !prev)}>
                    <img src="https://ajptour.com/pictures/t/1333471-jhy2/alessandro-bottaro.jpg" alt="Istruttore 2" className="w-32 h-32 object-cover rounded-full mb-6 shadow-lg" />
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Alessandro Bottaro</h3>
                    <p className="text-gray-700 mb-2">Tel: <a href="tel:+393474203602" className="text-[#e10412] font-semibold">+39 3474203602</a></p>
                    <p className="text-gray-700 mb-2">Email: <a href="mailto:altro@email.com" className="text-[#e10412] font-semibold">altro@email.com</a></p>
                    <p className="text-gray-700">Instagram: <a href="https://www.instagram.com/a.bottaro?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="text-[#e10412] font-semibold">@a.bottaro</a></p>
      
                    {/* Espansione: mostra info aggiuntive e loghi se expandedBottaro */}
                    <div
                      className={`overflow-hidden transition-all duration-500 ${expandedBottaro ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}
                      style={{ width: '100%' }}
                    >
                      <div className="flex flex-col items-center">
                        <span className="text-lg font-bold text-[#e10412] mb-2">Cintura nera primo grado IBJJF</span>
                        <div className="flex gap-4 mt-2">
                          <img src="/images/loghi/logo2024_compatto-1024x417.png" alt="Logo 1" className="h-12 object-contain" />
                          <img src="/images/loghi/UIJJ-LOGO-1024x1024.jpg" alt="Logo 2" className="h-12 object-contain" />
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  {/* Card Istruttore Vado 1 */}
                  <div className="bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center">
                    <img src="data:image/jpeg;base64,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" alt="Istruttore 3" className="w-32 h-32 object-cover rounded-full mb-6 shadow-lg" />
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Felipe Corsini Soares</h3>
                    <p className="text-gray-700 mb-2">Tel: <a href="tel:+393935122835" className="text-[#e10412] font-semibold">+39 3935122835</a></p>
                    <p className="text-gray-700 mb-2">Email: <a href="mailto:terzo@email.com" className="text-[#e10412] font-semibold">terzo@email.com</a></p>
                    <p className="text-gray-700">Instagram: <a href="https://www.instagram.com/felipecorsinisoares?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="text-[#e10412] font-semibold">@felipecorsinisoares</a></p>
 
                  </div>
    
                  {/* Card Istruttore Vado 3 */}
                   {/* Card Istruttore Varazze 2 */}
                    <div className="bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center transition-all duration-500 cursor-pointer" onClick={() => setExpandedBottaro((prev) => !prev)}>
                    <img src="https://ajptour.com/pictures/t/1333471-jhy2/alessandro-bottaro.jpg" alt="Istruttore 2" className="w-32 h-32 object-cover rounded-full mb-6 shadow-lg" />
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Alessandro Bottaro</h3>
                    <p className="text-gray-700 mb-2">Tel: <a href="tel:+393474203602" className="text-[#e10412] font-semibold">+39 3474203602</a></p>
                    <p className="text-gray-700 mb-2">Email: <a href="mailto:altro@email.com" className="text-[#e10412] font-semibold">altro@email.com</a></p>
                    <p className="text-gray-700">Instagram: <a href="https://www.instagram.com/a.bottaro?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="text-[#e10412] font-semibold">@a.bottaro</a></p>
                    {/* Espansione: mostra info aggiuntive e loghi se expandedBottaro */}
                    <div
                      className={`overflow-hidden transition-all duration-500 ${expandedBottaro ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}
                      style={{ width: '100%' }}
                    >
                      <div className="flex flex-col items-center">
                        <span className="text-lg font-bold text-[#e10412] mb-2">Cintura nera primo grado IBJJF</span>
                        <div className="flex gap-4 mt-2">
                          <img src="/images/loghi/logo2024_compatto-1024x417.png" alt="Logo 1" className="h-12 object-contain" />
                          <img src="/images/loghi/UIJJ-LOGO-1024x1024.jpg" alt="Logo 2" className="h-12 object-contain" />
                        </div>
                      </div>
                    </div>
                  </div>
                   {/* Card Istruttore Varazze 2 */}
                   <div className="bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center transition-all duration-500 cursor-pointer" onClick={() => setExpandedGianluca((prev) => !prev)}>
                   <img src="/images/collaboratori/gianluca.jpg" alt="Gianluca Carlino" className="w-32 h-32 object-cover rounded-full mb-6 shadow-lg" />
                   <h3 className="text-2xl font-bold text-gray-900 mb-2">Gianluca Carlino</h3>
                    <p className="text-gray-700 mb-2">Tel: <a href="tel:+393661406468" className="text-[#e10412] font-semibold">+39 3661406468</a></p>
                    <p className="text-gray-700 mb-2">Email: <a href="mailto:gianlucarlins92@gmail.com" className="text-[#e10412] font-semibold">gianlucarlins92@gmail.com</a></p>
                    <p className="text-gray-700">Instagram: <a href="https://www.instagram.com/soloavapxiabjj?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="text-[#e10412] font-semibold">@soloavapxiabjj</a></p>
                    {/* Espansione: mostra info aggiuntive e loghi se expandedBottaro */}
                    <div
                      className={`overflow-hidden transition-all duration-500 ${expandedGianluca ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}
                      style={{ width: '100%' }}
                    >
                      <div className="flex flex-col items-center">
                        <a
                          href="https://www.10thplanetjj.amsterdam/instructors"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-lg font-bold text-[#e10412] mb-2 underline hover:text-[#c00410] transition-colors"
                        >
                          Istruttore 10th Planet Amsterdam sotto Emad Ahmedin
                        </a>
                        <div className="flex gap-4 mt-2">
                          {/* Qui puoi aggiungere eventuali loghi o altro */}
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </section>

        {/* Sezione Schedule */}
        <section id="schedule" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-center mb-8">
              <h2 className="text-4xl font-bold text-gray-900 text-center mr-4">Orari delle Lezioni</h2>
              <span className="text-4xl font-semibold text-[#e10412]">
                {selectedContactsLocation === 'varazze' ? 'Crossfit Varazze' : "Master's Club"}
              </span>
            </div>
            
            {/* Selezione Sede */}
            <div className="grid md:grid-cols-2 gap-12">
              {/* Orari */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  {selectedContactsLocation === 'varazze' ? 'Varazze' : 'Vado Ligure'}
                </h3>
                        <div className="space-y-0 border border-gray-200 rounded-lg overflow-hidden">
          {selectedContactsLocation === 'varazze' ? (
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
                  {selectedContactsLocation === 'varazze' ? (
                    <iframe
                      src="https://www.google.com/maps?q=44.363799547036116,8.579898869303666&z=15&output=embed"                      width="100%"
                      height="300"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Club019 Varazze"
                    ></iframe>
                  ) : (
                    <iframe
                      src="https://www.google.com/maps?q=44.26722629791207,8.436612790521936&z=15&output=embed"                      width="100%"
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
                    {selectedContactsLocation === 'varazze' 
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
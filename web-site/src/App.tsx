import React from 'react'
import Header from './components/Header'

function App() {
  return (
    <div className="min-h-screen bg-gray-50 relative overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="https://player.vimeo.com/external/434045526.sd.mp4?s=c27eecc69a27dbc4ff2b87d38afc35f1a9e7c02d&profile_id=164&oauth2_token_id=57447761" type="video/mp4" />
          <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
        </video>
        {/* Overlay scuro per leggibilità */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      {/* Contenuto */}
      <div className="relative z-10">
        <Header />
        <main className="pt-24 flex items-start justify-start min-h-screen">
          <div className="pl-16 pt-12 text-left">
            <h1 className="text-9xl font-extrabold text-white mb-4 tracking-widest font-mono drop-shadow-2xl select-none">
              CLUB019
            </h1>
            <p className="text-3xl text-white font-semibold drop-shadow-lg ml-4">
              Gianluca gay a capo di hamas
            </p>
          </div>
        </main>
      </div>
    </div>
  )
}

export default App
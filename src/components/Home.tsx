import { useState, useEffect } from 'react';

const Home = () => {
  const [isBgLoaded, setIsBgLoaded] = useState(false);
  const [cardHovered, setCardHovered] = useState<string | null>(null);

  useEffect(() => {
    setIsBgLoaded(true);
  }, []);

  return (
    <div className="relative min-h-screen w-screen bg-[url('/background-no-particles.jpg')] bg-cover bg-center overflow-hidden">
      {/* Background */}
      <img src="/bg-home.avif" alt="Background" className={`absolute ${isBgLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'} inset-0 w-full h-full object-cover z-0 transition-all duration-500`} />
      {/* Header */}
      <header className="flex items-center justify-between gap-6 h-24 px-12 animate-header-fade-in">
        <div className="flex items-center justify-center gap-8">
          <button className="text-xl font-bold tracking-wide px-2 py-3 text-white outline-offset-2 outline-white hover:outline-1 rounded-sm transition-colors">
            Jeux
          </button>
          <button className="text-xl font-light tracking-wide px-2 py-3 text-white outline-offset-2 outline-white hover:outline-1 rounded-sm transition-colors">
            Contenu multimédia
          </button>
        </div>
        <div className="flex items-center justify-center gap-8">
          <button className="relative group/search size-10 text-xl font-light p-2 rounded-full text-white outline-offset-2 outline-white hover:outline-1 hover:bg-white hover:text-black transition-colors">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 group-hover/search:scale-105 transition-all duration-300">
              <path 
                d="M14.9536 14.9458L21 21M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
            <span className="absolute group-hover/search:opacity-100 opacity-0 transition-opacity duration-300 -bottom-0 left-1/2 translate-y-full -translate-x-1/2 text-white pt-1 font-light">
              Recherche
            </span>
          </button>
          <button className="relative group/settings size-10 text-xl font-light p-1 rounded-full text-white outline-offset-2 outline-white hover:outline-1 hover:bg-white hover:text-black transition-colors">
            <svg viewBox="-1 0 16 19" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 group-hover/settings:scale-105 transition-all duration-300">
              <path 
                d="M16.014 8.86v1.44a.587.587 0 0 1-.468.556l-1.182.204a.463.463 0 0 1-.114.006 5.902 5.902 0 0 1-.634 1.528.455.455 0 0 1 .078.084l.691.98a.586.586 0 0 1-.062.725l-1.02 1.02a.586.586 0 0 1-.724.061l-.98-.69a.444.444 0 0 1-.085-.078 5.908 5.908 0 0 1-1.544.637.502.502 0 0 1 0 .175l-.182 1.053a.667.667 0 0 1-.633.532h-1.31a.667.667 0 0 1-.633-.532l-.182-1.053a.495.495 0 0 1 0-.175 5.908 5.908 0 0 1-1.544-.637.444.444 0 0 1-.085.077l-.98.691a.586.586 0 0 1-.725-.062l-1.02-1.02a.586.586 0 0 1-.061-.723l.691-.98a.454.454 0 0 1 .077-.085 5.901 5.901 0 0 1-.633-1.528.466.466 0 0 1-.114-.006l-1.182-.204a.586.586 0 0 1-.468-.556V8.86a.586.586 0 0 1 .468-.556L2.636 8.1a.437.437 0 0 1 .114-.005 5.912 5.912 0 0 1 .633-1.528.466.466 0 0 1-.077-.085l-.691-.98a.587.587 0 0 1 .061-.724l1.02-1.02a.587.587 0 0 1 .725-.062l.98.691a.444.444 0 0 1 .085.078 5.903 5.903 0 0 1 1.528-.634.433.433 0 0 1 .005-.114l.204-1.182a.586.586 0 0 1 .556-.468h1.442a.586.586 0 0 1 .556.468l.204 1.182a.448.448 0 0 1 .005.114 5.908 5.908 0 0 1 1.528.634.444.444 0 0 1 .085-.078l.98-.691a.586.586 0 0 1 .724.062l1.02 1.02a.586.586 0 0 1 .062.724l-.691.98a.467.467 0 0 1-.078.085 5.902 5.902 0 0 1 .634 1.528.434.434 0 0 1 .114.005l1.182.204a.587.587 0 0 1 .468.556zm-4.955.72a2.559 2.559 0 1 0-2.56 2.56 2.559 2.559 0 0 0 2.56-2.56z"
                fill="currentColor"
              />
            </svg>
            <span className="absolute group-hover/settings:opacity-100 opacity-0 transition-opacity duration-300 -bottom-0 left-1/2 translate-y-full -translate-x-1/2 text-white pt-1 font-light">
              Paramètres
            </span>
          </button>
          <button className="relative group/avatar text-xl font-light p-1 rounded-full text-white bg-white/10 outline-offset-2 outline-white hover:outline-1 transition-colors">
            <img src="/icons/avatar.png" alt="Rechercher" className="w-8 h-8 rounded-full group-hover/avatar:scale-105 transition-all duration-300" />
            <div className="absolute bottom-0 right-0 size-3 bg-green-500 rounded-full"></div>
            <div className="absolute whitespace-nowrap group-hover/avatar:opacity-100 opacity-0 transition-opacity duration-300 -bottom-0 left-1/2 translate-y-full -translate-x-1/2 text-white pt-1 font-light">
              <span className="flex items-center gap-2">
                Johnny Joe <img src="/icons/psplus.png" alt="PS Plus" className="size-5" />
              </span>
            </div>
          </button>
          <p className="text-white text-2xl font-light tracking-widest ms-4">
            {new Date().toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })}
          </p>
        </div>
      </header>
      {/* Main */}
      <main className="relative flex-1 flex z-20">
        <div className="flex items-start justify-center gap-4 px-16 animate-apps-get-in">
          <button onMouseEnter={() => setCardHovered('psplus')} className={`text-white text-2xl font-light tracking-widest bg-black/10 outline-offset-2 transition-all duration-300 ${cardHovered === 'psplus' ? 'p-9 rounded-3xl size-36 outline-1 outline-white ' : 'p-6 rounded-xl size-24 outline-transparent'}`}>
            <img src="/icons/psplus.png" alt="PS Plus" className="size-full" />
          </button>
          <button onMouseEnter={() => setCardHovered('psstore')} className={`text-white text-2xl font-light tracking-widest bg-black/10 outline-offset-2 transition-all duration-300 ${cardHovered === 'psstore' ? 'p-8 rounded-3xl size-36 outline-1 outline-white ' : 'p-4 rounded-xl size-24 outline-transparent'}`}>
            <img src="/icons/psstore.png" alt="PS Store" className="size-full" />
          </button>
          <button onMouseEnter={() => setCardHovered('welcome')} className={`text-white text-2xl font-light tracking-widest bg-black/10 outline-offset-2 transition-all duration-300 ${cardHovered === 'welcome' ? 'p-9 rounded-3xl size-36 outline-1 outline-white ' : 'p-5 rounded-xl size-24 outline-transparent'}`}>
            <img src="/icons/welcome.png" alt="Welcome" className="size-full" />
          </button>
          <button onMouseEnter={() => setCardHovered('shadows')} className={`text-white text-2xl font-light tracking-widest p-0 overflow-hidden bg-black/10 outline-offset-2 transition-all duration-300 ${cardHovered === 'shadows' ? 'rounded-3xl size-36 outline-1 outline-white ' : 'rounded-xl size-24 outline-transparent'}`}>
            <img src="/icons/shadows.png" alt="Assassin's Creed: Shadows" className="size-full" />
          </button>
          <button onMouseEnter={() => setCardHovered('fc25')} className={`text-white text-2xl font-light tracking-widest p-0 overflow-hidden bg-black/10 outline-offset-2 transition-all duration-300 ${cardHovered === 'fc25' ? 'rounded-3xl size-36 outline-1 outline-white ' : 'rounded-xl size-24 outline-transparent'}`}>
            <img src="/icons/fc25.png" alt="Fifa 25" className="size-full" />
          </button>
        </div>
      </main>
    </div>
  );
};

export default Home; 
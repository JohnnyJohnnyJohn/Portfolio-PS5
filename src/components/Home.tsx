const Home = () => {
  return (
    <div className="relative min-h-screen w-screen">
      {/* Background */}
      <img src="/background-no-particles.jpg" alt="Background" className="absolute inset-0 w-full h-full object-cover -z-10" />
      {/* Header */}
      <header className="flex items-center justify-between gap-6 h-24 px-12">
        <div className="flex items-center justify-center gap-6">
          <button className="text-xl font-bold tracking-wide py-4 px-2 text-white hover:bg-white hover:text-black rounded-sm transition-colors">
            Jeux
          </button>
          <button className="text-xl font-light tracking-wide py-4 px-2 text-white hover:bg-white hover:text-black rounded-sm transition-colors">
            Contenu multimédia
          </button>
        </div>
        <div className="flex items-center justify-center gap-6">
          <button className="relative group/search size-10 text-xl font-light p-2 rounded-full text-white hover:bg-white hover:text-black transition-colors">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
              <path 
                d="M14.9536 14.9458L21 21M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
            <span className="absolute group-hover/search:opacity-100 opacity-0 transition-opacity duration-300 -bottom-0 left-1/2 translate-y-full -translate-x-1/2 text-white pt-2 text-xl font-light">
              Recherche
            </span>
          </button>
          <button className="relative group/settings size-10 text-xl font-light p-2 rounded-full text-white hover:bg-white hover:text-black transition-colors">
            <svg viewBox="-1 0 19 19" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
              <path 
                d="M16.014 8.86v1.44a.587.587 0 0 1-.468.556l-1.182.204a.463.463 0 0 1-.114.006 5.902 5.902 0 0 1-.634 1.528.455.455 0 0 1 .078.084l.691.98a.586.586 0 0 1-.062.725l-1.02 1.02a.586.586 0 0 1-.724.061l-.98-.69a.444.444 0 0 1-.085-.078 5.908 5.908 0 0 1-1.544.637.502.502 0 0 1 0 .175l-.182 1.053a.667.667 0 0 1-.633.532h-1.31a.667.667 0 0 1-.633-.532l-.182-1.053a.495.495 0 0 1 0-.175 5.908 5.908 0 0 1-1.544-.637.444.444 0 0 1-.085.077l-.98.691a.586.586 0 0 1-.725-.062l-1.02-1.02a.586.586 0 0 1-.061-.723l.691-.98a.454.454 0 0 1 .077-.085 5.901 5.901 0 0 1-.633-1.528.466.466 0 0 1-.114-.006l-1.182-.204a.586.586 0 0 1-.468-.556V8.86a.586.586 0 0 1 .468-.556L2.636 8.1a.437.437 0 0 1 .114-.005 5.912 5.912 0 0 1 .633-1.528.466.466 0 0 1-.077-.085l-.691-.98a.587.587 0 0 1 .061-.724l1.02-1.02a.587.587 0 0 1 .725-.062l.98.691a.444.444 0 0 1 .085.078 5.903 5.903 0 0 1 1.528-.634.433.433 0 0 1 .005-.114l.204-1.182a.586.586 0 0 1 .556-.468h1.442a.586.586 0 0 1 .556.468l.204 1.182a.448.448 0 0 1 .005.114 5.908 5.908 0 0 1 1.528.634.444.444 0 0 1 .085-.078l.98-.691a.586.586 0 0 1 .724.062l1.02 1.02a.586.586 0 0 1 .062.724l-.691.98a.467.467 0 0 1-.078.085 5.902 5.902 0 0 1 .634 1.528.434.434 0 0 1 .114.005l1.182.204a.587.587 0 0 1 .468.556zm-4.955.72a2.559 2.559 0 1 0-2.56 2.56 2.559 2.559 0 0 0 2.56-2.56z"
                fill="currentColor"
              />
            </svg>
            <span className="absolute group-hover/settings:opacity-100 opacity-0 transition-opacity duration-300 -bottom-0 left-1/2 translate-y-full -translate-x-1/2 text-white pt-2 text-xl font-light">
              Paramètres
            </span>
          </button>
          <button className="relative group/avatar text-xl font-light p-1 rounded-full text-white hover:bg-white hover:text-black transition-colors">
            <img src="/icons/avatar.png" alt="Rechercher" className="w-8 h-8 rounded-full" />
            <div className="absolute bottom-0 right-0 size-3 bg-green-500 rounded-full"></div>
            <span className="absolute whitespace-nowrap group-hover/avatar:opacity-100 opacity-0 transition-opacity duration-300 -bottom-0 left-1/2 translate-y-full -translate-x-1/2 text-white pt-2 text-xl font-light">
              Johnny Joe
            </span>
          </button>
          <p className="text-white text-2xl font-light tracking-widest ms-4">
            {new Date().toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })}
          </p>
        </div>
      </header>
      {/* Main */}
      <main className="flex-1 flex items-center justify-center">
        <p className="text-xl font-light tracking-wide text-white">En construction...</p>
      </main>
    </div>
  );
};

export default Home; 
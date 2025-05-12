import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
const Welcome = () => {
  const navigate = useNavigate();
  const [isUiFadeOut, setIsUiFadeOut] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [isUiFadeIn, setIsUiFadeIn] = useState(false);

  const handleVideoLoad = () => {
    setIsVideoLoaded(true);
    setTimeout(() => {
      setIsUiFadeIn(true);
    }, 500);
  };

  const handleLogoClick = () => {
    setIsUiFadeIn(false);
    setIsUiFadeOut(true);
    setTimeout(() => {
      navigate('/home');
    }, 300);
  };

  return (
    <div className="relative h-screen w-screen overflow-hidden bg-[url('/background-no-particles.jpg')] bg-cover bg-center">
      {/* Vidéo d'arrière-plan */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className={`absolute inset-0 w-full h-full object-cover ${!isVideoLoaded ? 'opacity-0' : isUiFadeOut ? 'animate-fade-out' : 'animate-fade-in'}`}
        onLoadedData={handleVideoLoad}
      >
        <source src="/PS5-Menu-Background.webm" type="video/webm" />
      </video>

      {/* Texte */}
      <p className={`absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-xl font-light tracking-wide ${isUiFadeIn ? 'animate-fade-in' : isUiFadeOut ? 'animate-fade-out' : 'opacity-0'}`}>
        Appuyez sur la touche PS de votre manette.
      </p>

      {/* Logo PS */}
      <div 
        className="absolute inset-0 flex items-center justify-center" 
        onClick={handleLogoClick}
      >
        <img
          src="/ps-logo.png"
          alt="PlayStation Logo"
          className={`size-16 p-2 bg-white rounded-full ${isUiFadeIn ? 'animate-fade-in' : isUiFadeOut ? 'animate-fade-out' : 'opacity-0'} cursor-pointer hover:scale-95 transition-transform duration-300`}
        />
      </div>
    </div>
  );
};

export default Welcome; 
import { useState, useEffect } from 'react';
import LoadingScreen from './LoadingScreen';
import MainScreen from './MainScreen';

const Welcome = () => {
  const [isLoadingComplete, setIsLoadingComplete] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [isUiFadeOut, setIsUiFadeOut] = useState(false);
  const [isVideoFadeIn, setIsVideoFadeIn] = useState(false);
  const [isOpeningVideoLoaded, setIsOpeningVideoLoaded] = useState(false);
  const [isOpeningVideoFadeIn, setIsOpeningVideoFadeIn] = useState(false);
  
  useEffect(() => {
    setTimeout(() => {
      setIsVideoLoaded(true);
      setIsVideoFadeIn(true);
      setTimeout(() => {
        setIsOpeningVideoFadeIn(false);
      }, 100);
    }, 7000);
    setTimeout(() => {
      setIsOpeningVideoLoaded(true);
      setTimeout(() => {
        setIsOpeningVideoFadeIn(true);
      }, 100);
    }, 3000);
  }, []);

  return (
    <div className="relative h-screen w-screen overflow-hidden bg-[url('/background-no-particles.jpg')] bg-cover bg-center">
      {isOpeningVideoLoaded && ( 
        <video
          autoPlay
          muted
          playsInline
          className={`absolute inset-0 w-full h-full object-cover z-10 transition-opacity duration-300 ${isOpeningVideoFadeIn ? 'opacity-100' : 'opacity-0'}`}
        >
          <source src="/PS5-Opening.webm" type="video/webm" />
        </video>
      )}
      {isLoadingComplete && (
        <video
          autoPlay
          muted
          loop
          playsInline
          className={`absolute inset-0 w-full h-full object-cover z-20 ${isVideoFadeIn ? isUiFadeOut ? 'animate-welcome-fade-out' : 'animate-welcome-fade-in' : ''}`}
        >
          <source src="/PS5-Menu-Background.webm" type="video/webm" />
        </video>
      )}
      
      <div className="absolute inset-0 w-full h-full z-30">
        {isLoadingComplete ? (
          <MainScreen isUiFadeOut={isUiFadeOut} setIsUiFadeOut={setIsUiFadeOut} isVideoLoaded={isVideoLoaded} />
        ) : (
          <LoadingScreen 
            onLoadingComplete={() => setIsLoadingComplete(true)}
          />
        )}
      </div>
    </div>
  );
};

export default Welcome;
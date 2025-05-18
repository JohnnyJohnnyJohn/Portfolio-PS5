import { useState, useEffect } from 'react';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const LoadingScreen = ({ onLoadingComplete }: LoadingScreenProps) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isLogoVisible, setIsLogoVisible] = useState(true);
  const [isLogoWhiteVisible, setIsLogoWhiteVisible] = useState(true);
  const [isTextVisible, setIsTextVisible] = useState(false);

  useEffect(() => {
    const hideLogoTimer = setTimeout(() => {
      setIsLogoVisible(false);
      setTimeout(() => {
        setIsLogoWhiteVisible(false);
        setTimeout(() => {
          setIsTextVisible(true);
        }, 300);
      }, 300);
    }, 1000);

    const hideTextTimer = setTimeout(() => {
      setIsTextVisible(false);
    }, 3500);

    const hideScreenTimer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(() => {
        onLoadingComplete();
      }, 4000);
    }, 3000);

    return () => {
      clearTimeout(hideLogoTimer);
      clearTimeout(hideScreenTimer);
      clearTimeout(hideTextTimer);
    };
  }, []);

  return (
    <div className={`relative h-full w-full flex items-center justify-center overflow-hidden z-50 transition-all duration-300 delay-500 ${isVisible ? 'bg-black' : 'bg-transparent'}`}>
      {isLogoWhiteVisible ? (
        <img 
        src="/fs-logo-white.png" 
        alt="PlayStation Logo" 
        className={`h-60 w-auto transition-opacity duration-300 ${isLogoVisible ? 'opacity-100' : 'opacity-0'}`} 
      />
      ) : (
        <p className={`text-white font-extralight text-xl w-2/3 transition-opacity duration-300 z-50 ${isTextVisible ? 'opacity-100' : 'opacity-0'}`}>ÉPILEPSIE PHOTO-SENSIBLE : SI VOUS AVEZ DES ANTÉCÉDENTS D'ÉPILEPSIE ET DE CONVULSIONS, CONSULTEZ UN MÉDECIN AVANT TOUTE UTILISATION. CERTAINS MOTIFS PEUVENT DÉCLENCHER DES CONVULSIONS CHEZ DES PERSONNES SANS ANTÉCÉDENT. AVANT D'UTILISER CE PRODUIT, LISEZ ATTENTIVEMENT LE MODE D'EMPLOI.</p>
      )}
    </div>
  );
};

export default LoadingScreen; 
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Lottie from 'lottie-react';
import loadingAnimation from '../assets/loading.json';

interface MainScreenProps {
  setIsUiFadeOut: (value: boolean) => void;
  isVideoLoaded: boolean;
}

const MainScreen = ({ setIsUiFadeOut, isVideoLoaded }: MainScreenProps) => {
  const navigate = useNavigate();
  const [isUiFadeIn, setIsUiFadeIn] = useState(false);
  const [isUiFadeOutState, setIsUiFadeOutState] = useState(false);
  const [isLottieVisible, setIsLottieVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    setIsUiFadeIn(true);
    setTimeout(() => {
      setIsLottieVisible(true);
    }, 500);
  }, []);

  const handleLogoClick = () => {
    setIsUiFadeIn(false);
    setIsUiFadeOutState(true);
    setIsUiFadeOut(true);
    setTimeout(() => {
      navigate('/home');
    }, 700);
  };

  return (
    <div className="relative h-screen w-screen overflow-hidden z-50" >

      <p className={`absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-xl font-light tracking-wide ${isUiFadeIn ? 'animate-welcome-fade-in' : isUiFadeOutState ? 'animate-welcome-fade-out' : 'opacity-0'}`}>
        Appuyez sur la touche FS de votre manette.
      </p>

      <div className="absolute inset-0 flex items-center justify-center group">
        <div className={`relative ${isUiFadeIn ? 'animate-btn-ps-press' : isUiFadeOutState ? 'animate-welcome-fade-out' : ''}`}>
          {isLottieVisible && (
            <>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="size-24 bg-[#FEF7DA] rounded-full blur-xl animate-glowing"></div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <Lottie animationData={loadingAnimation} className="scale-450" />
              </div>
            </>
          )}
          <img
            src="/fs-logo-btn.png"
            alt="PlayStation Logo"
            onClick={handleLogoClick}
            className={`size-16 rounded-full relative z-10 ${isUiFadeIn ? 'animate-welcome-fade-in' : isUiFadeOutState ? 'animate-welcome-fade-out' : 'opacity-0'} cursor-pointer ${isHovered ? 'scale-90 opacity-70' : ''} transition-transform duration-300`}
          />
          {isVideoLoaded && (
            <div 
              onClick={handleLogoClick} 
              onMouseEnter={() => {
                setIsHovered(true);
              }}
              onMouseLeave={() => {
                setIsHovered(false);
              }}
              onFocus={() => {
                setIsHovered(true);
              }}
              onBlur={() => {
                setIsHovered(false);
              }}
              tabIndex={0} 
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  handleLogoClick();
                }
              }} 
              autoFocus={true}
              className={`absolute inset-0 flex items-center justify-center size-16 rounded-full overflow-hidden z-50 cursor-pointer focus:outline-none ${isUiFadeOutState ? 'animate-welcome-fade-out' : 'blur-sm'}`}
            >
              <div className="absolute scale-x-150 size-full bg-gradient-to-r from-transparent via-[#FEFBFC] to-transparent animate-moving-glow-ps-btn"></div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MainScreen; 
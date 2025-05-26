import { useEffect, useState } from "react";
import type { Game } from "./Home";

interface GameCardProps {
  game: Game;
  isHovered: boolean;
  isFirstAnimation: boolean;
  onHover: (game: Game) => void;
}

export const GameCard = ({ game, isHovered, isFirstAnimation, onHover }: GameCardProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 200 + 50 * (game.order + 1));
  }, []);

  return (
    <button 
      onMouseEnter={() => onHover(game)}
      onKeyDown={(e) => {
        if (e.key === 'Enter') {
          onHover(game);
        }
      }}
      className={`
        relative 
        text-white 
        bg-gradient-to-tr from-black/30 via-black/40 to-black/30
        backdrop-blur-xs
        p-0 
        outline-offset-4 
        transition-all 
        ease-out
        ${isFirstAnimation ? 'duration-500' : 'duration-300'}
        ${isHovered ? `rounded-3xl size-36 outline-3 outline-white` : `rounded-xl size-24 outline-transparent`}
        ${isVisible ? 'scale-100' : 'scale-20'}
      `}
    >
      <img src={game.iconSrc} alt={game.title} className={`size-full transition-all duration-300 ${isHovered ? 'rounded-3xl' : 'rounded-xl'}`} />
      <span 
        className={`
          ${isHovered ? 'block animate-text-card-fade-in' : 'hidden animate-text-card-fade-out'} 
          absolute 
          bottom-0 
          right-0 
          text-white 
          pl-4 
          pb-[5px]
          text-2xl 
          font-light 
          tracking-wide
          transition-all 
          duration-300 
          -z-20
          whitespace-nowrap
          translate-x-full
        `}
      >
        {game.title}
      </span>
      {isHovered && (
        <div className="absolute inset-0 flex items-center justify-center size-full rounded-3xl overflow-hidden z-50">
          <div className="absolute scale-150 rotate-[30deg] size-full opacity-20 bg-gradient-to-r from-transparent via-white to-transparent animate-moving-glow-card-header-btn"></div>
        </div>
      )}
    </button>
  );
}; 
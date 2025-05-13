interface GameCardProps {
  id: string;
  title: string;
  iconSrc: string;
  isHovered: boolean;
  onHover: (id: string) => void;
}

export const GameCard = ({ id, title, iconSrc, isHovered, onHover }: GameCardProps) => {
  return (
    <button 
      onMouseEnter={() => onHover(id)}
      className={`
        relative 
        text-white 
        bg-black/50 
        backdrop-blur-xl
        p-0 
        text-2xl 
        font-light 
        tracking-widest 
        outline-offset-2 
        transition-all 
        duration-300 
        ${isHovered ? `rounded-3xl size-36 outline-1 outline-white` : `rounded-xl size-24 outline-transparent`}
      `}
    >
      <img src={iconSrc} alt={title} className={`size-full transition-all duration-300 ${isHovered ? 'rounded-3xl' : 'rounded-xl'}`} />
      <span 
        className={`
          ${isHovered ? 'animate-text-card-fade-in' : 'animate-text-card-fade-out'} 
          absolute 
          bottom-0 
          right-0 
          text-white 
          pl-4 
          font-light 
          transition-all 
          duration-300 
          -z-20
          whitespace-nowrap
        `}
      >
        {title}
      </span>
    </button>
  );
}; 
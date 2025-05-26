import { type ReactNode, useState } from 'react';

interface HeaderButtonProps {
  children: ReactNode;
  variant?: 'bold' | 'light';
  className?: string;
}

export const HeaderButton = ({ children, variant = 'light', className = '' }: HeaderButtonProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button 
      className={`
        relative
        text-2xl 
        ${variant === 'bold' ? 'font-semibold text-white' : 'font-light text-white/60'}
        p-2 
        outline-offset-3 
        outline-transparent 
        hover:outline-white 
        hover:outline-2 
        rounded-xs
        transition-colors
        overflow-hidden
        ${className}
      `}
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
    >
      {children}
      {isHovered && 
        <div className="absolute inset-0 flex items-center justify-center w-full h-96 rounded-xs overflow-hidden z-50">
          <div className="absolute scale-y-150 scale-x-400 rotate-[30deg] size-full opacity-20 bg-gradient-to-r from-transparent via-white to-transparent animate-moving-glow-card-header-btn"></div>
        </div>
      }
    </button>
  );
}; 
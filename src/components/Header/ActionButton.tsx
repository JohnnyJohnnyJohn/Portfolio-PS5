import { useState } from 'react';
import { SearchIcon } from './icons/SearchIcon';
import { SettingsIcon } from './icons/SettingsIcon';

interface ActionButtonProps {
  tooltip: string;
  className?: string;
}

export const ActionButton = ({ tooltip, className = '' }: ActionButtonProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const baseClasses = `
    relative 
    size-10 
    text-xl 
    font-light 
    rounded-full 
    outline-offset-3 
    transition-colors
    flex
    items-center
    justify-center
    ${isHovered ? 'outline-white outline-2' : 'outline-transparent'}
    ${tooltip !== 'Johnny Joe' ? 'p-2' : 'p-0.5 bg-white/10'}
    ${isHovered && tooltip !== 'Johnny Joe' ? 'bg-white text-black/80' : 'text-white '}
    ${className}
  `;

  const getIcon = () => {
    switch (tooltip) {
      case 'Recherche':
        return <SearchIcon />;
      case 'Paramètres':
        return <SettingsIcon />;
      case 'Johnny Joe':
        return (
          <>
            <img 
              src="/icons/avatar.png" 
              alt="Avatar" 
              className="size-9 rounded-full z-50" 
            />
            <div className="absolute bottom-0 right-0 size-3 bg-green-500 rounded-full"></div>
          </>
        );
      default:
        return null;
    }
  }

  return (
    <button 
      className={baseClasses} 
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
      {isHovered && 
        <div className="absolute inset-0 flex items-center justify-center w-full h-full rounded-full overflow-hidden z-10">
          <div className="absolute scale-150 rotate-[30deg] size-full opacity-20 bg-gradient-to-r from-transparent via-white to-transparent animate-moving-glow-card-header-btn"></div>
        </div>
      }
      {getIcon()}
      <span className={`
        absolute 
        transition-opacity 
        duration-300 
        -bottom-0 
        left-1/2 
        translate-y-full 
        -translate-x-1/2 
        text-white 
        pt-1 
        font-light
        whitespace-nowrap
        ${isHovered ? 'opacity-100' : 'opacity-0'}
        ${tooltip === 'Johnny Joe' ? 'flex items-center justify-center gap-2' : ''}
      `}>
        {tooltip}
        {tooltip === 'Johnny Joe' && <img src="/icons/psplusmini.webp" alt="PS Plus" className="size-5" />}
      </span>
    </button>
  );
}; 
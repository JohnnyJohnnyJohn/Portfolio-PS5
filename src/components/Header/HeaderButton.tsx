import { type ReactNode } from 'react';

interface HeaderButtonProps {
  children: ReactNode;
  variant?: 'bold' | 'light';
  className?: string;
}

export const HeaderButton = ({ children, variant = 'light', className = '' }: HeaderButtonProps) => {
  return (
    <button 
      className={`
        text-2xl 
        ${variant === 'bold' ? 'font-bold text-white' : 'font-light text-white/60'}
        tracking-wide 
        px-2 
        py-3 
        outline-offset-2 
        outline-transparent 
        hover:outline-white 
        hover:outline-1 
        rounded-sm 
        transition-colors
        ${className}
      `}
    >
      {children}
    </button>
  );
}; 
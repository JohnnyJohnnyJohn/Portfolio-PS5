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
        p-2 
        outline-offset-3 
        outline-transparent 
        hover:outline-white 
        hover:outline-2 
        rounded-xs
        transition-colors
        ${className}
      `}
    >
      {children}
    </button>
  );
}; 
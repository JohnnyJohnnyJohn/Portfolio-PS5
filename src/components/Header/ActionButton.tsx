import { type ReactNode } from 'react';

interface ActionButtonProps {
  children: ReactNode;
  tooltip: string;
  variant?: 'default' | 'avatar';
  className?: string;
}

export const ActionButton = ({ children, tooltip, variant = 'default', className = '' }: ActionButtonProps) => {
  const baseClasses = `
    relative 
    group 
    size-10 
    text-xl 
    font-light 
    rounded-full 
    text-white 
    outline-offset-2 
    outline-transparent 
    hover:outline-white 
    hover:outline-1 
    transition-colors
    ${variant === 'default' ? 'p-2 hover:bg-white hover:text-black' : 'bg-white/10'}
    ${className}
  `;

  return (
    <button className={baseClasses}>
      {children}
      <span className={`
        absolute 
        group-hover:opacity-100 
        opacity-0 
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
        ${variant === 'avatar' ? 'flex items-center justify-center gap-2' : ''}
      `}>
        {tooltip}
        {variant === 'avatar' && <img src="/icons/psplus.png" alt="PS Plus" className="size-5" />}
      </span>
    </button>
  );
}; 
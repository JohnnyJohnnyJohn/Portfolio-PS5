import { HeaderButton } from './HeaderButton';
import { ActionButton } from './ActionButton';
import { SearchIcon } from './icons/SearchIcon';
import { SettingsIcon } from './icons/SettingsIcon';

interface HeaderProps {
  currentTime: string;
}

export const Header = ({ currentTime }: HeaderProps) => {
  return (
    <header className="relative z-50 flex items-center justify-between gap-6 h-24 px-12 animate-header-fade-in">
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-transparent z-10"></div>
      
      <div className="flex items-center justify-center gap-8 z-20">
        <HeaderButton variant="bold">Jeux</HeaderButton>
        <HeaderButton>Contenu multimédia</HeaderButton>
      </div>

      <div className="flex items-center justify-center gap-8 z-20">
        <ActionButton tooltip="Recherche">
          <SearchIcon />
        </ActionButton>
        
        <ActionButton tooltip="Paramètres">
          <SettingsIcon />
        </ActionButton>
        
        <ActionButton tooltip="Johnny Joe" variant="avatar">
          <img 
            src="/icons/avatar.png" 
            alt="Avatar" 
            className="size-9 rounded-full group-hover:scale-105 transition-all duration-300" 
          />
          <div className="absolute bottom-0 right-0 size-3 bg-green-500 rounded-full"></div>
        </ActionButton>

        <p className="text-white text-2xl font-light tracking-widest ms-4">
          {currentTime}
        </p>
      </div>
    </header>
  );
}; 
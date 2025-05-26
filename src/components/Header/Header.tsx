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
        <ActionButton tooltip="Recherche"/>
        
        <ActionButton tooltip="Paramètres" />
        
        <ActionButton tooltip="Johnny Joe" />

        <p className="text-white/80 text-right text-2xl font-extralight tracking-widest w-20">
          {currentTime}
        </p>
      </div>
    </header>
  );
}; 
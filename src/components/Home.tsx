import { useState, useEffect } from 'react';
import { Header } from './Header/Header';
import { GameCard } from './GameCard';

export type Game = {
  id: string;
  title: string;
  iconSrc: string;
  order: number;
}

const GAMES: Game[] = [
  { id: 'psplus', title: 'PS Plus', iconSrc: '/icons/psplus.png', order: 1 },
  { id: 'psstore', title: 'PS Store', iconSrc: '/icons/psstore.png', order: 2 },
  { id: 'welcome', title: 'Welcome', iconSrc: '/icons/welcome.png', order: 3 },
  { id: 'gta6', title: 'GTA 6', iconSrc: '/icons/gta6.png', order: 4 },
  { id: 'shadows', title: "Assassin's Creed: Shadows", iconSrc: '/icons/shadows.png', order: 5 },
  { id: 'fc25', title: 'Fifa 25', iconSrc: '/icons/fc25.png', order: 6 },
  { id: 'reddead', title: 'Red Dead Redemption 2', iconSrc: '/icons/reddead.avif', order: 7 },
] as const;

const getTime = () => new Date().toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' });

const Home = () => {
  const [cardHovered, setCardHovered] = useState<Game | undefined>(undefined);
  const [cardHoveredOrder, setCardHoveredOrder] = useState<number | undefined>(undefined);
  const [currentTime, setCurrentTime] = useState(getTime());
  const [newBg, setNewBg] = useState<string | undefined>(undefined);
  const [isFirstAnimation, setIsFirstAnimation] = useState(true);

  const getBg = (id: string) => {
    switch (id) {
      case 'gta6': return '/bg-gta6.webp';
      case 'shadows': return '/bg-shadows.avif';
      case 'fc25': return '/bg-fc25.webp';
      case 'reddead': return '/bg-reddead.webp';
      case 'psplus': return '/bg-psplus.webp';
      case 'psstore': return '/bg-psstore.webp';
      case 'welcome': return '/bg-welcome.webp';
      default: return undefined;
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setCardHovered(GAMES[3]);
    }, 1600);

    const interval = setInterval(() => {
      setCurrentTime(getTime());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!cardHovered) return;
    
    const bg = getBg(cardHovered.id);
    setNewBg(bg);

    // Attendre que l'image soit chargée avant d'ajouter l'animation
    const img = new Image();
    img.src = bg || '';
    img.onload = () => {
      if (isFirstAnimation) {
        requestAnimationFrame(() => {
          document.getElementById('bg_active')?.classList.add('animate-bg-fade-in');
          setTimeout(() => {
            document.getElementById('bg_active')?.classList.remove('animate-bg-fade-in');
            setCardHoveredOrder(cardHovered.order);
            setIsFirstAnimation(false);
          }, 300);
        });
      } else if (cardHoveredOrder && cardHovered.order) {
        const animation = cardHoveredOrder < cardHovered.order ? 'animate-bg-fade-in-left' : 'animate-bg-fade-in-right';
        document.getElementById('bg_active')?.classList.add(animation);
        setTimeout(() => {
          document.getElementById('bg_active')?.classList.remove(animation);
          setCardHoveredOrder(cardHovered.order);
        }, 300);
      }
    };
  }, [cardHovered]);

  return (
    <div className="relative min-h-screen w-screen bg-[url('/background-no-particles.jpg')] bg-cover bg-center overflow-hidden">
      {/* Background */}
      {newBg && <img id="bg_active" src={newBg} alt="Background" className="absolute inset-0 w-full h-full scale-110 object-cover z-10" />}

      {/* Header */}
      <Header currentTime={currentTime} />

      {/* Main */}
      <main className="relative flex-1 flex z-50">
        <div className="flex items-start justify-center gap-4 px-16 animate-apps-get-in z-50">
          {GAMES.map(game => (
            <GameCard
              key={game.id}
              game={game}
              isHovered={cardHovered?.id === game.id}
              onHover={setCardHovered}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Home; 
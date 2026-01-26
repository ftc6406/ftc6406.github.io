import { useState, type ReactNode } from 'react';

const Navbar = (): ReactNode => {
  // Navbar states
  const [isOpen, setIsOpen] = useState(false);

  // Whether the user has scrolled past the hero section
  const [isHeroScrolled, setIsHeroScrolled] = useState(false);

  const TAB_NAMES = ['gallery', 'awards', 'join', 'contact'];
  const menuButtonImg = isOpen
    ? 'assets/close_x.svg'
    : 'assets/hamburger_menu.svg';

  // Changes navbar color after scrolling 100vh
  window.addEventListener('scroll', () =>
    setIsHeroScrolled(window.scrollY > window.innerHeight)
  );

  return (
    <div
      id="navbar"
      className={`fixed w-full 
        px-4 md:px-8 lg:px-12 xl:px-16 
        py-2 md:py-3 lg:py-4
        flex justify-between z-1001
        
        transition duration-1000 appear
        starting:translate-y-[-100%] translate-y-0
        ${isOpen || isHeroScrolled ? 'bg-stone-900' : 'bg-transparent'}
      `}
    >
      {/* Logo and team name */}
      <a href="#hero" className="flex gap-4 items-center">
        <img src="assets/logo.svg" alt="logo" className="w-8" />

        <h2 className="subtitle-text font-bold">First Tech Coyotes</h2>
      </a>

      {/* Mobile nav menu toggle */}
      <button
        className="p-4 flex lg:hidden items-center
          transition-colors duration-300
          hover:bg-stone-100/10 rounded-full"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="toggle mobile menu"
      >
        <img
          className="size-5 md:size-6"
          src={menuButtonImg}
          alt={isOpen ? 'open menu' : 'close menu'}
        />
      </button>

      {/* Mobile nav dropdown menu */}
      <div
        className={`absolute top-full left-0 
          w-full h-screen px-4 pt-4 space-y-4
          transition duration-1000 transition-discrete 
          starting:bg-transparent starting:border-transparent
          ${
            isOpen
              ? 'bg-stone-900 border-white/60'
              : 'hidden bg-transparent border-transparent'
          }
        `}
      >
        {TAB_NAMES.map((tabName, index) => (
          <a
            key={`navbar-link-${index}`}
            href={`#${tabName}`}
            className={`px-4 py-3
              flex items-center rounded-full
              body-text text-nowrap capitalize font-bold

              transition
              starting:opacity-0 starting:bg-transparent
              ${isOpen ? 'duration-300 opacity-100 hover:bg-stone-100/10' : 'duration-1000 opacity-0'}
            `}
            onClick={() => setIsOpen(false)}
          >
            {tabName}
          </a>
        ))}
      </div>

      {/* Desktop navbar anchors */}
      <div className="hidden lg:flex gap-8">
        {TAB_NAMES.map((tabName, index) => (
          <a
            key={`navbar-link-${index}`}
            href={`#${tabName}`}
            className="flex items-center 
              body-text text-nowrap capitalize
              hover:underline underline-offset-8"
          >
            {tabName}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Navbar;

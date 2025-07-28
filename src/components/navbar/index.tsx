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
      className={`fixed w-full px-4 md:px-8 lg:px-12 xl:px-16 py-2 md:py-4
        flex justify-between z-1000 
        
        transition duration-1000
        starting:translate-y-[-100%] translate-y-0
        starting:opacity-0 opacity-100
        ${isOpen || isHeroScrolled ? 'bg-stone-900' : 'bg-transparent'}
      `}
    >
      {/* Logo and team name */}
      <a href="#hero" className="flex gap-4 items-center">
        <img
          src="assets/logo.svg"
          alt="logo"
          className="w-10 md:w-12 lg:w-14"
        />

        <h2 className="text-xl md:text-3xl lg:text-4xl font-bold">
          First Tech Coyotes
        </h2>
      </a>

      {/* Mobile nav menu toggle */}
      <div className="flex lg:hidden items-center">
        <button
          className="size-7"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="toggle mobile menu"
        >
          <img src={menuButtonImg} alt={isOpen ? 'open menu' : 'close menu'} />
        </button>
      </div>

      {/* Mobile nav dropdown menu */}
      <div
        className={`absolute overflow-y-scroll
          top-full left-0 w-full px-4 pb-2
          z-1000 divide-y-1 divide-white/60

          transition duration-1000 transition-discrete
          starting:bg-transparent
          ${isOpen ? 'bg-stone-900' : 'hidden bg-transparent'}
        `}
      >
        {TAB_NAMES.map((tabName, index) => (
          <a
            key={`navbar-link-${index}`}
            href={`#${tabName}`}
            className={`p-1 sm:p-2 md:p-4 flex items-center
              text-base sm:text-lg md:text-xl text-nowrap capitalize

              transition-opacity duration-1000 transition-discrete
              starting:opacity-0
              ${isOpen ? 'opacity-100' : 'opacity-0'}
              hover:underline underline-offset-8
            `}
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
              text-xl xl:text-2xl text-nowrap capitalize
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

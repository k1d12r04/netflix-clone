import Image from 'next/image';
import { BellIcon, MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import { UserCircleIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { useEffect, useState, useContext } from 'react';
import useAuth from '@/hooks/useAuth';
import BasicMenu from './ui/BasicMenu';
import { ScrollContext } from '../ScrollContext';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { logout } = useAuth();
  const scrollContext = useContext(ScrollContext);

  const handleLinkClick = (sectionId: string) => {
    if (scrollContext) {
      scrollContext.scrollToSection(sectionId, 80, 100);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={` h-[76px] max-h-[76px] ${
        isScrolled ? 'bg-[#141414]' : 'bg-stone-950/50'
      }`}
    >
      <div className="flex items-center space-x-2 md:space-x-10">
        <Image
          src="/netflix-logo.svg"
          alt="netflix logo"
          width={100}
          height={100}
          className="cursor-pointer object-contain"
          priority
        />
        <BasicMenu />
        <nav className="hidden space-x-4 md:flex">
          <a
            onClick={() => handleLinkClick('Trending')}
            href="#Trending"
            className="headerLink"
          >
            Trending
          </a>
          <a
            onClick={() => handleLinkClick('Top')}
            href="#Top"
            className="headerLink"
          >
            Top Loved
          </a>
          <a
            onClick={() => handleLinkClick('Action')}
            href="#Action"
            className="headerLink"
          >
            Action
          </a>
          <a
            onClick={() => handleLinkClick('Scary')}
            href="#Scary"
            className="headerLink"
          >
            Horror
          </a>
          <a
            onClick={() => handleLinkClick('Comedies')}
            href="#Comedies"
            className="headerLink"
          >
            Comedy
          </a>

          <a
            onClick={() => handleLinkClick('myList')}
            href="#myList"
            className="headerLink"
          >
            My List
          </a>
        </nav>
      </div>

      <div className="flex items-center space-x-4 text-sm font-light">
        <button
          onClick={logout}
          className="hover:opacity-70 transition duration-300"
        >
          Logout
        </button>
        <MagnifyingGlassIcon className="hidden h-6 w-6 sm:inline " />
        <p className="hidden first-letter:capitalize lg:inline ">Kids</p>
        <BellIcon className="h-6 w-6 hidden sm:block" />
        <Link className="inline-block " href="/account">
          <UserCircleIcon className="h-8 w-8 transition duration-300 hover:text-slate-300" />
        </Link>
      </div>
    </header>
  );
};

export default Header;

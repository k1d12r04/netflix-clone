import Image from 'next/image';
import { BellIcon, MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import { UserCircleIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import useAuth from '@/hooks/useAuth';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { logout } = useAuth();

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

        <ul className="hidden space-x-4 md:flex">
          <li className="headerLink">Home</li>
          <li className="headerLink">TV Shows</li>
          <li className="headerLink">Movies</li>
          <li className="headerLink">New & Popular</li>
          <li className="headerLink">My List</li>
        </ul>
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
        <BellIcon className="h-6 w-6" />
        <Link className="inline-block " href="/account">
          <UserCircleIcon className="h-8 w-8 transition duration-300 hover:text-slate-300" />
        </Link>
      </div>
    </header>
  );
};

export default Header;

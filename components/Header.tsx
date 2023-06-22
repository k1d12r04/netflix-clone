import Image from 'next/image';
import { BellIcon, MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';

const Header = () => {
  return (
    <header>
      <div className="flex items-center space-x-2 md:space-x-10">
        <Image
          src="/netflix-logo.svg"
          alt="netflix logo"
          width={100}
          height={100}
          className="cursor-pointer object-contain"
        />

        <ul className="hidden md:flex space-x-4">
          <li className="headerLink">Home</li>
          <li className="headerLink">TV Shows</li>
          <li className="headerLink">Movies</li>
          <li className="headerLink">New & Popular</li>
          <li className="headerLink">My List</li>
        </ul>
      </div>

      <div className="flex items-center space-x-4 text-sm font-light">
        <MagnifyingGlassIcon className="hidden sm:inline w-6 h-6 " />
        <p className="hidden lg:inline">Kids</p>
        <BellIcon className="w-6 h-6" />
        <Link className="inline-block " href="/account">
          <Image
            src="/Netflix-avatar.png"
            alt="Netflix profile avatar"
            width={32}
            height={32}
            className="cursor-pointer rounded"
          />
        </Link>
      </div>
    </header>
  );
};

export default Header;

import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { Movie } from '../typing';
import Thumbnail from './Thumbnail';
import { useRef, useState } from 'react';

interface Props {
  title: string;
  movies: Movie[];
}

const Row = ({ title, movies }: Props) => {
  const rowRef = useRef<HTMLDivElement>(null);
  const [isScrollLeftZero, setIsScrollLeftZero] = useState(true);

  const scrollRight = () => {
    rowRef.current?.scrollBy({
      left: rowRef.current.clientWidth,
      behavior: 'smooth',
    });
  };

  const scrollLeft = () => {
    rowRef.current?.scrollBy({
      left: -rowRef.current.clientWidth,
      behavior: 'smooth',
    });
  };

  const handleScroll = () => {
    const scrollLeft = rowRef.current?.scrollLeft;

    if (scrollLeft === 0) {
      setIsScrollLeftZero(true);
    } else {
      setIsScrollLeftZero(false);
    }
  };

  return (
    <div className="flex h-40 flex-col justify-center space-y-1 md:mb-4 md:h-48 md:space-y-2 lg:mb-6 lg:space-y-4 ">
      <h1 className="text-md cursor-pointer font-semibold text-[#e5e5e5] transition duration-200 first-letter:capitalize hover:text-white md:text-2xl ">
        {title}
      </h1>
      <div className="group relative ">
        <ChevronLeftIcon
          className={`absolute bottom-0 left-2 top-0 z-40 m-auto hidden h-9 w-9 cursor-pointer opacity-0 transition group-hover:opacity-100 hover:scale-125 lg:${
            isScrollLeftZero ? 'hidden' : 'block'
          } `}
          onClick={scrollLeft}
        />

        <div
          ref={rowRef}
          className="flex items-center space-x-1 overflow-x-scroll scrollbar-hide md:space-x-2.5"
          onScroll={handleScroll}
        >
          {movies.map(movie => (
            <Thumbnail key={movie.id} movie={movie} />
          ))}
        </div>

        <ChevronRightIcon
          className="absolute bottom-0 right-2 top-0 z-40 m-auto hidden h-9 w-9 cursor-pointer opacity-0 transition group-hover:opacity-100 hover:scale-125 lg:block"
          onClick={scrollRight}
        />
      </div>
    </div>
  );
};

export default Row;

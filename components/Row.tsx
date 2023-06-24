import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { Movie } from '../typing';
import Thumbnail from './Thumbnail';

interface Props {
  title: string;
  movies: Movie[];
}

const Row = ({ title, movies }: Props) => {
  return (
    <div className="flex h-40 flex-col justify-center space-y-1 md:mb-4 md:h-48 md:space-y-2 lg:mb-6 lg:space-y-4 ">
      <h1 className="text-md w-56 cursor-pointer font-semibold text-[#e5e5e5] transition duration-200 hover:text-white md:text-2xl ">
        {title}
      </h1>
      <div className="group relative ">
        <ChevronLeftIcon className="absolute bottom-0 left-2 top-0 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100" />

        <div className="no-scrollbar flex items-center space-x-1 overflow-x-scroll scrollbar-hide md:space-x-2.5  ">
          {movies.map(movie => (
            <Thumbnail key={movie.id} movie={movie} />
          ))}
        </div>

        <ChevronRightIcon className="absolute bottom-0 left-2 top-0 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100" />
      </div>
    </div>
  );
};

export default Row;

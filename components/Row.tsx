import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { Movie } from '../typing';

interface Props {
  title: string;
  movies: Movie[];
}

const Row = ({ title, movies }: Props) => {
  return (
    <div className="h-40 space-y-0.5 md:space-y-2">
      <h1 className="w-56 cursor-pointer text-sm font-semibold text-[#e5e5e5] transition duration-200 hover:text-white md:text-2xl ">
        {title}
      </h1>
      <div className="group relative md:-ml-2">
        <ChevronLeftIcon className="absolute bottom-0 left-2 top-0 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100" />
        <ChevronRightIcon className="absolute bottom-0 left-2 top-0 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100" />
      </div>
    </div>
  );
};

export default Row;

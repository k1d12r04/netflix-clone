import { Movie } from '@/typing';
import Image from 'next/image';

interface Props {
  movie: Movie;
}

const Thumbnail = ({ movie }: Props) => {
  return (
    <div className="relative h-28 min-w-[180px]">
      <Image
        src={`https://image.tmdb.org/t/p/w500${
          movie.backdrop_path || movie.poster_path
        }`}
        alt="movie thumbnail"
        className="rounded-sm object-cover md:rounded"
        width={0}
        height={0}
        fill
        sizes="100vw"
      />
    </div>
  );
};

export default Thumbnail;

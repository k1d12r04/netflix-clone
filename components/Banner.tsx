import { Movie } from '@/typing';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { baseUrl } from '@/constants/movie';

interface Props {
  netflixOriginals: Movie[];
}

const Banner = ({ netflixOriginals }: Props) => {
  const [movie, setMovie] = useState<Movie | null>(null);

  useEffect(() => {
    setMovie(
      netflixOriginals[Math.floor(Math.random() * netflixOriginals.length)]
    );
  }, [netflixOriginals]);

  console.log(movie);

  return (
    <div className="flex flex-col space-y-2 px-4 py-16 md:space-y-4 lg:h-[100vh] lg:justify-end">
      <div className="absolute left-0 top-0 -z-10 h-[95vh] w-full ">
        <Image
          src={`${baseUrl}${movie?.backdrop_path || movie?.poster_path}`}
          alt="movie poster"
          width={0}
          height={0}
          sizes="100vw"
          fill
          style={{
            objectFit: 'cover',
            objectPosition: '50% 20%',
          }}
        />
      </div>

      <h1 className="text-2xl font-bold md:text-4xl lg:text-7xl">
        {movie?.title || movie?.name || movie?.original_name}
      </h1>
      <p className="max-w-sm text-xs md:max-w-lg md:text-lg lg:max-w-2xl lg:text-2xl ">
        {movie?.overview}
      </p>
    </div>
  );
};

export default Banner;

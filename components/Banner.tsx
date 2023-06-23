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

      <div
        style={{
          boxShadow:
            'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',
        }}
        className="rounded-xl bg-stone-950/50 p-4"
      >
        <h1 className="mb-2 text-2xl font-[400] md:mb-4 md:text-4xl lg:text-7xl ">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <p className=" max-w-md text-sm font-[300] md:max-w-lg md:text-lg lg:max-w-2xl lg:text-2xl ">
          {movie?.overview}
        </p>
      </div>
    </div>
  );
};

export default Banner;

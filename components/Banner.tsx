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
    <div>
      <div className="relative w-full h-[95vh] -z-10 ">
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
    </div>
  );
};

export default Banner;

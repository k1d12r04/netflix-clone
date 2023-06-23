import { Movie } from '@/typing';
import Image from 'next/image';
import { useEffect, useState } from 'react';
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

  return <div></div>;
};

export default Banner;

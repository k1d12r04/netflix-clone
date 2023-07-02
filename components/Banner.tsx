import { Movie } from '@/typing';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { baseUrl } from '@/constants/movie';
import { FaPlay } from 'react-icons/fa';
import { InformationCircleIcon } from '@heroicons/react/24/solid';
import 'react-loading-skeleton/dist/skeleton.css';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import {
  modalState,
  bannerMovieState,
  clickedMovieState,
} from '@/atoms/modalAtom';
import { useRecoilState } from 'recoil';

interface Props {
  netflixOriginals: Movie[];
}

const Banner = ({ netflixOriginals }: Props) => {
  const [movie, setMovie] = useState<Movie | null>(null);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useRecoilState(modalState);
  const [currentMovie, setCurrentMovie] = useRecoilState(bannerMovieState);
  const [clickedMovie, setClickedMovie] = useRecoilState(clickedMovieState);

  const timeout: ReturnType<typeof setTimeout> = setTimeout(() => {
    setLoading(false);
  }, 1500);

  useEffect(() => {
    setMovie(
      netflixOriginals[Math.floor(Math.random() * netflixOriginals?.length)]
    );
  }, [netflixOriginals]);

  return (
    <SkeletonTheme baseColor="#202020" highlightColor="#444">
      <div className="flex flex-col space-y-10 py-10 md:h-screen md:justify-center md:space-y-14 md:py-16 lg:justify-end">
        <div className="absolute left-0 top-0 -z-10 h-[95vh] w-full ">
          {(loading && (
            <Skeleton
              width="100%"
              height="100%"
              style={{ objectFit: 'cover' }}
            />
          )) || (
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
          )}
        </div>

        <div
          style={{
            boxShadow:
              'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',
          }}
          className="rounded-xl bg-stone-950/40 p-2 lg:p-4"
        >
          <h1 className="text-2xl font-[400] first-letter:capitalize md:mb-4 md:text-4xl lg:text-7xl ">
            {movie?.title || movie?.name || movie?.original_name || (
              <Skeleton style={{ width: '40%', height: '24px' }} count={1} />
            )}
          </h1>
          <p className="max-w-md text-sm font-[300] first-letter:capitalize md:max-w-lg md:text-lg lg:max-w-2xl lg:text-2xl ">
            {movie?.overview ||
              (loading && (
                <Skeleton style={{ width: '70%', height: '15px' }} count={5} />
              )) ||
              'Movie description not found.'}
          </p>
        </div>

        <div className="ml-4 flex space-x-2 md:space-x-4">
          <button className="bannerButton  bg-white text-black">
            <FaPlay className="h-4 w-4 text-black md:h-7 md:w-7" /> Play
          </button>
          <button
            onClick={() => {
              setCurrentMovie(movie);
              setShowModal(true);
              setClickedMovie('bannerMovie');
            }}
            className="bannerButton  bg-red-700 text-white"
          >
            More info{' '}
            <InformationCircleIcon className="h-5 w-5 md:h-8 md:w-8" />
          </button>
        </div>
      </div>
    </SkeletonTheme>
  );
};

export default Banner;

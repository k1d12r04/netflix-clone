import {
  modalState,
  bannerMovieState,
  selectedMovieState,
  clickedMovieState,
} from '@/atoms/modalAtom';
import {
  XMarkIcon,
  PlusIcon,
  HandThumbUpIcon,
} from '@heroicons/react/24/outline';
import { PlayIcon, PauseIcon } from '@heroicons/react/24/solid';
import { SpeakerWaveIcon, SpeakerXMarkIcon } from '@heroicons/react/20/solid';
import MuiModal from '@mui/material/Modal';
import { useRecoilState, useRecoilValue } from 'recoil';
import { useEffect, useState } from 'react';
import ReactPlayer from 'react-player/lazy';
import { Movie, Genre } from '@/typing';

const Modal = () => {
  const [showModal, setShowModal] = useRecoilState(modalState);
  const bannerMovie = useRecoilValue(bannerMovieState);
  const selectedMovie = useRecoilValue(selectedMovieState);
  const clickedMovie = useRecoilValue(clickedMovieState);
  const [data, setData] = useState<Movie | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    let movie: any = null;

    if (clickedMovie === 'bannerMovie') {
      movie = bannerMovie;
    } else if (clickedMovie === 'selectedMovie') {
      movie = selectedMovie;
    }

    async function fetchMovie() {
      const data = await fetch(
        `https://api.themoviedb.org/3/${
          movie?.media_type === 'tv' ? 'tv' : 'movie'
        }/${movie?.id}?api_key=${
          process.env.NEXT_PUBLIC_API_KEY
        }&language=en-US&append_to_response=videos`
      ).then(response => response.json());
      setData(data);
    }
    fetchMovie();
  }, [selectedMovie, bannerMovie, clickedMovie]);

  const handleClose = () => {
    setShowModal(false);
  };

  const videos = data?.videos?.results;

  const index = videos?.findIndex(
    (item: any) =>
      item.name.indexOf('Trailer') > -1 ||
      item.name.indexOf('trailer') > -1 ||
      item.name.indexOf('TRAILER') > -1
  );

  console.log(data);

  const trailer =
    videos?.find(
      (video: any) =>
        video.name === 'Final Trailer' ||
        video.name === 'Official Trailer' ||
        video.name === 'Trailer'
    ) ||
    (videos && videos[index]) ||
    (videos && videos[0]);

  const genresArr: string[] = [];
  data?.genres.map((item: any) => genresArr.push(item?.name));

  const voteAverage: any = data?.vote_average;

  return (
    <MuiModal
      open={showModal}
      onClose={handleClose}
      className="flex flex-col justify-center items-center overflow-y-auto !scrollbar-thin !scrollbar-track-transparent !scrollbar-thumb-red-600 !scrollbar-thumb-rounded-lg pt-60 md:pt-0"
    >
      <>
        <div className="relative flex justify-center w-full md:w-fit rounded-lg pt-28 ">
          <button
            onClick={handleClose}
            className="modalButton mt-28  absolute left-1/2 -top-7 -translate-x-1/2 lg:left-full lg:-top-3 !z-40 h-9 w-9 border-none bg-[#181818] hover:bg-[#181818]"
          >
            <XMarkIcon className="w-6 h-6" />
          </button>
          <ReactPlayer
            width={760}
            height={360}
            style={{
              width: '100%',
              height: '100%',
              borderTopRightRadius: '8px',
              borderTopLeftRadius: '8px',
              overflow: 'hidden',
            }}
            url={`https://www.youtube.com/watch?v=${trailer?.key}`}
            playing={isPlaying}
            muted={isMuted}
            config={{
              youtube: { playerVars: { disablekb: 1 } },
            }}
          />
          <button
            className="absolute bottom-3 left-3 bg-white px-9 rounded-md py-2 text-black font-semibold cursor-pointer hover:bg-black hover:text-white group transition duration-300 "
            onClick={() => setIsPlaying(prevState => !prevState)}
          >
            {isPlaying ? (
              <PauseIcon className="w-4 h-4 md:w-7 md:h-7 mr-1 text-black inline-block group-hover:text-white transition duration-300 ease-in-out" />
            ) : (
              <PlayIcon className="w-4 h-4 md:w-7 md:h-7 mr-1 text-black inline-block group-hover:text-white transition duration-300 ease-in-out" />
            )}

            {isPlaying === true ? 'Pause' : 'Play'}
          </button>
          <button className="absolute left-[10.5rem] bottom-3 bg-black rounded-full p-2 group hover:bg-white transition duration-300 ease-in-out">
            <PlusIcon className="w-6 h-6 group-hover:text-black transition duration-300 ease-in-out" />
          </button>
          <button className="absolute left-[13.5rem] bottom-3 bg-black rounded-full p-2 group hover:bg-white transition duration-300 ease-in-out">
            <HandThumbUpIcon className="w-6 h-6 group-hover:text-black transition duration-300 ease-in-out" />
          </button>
          <button
            className="absolute right-10 bottom-14 border-2 border-white rounded-full p-1 cursor-pointer opacity-70 hover:opacity-100"
            onClick={() => setIsMuted(prevState => !prevState)}
          >
            {isMuted ? (
              <SpeakerXMarkIcon className="w-8 h-8" />
            ) : (
              <SpeakerWaveIcon className="w-8 h-8" />
            )}
          </button>
        </div>

        <div className="bg-[#141414] w-full md:max-w-[760px] p-6 text-md space-y-4">
          <p className="flex items-center">
            <span className="text-green-600 mr-2">
              {Math.floor(voteAverage) * 10}% Match
            </span>{' '}
            {data?.release_date || data?.first_air_date}
            <span className="ml-2 border border-[gray] p-[1px] text-gray-300 px-2 rounded-md text-xs ">
              HD
            </span>
          </p>

          <div className="grid gap-y-4 md:grid-cols-10 md:gap-x-8">
            <p className="col-span-7 text-sm lg:text-[16px] w-full md:w-[50ch] ">
              {data?.overview}
            </p>
            <div className="col-span-3 text-md space-y-2">
              <p>
                {' '}
                <span className="text-gray-500">Genres:</span>{' '}
                {genresArr.join(', ')}{' '}
              </p>
              <p>
                <span className="text-gray-500">Original language:</span>{' '}
                {data?.original_language}
              </p>
              <p>
                <span className="text-gray-500">Total votes:</span>{' '}
                {data?.vote_count}
              </p>
              <p>
                <span className="text-gray-500">Votes average:</span>{' '}
                {Math.floor(voteAverage)}/10
              </p>
            </div>
          </div>
        </div>
      </>
    </MuiModal>
  );
};

export default Modal;

import {
  modalState,
  bannerMovieState,
  selectedMovieState,
  clickedMovieState,
} from '@/atoms/modalAtom';
import { XMarkIcon } from '@heroicons/react/24/outline';
import MuiModal from '@mui/material/Modal';
import { useRecoilState, useRecoilValue } from 'recoil';
import { useEffect, useState } from 'react';
import ReactPlayer from 'react-player/lazy';
import { Movie } from '@/typing';

const Modal = () => {
  const [showModal, setShowModal] = useRecoilState(modalState);
  const bannerMovie = useRecoilValue(bannerMovieState);
  const selectedMovie = useRecoilValue(selectedMovieState);
  const clickedMovie = useRecoilValue(clickedMovieState);
  const [data, setData] = useState<Movie | null>(null);

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
  console.log(index);

  const trailer =
    videos?.find(
      (video: any) =>
        video.name === 'Final Trailer' ||
        video.name === 'Official Trailer' ||
        video.name === 'Trailer'
    ) ||
    (videos && videos[index]) ||
    (videos && videos[0]);

  return (
    <MuiModal
      open={showModal}
      onClose={handleClose}
      className="flex justify-center items-center"
    >
      <>
        <div className="relative flex justify-center w-full md:w-fit rounded-lg">
          <button
            onClick={handleClose}
            className="modalButton absolute left-1/2 -top-7 -translate-x-1/2 lg:left-full lg:-top-3 !z-40 h-9 w-9 border-none bg-[#181818] hover:bg-[#181818]"
          >
            <XMarkIcon className="w-6 h-6" />
          </button>
          <ReactPlayer
            style={{
              width: '100%',
              height: '100%',
              borderRadius: '8px',
              overflow: 'hidden',
            }}
            url={`https://www.youtube.com/watch?v=${trailer?.key}`}
            playing
          />
        </div>
      </>
    </MuiModal>
  );
};

export default Modal;

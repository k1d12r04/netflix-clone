import {
  clickedMovieState,
  modalState,
  selectedMovieState,
} from '@/atoms/modalAtom';
import { Movie } from '@/typing';
import Image from 'next/image';
import { useRecoilState } from 'recoil';
interface Props {
  movie: Movie;
}

const Thumbnail = ({ movie }: Props) => {
  const [showModal, setShowModal] = useRecoilState(modalState);
  const [selectedMovie, setSelectedMovie] = useRecoilState(selectedMovieState);
  const [clickedMovie, setClickedMovie] = useRecoilState(clickedMovieState);

  return (
    <div
      onClick={() => {
        setShowModal(true);
        setSelectedMovie(movie);
        setClickedMovie('selectedMovie');
      }}
      className="relative h-28 min-w-[180px] cursor-pointer transition duration-200 ease-out md:h-36 md:min-w-[260px] md:hover:scale-95 flex justify-center items-end text-center"
    >
      <Image
        src={`https://image.tmdb.org/t/p/w500${
          movie.backdrop_path || movie.poster_path
        }`}
        alt="movie thumbnail"
        className="rounded-sm object-cover md:rounded"
        width={0}
        height={0}
        sizes="100vw"
        fill
      />
      <div className="bg-black/30 absolute w-full p-1">
        <p className="text-white text-sm ">
          {movie?.title || movie?.name || movie?.original_name}{' '}
        </p>
      </div>
    </div>
  );
};

export default Thumbnail;

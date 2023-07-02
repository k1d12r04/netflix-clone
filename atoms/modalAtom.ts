import { DocumentData } from 'firebase/firestore';
import { Movie } from '@/typing';
import { atom } from 'recoil';

export const modalState = atom({
  key: 'modalState',
  default: false,
});

export const bannerMovieState = atom<Movie | DocumentData | null>({
  key: 'bannerMovieState',
  default: null,
});

export const selectedMovieState = atom<Movie | DocumentData | null>({
  key: 'selectedMovieState',
  default: null,
});

export const clickedMovieState = atom<string | null>({
  key: 'clickedMovieState',
  default: null,
});

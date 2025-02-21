import { modalState } from '@/atoms/modalAtom';
import Banner from '@/components/Banner';
import Header from '@/components/Header';
import Modal from '@/components/Modal';
import Row from '@/components/Row';
import { Movie } from '@/typing';
import requests from '@/utils/requests';
import Head from 'next/head';
import { useRecoilValue } from 'recoil';
import { ScrollProvider } from '../ScrollContext';

interface Props {
  netflixOriginals: Movie[];
  trendingNow: Movie[];
  topRated: Movie[];
  actionMovies: Movie[];
  comedyMovies: Movie[];
  horrorMovies: Movie[];
  romanceMovies: Movie[];
  documentaries: Movie[];
}

const Home = ({
  netflixOriginals,
  trendingNow,
  topRated,
  actionMovies,
  comedyMovies,
  horrorMovies,
  documentaries,
}: Props) => {
  const showModal = useRecoilValue(modalState);

  return (
    <ScrollProvider>
      <div className="relative h-screen bg-gradient-to-b lg:h-[140vh] ">
        <Head>
          <title>Netflix - Home</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Header />

        <main className="px-4 lg:space-y-24 lg:px-8">
          <Banner netflixOriginals={netflixOriginals} />
          <section className="pb-6">
            <Row title="Trending  Now" movies={trendingNow} />
            <Row title="Top Loved" movies={topRated} />
            <Row title="Action Thrillers" movies={actionMovies} />
            {/* My List Component */}
            <Row title="Comedies" movies={comedyMovies} />
            <Row title="Scary Movies" movies={horrorMovies} />
            <Row title="Documentaries" movies={documentaries} />
          </section>
        </main>
        {showModal && <Modal />}
      </div>
    </ScrollProvider>
  );
};

export default Home;

export const getServerSideProps = async () => {
  const [
    netflixOriginals,
    trendingNow,
    topRated,
    actionMovies,
    comedyMovies,
    horrorMovies,
    documentaries,
  ] = await Promise.all([
    fetch(requests.fetchNetflixOriginals).then(res => res.json()),
    fetch(requests.fetchTrending).then(res => res.json()),
    fetch(requests.fetchTopRated).then(res => res.json()),
    fetch(requests.fetchActionMovies).then(res => res.json()),
    fetch(requests.fetchComedyMovies).then(res => res.json()),
    fetch(requests.fetchHorrorMovies).then(res => res.json()),
    fetch(requests.fetchDocumentaries).then(res => res.json()),
  ]);
  return {
    props: {
      netflixOriginals: netflixOriginals.results,
      trendingNow: trendingNow.results,
      topRated: topRated.results,
      actionMovies: actionMovies.results,
      comedyMovies: comedyMovies.results,
      horrorMovies: horrorMovies.results,
      documentaries: documentaries.results,
    },
  };
};

import Head from 'next/head';
import { useRouter } from 'next/router';
import ArtistResults from '../components/ArtistResults';

export default function Artist(props) {
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>Artist Details</title>
      </Head>

      <ArtistResults results={props} />
    </div>
  );
}

export const getServerSideProps = async (context) => {
  const artistDetails = await fetch(
    `https://api.deezer.com/artist/${context.query.term}`
  ).then((response) => response.json());

  const artistTop = await fetch(
    `https://api.deezer.com/artist/${context.query.term}/top`
  ).then((response) => response.json());

  const artistTopAlbums = await fetch(
    `https://api.deezer.com/artist/${context.query.term}/albums`
  ).then((response) => response.json());

  return {
    props: {
      artistDetails: artistDetails,
      artistTop: artistTop,
      artistTopAlbums: artistTopAlbums,
    },
  };
};

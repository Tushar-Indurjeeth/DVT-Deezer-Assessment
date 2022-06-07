import Head from 'next/head';
import { useRouter } from 'next/router';
import SearchResults from '../components/SearchResults';

export default function Search({ results }) {
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>{router.query.term} - Deezer Search</title>
      </Head>

      <SearchResults results={results.data} />
    </div>
  );
}

export const getServerSideProps = async (context) => {
  const data = await fetch(
    `https://api.deezer.com/search?q=${context.query.term}`
  ).then((response) => response.json());

  return {
    props: {
      results: data,
    },
  };
};

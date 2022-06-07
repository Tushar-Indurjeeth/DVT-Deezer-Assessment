import React from 'react';
import Thumbnail from './Thumbnail';

const ArtistResults = ({
  results: { artistDetails, artistTop, artistTopAlbums },
}) => {
  return (
    <div className="bg-slate-200">
      <div className="pl-6 text-2xl md:text-3xl space-y-2 pt-3 ">
        <p>{`Artist name: ${artistDetails?.name}`}</p>
        <p>{`No. of fans: ${artistDetails?.nb_fan}`}</p>
        <div>Top 5 tracks:</div>
      </div>

      <div>
        <div className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center">
          {artistTop.data.map((result, i) => (
            <Thumbnail key={i} result={result} />
          ))}
        </div>
      </div>

      <div>
        <div className="pl-6 text-2xl md:text-3xl">All albums released:</div>
        <div className="px-3 py-3 sm:grid md:grid-cols-2 3xl:flex flex-wrap justify-center pl-6 text-lg md:text-xl space-y-1">
          {artistTopAlbums.data.map((result, i) => (
            <div key={i}>{result.title}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ArtistResults;

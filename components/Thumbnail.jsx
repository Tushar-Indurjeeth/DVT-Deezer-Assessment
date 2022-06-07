import Image from 'next/image';
import { useRouter } from 'next/router';
import { forwardRef } from 'react';

import { ThumbUpIcon } from '@heroicons/react/outline';

// eslint-disable-next-line react/display-name
const Thumbnail = forwardRef(({ result }, ref) => {
  const minutes = Math.floor(result.duration / 60);
  const seconds = result.duration - minutes * 60;

  const router = useRouter();

  const search = (e) => {
    e.preventDefault();
    router.push(`/artist?term=${result.artist.id}`);
  };

  return (
    <div
      ref={ref}
      className="p-2 group cursor-pointer transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50"
      onClick={search}
    >
      <Image
        layout="responsive"
        src={
          `${result?.album?.cover_big || result?.album?.cover_medium}` ||
          `${result?.cover_big || result?.cover_medium}`
        }
        height={1080}
        width={1080}
        alt="cover image"
      />

      <div className="p-2">
        <p className="truncate max-w-md">{result.overview}</p>

        <h2 className="mt-1 text-2xl transition-all duration-100 ease-in-out group-hover:font-bold">
          {`${result?.artist?.name} - ${
            result?.title_short || 'No title'
          } - ${minutes}:${seconds}`}
        </h2>

        <p className="flex items-center opacity-0 group-hover:opacity-100">
          {result?.album?.title && `${result?.album?.title} •`}
          <ThumbUpIcon className="h-5 mx-2" />
        </p>
      </div>
    </div>
  );
});

export default Thumbnail;

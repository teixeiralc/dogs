import React from 'react';
import { PHOTOS_GET } from '../../api';
import FeedPhotosItem from './FeedPhotosItem';
import useFetch from '../../Hooks/useFetch';
import Error from '../Helper/Error';
import Loading from '../Helper/Loading';

import styles from '../../styles/modules/Feed/FeedPhotos.module.css';

const FeedPhotos = ({ page, user, setModalPhoto, setInfinite }) => {
  const { data, loading, error, request } = useFetch();

  React.useEffect(() => {
    const fetchPhotos = async () => {
      const total = 6; // Amount of photos that will be rendered per page
      const { url, options } = PHOTOS_GET({ page, total, user });
      const { res, json } = await request(url, options);

      // If the json length < 6, meaning that there're no more photos to be rendered,
      // setInfinite to false to stop useless fetches from happening
      if (res && res.ok && json.length < total) setInfinite(false);
    };
    fetchPhotos();
  }, [request, page, user, setInfinite]);

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  if (data)
    return (
      <ul className={`${styles.feed} animeLeft`}>
        {data.map((photo) => (
          <FeedPhotosItem
            key={photo.id}
            photo={photo}
            setModalPhoto={setModalPhoto}
          />
        ))}
      </ul>
    );
  return null;
};

export default FeedPhotos;

import React from 'react';
import { useSelector } from 'react-redux';
import FeedPhotosItem from './FeedPhotosItem';
import styles from '../../styles/modules/Feed/FeedPhotos.module.css';

const FeedPhotos = () => {
  const { list } = useSelector((state) => state.feed);

  return (
    <ul className={`${styles.feed} animeLeft`}>
      {list.map((photo) => (
        <FeedPhotosItem key={photo.id} photo={photo} />
      ))}
    </ul>
  );
};

export default FeedPhotos;

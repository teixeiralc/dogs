/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { useDispatch } from 'react-redux';
import { fetchPhoto } from '../../store/photo';
import { openModal } from '../../store/ui';
import styles from '../../styles/modules/Feed/FeedPhotosItem.module.css';
import Image from '../Helper/Image';

const FeedPhotosItem = ({ photo }) => {
  const dispatch = useDispatch();

  const setPhotoForModal = () => {
    dispatch(openModal());
    dispatch(fetchPhoto(photo.id));
  };

  return (
    <li
      className={`${styles.photo} feed_photos_item`}
      onClick={setPhotoForModal}
    >
      <Image src={photo.src} alt={photo.title} />
      <span className={styles.views}>{photo.acessos}</span>
    </li>
  );
};

export default FeedPhotosItem;

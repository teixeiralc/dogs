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

  const setPhotoForModalOnKeyDown = (e) => {
    if (e.keyCode === 13) {
      dispatch(openModal());
      dispatch(fetchPhoto(photo.id));
    }
  };

  return (
    <li className={`${styles.photo} feed_photos_item`}>
      <button
        onClick={setPhotoForModal}
        onKeyDown={setPhotoForModalOnKeyDown}
        type="button"
      >
        <Image src={photo.src} alt={photo.title} />
        <span className={styles.views}>{photo.acessos}</span>
      </button>
    </li>
  );
};

export default FeedPhotosItem;

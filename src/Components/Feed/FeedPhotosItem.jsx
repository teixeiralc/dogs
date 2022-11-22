import React from 'react';
import styles from '../../styles/modules/Feed/FeedPhotosItem.module.css';

const FeedPhotosItem = ({ photo, setModalPhoto }) => {
  const setPhotoForModal = () => {
    setModalPhoto(photo);
  };

  const setPhotoForModalOnKeyDown = (e) => {
    if (e.keyCode === 13) setModalPhoto(photo);
  };

  return (
    <li className={styles.photo}>
      <button
        onClick={setPhotoForModal}
        onKeyDown={setPhotoForModalOnKeyDown}
        type="button"
      >
        <img src={photo.src} alt={photo.title} />
        <span className={styles.views}>{photo.acessos}</span>
      </button>
    </li>
  );
};

export default FeedPhotosItem;

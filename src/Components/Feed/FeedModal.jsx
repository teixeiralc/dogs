import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPhoto } from '../../store/photo';
import Error from '../Helper/Error';
import Loading from '../Helper/Loading';
import PhotoContent from '../Photo/PhotoContent';
import styles from '../../styles/modules/Feed/FeedModal.module.css';

const FeedModal = ({ photo, setModalPhoto }) => {
  const { data, error, loading } = useSelector((state) => state.photo);
  const dispatch = useDispatch();

  const outsideClick = ({ target, currentTarget }) => {
    if (target === currentTarget) setModalPhoto(null);
  };

  React.useEffect(() => {
    dispatch(fetchPhoto(photo.id));
  }, [photo.id, dispatch]);

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
    <div className={styles.modal} onClick={outsideClick}>
      {error && <Error error={error} />}
      {loading && <Loading />}
      {data && <PhotoContent />}
    </div>
  );
};

export default FeedModal;

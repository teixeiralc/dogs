import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Error from '../Helper/Error';
import Loading from '../Helper/Loading';
import PhotoContent from '../Photo/PhotoContent';
import styles from '../../styles/modules/Feed/FeedModal.module.css';
import { closeModal } from '../../store/ui';

const FeedModal = () => {
  const { modal } = useSelector((state) => state.ui);
  const { data, error, loading } = useSelector((state) => state.photo);
  const dispatch = useDispatch();

  const outsideClick = ({ target, currentTarget }) => {
    if (target === currentTarget) dispatch(closeModal());
  };

  React.useEffect(() => {
    dispatch(closeModal());
  }, [dispatch]);

  if (!modal) return null;
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

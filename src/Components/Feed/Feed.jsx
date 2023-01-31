import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { loadNewPhotos, resetFeedState } from '../../store/feed';
import FeedModal from './FeedModal';
import FeedPhotos from './FeedPhotos';
import Loading from '../Helper/Loading';
import Error from '../Helper/Error';

const Feed = ({ user }) => {
  const [modalPhoto, setModalPhoto] = React.useState(null);
  const { infinite, loading, list, error } = useSelector((state) => state.feed);

  const dispatch = useDispatch();

  const totalPhotosPerPage = 6;
  React.useEffect(() => {
    dispatch(resetFeedState());
    dispatch(loadNewPhotos({ user, total: totalPhotosPerPage }));
  }, [dispatch, user]);

  React.useEffect(() => {
    let wait;
    const infiniteScroll = () => {
      if (infinite) {
        const { scrollY } = window;
        const height = document.body.offsetHeight - window.innerHeight;
        if (scrollY > height * 0.75 && !wait) {
          dispatch(loadNewPhotos({ user, total: totalPhotosPerPage }));
          wait = true;
          setTimeout(() => {
            wait = false;
          }, 500);
        }
      }
    };

    window.addEventListener('wheel', infiniteScroll);
    window.addEventListener('scroll', infiniteScroll);

    return () => {
      window.removeEventListener('wheel', infiniteScroll);
      window.removeEventListener('scroll', infiniteScroll);
    };
  }, [infinite, dispatch, user]);

  return (
    <div>
      {modalPhoto && (
        <FeedModal photo={modalPhoto} setModalPhoto={setModalPhoto} />
      )}
      {list.length > 0 && <FeedPhotos setModalPhoto={setModalPhoto} />}
      {loading && <Loading />}
      {error && <Error error={error} />}

      {!infinite && !user && (
        <p
          style={{
            textAlign: 'center',
            padding: '2rem 0 4rem 0',
            color: '#888',
          }}
        >
          Não existem mais postagens.
        </p>
      )}
    </div>
  );
};

Feed.defaultProps = {
  user: 0,
};

Feed.propTypes = {
  user: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.number.isRequired,
  ]),
};

export default Feed;

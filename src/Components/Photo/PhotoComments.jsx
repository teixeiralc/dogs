/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { useSelector } from 'react-redux';
import PhotoCommentsForm from './PhotoCommentsForm';
import styles from '../../styles/modules/Photo/PhotoComments.module.css';

const PhotoComments = (props) => {
  const [comments, setComments] = React.useState(() => props.comments);
  const commentsSection = React.useRef(null);
  const { data: login } = useSelector((state) => state.user);

  React.useEffect(() => {
    commentsSection.current.scrollTop = commentsSection.current.scrollHeight;
  }, [comments]);

  return (
    <>
      <ul
        ref={commentsSection}
        className={`${styles.comments} ${
          props.singular ? styles.singular : ''
        }`}
      >
        {comments.map((comment) => (
          <li key={comment.comment_ID}>
            <b>{comment.comment_author}: </b>
            <span>{comment.comment_content}</span>
          </li>
        ))}
      </ul>
      {login && (
        <PhotoCommentsForm
          singular={props.singular}
          id={props.id}
          setComments={setComments}
        />
      )}
    </>
  );
};

export default PhotoComments;

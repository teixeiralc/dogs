import React from 'react';
import styles from './Image.module.css';

const Image = ({ alt, ...props }) => {
  const [skeleton, setSkeleton] = React.useState(true);

  const showImg = (e) => {
    // On load, hides the skeleton and sets the image opacity to be visible
    // Opacity is set to 0 by default in ./Image.module.css
    setSkeleton(false);
    e.target.style.opacity = 1;
  };

  return (
    <div className={styles.wrapper}>
      {skeleton && <div className={styles.skeleton} />}
      <img onLoad={showImg} className={styles.img} alt={alt} {...props} />
    </div>
  );
};

export default Image;

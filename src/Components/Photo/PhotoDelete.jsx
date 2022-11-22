import React from 'react';
import { PHOTO_DELETE } from '../../api';
import useFetch from '../../Hooks/useFetch';
import styles from '../../styles/modules/Photo/PhotoDelete.module.css';

const PhotoDelete = ({ id }) => {
  const { loading, request } = useFetch();

  const deleteOnClick = async () => {
    // eslint-disable-next-line no-alert
    const confirm = window.confirm(
      'Esta ação pode ser irreversível. Tem certeza que deseja deletar?'
    );
    if (confirm) {
      const { url, options } = PHOTO_DELETE(id);
      const { res } = await request(url, options);
      if (res.ok) window.location.reload();
    }
  };

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {loading ? (
        <button disabled type="button" className={styles.delete}>
          Deletando...
        </button>
      ) : (
        <button onClick={deleteOnClick} type="button" className={styles.delete}>
          Deletar
        </button>
      )}
    </>
  );
};

export default PhotoDelete;

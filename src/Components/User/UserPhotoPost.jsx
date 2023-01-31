import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPhotoPost } from '../../store/photoPost';
import useForm from '../../Hooks/useForm';
import Input from '../Forms/Input';
import Button from '../Forms/Button';
import Error from '../Helper/Error';
import Head from '../Helper/Head';
import styles from '../../styles/modules/User/UserPhotoPost.module.css';

const UserPhotoPost = () => {
  const nome = useForm();
  const peso = useForm('number');
  const idade = useForm('number');
  const [img, setImg] = React.useState({});
  const { data, error, loading } = useSelector((state) => state.photoPost);
  const { token } = useSelector((state) => state.token.data);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const photoPost = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('img', img.raw);
    formData.append('nome', nome.value);
    formData.append('peso', peso.value);
    formData.append('idade', idade.value);

    dispatch(fetchPhotoPost({ formData, token }));
  };

  const imgChange = ({ target }) => {
    setImg({
      // raw === img that will be sent to the API
      preview: URL.createObjectURL(target.files[0]),
      raw: target.files[0],
    });
  };

  React.useEffect(() => {
    if (data) navigate('/conta');
  }, [data, navigate]);

  return (
    <section className={`${styles.photo_post} animeLeft`}>
      <form onSubmit={photoPost}>
        <Head title="Poste sua foto" />

        <Input label="Nome" type="text" name="nome" {...nome} />
        <Input label="Peso" type="number" name="peso" {...peso} />
        <Input label="Idade" type="number" name="idade" {...idade} />
        <input
          className={styles.file}
          type="file"
          name="img"
          id="img"
          onChange={imgChange}
        />
        {loading ? (
          <Button disabled>Enviando...</Button>
        ) : (
          <Button>Enviar</Button>
        )}
        <Error error={error} />
      </form>
      <div>
        {img.preview && (
          <div
            className={styles.preview}
            style={{ backgroundImage: `url('${img.preview}')` }}
          />
        )}
      </div>
    </section>
  );
};

export default UserPhotoPost;

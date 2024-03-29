import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import UserHeader from '../Components/User/UserHeader';
import UserPhotoPost from '../Components/User/UserPhotoPost';
import UserStats from '../Components/User/UserStats';
import Feed from '../Components/Feed/Feed';
import NotFound from './NotFound';
import Head from '../Components/Helper/Head';

const User = () => {
  const { data } = useSelector((state) => state.user);

  return (
    <section className="container">
      <UserHeader />
      <Head title="Minha conta" />
      <Routes>
        <Route path="/" element={<Feed user={data.id} />} />
        <Route path="post" element={<UserPhotoPost />} />
        <Route path="estatisticas" element={<UserStats />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </section>
  );
};

export default User;

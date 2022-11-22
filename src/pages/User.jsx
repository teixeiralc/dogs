import React from 'react';
import { Route, Routes } from 'react-router-dom';
import UserHeader from '../Components/User/UserHeader';
import UserPhotoPost from '../Components/User/UserPhotoPost';
import UserStats from '../Components/User/UserStats';
import Feed from '../Components/Feed/Feed';

const User = () => {
  return (
    <section className="container">
      <UserHeader />
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="post" element={<UserPhotoPost />} />
        <Route path="estatisticas" element={<UserStats />} />
      </Routes>
    </section>
  );
};

export default User;

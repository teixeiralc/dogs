import React from 'react';
import { Route, Routes } from 'react-router-dom';
import UserHeader from '../Components/User/UserHeader';
import UserPhotoPost from '../Components/User/UserPhotoPost';
import UserStats from '../Components/User/UserStats';
import Feed from '../Components/Feed/Feed';
import { UserContext } from '../UserContext';

const User = () => {
  const { data } = React.useContext(UserContext);

  return (
    <section className="container">
      <UserHeader />
      <Routes>
        <Route path="/" element={<Feed user={data.id} />} />
        <Route path="post" element={<UserPhotoPost />} />
        <Route path="estatisticas" element={<UserStats />} />
      </Routes>
    </section>
  );
};

export default User;

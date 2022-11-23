import React from 'react';
import Feed from '../Components/Feed/Feed';
import Head from '../Components/Helper/Head';

const Home = () => {
  return (
    <section className="container main_container">
      <Head
        title="Fotos"
        description="Home do site Dogs, com o feed de fotos."
      />
      <Feed />
    </section>
  );
};

export default Home;

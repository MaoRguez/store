import React from 'react';
import { Helmet } from 'react-helmet';
import Products from '../components/Products';
import initialState from '../initialState';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Store -Productos</title>
        <meta name="twitter:card" content="summary_large_image"/>
        <meta name="twitter:site" content="@MaoRguez"/>
        <meta name="twitter:creator" content="@MaoRguez"/>
        <meta name="twitter:title" content="Store"/>
        <meta name="twitter:description" content="Store"/>
        <meta
          name="twitter:image"
          content="https://s3.amazonaws.com/gndx.dev/gndxdev.png"
        />
        <meta property="og:title" content="Store"/>
        <meta property="og:description" content="Store"/>
        <meta
          property="og:image"
          content="https://s3.amazonaws.com/gndx.dev/gndxdev.png"
        />
        <meta property="og:url" content="maorguez.com" />
        <meta property="og:site_name" content="Store" />
        <meta property="og:locale" content="es_ES" />
        <meta property="og:type" content="article" />
        <meta property="fb:app_id" content="ID_APP_FACEBOOK" />
      </Helmet>
      <Products products={initialState.products} />
    </>
  );
};

export default Home;

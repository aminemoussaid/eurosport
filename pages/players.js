import React from 'react'
import Head from 'next/head';

import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

import 'bootstrap/dist/css/bootstrap.min.css';

import Nav from '../components/nav';


const Card = () => (
  <div>
    <Head>
      <title>Home</title>
    </Head>

    <Nav />


    <style jsx global>{`
    .home-container {
          background-image: url('/static/img/background.jpg');
          background-position: center;
          background-size: cover;
          height: 100vh;
          padding-top: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
  `}</style>
  </div>
)

export default Card;
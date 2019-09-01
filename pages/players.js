import React from 'react'
import Head from 'next/head';

import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

import 'bootstrap/dist/css/bootstrap.min.css';

import Nav from '../components/nav';


const Card = () => (
  <div>
    <Head>
      <title>Players Stats</title>
    </Head>

    <Nav />


    <style jsx global>{`
    body {
          height: 100%;
          background-color: #0f2936;
          min-height: 100vh;
        }
  `}</style>
  </div>
)

export default Card;
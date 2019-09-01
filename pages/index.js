import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Nav from '../components/nav'


import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => (
  <div>
    <Head>
      <title>Home</title>
    </Head>

    <Nav />
    <Container className={"home-container"} fluid={true}>
      <Link href="/players">
        <Button variant="outline-light" style={{ fontWeight: 500, height: 'max-content' }}>Check Player Stats</Button>
      </Link>
    </Container>


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

export default Home

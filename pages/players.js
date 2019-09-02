import React from 'react'
import Head from 'next/head';
import { serverFetch } from '../store'
import { connect } from 'react-redux'
import axios from 'axios';

import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';



import 'bootstrap/dist/css/bootstrap.min.css';

import Nav from '../components/nav';
import PlayerCard from '../components/card';


class Card extends React.Component {
  static async getInitialProps({ store, isServer }) {
    if (isServer) {
      await axios.get('https://eurosportdigital.github.io/eurosport-web-developer-recruitment/headtohead.json').then((res) => {
        store.dispatch(serverFetch(res.data.players))
      });

      return { isServer }
    }
    return { isServer }
  }

  render() {
    const players = this.props.players
    return (
      <div>
        <Head>
          <title>Players Stats</title>
        </Head>

        <Nav />
        <Container className={"players-container"}>
          {players &&
            players.map((player, key) => (
              <PlayerCard key={key} player={player} />
            ))
          }
        </Container>

        <style jsx global>{`
          body {
            height: 100%;
            background-color: #0f2936;
            min-height: 100vh;
          }

          .players-container {
          /*background-color: #FFFFFF0F; */
          padding-top: 25vh;
          color: white;
          padding-bottom: 20px;
        }
        `}
        </style>
      </div>
    )
  }
}

const mapStateToProps = store => ({
  players: store.players
})

export default connect(
  mapStateToProps,
  null
)(Card)
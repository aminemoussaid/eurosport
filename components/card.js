import React from 'react'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import 'bootstrap/dist/css/bootstrap.min.css';

const Card = ({ player }) => {
  let { firstname, lastname, sex, country, picture, data } = player
  let wins = data.last.reduce((a, b) => a + b)
  let losses = data.last.length - wins
  return (
    <div>
      <Col className={"content-wrapper"}>
        <Row>
          <Col xs={4} className={"item d-flex justify-content-center p-2"}>
            <img src={player.picture} />
          </Col>
          <Col xs={8} className={"item"}>
            <Row className={"mt-2"}>
              <Col>
                <h4 id="name">{firstname} {lastname}</h4>
              </Col>
              <Col className={"d-flex justify-content-end"}>
                <img src={country.picture} style={{ height: "40px" }} />
              </Col>
            </Row>
            <Row>
              <Col className={"ml-3"}>
                <Row>
                  Rank: {data.rank}
                </Row>
                <Row>
                  Points: {data.points}
                </Row>
                <Row>
                  Age: {data.age}
                </Row>
              </Col>
              <Col>
                <Row>
                  Weight: {data.weight / 1000} Kg
                </Row>
                <Row>
                  Height: {data.height} cm
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row>
          <Col xs={6} className={"item mt-3"}>

            <Row className={"d-flex justify-content-center"}>

              <h4>WINS - LOSSES</h4>
            </Row>

            <Row className={"d-flex justify-content-center"}>
              <h4>{wins} - {losses}</h4>

            </Row>
          </Col>
          <Col xs={6} className={"item mt-3"}>
            <h4>Last Matches :</h4>
            <h6>{data.last.map((match) => {
              return match === 1 ? 'WIN ' : 'LOSS '
            })}</h6>
          </Col>
        </Row>
      </Col>







      <style jsx global>{`

        .content-wrapper {
          margin-bottom: 80px;
        }

        .item {
          border: 1px solid rgba(255,255,255,1);
        }
      `}</style>

    </div>
  )
}

export default Card;
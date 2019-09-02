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
              <Col xs={12} sm={6}>
                <Row className={"pl-3"}>
                  Rank: {data.rank}
                </Row>
                <Row className={"pl-3"}>
                  Points: {data.points}
                </Row>
                <Row className={"pl-3"}>
                  Age: {data.age}
                </Row>
              </Col>
              <Col xs={12} sm={6}>
                <Row className={"pl-3"}>
                  Weight: {data.weight / 1000} Kg
                </Row>
                <Row className={"pl-3"}>
                  Height: {data.height} cm
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row>
          <Col xs={12} sm={6} className={"item mt-3"}>

            <Row className={"d-flex justify-content-center"}>

              <h4>WINS - LOSSES</h4>
            </Row>

            <Row className={"d-flex justify-content-center"}>
              <h4>{wins} - {losses}</h4>

            </Row>
          </Col>
          <Col xs={12} sm={6} className={"item mt-3"}>
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
          border: 1px solid rgba(255,255,255,0.06);
          background-color: rgba(255,255,255,0.06);
        }
      `}</style>

    </div>
  )
}

export default Card;
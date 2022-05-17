import React from "react";
import { Card } from "react-bootstrap";
import img from "./banner.png"

function CardPresent() {
  return (
    <>
      <Card>
        <Card.Img
          className="img-fluid"
          src={img}
          alt="Card image"
        />
      </Card>
    </>
  );
}

export default CardPresent;

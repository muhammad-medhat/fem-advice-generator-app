/**
 * mobile first approach
 * ...
 */
import React, { useEffect, useState } from "react";
import divider from "./images/pattern-divider-desktop.svg";
import dice from "./images/icon-dice.svg";
import { Button, Card, Container } from "react-bootstrap";
export const Advices = () => {
  const [advice, setAdvice] = useState();
  const [adviceId, setAdviceId] = useState();

  const getAdvice = () => {
    fetch(`https://api.adviceslip.com/advice`)
      .then((dt) => dt.json())
      .then((d) => {
        console.log("d", d);
        setAdvice(d.slip.advice);
        setAdviceId(d.slip.id);
      });
  };
  const x = "aaa";
  useEffect(() => {
    getAdvice();
  }, []);

  return (
    <Container
      fluid
      className="d-flex align-items-center justify-content-center "
      style={
        {
          // display: "flex",
          // alignContent: "center",
          // justifyContent: "center",
          // opacity: 0.4,
          // minHeight: "100%",
          // backgroundColor: "black",
        }
      }
    >
      <Card className="advice-card text-center">
        <Card.Body className="d-flex flex-column align-items-center justify-content-center">
          <Card.Title>
            <h1 className="advice-id">Advice #{adviceId ? adviceId : "xxx"}</h1>
          </Card.Title>
          <Card.Text className="advice-text">
            <span>&#8220;</span>
            {advice ? advice : "Error..."} <span>&rdquo;</span>
          </Card.Text>
          <Card.Img
            src={divider}
            className="advice-divider"
          ></Card.Img>

          <div
            className="dice"
            style={{
              height: "80px",
              width: "80px",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "-4em",
            }}
          >
            <Button
              variant="primary"
              className="dice-img"
              onClick={getAdvice}
              aria-label="Get new advice"
              style={{
                backgroundImage: `url( ${dice})`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                height: "35px",
                width: "35px",
              }}
            ></Button>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
};

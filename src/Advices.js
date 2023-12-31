import React, { useEffect, useState } from "react";
import divider from "./images/pattern-divider-desktop.svg";
import dice from "./images/icon-dice.svg";
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

  useEffect(() => {
    getAdvice();
  }, []);

  return (
    <div className="advice-card">
      <header>
        <h1 className="advice-id">Advice #{adviceId ? adviceId : "xxx"}</h1>
      </header>
      <p className="advice-text">
        <span>&#8220;</span>
        {advice ? advice : "Error..."} <span>&rdquo;</span>
      </p>
      <div
        className="advice-divider"
        style={{
          backgroundImage: `url( ${divider})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          height: "30px",
          width: "100%",
        }}
      ></div>

      <div
        className="bottom"
        style={{ position: "relative", minWidth: "100%" }}
      >
        <div
          className="dice"
          style={{
            position: "absolute",
            left: "45%",
            top: "24px",
            height: "50px",
            width: "50px",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <button
            className="dice-img"
            onClick={getAdvice}
            aria-label="Get new advice"
            style={{
              backgroundImage: `url( ${dice})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              height: "24px",
              width: "24px",
            }}
          ></button>
        </div>
      </div>
    </div>
  );
};

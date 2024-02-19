import React from "react";
import { usePlayer } from "@empirica/core/player/classic/react";
import { Button } from "../components/Button";
import './Style.css';

export function Intro() {
  const player = usePlayer();

  const handleContinue = () => {
    player.stage.set("submit", true);
  };

  return (
    <div className="container">
      <div className="content-container">
        
   
        <p>On the next page, you will see five images, each showing candies in a container. </p>
        <br />
        <p>Please enter your estimate of how many candies are in the container for each image in the box provided below that image.</p>
        <br />
        <p>Remember, the more accurate your answers, the more money you will win!</p>
      </div>
      <div className="button-container">
        <Button handleClick={handleContinue}>Continue</Button>
      </div>
      <style jsx>{`
        .container {
          padding-top: 20px;
        }

        .content-container {
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
          text-align: left; 
          margin-top: 20px;
        }

        .content-container p {
          margin-bottom: 20px;
        }

        .button-container {
          text-align: center;
          margin-top: 20px;
        }
      `}</style>
    </div>
  );
}

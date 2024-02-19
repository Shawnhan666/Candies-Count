import React from "react";
import { usePlayer } from "@empirica/core/player/classic/react";
import { Button } from "../components/Button";
import './Style.css';

export function Result() {
  const player = usePlayer();

  const handleContinue = () => {
    player.stage.set("submit", true);
  };

  return (
    <div className="container">
      <div className="content-container">
        
   
        <p>Thanks for your participation!</p>
        <br />
        <p>We look forward to seeing you again in our future studies!</p>
        <br />
    
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

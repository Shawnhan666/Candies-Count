import {
 
  usePlayer,
 
} from "@empirica/core/player/classic/react";
import React, { useState } from "react";
import { Button } from "../components/Button";
import ladderImage from './candy.png';


export function CandyCount() {
  const player = usePlayer();
  const [estimates, setEstimates] = useState(Array(5).fill(""));


  const handleInputChange = (index, value) => {
    // 使用正则表达式确保值只包含数字
    if (/^\d*$/.test(value)) {
      const newEstimates = [...estimates];
      newEstimates[index] = value;
      setEstimates(newEstimates);
    }
  };
  
    // 添加用于按钮对齐的样式
    const buttonContainerStyle = {
      textAlign: 'right', // 使按钮靠右对齐
    };


  const handleSubmit = () => {
    const validEstimates = estimates.every(estimate => estimate !== "" && !isNaN(estimate) && Number(estimate) >= 0);

    if (!validEstimates) {
      alert("All estimates must be numbers greater than or equal to 0.");
      return;
    }

    player.round.set("estimates", estimates.map(Number));
    player.stage.set("submit", true);
  };
  const imagesRowStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap', // 允许内容换行，以适应不同屏幕大小
    marginBottom: '20px',
  };

  const itemStyle = {
    display: 'flex',
    flexDirection: 'column', // 使图片和输入框垂直排列
    alignItems: 'center', // 居中对齐图片和输入框
    margin: '0 10px', // 增加输入框之间的空间
  };

  const inputStyle = {
    display: 'block',
    margin: '10px auto',
    textAlign: 'center',
  };


  return (
    <div >
    <h2>For each image below, please estimate the number of candies in the container.</h2>
    <br />
    <div style={imagesRowStyle}>
      {estimates.map((estimate, index) => (
        <div key={index} style={itemStyle}>
          <img src={ladderImage} alt="Candy Jar" style={{ width: '250px', height: '250px' }} />
          <input
            type="number"
            value={estimate}
            onChange={(e) => handleInputChange(index, e.target.value)}
            placeholder="Estimate"
            style={inputStyle}
            min="0"
          />
        </div>
      ))}
    </div>

  
      <div style={buttonContainerStyle}>
        <Button handleClick={handleSubmit}>Submit Estimates & Continue</Button>
      </div>
  </div>
  );
}
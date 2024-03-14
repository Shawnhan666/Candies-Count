import React, { useState } from "react";
import { usePlayer, useGame } from "@empirica/core/player/classic/react";
import { Button } from "../components/Button";
import ladderImage from './candy.png';

export function Choice() {
  const game = useGame(); // 使用 useGame 钩子获取游戏上下文
  const player = usePlayer();
  const estimates = player.round.get("estimates"); // 从上一个组件获取猜测的糖果数

  const [selected, setSelected] = useState(null); // 用于跟踪选中的图片

  const handleSelect = (index) => {
    setSelected(index); // 设置选中的图片索引
    // 可以在这里添加更多的处理逻辑，例如设置玩家的选择等
  };

  const handleSubmit = () => {
    if (selected === null) {
      alert("Please make a selection before submitting.");
      return;
    }


    player.set("selected", selected);

    player.stage.set("submit", true);
  };

  // 从游戏的 treatment 中获取指令文本
  const treatment = game.get("treatment");
 
  const {instructionText2} = treatment;
  const {submitButtonLabel2} = treatment;
  const {instructionPage} = treatment;
  


  const imagesRowStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap', // 允许内容换行，以适应不同屏幕大小
    marginBottom: '20px',
  };

  const itemStyle = {
    display: 'flex',
    flexDirection: 'column', // 使图片和猜测文本垂直排列
    alignItems: 'center', // 居中对齐图片和猜测文本
    margin: '0 10px', // 增加猜测文本之间的空间
  };

  const checkboxStyle = {
    width: '20px', // 复选框大小
    height: '20px', // 复选框大小
    borderRadius: '50%', // 圆形
    border: '2px solid #4CAF50', // 边框样式
    cursor: 'pointer', // 鼠标指针样式
  };

  // 添加用于按钮对齐的样式
  const buttonContainerStyle = {
    textAlign: 'right', // 使按钮靠右对齐
  };





  return (
    <div>
      {/* {instructionPage}  */}
      {instructionText2}
<br />
      {/* <h2>Please determine which container has the largest number of candies. Please indicate your decision by clicking the button below the image.</h2>
      <br /> */}
      <br />
      <div style={imagesRowStyle}>
        {estimates.map((estimate, index) => (
          <div key={index} style={itemStyle}>
            <img src={ladderImage} alt="Candy Jar" style={{ width: '250px', height: '250px' }} />
            <p>Your guess: {estimate}</p>
            <input
              type="checkbox"
              checked={selected === index}
              onChange={() => handleSelect(index)}
              style={checkboxStyle}
            />
          </div>
        ))}
      </div>
      <div style={buttonContainerStyle}>
        <Button handleClick={handleSubmit}>{submitButtonLabel2}</Button>
      </div>
    </div>
  );
}

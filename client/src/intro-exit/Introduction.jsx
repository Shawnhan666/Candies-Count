import React, { useState } from "react";
import { Button } from "../components/Button";
import { usePlayer, useGame } from "@empirica/core/player/classic/react";


export function Introduction({ next }) {
  // 从游戏的 treatment 中获取指令文本
  const game = useGame(); // 使用 useGame 钩子获取游戏上下文
  const player = usePlayer();
  const treatment = game.get("treatment");
  const {instructionPage1} = treatment;
  const {instructionPage2} = treatment;
  const {instructionPage3} = treatment;
  
  return (
 


    <div className="mt-3 sm:mt-5 p-20">
      <h3 className="text-lg leading-6 font-medium text-gray-900">
        Instruction  
      </h3>
      <div className="mt-2 mb-6">
        <p className="text-sm text-gray-500">

        <p>{instructionPage1} </p>
        <br />
        <p>{instructionPage2}</p>
        <br />
        <p>{instructionPage3}</p>
   
        </p>
      </div>
      <Button handleClick={next} autoFocus>
        <p>Next</p>
      </Button>
    </div>
  );
}


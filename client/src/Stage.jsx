import {
  usePlayer,
  usePlayers,
  useRound,
  useStage,
} from "@empirica/core/player/classic/react";
import { Loading } from "@empirica/core/player/react";
import React from "react";

import { CandyCount } from "./examples/CandyCount";
import { Result } from "./examples/Result";
import { Choice } from "./examples/Choice";

export function Stage() {
  const player = usePlayer();
  const players = usePlayers();
  const round = useRound();
  const stage = useStage();

  if (player.stage.get("submit")) {
    if (players.length === 1) {
      return <Loading />;
    }

    return (
      <div className="text-center text-gray-400 pointer-events-none">
        Please wait for other player(s).
      </div>
    );
  }

  switch (stage.get("name")) {

    case "CandyCount":
      return <CandyCount />;
    case "Choice":
        return <Choice />;
    case "Result":
        return <Result />;

  


    default:

      return <Loading />;

  }
}

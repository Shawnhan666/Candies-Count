import { ClassicListenersCollector } from "@empirica/core/admin/classic";
export const Empirica = new ClassicListenersCollector();

Empirica.onGameStart(({ game }) => {
  const round = game.addRound({
    name: "Candies estimation",
    task: "jellybeans",
  });
  //round.addStage({ name: "Introduction", duration: 3000 });
  round.addStage({ name: "CandyCount", duration: 3000 });
  round.addStage({ name: "Choice", duration: 1200 });
  round.addStage({ name: "Result", duration: 1200 });

});

Empirica.onRoundStart(({ round }) => {});

Empirica.onStageStart(({ stage }) => {});

Empirica.onStageEnded(({ stage }) => {
//  calculateJellyBeansScore(stage);
});

Empirica.onRoundEnded(({ round }) => {});

Empirica.onGameEnded(({ game }) => {});


//const jellyBeansCount = 634;
// function calculateJellyBeansScore(stage) {
//   if (
//     stage.get("name") !== "Answer" ||
//     stage.round.get("task") !== "jellybeans"
//   ) {
//     return;
//   }

//   for (const player of stage.currentGame.players) {
//     let roundScore = 0;

//     const playerGuess = player.round.get("guess");

//     if (playerGuess) {
//       const deviation = Math.abs(playerGuess - jellyBeansCount);
//       const score = Math.round((1 - deviation / jellyBeansCount) * 10);
//       roundScore = Math.max(0, score);
//     }

//     player.round.set("score", roundScore);

//     const totalScore = player.get("score") || 0;
//     player.set("score", totalScore + roundScore);
//   }
// }

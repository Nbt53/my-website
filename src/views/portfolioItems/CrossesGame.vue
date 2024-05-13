<template>
  <div>
    <div class="crosses">
      <div class="crosses__header">
        <h3>Noughts and Crosses</h3>
        <ScoreBoard :score="game.score" :players="game.players" />
        <div class="crosses__controls">
          <button class="button__portfolio" @click="reset">
            Start new game
          </button>
        </div>
      </div>
      <div class="crosses__board">
        <GameBoard
          :board="game.board"
          :player="game.player"
          @updateBoard="updateBoard"
          @changePlayer="playerTurn"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ScoreBoard from "@/components/crosses/ScoreBoard.vue";
import GameBoard from "@/components/crosses/GameBoard.vue";
import { ref } from "vue";

export default {
  components: {
    ScoreBoard,
    GameBoard,
  },
  setup() {
    /////////// variables ///////////
    const game = ref({
      gameStarted: false,
      player: "x",
      players: ["player 1", "player 2"],
      score: [0, 0],
      turn: 0,
      board: [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""],
      ],
    });
    const x = ref([]);
    const o = ref([]);
    const wins = ref([
      ["00", "01", "02"],
      ["10", "11", "12"],
      ["20", "21", "22"],
      ["00", "10", "20"],
      ["01", "11", "21"],
      ["02", "12", "22"],
      ["00", "11", "22"],
      ["02", "11", "20"],
    ]);

    /////////// functions ///////////
    const reset = () => {
      game.value.board = [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""],
      ];
      game.value.turn = 0;
      x.value = [];
      o.value = [];
      game.value.player = "x";
    };

    const updateBoard = ({ row, col, player }) => {
      game.value.board[row][col] = player;
    };

    const checkWin = (player) => {
      let won = false;
      let draw = false;
      wins.value.forEach((winArray) => {
        let matches = 0;
        winArray.forEach((win) => {
          if (player.value.includes(win)) {
            matches++;
          }
        });
        if (matches === 3) {
          won = true;
        }
      });
      if (!won && game.value.turn === 9) {
        draw = true;
      }
      console.log(player.value);
      if (won) {
        alert("winner!");
        game.value.player === "x"
          ? game.value.score[0]++
          : game.value.score[1]++;
      }
      if (draw) {
        alert("draw!");
      }
      if (won || draw) {
        reset();
      }
    };
    const playerTurn = (squareId) => {
      game.value.turn++;
      game.value.player === "x"
        ? x.value.push(squareId)
        : o.value.push(squareId);
      game.value.player === "x" ? checkWin(x) : checkWin(o);

      game.value.player = game.value.player === "x" ? "o" : "x";
    };
    return { game, playerTurn, reset, updateBoard };
  },
};
</script>

<style>
</style>
<template>
  <div
    class="crosses__board-row"
    v-for="(squares, squaresIndex) in board"
    :key="'row-' + squaresIndex"
  >
    <div
      class="crosses__board-square"
      v-for="(square, squareIndex) in squares"
      :id="`${squareIndex}${squaresIndex}`"
      :key="`${squareIndex}${squaresIndex}`"
      @click="handleClick"
    >
      <p class="crosses__board-char">{{ square }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: { board: Array, player: String },
  emits: ["changePlayer", "updateBoard"],
  setup(props, { emit }) {

    const handleClick = (e) => {
      const col = e.target.id[0];
      const row = e.target.id[1];
      const square = props.board[row][col];
      const squareId = `${col}${row}`;
      if (square === "") {
        // Emit an event to update the board
        emit("updateBoard", { row, col, player: props.player });
        emit("changePlayer", squareId);
      }
    };
    return { handleClick };
  },
};
</script>
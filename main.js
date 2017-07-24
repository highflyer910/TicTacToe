var app = new Vue({
  el: "#app",
  data: {
    isX: true,
    winner: " ",
    finished: false,
    board: [
      [
        " ", " ", " "
      ],
      [
        " ", " ", " "
      ],
      [
        " ", " ", " "
      ]
    ]
  },
  methods: {
    changeBrick: function (rowKey, key) {
      if (this.board[rowKey][key] === " " && !this.finished) {
        if (this.isX) {
          this.board[rowKey][key] = "X";
        } else {
          this.board[rowKey][key] = "O";
        }
        this.isX = !this.isX;
        this.$forceUpdate();
      }
    },
    resetGame: function () {
      this.board = [[" ", " ", " "],[" ", " ", " "],[" ", " ", " "]];
      this.isX = true;
      this.winner = " ";
      this.finished = false;
    },
    checkWin: function (rowKey, key) {
      let board = this.board;
      //Check row victory
      let row = board[rowKey];
      if (row[0] === row[1] && row[1] === row[2]) {
        this.winner = row[0];
      } else
      //Check column victory
      if (board[0][key] === board[1][key] && board[1][key] === board[2][key]){
        this.winner = board[0][key];
      } else
      //Check diagonal
      if (board[0][0] === board[1][1] && board[1][1] === board[2][2]){
        this.winner = board[0][0];
      }else if (board[2][0] === board[1][1] && board[1][1] === board[0][2]) {
        this.winner = board[2][0];
      }

      if(this.winner !== " ") {
        this.finished = true;
      }
    }
  }
});

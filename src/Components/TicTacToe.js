import React from 'react';

class TicTacToe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      board: Array(9).fill(null),
      currentPlayer: 'X',
      winner: null,
    };
  }

  handleClick(index) {
    const { board, currentPlayer, winner } = this.state;
    if (board[index] === null && !winner) {
      const newBoard = [...board];
      newBoard[index] = currentPlayer;
      const newPlayer = currentPlayer === 'X' ? 'O' : 'X';
      const newWinner = this.checkWinner(newBoard);
      this.setState({ board: newBoard, currentPlayer: newPlayer, winner: newWinner });
    }
  }

  checkWinner(board) {
    const winConditions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let condition of winConditions) {
      const [a, b, c] = condition;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }

    return null;
  }

  resetGame() {
    this.setState({
      board: Array(9).fill(null),
      currentPlayer: 'X',
      winner: null,
    });
  }

  render() {
    const { board, currentPlayer, winner } = this.state;

    const cells = board.map((value, index) => (
      <div key={index} className="cell" onClick={() => this.handleClick(index)}>
        {value}
      </div>
    ));

    let status;
    if (winner) {
      status = `Player ${winner} wins!`;
    } else if (board.every((cell) => cell !== null)) {
      status = "It's a draw!";
    } else {
      status = `Player ${currentPlayer}'s turn`;
    }

    return (
      <>
      <h1> Question 14 - Tic Tac Toe Game using Class Component of React </h1>
      <div className="game-container">
      <div className="game">
        <div className="board">{cells}</div>
        <div className="status">{status}</div>
        <button className="reset" onClick={() => this.resetGame()}>
          Reset
        </button>
      </div>
      </div>
      </>
     
    );
  }
}

export default TicTacToe;
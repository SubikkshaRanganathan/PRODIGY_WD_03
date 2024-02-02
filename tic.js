let currentPlayer = 'X';
let board = ['', '', '', '', '', '', '', '', ''];
let singlePlayerMode = false;

function startTwoPlayer() {
    document.getElementById('twoPlayerButton').classList.add('highlight');
    singlePlayerMode = false;
    resetBoard();
}

function startSinglePlayer() {
    document.getElementById('singlePlayerButton').classList.add('highlight');
    singlePlayerMode = true;
    resetBoard();
}
function resetB() {
    document.getElementById('twoPlayerButton').classList.remove('highlight');
    document.getElementById('singlePlayerButton').classList.remove('highlight');
}
function makeMove(cellIndex) {
    if (!board[cellIndex]) {
        document.getElementsByClassName('cell')[cellIndex].innerText = currentPlayer;
        board[cellIndex] = currentPlayer;
        if (checkWinner()) {
            alert(currentPlayer + ' wins!');
            resetBoard();
        } else if (board.every(cell => cell !== '')) {
            alert('It\'s a draw!');
            resetBoard();
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            if (singlePlayerMode && currentPlayer === 'O') {
                // Computer's move
                makeComputerMove();
            }
        }
    }
}

function checkWinner() {
    const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (let combination of winningCombinations) {
        const [a, b, c] = combination;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            return true;
        }
    }
    return false;
}

function makeComputerMove() {
    // Simple random move for demonstration purposes
    let emptyCells = [];
    for (let i = 0; i < 9; i++) {
        if (!board[i]) {
            emptyCells.push(i);
        }
    }
    const randomIndex = Math.floor(Math.random() * emptyCells.length);
    const computerMove = emptyCells[randomIndex];
    setTimeout(() => {
        makeMove(computerMove);
    }, 500); // Delay computer move for better user experience
}

function resetBoard() {
    board = ['', '', '', '', '', '', '', '', ''];
    currentPlayer = 'X';
    const cells = document.getElementsByClassName('cell');
    for (let cell of cells) {
        cell.innerText = '';
    }

}


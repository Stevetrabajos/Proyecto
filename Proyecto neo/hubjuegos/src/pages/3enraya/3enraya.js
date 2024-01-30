// tresenraya.js

const boardElement = document.getElementById('board');
let currentPlayer = 'X';
let board = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;

const checkWinner = () => {
    const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6]             // Diagonals
    ];

    for (const pattern of winPatterns) {
        const [a, b, c] = pattern;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            return board[a];
        }
    }

    return null;
};

const checkDraw = () => board.every(cell => cell !== '');

const handleCellClick = index => {
    if (!gameActive || board[index] !== '') {
        return;
    }

    board[index] = currentPlayer;
    renderBoard();

    const winner = checkWinner();
    if (winner) {
        alert(`¡El jugador ${winner} ha ganado!`);
        gameActive = false;
        return;
    }

    if (checkDraw()) {
        alert('¡Es un empate!');
        gameActive = false;
        return;
    }

    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
};

const renderBoard = () => {
    boardElement.innerHTML = '';
    board.forEach((value, index) => {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.textContent = value;
        cell.addEventListener('click', () => handleCellClick(index));
        boardElement.appendChild(cell);
    });
};

renderBoard();

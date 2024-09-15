const chessboard = document.getElementById('chessboard')
// Chess pieces using Unicode characters
const pieces = {
    white: {
        king: '♔',
        queen: '♕',
        rook: '♖',
        bishop: '♗',
        knight: '♘',
        pawn: '♙'
    },
    black: {
        king: '♚',
        queen: '♛',
        rook: '♜',
        bishop: '♝',
        knight: '♞',
        pawn: '♟'
    }
};
// Initial chessboard setup (simplified)
const initialBoard = [
    ['♜', '♞', '♝', '♛', '♚', '♝', '♞', '♜'],
    ['♟', '♟', '♟', '♟', '♟', '♟', '♟', '♟'],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['♙', '♙', '♙', '♙', '♙', '♙', '♙', '♙'],
    ['♖', '♘', '♗', '♕', '♔', '♗', '♘', '♖']
];
// Generate chessboard
for (let row = 0; row < 8; row++) {
    for (let col = 0; col < 8; col++) {
        const square = document.createElement('div');
        square.classList.add((row + col) % 2 === 0 ? 'white' : 'black');
        square.dataset.row = row;
        square.dataset.col = col;

        const piece = initialBoard[row][col];
        if (piece) {
            square.textContent = piece;
        }

        square.addEventListener('click', onSquareClick);
        chessboard.appendChild(square);
    }
}
// Handle clicking on squares
let selectedSquare = null;

function onSquareClick(e) {
    const square = e.target;

    if (selectedSquare) {
        // Move piece to the clicked square
        square.textContent = selectedSquare.textContent;
        selectedSquare.textContent = '';
        selectedSquare = null;
    } else if (square.textContent) {
        // Select piece to move
        selectedSquare = square;
    }
}
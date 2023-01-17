let board;

/*
board = [
    [0,0,0],
    [0,0,0],
    [0,0,0]
]
*/
function createBoard(numFilas, numColumnas) {
    const rows = []

    for (let i = 0; i < numFilas; i++) {
        const casillas = []

        for (let j = 0; j < numColumnas; j++) {
            casillas.push(0)
        }
        rows.push(casillas)
    }
    return rows
}

function printBoard(board) {
    for (let fila of board) {
        for (let casilla of fila) {
            console.log(casilla)
        }
    }
}

function main() {
    board = createBoard(4, 4)
    printBoard(board)
}

main()
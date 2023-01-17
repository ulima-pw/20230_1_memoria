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
            const dataCasilla = {
                simbolo : "💗",
                visible : false
            }
            casillas.push(dataCasilla)
        }
        rows.push(casillas)
    }
    return rows
}

function printBoard(board) {
    let filaStr = ""
    for (let fila of board) {
        for (let casilla of fila) {
            if (casilla.visible == true) {
                filaStr = filaStr + casilla.simbolo + " "
            }else {
                filaStr = filaStr + "-" + " "
            }
            
        }
        filaStr += "\n" 
    }
    console.log(filaStr)
}

function main() {
    board = createBoard(4, 4)
    printBoard(board)
}

main()
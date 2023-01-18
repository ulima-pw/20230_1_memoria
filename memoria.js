let board;
let simbolosDisponibles = ["🍭", "🍫", "🍬", "🍩", "🍦", "🍰", "🍯", "🍧"]

/*
board = [
    [0,0,0],
    [0,0,0],
    [0,0,0]
]
*/
function createBoard(numFilas, numColumnas) {
    const numElementosArregloTemporal = (numFilas * numColumnas / 2)
    const arrSimbolosTemporal = []
    for (let i = 0; i < numElementosArregloTemporal; i++){
        arrSimbolosTemporal.push(simbolosDisponibles[i])
        arrSimbolosTemporal.push(simbolosDisponibles[i])
    }

    const rows = []

    for (let i = 0; i < numFilas; i++) {
        const casillas = []

        for (let j = 0; j < numColumnas; j++) {
            const posicionAlAzar = Math.floor(
                Math.random()*arrSimbolosTemporal.length
            )

            const simboloElegido = arrSimbolosTemporal[posicionAlAzar]
            arrSimbolosTemporal.splice(posicionAlAzar, 1)

            const dataCasilla = {
                simbolo : simboloElegido,
                visible : true
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
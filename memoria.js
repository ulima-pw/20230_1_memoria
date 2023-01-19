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

function butOnClick(evt) {
    const butClickeado = evt.target
    const fila = butClickeado.getAttribute("fila")
    const columna = butClickeado.getAttribute("columna")

    const casilla = board[fila][columna]
    casilla.visible = !casilla.visible

    renderizarBoard(board)
}

function crearDivFila() {
    const divFila = document.createElement("div")
    divFila.setAttribute("class", "row")

    return divFila
}

function crearDivColumna(fil, col, simbolo, visible) {
    const divColumna = document.createElement("div")
    divColumna.setAttribute("class", "col")

    const divBut = document.createElement("button")
    divBut.setAttribute("type", "button")
    divBut.setAttribute("class", "btn btn-success")
    divBut.setAttribute("style", "font-size: 40px;")
    divBut.setAttribute("fila", fil)
    divBut.setAttribute("columna", col)
    if (visible) {
        divBut.innerText = simbolo
    }else {
        divBut.innerText = ""
    }

    divBut.onclick = butOnClick; // asignamos funcion que se ejecutar dado click
    
    divColumna.appendChild(divBut)

    return divColumna
}

function renderizarBoard(board) {
    const divBoard = document.getElementById("board")
    divBoard.innerHTML = ""

    for (let i = 0; i < board.length; i++) {
        const fila = board[i]
        const divFila = crearDivFila()
        for (let j = 0; j < fila.length; j++) {
            const casilla = fila[j]
            const divColumna = crearDivColumna(i, j, casilla.simbolo, casilla.visible)
            divFila.appendChild(divColumna)
        }
        divBoard.appendChild(divFila)
    }
}

function main() {
    board = createBoard(3, 3)
    printBoard(board)
    renderizarBoard(board)
}

main()
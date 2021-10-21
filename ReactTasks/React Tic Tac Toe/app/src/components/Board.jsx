import { useState, useEffect } from "react"
import Square from "./Squere"

const Board = () => {
    const [playerTurn, setPlayerTurn] = useState('x')
    const [multiArray, setMultiArray] = useState(
        [
            ['', '', ''],
            ['', '', ''],
            ['', '', '']
        ]
    )

    const onClickEvent = (coo) => {
        const x = coo.split(" ")[0]
        const y = coo.split(" ")[1]

        if (multiArray[parseInt(x)][parseInt(y)] !== 'x' && multiArray[parseInt(x)][parseInt(y)] !== 'o') {
            setMultiArray(
                multiArray.map((e, i) => {
                    if (i === parseInt(x)) {
                        e[parseInt(y)] = playerTurn;
                    }
                    return e;
                })
            )
            if (playerTurn === 'x') {
                setPlayerTurn('o')
            } else {
                setPlayerTurn('x')
            }
        }
    }


    const Reset = () => {
        setMultiArray([['','',''],['','',''],['','','']]);
    }
    useEffect(() => {
        let winner = checkWinner();
        if (winner) {
            alert(`${winner} won the Game !`)
        }
        console.log(winner)
    }, [multiArray])
    const checkWinner = () => {
        const [a, b, c] = multiArray
        for (let i = 0; i < multiArray.length; i++) {
            if (a[i] != '' && a[i] == b[i] && a[i] == c[i] && b[i] == c[i]) return playerTurn ? 'X' : 'O';
            const element = multiArray[i]
            const setArr = new Set(element)
            if ((element.includes('x') || element.includes('o')) && setArr.size == 1) return element.includes('x') || element.includes('o')

        }
        if (a[0] != '' && a[0] == b[1] && a[0] == c[2] && b[1] == c[2]) return playerTurn ? 'X' : 'O';
        else if (a[2] != '' && a[2] == b[1] && a[2] == c[0] && b[1] == c[0]) return playerTurn ? 'X' : 'O';

    }
    return <>
     <h1 className='title'>Tic Tac Toe</h1>
        <div className="board" style={{ marginTop: '30px' }}>
           
            {multiArray.map((e, i) => e.map((element, index) => <Square playerTurn={element} onClick={() => onClickEvent(`${i} ${index}`)}></Square>))}
            <button className="reset-btn" onClick={Reset} >Reset</button>
        </div>
    </>
}
export default Board
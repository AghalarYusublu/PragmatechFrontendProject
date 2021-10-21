import React, { useState } from "react";


function Square({playerTurn, onClick}) {
  /*   const [turn, setTurn] = useState(''); */

    return <>
        <button className="square" onClick={()=> {onClick()}}>
            {playerTurn}
        </button>
    </>
}
export default Square
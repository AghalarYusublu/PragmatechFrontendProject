import React from 'react'
import shorId from 'shortid'

import { useDispatch } from 'react-redux'
import { setPlayer2Message } from './redux/reducers/player2';
import { setMessage2Count, } from './redux/reducers/player2';
import { setMessage1Count, } from './redux/reducers/player1';

import { useSelector } from 'react-redux';
import { useRef, useEffect } from 'react'
import { useLocation } from 'react-router-dom';
const Player2 = () => {
    const location = useLocation()
    const dispatch = useDispatch()

    const inputValue = useRef(null)

    const message2Value = useSelector((state) => state.player2message.message)
    const message1Value = useSelector((state) => state.player1message.message)

    const name2Value = useSelector((state) => state.player2message.name)
    const name1Value = useSelector((state) => state.player1message.name)
    const messageP1Count = useSelector((state) => state.player1message.messageCount)
    const messageP2Count = useSelector((state) => state.player2message.messageCount)


    const SentMessage = (e) => {
        e.preventDefault()
        dispatch(setPlayer2Message(inputValue.current.value))
        if (inputValue.current.value && location.pathname !== "/player-1") {
            dispatch(setMessage1Count(messageP1Count + 1))
        } else {
            dispatch(setMessage1Count(0))
        }
    }

    useEffect(() => {
        if (messageP2Count > 0) {
            dispatch(setMessage2Count(0))
        }
    }, [messageP2Count])


    return <>
        <h1 className='text-3xl font-medium'>Player 2</h1>
        <div className="main flex justify-center items-center h-screen">
            <form  className='p-10 bg-green-400 rounded-md'>
                {
                    message1Value.map((e) => {
                        return (
                            <p key={shorId.generate()} className='text-yellow-500 text-xl bg-gray-300 rounded-md my-2 p-2' >{name1Value + " : " + e}</p>
                        )
                    })
                }
                {
                    message2Value.map((e) => {
                        return (
                            <p key={shorId.generate()} className='text-yellow-500 text-xl text-right bg-gray-300 rounded-md my-2 p-2' >{name2Value + " : " + e}</p>
                        )
                    })
                }
                <input type="text" ref={inputValue} className='border-2 h-10 rounded-md border-black p-3' placeholder='Enter...' />
                <button type='submit' onClick={SentMessage} className='bg-red-500 px-4 py-2 block mt-2 rounded-md'> Sent</button>
            </form>
        </div>
    </>
}

export default Player2

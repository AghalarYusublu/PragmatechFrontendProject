import React from 'react'
import { useContext, useRef } from 'react';
import { DarkMode } from '../App'
import SDK from './ApiFolder/Sdk';




const CreateList = () => {
    const darkMode = useContext(DarkMode)
    const inputValue = useRef(null)
    const descValue = useRef(null)

    const sdk = new SDK();


    const listAdd = async () => {
        const listData = {
            name: inputValue.current.value,
            description: descValue.current.value,
            iso_639_1: "en"
        }

        if (listData) {
            try {
                const data = await sdk.postCreateList(listData)
            } catch (error) {
                console.log(error)
            }
        }
        if (listData) {
            alert('List added')
        }

    }


    return <>
        <div id='create-list-section' style={darkMode.darkMode === false ? { borderColor: "#141414", color: "#141414" } : { borderColor: "hsla(0, 0%, 89.8%, .0784313725490196)", color: "#e5e5e5" }} >
            <div className="container">
                <form className='w-50 offset-3'>
                    <div className="mb-3 text-center">
                        <strong className="form-label">List Name</strong>
                        <input type="text" ref={inputValue} className="form-control w-50 offset-3 mt-3" placeholder="Enter..." />
                    </div>
                    <div className="mb-3 text-center">
                        <strong className="form-label">Description</strong>
                        <textarea ref={descValue} className="form-control w-50 offset-3 mt-3" placeholder="....." name="description" id="exampleFormControlTextarea1" cols="30" rows="3"></textarea>
                    </div>

                    <div className="list-add">
                        <button type="submit" onClick={listAdd} className="btn btn-list-add w-50 offset-3" >Add</button>
                    </div>


                </form>
            </div>
        </div>
    </>
}

export default CreateList

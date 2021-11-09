import React from 'react'
import { DarkMode } from '../App'
import { useContext, useRef } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import SDK from './ApiFolder/Sdk';


const CategoryEdit = () => {

    const darkMode = useContext(DarkMode)
    const inputValue = useRef(null)
    const router = useHistory()
    const location = useLocation()
    const sdk = useRef(new SDK())


    const categoryEdit = async () => {
        const catName = inputValue.current.value;
        const listId = location.state?.list_id
        const catData = {
            name: catName
        }
        try {
            const data = await sdk.current.categoryNameEdit(listId, catData)

        } catch (error) {
            console.log(error)
        }

    }

    return <>
        <div id='category-edit-section' style={darkMode.darkMode === false ? { borderColor: "#141414", color: "#141414" } : { borderColor: "hsla(0, 0%, 89.8%, .0784313725490196)", color: "#e5e5e5" }} >
            <div className="container">
                <form className='w-50 offset-3'>
                    <div className="mb-3 text-center">
                        <strong className="form-label">Category Name</strong>
                        <input type="text" ref={inputValue} className="form-control w-50 offset-3 mt-3" placeholder="Enter..." />
                    </div>

                    <div className="category-edit">
                        <button type="submit" onClick={() => {
                            categoryEdit()
                            router.push({
                                pathname: "/",
                            })
                        }} className="btn btn-cat-edit w-50 offset-3">Edit</button>

                    </div>


                </form>
            </div>
        </div>
    </>
}

export default CategoryEdit

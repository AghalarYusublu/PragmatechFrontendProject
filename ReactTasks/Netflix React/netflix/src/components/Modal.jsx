import React from 'react'
import SDK from './ApiFolder/Sdk';
import { useMemo, useRef } from 'react';
import shortid from "short-id";


const Modal = ({ closeModal, media_type, id, addData }) => {


    const sdk = new SDK()
    const listName = useRef(null)

    const Lists = useMemo(() => {
        return (
            addData?.results.map((e) => {
                return (
                    <option key={shortid.generate()} value={e?.id}>{e?.name}</option>
                )
            })
        )
    }, [addData])



    const AddItems = async (e) => {
        e.preventDefault()
        const listId = listName.current.value;
        const listData = {
            items: [
                {
                    media_type: media_type,
                    media_id: id
                }
            ]
        }

        try {
            await sdk.postAddItems(listId, listData)

        } catch (error) {
            console.log(error)
        }

        if (listData) {
            alert('Movie to list added')
        }
    }



    return <>
        <div className="main-modal">
            <div className="modal-close" onClick={() => closeModal(false)} ><i className="fas fa-times"></i></div>
            <div className="modal-body">
                <div className="modal-dropdown">
                    <button className="btn btn-add-item w-100" onClick={AddItems} type="button">Add Items</button>
                    <select ref={listName} className="modal-dropdown-select mt-4" name="movie-list" id="dropdown__items">
                        <option value="0" selected>Select list</option>
                        {Lists}
                    </select>
                </div>
            </div>

        </div>
    </>
}

export default Modal;




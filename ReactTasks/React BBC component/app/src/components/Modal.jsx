

const Modal = ({ title, desc, categoryName, imgSrc, setOpenModal }) => {
    return <div>
        <div class="modal w-80 mx-auto object-center" style={{ width: '35rem' }}>
            <div class="modal-content p-7 bg-gray-500 rounded-md" >
                <div class="modal-header font-medium text-black">
                    <h5>{title}</h5>
                </div>
                <div class="modal-text">
                    <span>{desc}</span>
                    <h4 className='text-green-400' >{categoryName}</h4>
                </div>
               <div className="inline-block">
               <img style={{ width: '60px', height: '60px' }} src={imgSrc} className='my-2' alt="" />
               </div>
                <div class="modal-footer">
                    <button onClick={() => setOpenModal(false)} href="#" className='bg-red-600 rounded-md px-4 py-1' >CLOSE</button>
                </div>
            </div>

        </div>

    </div>

}

export default Modal


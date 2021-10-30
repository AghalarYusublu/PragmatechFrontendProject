import React from 'react'
import { useEffect, useState, useRef } from 'react'
const QrCode = () => {

    const [data, setData] = useState()
    const [color, setColor] = useState()
    const [inputValue, setInput] = useState('Hello World')

    const Submit = (e) => {
        e.preventDefault()
        setInput(e.target['inputValue'].value)

    }
    useEffect(() => {
        fetch(`http://api.qrserver.com/v1/create-qr-code/?data=${inputValue}!&size=150x150&color=${color}`).then((res) => res.blob()).then(data => setData(URL.createObjectURL(data)))
    }, [inputValue, color])

    return <>
        <div className="container">
            <img src={data} alt="" />
            <form onSubmit={Submit} >
                <input type="text" className='mt-3' name='inputValue' placeholder='Please  Enter' />
                <input type='submit' className="btn btn-primary" value='Submit' />
                <br />
                <div className="choose-color mt-3">
                    <input class="form-check-input cursor-pointer" type="radio" name="flexRadioDefault" id="flexRadioDefault1" onClick={() => setColor('255-0-0')} value="red" />
                    <label class="form-check-label" for="flexRadioDefault1">
                        Qırmızı
                    </label>
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" onClick={() => setColor('255-255-0')} value="yellow" />
                    <label class="form-check-label" for="flexRadioDefault1">
                        Sarı
                    </label>
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" onClick={() => setColor('0-255-0')} value="green" />
                    <label class="form-check-label" for="flexRadioDefault1">
                        Yaşıl
                    </label>
                </div>

            </form>
        </div>
    </>
}

export default QrCode

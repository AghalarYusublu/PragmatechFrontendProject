import React from 'react'
import { useEffect, useState, useRef } from 'react'
const Covidİnfo = () => {

    const [datas, setDatas] = useState()


    const [country, SetCountry] = useState("")
    const [singleData, setSingleData] = useState()

    const inputName = useRef(null)

    useEffect(() => {
        fetch(`https://covid-api.mmediagroup.fr/v1/cases?country=${country}`).then(res => res.json()).then(datas => {
            for (let data in datas) {
                setSingleData(datas[data])
            }
        })


    }, [country])

    const Submit = (e) => {
        e.preventDefault()
        SetCountry(inputName.current.value)
        setDatas(datas)
    }
    return <>
        <div className="container">
            <form onSubmit={Submit} className='mb-3 covid-form' >
                <input type="text" ref={inputName} name='country' placeholder='Please Country Enter' />
                <input type='submit' className="btn btn-primary mx-3" value='Submit' />
            </form>

            <p> Covid-19'dan rəhmətə gedən insanların sayı: {singleData?.deaths} </p>
            <p>Yoluxma sayi: {singleData?.confirmed}</p>
            <p>Sağalma sayi: {singleData?.recovered}</p>


        </div>
    </>
}

export default Covidİnfo

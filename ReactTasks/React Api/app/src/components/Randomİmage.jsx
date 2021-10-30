import React from 'react'
import { useEffect, useState, useCallback } from 'react'

const Randomİmage = () => {
    const [data, setData] = useState()

    /*  useEffect(() => {
         fetch("https://cataas.com/cat").then((res) => res.blob()).then(data => setData(URL.createObjectURL(data)))
 
     }, [data]) */

    const Submit = useCallback(() => {
        fetch("https://cataas.com/cat", { cache: 'no-cache' }).then((res) => res.blob()).then(data => setData(URL.createObjectURL(data)))
    }, [data])
    useEffect(() => {
        Submit()
    }, [])

    return <>
        <div className="container">
            <img src={data} alt="" />
            <br />
            <button onClick={Submit} className="btn btn-primary mt-5">Change Photo</button>
        </div>
    </>
}

export default Randomİmage

import React, { useEffect, useState } from 'react'
import { useRef } from 'react'
import { useGetAgeOfEmpiresInfoQuery, useLazyGetAgeOfEmpiresInfoQuery } from '../Api/ageOfEmpiresApi'



const AgeOfEmpires = () => {
    const inputValue = useRef<HTMLInputElement>(null);
    const [inputData, setInputData] = useState<string>('')


    const [trigger, { data, error, isLoading }] = useLazyGetAgeOfEmpiresInfoQuery()

    useEffect(() => {
        console.log(data)
    }, [data])

    const Word = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputData(e.target.value)
        if (inputData) {
            trigger(inputData)
        }
            
    }

    /* const Click = () => {
        if (inputData) {
            trigger(inputData)
        }
        setInputData(inputValue.current?.value)
        console.log(inputData)
    } */
    return <>
        <div className="App bg-dark vh-100 d-flex justify-content-center">
            <div className="mb-3 mt-5">
                <label className="form-label text-light">Free Dictionary API</label>
                <div className="d-flex mt-4">
                    <input type="text" className="form-control" id="input1" placeholder='Try it here...' onChange={Word}  ref={inputValue} />
                    <button className="btn btn-success mx-2" /* onClick={Click} */><i className="bi bi-search"></i></button>
                </div>
                <ul className='mt-3 p-0'>
                    {/*  <li style={{ borderRadius: '5px', listStyle: 'none' }} className='bg-success my-1 list=style-none'>
                        <a className='text-light text-decoration-none p-2 d-block w-100' href=""></a>
                    </li> */}

                    {
                        data?.map((e) => {
                            e.meanings.map((x) => {
                                x.definitions.map(z => {
                                    return (
                                        <li style={{ borderRadius: '5px', listStyle: 'none' }} className='bg-success my-1 list=style-none'>
                                            <a className='text-light text-decoration-none p-2 d-block w-100' href="">{z.definition}</a>
                                        </li>
                                    )
                                })

                            })
                        })
                    }
                </ul>
            </div>
        </div>
    </>
}

export default AgeOfEmpires

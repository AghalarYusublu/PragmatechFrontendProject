import React from 'react'
import { useParams, useLocation } from 'react-router'
const Team = () => {

    const location = useLocation()
    const {name} = useParams()
    return (
        <>
            <h1>Team</h1>
          Salam men   {name}
        </>
    )
}
export default Team
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

export default function Fraternity() {
    const nav = useNavigate()
    const token = false

    useEffect(() => {
        if (!token) {
            nav('/fraternity/login')
        }
    })
    
    return(<>
        <h1>hello world...</h1>
    </>)
}
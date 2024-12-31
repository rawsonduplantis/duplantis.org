import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

export default function Fraternity() {
    const nav = useNavigate()
    const [token, setToken] = useState<string>('')
    const [userData, setUserData] = useState({})

    useEffect(() => {
        const token = localStorage.getItem('jwt-token') || ''
        setToken(token)
        if (!token) {
            nav('/fraternity/login')
        } else {
            console.log('fetching data')
            fetch('https://server.duplantis.org/fraternity', {
                headers: { 'jwt-token': token },
            })
            .then((res) => {
                if (!res.ok) {
                    throw new Error(`HTTP error! status: ${res.status}`)
                }
                console.log(res)
                return res.json()
            })
            .then((data) => {
                setUserData(data)
            })
            .catch((err) => console.error(err))
        }
    }, [])

    /*
    function logout() {
        setToken('')
        localStorage.removeItem('jwt-token')
    }
    */

    return(<>
        <p>{userData?.safehouseKey}</p>
    </>)
}
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import NavBar from "../../components/navigation/NavBar"
import { log } from "console"

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

    
    function logout() {
        setToken('')
        localStorage.removeItem('jwt-token')
        nav('/fraternity/login')
    }
    

    return(<>
        <NavBar />
        <div className="bg-orange-100/75 h-full w-screen pt-16">
            <div className="flex h-full">
                <div className="m-auto">
                    <p className="text-1xl text-orange-950/75 text-center cursor-default select-none">{userData?.safehouseKey}</p>
                    <button className="w-24 ml-auto mr-auto bg-orange-950/75 hover:bg-orange-950/80 active:bg-orange-950/90 text-white py-2 px-4 rounded-lg font-semibold m-auto" onClick={logout}>Logout</button>
                </div>
            </div>
        </div>
    </>)
}
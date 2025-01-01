import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import NavBar from "../../components/navigation/NavBar"
import FullTree from "../fulltree"

export default function Fraternity() {
    const nav = useNavigate()
    const [token, setToken] = useState<string>('')
    interface UserData {
        safehouseKey: string;
        decodedToken: {
            scroll: string;
            lastname: string;
        }
    }

    const [userData, setUserData] = useState<UserData | null>(null)

    useEffect(() => {
        const token = localStorage.getItem('jwt-token') || ''
        setToken(token)
        if (!token) {
            nav('/fraternity/login')
        } else {
            fetch('https://server.duplantis.org/fraternity', {
                headers: { 'jwt-token': token },
            })
            .then((res) => {
                if (!res.ok) {
                    throw new Error(`HTTP error! status: ${res.status}`)
                }
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
    
    return (<>
        <NavBar sessionUser={userData?.decodedToken.scroll} />
        <div className="min-h-full w-full pt-16 bg-orange-100/75 flex items-center justify-center flex-col">
            <div className="m-4">
                <p className="flex w-full justify-center font-serif font-semibold text-orange-950/75 text-lg md:text-2xl">Third Generation (Fall '91 - Present)</p>
                <p className="flex w-full justify-center font-semibold text-orange-950/50">498 out of 537 fraters recorded (~93%)</p>
            </div>
            <div className="w-full p-4">
                <FullTree />
            </div>
            <div className="z-1 sm:static md:top-0 md:absolute md:right-0 md:mr-4 flex flex-row h-16">
                <p className="m-auto mr-4 text-1xl text-orange-950/75 font-semibold">{`${userData?.decodedToken.lastname || ''} #${userData?.decodedToken.scroll || ''}`}</p>
                <button className="w-24 ml-auto mr-auto bg-orange-950/75 hover:bg-orange-950/80 active:bg-orange-950/90 text-white py-2 px-4 rounded-lg font-semibold m-auto" onClick={logout}>Logout</button>
            </div>
        </div>
        
    </>)
}
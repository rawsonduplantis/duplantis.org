import NavBar from '../components/navigation/NavBar'
import { Outlet } from "react-router-dom"


export default function Root() {
  return (
    <div className='flex flex-col h-screen'>
        <NavBar />
        <div id='detail' className='flex flex-1 overflow-y-scroll'>
            <Outlet />
        </div>
    </div>
  )
}


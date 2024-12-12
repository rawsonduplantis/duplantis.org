import NavBar from '../components/navigation/NavBar'
import { Outlet } from "react-router-dom"


export default function Root() {
  return (
    <div className='flex flex-col h-screen w-screen'>
        <NavBar />
        <div id='detail' className='flex min-h-full flex-1 overflow-y-scroll'>
            <Outlet />
        </div>
    </div>
  )
}


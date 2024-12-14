import NavLink from "./NavLink"
import React, { useState } from 'react'

export default function NavBar() {
    const [isDown, setDown] = useState(false)
    const dropDown = () => setDown(!isDown)

    return (
        <div className="drop-shadow-lg"> 
            <div className="flex flex-row h-16 bg-orange-100 hidden md:flex">
                <NavLink destination="duplantis.org" home={true} />
                {/*<NavLink destination="writing" home={false} /> */}
                <p className="cursor-default select-none mt-auto mb-auto text-orange-950/75">•</p>  
                <NavLink destination="fraternity" home={false} />
                {/*<NavLink destination="passarelleo" home={false}></NavLink>*/}
                <p className="cursor-default select-none mt-auto mb-auto text-orange-950/75">•</p> 
                <NavLink destination="messages" home={false} /> 
                <p className="cursor-default select-none mt-auto mb-auto text-orange-950/75">•</p> 
                <NavLink destination="about" home={false} />
                {/*<NavLink destination="imperialism" home={false} />*/}
            </div>
            <div className="flex flex-row h-16 bg-orange-100 sm:inline md:hidden">
                <NavLink destination="duplantis.org" home={true}/>
                <button onClick={dropDown} className="ml-auto pr-5 self-center">
                    <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#724B3B"><path d="M120-240v-66.67h720V-240H120Zm0-206.67v-66.66h720v66.66H120Zm0-206.66V-720h720v66.67H120Z"/></svg>
                </button>
                {isDown && (
                    <ul className="absolute grid flex-col bg-orange-50/90 p-5 top-16 w-full justify-items-end justify-self-end right-0 space-y-5">
                        <li><NavLink destination="fraternity" home={false} /></li>
                        <li><NavLink destination="messages" home={false} /> </li>
                        <li><NavLink destination="about" home={false} /></li>
                    </ul>
                )}
            </div>
            
        </div>
    )
}
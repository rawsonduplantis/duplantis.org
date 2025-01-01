import NavLink from "./NavLink"
import { useState, useEffect, useRef } from 'react'

export default function NavBar({sessionUser}: {sessionUser?: string}) {

    const [isDown, setDown] = useState(false)
    const dropDown = () => setDown(!isDown)
    const wrapperRef = useRef<HTMLDivElement>(null)
    useClickOutside(wrapperRef, () => {
        setDown(false)
    })
    
    return (
        <div ref={wrapperRef} className="drop-shadow-lg absolute w-full z-50 md:z-0"> 
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
            <div className="flex flex-row h-16 bg-orange-100 md:hidden">
                <NavLink destination="duplantis.org" home={true}/>
                <button onClick={dropDown} className="ml-auto pr-5 self-center">
                    <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#724B3B"><path d="M120-240v-66.67h720V-240H120Zm0-206.67v-66.66h720v66.66H120Zm0-206.66V-720h720v66.67H120Z"/></svg>
                </button>
                <ul className={`absolute grid flex-col bg-orange-50/90 p-5 top-16 w-full justify-items-end justify-self-end right-0 space-y-5 ${isDown ? 'opacity-100' : 'opacity-0'} transition-opacity duration-100 ease-in-out`}>
                    <li className={`${isDown ? 'visible' : 'collapse'} transition-all duration-100 ease-in-out`}><NavLink destination="fraternity" home={false} label={`fraternity${sessionUser ? `` : ''}`}/></li>
                    <li className={`${isDown ? 'visible' : 'collapse'} transition-all duration-100 ease-in-out`}><NavLink destination="messages" home={false} /> </li>
                    <li className={`${isDown ? 'visible' : 'collapse'} transition-all duration-100 ease-in-out`}><NavLink destination="about" home={false} /></li>
                </ul>
            </div>
        </div>
    )
}

// Outside click collapse handler
function useClickOutside(ref: any, onClickOutside: any) {
    useEffect(() => {
      /**
       * Invoke Function onClick outside of element
       */
      function handleClickOutside(event: any) {
        if (ref.current && !ref.current.contains(event.target)) {
          onClickOutside();
        }
      }
      // Bind
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // dispose
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref, onClickOutside]);
  }
import NavLink from "./NavLink"

export default function NavBar() {
    return (
        <div className="drop-shadow-lg"> 
            <div className="flex flex-row h-16 bg-orange-100">
                <NavLink destination="duplantis.org" home={true} />
                <p className="cursor-default select-none mt-auto mb-auto text-orange-950/75">•</p>
                <NavLink destination="writing" home={false} />
                <p className="cursor-default select-none mt-auto mb-auto text-orange-950/75">•</p>  
                <NavLink destination="fraternity" home={false} />
                <p className="cursor-default select-none mt-auto mb-auto text-orange-950/75">•</p>  
                <NavLink destination="passarelleo" home={false}></NavLink>
                <p className="cursor-default select-none mt-auto mb-auto text-orange-950/75">•</p>  
                <NavLink destination="about" home={false} />
            </div>
        </div>
    )
}
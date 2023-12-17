import NavLink from "./NavLink"

export default function NavBar() {
    return (
        <> 
            <div className="flex flex-row h-16 bg-orange-100">
                <NavLink destination="duplantis.org" home={true} />
                <p className="mt-auto mb-auto text-orange-950/75">•</p>
                <NavLink destination="about" home={false} />  
            </div>
        </>
    )
}
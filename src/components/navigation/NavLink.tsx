import { Link } from "react-router-dom";

export default function NavLink({destination, home}: {destination: string, home: boolean}) {
    let link;

    if (home) {
        link = <Link to='/' className={`text-orange-950/75 font-semibold m-auto`}>duplantis.org</Link>
    } else {
        link = <Link to={`${destination.toLowerCase()}` } className={`text-orange-950/75 font-semibold m-auto`}>{destination}</Link>
    }
    
    return (
        <div className="flex flex-row ml-5 mr-5">
            {link}
        </div>
    )
}
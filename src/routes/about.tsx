import NavBar from '../components/navigation/NavBar'

export default function About() {
    return (<>
        <NavBar />
        <body className="bg-orange-100/75 h-full w-screen pt-16">
            <div className="flex h-full">
                <div className="m-auto">
                    <p className="text-1xl text-orange-950/75 text-center cursor-default select-none">Created by Rawson Duplantis</p>
                    <p className="text-1xl text-orange-950/75 text-center cursor-default select-none">More to come...</p>
                </div>
            </div>
        </body>
    </>
        
    )
}
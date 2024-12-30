import NavBar from '../components/navigation/NavBar'

export default function Fraternity() {
    return (<>
        <NavBar />
        <body className="bg-orange-100/75 h-full w-screen pt-16">
            <div className="flex h-full">
                <div className="m-auto">
                    <p className="text-1xl text-orange-950/75 text-center cursor-default select-none">Under Construction</p>
                    <p className="text-1xl text-orange-950/75 text-center cursor-default select-none">Click <a href="/fraternitytree" className="text-1xl text-orange-950/75 text-center cursor-pointer select-none">here</a> for full tree</p>
                </div>
            </div>
        </body>
    </>)
}
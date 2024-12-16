export default function LandingPage() {
    return (
        <div className="bg-orange-100/75 w-screen min-h-full overflow-auto flex justify-center items-center">
            <div className="w-3/4">
                <div className="text-center">
                    <p className="text-5xl md:text-6xl text-orange-950/75 font-semibold cursor-default select-none">duplantis.org</p>
                    <p className="text-1xl text-orange-900/75 cursor-default select-none">Check back later...</p>
                    <a className="cursor-default" href="https://www.linkedin.com/in/rawsonduplantis">
                        <svg xmlns="http://www.w3.org/2000/svg" className="cursor-pointer mt-2 mx-auto stroke-orange-900/75 w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    );
}
export default function LandingPage() {
    return (
        <body className="bg-orange-100 flex items-center h-screen">
        <div className="mx-auto">
            <p className="text-6xl text-orange-950/75 font-semibold text-center">duplantis.org</p>
            <p className="text-lg text-orange-900/75 text-center">check back later...</p>
            <a href="https://www.linkedin.com/in/rawsonduplantis">
                <svg xmlns="http://www.w3.org/2000/svg" className="mt-2 mx-auto stroke-orange-900/75 w-8 h-8" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                </svg>
            </a>        
        </div> 
        <nav id="navigation"></nav>
    </body>
    )
}
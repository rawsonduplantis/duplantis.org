import NavBar from '../../components/navigation/NavBar'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function FraternityLogin() {
    const [lastname, setLastname] = useState('')
    const [scroll, setScroll] = useState('')
    const [codestart, setCodestart] = useState('')
    const [codeend, setCodeend] = useState('')
    const nav = useNavigate()

    function submitUser(event: any) {
        let code = codestart + codeend
        event.preventDefault()
        fetch('https://server.duplantis.org/fraternity/login', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ lastname, scroll, code}),
        })
            .then((res) => res.json())
            .then((data) => {
            if (data.message === 'success') {
                localStorage.setItem('jwt-token', data.token)
                setLastname('')
                setScroll('')
                setCodestart('')
                setCodeend('')
                nav('/fraternity')
            } else { alert(data.message) }
        })
        
       //console.log(lastname, scroll, codestart, codeend)
    }

    return (<>
        <NavBar />
        <div className="bg-orange-100/75 h-full w-screen pt-16">
            <div className="flex h-full">
                <div className="m-auto w-4/5 md:w-1/2 xl:w-1/3 2xl:w-1/4">                    
                    <form onSubmit={submitUser} className="space-y-4 bg-orange-50/75 border border-orange-950/75 p-4 rounded-lg flex-col w-full">
                        <div className="md:flex md:items-center justify-center w-full">
                            <div className='flex items-center justify-center'>
                                <input id="lastname" type="text" name="lastname" placeholder="Last Name" onChange={(e) => setLastname(e.target.value)}
                                    className="border-b border-orange-950/75 bg-transparent focus:outline-none w-24 text-orange-950/75 placeholder:text-orange-950/25 text-center" required />
                                <p className='text-1xl text-orange-950/75'>,&nbsp;#</p>
                                <input id="scroll" type="text" name="scroll" onChange={(e) => setScroll(e.target.value)}
                                    className="border-b border-orange-950/75 bg-transparent focus:outline-none w-7 text-center text-orange-950/75" required />
                                    <p className='text-1xl text-orange-950/75'>,&nbsp;and&nbsp;</p>
                            </div>
                            <div className='flex items-center justify-center'>
                                <p className='text-1xl text-orange-950/75'>I&nbsp;</p>
                                <input id="codestart" type="password" name="codestart" onChange={(e) => setCodestart(e.target.value)}
                                    className="border-b border-orange-950/75 bg-transparent focus:outline-none w-10 text-orange-950/75" required />
                                <p className='text-1xl text-orange-950/75'>&nbsp;this&nbsp;</p>
                                <input id="codeend" type="password" name="codeend" onChange={(e) => setCodeend(e.target.value)}
                                    className="border-b border-orange-950/75 bg-transparent focus:outline-none w-24 text-orange-950/75" required />
                                <p className='text-1xl text-orange-950/75'>.</p>
                            </div>
                        </div>
                        <button type="submit" className="w-full ml-auto mr-auto bg-orange-950/75 hover:bg-orange-950/80 active:bg-orange-950/90 text-white py-2 px-4 rounded-lg font-semibold focus:outline-none focus:ring focus:ring-orange-950/25">Enter</button>
                    </form>
                </div>
            </div>
        </div>
    </>)
}
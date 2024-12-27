import React, { useState, useEffect } from 'react';
import { Filter } from 'bad-words'

export default function Messages() {
    const [messages, setMessages] = useState<{ alias: string; message: string }[]>([]); // State to store messages
    const [loading, setLoading] = useState(true); // State for loading status
    const [error, setError] = useState(null); // State for error handling
    const filter = new Filter()
    const removeWords = ['wang',]
    filter.removeWords(...removeWords)
    
    const server = 'https://server.duplantis.org/messages';
    useEffect(() => {
        const fetchMessages = async () => {
             // Ensure the URL is correct
            try {
                const response = await fetch(server, {
                    method: 'GET',
                    headers: {'Content-Type': 'application/json'},
                    credentials: 'same-origin'
                });
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setMessages(data); // Set messages in state

            } catch (e: any) {
                setError(e)
                console.error('Failed to fetch messages:', e);
            } finally {
                setLoading(false); // Stop loading once the fetch is done
            }
        };

        fetchMessages();
    }, []); // Empty dependency array ensures this runs once on mount

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        const form = e.target as HTMLFormElement
        const formData = new FormData(form)
        const response = Object.fromEntries(formData.entries()) as { alias: string; message: string };

        fetch(server + '/post', {
            method: form.method,
            headers: {
                'Content-Type': 'application/json', // Set the Content-Type header
            },
            body: JSON.stringify(response)
        })
        setMessages([...messages, response]);    
    }

    return (
        <div className="bg-orange-100/75 w-screen min-h-screen overflow-auto">
            <div className="m-auto w-4/5 md:w-1/2 xl:w-1/3 2xl:w-1/4 pt-16">

                {/* Message input*/}
                <form method="post" onSubmit={handleSubmit} className="space-y-4 bg-orange-50/75 border border-orange-950/75 p-4 rounded-lg flex flex-col mt-10 mb-10">
                    <div className="">
                        <input id="alias" type="text" name="alias" placeholder="Enter your alias" className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none" required />
                    </div>
                    <div className="">
                        <input id="message" name="message" placeholder="Enter your message" className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none" required />
                    </div>
                    <button type="submit" className="w-24 ml-auto mr-auto bg-orange-950/75 hover:bg-orange-950/80 active:bg-orange-950/90 text-white py-2 px-4 rounded-lg font-semibold m-auto">Submit</button>
                </form>

                {/* Loading or error state */}
                {loading && <p className="text-gray-500 italic justify-center">Loading messages...</p>}
                {error && <p className="text-red-500">{error}</p>}

                {/* Render messages */}
                {!loading && !error && messages.length > 0 && (
                    <ul className="space-y-1 mb-10">
                        {messages.toReversed().map((message: any, index: number) => (
                            <li key={index} className="rounded-lg p-1">
                                <div className="flex text-orange-950/75 justify-center">{filter.clean(message.message)}</div>
                                <div className="flex text-sm text-orange-950/75 justify-center italic">{`— ${filter.clean(message.alias)}`}</div>
                            </li>
                        ))}
                    </ul>
                )}

                {/* No messages */}
                {!loading && !error && messages.length === 0 && (<p className="text-gray-500">No messages yet. Be the first to send one!</p>)}
            </div>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        </div>
    );
}

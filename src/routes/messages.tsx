import React, { useState, useEffect } from 'react';

export default function Messages() {
    const [messages, setMessages] = useState<{ alias: string; message: string }[]>([]); // State to store messages
    const [loading, setLoading] = useState(true); // State for loading status
    const [error, setError] = useState(null); // State for error handling
    
    const server = 'https://server.duplantis.org/messages';
    useEffect(() => {
        const fetchMessages = async () => {
             // Ensure the URL is correct
            try {
                const response = await fetch(server);
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
        console.log('submitted form')
        const form = e.target as HTMLFormElement
        const formData = new FormData(form)
        const response = Object.fromEntries(formData.entries()) as { alias: string; message: string };
        // Spitting out data
        formData.forEach((value, key) => {
            console.log(`${key}: ${value}`); // Log each form input
        })

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
            <div className="m-auto w-1/3">
                {/* Message input*/}
                <form method="post" onSubmit={handleSubmit} className="bg-orange-50/75 border border-orange-950/75 p-2 rounded-lg justify-items-center m-10">
                    <div className="mb-4">
                        <input id="alias" type="text" name="alias" placeholder="Enter your alias" className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none" required />
                    </div>
                    <div className="mb-4">
                        <input id="message" name="message" placeholder="Enter your message" className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none" required />
                    </div>
                    <button type="submit" className="w-24 bg-white text-orange-950/75 py-2 px-4 rounded-lg font-semibold border-white hover:border-orange-950 transition ease-in-out duration-200">Submit</button>
                </form>
                {/* Loading or error state */}
                {loading && <p className="text-gray-500">Loading messages...</p>}
                {error && <p className="text-red-500">{error}</p>}

                {/* Render messages */}
                {!loading && !error && messages.length > 0 && (
                    <ul className="space-y-1 mb-10">
                        {messages.toReversed().map((message: any, index: number) => (
                            <li key={index} className="rounded-lg p-1">
                                <div className="flex text-orange-950/75 justify-center">{message.message}</div>
                                <div className="flex text-sm text-orange-950/75 justify-center italic">{`— ${message.alias}`}</div>
                            </li>
                        ))}
                    </ul>
                )}
                {/* No messages */}
                {!loading && !error && messages.length === 0 && (<p className="text-gray-500">No messages yet. Be the first to send one!</p>)}
            </div>
        </div>
    );
}

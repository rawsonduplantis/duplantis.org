import React, { useState, useEffect } from 'react';

export default function Messages() {
    const [messages, setMessages] = useState([]); // State to store messages
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
            } catch (e) {
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
        const response = Object.fromEntries(formData.entries());
        // Spitting out data
        formData.forEach((value, key) => {
            console.log(`${key}: ${value}`); // Log each form input
        })

        fetch(server + '/post', {
            method: form.method,
            body: JSON.stringify(response)
        })
    }

    return (
        <div className="bg-orange-100/75 h-full w-screen">
            <div className="flex h-full">
                <div className="m-auto">
                    {/* Message input*/}
                    <form method="post" onSubmit={handleSubmit}>
                        <input type='text' name='alias' defaultValue='anonymous' placeholder='alias' />
                        <input type='text' name='message' defaultValue='Hello!' placeholder='message' />
                        <button type='submit'>Submit</button>
                    </form>
                    {/* Actual messages */}
                    {loading && <p>Loading messages...</p>} {/* Show loading state */}
                    {error && <p className="text-red-500">{error}</p>} {/* Show error message */}
                    
                    {/* Render messages */}
                    {!loading && !error && (<>
                        {JSON.stringify(messages)}
                    </>
                    )}
                </div>
            </div>
        </div>
    );
}

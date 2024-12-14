import React, { useState, useEffect } from 'react';

export default function Messages() {
    const [messages, setMessages] = useState([]); // State to store messages
    const [loading, setLoading] = useState(true); // State for loading status
    const [error, setError] = useState(null); // State for error handling

    useEffect(() => {
        const fetchMessages = async () => {
            const server = 'https://server.duplantis.org/view'; // Ensure the URL is correct
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

    return (
        <div className="bg-orange-100/75 h-full w-screen">
            <div className="flex h-full">
                <div className="m-auto">
                    <p className="text-1xl text-orange-950/75 text-center cursor-default select-none">Messages:</p>

                    {loading && <p>Loading messages...</p>} {/* Show loading state */}
                    {error && <p className="text-red-500">{error}</p>} {/* Show error message */}
                    
                    {/* Render messages */}
                    {!loading && !error && (
                        <ul className="text-orange-950">
                            {JSON.stringify(messages)}
                        </ul>
                    )}
                </div>
            </div>
        </div>
    );
}

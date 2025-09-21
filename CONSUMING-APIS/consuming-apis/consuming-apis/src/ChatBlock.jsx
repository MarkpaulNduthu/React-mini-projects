import { useState } from "react";
import aiProfileImage from "/ai-profile-img.jpeg";
import ReactMarkdown from "react-markdown";

function ChatBlock() {
    const [userQuery, setUserQuery] = useState("");
    const [message, setMessage] = useState([]);
    const [loading, setLoading] = useState(false);


    const handleInputChange = (event) => {
        setUserQuery((u) => (u = event.target.value));
    };

    async function handleOnSubmit() {
        if (userQuery.trim() !== "") {
            const query = userQuery.trim();
            setMessage((m) => [...m, { sender: "user", message: query }]);
            setUserQuery("");
            setLoading(true);
            try {
                const response = await fetch(
                    `http://localhost:8080/api/v1/gemini/chat?message=${encodeURIComponent(query)}`
                );

                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }

                const data = await response.json();
                console.log("Response from backend:", data);
                // Add AI reply
                setMessage((m) => [...m, { sender: "spring-ai", message: data.message }]);
            } catch (error) {
                console.error("Error talking to backend:", error);
                setMessage((m) => [
                    ...m,
                    { sender: "spring-ai", message: "⚠️ Error: could not reach server" },
                ]);
            } finally {
                setLoading(false); // stop loader
            }
        };
    }
    return (
        <>
            <div className="chatBlock">
                <div className="chat-section">
                    <div className="profile">
                        <img src={aiProfileImage} alt="spring-ai-profile-img" />
                        <div className="profile-details">
                            <p>spring-ai</p>
                            <div className="status">
                                <div className="green-dot"></div>
                                <span>online</span>
                            </div>
                        </div>
                    </div>
                    <div className="message-holder">
                        {message.map((obj, i) => {
                            return (<div key={i} className={obj.sender.trim() === "user" ? "user-message" : "spring-model-message"}>
                                <ReactMarkdown>{obj.message}</ReactMarkdown>
                            </div>);
                        })}
                        {loading && (
                                <div className="spring-model-message">
                                    <span className="loader"></span> Typing...
                                </div>
                            )}
                    </div>
                    <div className="controls">
                        <input type="text" id="user-query" value={userQuery} placeholder="Enter a Query..." onChange={
                            (e) => handleInputChange(e)} />
                        <button className="submit" onClick={handleOnSubmit}>Send</button>
                    </div>
                </div>
            </div>
        </>
    );
}


export default ChatBlock;
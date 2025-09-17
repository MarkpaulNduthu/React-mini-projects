import { useState } from "react";
import aiProfileImage from "/ai-profile-img.jpeg";


function ChatBlock() {
    const [userQuery, setUserQuery] = useState("");

    const handleInputChange = (event) => {
        setUserQuery((u) => (u = event.target.value));
    };

    function handleOnSubmit() {

    };
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
                        <p id="user-message">Hello world</p>
                        <p id="spring-model-message">Hello too from world</p>
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
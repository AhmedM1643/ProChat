import React, { useState, useEffect } from 'react';
import { auth, db } from "../firebase";
import { collection, onSnapshot, orderBy, query, limit } from "firebase/firestore";
import Message from "./Message";
import Form from "./Form";

const Chat = () => {
    const [ messages, setMessages ] = useState([]);

    useEffect(() => {
        const messagesRef = query(collection(db, "messages"), orderBy("createdAt", "desc"), limit(50));

        const fetchMessages = onSnapshot(messagesRef, (snapshot) => {
            const fetchedMessages = [];
            snapshot.forEach((doc) => fetchedMessages.push({...doc.data(), id: doc.id}));
            const sortedMessages = fetchedMessages.sort((a, b) => {a.createdAt - b.createdAt});
            setMessages(sortedMessages);
        })
        return () => fetchMessages;
    }, []);


    return (
    <div className='chat'>
        <div className='chat-header'>
            <div className='title'>ProChat</div>
            <button onClick={() => {auth.signOut()}} className="btn">Log Out</button>
        </div>
        <div className="messages">
            {messages.map((message) => {
                return <Message key={message.id} msg={message}/>
            })}
        </div>
        <Form />
    </div>
    );
};

export default Chat;
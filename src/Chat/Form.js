import React, { useState } from 'react';
import { auth, db } from "../firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

const Form = () => {
  const [ message, setMessage ] = useState("");

  const sendMessage = async() => {
    if (message == "") { return };
    const { uid, displayName, photoURL } = auth.currentUser;
    addDoc(collection(db, "messages"), {
        text: message,
        name: displayName,
        avatar: photoURL,
        createdAt: serverTimestamp(),
        uid
    });
    setMessage("");
  }

  return (
    <div className="message-form">
      <input placeholder="Type Message.." className="input msg-input" value={message} onChange={(e) => {setMessage(e.target.value)}} onKeyDown={(e) => e.key == "Enter" ? sendMessage() : null}/>
      <button className="btn msg-btn" onClick={sendMessage}>Send</button>
    </div>
  );
};

export default Form
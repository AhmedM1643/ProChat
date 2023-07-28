import React from 'react';
import { deleteDoc, doc } from 'firebase/firestore';
import { db, auth } from "../firebase";
import { useAuthState } from 'react-firebase-hooks/auth';

const Message = ({msg}) => {
    const [ user ] = useAuthState(auth);
    return (
        <div key={msg.id} className={user.uid == msg.uid ? "message owner" : "message"}>
            <div className='info'>
                <p className='author'>{user.uid == msg.uid ? "You" : msg.name}</p>
                {user.uid == msg.uid ? <button className="delete" onClick={() => {deleteDoc((doc(db, "messages", msg.id)))}}>D</button> : ""}
            </div>
            <p className='text'>{msg.text}</p>
        </div>
    );
};

export default Message;
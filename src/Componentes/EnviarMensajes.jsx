import React, { useState } from 'react';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db, auth } from '../firebase';
import EmojiPicker from 'emoji-picker-react';

const EnviarMensajes = () => {

    const [input, setInput] = useState("");
    const [emojis, setEmojis] = useState("close");

    const enviarMensaje = async (e) => {
        e.preventDefault();

        if(input === "") {
            null
            return;
        }

        // Destructuramos lo que necesitamos del usuario ya autenticado
        const {displayName, photoURL, uid} = auth.currentUser;

        addDoc(collection(db, "mensajes"), {
            texto: input,
            nombre: displayName,
            foto: photoURL,
            uid,
            timestamp: serverTimestamp()
        });
        setInput("")
        setEmojis("close")
    }

    const onEmojiClick = (objeto) => {
        setInput(`${input}${objeto.emoji}`);
    }

    return ( 
        <form onSubmit={enviarMensaje}>
            <button className='btn-emoji' type='button' onClick={() => setEmojis("open")}>
                <i className="fa-solid fa-face-smile"></i>
            </button>
            <div className={emojis}>
                <button className='close-emoji' onClick={() => setEmojis("close")}>
                    <i className="fa-solid fa-rectangle-xmark"></i>
                </button>
                <EmojiPicker onEmojiClick={onEmojiClick}/>
            </div>
            <input value={input} type="text" placeholder='Escribir mensaje...' onChange={(e) => setInput(e.target.value)}/>
            <button type='submit'>Enviar</button>
        </form>
    );
}
 
export default EnviarMensajes;
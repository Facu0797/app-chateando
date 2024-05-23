import React, { useEffect, useState } from 'react';
import {db, auth} from "../firebase";
import {collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import Mensaje from './Mensaje';
import EnviarMensajes from './EnviarMensajes';




const Chat = () => {
    const [mensajes, setMensajes] = useState([]);

    useEffect(() => {
        //Hacemos el llamado a la base de datos de firestore
        const nuevaQuery = query(collection(db,"mensajes"), orderBy("timestamp"));

        const inscribirse = onSnapshot(nuevaQuery, (QuerySnapshot) => {
            let mensajesActuales = [];
            QuerySnapshot.forEach((item) => {
                mensajesActuales.push({ contenido: item.data(), id: item.id });
            })
            setMensajes(mensajesActuales);
        })
        return inscribirse;
    },[])

    return ( 
        <section className='chat-content'>
            {
                mensajes && mensajes.map((mensaje) => (
                    <Mensaje 
                        key={mensaje.id}
                        mensaje={mensaje.contenido}
                    />
                ))
            }
            <EnviarMensajes />
        </section>
        
    );
}
 
export default Chat;
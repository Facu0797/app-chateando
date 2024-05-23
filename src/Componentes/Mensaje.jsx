import React from 'react';
import { auth } from '../firebase';
import { formatearFecha } from '../helpers/fecha';

const Mensaje = ({mensaje}) => {
    let estiloMensaje = "message";
    
    // Verificar si el usuario está autenticado
    if (auth.currentUser) {
        const usuario = auth.currentUser.uid;
        const nuevoUsuario = mensaje.uid;
        estiloMensaje = usuario === nuevoUsuario ? "my-message" : "message";
    } else {
        // Manejo del caso cuando el usuario no está autenticado
        estiloMensaje = "message";
    }

    return (
        <article className={estiloMensaje}>
            <div>
                <div className="text-message">
                    <p className='text'>{mensaje.texto}</p>
                </div>
                <p className='time'>
                    {mensaje.timestamp ? formatearFecha(mensaje.timestamp) : "Fecha inválida"}
                </p>
            </div>
            <img src={mensaje.foto} alt="foto del usuario" />
        </article>
    );
}
    
export default Mensaje
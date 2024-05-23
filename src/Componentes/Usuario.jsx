import React from 'react';
import LogOut from './LogOut';
import LogIn from "./Login";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from '../firebase';

const Usuario = () => {

    const [usuario] = useAuthState(auth);

    const imagenUsuario = usuario ? usuario.photoURL : "../public/userImage.png";
    const nombreUsuario = usuario ? usuario.displayName : "Usuario"

    return (
        <div className='right-side'>
            <h1> <i className="fa-solid fa-shield-cat"></i> Chatea</h1>
            <article className='card-user'>
                <img src={imagenUsuario} alt="foto por defecto" referrerPolicy='no-referrer'/>
                <p>{nombreUsuario}</p>
                {usuario ?<LogOut /> : <LogIn />}
            </article>
        </div>
    );
}
 
export default Usuario;
import React from 'react';
import { GoogleAuthProvider, signInWithRedirect } from 'firebase/auth';
import { auth } from '../firebase';


const LogIn = () => {

    const iniciarSesion = () => {
        const provider = new GoogleAuthProvider();
        signInWithRedirect(auth, provider);
    }

    return ( 
        <button  className='btn-login' onClick={iniciarSesion}> <i className="fa-brands fa-google"></i> Iniciar Sesion</button>
    );
}
 
export default LogIn;
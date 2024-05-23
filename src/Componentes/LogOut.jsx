import React from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';

const cerrarSesion = () => {
    signOut(auth);
}

const LogOut = () => {
    return ( 
        <button className='btn-login btn-logout' onClick={cerrarSesion}><i className="fa-brands fa-google"></i> Cerrar Sesion</button> 
    );
}
 
export default LogOut;
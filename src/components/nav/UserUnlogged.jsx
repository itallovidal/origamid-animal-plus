import React from 'react';
import {Link} from "react-router-dom";
import perfil from "../../assets/perfil.png";

function UserUnlogged() {
    return (
        <>
            <Link className={'show'} to={'/login'}> Login / Registro  </Link>
            <picture className={'show'} id={'container_img_perfil'}>
                <img src={perfil} alt=""/>
            </picture>
        </>
    );
}

export default UserUnlogged;
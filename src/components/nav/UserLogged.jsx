import React from 'react';
import {Link} from "react-router-dom";
import perfil from "../../assets/perfil.png";

function UserLogged() {
    return (
        <>
            <Link className={'show'} to={'/login'}> Sair
                <i style={{marginLeft: `10px`}} className="fa-solid fa-arrow-right-to-bracket"></i>
            </Link>

        </>
    );
}

export default UserLogged;
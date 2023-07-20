import React from 'react';
import {Link} from "react-router-dom";
import perfil from "../../assets/perfil.png";

function UserLogged() {
    return (
        <>
            <Link className={'show'} to={'/conta'}> Conta
                <i style={{marginLeft: `10px`}} className="fa-regular fa-id-card"></i>
            </Link>

        </>
    );
}

export default UserLogged;
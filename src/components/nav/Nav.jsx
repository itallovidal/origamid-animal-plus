import React from 'react';
import icon from '../../assets/icon-dogs.png'
import {Link} from "react-router-dom";
import perfil from '../../assets/perfil.png'
import './nav.css'

function Nav() {
    return (
        <div id={'container_nav'}>
                <picture id={'container_icon'}>
                    <img src={icon} alt=""/>
                </picture>

                <nav>
                    <Link to={'/login'}> Login / Criar  </Link>
                    <picture id={'container_img_perfil'}>
                        <img src={perfil} alt=""/>
                    </picture>
                </nav>
        </div>
    );
}

export default Nav;
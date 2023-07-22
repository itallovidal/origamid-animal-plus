import perfil from '../../assets/dog-perfil.png'
import './login.css'
import React from "react";
import {Outlet} from "react-router-dom";

function Login() {
    const [boasVindas, setboasVindas] = React.useState(false)
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });


    return (
        <main id={'container_cadastro'}>
            <picture>
                <img src={perfil} alt=""/>
            </picture>

            <Outlet context={{boasVindas, setboasVindas}}/>
        </main>
    );
}

export default Login;
import React from "react";
import './nav.css'
import icon from '../../assets/icon-animals.png'
import {Link} from "react-router-dom";
import UserLogged from "./UserLogged.jsx";
import UserUnlogged from "./UserUnlogged.jsx";
import {Storage} from "../../context-hooks/GlobalStorage.jsx";
function Nav() {
    const storage = React.useContext(Storage)
    console.log(storage)
    return (
        <div id={'container_nav'}>
                <picture id={'container_icon'}>
                    <Link to={'/'}>
                        <img  src={icon} alt=""/>
                    </Link>
                </picture>

                <nav>
                    { storage.isLogged
                        ? <UserLogged/>
                        : storage.isLogged !== null
                        ? <UserUnlogged/>
                        : null }
                </nav>
        </div>
    );
}

export default Nav;
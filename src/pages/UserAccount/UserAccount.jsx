import React from 'react';
import {Link, Outlet, useNavigate} from "react-router-dom";
import './userAccount.css'
import {Storage} from "../../context-hooks/GlobalStorage.jsx";

function UserAccount() {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    const navigate = useNavigate()
    const storage = React.useContext(Storage)

    function logout(){
        console.log('a')
        localStorage.removeItem('userToken')
        storage.setUser({
            id: null,
            username: null,
            nome: null,
            email: null,
        })
        storage.setIsLogged(false)
        navigate('/login')
    }


    return (
        <main id={'main_conta'}>
            <Outlet/>

            <nav id={'nav_conta'} >
                {/* listagem */}
                <Link to={'/conta'}><i className="fa-solid fa-list-ul"></i></Link>
                {/* criar postagem*/}
                <Link to={'postar'}><i className="fa-solid fa-plus"></i></Link>
                {/* sair */}
                <a onClick={logout}><i className="fa-solid fa-arrow-right-from-bracket"></i></a>
            </nav>
        </main>
    );
}

export default UserAccount;
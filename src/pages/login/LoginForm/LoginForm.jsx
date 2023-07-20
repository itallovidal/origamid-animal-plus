import React from 'react';
import Input from "../../../components/input/input.jsx";
import {Link} from "react-router-dom";
import {path, createToken} from "../../../ utilities/fetch.jsx";

function LoginForm() {
    const [error, setError] = React.useState(null)
    const [login, setLogin] = React.useState({
        username: null,
        password: null
    })

    async function userLogin(e){
        e.preventDefault()
        if(login.username && login.password){
            try {
                const response = await fetch(path + createToken, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        username: login.username,
                        password: login.password
                    })
                })


                if(response.status !== 200)
                    throw new Error

                const body = await response.json()
                localStorage.setItem('userToken', body.token)
            }
            catch (e){
                setError(true)
            }
        }
    }

    return (
        <article id={'container_formLogin'}>
            <form action="" onSubmit={userLogin}>
                <h1>Login</h1>

                <Input setState={setLogin} placeholder={'Insira seu nome..'} type={'text'} id={'username'} text={'Nome'}/>
                <Input setState={setLogin} placeholder={'Insira sua senha..'} type={'password'} id={'password'} text={'Senha'}/>

                <button type={'submit'} className={'btn'}>Entrar</button>

                <Link to={'/'}>Perdeu sua <span>senha?</span> </Link>

                {error && <p id={'user404'}> Usuário não encontrado.</p>}
            </form>

            <h3>Cadastro</h3>
            <span>Ainda não é cadastrado?</span>
            <Link className={'btn cadastro'} to={'/login/create'}>Cadastrar agora!</Link>
        </article>
    );
}

export default LoginForm;
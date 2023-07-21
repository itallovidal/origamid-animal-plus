import React from 'react';
import Input from "../../../components/input/input.jsx";
import {Link, useNavigate} from "react-router-dom";
import {Storage} from "../../../context-hooks/GlobalStorage.jsx";
import {getUser, userLogin} from "../../../utilities/API.jsx";
import Loading from "../../../components/loading/Loading.jsx";

function LoginForm() {
    const storage = React.useContext(Storage)
    const navigate = useNavigate()
    const [error, setError] = React.useState(null)
    const [loading, setLoading] = React.useState(false)
    const [loginData, setLoginData] = React.useState({
        username: null,
        password: null
    })

    async function login(e){
        e.preventDefault()
        if(loginData.username && loginData.password){
            setLoading(true)

            try {
                const response = await userLogin(loginData.username, loginData.password)

                if(response){
                    storage.setIsLogged(null)
                    navigate('/conta')
                }
                else{
                    throw new Error
                }
            }
            catch (e){
                setError(true)
            }
            finally {
                setLoading(false)
            }
        }
    }

    return (
        <article id={'container_formLogin'}>
            { loading && <Loading/>}
            <form action="" onSubmit={login}>
                <h1>Login</h1>

                <Input setState={setLoginData} placeholder={'Insira seu nome..'} type={'text'} id={'username'} text={'Nome'}/>
                <Input setState={setLoginData} placeholder={'Insira sua senha..'} type={'password'} id={'password'} text={'Senha'}/>

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
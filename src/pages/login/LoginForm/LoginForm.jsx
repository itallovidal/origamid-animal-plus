import React from 'react';
import Input from "../../../components/input/input.jsx";
import {Link, useNavigate} from "react-router-dom";
import {path, createToken} from "../../../ utilities/fetch.jsx";
import Loading from "../../../components/loading/Loading.jsx";
import {getUser} from "../../../ utilities/getUser.jsx";
import {GlobalStorage} from "../../../App.jsx";

function LoginForm() {
    const global = React.useContext(GlobalStorage)
    const navigate = useNavigate()
    const [error, setError] = React.useState(null)
    const [loading, setLoading] = React.useState(false)
    const [login, setLogin] = React.useState({
        username: null,
        password: null
    })

    async function userLogin(e){
        e.preventDefault()
        if(login.username && login.password){
            setLoading(true)

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


                if(response.status !== 200){
                    setLoading(false)
                    throw new Error
                }

                const body = await response.json()
                localStorage.setItem('userToken', body.token)
                await getUser(body.token).then((response)=>{
                    global.setUser({...response})
                })
                navigate('/conta')
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
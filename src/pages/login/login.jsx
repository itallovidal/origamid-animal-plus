import perfil from '../../assets/dog-perfil.png'
import Input from "../../components/input/input.jsx";
import {Link} from "react-router-dom";
import './login.css'

function login(e){
    e.preventDefault()
}

function Login() {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    
    return (
        <main id={'container_cadastro'}>
            <picture>
                <img src={perfil} alt=""/>
            </picture>

            <article>
                <form action="" onSubmit={login}>
                    <h1>Login</h1>

                    <Input placeholder={'Insira seu nome..'} type={'text'} id={'nome'} text={'Nome'}/>
                    <Input placeholder={'Insira sua senha..'} type={'password'} id={'senha'} text={'Senha'}/>

                    <button type={'submit'} className={'btn'}>Entrar</button>

                    <Link to={'/'}>Perdeu sua <span>senha?</span> </Link>
                </form>

                <h3>Cadastro</h3>
                <span>Ainda não é cadastrado?</span>
                <Link className={'btn cadastro'} to={'/'}>Cadastrar agora!</Link>
            </article>
        </main>
    );
}

export default Login;
import perfil from '../../assets/dog-perfil.png'
import Input from "../../components/input/input.jsx";
import {Link} from "react-router-dom";
import './login.css'

function Login() {
    return (
        <main id={'container_cadastro'}>
            <picture>
                <img src={perfil} alt=""/>
            </picture>

            <article>
                <form action="">
                    <h1>Login</h1>

                    <Input placeholder={'Insira seu nome..'} type={'text'} id={'nome'} text={'Nome'}/>
                    <Input placeholder={'Insira sua senha..'} type={'password'} id={'senha'} text={'Senha'}/>

                    <button className={'btn'}>Entrar</button>

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
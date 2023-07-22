import React from 'react';
import Input from "../../../components/input/input.jsx";
import {Link, useNavigate, useOutletContext} from "react-router-dom";
import {sendUser} from "../../../utilities/API.jsx";

async function register(e){
    e.preventDefault()
}

function CreateUser() {
    const {setboasVindas} = useOutletContext()
    const navigate = useNavigate()
    const [error, setError] = React.useState(false)
    const [data, setData] = React.useState({
        username: null,
        password: null,
        email: null,
    })


    function register(e){
        e.preventDefault()
        if(data.username && data.password && data.email){
            sendUser(data)
                .then(res =>{
                    if(res)
                    {
                        console.log(res)
                        setboasVindas(true)
                        navigate('/login')
                    }
                    else{
                        console.log('erro')
                    }
            })
        }
        else{
            setError(true)
        }
    }

    return (
        <article id={'container_createUser'} className={'show'}>
            <h1>Cadastre-se</h1>

            <form action="" onSubmit={register}>
                <Input id={'username'} type={'text'} text={'Nome'} placeholder={'nome de usuário'} setState={setData}/>

                <Input id={'email'} type={'text'} text={'Email'} placeholder={'email@email.com'} setState={setData}/>

                <Input id={'password'} type={'password'} text={'Senha'} placeholder={''} setState={setData}/>

                {error && <p className={'error'}>Preencha todos os dados.</p>}

                <button className={'btn'} type={'submit'}>Registrar!</button>

            </form>

            <h3>Login</h3>
            <span>Já é cadastrado?</span>
            <Link className={'btn cadastro'} to={'/login'}>Fazer Login.</Link>

        </article>
    );
}

export default CreateUser;
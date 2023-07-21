import React from 'react';
import Input from "../../../components/input/input.jsx";
import './createPost.css'
import Loading from "../../../components/loading/Loading.jsx";
import {useNavigate} from "react-router-dom";
import {sendPost} from "../../../utilities/API.jsx";

function CreatePost() {
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = React.useState(false)
    const [postInfo, setPostInfo] = React.useState({
        nome: null,
        peso: null,
        idade: null,
        imagem: null
    })

    async function handlePost(e){
        setIsLoading(true)
        e.preventDefault()
        sendPost(postInfo).then((res)=>{
            if(res){
                setIsLoading(false)
                navigate('/conta')
            }

        })
    }

    return (
        <>
            {isLoading && <Loading/>}
            <article className={'show'}>

                <h1>Poste sua foto</h1>

                <form action="" onSubmit={handlePost}>
                    <Input id={`nome`} placeholder={`Nome do animalzinho`} type={'text'} text={`Nome`} setState={setPostInfo}/>

                    <Input id={`peso`} placeholder={`peso`} type={'number'} text={`Peso`} setState={setPostInfo}/>

                    <Input id={`idade`} placeholder={`Idade`} type={'number'} text={`Idade`} setState={setPostInfo}/>

                    <Input id={`imagem`} placeholder={`img do animalzinho`} type={'file'} text={``} setState={setPostInfo}/>

                    <button className={'btn'}>Enviar</button>

                </form>


                {

                    postInfo.imagem  && (
                        <section id={'preview'} className={'show'}>
                            <h2>Preview:</h2>
                            <picture>
                                <img src={URL.createObjectURL(postInfo.imagem)} alt=""/>
                            </picture>
                        </section>
                    )
                }
            </article>

        </>

    );
}

export default CreatePost;
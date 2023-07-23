import './modalPostagem.css'
import React from "react";
import {deletePost, getComents, sendComment} from "../../utilities/API.jsx";
import {Storage} from "../../context-hooks/GlobalStorage.jsx";
import Loading from "../loading/Loading.jsx";



function ModalPostagem() {
    const storage = React.useContext(Storage)
    const [comentarios, setComentarios] = React.useState(null)
    const btn_submit = React.useRef()
    const [deleting, setDeleting] = React.useState(false)

    React.useEffect(()=>{
        console.log('carregou modal')
        getComents(storage.modal.id)
            .then((comentarios)=> setComentarios(comentarios))
    }, [])


    function handleDelete(){
        setDeleting(true)
        deletePost(storage.modal.id).then(res=>{
            if(res)
            {
                setDeleting(false)
                window.location.reload()
            }
        })
    }
    function handleComment(e){
        console.log('comentando..')
        e.preventDefault()
        const textArea = document.querySelector('#textarea_comment')
        const comment = textArea.value

        if(comment.length > 3){
            btn_submit.current.disabled = true
            btn_submit.current.classList.toggle('loading-comment')

            sendComment(storage.modal.id, comment).then((res)=>{
                if(res){
                    getComents(storage.modal.id).then((comentarios)=> {
                        textArea.value = ''
                        setComentarios(comentarios)
                        btn_submit.current.classList.toggle('loading-comment')
                        btn_submit.current.disabled = false
                    })
                }

                else{
                    console.log('não foi')
                }
            })

        }
    }

    return (
        <div  id={'modal'}>
            {deleting && <Loading msg={'deletando'}/>}
            <div id={'post'}>
                <picture>
                    <img src={storage.modal.src} alt=""/>
                </picture>

                <div id={'post_body'}>
                    <div id={'post_dados_postagem'}>
                        {storage.modal.author === storage.user.nome
                            ? <p id={'del_post'} onClick={handleDelete}>Deletar</p>
                            : <p id={'post_autor'}>{storage.modal.author} </p>}
                        <p>
                            <i className="fa-solid fa-eye"> </i>
                                <span id={'post_watches'}>{storage.modal.acessos}</span>
                            <i id={'btn_close'}
                               onClick={()=> storage.setModal(null)}
                               className="fa-solid fa-rectangle-xmark"></i>
                        </p>

                    </div>

                    <div id={'post_animal_dados'}>
                        <h1>{storage.modal.title}</h1>
                        <span id={'kg'}>{storage.modal.peso} kg </span>
                        <span id={'espacador'}>{' | '}</span>
                        <span id={'idade'}> {storage.modal.idade} anos </span>
                    </div>


                    <div id={'container_comentarios'}>
                        {
                            comentarios ? comentarios.map((comentario)=>{
                                return <p key={comentario.id}>
                                            <span className={'autor_comentario'}> {comentario.autor} </span>:
                                            <span> {comentario.conteudo} </span>
                                        </p>
                                }) : null
                        }
                    </div>

                    {storage.isLogged ?
                    <form id={'container_input'} onSubmit={handleComment}>
                        <textarea id={'textarea_comment'} placeholder={'Comentário fofinho..'} rows="3"></textarea>
                        <button ref={btn_submit} type={'submit'} id={'btn_submit'}>

                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 358.95 359.26"><g id="Camada_2" data-name="Camada 2"><g id="Camada_1-2" data-name="Camada 1"><path d="M140.64,135.65,103,113.05,74.14,95.73c-9.46-5.68-13.9-14-12.89-25,.76-8.32,1.49-16.64,2.45-24.94A17.77,17.77,0,0,1,86.59,30.52c25.76,7.28,51.49,14.69,77.27,21.88a10.33,10.33,0,0,0,6.33-.45c10.42-4.44,20.46-9.92,31.12-13.64,28.29-9.87,55.2-6.21,80.37,10.09.72.47,1.48.9,2.5,1.51,2.06-4.35,4.08-8.59,6.07-12.84,5-10.72,10-21.43,15-32.18,1.29-2.81,2.94-5,6.32-4.89,3.19.1,4.73,2.24,5.92,4.93,6.22,14.13,12.37,28.3,18.82,42.33,4.95,10.77,4.19,21.82,2.55,33-.7,4.81-1.38,9.62-1.86,14.46a14.29,14.29,0,0,0,.49,5.12q10.27,37.47,20.68,74.9c1.7,6.14.69,9.39-3.34,10.59s-6.5-1-8.24-7.31q-6.33-22.86-12.68-45.72a3.42,3.42,0,0,0-1.33-2q-1.23,9.44-2.45,18.87c-.25,2-.49,4-.75,5.94-.55,4.34-3.13,6.85-6.65,6.47s-5.77-3.38-5.26-7.65c1.27-10.52,2.65-21,4-31.54,2.23-17.94,4.56-35.86,6.56-53.82.4-3.63.33-7.72-1-11-4.76-12.26-10.12-24.29-15.59-37.18-1,2-1.67,3.1-2.21,4.27Q292.7,60,276.2,95.38c-.37.79-.71,1.6-1.11,2.37-1.84,3.51-4.86,4.81-8,3.46-3.32-1.44-4.55-4.73-2.87-8.45,3.13-6.92,6.42-13.77,9.62-20.66,1.67-3.59,3.31-7.2,5-10.93A77.25,77.25,0,0,0,241.1,45.61c-15.67-2.06-30.5.78-44.71,7.51C188.63,56.8,180.74,60.23,173,64a12.91,12.91,0,0,1-10,.82C144.61,59.42,126.15,54.22,107.72,49c-1.07-.31-2.15-.54-3.36-.84-6.78,11.67-17,17.21-30.23,17.08C71.2,76,73.26,81.25,82.4,86.74q37.18,22.32,74.34,44.69a11.77,11.77,0,0,1,4.51,4.65c1.48,3.17-.82,6.43-5,7.64-14.83,4.28-29.69,8.49-44.53,12.74L79.87,165.6A102,102,0,0,0,84,175.07c4,7.1,10.26,10.63,18.29,11.23,23.5,1.74,47,3.52,70.51,5.18a7.47,7.47,0,0,1,6.85,4.83q35.25,76.53,70.58,153c2,4.38,1.19,7.61-2.22,9.27s-6.58.14-8.71-4.46q-34-73.62-67.9-147.26c-1.27-2.76-2.83-3.83-5.82-4-21.52-1.44-43-2.93-64.54-4.66-13.88-1.13-23.76-8.21-29.33-21.08-1.68-3.88-3.28-7.8-4.86-11.73-2.15-5.36-.76-8.27,4.77-9.86q32.31-9.3,64.63-18.54C137.42,136.65,138.58,136.28,140.64,135.65ZM92.05,44.81C78.12,39,74.82,42.19,75.53,53.07,82.34,52.91,87.9,50.54,92.05,44.81Z"/><path d="M54.53,137.32c-1.53,2.25-2.48,4.54-4.16,5.94-9.09,7.54-18.33,14.9-27.61,22.21-3.48,2.74-7.25,2.54-9.36-.1s-1.42-6.4,2-9.17q13.86-11.32,27.91-22.43c2.28-1.82,5-2.63,7.62-1C52.32,133.66,53.13,135.5,54.53,137.32Z"/><path d="M47.83,82.36c.1,5.9-5.1,8.64-9.56,6.18s-8.76-5.18-13.13-7.8C20,77.67,14.89,74.64,9.81,71.52,6,69.19,5,65.91,6.84,62.78s5.3-3.76,9.1-1.51C25.34,66.85,34.75,72.41,44,78.19,45.83,79.32,47,81.45,47.83,82.36Z"/><path d="M20.81,119.72c-4.74,0-9.48.07-14.21,0-4.07-.07-6.67-2.55-6.6-6.08s2.59-5.81,6.45-5.84q14.4-.12,28.81,0c4.06,0,6.67,2.55,6.6,6.07s-2.67,5.8-6.83,5.86C30.3,119.77,25.55,119.73,20.81,119.72Z"/><path d="M227.51,83.92a12,12,0,1,1-11.75-12.09A12,12,0,0,1,227.51,83.92Z"/></g></g></svg>
                        </button>
                    </form> : null
                    }
                </div>
            </div>
        </div>
    );
}

export default ModalPostagem;
import './modalPostagem.css'
import submit from '../../assets/auau.png'
import React from "react";
import {GlobalStorage} from "../../App.jsx";
import {getComents} from "../../ utilities/getComents.jsx";
function ModalPostagem() {
    const global = React.useContext(GlobalStorage)
    const [comentarios, setComentarios] = React.useState(null)

    React.useEffect(()=>{
        if(global.modal.total_comments >= 1){
            getComents(global.modal.id).then((comentarios)=> console.log(comentarios))
            // setComentarios(comentarios)
        }
    }, [])

    return (
        <div  id={'modal'}>
            <div id={'post'}>
                <picture>
                    <img src={global.modal.src} alt=""/>
                </picture>

                <div id={'post_body'}>
                    <div id={'post_dados_postagem'}>
                        <p id={'post_autor'}>{global.modal.author}</p>
                        <p>  <i className="fa-solid fa-eye"></i> <span id={'post_watches'}>{global.modal.acessos}</span>  <i id={'btn_close'} onClick={()=> global.setModal(null)} className="fa-solid fa-rectangle-xmark"></i> </p>

                    </div>

                    <div id={'post_animal_dados'}>
                        <h1>{global.modal.title}</h1>
                        <span id={'kg'}>{global.modal.peso} kg </span>
                        <span id={'espacador'}>{' | '}</span>
                        <span id={'idade'}> {global.modal.idade} anos </span>
                    </div>


                    <div id={'container_comentarios'}>
                        {
                            comentarios ?
                                <p> <span className={'autor_comentario'}> pessoa </span>: <span>comentário </span></p> : null
                        }
                    </div>
                    
                    {global.user ?
                    <div id={'container_input'}>
                        <textarea placeholder={'Comentário fofinho..'} rows="3"></textarea>
                        <button id={'btn_submit'}><img src={submit} alt=""/></button>
                    </div> : null
                    }
                </div>
            </div>
        </div>
    );
}

export default ModalPostagem;
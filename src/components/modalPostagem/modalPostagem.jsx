import './modalPostagem.css'
import submit from '../../assets/auau.png'
import React from "react";
import {GlobalStorage} from "../../App.jsx";
function ModalPostagem() {
    const setModal = React.useContext(GlobalStorage)

    return (
        <div  id={'modal'}>
            <div id={'post'}>
                <picture>
                    <img src="./placeholder.png" alt=""/>
                </picture>

                <div id={'post_body'}>
                    <div id={'post_dados_postagem'}>
                        <p id={'post_autor'}>Nome</p>
                        <p>  <i className="fa-solid fa-eye"></i> <span id={'post_watches'}>100</span>  <i id={'btn_close'} onClick={()=> setModal((prev)=>!prev)} className="fa-solid fa-rectangle-xmark"></i> </p>

                    </div>

                    <div id={'post_animal_dados'}>
                        <h1>Nome</h1>
                        <span id={'kg'}>10 kg </span>
                        <span id={'espacador'}>{' | '}</span>
                        <span id={'idade'}> 5 anos </span>
                    </div>

                    <div id={'container_comentarios'}>
                        <p> <span className={'autor_comentario'}> pessoa </span>: <span>comentário </span></p>

                        <p> <span className={'autor_comentario'}> pessoa </span>: <span>comentário comentáriocomentário comentáriocomentário comentário comentário comentário </span></p>

                    </div>

                    <div id={'container_input'}>
                        <textarea placeholder={'Comentário fofinho..'} rows="3"></textarea>
                        <button id={'btn_submit'}><img src={submit} alt=""/></button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ModalPostagem;
import React from "react";
import './cardPostagem.css'
import {Storage} from "../../../context-hooks/GlobalStorage.jsx";

function CardPostagem({dados}) {
    const storage = React.useContext(Storage)

    return (
        <picture key={dados.id} onClick={()=> storage.setModal(dados)} className={'card_post show'}>
            <img src={dados.src} alt={dados.title} />
            <p> <span className={'watched'}>{dados.acessos}</span> <i className="fa-solid fa-eye"></i> </p>
        </picture>
    );
}

export default CardPostagem;
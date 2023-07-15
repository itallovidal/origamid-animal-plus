import React from "react";
import {GlobalStorage} from "../../../App.jsx";

function CardPostagem({dados}) {
    const global = React.useContext(GlobalStorage)

    return (
        <picture onClick={()=> global.setModal(dados)} className={'card_post'}>
            <img src={dados.src} alt={dados.title}/>
            <p> <span className={'watched'}>{dados.acessos}</span> <i className="fa-solid fa-eye"></i> </p>
        </picture>
    );
}

export default CardPostagem;
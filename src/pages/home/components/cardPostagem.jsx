import React from "react";
import {GlobalStorage} from "../../../App.jsx";

function CardPostagem() {
    const setModal = React.useContext(GlobalStorage)

    return (
        <picture onClick={()=> setModal((prev)=>!prev)} className={'card_post'}>
            <img src="./placeholder.png" alt=""/>
            <p> <span className={'watched'}>100</span> <i className="fa-solid fa-eye"></i> </p>
        </picture>
    );
}

export default CardPostagem;
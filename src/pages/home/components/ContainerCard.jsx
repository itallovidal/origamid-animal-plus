import React from 'react';
import CardPostagem from "./cardPostagem.jsx";

function ContainerCard({postagens}) {
    return (
        <article>
            {postagens.map((postagem, i)=> <CardPostagem key={i} dados={postagem}/>)}
        </article>
    );
}

export default ContainerCard;
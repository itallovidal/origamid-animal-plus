import React from 'react';
import CardPostagem from "./cardPostagem.jsx";

function ContainerPostagens({posts}) {
    return (
        <article>
            {
                posts.map(post => <CardPostagem key={post.id} dados={post}/>)
            }
        </article>
    );
}

export default ContainerPostagens;
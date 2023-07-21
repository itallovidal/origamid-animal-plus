import React from 'react';
import './listPosts.css'
import {Storage} from "../../../context-hooks/GlobalStorage.jsx";
import ModalPostagem from "../../../components/modalPostagem/modalPostagem.jsx";
import CardPostagem from "../../home/components/cardPostagem.jsx";
import {getUserPosts} from "../../../utilities/API.jsx";

function ListPosts() {
    const storage = React.useContext(Storage)
    const [posts, setPosts] = React.useState([])

    React.useEffect(()=>{
        if(storage.isLogged)
            getUserPosts(storage.user.id).then(res=> setPosts(res))

    }, [storage.isLogged])


    return (
        <>
            {storage.modal ? <ModalPostagem id={'/'}/> : null}
            { storage.isLogged && (
                <article className={'show'}>
                    <h1> Minha conta </h1>
                    <main id={'container_userPosts'}>
                        {
                            posts.length > 0 && (
                                posts.map((post)=> {
                                    return <CardPostagem key={post.id} dados={post}/>
                                })
                            )
                        }
                    </main>
                </article>
            )}

        </>
    );
}

export default ListPosts;
import './home.css'
import ContainerPostagens from "./components/ContainerPostagens.jsx";
import React from "react";
import {getPosts} from "../../ utilities/getPosts.jsx";
import ModalPostagem from "../../components/modalPostagem/modalPostagem.jsx";
import {GlobalStorage} from "../../App.jsx";


function Home() {
    const [posts, setPosts] = React.useState(null)
    const global = React.useContext(GlobalStorage)


    React.useEffect(()=>{
        getPosts(1).then((posts)=>{
            setPosts(posts)
        })
    }, [])

    return (
        <>
            {global.modal ? <ModalPostagem id={'/'}/> : null}
            <main id={'container_home'}>
                { posts ? <ContainerPostagens posts={posts}/> : null}
            </main>
        </>
    );
}

export default Home;
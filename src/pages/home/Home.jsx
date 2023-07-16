import './home.css'
import React from "react";
import {getPosts} from "../../ utilities/getPosts.jsx";
import ModalPostagem from "../../components/modalPostagem/modalPostagem.jsx";
import {GlobalStorage} from "../../App.jsx";
import ContainerPostagens from "./components/ContainerPostagens.jsx";

function Home() {
    const [posts, setPosts] = React.useState([])
    const [page, setPage] = React.useState(1)
    const global = React.useContext(GlobalStorage)



    React.useEffect(()=>{
        getPosts(page).then((posts)=>{
            if(posts.length >= 1)
                setPosts((prevPosts) => [...prevPosts, ...posts])

        })
    }, [page])

    return (
        <>
            {global.modal ? <ModalPostagem id={'/'}/> : null}
            <main id={'container_home'}>
                {
                    posts.map((item, index)=>{
                        return index % 6 === 0 ? posts.slice(index, index + 6) : ''
                    }).filter((item)=> item !== '').map((post, i)=> <ContainerPostagens key={i} posts={post}/>)
                }
            </main>
        </>
    );
}

export default Home;
import React from "react";
import './home.css'
import ModalPostagem from "../../components/modalPostagem/modalPostagem.jsx";
import {getPosts} from "../../utilities/API.jsx";
import CardPostagem from "./components/cardPostagem.jsx";
import {Storage} from "../../context-hooks/GlobalStorage.jsx";



function Home() {
    const storage = React.useContext(Storage)
    const [posts, setPosts] = React.useState([])
    const [end, setEnd] = React.useState(false)
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });


    function showPosts(){
        getPosts().then((posts)=>{
            if(posts.length > 0){
                setPosts((prevPosts) => [...prevPosts, ...posts])
            }
            else{
                setEnd(true)
            }
        })
    }


    React.useEffect(()=>{
        showPosts()
    }, [])



    return (
        <>
            {storage.modal ? <ModalPostagem id={'/'}/> : null}
            <main id={'container_home'}>
                {posts.length && (
                    <article >
                        <CardPostagem dados={posts[0]}/>
                        <CardPostagem dados={posts[1]}/>
                        <CardPostagem dados={posts[2]}/>
                        <CardPostagem dados={posts[3]}/>
                        <CardPostagem dados={posts[4]}/>
                        <CardPostagem dados={posts[5]}/>
                    </article>
                )}

                {end && <p id={'semPostagens'}>Sem mais postagens.</p>}
            </main>
        </>
    );
}

export default Home;

// {/*{*/}
// {/*    posts.map((item, index)=>{*/}
// {/*        return index % 6 === 0 ? posts.slice(index, index + 6) : ''*/}
// {/*    }).filter((item)=> item !== '').map((post, i)=> <ContainerPostagens key={i} posts={post}/>)*/}
// {/*}*/}
import './home.css'
import React from "react";
import {getPosts} from "../../ utilities/getPosts.jsx";
import ModalPostagem from "../../components/modalPostagem/modalPostagem.jsx";
import {GlobalStorage} from "../../App.jsx";
import ContainerPostagens from "./components/ContainerPostagens.jsx";
// let page
// // window.addEventListener('scroll', showMore)
// function showMore() {
//     const main = document.querySelector('main')
//     const endpoint = main.getBoundingClientRect().bottom
//     if(endpoint < screen.height){
//         removeEventListener('scroll', showMore)
//         showPosts()
//     }
// }


function Home() {
    const global = React.useContext(GlobalStorage)
    const [posts, setPosts] = React.useState([])
    const [end, setEnd] = React.useState(false)
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });

    function showPosts(){
        getPosts().then((posts)=>{
            if(posts.length >= 1){
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
            {global.modal ? <ModalPostagem id={'/'}/> : null}
            <main id={'container_home'}>
                {
                    posts.map((item, index)=>{
                        return index % 6 === 0 ? posts.slice(index, index + 6) : ''
                    }).filter((item)=> item !== '').map((post, i)=> <ContainerPostagens key={i} posts={post}/>)
                }

                {end && <p id={'semPostagens'}>Sem mais postagens.</p>}
            </main>
        </>
    );
}

export default Home;
import React from "react";
import './home.css'
import ModalPostagem from "../../components/modalPostagem/modalPostagem.jsx";
import {getPosts} from "../../utilities/API.jsx";
import CardPostagem from "./components/cardPostagem.jsx";
import {Storage} from "../../context-hooks/GlobalStorage.jsx";
import ContainerCard from "./components/ContainerCard.jsx";


let count = 1

function Home() {
    const storage = React.useContext(Storage)
    const [groupedPosts, setGroupedPosts] = React.useState([])
    const [end, setEnd] = React.useState(false)


    React.useEffect(()=>{
        count = 1
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        showPosts()
    }, [])


    function showPosts(){
        getPosts(count).then((posts)=>{
            count++
            if(posts.length > 0){
                window.addEventListener('scroll', infiniteScroll)
                setGroupedPosts((prevPosts) => [...prevPosts, posts])

            }
            else{
                console.log('sem mais postagens')
                setEnd(true)
            }
        })
    }

    function infiniteScroll(){
        const footer = document.querySelector('footer')
        const screenHeight = window.screen.height
        const distTop = Math.round(footer.getBoundingClientRect().top)
        if(distTop < screenHeight){
            console.log('carregando postagem')
            window.removeEventListener('scroll', infiniteScroll)
            showPosts()
        }
    }



    return (
        <>
            {storage.modal ? <ModalPostagem id={'/'}/> : null}
            <main id={'container_home'}>
                {groupedPosts && (
                    groupedPosts.map((post,i)=> <ContainerCard key={i} postagens={post}/>)
                )}

                {end && <p id={'semPostagens'} className={'show'}>Sem mais postagens.</p>}
            </main>
        </>
    );
}

export default Home;

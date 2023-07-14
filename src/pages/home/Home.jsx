import './home.css'
import ContainerPostagens from "./components/ContainerPostagens.jsx";

function Home() {
    return (
        <main id={'container_home'}>
            <ContainerPostagens/>
            <ContainerPostagens/>
        </main>
    );
}

export default Home;
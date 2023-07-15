import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import Nav from "./components/nav/Nav.jsx";
import './app.css'
import Login from "./pages/login/login.jsx";
import Footer from "./components/footer/footer.jsx";
import ModalPostagem from "./components/modalPostagem/modalPostagem.jsx";
import React from "react";

export const GlobalStorage = React.createContext(null)

function App() {
    const [modal, setModal] = React.useState(false)
    const str = 'itallo'

  return (
    <BrowserRouter>
        <Nav/>
        <GlobalStorage.Provider value={setModal}>
            {modal && <ModalPostagem/>}
            <Routes>
                <Route index element={<Home/>}/>
                <Route path={'/login'} element={<Login/>}/>
            </Routes>
        </GlobalStorage.Provider>
        <Footer/>
    </BrowserRouter>
  )
}

export default App

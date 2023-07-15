import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import Nav from "./components/nav/Nav.jsx";
import './app.css'
import Login from "./pages/login/login.jsx";
import Footer from "./components/footer/footer.jsx";
import React from "react";
export const GlobalStorage = React.createContext(null)


function App() {
    const str = 'itallo'
    const [modal, setModal] = React.useState(null)
    const [user, setUser] = React.useState(null)

  return (
    <BrowserRouter>
        <Nav/>
        <GlobalStorage.Provider value={{setModal, modal, user, setUser}}>
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

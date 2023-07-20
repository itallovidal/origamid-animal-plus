import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import Nav from "./components/nav/Nav.jsx";
import './app.css'
import Login from "./pages/login/login.jsx";
import Footer from "./components/footer/footer.jsx";
import React from "react";
import LoginForm from "./pages/login/LoginForm/LoginForm.jsx";
import CreateUser from "./pages/login/CreateUser/CreateUser.jsx";
import {getUser} from "./ utilities/getUser.jsx";
export const GlobalStorage = React.createContext(null)


function App() {
    const [modal, setModal] = React.useState(null)
    const [user, setUser] = React.useState({
        id: null,
        username: null,
        nome: null,
        email: null,
    })

    React.useEffect(()=>{
        const token = localStorage.getItem('userToken')

        if(token){
            getUser(token).then((response)=>{
                console.log(response)
                setUser({...response})
            })
        }
    }, [])

  return (
    <BrowserRouter>
        <GlobalStorage.Provider value={{setModal, modal, user, setUser}}>
            <Nav/>
            <Routes>
                <Route index element={<Home/>}/>
                <Route path={'/login/'} element={<Login/>}>
                    <Route path={''} element={<LoginForm/>}/>
                    <Route path={'create'} element={<CreateUser/>}/>
                </Route>
            </Routes>
        </GlobalStorage.Provider>

        <Footer/>
    </BrowserRouter>
  )
}

export default App

import React from "react";
import './app.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import Nav from "./components/nav/Nav.jsx";
import Login from "./pages/login/login.jsx";
import Footer from "./components/footer/footer.jsx";
import LoginForm from "./pages/login/LoginForm/LoginForm.jsx";
import CreateUser from "./pages/login/CreateUser/CreateUser.jsx";
import {getUser} from "./ utilities/getUser.jsx";
import UserAccount from "./pages/UserAccount/UserAccount.jsx";
import CreatePost from "./pages/UserAccount/components/CreatePost.jsx";
import ListPosts from "./pages/UserAccount/components/ListPosts.jsx";
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

                <Route path={'/conta'} element={<UserAccount/>}>
                    <Route path={''} element={<ListPosts/>}/>
                    <Route path={'postar'} element={<CreatePost/>}/>
                </Route>
            </Routes>
        </GlobalStorage.Provider>

        <Footer/>
    </BrowserRouter>
  )
}

export default App

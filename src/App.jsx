import {BrowserRouter, Route, Routes} from "react-router-dom";
import React from "react";
import './app.css'
import Home from "./pages/home/Home.jsx";
import Nav from "./components/nav/Nav.jsx";
import Login from "./pages/login/login.jsx";
import Footer from "./components/footer/footer.jsx";
import LoginForm from "./pages/login/LoginForm/LoginForm.jsx";
import CreateUser from "./pages/login/CreateUser/CreateUser.jsx";
import UserAccount from "./pages/UserAccount/UserAccount.jsx";
import CreatePost from "./pages/UserAccount/components/CreatePost.jsx";
import ListPosts from "./pages/UserAccount/components/ListPosts.jsx";
import {GlobalStorage} from "./context-hooks/GlobalStorage.jsx";
function App() {

  return (
    <BrowserRouter>
        <GlobalStorage>
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
        </GlobalStorage>
        <Footer/>
    </BrowserRouter>
  )
}


//


export default App

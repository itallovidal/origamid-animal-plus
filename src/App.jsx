import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import Nav from "./components/nav/Nav.jsx";
import './app.css'
function App() {

  return (
    <BrowserRouter>
        <Nav></Nav>
        <Routes>
            <Route index element={<Home/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App

import icon from '../../assets/icon-animals.png'
import {useNavigate} from "react-router-dom";
import './nav.css'
import React from "react";
import {GlobalStorage} from "../../App.jsx";
import UserLogged from "./UserLogged.jsx";
import UserUnlogged from "./UserUnlogged.jsx";
function Nav() {
    const [isLogged, setIsLogged ] = React.useState(false)
    const global = React.useContext(GlobalStorage)
    const navigate = useNavigate()

    React.useEffect(()=>{
        if(global.user.id){
            setIsLogged(prevState => !prevState)
        }

    }, [global.user.id])

    console.log(global.user.id)
    console.log(isLogged)

    return (
        <div id={'container_nav'}>
                <picture id={'container_icon'}>
                    <img onClick={()=> navigate('/')} src={icon} alt=""/>
                </picture>

                <nav>
                    { isLogged === true ? <UserLogged/> : <UserUnlogged/>}
                </nav>
        </div>
    );
}

export default Nav;
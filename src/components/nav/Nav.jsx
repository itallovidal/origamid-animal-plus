import icon from '../../assets/icon-animals.png'
import {Link, useNavigate} from "react-router-dom";
import perfil from '../../assets/perfil.png'
import './nav.css'

function Nav() {
    const navigate = useNavigate()
    return (
        <div id={'container_nav'}>
                <picture id={'container_icon'}>
                    <img onClick={()=> navigate('/')} src={icon} alt=""/>
                </picture>

                <nav>
                    <Link to={'/login'}> Login / Registro  </Link>
                    <picture id={'container_img_perfil'}>
                        <img src={perfil} alt=""/>
                    </picture>
                </nav>
        </div>
    );
}

export default Nav;
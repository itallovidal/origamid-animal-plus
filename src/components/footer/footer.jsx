import React from 'react';
import img from '../../assets/icon-footer.png'
import './footer.css'

function Footer() {
    return (
        <footer>
            <h3>
                Todos direitos Reservados. <br/> Alguns, na verdade. <br/>
                Ok, talvez nenhum.
            </h3>

            <picture>
                <img src={img} alt=""/>
            </picture>
        </footer>
    );
}

export default Footer;
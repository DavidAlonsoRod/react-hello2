//importar react// c
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

//crear el componente
const Nav = ()=>{
    return(
        <nav className="navbar navbar-expand-lg bg-dark data-bs-theme=">
        < div className="container-fluid" >
            <a className="navbar-brand text-white p-1" href="https://dpalbum.es/" target="blank">Dp Álbum</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse text-white justify-content-end" id="navbarNavDropdown">
                <ul className="navbar-nav">
                   
                    <li className="nav-item">
                        <a className="nav-link text-white" href="https://dpalbum.es/mi-cuenta/">Registrarse</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-white" href="https://wa.me/34615404900"><FontAwesomeIcon icon={faWhatsapp} /> Contactar</a>
                    </li>
                    
                    
                </ul>
            </div>
        </div>
    </nav>   )
}
//exportar componente
export default Nav
//Importar compoente
// usarlo

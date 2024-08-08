//importar react// c
import React from "react";

//crear el componente
const Nav = ()=>{
    return(
        <nav className="navbar navbar-expand-lg bg-dark data-bs-theme=">
        < div className="container-fluid" >
            <a className="navbar-brand text-white padding-left*3" href="#">Start Bootstrap</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse text-white justify-content-end" id="navbarNavDropdown">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link active text-white" aria-current="page" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-white" href="#">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-white" href="#">Contact</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-white" href="#">Services</a>
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

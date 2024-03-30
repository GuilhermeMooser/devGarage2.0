import { useContext } from 'react'
import {Link} from 'react-router-dom';

/* Styles and Bootstrap */
import 'bootstrap/dist/css/bootstrap.min.css';
// @ts-ignore
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './header.css';
import '../../assets/style.css';

import {AuthContext} from '../../contexts/auth'

/* Importing images */
import logoImage from '../../assets/imgs/logoSvg.svg'

function Header() {
    const { logout } = useContext(AuthContext);

    return(
        <header className="headerFull">
                <nav className="navbar navbar-expand-md navbar-light fixed-top navbar-transparente">
                    <div className="container">
                        <Link to="/home" className="navbar-brand">
                            <img src={logoImage} width="200" height="140" alt="Logo"></img>
                        </Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#nav-principal" aria-controls="nav-principal" aria-expanded="false" aria-label="Menu com os links principais">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="nav-principal">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <Link to="/home" className="nav-link">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/home" className="nav-link">Loja</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/classificados" className="nav-link">Classificados</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/comunidade" className="nav-link">Comunidade</Link>
                                </li>

                                <li className="nav-item divider"></li>

                                <li className="nav-item">
                                    <Link className="nav-link" onClick={ () => logout() }>Sair</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav> 
        </header>
    );
}

export default Header;
import {Link} from 'react-router-dom';

/* Styles and Bootstrap */
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './header.css';
import '../../assets/style.css';

/* FontAwesome */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

/* Importing images */
import logoImage from '../../assets/imgs/LOGO-removebg.png'

function Header() {
    return(
        <header>
                <nav className="navbar navbar-expand-md navbar-light fixed-top navbar-transparente">
                    <div className="container">
                        <Link to="/" className="navbar-brand">
                            <img src={logoImage} width="200" alt="Logo"></img>
                        </Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#nav-principal" aria-controls="nav-principal" aria-expanded="false" aria-label="Menu com os links principais">
                            <FontAwesomeIcon icon={faBars}/>
                        </button>
                        <div className="collapse navbar-collapse" id="nav-principal">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <Link to="/" className="nav-link">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/" className="nav-link">Loja</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/" className="nav-link">Classificados</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/relatorios" className="nav-link">Relatórios</Link>
                                </li>

                                <li className="nav-item divider"></li>

                                <li className="nav-item">
                                    <Link to="/" className="nav-link">Cadastrar</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/" className="nav-link">Entrar</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav> 
        </header>
    );
}

export default Header;
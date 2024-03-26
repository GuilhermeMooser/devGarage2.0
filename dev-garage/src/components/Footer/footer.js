import {Link} from 'react-router-dom';

/* Styles and Bootstrap */
import 'bootstrap/dist/css/bootstrap.min.css';
import './footer.css'
import '../../assets/style.css';

/* Importing images */
import logo from '../../assets/imgs/LOGO-removebg.png'

function Footer() {
    return(
        <>
            <footer>
                <div className="container">
                    <div className="d-flex justify-content-space-around">
                        <img src={logo} width="200" height="200" alt="Logo"></img>
                        <div>
                            <table>
                                <tr>
                                    <td>
                                        <Link to="/">FAQ</Link>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <Link to="/">Suporte</Link>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <Link to="/">Sobre nós</Link>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <Link to="/">Políticas</Link>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <Link to="/">Termos de uso</Link>
                                    </td>
                                </tr>
                            </table>
                            <form action="">
                                <div className="mt-3">
                                    <label htmlFor="email">Me mantenha avisado</label><br></br>
                                    <input type="text" name="email" id="email" placeholder="E-mail"></input>
                                </div>
                                <div className="mt-1">
                                    <input type="submit" value="Enviar"></input>
                                </div>
                            </form>
                        </div>
                    </div>
                    <span className="pb-4">&copy; Copyright 2000-2023 Todos os direitos reservados</span>
                </div>
            </footer>
        </>
    );
}

export default Footer;
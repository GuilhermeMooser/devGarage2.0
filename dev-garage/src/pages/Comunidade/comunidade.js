import { useState, useEffect } from 'react';

import Header from "../../components/Header/header"
import Footer from "../../components/Footer/footer"

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './comunidade.css'
import '../../assets/style.css'

import chat from '../../assets/imgs/chat.svg'
import share from '../../assets/imgs/share.svg'
import like from '../../assets/imgs/heart.svg'
import excluir from '../../assets/imgs/x-lg.svg'
import add from '../../assets/imgs/plus-circle.svg'
import editar from '../../assets/imgs/pencil-square.svg'

export default function Comunidade() {
    
    const [autor, setAutor] = useState('');
    const [descricao, setDescricao] = useState('');
    const [titulo, setTitulo] = useState('');

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        async function loadLivros() {
            const unsub = onSnapshot(collection(db, "posts"), (snapshot) => {
                let listaLivros = [];
                snapshot.forEach((doc) => {
                    listaLivros.push({
                        id: doc.id,
                        autor: doc.data().autor,
                        descricao: doc.data().descricao,
                        titulo: doc.data().titulo,
                    })
                })
                setPosts(listaPost);
            })
        }
        loadLivros();
    }, [])
    
    return(
        <>
            <Header/>
                <div className='firstSection'>
                    <section className="d-flex mb-5 espacoTopo fullAlignFlex" id="garagem">
                        <div className="container align-self-center">
                            <h1>Comunidade</h1>
                            
                            <div className="addPost mt-3">
                                <h2><img src={add} alt="adicionar" width={25} className="mb-1"></img> Criar Post</h2>
                            </div>
                            
                            <div className="mt-4 communityAlign">
                                <div className="postComunidade">
                                    <div className="row">
                                        <div className="d-flex">
                                            <h5 className="nomeComunidade"><strong>/u:&nbsp;</strong> Moser</h5>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <h3 className="tituloComunidade">Tunnar o carro</h3>
                                    </div>
                                    <div className="descricaoComunidade mb-2">
                                        Duis non neque vitae magna ullamcorper egestas. Aenean porta non metus quis fringilla. Duis dig
                                        nissim ante diam, quis dignissim dolor sollicitudin sit amet. Fusce a est sed orci maximus cons
                                        ectetur. Curabitur id pellentesque sem. Proin ac sem posuere, interdum turpis non, gravida just
                                        . Vivamus sed laoreet ex. Fusce consectetur risus sit amet risus fermentum, id facilisis massa 
                                    </div>
                                    <div className="acoesComunidade">
                                        <img src={like} alt="curtir" className="imgComunidade"></img>
                                        <img src={chat} alt="comentar" className="imgComunidade"></img>
                                        <img src={share} alt="compartilhar" className="imgComunidade"></img>
                                        <img src={editar} alt="editar" className="imgComunidade"></img> 
                                        <img src={excluir} alt="excluir" className="imgComunidade"></img> 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            <Footer/>
        </>
    );
}
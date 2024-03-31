import { useState, useEffect, useRef } from 'react';

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

import { db } from '../../services/firebaseConnection';
import {
    doc,
    setDoc,
    collection,
    addDoc,
    getDoc,
    getDocs,
    updateDoc,
    deleteDoc,
    onSnapshot
} from 'firebase/firestore';

import { toast } from 'react-toastify'

export default function Comunidade() {
    
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);

    const [autor, setAutor] = useState('');
    const [descricao, setDescricao] = useState('');
    const [titulo, setTitulo] = useState('');

    const [posts, setPosts] = useState([]);

    /**
     * Componente Modal
     */
    const ModalComunidade = ({ isOpen, onClose, selectedItem }) => {
        const [titulo, setTitulo] = useState("");
        const [descricao, setDescricao] = useState("");

        useEffect(() => {
            if (selectedItem && selectedItem.titulo && selectedItem.descricao) {
                setTitulo(selectedItem.titulo);
                setDescricao(selectedItem.descricao);
            }
        }, [selectedItem]);

        const handleTituloChange = (e) => {
            setTitulo(e.target.value);
        };
    
        const handleDescricaoChange = (e) => {
            setDescricao(e.target.value);
        };

        /**
         * PUT */ 
        async function editarPost(post) {
            const docRef = doc(db, "posts", post);

            await updateDoc(docRef, {
            titulo: titulo,
            descricao: descricao,
            }).then(() => {
            toast.success("Post atualizado com sucesso!")
            setTitulo("");
            setDescricao("");
            setModalOpen(false);
            })
            .catch((error) => {
                console.log(error);
            })
        }

        if (!isOpen || !selectedItem) return null;
        return (
        <div className="modal-overlay-edit">
            <div className="modal-content" id="comunidadeCrud">
            <span className="close-edit" onClick={onClose}>&times;</span>
                <h2>Edição</h2>
                <h4 className='mt-2'><strong>Autor:</strong> {selectedItem.autor}</h4>

                <label>Título:</label>
                <input value={titulo} onChange={handleTituloChange}></input>

                <label>Descrição:</label>
                <textarea rows="8" type="text" value={descricao} onChange={handleDescricaoChange} className='mb-5'></textarea>
                <button className='btn btn-danger' onClick={() => editarPost(selectedItem.id)}>
                    Salvar alterações
                </button>
            </div>
        </div>
        );
    };

    const handleItemClick = (item) => {
        setSelectedItem(item);
        setModalOpen(true);
    };

    /**
     * GET */ 
    useEffect(() => {
        async function loadPosts() {
            const unsub = onSnapshot(collection(db, "posts"), (snapshot) => {
                let listaPost = [];
                snapshot.forEach((doc) => {
                    listaPost.push({
                        id: doc.id,
                        autor: doc.data().autor,
                        descricao: doc.data().descricao,
                        titulo: doc.data().titulo,
                    })
                })
                setPosts(listaPost);
            })
        }
        loadPosts();
    }, [])

    /**
     * POST */ 
    async function excluirPost(id) {
        const docRef = doc(db, "posts", id);
        await deleteDoc(docRef)
        .then(() => {
            toast.success("Post excluído!")
        }).catch((error) => {
            console.log(error);
        });
    }
    
    /**
     * CREATE */
    async function handleRegister(e){
        e.preventDefault();
    
        await addDoc(collection(db, "posts"), {
            autor: autor,
            titulo: titulo,
            descricao: descricao,
        }).then(() => {
            toast.success("Post criado com sucesso!")
            setAutor("");
            setTitulo("");
            setDescricao("");
        }).catch((error) => {
            toast.error("Houve um erro!");
            console.log("ERRO " + error);
        });
    
    }

    const todosCamposPreenchidos = autor.trim() !== '' && titulo.trim() !== '' && descricao.trim() !== '';

    const elementoDesejadoRef = useRef(null);

    const scrollToElement = () => {
        if (elementoDesejadoRef.current) {
            elementoDesejadoRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return(
        <>
            <Header/>
                <div className='firstSectionComunidade'>
                    <section className="d-flex mb-5 espacoTopo fullAlignFlex">
                        <div className="container align-self-center comunidadeTopo">
                            <h1>Comunidade</h1>
                            
                            <a onClick={scrollToElement}>
                                <div className="addPost mt-3">
                                    <h2><img src={add} alt="adicionar" width={25} className="mb-1" ></img> Criar Post</h2>
                                </div>
                            </a>
                            <div className="mt-4 communityAlign">
                                <ul>
                                    {posts.map((post) => {
                                        return (
                                            <div className="postComunidade">
                                                <li key={post.id}>
                                                    <div className="row">
                                                        <div className="d-flex">
                                                            <h5 className="nomeComunidade"><strong>/u:&nbsp;</strong> {post.autor}</h5>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <h3 className="tituloComunidade">{post.titulo}</h3>
                                                    </div>
                                                    <div className="descricaoComunidade mb-2">
                                                        {post.descricao} 
                                                    </div>
                                                    <div className="acoesComunidade">
                                                        <img src={like} alt="curtir" className="imgComunidade"></img>
                                                        <img src={chat} alt="comentar" className="imgComunidade"></img>
                                                        <img src={share} alt="compartilhar" className="imgComunidade"></img>
                                                        <img src={editar} alt="editar" className="imgComunidade"  onClick={() => handleItemClick(post)}></img> 
                                                        <img src={excluir} alt="excluir" className="imgComunidade" onClick={() => excluirPost(post.id)}></img> 
                                                    </div>
                                                </li>
                                            </div>
                                        )
                                    })}
                                </ul>
                            </div>
                            
                    
                            <ModalComunidade isOpen={modalOpen} onClose={() => setModalOpen(false)} selectedItem={selectedItem}/>
                        </div>
                    </section>
                    <section className="d-flex espacoTopo fullAlignFlex" id="criarPost" ref={elementoDesejadoRef}>
                            <div className="container align-self-center">
                                <h1>Criar Post</h1>
                                <div className="container adicaoFlex" id="adicao">
                                    <div className='d-flex justify-content-center'>
                                        <form onSubmit={handleRegister} className='formAdicao'>
                                            <div className="form-group">
                                                <label htmlFor="description">Autor:</label>
                                                <input type="text" className="form-control" id="autor" name="autor" value={autor} onChange={(e) => setAutor(e.target.value)}/>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="name">Título do Post:</label>
                                                <input type="text" className="form-control" id="titulo" name="titulo" value={titulo} onChange={(e) => setTitulo(e.target.value)}/>
                                            </div>
                                            
                                            <div className="form-group">
                                                <label htmlFor="description">Descrição:</label>
                                                <textarea rows="4" className="form-control" id="descricao" name="descricao" value={descricao} onChange={(e) => setDescricao(e.target.value)}></textarea>
                                            </div>
                                            <button type="submit" className="btn btn-danger mt-4 mb-4" disabled={!todosCamposPreenchidos}>Criar Post</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </section>
                    <hr className="divisor mt-5"></hr>
                </div>
            <Footer/>
        </>
    );
}
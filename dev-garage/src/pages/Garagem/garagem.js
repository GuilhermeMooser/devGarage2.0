import Header from "../../components/Header/header"
import Footer from "../../components/Footer/footer"
import React, { useState, useEffect } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './garagem.css'
import '../../assets/style.css'

import jsonData from '../../garagemJson.json'
import AdicaoGaragem from './AdicaoGaragem/adicaoGaragem'

// Componente de Modal
const Modal = ({ isOpen, onClose, selectedItem }) => {
    if (!isOpen || !selectedItem) return null;
    return (
      <div className="modal-overlay">
        <div className="modal-content">
          <span className="close" onClick={onClose}>&times;</span>
            <h2>{selectedItem.name}</h2>
            <img src={selectedItem.image} alt={selectedItem.name} className="imgModal"/>
            <p className="mt-2"><em>{selectedItem.description}</em></p>
            <p><strong>Author:</strong> {selectedItem.author}</p>
        </div>
      </div>
    );
};

export default function Garagem() {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    const [data, setData] = useState([]);

    const handleItemClick = (item) => {
        setSelectedItem(item);
        setModalOpen(true);
    };
    
    const addItemToList = (newItem) => {
        setData([...data, newItem]);
    };

    useEffect(() => {
        var listaDoces = [...jsonData];
        setData(listaDoces);
    }, []);

    return (
        <>
        <Header/>
            <div className='firstSection'>
                <div>
                    <section className="d-flex mb-5 espacoTopo fullAlignFlex" id="garagem">
                        <div className="container align-self-center">
                            <h1>Garagem</h1>

                            <div className="d-flex mt-5 flex-wrap justify-content-center gap-2">
                                {data.map(item => (
                                    <div key={item.id} onClick={() => handleItemClick(item)} className='col-md-12 col-lg-6 col-xl-4 estilizaImg' style={{ cursor: 'pointer' }}>
                                            <h3><strong>{item.name}</strong></h3>
                                            <img src={item.image} alt={item.name} style={{ maxWidth: '350px', height: '260px' }} className="imgEspecifico"/>
                                            <p><strong>{item.author}</strong></p>
                                    </div>
                                ))} 
                            </div>
                            <hr className="divisorAdicaoGaragem mb-5"></hr>
                            <AdicaoGaragem addItemToList={addItemToList} />
                            <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} selectedItem={selectedItem} />
                        </div>
                    </section>
                </div>
            </div>
        <Footer/>
        </>
    );
}
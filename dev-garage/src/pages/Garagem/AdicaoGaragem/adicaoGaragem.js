import React, { useState } from 'react';

/* Styles and Bootstrap */
import 'bootstrap/dist/css/bootstrap.min.css';
import './styleAdicao.css';
import '../../../assets/style.css';
import { toast } from 'react-toastify'

const AdicaoGaragem = ({ addItemToList }) => {
    const [newItem, setNewItem] = useState({ name: '', image: '', description: '', author: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewItem(prevItem => ({
            ...prevItem,
            [name]: value
        }));
    };

    const generateUniqueId = () => {
        // Gere um ID único (por exemplo, usando a função de data atual)
        return Date.now().toString();
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (newItem.name.trim() !== '' && newItem.image.trim() !== '' && newItem.description.trim() !== '' && newItem.author.trim() !== '') {
            const newItemWithId = { ...newItem, id: generateUniqueId() };
            addItemToList(newItemWithId);
            toast.success("Post adicionado !")
            setNewItem({ name: '', image: '', description: '', author: '' });
        }
    };

    return (
        <div className="container adicaoFlex" id="adicao">
            <h2>Adicionar Novo Item</h2>
            <div className='d-flex justify-content-center'>
                <form onSubmit={handleSubmit} className='formAdicao'>
                    <div className="form-group">
                        <label htmlFor="name">Nome do Post:</label>
                        <input type="text" className="form-control" id="name" name="name" value={newItem.name} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="image">URL da Imagem:</label>
                        <input type="text" className="form-control" id="image" name="image" value={newItem.image} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Autor:</label>
                        <input type="text" className="form-control" id="author" name="author" value={newItem.author} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Descrição:</label>
                        <textarea className="form-control" id="description" name="description" value={newItem.description} onChange={handleChange}></textarea>
                    </div>
                    <button type="submit" className="btn btn-danger mt-4 mb-4">Adicionar Item</button>
                </form>
            </div>
        </div>
    );
};

export default AdicaoGaragem;
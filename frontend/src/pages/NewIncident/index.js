
import React, { useState } from 'react';
import './styles.css';
import { Link, useHistory} from 'react-router-dom';
import logoSvg  from '../../assets/logo.svg';
import { FiArrowLeft } from 'react-icons/fi';
import api from '../../services/api';
export default function NewIncident(){
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');
    const ongId = localStorage.getItem('ongId');
    const history = useHistory();
    async function handleNewIncident(e){
        e.preventDefault();
        try{
            const data = {
                title,
                description,
                value
            }
            await api.post('incident', data, {
                headers: {
                    Authorization: ongId
                }
            });

            history.push('/profile');
        }catch(err){

        }
    }
    return(
        <div className="new-incident-container">
            <div className="content">
                <section>
                    <img src={logoSvg} alt="Be the Hero Logo"/>
                    <h1>Cadastrar novo caso</h1>
                    <p>Descreva o caso detalhado para encontrar um herói para resolver isso.</p>
                    <Link to="/profile" className="back-link">
                        <FiArrowLeft size={16} color="#E02041"/>
                        Voltar para Home
                    </Link>
                </section>
                <form onSubmit={handleNewIncident}>
                    <input 
                        value={title}
                        onChange={(e => setTitle(e.target.value))}
                        placeholder="Titulo do caso"/>
                    <textarea 
                        value={description}
                        onChange={(e => setDescription(e.target.value))}
                        placeholder="Descrição"/>
                    <input 
                        value={value}
                        onChange={(e => setValue(e.target.value))}
                        placeholder="Valor em Reais"/>

                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}
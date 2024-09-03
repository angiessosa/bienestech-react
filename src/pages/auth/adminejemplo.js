import React, { useEffect, useState }  from 'react';
import axios from 'axios';

const AdminEj = () => {
    const [talleres, setTalleres] =  useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/talleresinicio')
        .then(response => {
            setTalleres(response.data);
        })
        .catch(error => {
            console.error('Hubo un error al obtener los talleres', error);
        });
    }, []);

    return (
        <div>
            <h1>Talleres</h1>
            <ul>
                {talleres.map(taller => (
                    <div key={taller.idTaller}>
                    <li>{taller.tema}</li>
                    <li>{taller.fechaYHora}</li>
                    <li>{taller.idFicha}</li>
                    </div>
                ))}
            </ul>
        </div>
    )

}

export default AdminEj;
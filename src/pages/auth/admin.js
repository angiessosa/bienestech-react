import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import Navbar  from '../../components/navbar';

import "./admin.css";

const baseUrl = "http://localhost:4000/talleres";


const ImagesB = require.context('../../assets', true);

const Admin = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const userRole = localStorage.getItem('userRole');

        if (!userRole || userRole !== 'Administrador') {
            // Si no hay un rol almacenado o no es un administrador, redirige al inicio de sesión
            navigate('/inicioSesion');
        }
    }, [navigate]);

    const handleLogout = () => {
        // Eliminar los datos de sesión almacenados en localStorage
        localStorage.removeItem('userRole');
        localStorage.removeItem('userName');

        // Redirigir al usuario a la página de inicio de sesión
        navigate('/', { replace: true });
    };

    const [talleres, setTalleres] = useState([]);

    useEffect(() => {
        const fetchTalleres = async () => {
            try {
                const response = await axios.get(baseUrl);
                setTalleres(response.data);
            } catch (error) {
                console.error("Error al obtener los talleres:", error);
            }
        };

        fetchTalleres();
    }, []);

    return (
        
        <div className="admin-container">
            <Navbar handleLogout={handleLogout} />
            
            <div className='container'>
                <h2 className='h2A'>Talleres de hoy</h2>
                <div className="row talleres">
                    {talleres.map(taller => (
                        <div key={taller.idTaller} className="col-md-6 mb-4 ">
                            <div className="taller-card">
                                <h3>ID Taller: {taller.idTaller}</h3>
                                <p><strong>Fecha:</strong> {taller.fechaTaller}</p>
                                <p><strong>Hora:</strong> {taller.horaTaller}</p>
                                <p><strong>Temática:</strong> {taller.tematica}</p>
                                <p><strong>ID Profesional:</strong> {taller.idProfesional}</p>
                                <p><strong>Nombre Profesional:</strong> {taller.nombre_profesional}</p>
                                <p><strong>Num Ficha:</strong> {taller.numFicha}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Admin;


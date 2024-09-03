import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import Navbar from '../../components/navbar';
import PiePagina from '../../components/piePagina';

import "./admin.css";

const baseUrl = "http://localhost:4000/talleres";


const ImagesB = require.context('../../assets', true);

const TalleresIn = () => {
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

    return (

        <div className="admin-container">
            {/*Navbar*/}
            <Navbar handleLogout={handleLogout} />

            <div className='container'>
                <h2 className='h2A'>Talleres</h2>
                <div className="row talleres">
                    <div className="col-sm-4 mb-3 mb-sm-0">
                        <div className="card c-t">
                            <img src={ImagesB('./agendar.png')} className="card-img-top img-card img-fluid" alt="Imagen del taller" />
                            <div className="card-body">
                                <Link to="/agendar" className="btn btn-success boton">AGENDAR</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4 mb-3 mb-sm-0">
                        <div className="card c-t">
                            <img src={ImagesB('./programacion.png')} className="card-img-top img-card img-fluid" alt="Imagen del taller" />
                            <div className="card-body">
                                <Link to="#" className="btn btn-success boton">PROGRAMACIÓN</Link>

                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4 mb-3 mb-sm-0">
                        <div className="card c-t">
                            <img src={ImagesB('./consultar.png')} className="card-img-top img-card img-fluid" alt="Imagen del taller" />
                            <div className="card-body">
                                <Link to="#" className="btn btn-success boton">CONSULTAR</Link>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <PiePagina />
        </div>
    );
};

export default TalleresIn;


import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../../components/navbar';
import PiePagina from '../../components/piePagina';

import "./admin.css";

const Perfil = () => {
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
        <div>
            <Navbar />
            <div className="fondooadmin">
                <div className="container containerr">
                    <div className="row justify-content-center">
                        <div className="col-md-6">
                            <h1 className="h1">Perfil</h1>
                            <form className="form-containerra perfiladmin">
                                <div className="mb-3">
                                    <label htmlFor="disabledSelect" className="form-label">Tipo Documento</label>
                                    <select id="disabledSelect" className="form-select">
                                        <option>Seleccione una opción..</option>
                                        <option>Cédula de Ciudadanía</option>
                                        <option>Cédula de extranjería</option>
                                    </select>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Número de Documento</label>
                                    <input type="text" className="form-control" placeholder="Ingresar.." />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Nombre Completo</label>
                                    <input type="text" className="form-control" placeholder="Ingresar.." />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label">Contraseña</label>
                                    <input type="password" className="form-control" id="exampleInputPassword1" />
                                </div>
                                <div className="d-flex justify-content-center">
                                    <Link to="/actuCoordi">
                                        <button className="butonimportar">
                                            <img
                                                width="16"
                                                height="16"
                                                src="https://img.icons8.com/tiny-color/16/refresh.png"
                                                alt="refresh"
                                                style={{ marginRight: 10 }} />
                                            Actualizar
                                        </button>
                                    </Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <PiePagina />
        </div>
    );
}

export default Perfil;

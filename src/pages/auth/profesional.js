import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import "./admin.css";

const ImagesB = require.context('../../assets', true);


const Prof = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const userRole = localStorage.getItem('userRole');

        if (!userRole || userRole !== 'Profesional') {
            // Si no hay un rol almacenado o no es un profesional, redirige al inicio de sesión
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

<nav className="navbar navbar-expand-lg nnnn">
                <div className="container-fluid">
                    <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
                    <li className="nav-item dropdown">
                        <Link className="nav-link dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                        <img className='justify-content-end logou' src={ImagesB('./usuario.png')} />
                        </Link>
                        <ul className="dropdown-menu">
                            <li><Link className="dropdown-item">Perfil</Link></li>
                            <li onClick={handleLogout} ><Link className="dropdown-item">Cerrar Sesion</Link></li>
                        </ul>
                    </li>
                    </ul>
                    <img className='justify-content-end logob' src={ImagesB('./logobienestech.png')} />
                </div>
            </nav>

            <h1>Bienvenido Profesioanl Bienestar</h1>
            {/* Otros elementos y componentes del panel de administración */}
            
        </div>
    );
};

export default Prof;
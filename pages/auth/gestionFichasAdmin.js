import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from '../../components/navbar';
import PiePagina from '../../components/piePagina';

const ImagesB = require.context('../../assets', true);


const GestionFichas = () => {
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

    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const turno = queryParams.get('turno') || 'diurna';

    const [selectedOption1, setSelectedOption1] = useState('');
    const [selectedOption2, setSelectedOption2] = useState('');
    const [selectedOption3, setSelectedOption3] = useState('');
    const [showModal, setShowModal] = useState(false);

    const handleSearch = () => {
        if (!selectedOption1 && !selectedOption2 && !selectedOption3) {
            setShowModal(true);
        } else {
            console.log('Buscando instructores para las opciones seleccionadas:', selectedOption1, selectedOption2, selectedOption3);
        }
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };




    return (
        <div className="fondo">
            <Navbar />
            <div className="container">
                <h1 className="h1">Consultar Fichas</h1>
                <div className="row">
                    <div className="col-md-5">
                    </div>
                    <div className="col-md-2"></div>
                </div>
            </div>

            <div className="container jornadas">
                <div className="row">
                    <div className="col-md-4">
                        <div className="cardm">
                            <div className="card-bodyy">
                                <img src={ImagesB('./DIURNA_83.png')} className="imgg img-fluid" />
                                <Link className="btn btn-succes boton" to="/consultarFichaAdmin?turno=diurna">Diurna</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="cardm">
                            <div className="card-bodyy">
                                <img src={ImagesB('./mixta_83.png')} className="imgg img-fluid" />
                                <Link className="btn btn-succes boton" to="/consultarFichaAdmin?turno=mixta">Mixta</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="cardm">
                            <div className="card-bodyy">
                                <img src={ImagesB('./nocturna_83.png')} className="imgg img-fluid" />
                                <Link className="btn btn-succes boton" to="/consultarFichaAdmin?turno=nocturna">Nocturna</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <PiePagina />
        </div>
    );
}

export default GestionFichas;

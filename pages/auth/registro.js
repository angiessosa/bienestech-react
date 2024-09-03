import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './registro.css';

const ImagesB = require.context('../../assets', true);

const Registro = () => {
    const [form, setForm] = useState({
        numdoc: '',
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    });

    const [showModal, setShowModal] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false); // Estado para controlar si ya se ha enviado el formulario

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    useEffect(() => {
        console.log(form);
    }, [form]);

    const handleSubmit = (e) => {
        e.preventDefault();

        // Verificar si todos los campos están llenos
        if (form.numdoc && form.firstName && form.lastName && form.email && form.password) {
            setShowModal(true); // Abre el modal si el formulario está completo
            setIsSubmitted(true); // Establecer que el formulario ha sido enviado
            console.log("Formulario enviado:", form);
            // Aquí puedes agregar la lógica para enviar los datos a la API
            const modal = new window.bootstrap.Modal(document.getElementById('registroModal'));
            modal.show();
        } else {
            alert("Por favor, llene todos los campos.");
        }
    };

    return (
        <div className="regisyini">
            <div>
                <nav className="navbar nnn">
                    <img src={ImagesB('./logosena.png')} width="90" height="90" alt="Logo SENA" />
                    <img src={ImagesB('./logobienestech.png')} alt="Logo BienesTech" />
                </nav>

                <div className="container">
                    <div className="form-container">
                        <h2 className="h2r">Regístrate</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="document-type" className="form-label">Tipo de Documento</label>
                                    <select className="tp form-selectt" name="document-type" onChange={handleChange}>
                                        <option value="">Seleccione una opción</option>
                                        <option value="cc">Cédula de Ciudadania</option>
                                        <option value="ce">Cédula de Extranjeria</option>
                                    </select>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="document-number" className="form-label">Número de Documento</label>
                                    <input
                                        type="number"
                                        name="numdoc"
                                        className="form-controll"
                                        id="document-number"
                                        required
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="first-name" className="form-label">Nombres</label>
                                    <input
                                        type="text"
                                        name="firstName"
                                        className="form-controll"
                                        id="first-name"
                                        required
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="last-name" className="form-label">Apellidos</label>
                                    <input
                                        type="text"
                                        name="lastName"
                                        className="form-controll"
                                        id="last-name"
                                        required
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="email" className="form-label">Correo</label>
                                    <input
                                        type="email"
                                        name="email"
                                        className="form-controll"
                                        id="email"
                                        required
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="password" className="form-label">Contraseña</label>
                                    <input
                                        type="password"
                                        name="password"
                                        className="form-controll"
                                        id="password"
                                        required
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            <div className="row mt-4">
                                <div className="col-12 text-center">
                                    <button type="submit" className="btn btn-success submit-btn" disabled={isSubmitted}>
                                        {isSubmitted ? 'Enviando...' : 'Registrarme'}
                                    </button>
                                </div>
                            </div>

                        </form>

                        <br />
                        <p className="p">¿Ya está registrado? <Link to="/inicioSesion">Iniciar sesión</Link></p>
                    </div>
                </div>

            </div>

            {/* Modal */}
            <div className="modal fade" id="registroModal" tabIndex="-1" aria-labelledby="registroModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="registroModalLabel">¡Registro exitoso!</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            Se ha registrado correctamente. Solicitud en proceso...
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Cerrar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Registro;


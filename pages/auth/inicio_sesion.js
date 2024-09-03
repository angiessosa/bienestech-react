import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const baseUrl = "http://localhost:4000/usuarios";

const ImagesB = require.context('../../assets', true);

const InicioS = () => {
    const [form, setForm] = useState({
        numdoc: '',
        clave: ''
    });

    const [userRole, setUserRole] = useState(null);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.get(baseUrl);
            console.log("Respuesta de la API:", response.data); // Imprime la respuesta completa

            const usuarios = response.data;

            if (!usuarios) {
                throw new Error('No se encontraron usuarios en la respuesta de la API');
            }

            // Asegúrate de que los campos coincidan con los de la API
            const numdocInput = form.numdoc.toString();
            const usuario = usuarios.find(user => user.numdoc.toString() === numdocInput && user.clave === form.clave);
            console.log("Usuario encontrado:", usuario);

            if (usuario) {
                setUserRole(usuario.rol);
                localStorage.setItem('userRole', usuario.rol);
                localStorage.setItem('userName', usuario.nombres);
                mostrarModal(usuario.nombres, usuario.rol);
            } else {
                alert('Credenciales incorrectas');
            }
        } catch (error) {
            console.error("Error al conectarse a la API:", error);
            alert('Error al iniciar sesión. Inténtalo de nuevo.');
        }
    };

    const mostrarModal = (nombres, rol) => {
        // Muestra el modal de bienvenida
        alert(`¡Bienvenido ${nombres}!`);
        // Dependiendo del rol, redirige a la vista correspondiente
        if (rol === 'Administrador') {
            navigate('/admin'); // Página para administradores
        } else if (rol === 'Profesional') {
            navigate('/profesional');
        } else if (rol === 'Coordinador') {
            navigate('/coordinador');
        } else if (rol === 'Instructor') {
            navigate('/instructor'); // Página para profesionales
        }
    };

    // Comprobar si hay una sesión activa al montar el componente
    useEffect(() => {
        const storedRole = localStorage.getItem('userRole');
        const storedName = localStorage.getItem('userName');
        if (storedRole) {
            mostrarModal(storedName, storedRole);
        }
    }, []);

    return (
        <div className="regisyini inicios">
            <div>
                <nav className="navbar nnn">
                    <img src={ImagesB('./logosena.png')} width="90" height="90" />
                    <img src={ImagesB('./logobienestech.png')} />
                </nav>

                <div className="container">
                    <div className="form-container">
                        <h2 className="h2r">Iniciar Sesión</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="correo" className="form-label">Número de Documento</label>
                                <input
                                    type="number"
                                    name="numdoc"
                                    className="form-controll"
                                    id="numdoc"
                                    required
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">Contraseña</label>
                                <input
                                    type="password"
                                    name="clave"
                                    className="form-controll"
                                    id="clave"
                                    required
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="row mt-4">
                                <div className="col-12 text-center">
                                    <button type="submit" className="btn btn-success submit-btn">
                                        Iniciar Sesión
                                    </button>
                                </div>
                            </div>
                        </form>

                        <br />
                        <p className="p">¿Aún no está registrado? <Link to="/registro">Registrarme</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InicioS;


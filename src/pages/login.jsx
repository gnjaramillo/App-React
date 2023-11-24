import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const imputstyle = "rounded-lg w-full bg-white rounded border border-pink-500 focus:border-pink-900 focus:ring-2 focus:ring-pink-100  text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out";
const btnstyle = "rounded-lg text-white bg-pink-500 border-0 py-2 px-8 focus:outline-none hover:bg-pink-900 rounded text-lg";

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleLogin = () => {
    // Validación de datos
    const newErrors = {};

    if (!formData.email) {
      newErrors.email = 'El correo electrónico es obligatorio';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'El correo electrónico no es válido';
    }

    if (!formData.password) {
      newErrors.password = 'La contraseña es obligatoria';
    } else if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(formData.password)) {
      newErrors.password = 'La contraseña debe tener al menos 8 caracteres, una letra y un número';
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // Lógica de inicio de sesión aquí
      alert('¡Inicio de sesión exitoso! Serás redirigido a la página de inicio.');
      navigate('/');
    }
  };

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
        <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
          <h1 className="title-font font-medium text-2xl text-gray-900">
            Bienvenidos a nuestra tienda virtual 
          </h1>
          <p className="leading-relaxed mt-4">
            Aquí encontrarás diferentes artículos que te harán sentir bella y auténtica.
          </p>
        </div>
        <div className="rounded-2xl lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
          <h2 className="text-gray-900 text-lg font-medium title-font mb-5">
            Iniciar Sesión
          </h2>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
              Correo electrónico
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className={`${imputstyle} ${errors.email ? 'border-pink-500' : ''}`}
            />
            {errors.email && <p className="text-sm text-pink-500">{errors.email}</p>}
          </div>
          <div className="relative mb-4">
            <label htmlFor="password" className="leading-7 text-sm text-gray-600">
              Contraseña
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className={`${imputstyle} ${errors.password ? 'border-pink-500' : ''}`}
            />
            {errors.password && <p className="text-sm text-pink-500">{errors.password}</p>}
          </div>
          <button className={btnstyle} onClick={handleLogin}>
            Ingresar
          </button>
          <span className="text-sm text-gray-600">Tu esencia es tu belleza.</span>
        </div>
      </div>
    </section>
  );
};

export default Login;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import validator from 'validator';

const Registro = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [errors, setErrors] = useState({});

  const btnreg = "rounded-lg text-white bg-pink-500 border-0 py-2 px-8 focus:outline-none hover:bg-pink-900 rounded text-lg";
  const imputstyle = "rounded-lg w-full bg-white rounded border border-pink-500 focus:border-pink-900 focus:ring-2 focus:ring-pink-100  text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out";

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleRegistro = () => {
    // Validación de datos
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Por favor, ingresa tu nombre completo.';
    }

    if (!validator.isEmail(formData.email)) {
      newErrors.email = 'Por favor, ingresa un correo electrónico válido.';
    }

    if (formData.password.length < 8) {
      newErrors.password = 'La contraseña debe tener al menos 8 caracteres.';
    } else if (!/\d/.test(formData.password) || !/[a-zA-Z]/.test(formData.password)) {
      newErrors.password = 'La contraseña debe contener al menos una letra y un número.';
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Las contraseñas no coinciden.';
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // Lógica de registro aquí
      alert('¡Registro exitoso! Serás redirigido al inicio de sesión.');
      navigate('/login');
    }
  };

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
        <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
          <h1 className="title-font font-medium text-3xl text-gray-900">
            Solo Ellas es una tienda virtual con productos femeninos que te haran sentir <span className="text-rose-500 mx-8 ml-3 text-xl">¡UNICA!</span>
          </h1>
        </div>
        <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
          <h2 className="text-gray-900 text-lg font-medium title-font mb-5">
            Realiza tu registro
          </h2>
          <div className="relative mb-4">
            <label htmlFor="full-name" className="leading-7 text-sm text-gray-600">
              Nombre completo
            </label>
            <input
              type="text"
              id="full-name"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              className={imputstyle}
            />
            {errors.fullName && <p className="text-red-500">{errors.fullName}</p>}
          </div>
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
              className={imputstyle}
            />
            {errors.email && <p className="text-red-500">{errors.email}</p>}
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
              className={imputstyle}
            />
            {errors.password && <p className="text-red-500">{errors.password}</p>}
          </div>
          <div className="relative mb-4">
            <label htmlFor="confirm-password" className="leading-7 text-sm text-gray-600">
              Confirmar Contraseña
            </label>
            <input
              type="password"
              id="confirm-password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              className={imputstyle}
            />
            {errors.confirmPassword && <p className="text-red-500">{errors.confirmPassword}</p>}
          </div>
          <button className={btnreg} onClick={handleRegistro}>
            Aceptar
          </button>
        </div>
      </div>
    </section>
  );
};

export default Registro;

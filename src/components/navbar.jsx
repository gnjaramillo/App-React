import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const btnlink = "font-semibold cursor-pointer mr-5 hover:text-rose-500 font-sans hover:font-serif";
  const activelink = "font-semibold py-1 mr-4 text-rose-600";

  // Estado local para manejar la visibilidad del menú desplegable
  const [showDropdown, setShowDropdown] = useState(false);

  // Función para cambiar el estado y alternar la visibilidad del menú desplegable
  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className="nav">
      <header className="text-gray-800 body-font relative">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-rose-500 mb-4 md:mb-0">
            {/* <img className="h-36 object-center object-contain" src="../imagenes/logos/solo ellas.jpeg" alt="Logo" /> */}
            <span className="mx-8 ml-3 text-xl">Solo Ellas</span>
          </a>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center relative">
            {/* Enlace "Productos" con menú desplegable */}
            <div className="nav-item dropdown relative" onClick={toggleDropdown}>
              <NavLink to="/productos" className={({ isActive }) => isActive ? activelink : btnlink}>
                Productos
              </NavLink>
              {showDropdown && (
                <div className="dropdown-menu  absolute items-start  mt-1 flex flex-col">
                  <NavLink to="/pijamas" className={`dropdown-item ${btnlink}`}>Pijamas</NavLink>
                  <NavLink to="/mochilas" className={`dropdown-item ${btnlink}`}>Mochilas</NavLink>
                </div>
              )}
            </div>
            {/* Otros enlaces */}
            <NavLink to="/nosotros" className={({ isActive }) => isActive ? activelink : btnlink}>Sobre Nosotros</NavLink>
          </nav>
          <NavLink to="/registro" className={({ isActive }) => isActive ? activelink : btnlink}>Registro</NavLink>
          <NavLink to="/login" className={({ isActive }) => isActive ? activelink : btnlink}>Login</NavLink>
        </div>
      </header>
    </div>
  );
};

export default Navbar;

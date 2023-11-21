import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="relative top-0 w-full bg-blue-500 py-5 shadow-md">
      <ul className="flex justify-around">
      <li className="nav-item">
          <Link
            to="/graficar"
            className="text-white hover:text-gray-200"
          >
            <strong>Graficar funciones</strong>
            
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/ecuaciones-no-lineales"
            className="text-white hover:text-gray-200"
          >
            <strong>Ecuaciones No Lineales</strong>
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/ecuaciones-lineales"
            className="text-white hover:text-gray-200"
          >
            <strong>Ecuaciones Lineales</strong>
            
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/interpolacion" className="text-white hover:text-gray-200">
            <strong>Interpolación</strong>

          </Link>
        </li>
      </ul>
    </nav>
  );
};

export { Navbar };
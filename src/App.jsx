import React from "react";
import { BrowserRouter } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import Inicio from "./components/Inicio";
import Sobremi from "./components/Sobremi";
import Habilidades from "./components/Habilidades";
import Proyectos from "./components/Proyectos";
import Contacto from "./components/Contacto";
import Footer from "./components/Footer";
import { FaGithub, FaLinkedin, FaFileDownload } from "react-icons/fa";
import "./styles/main.css";


export default function App() {
  return (
    <main>
      <BrowserRouter>
        <nav className="flex justify-center bg-gray-300 p-4 fixed w-full top-0 z-10">
          <ul className="flex space-x-12">
            <li><Link to="#inicio" className="text-gray-800 hover:text-blue-500">Inicio</Link></li>
            <li><Link to="#about" className="text-gray-800 hover:text-blue-500">Sobre mi</Link></li>
            <li><Link to="#habilidades" className="text-gray-800 hover:text-blue-500">Habilidades</Link></li>
            <li><Link to="#proyectos" className="text-gray-800 hover:text-blue-500">Proyectos</Link></li>
            <li><Link to="#contacto" className="text-gray-800 hover:text-blue-500">Contacto</Link></li>
            <li>
              <a href="https://github.com/JesusSente" target="_blank" rel="noreferrer"><FaGithub className="size-6 text-gray-800 hover:text-blue-500"/></a>
            </li>
            <li>
              <a href="#"><FaLinkedin className="size-6 text-gray-800 hover:text-blue-500"/></a>
            </li>
            <a href="#"><FaFileDownload className="size-6 text-gray-800 hover:text-blue-500"/></a>
          </ul>
          
        </nav>
      </BrowserRouter>
      <Inicio />
      <Sobremi />
      <Habilidades />
      <Proyectos />
      <Contacto />
      <Footer />
    </main>
  );
}

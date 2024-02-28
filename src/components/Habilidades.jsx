import React from "react";
import { FaGithub } from "react-icons/fa";

function Habilidades() {
  return (
    <section id="habilidades" className="bg-slate-300">
      <div>
        <h2 className="flex justify-center">Habilidades</h2>
        <div className="">
          <div className="div-desarrollo flex flex-col bg-slate-500">
            <h4 className="flex justify-center font-bold text-2xl">
              Desarrollo web
            </h4>
            <div className="flex p-9 justify-center">
              <div className="px-4">
                {/**AGREGAR PX-4 PARA EK PADIN EN EJE X DE CADA HABILIDAD */}
                <p>HTML</p>
                <FaGithub className="size-28 text-gray-800 hover:text-blue-500" />
              </div>
              <div className="px-4">
                <p>CSS</p>
                <FaGithub className="size-28 text-gray-800 hover:text-blue-500" />
              </div>
              <div className="px-4">
                <p>JavaScript</p>
                <FaGithub className="size-28 text-gray-800 hover:text-blue-500" />
              </div>
              <div className="px-4">
                <p>CSS</p>
                <FaGithub className="size-28 text-gray-800 hover:text-blue-500" />
              </div>
            </div>
          </div>

          <div className="div-progr-escritorio bg-slate-400">
            <h4 className="flex justify-center font-bold text-2xl">
              Software de escritorio
            </h4>
            <div className="flex p-9 justify-center">
              <div className="px-4">
                {/**AGREGAR PX-4 PARA EK PADIN EN EJE X DE CADA HABILIDAD */}
                <p>Java</p>
                <FaGithub className="size-28 text-gray-800 hover:text-blue-500" />
              </div>
              <div className="px-4">
                <p>C#</p>
                <FaGithub className="size-28 text-gray-800 hover:text-blue-500" />
              </div>
            </div>
          </div>

          <div className="Frameworks bg-slate-500">
            <h4 className="flex justify-center font-bold text-2xl">
              Frameworks
            </h4>
            <div className="flex p-9 justify-center">
              <div className="px-4">
                {/**AGREGAR PX-4 PARA EK PADIN EN EJE X DE CADA HABILIDAD */}
                <p>React js</p>
                <FaGithub className="size-28 text-gray-800 hover:text-blue-500" />
              </div>
              <div className="px-4">
                <p>Sprring Boot</p>
                <FaGithub className="size-28 text-gray-800 hover:text-blue-500" />
              </div>
              <div className="px-4">
                <p>.NET</p>
                <FaGithub className="size-28 text-gray-800 hover:text-blue-500" />
              </div>
            </div>
          </div>

          <div className="Frameworks bg-slate-400">
            <h4 className="flex justify-center font-bold text-2xl">
              Frameworks
            </h4>
            <div className="flex p-9 justify-center">
              <div className="px-4">
                {/**AGREGAR PX-4 PARA EK PADIN EN EJE X DE CADA HABILIDAD */}
                <p>MySQL</p>
                <FaGithub className="size-28 text-gray-800 hover:text-blue-500" />
              </div>
              <div className="px-4">
                <p>PostgreSQL</p>
                <FaGithub className="size-28 text-gray-800 hover:text-blue-500" />
              </div>
              <div className="px-4">
                <p>Oracle DataBase</p>
                <FaGithub className="size-28 text-gray-800 hover:text-blue-500" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Habilidades;

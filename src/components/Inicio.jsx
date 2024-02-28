import React from 'react'

function Inicio() {
  return (
    <section id="inicio" className="mt-14">
      {/**agregar margin top= mt-10 */}
      <div>
        <h3>Hola, mi nombre es</h3>
        <h1>Jesús Sente.</h1>
        <h2>Estudiante de Ingenieria en Sístemas</h2>
        <h4>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi sit
          aspernatur quod! Accusantium aperiam at error consectetur
          perspiciatis, amet quis placeat velit, nobis maiores ad. Rerum ipsum
          non provident dolorem!
        </h4>
        <div className='cv-download'>
          <a
            className="group relative inline-flex items-center overflow-hidden rounded bg-indigo-600 px-8 py-3 text-white focus:outline-none focus:ring active:bg-indigo-500"
            href="/download"
          >
            <span className="absolute -start-full transition-all group-hover:start-4">
              <svg
                className="h-5 w-5 rtl:rotate-180"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </span>

            <span className="text-sm font-medium transition-all group-hover:ms-4">
              {" "}
              Download{" "}
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Inicio
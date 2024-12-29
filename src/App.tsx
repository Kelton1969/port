import React, { useState} from "react";
import { FaCode, FaBook, FaLaptopCode, FaMoon, FaSun } from "react-icons/fa";
import Typewriter from "react-typewriter-effect";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = (event) => {
    // Criar um círculo dinamicamente
    const circle = document.createElement("div");
    circle.className = "absolute rounded-full bg-black opacity-50 pointer-events-none"; // Usando Tailwind
    const size = Math.max(window.innerWidth, window.innerHeight); // Tamanho do círculo
    circle.style.width = `${size}px`;
    circle.style.height = `${size}px`;
    circle.style.top = `${event.clientY - size / 2}px`;
    circle.style.left = `${event.clientX - size / 2}px`;

    // Adicionando ao corpo
    document.body.appendChild(circle);

    // Iniciar a animação
    setTimeout(() => {
      setDarkMode(!darkMode);
      document.body.classList.toggle("dark", !darkMode);
      circle.classList.add("animate-expand-circle"); // A classe da animação de expansão
      // Remover o círculo após a animação
      setTimeout(() => document.body.removeChild(circle), 600);
    }, 0);
  };

  return (
    <>
      {/* Navbar estilosa */}
      <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 py-4 bg-transparent text-white">
        <ul className="flex space-x-4">
          <li><a href="#" className="hover:underline">Home</a></li>
          <li><a href="#" className="hover:underline">Sobre</a></li>
          <li><a href="#" className="hover:underline">Projetos</a></li>
        </ul>
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full bg-black bg-opacity-50 hover:bg-opacity-75 focus:outline-none transition relative overflow-hidden"
        >
          {darkMode ? (
            <FaSun size={20} color="white" className="animate-rotate-sun-moon" />
          ) : (
            <FaMoon size={20} color="white" className="animate-rotate-sun-moon" />
          )}
        </button>
      </nav>

      {/* Primeira seção: Background estilizado com efeito Typewriter */}
      <section className="relative h-screen w-full">
        <img 
          src="https://images.unsplash.com/photo-1522252234503-e356532cafd5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw2fHxjb2RlfGVufDB8MHx8fDE2OTQwOTg0MTZ8MA&ixlib=rb-4.0.3&q=80&w=1080" 
          alt="Background Image" 
          className="object-cover object-center w-full h-full"
        />
        <div className="absolute inset-0 w-full h-full bg-black bg-opacity-50"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <Typewriter
            textStyle={{
              fontFamily: "Arial, sans-serif",
              color: "#FFFFFF",
              fontSize: "2rem",
            }}
            startDelay={100}
            cursorColor="#FFFFFF"
            multiText={["Olá, meu nome é Kelton", "Sou um desenvolvedor web"]}
            multiTextDelay={1500}
            typeSpeed={100}
            deleteSpeed={50}
          />
          <p className="mt-4 text-lg text-gray-300 sm:text-xl">
            Este é o meu portfólio, aproveite para explorar meus projetos e habilidades.
          </p>
        </div>
      </section>

      {/* Segunda seção: Cards de projetos */}
      <section className="bg-white h-auto py-8 px-6 flex justify-center">
        <div className="w-full max-w-6xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Olá, Bem-vindo</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {/* Card 1: Desenvolvimento Web */}
            <div className={`w-full ${darkMode ? "bg-gray-800" : "bg-gradient-to-r from-blue-500 to-purple-600"} rounded-lg shadow-lg text-white p-5`}>
              <div className="flex justify-center mb-4">
                <FaCode size={50} className="animate-pulse" />
              </div>
              <h5 className="mb-2 text-2xl font-bold text-center">Desenvolvimento Web</h5>
              <p className="mb-3 text-center">Criação de sites responsivos e modernos utilizando tecnologias de ponta.</p>
              <a
                href="#"
                className="block text-center px-4 py-2 bg-white text-blue-700 rounded-lg hover:bg-blue-100 transition"
              >
                Saiba mais
              </a>
            </div>

            {/* Card 2: Meus Cursos */}
            <div className={`w-full ${darkMode ? "bg-gray-800" : "bg-gradient-to-r from-green-400 to-teal-600"} rounded-lg shadow-lg text-white p-5`}>
              <div className="flex justify-center mb-4">
                <FaBook size={50} className="animate-bounce" />
              </div>
              <h5 className="mb-2 text-2xl font-bold text-center">Meus Cursos</h5>
              <p className="mb-3 text-center">Atualmente estudando Inglês na FISK e Ciência da Computação.</p>
              <a
                href="#"
                className="block text-center px-4 py-2 bg-white text-green-700 rounded-lg hover:bg-green-100 transition"
              >
                Saiba mais
              </a>
            </div>

            {/* Card 3: Linguagens que Conheço */}
            <div className={`w-full ${darkMode ? "bg-gray-800" : "bg-gradient-to-r from-yellow-500 to-orange-600"} rounded-lg shadow-lg text-white p-5`}>
              <div className="flex justify-center mb-4">
                <FaLaptopCode size={50} className="animate-spin-slow" />
              </div>
              <h5 className="mb-2 text-2xl font-bold text-center">Linguagens que Conheço</h5>
              <p className="mb-3 text-center">Java, Python, e C++.</p>
              <a
                href="#"
                className="block text-center px-4 py-2 bg-white text-yellow-700 rounded-lg hover:bg-yellow-100 transition"
              >
                Saiba mais
              </a>
              
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;

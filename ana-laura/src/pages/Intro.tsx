import React from 'react';
import { useNavigate } from 'react-router-dom';
import anaLauraImg from '../assets/ana-laura.png'; // ajuste o caminho conforme necessário
import footer from '../assets/footer.png'; // ajuste o caminho conforme necessário

const Intro: React.FC = () => {
  const navigate = useNavigate();

  const handleEnter = () => {
    navigate('/home');
  };

  return (
    <div className="bg-[#b7dff2] flex items-center justify-center flex-col h-full">
      <div className="text-center max-w-md ">
        <img
          src={anaLauraImg}
          alt="Ana Laura Fada"
          className="w-52 mx-auto drop-shadow-lg animate-fade-in"
        />
        <h1 className="text-4xl font-bold text-white drop-shadow-md mb-4">
          Bem-vindo à festa da Ana Laura!
        </h1>
        <p className="text-lg text-white mb-6">
          Uma data mágica está chegando... Vamos comemorar os 3 aninhos dessa fadinha encantadora!
        </p>
        <button
          onClick={handleEnter}
          className="bg-[#fceca1] hover:bg-[#f8c7d8] text-purple-800 text-lg font-semibold py-3 px-6 rounded-full shadow-md transition duration-300"
        >
          Entrar na Festa ✨
        </button>
        
      </div>
        <img src={footer} alt="" className='w-full h-[160px] mb-0' />
    </div>
  );
};

export default Intro;

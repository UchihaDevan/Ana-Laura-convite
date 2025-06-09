import React from 'react';
import { Gift, MapPinned, CalendarCheck, Hourglass } from 'lucide-react';


const Home: React.FC = () => {
  const options = [
    {
      icon: <MapPinned className='size-12'/>,
      link: 'https://maps.google.com',
    },
    {
      icon: <Gift className='size-12'/>,
      link: 'https://example.com/presentes',
    },
    {
      icon: <CalendarCheck className='size-12'/>,
      link: 'https://example.com/rsvp',
    },
    {
      icon: <Hourglass className='size-12'/>,
      link: 'https://example.com/contador',
    },
  ];

  return (
    <div className="min-h-screen bg-[#b7dff2] flex items-center justify-center px-6 py-16">
      <div className="relative max-w-5xl w-full bg-white rounded-3xl shadow-2xl p-10 text-center z-10">
        {/* Títulos e frases */}
        <div className="mb-12">
          <h1 className="text-5xl font-extrabold text-[#f8c7d8] drop-shadow-md">Aniversário da Ana Laura</h1>
          <p className="text-2xl text-[#e6c6f2] font-medium mt-4">Ela está fazendo 3 aninhos! 🎉</p>
          <p className="text-lg text-[#b7dff2] mt-2">
            Venha comemorar conosco esse dia cheio de amor, diversão e alegria!
          </p>
          <p className="text-md text-[#b7dff2] mt-1">
            Vai ter bolo, brincadeira, carinho e muita bagunça boa! 🍰💖
          </p>
        </div>

        {/* Botões */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {options.map((item, idx) => (
            <a
              key={idx}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#fceca1] hover:bg-[#f8c7d8] text-purple-900 rounded-2xl py-6 px-4 shadow-xl hover:shadow-xl hover:scale-105 transition-transform duration-200"
            >
              <div className="flex justify-center items-center">{item.icon}</div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;

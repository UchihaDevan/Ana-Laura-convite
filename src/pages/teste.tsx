import React, { useState } from 'react';
import Countdown from '../components/Countdown';
import anaLauraImg from '../assets/ana-laura.png';
import footer from '../assets/gramado.png';
import passaroTop from '../assets/borboleta-top.png';
import arvore from '../assets/arvore.png';
import arbusto from '../assets/arbusto.png';
import borboletaLocal from '../assets/borboleta-local.png';
import borboletaTitulo from '../assets/borboleta-titulo.png';
import casaPassaro from '../assets/casa-passaro.png';
import galho from '../assets/galho.png';
import { CalendarCheck, Gift, Hourglass, MapPinned, X } from 'lucide-react';

const Teste: React.FC = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState<{ label: string; content: React.ReactNode } | null>(null);

    const options = [
        {
            icon: <MapPinned className="size-8 sm:size-10" />,
            label: 'Local',
            content: (
                <iframe
                    src="https://www.google.com/maps/embed?pb=!4v1748567620221!6m8!1m7!1sS068d3FlX6N_FuJWg9RamQ!2m2!1d-3.805003439916577!2d-38.63288605578095!3f355.87253835283974!4f-6.398203175825813!5f0.7820865974627469"
                    width="100%"
                    height="500"
                    style={{ border: 0, borderRadius: '12px' }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                />
            ),
        },
        {
            icon: <Gift className="size-8 sm:size-10" />,
            label: 'Presentes',
            content: (
                <p>
                    Sua presença é o melhor presente! Mas se desejar contribuir, temos uma lista no site da Loja Mágica Encantada 💖
                </p>
            ),
        },
        {
            icon: <CalendarCheck className="size-8 sm:size-10" />,
            label: 'Confirmação',
            content: (
                <div className="w-full">
                    <iframe
                        src="https://docs.google.com/forms/d/e/1FAIpQLScGJ5F-N827DEPobG8KeXKGvjJkZe_2p1H-FZ5NmlAvI507Ew/viewform?embedded=true"
                        className="w-full h-[500px] rounded-lg border border-gray-200 shadow-sm"
                        allowFullScreen
                        loading="lazy"
                        title="Formulário de Confirmação"
                    >
                        Carregando…
                    </iframe>
                </div>
            ),
        },
        {
            icon: <Hourglass className="size-8 sm:size-10" />,
            label: 'Contagem',
            content: (
                <div className="text-center">
                    <Countdown targetDate="2025-07-19T15:19:00" />
                </div>
            ),
        },
    ];


    const openModal = (item: { label: string; content: React.ReactNode }) => {
        setModalContent(item);
        setModalOpen(true);
    };


    const closeModal = () => {
        setModalOpen(false);
        setModalContent(null);
    };

    return (
        <div className="h-screen overflow-hidden flex flex-col items-center justify-between relative bg-[#b7dff2]">
            {/* Decorações Fixas */}
            <img src={passaroTop} alt="Borboleta no topo" className="absolute w-[60px] left-0 mt-6 animate-float z-10" />
            <img src={galho} alt="Galho" className="absolute -top-14 right-0 w-50 sm:w-56 z-0" />
            <img src={casaPassaro} alt="Casa de pássaro" className="absolute bottom-0 left-10 w-30 sm:w-20 z-10" />
            <img src={borboletaTitulo} alt="Borboleta título" className="absolute right-0 top-[45%] w-16 sm:w-20 animate-float z-10" />
            <img src={borboletaLocal} alt="Borboleta botão" className="absolute bottom-52 right-6 w-12 sm:w-16 animate-float-slow z-10" />
            <img src={arbusto} alt="Arbusto" className="absolute -bottom-22 -left-18 w-40 sm:w-56 z-20" />

            {/* Conteúdo principal */}
            <main className="text-center px-6 flex flex-col items-center relative z-10">
                <h1 className="text-3xl sm:text-4xl font-bold text-white drop-shadow-md mb-4 mt-32">
                    Bem-vindo à festa da Ana Laura!
                </h1>

                <p className="text-xl sm:text-2xl text-[#863E3A] mb-6 max-w-md">
                    Uma data mágica está chegando... Vamos comemorar os 3 aninhos dessa fadinha encantadora!
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mb-6">
                    {options.map((item, idx) => (
                        <button
                            key={idx}
                            onClick={() => openModal(item)}
                            className="bg-[#fceca1] hover:bg-[#f8c7d8] text-purple-900 rounded-2xl py-4 px-4 shadow-xl hover:scale-105 transition-transform duration-200 flex flex-col items-center"
                        >
                            {item.icon}
                            <span className="mt-2 text-sm font-semibold">{item.label}</span>
                        </button>
                    ))}
                </div>
            </main>

            {/* Ana Laura Fada */}
            <img
                src={anaLauraImg}
                alt="Ana Laura vestida de fada"
                className="absolute bottom-0 right-5 sm:bottom-24 w-32 sm:w-40 z-20 drop-shadow-lg animate-fade-in"
            />

            {/* Árvore decorativa */}
            <img
                src={arvore}
                alt="Árvore decorativa"
                className="absolute -bottom-0 -left-32 sm:-left-40 w-72 sm:w-[350px] z-0"
            />

            {/* Rodapé */}
            <img src={footer} alt="Grama decorativa" className="w-full h-[80px] sm:h-[100px] z-10" />

            {/* Modal */}
            {modalOpen && modalContent && (
                <div className="fixed inset-0 bg-white/30 backdrop-blur-sm flex items-center justify-center z-50">
                    <div className="bg-white rounded-2xl shadow-2xl p-6 max-w-md w-full relative">
                        <button
                            onClick={closeModal}
                            className="absolute top-2 right-2 text-gray-600 hover:text-red-500"
                        >
                            <X className="w-6 h-6" />
                        </button>
                        <h2 className="text-2xl font-bold text-purple-800 mb-4">{modalContent.label}</h2>
                        <div className="text-gray-700">{modalContent.content}</div>
                    </div>
                </div>
            )}

        </div>
    );
};

export default Teste;

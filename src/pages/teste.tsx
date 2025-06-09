import React, { useState } from 'react'
import Countdown from '../components/Countdown'
import anaLauraImg from '../assets/ana-laura.png'
import footer from '../assets/gramado.png'
import passaroTop from '../assets/borboleta-top.png'
import arvore from '../assets/arvore.png'
import arbusto from '../assets/arbusto.png'
import borboletaLocal from '../assets/borboleta-local.png'
import borboletaTitulo from '../assets/borboleta-titulo.png'
import casaPassaro from '../assets/casa-passaro.png'
import galho from '../assets/galho.png'
import {
  CalendarCheck,
  Gift,
  Hourglass,
  MapPinned,
  X,
  Shirt,
  Footprints,
  Puzzle,
} from 'lucide-react'

const options = [
  {
    icon: <MapPinned className="w-8 h-8 sm:w-10 sm:h-10" />,
    label: 'Local',
    content: (
      <iframe
        src="https://www.google.com/maps/embed?pb=!4v1748567620221!6m8!1m7!1sS068d3FlX6N_FuJWg9RamQ!2m2!1d-3.805003439916577!2d-38.63288605578095!3f355.87253835283974!4f-6.398203175825813!5f0.7820865974627469"
        className="w-full h-[500px] rounded-xl border-0"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    ),
  },
  {
    icon: <Gift className="w-8 h-8 sm:w-10 sm:h-10" />,
    label: 'Presentes',
    content: (
      <div className="space-y-4">
        <p className="text-lg text-gray-800">
          Sua presença é o melhor presente! Mas se desejar contribuir, aqui vão
          algumas sugestões com carinho:
        </p>
        <ul className="space-y-2 text-purple-900 font-medium">
          <li className="flex items-center gap-2">
            <Shirt className="w-9 h-9 text-[#863E3A]" />
            Roupas tamanho <span className="font-bold">3/4 anos</span>
          </li>
          <li className="flex items-center gap-2">
            <Footprints className="w-9 h-9 text-[#863E3A]" />
            Calçados tamanho <span className="font-bold">25/26</span>
          </li>
          <li className="flex items-center gap-2">
            <Puzzle className="w-9 h-9 text-[#863E3A]" />
            Brinquedos educativos
          </li>
        </ul>
      </div>
    ),
  },
  {
    icon: <CalendarCheck className="w-8 h-8 sm:w-10 sm:h-10" />,
    label: 'Confirmação',
    content: (
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLScGJ5F-N827DEPobG8KeXKGvjJkZe_2p1H-FZ5NmlAvI507Ew/viewform?embedded=true"
        className="w-full h-[500px] rounded-lg border border-gray-200 shadow-sm"
        allowFullScreen
        loading="lazy"
        title="Formulário de Confirmação"
      >
        Carregando…
      </iframe>
    ),
  },
  {
    icon: <Hourglass className="w-8 h-8 sm:w-10 sm:h-10" />,
    label: 'Contagem',
    content: (
      <div className="text-center">
        <Countdown targetDate="2025-07-19T15:19:00" />
      </div>
    ),
  },
]

const Teste: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false)
  const [modalContent, setModalContent] = useState<{
    label: string
    content: React.ReactNode
  } | null>(null)

  const openModal = (item: { label: string; content: React.ReactNode }) => {
    setModalContent(item)
    setModalOpen(true)
  }

  const closeModal = () => {
    setModalOpen(false)
    setModalContent(null)
  }

  return (
    <div className="h-screen overflow-hidden flex flex-col items-center justify-between relative bg-[#b7dff2]">
      {/* Decorações fixas */}
      <img
        src={passaroTop}
        alt="Borboleta no topo"
        className="absolute left-0 mt-6 w-[60px] animate-float z-10"
      />
      <img
        src={galho}
        alt="Galho"
        className="absolute -top-14 right-0 w-12 sm:w-14 z-0"
      />
      <img
        src={casaPassaro}
        alt="Casa de pássaro"
        className="absolute bottom-0 left-10 w-28 sm:w-20 z-10"
      />
      <img
        src={borboletaTitulo}
        alt="Borboleta título"
        className="absolute right-0 top-[45%] w-16 sm:w-20 animate-float z-10"
      />
      <img
        src={borboletaLocal}
        alt="Borboleta botão"
        className="absolute bottom-52 right-6 w-12 sm:w-16 animate-float-slow z-10"
      />
      <img
        src={arbusto}
        alt="Arbusto"
        className="absolute bottom-[-5.5rem] left-[-4.5rem] w-40 sm:w-56 z-20"
      />

      {/* Conteúdo principal */}
      <main className="relative z-10 text-center px-6 flex flex-col items-center">
        <h1 className="mt-16 mb-4 text-3xl sm:text-4xl font-bold text-white drop-shadow-md">
          Bem-vindo à festa da Ana Laura!
        </h1>
        <p className="mb-6 max-w-md text-xl sm:text-2xl text-[#863E3A]">
          Uma data mágica está chegando... Vamos comemorar os 3 aninhos dessa
          fadinha encantadora!
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mb-6">
          {options.map((item, idx) => (
            <button
              key={idx}
              onClick={() => openModal(item)}
              className="flex flex-col items-center bg-[#fceca1] px-4 py-4 rounded-2xl text-purple-900 shadow-xl hover:bg-[#f8c7d8] hover:scale-105 transition-transform duration-200"
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
        className="absolute bottom-0 right-5 sm:bottom-24 w-32 sm:w-40 drop-shadow-lg animate-fade-in z-20"
      />

      {/* Árvore decorativa */}
      <img
        src={arvore}
        alt="Árvore decorativa"
        className="absolute -left-32 sm:-left-40 bottom-0 w-72 sm:w-[350px] z-0"
      />

      {/* Rodapé */}
      <img
        src={footer}
        alt="Grama decorativa"
        className="w-full h-[80px] sm:h-[100px] z-10"
      />

      {/* Modal */}
      {modalOpen && modalContent && (
        <div className="fixed inset-0 bg-white/30 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="relative w-full max-w-md p-6 bg-white rounded-2xl shadow-2xl">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-600 hover:text-red-500"
            >
              <X className="w-6 h-6" />
            </button>
            <h2 className="mb-4 text-2xl font-bold text-purple-800">
              {modalContent.label}
            </h2>
            <div className="text-gray-700">{modalContent.content}</div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Teste

import React, { useEffect, useState } from 'react'
import { Calendar, Clock, Repeat, Zap } from 'lucide-react'

type TimeLeft = {
  dias: number
  horas: number
  minutos: number
  segundos: number
}

const Countdown: React.FC<{ targetDate: string }> = ({ targetDate }) => {
  const calculate = (): TimeLeft | null => {
    const diff = +new Date(targetDate) - +new Date()
    if (diff <= 0) return null
    return {
      dias: Math.floor(diff / (1000 * 60 * 60 * 24)),
      horas: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutos: Math.floor((diff / 1000 / 60) % 60),
      segundos: Math.floor((diff / 1000) % 60),
    }
  }

  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(calculate())

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(calculate()), 1000)
    return () => clearInterval(timer)
  }, [])

  if (!timeLeft) {
    return (
      <div className="p-6 bg-accent-light/80 rounded-2xl shadow-lg text-center">
        <p className="text-2xl font-luckiest text-accent-dark animate-pulse">
          🎉 A festa começou! 🎉
        </p>
      </div>
    )
  }

  const units = [
    { icon: <Calendar className="w-6 h-6" />, label: 'Dias',    value: timeLeft.dias },
    { icon: <Clock    className="w-6 h-6" />, label: 'Horas',   value: timeLeft.horas },
    { icon: <Repeat   className="w-6 h-6" />, label: 'Minutos', value: timeLeft.minutos },
    { icon: <Zap      className="w-6 h-6" />, label: 'Segs.',   value: timeLeft.segundos },
  ]

  return (
    <div className="p-4 bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl inline-block">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {units.map(({ icon, label, value }) => (
          <div
            key={label}
            className="flex flex-col items-center bg-primary-light/70 p-3 rounded-lg shadow-inner animate-fade-in"
          >
            <div className="p-1 bg-primary-main rounded-full mb-1">
              {icon}
            </div>
            <span className="text-3xl font-luckiest text-primary-dark">
              {value.toString().padStart(2, '0')}
            </span>
            <span className="text-xs uppercase text-secondary-main">
              {label}
            </span>
          </div>
        ))}
      </div>
      <p className="mt-3 text-center text-sm text-gray-600">
        para a grande festa!
      </p>
    </div>
  )
}

export default Countdown;

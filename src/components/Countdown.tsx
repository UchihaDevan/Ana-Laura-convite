import React, { useEffect, useState } from 'react';

const Countdown: React.FC<{ targetDate: string }> = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    if (difference <= 0) return null;

    return {
      dias: Math.floor(difference / (1000 * 60 * 60 * 24)),
      horas: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutos: Math.floor((difference / 1000 / 60) % 60),
      segundos: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState<ReturnType<typeof calculateTimeLeft>>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!timeLeft) {
    return <p className="text-lg text-green-600 font-semibold">A festa começou! 🎉</p>;
  }

  return (
    <div className="text-lg text-gray-800 font-medium">
      Faltam <strong>{timeLeft.dias}</strong> dias,
      <strong> {timeLeft.horas}</strong> horas,
      <strong> {timeLeft.minutos}</strong> minutos e
      <strong> {timeLeft.segundos}</strong> segundos para a grande festa! 🎉
    </div>
  );
};

export default Countdown;

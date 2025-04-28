"use client";

import { useEffect, useMemo, useState } from "react";

function calculateTimeLeft(targetDate: Date) {
  const currentDate = new Date();
  const difference = targetDate.getTime() - currentDate.getTime();

  if (difference <= 0) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((difference % (1000 * 60)) / 1000),
  };
}

export function Countdown() {
  const targetDate = useMemo(() => new Date("2025-06-01T00:00:00"), []);
  const [timeLeft, setTimeLeft] = useState<null | ReturnType<
    typeof calculateTimeLeft
  >>(null);

  useEffect(() => {
    const update = () => setTimeLeft(calculateTimeLeft(targetDate));

    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  if (!timeLeft) return null;

  const timeUnits = [
    { label: "dias", value: timeLeft.days },
    { label: "horas", value: timeLeft.hours },
    { label: "minutos", value: timeLeft.minutes },
    { label: "segundos", value: timeLeft.seconds },
  ];

  return (
    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-5xl bg-white p-8 rounded-xl flex gap-8">
      <div className="flex flex-col flex-2/4 justify-center">
        <p>Aventura, diversão e aprendizado começa agora!</p>
        <h2 className="text-3xl text-blue font-bold">
          Contagem regressiva para a Temporada de Férias!
        </h2>
      </div>
      <div className="flex flex-3/4 gap-5">
        {timeUnits.map((unit, index) => (
          <div
            key={index}
            className="w-full shadow-soft rounded-xl flex flex-col items-center justify-center space-y-2 py-4"
          >
            <p className="text-blue font-bold text-4xl">
              {String(unit.value).padStart(2, "0")}
            </p>
            <hr className="w-1/2 border-t-2 border-blue" />
            <p>{unit.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

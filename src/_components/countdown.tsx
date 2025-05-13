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
  const targetDate = useMemo(() => new Date("2025-07-01T00:00:00"), []);
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
    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-white rounded-xl text-center md:text-start flex flex-col md:flex-row p-4 md:p-6 lg:p-8 gap-4 md:gap-8 w-sm md:w-2xl xl:w-5xl">
      <div className="flex md:flex-2/4 flex-col justify-center">
        <h2 className="text-blue font-bold text-xl md:text-lg xl:text-3xl">
          Contagem regressiva para a Temporada de Férias!
        </h2>
      </div>
      <div className="flex md:flex-3/4 justify-between gap-2 md:gap-3 xl:gap-5">
        {timeUnits.map((unit, index) => (
          <div
            key={index}
            className="shadow-soft rounded-xl flex flex-col items-center justify-center p-2 md:py-4 xl:py-4 w-full md:space-y-1 xl:space-y-2"
          >
            <p className="text-blue font-bold text-xl md:text-2xl xl:text-4xl">
              {String(unit.value).padStart(2, "0")}
            </p>
            <hr className="border-blue border-t xl:border-t-2 w-full xl:w-1/2" />
            <p className="text-sm md:text-[12px] xl:xl:text-[1rem]">
              {unit.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

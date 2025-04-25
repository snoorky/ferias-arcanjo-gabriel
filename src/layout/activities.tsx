"use client"

import { useState } from "react"
import { format, startOfMonth, endOfMonth, eachDayOfInterval, addMonths, subMonths, subDays, addDays, isSameDay } from "date-fns"
import { ptBR } from "date-fns/locale"

type Evento = {
  data: Date
  nome: string
  descricao: string
}

export default function Activities() {
  const [selectedDay, setSelectedDay] = useState<Date | null>(null)
  const [hoveredDay, setHoveredDay] = useState<Date | null>(null)

  // Exemplo de eventos
  const eventos: Evento[] = [
    {
      data: new Date(2025, 6, 5),
      nome: "Passeio ao Zoológico",
      descricao: "Visita guiada ao zoológico com atividades educativas sobre os animais."
    },
    {
      data: new Date(2025, 6, 12),
      nome: "Oficina de Arte",
      descricao: "Atividades criativas com pintura, desenho e artesanato."
    },
    {
      data: new Date(2025, 6, 19),
      nome: "Dia do Esporte",
      descricao: "Práticas esportivas e jogos em equipe para desenvolvimento físico e social."
    }
  ]

  const june2025 = new Date(2025, 6)
  const firstDayOfMonth = startOfMonth(june2025)
  const lastDayOfMonth = endOfMonth(june2025)
  const daysInMonth = eachDayOfInterval({ start: firstDayOfMonth, end: lastDayOfMonth })
  const weekDays = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb']

  const firstDayOfWeek = firstDayOfMonth.getDay()
  const previousMonthDays = Array.from({ length: firstDayOfWeek }, (_, i) => subDays(firstDayOfMonth, firstDayOfWeek - i))

  const remainingDays = 35 - (daysInMonth.length + firstDayOfWeek)
  const nextMonthDays = Array.from({ length: remainingDays }, (_, i) => addDays(lastDayOfMonth, i + 1))

  const getDayClass = (index: number, disabledDays: boolean): string => {
    const baseClasses = "border-blue/25 h-28 flex flex-col justify-start p-4 relative group"

    if (disabledDays) return "bg-blue/5 text-gray-400 border-l border-b border-blue/25 h-28 flex flex-col justify-start p-4 relative group"
    if (index === 4 || index === 11 || index === 18 || index === 25) return `${baseClasses} border-l border-r border-b`
    if (index === 26) return `${baseClasses} border-l border-b rounded-bl-xl`
    return `${baseClasses} border-l border-b`
  }

  const getEventosDoDia = (dia: Date) => {
    return eventos.filter(evento => isSameDay(evento.data, dia))
  }

  return (
    <div className="w-screen px-50 py-24 text-center">
      <h2 className="text-blue font-bold text-5xl">Programação Completa</h2>
      <div className="mt-14 rounded-xl overflow-hidden">
        <div className="grid grid-cols-7">
          {weekDays.map((day, index) => (
            <div key={index} className={`bg-blue/15 p-4 text-blue border-blue/25 border-b border-l border-t ${index === 0 && "rounded-tl-xl"} ${index === 6 && "rounded-tr-xl border-r"}`}>
              {day}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-7">
          {previousMonthDays.map((day, index) => (
            <button key={index} className={getDayClass(index, true)}
              onMouseEnter={() => setHoveredDay(day)}
              onMouseLeave={() => setHoveredDay(null)}>
              <span className="self-end">{format(day, 'd', { locale: ptBR })}</span>
            </button>
          ))}
          {daysInMonth.map((day, index) => (
            <button key={index} 
              onClick={() => setSelectedDay(day)} 
              onMouseEnter={() => setHoveredDay(day)}
              onMouseLeave={() => setHoveredDay(null)}
              className={`${getDayClass(index, false)} ${selectedDay?.getDate() === day.getDate() && "bg-blue/75 text-white"}`}>
              <span className="self-end">{format(day, 'd', { locale: ptBR })}</span>
              {getEventosDoDia(day).map((evento, eventIndex) => (
                <div key={eventIndex} className="text-xs mt-1 text-left text-blue-600 font-medium truncate">
                  {evento.nome}
                </div>
              ))}
              {hoveredDay && isSameDay(day, hoveredDay) && getEventosDoDia(day).length > 0 && (
                <div className="absolute z-10 bg-white p-2 rounded-lg shadow-lg text-sm w-48 text-left -translate-y-full top-0 left-1/2 -translate-x-1/2">
                  {getEventosDoDia(day).map((evento, eventIndex) => (
                    <div key={eventIndex} className="mb-2">
                      <p className="font-bold text-blue-600">{evento.nome}</p>
                      <p className="text-gray-600">{evento.descricao}</p>
                    </div>
                  ))}
                </div>
              )}
            </button>
          ))}
          {nextMonthDays.map((day, index) => (
            <button key={index} 
              className={`${getDayClass(index, true)} ${index == 1 && "rounded-br-xl border-r"}`}
              onMouseEnter={() => setHoveredDay(day)}
              onMouseLeave={() => setHoveredDay(null)}>
              <span className="self-end">{format(day, 'd', { locale: ptBR })}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
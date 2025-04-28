export default function Benefits() {
  const benefits = [
    {
      title: "Diversão com propósito",
      label: "Atividades que desenvolvem habilidades importantes",
      color: "fill-yellow",
    },
    {
      title: "Desenvolvimento motor",
      label: "Brincadeiras que estimulam coordenação e movimento",
      color: "fill-green",
    },
    {
      title: "Socialização",
      label: "Interação com outras crianças em ambiente seguro",
      color: "fill-blue",
    },
    {
      title: "Acolhimento",
      label: "Ambiente afetivo e cuidadoso para cada criança",
      color: "fill-red",
    },
  ];

  return (
    <div className="w-screen bg-blue/15 px-50 pt-48 pb-24 flex flex-col justify-center space-y-14 text-center">
      <h2 className="text-blue font-bold text-5xl">
        Porque escolher nossas férias?
      </h2>
      <div className="flex gap-4">
        {benefits.map((item, index) => (
          <div
            key={index}
            className="flex flex-col p-4 items-center shadow-soft rounded-xl bg-white border-t-6 border-blue"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              className={`${item.color} mb-2`}
              viewBox="0 0 16 16"
            >
              <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708" />
            </svg>
            <h3 className="font-bold">{item.title}</h3>
            <p className="text-sm">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

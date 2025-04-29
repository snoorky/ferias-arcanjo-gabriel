import { Stars } from "./stars";

const quote = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    className="w-7 h-7 -scale-x-100 fill-blue/50"
    viewBox="0 0 16 16"
  >
    <path d="M16 8c0 3.866-3.582 7-8 7a9 9 0 0 1-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7M7.194 6.766a1.7 1.7 0 0 0-.227-.272 1.5 1.5 0 0 0-.469-.324l-.008-.004A1.8 1.8 0 0 0 5.734 6C4.776 6 4 6.746 4 7.667c0 .92.776 1.666 1.734 1.666.343 0 .662-.095.931-.26-.137.389-.39.804-.81 1.22a.405.405 0 0 0 .011.59c.173.16.447.155.614-.01 1.334-1.329 1.37-2.758.941-3.706a2.5 2.5 0 0 0-.227-.4zM11 9.073c-.136.389-.39.804-.81 1.22a.405.405 0 0 0 .012.59c.172.16.446.155.613-.01 1.334-1.329 1.37-2.758.942-3.706a2.5 2.5 0 0 0-.228-.4 1.7 1.7 0 0 0-.227-.273 1.5 1.5 0 0 0-.469-.324l-.008-.004A1.8 1.8 0 0 0 10.07 6c-.957 0-1.734.746-1.734 1.667 0 .92.777 1.666 1.734 1.666.343 0 .662-.095.931-.26z" />
  </svg>
);

const testimonial = [
  {
    name: "Juliana",
    role: "Mãe do Luca (4 anos)",
    quote:
      "Nunca vi meu filho tão empolgado para ir à escola nas férias! Ele ama tudo!",
    rate: 4.5,
  },
  {
    name: "Carlos",
    role: "Pai da Manu (6 anos)",
    quote:
      "As atividades foram incríveis e organizadas. A gente se sente seguro e acolhido.",
    rate: 3.5,
  },
  {
    name: "Márcia",
    role: "Mãe da Laura (7 anos)",
    quote:
      "O programa de férias é completo e as crianças se divertem de verdade!",
    rate: 2,
  },
];

export function Testimonial() {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {testimonial.map((item, index) => (
        <div
          key={index}
          className={`flex flex-col p-7 shadow-soft rounded-xl border-t-6 border-blue item${index}`}
        >
          <div className="flex items-center justify-between mb-4">
            {quote()}
            <Stars rating={item.rate} />
          </div>
          <p className="text-gray-600 italic mb-4">“{item.quote}”</p>
          <p className="text-blue font-semibold">
            - {item.name}, {item.role}
          </p>
        </div>
      ))}
    </div>
  );
}

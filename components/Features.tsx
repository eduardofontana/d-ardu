import Image from "next/image";
import Link from "next/link";
import digital from "@/public/digital.jpg";
import marketing from "@/public/marketing.jpg";
import pentest from "@/public/pentest.png";

const Features = () => {
  return (
    <>
      <section className="text-white body-font bg-gray-900 mt-0">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col">
            <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
              <h1 className="sm:w-2/5 text-white font-bold title-font text-2xl mb-2 sm:mb-0">
                Criamos soluções tecnológicas para seu negócio.
              </h1>
              <p className="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0 text-justify text-white">
                Junte-se a nós nessa jornada tecnológica e descubra o que é
                possível alcançar com a D-ardu. Estamos ansiosos para
                compartilhar com você a emoção de um futuro onde a tecnologia se
                torna a melhor aliada para alcançar seus objetivos.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
            <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
              <div className="rounded-lg h-64 overflow-hidden">
                <Image
                  alt="content"
                  className="object-cover object-center h-full w-full"
                  src={digital}
                  width={1203}
                  height={503}
                />
              </div>
              <h2 className="text-xl font-bold title-font text-gray-900 mt-5">
                Consultoria Digital
              </h2>
              <p className="text-base leading-relaxed mt-2 text-justify">
                A segurança digital é essencial nos tempos modernos, protegendo
                informações pessoais e empresariais contra ameaças cibernéticas.
                Garantir uma forte proteção online é fundamental para preservar
                a privacidade e evitar prejuízos financeiros e reputacionais.
                Saiba mais sobre seus direitos e deveres conhecendo a LGPD.
              </p>
              <Link
                href={"/"}
                className="text-indigo-500 inline-flex items-center mt-3"
              >
                Saiba Mais
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  stroke-width="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </Link>
            </div>
            <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
              <div className="rounded-lg h-64 overflow-hidden">
                <Image
                  alt="content"
                  className="object-cover object-center h-full w-full"
                  src={marketing}
                  width={1203}
                  height={503}
                />
              </div>
              <h2 className="text-xl font-bold title-font text-gray-900 mt-5">
                Marketing de Negócios
              </h2>
              <p className="text-base leading-relaxed mt-2 text-justify">
                O marketing digital é uma poderosa ferramenta que impulsiona
                negócios, permitindo alcançar um público-alvo mais amplo e
                conquistar melhores resultados de forma estratégica e eficiente.
                Além disso, o marketing digital oferece a vantagem de mensurar o
                desempenho das campanhas em tempo real, permitindo ajustes e
                otimizações contínuas para maximizar o retorno sobre o
                investimento.
              </p>
              <Link
                href={"/"}
                className="text-indigo-500 inline-flex items-center mt-3"
              >
                Saiba Mais
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  stroke-width="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </Link>
            </div>
            <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
              <div className="rounded-lg h-64 overflow-hidden">
                <Image
                  alt="content"
                  className="object-cover object-center h-full w-full"
                  src={pentest}
                  width={1203}
                  height={503}
                />
              </div>
              <h2 className="text-xl font-bold title-font text-gray-900 mt-5">
                Pentest
              </h2>
              <p className="text-base leading-relaxed mt-2 text-justify">
                O pentest, ou teste de penetração, desempenha um papel crítico
                na segurança cibernética. Ao simular ataques de hackers éticos,
                o pentest identifica vulnerabilidades em sistemas, aplicativos e
                redes, permitindo que organizações fortaleçam suas defesas antes
                que criminosos cibernéticos possam explorá-las.
              </p>
              <Link
                href={"/"}
                className="text-indigo-500 inline-flex items-center mt-3"
              >
                Saiba Mais
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  stroke-width="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h2 className="text-xs text-indigo-400 tracking-widest font-medium title-font mb-1">
              ROOF PARTY POLAROID
            </h2>
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
              Master Cleanse Reliac Heirloom
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
              gentrify, subway tile poke farm-to-table. Franzen you probably
              havent heard of them man bun deep jianbing selfies heirloom prism
              food truck ugh squid celiac humblebrag.
            </p>
          </div>
          <div className="flex flex-wrap">
            <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-800">
              <h2 className="text-lg sm:text-xl text-white font-medium title-font mb-2">
                Shooting Stars
              </h2>
              <p className="leading-relaxed text-base mb-4">
                Fingerstache flexitarian street art 8-bit waistcoat. Distillery
                hexagon disrupt edison bulbche.
              </p>
              <a className="text-indigo-400 inline-flex items-center">
                Saiba Mais
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  stroke-width="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
            <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-800">
              <h2 className="text-lg sm:text-xl text-white font-medium title-font mb-2">
                The Catalyzer
              </h2>
              <p className="leading-relaxed text-base mb-4">
                Fingerstache flexitarian street art 8-bit waistcoat. Distillery
                hexagon disrupt edison bulbche.
              </p>
              <a className="text-indigo-400 inline-flex items-center">
                Saiba Mais
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  stroke-width="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
            <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-800">
              <h2 className="text-lg sm:text-xl text-white font-medium title-font mb-2">
                Neptune
              </h2>
              <p className="leading-relaxed text-base mb-4">
                Fingerstache flexitarian street art 8-bit waistcoat. Distillery
                hexagon disrupt edison bulbche.
              </p>
              <a className="text-indigo-400 inline-flex items-center">
                Saiba Mais
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  stroke-width="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
            <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-800">
              <h2 className="text-lg sm:text-xl text-white font-medium title-font mb-2">
                Melanchole
              </h2>
              <p className="leading-relaxed text-base mb-4">
                Fingerstache flexitarian street art 8-bit waistcoat. Distillery
                hexagon disrupt edison bulbche.
              </p>
              <a className="text-indigo-400 inline-flex items-center">
                Saiba Mais
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  stroke-width="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
          <button className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            Button
          </button>
        </div>
      </section>
    </>
  );
};

export default Features;

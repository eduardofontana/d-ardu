"use client";

import React, { useState, useEffect } from "react";

const Contact = () => {
  const [ipAddress, setIpAddress] = useState("Aguardando...");

  useEffect(() => {
    // Função para fazer uma solicitação AJAX para obter o endereço IP
    const getIpAddress = async () => {
      try {
        const response = await fetch("https://api.ipify.org?format=json");
        const data = await response.json();
        setIpAddress(data.ip);
      } catch (error) {
        console.error("Erro ao obter o endereço IP:", error);
        setIpAddress("Não foi possível obter o endereço IP.");
      }
    };

    // Chama a função para obter o endereço IP ao carregar a página
    getIpAddress();
  }, []);

  return (
    <>
      <section className="text-gray-600 body-font relative">
        <div className="absolute inset-0 bg-gray-300">
          <iframe
            width="100%"
            height="100%"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
            title="map"
            scrolling="no"
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d122840.30979050104!2d-47.92699179676356!3d-15.816620793864796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbr!4v1690837600482!5m2!1sen!2sbr"
          ></iframe>
        </div>
        <div className="container px-5 py-24 mx-auto flex">
          <div className="lg:w-1/3 md:w-1/2 bg-gray-900 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
            <h2 className="text-white text-lg mb-1 font-medium title-font">
              Feedback
            </h2>
            <p className="leading-relaxed mb-5 text-white">
              Entre em contato para saber mais ou deixe uma mensagem.
            </p>
            <div className="relative mb-4">
              <label
                htmlFor="email"
                className="leading-7 text-sm text-white"
              >
                E-mail
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="message"
                className="leading-7 text-sm text-white"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              ></textarea>
            </div>
            <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Enviar
            </button>
            <p className="text-xs text-white mt-3 text-center">
              Protected by D-ardu
            </p>

            {/* Exibição do endereço IP abaixo do botão */}
            <p className="text-sm text-white text-center">
              Seu endereço IP: {ipAddress}
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;

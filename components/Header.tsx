import React from "react";
import Image from "next/image";
import logo from "@/public/2.png";
import brand from "@/public/3.png";
import Link from "next/link";

const Header = () => {
  return (
    <>
      <header className="body-font text-whi bg-gray-900">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center mb-4 md:mb-0">
            <Image
              alt="testimonial"
              className="w-10 h-10 object-cover object-center rounded-full inline-block"
              src={logo}
              width={302}
              height={302}
            />
          </a>
          <Image
            className="md:ml-auto md:mr-auto flex flex-wrap items-center justify-center"
            src={brand}
            width={302}
            height={302}
            alt={"log"}
          />

          <Link href="/register" className="register">
            <button className="inline-flex items-center text-white bg-indigo-500 border-0 py-2 px-3 focus:outline-none hover:bg-indigo-400 rounded text-base mt-4 md:mt-0 mr-4 text-center">
              Cadastrar
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-4 h-4 ml-1"
                viewBox="0 0 24 24"
              ></svg>
            </button>
          </Link>
          <Link href="/sign-in" className="signin">
            <button className="inline-flex items-center text-white bg-indigo-500 border-0 py-2 px-3 focus:outline-none hover:bg-indigo-400 rounded text-base mt-4 md:mt-0">
              Login
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-4 h-4 ml-1"
                viewBox="0 0 24 24"
              ></svg>
            </button>
          </Link>
        </div>
      </header>
    </>
  );
};

export default Header;

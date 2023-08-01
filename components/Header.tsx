import Image from "next/image";
import brand from "@/public/1bg.png";

const Header = () => {
  return (
    <>
      <header className="body-font text-whi bg-gray-900">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Image
            className="md:ml-auto md:mr-auto flex flex-wrap items-center justify-center mt-5"
            src={brand}
            width={500}
            height={500}
            alt={"brand"}
          />
        </div>
        {/* Linha estilizada */}
      <div
        style={{
          borderBottom: "1px solid #ffffff", /* Estilo da linha - pode ajustar conforme necessário */
          width: "100%",
          margin: "1px 5px",
        }}
      ></div>
      </header>
    </>
  );
};

export default Header;

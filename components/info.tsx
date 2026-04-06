import Image from "next/image";
import familia from "@/public/familia.jpg";
import mezcal from "@/public/puro_mezcal.jpg";
import banda from "@/public/escaleras-03.png";

const Info = () => {
  return (
    <div className="flex flex-col justify-center items-center px-4 gap-16 mt-8 mb-16">

      <h1 className="font-bold text-3xl md:text-6xl text-center uppercase tracking-wide">
        Mariachi Puro Mezcal
      </h1>

      {/* Bloque 1: imagen izquierda, texto derecha en desktop */}
      <div className="flex flex-col md:flex-row items-center gap-8 w-full max-w-5xl">
        <Image
          src={mezcal}
          alt="Puro Mezcal"
          className="w-[300px] md:w-[420px] h-auto rounded-lg shadow-md flex-shrink-0"
        />
        <p className="text-lg md:text-2xl md:text-left text-center leading-relaxed text-muted-foreground">
          Musicalizamos todo tipo de eventos: bautismos, casamientos, cumpleaños,
          quince años, celebraciones religiosas argentinas y fiestas patronales.
          Lo mejor de la música tradicional mexicana. Shows bailables con música
          nacional argentina, boliviana, paraguaya, peruana y colombiana.
          Serenatas virtuales.
        </p>
      </div>

      {/* Bloque 2: texto izquierda, imagen derecha en desktop */}
      <div className="flex flex-col md:flex-row-reverse items-center gap-8 w-full max-w-5xl">
        <Image
          src={familia}
          alt="En Familia"
          className="w-[300px] md:w-[420px] h-auto rounded-lg shadow-md flex-shrink-0"
        />
        <p className="text-lg md:text-2xl md:text-left text-center leading-relaxed text-muted-foreground">
          Somos músicos profesionales y nos dedicamos con alegría a musicalizar
          todo tipo de eventos, con lo mejor de la música tradicional mexicana.
        </p>
      </div>

      {/* Imagen final ancha */}
      <Image
        src={banda}
        alt="Nosotros en Banda"
        className="w-full max-w-3xl h-auto rounded-lg shadow-md"
      />

    </div>
  );
};

export default Info;

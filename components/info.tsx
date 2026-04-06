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

      {/* Bloque 1 */}
      <div className="flex flex-col md:flex-row items-center gap-8 w-full max-w-5xl">
        <Image
          src={mezcal}
          alt="Puro Mezcal"
          className="w-[300px] md:w-[420px] h-auto rounded-lg shadow-md flex-shrink-0"
        />
        <div className="flex flex-col gap-4 md:text-left text-center">
          <h2 className="text-2xl md:text-4xl font-bold uppercase tracking-wide">
            Hacemos que cada momento se convierta en un recuerdo eterno
          </h2>
          <p className="text-lg md:text-xl leading-relaxed text-muted-foreground">
            Hay celebraciones que merecen algo más que música de fondo. 
            Merece emoción, presencia y el alma de la música mexicana en vivo. 
            Bautismos, casamientos, quinceaños, fiestas patronales — 
            <span className="font-semibold text-foreground"> estamos donde la alegría necesita una voz.</span>
          </p>
          <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
            También hacemos shows bailables con música argentina, boliviana, 
            paraguaya, peruana y colombiana. Y si querés sorprender a alguien 
            especial, nuestras <span className="font-semibold text-foreground">serenatas virtuales</span> llegan 
            a donde vos no podés.
          </p>
        </div>
      </div>

      {/* Bloque 2 */}
      <div className="flex flex-col md:flex-row-reverse items-center gap-8 w-full max-w-5xl">
        <Image
          src={familia}
          alt="En Familia"
          className="w-[300px] md:w-[420px] h-auto rounded-lg shadow-md flex-shrink-0"
        />
        <div className="flex flex-col gap-4 md:text-left text-center">
          <h2 className="text-2xl md:text-4xl font-bold uppercase tracking-wide">
            Músicos de corazón, profesionales de alma
          </h2>
          <p className="text-lg md:text-xl leading-relaxed text-muted-foreground">
            No somos solo una banda — somos una familia que vive y respira la 
            música mexicana. Cada canción que tocamos lleva años de dedicación, 
            pasión y el compromiso de hacer que tu evento sea 
            <span className="font-semibold text-foreground"> exactamente como lo soñaste.</span>
          </p>
          <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
            Nos adaptamos a tu evento, tu presupuesto y tus canciones favoritas. 
            Porque el mejor mariachi es el que hace sentir a todos como en casa.
          </p>
        </div>
      </div>

      {/* Imagen final */}
      <Image
        src={banda}
        alt="Nosotros en Banda"
        className="w-full max-w-3xl h-auto rounded-lg shadow-md"
      />

    </div>
  );
};

export default Info;

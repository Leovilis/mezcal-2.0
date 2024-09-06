import familia from "@/public/familia.jpg";
import mezcal from "@/public/puro_mezcal.jpg";
import banda from "@/public/escaleras-03.png"
const Info = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-bold text-3xl md:text-6xl text-center mt-5 uppercase ">
        Mariachi Puro Mezcal
      </h1>
      <img src={mezcal.src} className="w-[300px] md:w-[400px] h-auto mt-10" alt="Puro Mezcal" />
      <h2 className="w-11/12 mt-10 p-6 uppercase md:text-justify text-xl md:text-3xl">
        MUSICALIZAMOS TODO TIPO DE EVENTOS Bautismos, Casamientos, Cumpleaños,
        quince años, Celebraciones Religiosas Argentinas, Fiestas Patronales. Lo
        mejor de la musica tradicional mexicana. SHOWS BAILABLES CON MUSICA:
        Nacional Argentina, Boliviana, Paraguaya, Peruana, Colombiana Serenatas
        Virtuales. Somos músicos profesionales y nos dedicamos con alegría a
        musicalizar todo tipo de eventos, con lo mejor de la música tradicional
        Mexicana.
      </h2>
      <img src={familia.src} alt="familia" className="w-[300px] md:w-[400px] h-auto mt-10" alt="En Familia" />
      <h2 className="w-11/12 mt-10 p-6 uppercase md:text-justify text-lg md:text-3xl">
        Somos músicos profesionales y nos dedicamos con alegría a musicalizar
        todo tipo de eventos, con lo mejor de la música tradicional Mexicana.
      </h2>
      <img src={banda.src} alt="banda" className="w-[300px] md:w-[600px] h-auto mt-10" alt="Nosotros en Banda"/>
    </div>
  );
};

export default Info;

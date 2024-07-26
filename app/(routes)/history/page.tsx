import mezcal from "@/public/puro_mezcal.jpg"

const Page = () => {
  return (
    <div className="md:flex justify-center items-center md:items-start md:w-full">
      <img src={mezcal.src} alt="mezcal" className="md:w-[500px] w-[200px] h-auto mx-auto md:ml-5" />
      <h2 className="md:w-4/6 mt-5 mx-5 uppercase text-justify text-lg">
        En un pequeño rincón de José C. Paz, un grupo de apasionados por la
        música tradicional mexicana se unió con un sueño común: llevar el
        mariachi a lo más alto. Así nació “Mariachi Puro Mezcal”. Con el
        tiempo, el grupo comenzó a destacarse en las fiestas y eventos locales.
        Su energía y pasión por la música se propagaron. El nombre reflejaba su
        autenticidad y la fuerza de su música, como un buen trago de la bebida
        espirituosa. El mariachi recorrió pueblos vecinos y ciudades cercanas,
        llevando su música a todos los rincones. Interpretaron corridos,
        rancheras, baladas y todo tipo de ritmos con una pasión que hacía vibrar los corazones de
        quienes los escuchaban. En una gira por Jujuy, conocieron a
        un famoso cantante de música folklórica que los invitó a tocar en reconocida peña. 
        Hoy, “Mariachi Puro Mezcal” sigue tocando con la misma
        pasión y alegría. Sus trajes de charro brillan bajo el sol, y sus voces
        llenan los escenarios con notas que parecen escapar del mismísimo cielo.
        Aunque han enfrentado desafíos y cambios a lo largo de los años, su amor
        por la música y su espíritu inquebrantable los mantienen unidos como una
        familia musical.
      </h2>
    </div>
  );
};

export default Page;

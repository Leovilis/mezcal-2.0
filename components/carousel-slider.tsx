/* eslint-disable @next/next/no-img-element */
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import  cultura  from "../public/mezcal.jpg"
import  escalera from "../public/escaleras-03.png"
import  puromezcal from "../public/puro_mezcal.jpg"
import  serenata1  from "../public/serenata-01.jpg"
import  serenata2  from "../public/serenata-04.jpg"
import  casamiento  from "../public/casamiento.jpg"
import  familia  from "../public/familia.jpg"

const dataCarousel = [
  {
    id: 1,
    img: familia.src
  },
  {
    id: 2,
    img: cultura.src
  },
  {
    id: 3,
    img: escalera.src
  },
  {
    id: 4,
    img: puromezcal.src
  },
  {
    id: 5,
    img: serenata1.src
  },
  {
    id: 6,
    img: serenata2.src
  },
  {
    id: 7,
    img: casamiento.src
  },
]



const CarouselSlider = () => {
  return (
    <>
    <div className="md:px-16 flex items-center">
        <Carousel className="flex md:max-w-2xl md:w-[700px] md:mx-auto md:ml-[265px]">
            <CarouselContent className="flex items-center md:ml-[50px]">
            {dataCarousel.map((image) =>
                <CarouselItem key={image.id}>
                    <img 
                        src={`${image.img}`} 
                        alt="Mariachis"
                        className="rounded-lg w-[350px] md:w-[500px] h-auto mx-auto md:mx-5 drop-shadow-lg dark:drop-shadow-sm" 
                    />
                </CarouselItem>
            )}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
            
        </Carousel>
    </div>
</>
  )
}

export default CarouselSlider

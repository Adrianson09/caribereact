import { useTranslation } from "react-i18next";
import { Suspense } from "react";

const Sostenibilidad = () => {

  const {t} = useTranslation(["caribe"]);

  
  return (
    <>
    <Suspense>


    <div id="sostenibilidad" className="container p-4  m-auto pb-20">
        <h1 className='text-center m-5  text-4xl font-bold text-gray-800'>{t("sostenibilidad-heading")}</h1>
        <div className="border-b-4 border-lime-600 text-4xl font-bold text-gray-800 text-center m-2 p-2"/> 
        <p className="p-4 sm:p-0">
        “{t("sostenibilidad-text")} </p>
        <ul className="mt-2 p-8 mx-12 sm:p-0">
            <li className="list-disc">{t("sostenibilidad-li1")}</li>
            <li className="list-disc">{t("sostenibilidad-li2")}</li>
            <li className="list-disc">{t("sostenibilidad-li3")}"</li>
        </ul>
    </div>

<div className="container m-auto p-4 pb-20">
  <h1 className='text-center m-5 text-4xl font-bold text-gray-800'>{t("sostenibilidad-heading2")}</h1>
  <p className="text-center">{t("sostenibilidad-text2")}</p>
  <div className="grid mt-5 md:grid-cols-3 gap-4">
    <div className="relative group">
      <img className="w-full transform transition duration-300 group-hover:rotate-24" src="/img/residenceinn.jpg" alt="Residence Inn Escazu Costa Rica" />
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-90 opacity-0 group-hover:opacity-100 transition duration-300">
        <p className="text-white text-lg font-bold">Residence Inn Escazú Costa Rica</p>
      </div>
    </div>
    
    <div className="relative group">
      <img className="w-full transform transition duration-300 group-hover:rotate-24" src="/img/courtyardcr.webp" alt="Courtyard Alajuela"  />
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-90 opacity-0 group-hover:opacity-100 transition duration-300">
        <p className="text-white text-lg font-bold">Courtyard Alajuela Costa Rica</p>
      </div>
    </div>

    <div className="relative group">
      <img className="w-full transform transition duration-300 group-hover:rotate-24" src="/img/fairfieldSalvador.jpg" alt="Fairfield Salvador Hotel" />
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-90 opacity-0 group-hover:opacity-100 transition duration-300">
        <p className="text-white text-lg font-bold">Fairfield San Salvador</p>
      </div>
    </div>

    <div className="relative group">
      <img className="w-full transform transition duration-300 group-hover:rotate-24" src="/img/courtyardKingston.webp" alt="Courtyard Kingston" />
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-90 opacity-0 group-hover:opacity-100 transition duration-300">
        <p className="text-white text-lg font-bold">Courtyard Kingston Jamaica</p>
      </div>
    </div>

    <div className="relative group">
      <img className="w-full transform transition duration-300 group-hover:rotate-24" src="/img/exterior1_final.png" alt="AC Hotel " />
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-90 opacity-0 group-hover:opacity-100 transition duration-300">
        <p className="text-white text-lg font-bold">AC by Marriott Escazú Costa Rica</p>
      </div>
    </div>

    <div className="relative group ">
      <img className="w-full transform transition duration-300 group-hover:rotate-24 " src="/img/hyattPlace.jpg" alt="Hyatt Place Curridabat Costa Rica" />
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-90 opacity-0 group-hover:opacity-100 transition duration-300">
        <p className="text-white text-lg font-bold">Hyatt Place Costa Rica</p>
      </div>
    </div>
    
        </div>
        <p className="mt-10 text-center">{t("sostenibilidad-text3")}</p>
    </div>

    <div className="container m-auto pb-20">
        <h1 className='text-center m-5  text-4xl font-bold text-gray-800'>{t("sostenibilidad-heading3")}</h1>
        <div className="border-b-4 border-lime-600 text-4xl font-bold text-gray-800 text-center mt-2"/> 
        <div className="grid md:grid-cols-7 grid-cols-2" >
            
              <img src="/img/imagen1.svg" className="w-full " alt="Imagen 1"/>
              <img src="/img/Imagen2.svg" className="w-full " alt="Imagen 2"/>
              <img src="/img/imagen3.svg" className="w-full " alt="Imagen 3"/>
              <img src="/img/imagen4.svg" className="w-full " alt="Imagen 4"/>
              <img src="/img/imagen5.svg" className="w-full " alt="Imagen 5"/>
              <img src="/img/imagen6.svg" className="w-full " alt="Imagen 6"/>
              <img src="/img/imagen7.svg" className="w-full " alt="Imagen 7"/>
        
        </div>
    </div>
    </Suspense>


    </>
  )
}

export default Sostenibilidad
import { useTranslation } from "react-i18next";
import { Suspense } from "react";
import { ListProjects } from "./ListProjects";
// import { Carousel } from "@material-tailwind/react";



const Vision = () => {
    const {t} = useTranslation(["caribe"]);

  return (
    <>
    <Suspense fallback="Cargando Traducciones">

        <div id="vision" className=" p-20 mb-10  flex-row justify-center items-center text-center ">
            <h1 className="border-b-4 border-[#6AAB33] mb-4 pb-4 text-4xl font-bold text-[#6AAB33]">{t("about")}</h1>
            <div className="grid sm:grid-cols-2 mx-auto gap-10">
              <div>
                <p className="mt-5 text-justify">{t("vision-text")}</p>
                <p className="mt-5 text-justify">{t("corporate-text")}</p>

              </div>
              <div>
                <p className="mt-5 text-justify">{t("corporate-text2")}</p>
                <p className="mt-5 text-justify">{t("corporate-heading2")}</p>

              </div>

            </div>
            
            
        </div>

{/* Sostenibilidad */}
        {/* <div className="bg-[#6AAB33] p-20 mb-20 text-white relative">
        <h1 id="sostenibilidad" className=" mb-4 pb-4 text-2xl sm:text-4xl font-bold ">{t("sostenibilidad-heading")}</h1>
            <div className="grid sm:grid-cols-2 mx-auto sm:px-10  gap-10">
              <div>
                <p className=" text-justify">{t("sostenibilidad-text")}</p>

              </div>
              <div>
                <ul className=" ">
                  <li className="list-disc">{t("sostenibilidad-li1")}</li>
                  <li className="list-disc">{t("sostenibilidad-li2")}</li>
                  <li className="list-disc">{t("sostenibilidad-li3")}"</li>
        </ul>

              </div>
        </div>
        <img className=" absolute sm:top-10 top-6 right-10 " src="/img/sostenibilidad.svg" alt="Sostenibilidad " width={100} height={200} />
        </div> */}



{/* Nuestro equipo */}

<div  className=" p-10 sm:p-0  mb-20  flex-row justify-center items-center text-center ">
            <h1 className="  mb-4 pb-4 text-4xl font-bold text-[#6AAB33]">{t("team-heading")}</h1>
            <p className="mt-4 pb-10 sm:px-52 text-justify">
            {t("team-text")}
      </p>
  <div className="flex mx-auto justify-center">
    <img className="rounded-lg" src="/img/TeamCH.svg" alt="" />

  </div>
  </div>

  {/* Sostenibilidad */}

  <div className=" p-20 mb-10   relative">
        <h1 id="sostenibilidad" className=" text-[#6AAB33] mb-4 pb-4 text-center text-2xl sm:text-4xl font-bold ">{t("sostenibilidad-heading")}</h1>
            <div className="grid sm:grid-cols-2 mx-auto sm:px-10  gap-10">
              <div>
                <p className=" text-justify">{t("sostenibilidad-text")}</p>

              </div>
              <div>
                <ul className=" ">
                  <li className="list-disc">{t("sostenibilidad-li1")}</li>
                  <li className="list-disc">{t("sostenibilidad-li2")}</li>
                  <li className="list-disc">{t("sostenibilidad-li3")}"</li>
        </ul>

              </div>
        </div>
        <img className=" absolute sm:top-10 top-6 right-10 " src="/img/sostenibilidadGreen.svg" alt="Sostenibilidad " width={100} height={200} />
        <img className=" absolute sm:top-10 top-6 left-10 " src="/img/sostenibilidadGreen.svg" alt="Sostenibilidad " width={100} height={200} />
        </div>

{/* Sostenibilidad */}
   

   

    <div id="proyectos" className="    flex-row justify-center items-center text-center ">
            <h1 className=" text-4xl font-bold text-[#6AAB33]">{t("portfolio")}</h1>
   </div>
    <ListProjects/>


    {/* <div className="grid h-auto m-auto mx-auto my-10 w-[90%] p-10 grid-cols-1">

      <Carousel>

      
        
      <section  className="block rounded-lg p-4 shadow-sm shadow-indigo-100">
      <img
        alt="Home"
        src="/img/exterior1_final.png"
        className="h-auto  w-auto rounded-md object-cover"
      />

      <div className="mt-2">
      <div>
        <p className="font-medium">AC by Marriott Escazú Costa Rica</p>
      </div>
    

    <div className="mt-6  gap-10 text-xs">
      <div className="flex justify-between sm:shrink-0  sm:gap-2">
        <img src="/img/Imagen3.png" width={40} height={40} alt="" />
        <img src="/img/Imagen3.png" width={40} height={40} alt="" />
        <img src="/img/Imagen3.png" width={40} height={40} alt="" />
        <img src="/img/Imagen3.png" width={40} height={40} alt="" />
        <img src="/img/Imagen3.png" width={40} height={40} alt="" />
        <img src="/img/Imagen3.png" width={40} height={40} alt="" />

      </div>
      </div>
      </div>

      
    </section>
      <section className="block rounded-lg p-4 shadow-sm shadow-indigo-100">
      <img
        alt="Home"
        src="/img/residenceinn.avif"
        className="h-auto w-full rounded-md object-cover"
      />

      <div className="mt-2">
      <div>
        <p className="font-medium">Residence Inn Escazú Costa Rica</p>
      </div>
    

    <div className="mt-6  gap-10 text-xs">
      <div className="flex justify-between sm:shrink-0  sm:gap-2">
        <img src="/img/Imagen2.jpg" width={40} height={40} alt="" />
        <img src="/img/Imagen2.jpg" width={40} height={40} alt="" />
        <img src="/img/Imagen2.jpg" width={40} height={40} alt="" />
        <img src="/img/Imagen2.jpg" width={40} height={40} alt="" />
        <img src="/img/Imagen2.jpg" width={40} height={40} alt="" />
        <img src="/img/Imagen2.jpg" width={40} height={40} alt="" />

      </div>
      </div>
      </div>

      
    </section>
  </Carousel>
  </div> */}
 </Suspense>
    </>

  )
}

export default Vision
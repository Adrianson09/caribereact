import { useTranslation } from "react-i18next";
import { Suspense } from "react";
import { ListProjects } from "./ListProjects";
import { ListProjectsSolds } from "./ListProjectsSolds";
// import { Carousel } from "@material-tailwind/react";



const Vision = () => {
    const {t} = useTranslation(["caribe"]);

  return (
    <>
    <Suspense fallback="Cargando Traducciones">

        <div id="vision" className=" md:p-20 p-8  flex-row justify-center items-center text-center ">
            <h1 className="border-b-4 border-[#6AAB33] mb-4 pb-4 text-2xl md:text-4xl font-bold text-[#6AAB33]">{t("about")}</h1>
            <div className="grid sm:grid-cols-2 md:px-10 mx-auto md:gap-10">
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






{/* Nuestro equipo */}

<div  className="md:p-20 p-8  flex-row justify-center items-center text-center">
            <h1 className="  mb-4 pb-4 text-2xl md:text-4xl font-bold text-[#6AAB33] ">{t("team-heading")}</h1>
            <div className="grid sm:grid-cols-1 md:px-10 mx-auto md:gap-10">
              <div>
                  <p className="mt-5 text-justify">
                  {t("team-text")}
                  </p>
              </div>
            </div>
  <div className="flex mx-auto justify-center">
    {/* <img className="rounded-lg" src="/img/TeamCH.svg" alt="" /> */}
  

  </div>
  </div>

  {/* Sostenibilidad */}

  <div className="md:p-20 p-8  flex-row justify-center items-center text-center">
        <h1 id="sostenibilidad" className=" text-[#6AAB33] mb-4 pb-4 text-center text-2xl sm:text-4xl font-bold ">{t("sostenibilidad-heading")}</h1>
            <div className="grid sm:grid-cols-2 mx-auto sm:px-10  gap-10">
              <div>
                <p className="mt-5 text-justify">{t("sostenibilidad-text")}</p>

              </div>
              <div>
                <ul className="text-justify ">
                  <li className="list-disc ">{t("sostenibilidad-li1")}</li>
                  <li className="list-disc">{t("sostenibilidad-li2")}</li>
                  <li className="list-disc">{t("sostenibilidad-li3")}</li>
        </ul>
              </div>
        </div>
        {/* <div className="flex mx-auto justify-center">
        <img src="/img/Portafolio.png" alt="" />
        </div> */}
        
        </div>

{/* Sostenibilidad */}
   

   

    <div id="proyectos" className="    flex-row justify-center items-center text-center ">
            <h1 className="text-2xl md:text-4xl font-bold text-[#6AAB33]">{t("portfolio")}</h1>
   </div>
    <ListProjects/>

    <div id="proyectos" className="    flex-row justify-center items-center text-center ">
            <h1 className=" text-2xl md:text-4xl  font-bold text-[#6AAB33]">{t("portfolioVendido")}</h1>
   </div>
   <ListProjectsSolds/>


    
 </Suspense>
    </>

  )
}

export default Vision
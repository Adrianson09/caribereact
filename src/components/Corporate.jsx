import { useTranslation } from "react-i18next";
import { Suspense } from "react";

const Corporate = () => {

    const {t} = useTranslation(["caribe"]);

  return (
    <>
    <Suspense>


    {/* <div className="flex flex-col sm:flex-row mt-10   container m-auto gap-6">
        <div className="sm:column sm:w-1/2 m-5">
            <img className="rounded-sm" src="/img/fairfield.jpeg" alt="Imagen de FairField San Jose" />
        </div>
        <div className="sm:column sm:w-1/2 m-5">
            <h2 className="border-b-4 border-lime-600 text-4xl font-bold text-gray-800 text-center">Perfil Corporativo</h2>
            <p className="mt-10 text-justify">Desarrollamos y administramos inversiones hoteleras de estándares superiores en forma sostenible, rentable y con un equipo de alto nivel.</p>

        </div>
    </div> */}
    <div className="flex flex-col-reverse sm:flex-row  mt-10 container pb-20 m-auto gap-6">
        <div className=" sm:column sm:w-1/2 m-5">
            <h2 className=" text-4xl font-bold text-gray-800 text-center"> {t("corporate-heading")} </h2>
            <div className="border-b-4 border-lime-600 text-4xl font-bold text-gray-800 text-center mt-2"> </div>
            <h1 className="mt-5 text-2xl"> {t("corporate-heading2")}  </h1>
            <p className="mt-5 text-justify">{t("corporate-text")}</p>
            <p className="mt-5 text-justify">{t("corporate-text2")}</p>

        </div>
        <div className="sm:column sm:w-1/2 m-5 flex">
            <img className="rounded-sm w-full object-cover animate-fade animate-once animate-duration-1000 animate-delay-500 animate-ease-in-out animate-normal animate-fill-forwards" src="/img/courtyardcr.webp" alt="Imagen de FairField San Jose" />
        </div>
    </div>
    
    </Suspense>
    </>
  )
}

export default Corporate
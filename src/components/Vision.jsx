import { useTranslation } from "react-i18next";
import { Suspense } from "react";


const Vision = () => {
    const {t} = useTranslation(["caribe"]);

  return (
    <Suspense fallback="Cargando Traducciones">

        <div id="vision" className="mt-10 w-[60%] flex-row justify-center items-center text-center m-auto pt-20 pb-20">
            <h2 className="border-b-4 border-lime-600 text-4xl font-bold text-gray-800">{t("vision-title")}</h2>
            <h1 className="mt-5 text-2xl">{t("vision-text")}</h1>
            
            
        </div>
    </Suspense>
  )
}

export default Vision
// import { Link } from "react-router-dom"
// import { useTranslation } from "react-i18next";
import { Suspense } from "react";

// const {t} = useTranslation(["caribe"]);


export const ListProjectsSolds = () => {
  return (
    <Suspense>

    <div className=" px-28  mx-auto my-10">
        <div className="grid  md:grid-cols-3 gap-4">
   

    {/* Nuevo grid */}



    <a rel="noreferrer" href="https://www.marriott.com/en-us/hotels/sjocy-courtyard-san-jose-escazu" target='_blank' className=" block rounded-lg p-4 shadow-sm shadow-indigo-100">
<div className="relative group">

  <img
    alt="Home"
    src="/img/CourtyardESCAZU.jpg"
    className="h-56 w-full rounded-md object-cover w-full transform transition duration-300 group-hover:rotate-24"
  />

        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black rounded-lg bg-opacity-90 opacity-0 group-hover:opacity-100 transition duration-300">
        <p className="text-white text-lg font-bold">Courtyard Escazú</p>
        {/* <p className="text-white text-lg font-bold">Año de Construcción: 2018</p>
        <p className="text-white text-lg font-bold">Habitaciones: 126</p> */}
        <p className="border-2 p-2 mt-2 text-white text-lg font-bold">Ver Hotel</p>

      </div>
      </div>
  <div className="mt-2">
   

      <div>
      

        <p className="font-medium">Courtyard by Marriott San José Escazú, Costa Rica</p>
      </div>
    

    
    </div>
  
</a>


{/* nuevo grid */}

    {/* Nuevo grid */}

    <a rel="noreferrer" href="https://www.marriott.com/es/hotels/sdqcy-courtyard-santo-domingo" target='_blank' className=" block rounded-lg p-4 shadow-sm shadow-indigo-100">
    <div className="relative group">
  <img
    alt="Home"
    src="/img/COURTYARDSTDOMINGO.jpg"
    className="h-56 w-full rounded-md object-cover w-full transform transition duration-300 group-hover:rotate-24"
  />

        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black rounded-lg bg-opacity-90 opacity-0 group-hover:opacity-100 transition duration-300">
        <p className="text-white text-lg font-bold">Courtyard Santo Domingo</p>
        {/* <p className="text-white text-lg font-bold">Año de Construcción: 2009</p>
        <p className="text-white text-lg font-bold">Habitaciones: 109</p> */}
        <p className="border-2 p-2 mt-2 text-white text-lg font-bold">Ver Hotel</p>

      </div>
</div>

  <div className="mt-2">
   

      <div>
      

        <p className="font-medium">Courtyard by Marriott Santo Domingo, Republica Dominicana</p>
      </div>
    

    
    </div>
  
</a>

{/* nuevo grid */}

   {/* Nuevo grid */}

   <a rel="noreferrer" href="https://www.marriott.com/es/hotels/poscy-courtyard-port-of-spain" target='_blank' className=" block rounded-lg p-4 shadow-sm shadow-indigo-100">
    <div className="relative group">
  <img
    alt="Home"
    src="/img/CourtyardPTSpain.avif"
    className="h-56 w-full rounded-md object-cover w-full transform transition duration-300 group-hover:rotate-24"
  />

        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black rounded-lg bg-opacity-90 opacity-0 group-hover:opacity-100 transition duration-300">
        <p className="text-white text-lg font-bold">Courtyard Port of Spain</p>
        {/* <p className="text-white text-lg font-bold">Año de Construcción: 2022</p>
        <p className="text-white text-lg font-bold">Habitaciones: 120</p> */}
        <p className="border-2 p-2 mt-2 text-white text-lg font-bold">Ver Hotel</p>

      </div>
</div>

  <div className="mt-2">
   

      <div>
      

        <p className="font-medium ">Courtyard by Marriott Port of Spain, Trinidad and Tobago</p>
      </div>
    

    
    </div>
  
</a>

{/* nuevo grid */}


   {/* Nuevo grid */}

   

{/* nuevo grid */}

    
        </div>
    </div>

    </Suspense>
  )
}

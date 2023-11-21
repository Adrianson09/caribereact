
import { useTranslation } from "react-i18next";
import { Suspense } from "react";


const Footer = () => {
    function getYear() {
        const fechaActual = new Date();
        const currentYear = fechaActual.getFullYear();
        return currentYear;
      }
      
      // Uso:
      const year = getYear();
    const {t} = useTranslation(["caribe"]);

  return (

    <Suspense>


    <footer className='bg-black/90 text-white'>
        <div className='md:grid md:grid-cols-2 gap-10 container m-auto p-10'>
            <div className='mb-5 sm:mb-0'>
                <h3>COSTA RICA</h3>
                <ul>
                <li>Tel: +(506) 2208-8890</li>
                <li>205 Avenida Escazú, Piso 5, Suite 5,<br/>
                    10203 San José, Escazú,<br/>
                    San José, Costa Rica
                </li>
                </ul>


            </div>
            <div>
            <h3>MÉXICO</h3>
            <ul>
                <li>Tel: +52 (55) 46313338

                </li>
                <li>Av. Del Imán #151, Int A110, Piso 1,<br/>
                    Suite B-38, Col. Pedregal De Carrasco.<br/>
                    México CDMX 04700

                </li>
            </ul>



            </div>

        </div>
        <p className='text-center pb-2'>© {year}. {t("copy-right")}</p>
    </footer>
    </Suspense>

  )
}

export default Footer
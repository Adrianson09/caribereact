import { useState } from 'react'
import {AiOutlineMenuFold} from 'react-icons/ai'
import { useTranslation } from "react-i18next";
import { Suspense } from "react";

const Navbar = () => {

    const [nav, setNav] = useState(false);
    const handleNav = () =>{
        setNav(!nav);
        if (!nav) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'scroll'
        }
    };
    const {t, i18n} = useTranslation(["caribe"]);
    const changeLanguage = () =>{
        const currentLanguage = i18n.language;

  // Cambiar de 'es' a 'en' y viceversa
  const newLanguage = currentLanguage === 'es' ? 'en' : 'es';

  i18n.changeLanguage(newLanguage);
    }

    
  return (
    <Suspense>

        <header className='absolute w-full flex justify-between p-4 items-center scroll-smooth'>
            <a className='z-20 ' href="#logo">
                <img id='logo' className='z-20 ' src="/img/CaribeHospitalitySVGGrey.svg" alt="Logo" width={250} height={177} />
            </a>
            <ul className=' flex-row hidden sm:flex w-full h-full z-20 items-center justify-center text-white transition duration-500 ease-in-out scroll-smooth'>
                
                        <li className='font-bold  p-8 ease-in-out duration-500 hover:scale-125 scroll-smooth'> <a href="#logo">{t("inicio")}</a> </li>
                        <li className='font-bold  p-8 ease-in-out duration-500 hover:scale-125 scroll-smooth'><a  href="#vision">{t("about")}</a></li>
                        <li className='font-bold  p-8 ease-in-out duration-500 hover:scale-125'> <a href="#sostenibilidad">{t("sustainability")}</a></li>
                        <li className='font-bold  p-8 ease-in-out duration-500 hover:scale-125'><a href="#proyectos">{t("portfolio")}</a></li>
                        <button className='animate-pulse  hover:bg-slate-50 hover:text-black transition duration-700 ease-in-out rounded-md border py-2 px-3 mx-2 ' onClick={changeLanguage} >{t("currentLang")}</button>
                        
                </ul>
           <div className='bg-[#6AAB33] rounded-full'>
            
            <AiOutlineMenuFold onClick={handleNav} className='z-20   text-white  cursor-pointer sm:hidden fixed right-10 top-10' size={25}/>
           </div>     
            <div className={nav ? 'ease-in-out duration-500 fixed text-gray-300 left-0 top-0 w-full h-screen bg-black/90 px-4 py-7 flex-col z-10' 
            : 'absolute top-0 h-screen left-[-100%] ease-in-out duration-500 z-10'}>
                <ul className='flex flex-col fixed w-full h-full items-center justify-center'>
                    <li className='font-bold text-3xl p-8 ease-in-out duration-500 hover:scale-125 '><a href="#logo">{t("inicio")}</a></li>
                    <li  className='font-bold text-3xl p-8 ease-in-out duration-500 hover:scale-125 '><a  href="#vision">{t("about")}</a></li>
                    <li className='font-bold text-3xl p-8 ease-in-out duration-500 hover:scale-125'> <a href="#sostenibilidad">{t("sustainability")}</a></li>
                    <li className='font-bold text-3xl p-8  ease-in-out duration-500 hover:scale-125'><a href="#proyectos">{t("portfolio")}</a></li>
                    <button className='animate-pulse hover:bg-slate-50 hover:text-black transition duration-700 ease-in-out rounded-md border py-2 px-3 md:mx-2  my-2 ' onClick={changeLanguage} >{t("currentLang")}</button>
                </ul>
            </div>
        </header>
    </Suspense>
  )
}

export default Navbar
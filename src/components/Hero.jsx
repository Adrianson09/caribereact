

const Hero = () => {
  return (
    <div className="w-full h-screen ">
        <img className="top-0 left-0 w-full h-screen object-cover transition-transform transform hover:scale-110" src="/img/exterior1_final.png" alt="Hotel AC Ezcazu" />
        <div className="bg-black/60 absolute top-0 left-0 w-full h-screen"/>
        <div className="absolute top-0  w-full h-full flex flex-col justify-center items-center text-white ">
            <div className="  max-w-[1100px] m-auto absolute p-4 ">
                <h1 className="text-center font-bold text-5xl md:text-7xl drop-shadow-2xl animate-jump animate-once animate-duration-1000 animate-delay-200 animate-ease-in-out animate-normal animate-fill-forwards">Caribe Hospitality</h1>
            </div>
        </div>

      
    </div>
  )
}

export default Hero
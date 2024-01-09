// import { Carousel,IconButton } from "@material-tailwind/react";


const Hero = () => {
  return (
    <div className="w-full h-screen ">
        <img className="top-0 left-0 w-full h-screen object-cover transition-transform transform hover:scale-110" src="/img/exterior1_final.png" alt="Hotel AC Ezcazu" />
        
       {/* <Carousel
      className="rounded-xl z-10"
      loop="true"
      autoplay="true"
     
    >
      <img
        src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
        alt="image 1"
        className="h-full w-full object-cover"
      />
      <img
        src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
        alt="image 2"
        className="h-full w-full object-cover"
      />
      <img
        src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
        alt="image 3"
        className="h-full w-full object-cover"
      />
    </Carousel> */}


        <div className="bg-black/60 absolute top-0 left-0 w-full h-screen "/>
        <div className="absolute top-0  w-full h-full flex flex-col justify-center items-center text-white ">
            <div className="  max-w-[1100px] m-auto absolute p-4 ">
                <div className=" z-10 text-center font-bold text-5xl md:text-7xl drop-shadow-2xl animate-jump animate-once animate-duration-1000 animate-delay-200 animate-ease-in-out animate-normal animate-fill-forwards">
                  <img id='logo' className='z-20 ' src="/img/CaribeHospitalitySVGGrey.svg" alt="Logo" width={450} height={377} />
                </div>
            </div>
        </div>

      
    </div>
  )
}

export default Hero
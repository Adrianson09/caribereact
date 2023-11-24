import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useTranslation } from "react-i18next";
import { Suspense } from "react";

const Projects = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    const {t} = useTranslation(["caribe"]);

      
  return (
    <Suspense>


      <div id='proyectos' className='container m-auto pb-20'>
        <h1 className='text-center m-5  text-4xl font-bold text-gray-800'>{t("portfolio")}</h1>
        <div className="border-b-4 border-lime-600 text-4xl font-bold text-gray-800 text-center mt-2"> </div>
          <Carousel  
          swipeable={true}
          draggable={true}
          showDots={true}
          responsive={responsive}
          // ssr={true} // means to render carousel on server-side.
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={4500}
          keyBoardControl={true}
          customTransition="all .7"
          transitionDuration={800}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          // deviceType={this.props.deviceType}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
          className='m-10 '
          >
              
            
              <div className='max-w-sm rounded overflow-hidden shadow-lg p-4 scroll-smooth'> 
                <img className='w-full' src="/img/exterior1_final.png" alt="AC Hotel "  />
                <div className="px-6 py-4 scroll-smooth">
                <div className="font-bold text-xl mb-2 text-lime-800">AC by Marriott Escazú Costa Rica</div>
                  <p className="text-gray-700 text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, 
                  </p>
                </div>
                <div className="px-6 pt-4 pb-2"> {t("habitaciones")}
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">126</span>
                </div>
                <div className='bg-lime-800 text-white text-center'><a rel="noreferrer" href="https://www.marriott.com/en-us/hotels/sjoar-ac-hotel-san-jose-escazu/overview/" target='_blank'>{t("ver-mas")}</a></div>
              </div>
            
              <div className='max-w-sm rounded overflow-hidden shadow-lg p-4'> 
                <img className='w-full' src="/img/residenceinn.jpg" alt="Residence Inn Escazu Costa Rica" />
                <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 text-lime-800">Residence Inn Escazú Costa Rica</div>
                  <p className="text-gray-700 text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                  </p>
                </div>
                <div className="px-6 pt-4 pb-2">{t("habitaciones")}
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">109</span>
                </div>
                <div className='bg-lime-800 text-white text-center'><a rel="noreferrer" href="https://www.marriott.com/en-us/hotels/sjori-residence-inn-san-jose-escazu/overview/?scid=f2ae0541-1279-4f24-b197-a979c79310b0" target='_blank'>{t("ver-mas")} </a></div>
              </div>

              <div className='max-w-sm rounded overflow-hidden shadow-lg p-4'> 
                <img className='w-full' src="/img/fairfield.jpeg" alt="Fairfield Alajuela Costa Rica" />
                <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 text-lime-800">Fairfield Alajuela Costa Rica</div>
                  <p className="text-gray-700 text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                  </p>
                </div>
                <div className="px-6 pt-4 pb-2">{t("habitaciones")}
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">120</span>
                </div>
                <div className='bg-lime-800 text-white text-center'><a rel="noreferrer" href="https://www.marriott.com/en-us/hotels/sjofa-fairfield-by-marriott-san-jose-airport-alajuela/overview/?scid=f2ae0541-1279-4f24-b197-a979c79310b0" target='_blank'>{t("ver-mas")}</a></div>
              </div>

              <div className='max-w-sm rounded overflow-hidden shadow-lg p-4'> 
                <img className='w-full' src="/img/courtyardcr.webp" alt="Courtyard Alajuela Costa Rica" />
                <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 text-lime-800">Courtyard Alajuela Costa Rica</div>
                  <p className="text-gray-700 text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                  </p>
                </div>
                <div className="px-6 pt-4 pb-2">{t("habitaciones")}
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">127</span>
                </div>
                <div className='bg-lime-800 text-white text-center'><a rel="noreferrer" href="https://www.marriott.com/en-us/hotels/sjoap-courtyard-san-jose-airport-alajuela/overview/" target='_blank'>{t("ver-mas")}</a></div>
              </div>

              <div className='max-w-sm rounded overflow-hidden shadow-lg p-4'> 
                <img className='w-full' src="/img/hyattPlace.jpg" alt="Hyatt Place Curridabat Costa Rica" />
                <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 text-lime-800">Hyatt Place Costa Rica</div>
                  <p className="text-gray-700 text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                  </p>
                </div>
                <div className="px-6 pt-4 pb-2">{t("habitaciones")}
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">120</span>
                </div>
                <div className='bg-lime-800 text-white text-center'><a rel="noreferrer" href="https://www.hyatt.com/en-US/hotel/costa-rica/hyatt-place-san-jose-pinares/sjozp?src=corp_lclb_gmb_seo_sjozp" target='_blank'>{t("ver-mas")}</a></div>
              </div>
            

              <div className='max-w-sm rounded overflow-hidden shadow-lg p-4'> 
                <img className='w-full' src="/img/courtyardKingston.webp" alt="Courtyard Kingston" />
                <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 text-lime-800">Courtyard Kingston Jamaica</div>
                  <p className="text-gray-700 text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                  </p>
                </div>
                <div className="px-6 pt-4 pb-2">{t("habitaciones")}
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">129</span>
                </div>
                <div className='bg-lime-800 text-white text-center'><a rel="noreferrer" href="https://www.marriott.com/en-us/hotels/kincy-courtyard-kingston-jamaica/overview/" target='_blank'>{t("ver-mas")}</a></div>
              </div>

              <div className='max-w-sm rounded overflow-hidden shadow-lg p-4'> 
                <img className='w-full' src="/img/aloft.jpg" alt="Aloft Hotel"  />
                <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 text-lime-800">Aloft San Juan Puerto Rico</div>
                  <p className="text-gray-700 text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                  </p>
                </div>
                <div className="px-6 pt-4 pb-2">{t("habitaciones")}
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">177</span>
                </div>
                <div className='bg-lime-800 text-white text-center'><a rel="noreferrer" href="https://www.marriott.com/en-us/hotels/sjual-aloft-san-juan/overview/" target='_blank'>{t("ver-mas")}</a></div>
              </div>

              <div className='max-w-sm rounded overflow-hidden shadow-lg p-4'> 
                <img className='w-full' src="/img/courtyardHermosillo.jpg" alt="Courtyard Hermosillo Hotel"  />
                <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 text-lime-800">Courtyard Hermosillo México</div>
                  <p className="text-gray-700 text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                  </p>
                </div>
                <div className="px-6 pt-4 pb-2">{t("habitaciones")}
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">133</span>
                </div>
                <div className='bg-lime-800 text-white text-center'><a rel="noreferrer" href="https://www.marriott.com/en-us/hotels/hmocy-courtyard-hermosillo/overview/" target='_blank'>{t("ver-mas")}</a></div>
              </div>

              <div className='max-w-sm rounded overflow-hidden shadow-lg p-4'> 
                <img className='w-full' src="/img/courtyardLeon.webp" alt="Courtyard Leon Hotel"  />
                <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 text-lime-800">Courtyard León México</div>
                  <p className="text-gray-700 text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                  </p>
                </div>
                <div className="px-6 pt-4 pb-2">{t("habitaciones")}
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">140</span>
                </div>
                <div className='bg-lime-800 text-white text-center'><a rel="noreferrer" href="https://www.marriott.com/en-us/hotels/bjxcy-courtyard-leon-at-the-poliforum/overview/" target='_blank'>{t("ver-mas")}</a></div>
              </div>
            

              <div className='max-w-sm rounded overflow-hidden shadow-lg p-4'> 
                <img className='w-full' src="/img/courtyardSalvador.webp" alt="Courtyard Salvador Hotel"  />
                <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 text-lime-800">Courtyard San Salvador </div>
                  <p className="text-gray-700 text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                  </p>
                </div>
                <div className="px-6 pt-4 pb-2">{t("habitaciones")}
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">133</span>
                </div>
                <div className='bg-lime-800 text-white text-center'><a rel="noreferrer" href="https://www.marriott.com/en-us/hotels/salcy-courtyard-san-salvador/overview" target='_blank'>{t("ver-mas")}</a></div>
              </div>
            

              <div className='max-w-sm rounded overflow-hidden shadow-lg p-4'> 
                <img className='w-full' src="/img/fairfieldSalvador.jpg" alt="Fairfield Salvador Hotel"  />
                <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 text-lime-800">Fairfield San Salvador </div>
                  <p className="text-gray-700 text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                  </p>
                </div>
                <div className="px-6 pt-4 pb-2">{t("habitaciones")}
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">130</span>
                </div>
                <div className='bg-lime-800 text-white text-center'><a rel="noreferrer" href="https://www.marriott.com/en-us/hotels/salfi-fairfield-by-marriott-san-salvador/overview/" target='_blank'>{t("ver-mas")}</a></div>
              </div>

              <div className='max-w-sm rounded overflow-hidden shadow-lg p-4'> 
                <img className='w-full' src="/img/courtyardBarbados.webp" alt="Courtyard Barbados Hotel"  />
                <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 text-lime-800">Courtyard Barbados </div>
                  <p className="text-gray-700 text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                  </p>
                </div>
                <div className="px-6 pt-4 ">{t("habitaciones")}
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">118</span>
                </div>
                <div className='bg-lime-800 text-white text-center  mb-8'><a rel="noreferrer" href="https://www.marriott.com/en-us/hotels/bgicy-courtyard-bridgetown-barbados/overview/" target='_blank'>{t("ver-mas")}</a></div>
              </div>
            
            
          </Carousel>
      </div>
    </Suspense>
  )
}

export default Projects
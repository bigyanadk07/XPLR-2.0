import logo from "../images/WALLPAPER/xplr logo white PNG.png";
import logo1 from "../images/WALLPAPER/plc.png";
import Footer from "./Footer";
import HomePagePart2 from "./HomePagePart2";
import HomePagePart3 from "./HomePagePart3";
import banner1 from "../images/WALLPAPER/maldives.jpg";
import banner2 from "../images/WALLPAPER/venice.jpg";
import Carousel from "react-multi-carousel";
const Banner = [
  {
    image: banner1,
    name: "Maldives",
  },
  {
    image: banner2,
    name: "Venice",
  },
];
const HomePage = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <>
      <Carousel
        responsive={responsive}
        arrows={false}
        autoPlay={true}
        autoPlaySpeed={5000}
        infinite={true}
      >
        {Banner.map((n, index) => {
          return (
            <>
              <img src={n.image} className="w-screen h-screen relative" />
              <div className="absolute top-0 left-0 right-0">
                <div className="flex flex-col">
                  <div className="flex items-center justify-center mt-5">
                    <img src={logo} className="w-[100px] h-[100px]" />
                  </div>
                  <div className="flex items-center justify-center w-full mt-5">
                    <div className="py-2 px-5 text-white hover:underline decoration-white cursor-pointer">
                      Home
                    </div>
                    <div className="py-2 px-5 text-white hover:underline decoration-white cursor-pointer">
                      About Us
                    </div>
                    <div className="py-2 px-5 text-white hover:underline decoration-white cursor-pointer">
                      Contact
                    </div>
                    <div className="py-2 px-6 text-white hover:bg-gray-300 hover:text-black decoration-white cursor-pointer rounded-3xl border border-white ">
                      Sign In
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-0 right-2 mb-5 mr-4">
                <div className="flex">
                  <div>
                    <img src={logo1} className="w-10 h-10" />
                  </div>
                  <div className="inline">
                    <div className="flex items-center text-[20px] text-white">
                      {n.name}
                    </div>
                    <div className="border border-white mt-2"></div>
                  </div>
                </div>
              </div>
            </>
            // <>
            //   <div
            //     className={`w-screen h-screen bg-[url('./src/images/WALLPAPER/maldives.jpg')] bg-cover`}
            //   >
            //     <div className="inline">
            //       <div className="text-white text-center p-5 text-[40px]">
            //         XPLR
            //       </div>
            //       <div className="flex items-center justify-center w-full mt-5">
            //         <div className="py-2 px-5 text-white hover:underline decoration-white cursor-pointer">
            //           Home
            //         </div>
            //         <div className="py-2 px-5 text-white hover:underline decoration-white cursor-pointer">
            //           About Us
            //         </div>
            //         <div className="py-2 px-5 text-white hover:underline decoration-white cursor-pointer">
            //           Contact
            //         </div>
            //         <div className="py-2 px-6 text-white hover:bg-slate-400 decoration-white cursor-pointer rounded-3xl border border-white ">
            //           Sign In
            //         </div>
            //       </div>
            //     </div>
            //     <div className="absolute bottom-1 right-2 mb-5 mr-4">
            //       <div className="flex">
            //         <div>
            //           <img src={logo1} className="w-10 h-10" />
            //         </div>
            //         <div className="inline">
            //           <div className="flex items-center text-[20px] text-white">
            //             Maldives
            //           </div>
            //           <div className="border border-white mt-2"></div>
            //         </div>
            //       </div>
            //     </div>
            //   </div>
            // </>
          );
        })}
      </Carousel>

      <HomePagePart2 />
      <HomePagePart3 />
      <Footer />
    </>
  );
};
export default HomePage;

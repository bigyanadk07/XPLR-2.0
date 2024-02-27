import bali from "../images/WALLPAPER/bali.jpg";
import bali2 from "../images/WALLPAPER/c4fedab1-4041-4db5-9245-97439472cf2c.jpg";
import img from "../images/WALLPAPER/7.png";
import Footer from "./Footer";
import Header from "./Header";
import { FaArrowRight } from "@react-icons/all-files/fa/FaArrowRight";
import { FaArrowLeft } from "@react-icons/all-files/fa/FaArrowLeft";
import { FaChevronLeft } from "@react-icons/all-files/fa/FaChevronLeft";
import { FaChevronRight } from "@react-icons/all-files/fa/FaChevronRight";
import acc from "../images/WALLPAPER/905462.png";
import ap from "../images/WALLPAPER/68380.png";
import ex from "../images/WALLPAPER/637126.png";
import rest from "../images/WALLPAPER/restaurant (1).png";
import food1 from "../images/WALLPAPER/balifood1.jpg";
import food2 from "../images/WALLPAPER/balifood2.jpg";
import food3 from "../images/WALLPAPER/balifood3.jpg";
import location from "../images/WALLPAPER/location2.png";
import balidest1 from "../images/WALLPAPER/Heavens-Gate-Bali.jpg";
import balidest2 from "../images/WALLPAPER/nyangnyangbeach.jpg";
import balidest3 from "../images/WALLPAPER/DSCF7425_1200-2.jpg";
import balidest4 from "../images/WALLPAPER/Pura-Lempuyang-GettyImages-1127284864.jpg";
import bali5 from "../images/WALLPAPER/bali-for-digital-nomads-1024x683.jpg";
import { useEffect, useRef, useState } from "react";
import "../App.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Services = [
  {
    img: acc,
    name: "Accomodations",
    details:
      "Take a hot tour to checkout the best accomodation around your scenic destinations with the best cuisine and proper homestay.",
    name2: "Accomodations",
  },
  {
    img: ap,
    name: "Trips",
    details:
      "The best way to get to Bali from Nepal would be taking a direct flight from Tribhuvan International Airport, Kathmandu to Indonesia on an approximately 10h 40m journey.",
    name2: "Trips",
  },
  {
    img: ex,
    name: "Expenses",
    details:
      "Checkout our recommended holiday packages to have a cost-effective, convenient and planned trips to your favourite destinations. ",
    name2: "Packages",
  },
];
const Food = [
  {
    image: food1,
    name: "Warung",
    description:
      "Most warungs offering nasi campur (rice with mixed dishes) will have be siap sambal matah (chicken in 'raw' sambal) among their dishes of the day.",
  },
  {
    image: food2,
    name: "Sate lembat",
    description:
      "Bali's take on satay, the classic meat-on-a-stick dish found across the Indonesian archipelago, is minced meat pounded in a mortar and pestle with young grated coconut and a bumbu, or spice mixture, that varies according to region.",
  },
  {
    image: food3,
    name: "Lawar",
    description:
      "Lawar is a crunch-tender mix of vegetables, grated coconut meat and minced meat mixed with various heady herbs and spices, and often fresh blood -- every village has its own version.",
  },
];
const Destinations = [
  {
    image: balidest1,
    name: "Gates of Heaven(Lempuyang Temple)",
    description:
      "Located far from the tourist hubbub of Ubud, Lempuyang Temple is a sacred seven-temple complex in eastern Bali best known for the Gateway to Heaven that perfectly frames the formidable Mount Agung, the island’s tallest peak. This is one of the most majestic sights in Bali.",
  },
  {
    image: balidest2,
    name: "Nyang Nyang Beach",
    description:
      "In Bali, the words “south” and “secluded” are rarely uttered in the same sentence, but Nyang Nyang Beach, in Uluwatu, indeed fills the bill. White sands, greenery-lined cliffs, and the astonishing absence of crowds await—if you're dedicated enough to find it",
  },
  {
    image: balidest3,
    name: "Banyu Wana Amertha Waterfall",
    description:
      "Located at northern Bali, Banyu Wana Amertha Waterfall is the most spectacular—a verdant rock amphitheater with misty streams cascading down to a shallow pool.",
  },
  {
    image: balidest4,
    name: "Pura Lempuyang Luhur",
    description:
      "Located far from the tourist hubbub of Ubub, Lempuyang Temple is a sacred seven-temple complex in eastern Bali",
  },
];
const Images = [
  {
    image: bali,
    title: "bali",
  },
  {
    image: balidest1,
    title: "dest 1",
  },
  {
    image: balidest2,
    title: "dest 2",
  },
  {
    image: balidest3,
    title: "dest 3",
  },
  {
    image: balidest4,
    title: "dest 4",
  },
];
interface AsNavForProps {}

const Bali: React.FC<AsNavForProps> = () => {
  const [services, setServices] = useState(Services);
  const [food, setFood] = useState(Food);
  const [destinations, setDestinations] = useState(Destinations);
  const [images, setImages] = useState(Images);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrow: true,
  };

  const [nav1, setNav1] = useState<Slider | null>(null);
  const [nav2, setNav2] = useState<Slider | null>(null);
  const sliderRef1 = useRef<Slider>(null);
  const sliderRef2 = useRef<Slider>(null);

  useEffect(() => {
    setNav1(sliderRef1.current);
    setNav2(sliderRef2.current);
  }, []);
  const next = () => {
    sliderRef1.current?.slickNext();
  };

  const previous = () => {
    sliderRef1.current?.slickPrev();
  };

  return (
    <>
      <Header color={true} />
      <div
        className=" bg-fixed bg-cover w-screen -z-50"
        style={{ backgroundImage: `url(${bali})` }}
      >
        <div className="bg-black w-screen bg-opacity-75 -z-50">
          <div className="flex flex-col">
            <div className="flex justify-between mx-[100px]">
              {/* <div className="absolute top-4 right-28"> */}
              {/* </div> */}
              {/* <div className="absolute bottom-5 left-[100px]"> */}
              <div className="flex flex-col justify-end mb-[80px]">
                <div className="flex items-center">
                  <img src={img} className="w-11 h-11" />
                  <div className="text-white text-[40px]">Bali</div>
                </div>
                <div className="ml-11 text-white">Indonesia</div>
              </div>
              <div
                className="rounded-full w-[700px] h-[700px] bg-right scale-75 z-0"
                style={{ backgroundImage: `url(${bali2})` }}
              ></div>
            </div>
            <div className="bg-white bg-opacity-75 mb-10">
              <div className="flex flex-wrap mx-[100px] relative">
                {services.map((n, index) => (
                  <>
                    <div className="flex flex-col py-[80px] px-[40px] w-1/3 items-center">
                      <img src={n.img} className="w-[100px] h-[100px]" />
                      <div className="mt-2 font-bold text-[25px]">{n.name}</div>
                      <div className="pb-10 pt-5 ml-4 text-justify hyphens-auto break-all">
                        {n.details}
                      </div>
                      <div className="absolute bottom-10">
                        <div className="ml-4 flex justify-center items-center gap-2 text-blue-500 font-semibold border-2 border-blue-500 py-2 px-5 rounded-3xl hover:bg-white hover:bg-opacity-25 cursor-pointer">
                          <div>{n.name2}</div>
                          <div>
                            <FaArrowRight />
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                ))}
              </div>
            </div>
            <div className="my-10 flex flex-col mx-[100px]">
              <div className="flex justify-start items-center mb-10">
                <img src={rest} className="w-[50px] h-[50px]" />
                <div className="text-white text-[30px] ml-5 font-semibold">
                  Cuisines
                </div>
              </div>
              <div className="flex flex-wrap gap-3 justify-center">
                {food.map((n, index) => (
                  <>
                    <div className="w-[32%] h-[500px] overflow-hidden relative">
                      <div
                        className=" w-full h-full bg-center bg-cover hover:scale-105 transition duration-500 cursor-pointer"
                        style={{ backgroundImage: `url(${n.image})` }}
                      >
                        <div className="bg-black h-full bg-opacity-60"></div>
                      </div>
                      <div className="absolute bottom-[35%]">
                        <div className="text-white font-bold text-[25px] mb-3 px-8">
                          {n.name}
                        </div>
                      </div>
                      <div className="absolute top-[65%]">
                        <div className="text-white px-8 break-all hyphens-auto text-justify">
                          {n.description}
                        </div>
                      </div>
                    </div>
                  </>
                ))}
              </div>
            </div>
            <div className="my-10 flex flex-col mx-[100px]">
              <div className="flex justify-start items-center mb-10">
                <img src={location} className="w-[50px] h-[50px]" />
                <div className="text-white text-[30px] ml-5 font-semibold">
                  Best Destinations
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3 justify-center">
                {destinations.map((n, index) => (
                  <>
                    <div className="h-[500px] overflow-hidden relative">
                      <div
                        className=" w-full h-full bg-top bg-cover hover:scale-105 transition duration-500 cursor-pointer"
                        style={{ backgroundImage: `url(${n.image})` }}
                      >
                        <div className="bg-black h-full bg-opacity-40"></div>
                      </div>
                      <div className="absolute bottom-[30%]">
                        <div className="text-white font-bold text-[25px] mb-3 px-8">
                          {n.name}
                        </div>
                      </div>
                      <div className="absolute top-[70%]">
                        <div className="text-white px-8 break-all hyphens-auto text-justify">
                          {n.description}
                        </div>
                      </div>
                    </div>
                  </>
                ))}
              </div>
            </div>
            <div className="bg-black relative mt-10 mb-20">
              <div className="flex mx-[100px] text-white justify-center items-center gap-10 py-16">
                <button
                  onClick={previous}
                  className="absolute top-[38%] left-[65px] text-[20px] hover:text-slate-400"
                >
                  <FaChevronLeft />
                </button>
                <div className="slider-container flex flex-col gap-5">
                  <Slider asNavFor={nav2} ref={sliderRef1} {...settings}>
                    {images.map((n, index) => (
                      <>
                        <div
                          className="rounded-3xl w-[500px] h-[300px] bg-cover bg-center z-0 mr-2"
                          style={{ backgroundImage: `url(${n.image})` }}
                        ></div>
                      </>
                    ))}
                  </Slider>
                  <Slider
                    asNavFor={nav1}
                    ref={sliderRef2}
                    slidesToShow={5}
                    swipeToSlide={true}
                    focusOnSelect={true}
                  >
                    {images.map((n, index) => (
                      <>
                        {" "}
                        <div
                          className="h-[100px] bg-cover bg-center z-0 mr-2"
                          style={{ backgroundImage: `url(${n.image})` }}
                        ></div>
                      </>
                    ))}
                  </Slider>
                </div>
                <div className="absolute w-1/3 right-[200px] top-[20%]">
                  <div className="flex flex-col gap-3">
                    <div className="text-[30px] font-semibold">
                      Best Time To Visit Bali
                    </div>
                    <div className="text-[15px] text-justify">
                      The best time to visit is <b>between May and August</b>{" "}
                      when the weather is most settled. The hottest month of the
                      year is November with an average daily maximum of 32 C and
                      an average low of 25 C. The coolest month of the year is
                      August with an average daily maximum of 29 C and an
                      average low of 24 C.
                    </div>
                  </div>
                </div>
                <button
                  onClick={next}
                  className="absolute top-[38%] left-[45%] text-[20px] hover:text-slate-400"
                >
                  <FaChevronRight />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};
export default Bali;

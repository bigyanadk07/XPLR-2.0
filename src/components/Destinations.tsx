import bali from "../images/WALLPAPER/bali.jpg";
import rome from "../images/WALLPAPER/effects-construction-Rome-Colosseum.jpg";
import gc from "../images/WALLPAPER/gc.jpg";
import venice from "../images/WALLPAPER/201234.jpg";
import Header from "./Header";
import Footer from "./Footer";
import bg from "../images/WALLPAPER/bg2.jpg";
import { useState } from "react";
import { Link } from "react-router-dom";

const data = [
  {
    name: "Bali",
    image: bali,
    country: "Indonesia",
  },
  {
    name: "Venice",
    image: venice,
    country: "Italy",
  },
  {
    name: "Grand Canyon",
    image: gc,
    country: "Arizona, USA",
  },
  {
    name: "Corrida Colloseum",
    image: rome,
    country: "Rome, Italy",
  },
  {
    name: "Bali",
    image: bali,
    country: "Indonesia",
  },
  {
    name: "Venice",
    image: venice,
    country: "Italy",
  },
  {
    name: "Grand Canyon",
    image: gc,
    country: "Arizona, USA",
  },
  {
    name: "Corrida Colloseum",
    image: rome,
    country: "Rome, Italy",
  },
];
const Destinations = () => {
  const [dest, setDest] = useState(data);
  return (
    <>
      <Header />
      <div
        className=" bg-fixed bg-cover"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="mx-[100px]">
          <div className="text-[50px] pb-10 pt-28">Destinations</div>
          <div className="grid grid-cols-2 gap-1 pb-10">
            {dest.map((n, index) => (
              <>
                <div className="relative mb-10">
                  <div className="max-w-[550px] max-h-[450px] overflow-hidden relative">
                    <div
                      className={`bg-cover hover:scale-125 transition duration-500 cursor-pointer`}
                      style={{ backgroundImage: `url(${n.image})` }}
                      key={index}
                    >
                      <div className="bg-black w-[550px] h-[450px] bg-opacity-25"></div>
                    </div>
                  </div>
                  <div className="ml-10 absolute bottom-7">
                    <div className="text-white font-bold text-[30px] mb-3">
                      {n.name}
                    </div>
                    <div className="text-white uppercase font-semibold text-[15px] mb-5">
                      {n.country}
                    </div>
                    <Link to="/bali">
                      <div className="bg-white rounded-4xl px-4 py-3 w-[120px] flex justify-center items-center hover:bg-slate-200 cursor-pointer">
                        Explore
                      </div>
                    </Link>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Destinations;

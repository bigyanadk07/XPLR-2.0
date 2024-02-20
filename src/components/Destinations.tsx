import bali from "../images/WALLPAPER/c4fedab1-4041-4db5-9245-97439472cf2c.jpg";
import rome from "../images/WALLPAPER/effects-construction-Rome-Colosseum.jpg";
import gc from "../images/WALLPAPER/Dawn_on_the_S_rim_of_the_Grand_Canyon_(8645178272).jpg";
import venice from "../images/WALLPAPER/201234.jpg";
import Header from "./Header";
import Footer from "./Footer";

const data = [
  {
    name: "Bali",
    image: { bali },
    country: "Indonesia",
  },
  {
    name: "Venice",
    image: { venice },
    country: "Italy",
  },
  {
    name: "Grand Canyon",
    image: { gc },
    country: "Arizona, USA",
  },
  {
    name: "Corrida Colloseum",
    image: { rome },
    country: "Rome, Italy",
  },
];
const Destinations = () => {
  return (
    <>
      <Header />
      <div className=" grid grid-cols-2 gap-3">
        <div className="w-[550px] h-[450px] bg-black"></div>
        <div className="w-[550px] h-[450px] bg-black"></div>
      </div>

      <Footer />
    </>
  );
};
export default Destinations;

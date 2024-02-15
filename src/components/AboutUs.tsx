import BodyFour from "./Footer";
import BodyThree from "../components/BodyThree";
import BodyTwo from "../components/BodyTwo";
import iop from "../images/WALLPAPER/xplr logo black PNG.png";
import { Link } from "react-router-dom";
const AboutUs = () => {
  return (
    <>
      <div className="bg-[url('./images/WALLPAPER/header1.jpg')] bg-cover w-screen">
        <div className="flex flex-row justify-between">
          <div className=" p-4 ml-4">
            <img src={iop} className=" h-20 w-20" />
          </div>
          <div className="flex flex-row space-x-2  m-4 mr-8">
            <Link to="/home" className="pr-5 pl-5 p-2 m-5 text-black">
              Home
            </Link>
            <Link to="/about" className="pr-5 pl-5 p-2 m-5 text-black">
              About Us
            </Link>
            <Link to="/contact" className="pr-5 pl-5 p-2 m-5 text-black">
              Contact
            </Link>
            <Link
              to="/signin"
              className=" border-2 rounded-full border-black pr-5 pl-5 p-2 m-5 text-black"
            >
              Sign in
            </Link>
          </div>
        </div>
        <div className=" text-center text-7xl m-4 pb-56">About XPLR</div>
      </div>
      <div className="flex items-center justify-center">
        <div className=" -mt-28  text-2xl border border-black bg-white rounded-xl max-w-5xl p-10 mb-28">
          <div className=" inline-flex pb-3">
            <strong className=" text-6xl">W</strong>
            <div className="flex items-end justify-center">
              elcome to XPLR, your ultimate gateway to exploration and
              discovery!
            </div>
          </div>
          <div className=" text-justify pb-5">
            Created by three passionate students persuing IT, our journey began
            with a shared commitmentS for adventure and a deep appreciation for
            the world's diverse cultures and landscapes.
          </div>
          <div className=" text-justify pb-6">
            At XPLR, we believe that travel is more than just visiting new
            places; it's about experiencing the soul of a destination. Our
            mission is to inspire fellow wanderers to embark on journeys that go
            beyond the ordinary, to seek the extraordinary, and to foster a
            connection with the places they visit.
          </div>
        </div>
      </div>
      <div className=" w-screen bg-[#013048] text-2xl text-center text-white py-16 tracking-widest">
        <div className=" text-[#0ccc3c] text-4xl inline-flex">OUR MISSION</div>{" "}
        is to provide a leading travel host and blogging platform for travellers
        <div>along with the best deals possible.</div>
      </div>
      <BodyTwo />
      <BodyThree />
      <BodyFour />
    </>
  );
};
export default AboutUs;

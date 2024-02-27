import { useState } from "react";
import iop from "../images/WALLPAPER/xplr logo black PNG.png";
import iop2 from "../images/WALLPAPER/xplr logo white PNG.png";
import { Link } from "react-router-dom";
const Header = (props: any) => {
  const [scroll, setScroll] = useState(false);
  const [color, setColor] = useState(props.color);
  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      setScroll(true);
      if (color == true) {
        setColor(false);
      }
    } else {
      setColor(props.color);
      setScroll(false);
    }
  });
  return (
    <>
      <div
        className={`block w-screen z-50 fixed ${
          scroll ? "bg-white fixed" : "bg-none"
        }`}
      >
        <div className="flex flex-row justify-between mx-[50px]">
          <div className=" p-4 ml-4">
            {color ? (
              <img src={iop2} className=" h-20 w-20" />
            ) : (
              <img src={iop} className=" h-20 w-20" />
            )}
          </div>
          <div className="flex flex-row space-x-2  m-4 mr-8">
            <Link
              to="/"
              className={`pr-5 pl-5 p-2 m-5 ${
                color
                  ? "text-white hover:bg-white hover:text-black"
                  : "text-black hover:bg-black hover:text-white"
              } hover:rounded-full`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`pr-5 pl-5 p-2 m-5 ${
                color
                  ? "text-white hover:bg-white hover:text-black"
                  : "text-black hover:bg-black hover:text-white"
              } hover:rounded-full`}
            >
              About Us
            </Link>
            <Link
              to="/contact"
              className={`pr-5 pl-5 p-2 m-5 ${
                color
                  ? "text-white hover:bg-white hover:text-black"
                  : "text-black hover:bg-black hover:text-white"
              } hover:rounded-full`}
            >
              Contact
            </Link>
            <Link
              to="/signin"
              className={`border-2 rounded-full ${
                color
                  ? "border-white text-white hover:bg-white hover:text-black"
                  : "border-black text-black hover:bg-black hover:text-white"
              } pr-5 pl-5 p-2 m-5  hover:rounded-full`}
            >
              Sign in
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default Header;

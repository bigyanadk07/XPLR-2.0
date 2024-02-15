import iop from "../images/WALLPAPER/xplr logo black PNG.png";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <div className="flex flex-row justify-between">
        <div className=" p-4 ml-4">
          <img src={iop} className=" h-20 w-20" />
        </div>
        <div className="flex flex-row space-x-2  m-4 mr-8">
          <Link to="/" className="pr-5 pl-5 p-2 m-5 text-black">
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
    </>
  );
};
export default Header;

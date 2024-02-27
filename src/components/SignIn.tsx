import logob from "../images/WALLPAPER/xplr logo black PNG.png";
import facebook from "../images/WALLPAPER/facebook.png";
import insta from "../images/WALLPAPER/instagram.png";
import google from "../images/WALLPAPER/google.png";
import loginico from "../images/WALLPAPER/login-.png";
import SignIn2 from "../images/WALLPAPER/wallpaperflare.jpg";
import Header from "./Header";
import Footer from "./Footer";

const SignIn = () => {
  return (
    <>
      <Header />
      <div
        className=" bg-fixed bg-bottom bg-cover w-screen h-screen -z-50  backdrop-blur-lg"
        style={{ backgroundImage: `url(${SignIn2})` }}
      >
        <div className=" w-screen flex justify-center">
          <div
            className="w-[80%] bg-white mt-[110px]"
            // style={{ backgroundImage: `url(${SignIn2})` }}
          >
            <div className="grid grid-cols-2 ">
              <div
                className="relative bg-cover bg-top"
                style={{ backgroundImage: `url(${SignIn2})` }}
              >
                {/* <img
                  src={SignIn2}
                  className="w-screen h-screen z-0 absolute top-0 left-0"
                  alt="Background"
                /> */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-white text-xl text-center">
                  Create an account
                </div>

                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-10 z-10">
                  <button className="flex items-center py-2 px-3 border border-white cursor-pointer rounded-xl p-[10px] hover:text-pink-500 hover:border-pink-500">
                    <img src={loginico} alt="" className="w-8 h-8" />
                    <div>Sign Up</div>
                  </button>
                </div>
              </div>

              <div className="">
                <div className="inline">
                  <div>
                    <p className="flex items-center justify-center mt-20">
                      LOGIN using
                    </p>
                    <div className="flex mt-5 items-center justify-center">
                      <img
                        className=" w-10 h-10 mx-3 cursor-pointer "
                        src={facebook}
                        alt="logo"
                      ></img>
                      <img
                        className=" w-10 h-10 mx-3 cursor-pointer "
                        src={insta}
                        alt="logo"
                      ></img>
                      <img
                        className=" w-10 h-10 mx-3 cursor-pointer "
                        src={google}
                        alt="logo"
                      ></img>
                    </div>
                  </div>
                  <p className="flex justify-center my-10">
                    or use your email account
                  </p>

                  <form className="inline">
                    <div className="flex items-center justify-center">
                      <input
                        placeholder="Email"
                        className=" w-80  hover:border-black top-[48%] right-[22%] bg-[#FEFAE0] border-b border-gray-300 focus:outline-none p-3 placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-500"
                      />
                    </div>
                    <div className="flex items-center justify-center">
                      <input
                        placeholder="Password"
                        className=" w-80 hover:border-black top-[60%] right-[22%] bg-[#FEFAE0] border-b border-gray-300 focus:outline-none p-3 placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-500"
                      />
                    </div>
                    <p className="flex items-center justify-center mt-10">
                      Forgot your password?
                    </p>
                  </form>
                  <div className="flex items-center justify-center mt-3">
                    <button className=" hover:border-pink-500 flex items-center justify-center border border-black py-2 px-3 rounded-xl cursor-pointer hover:text-pink-500">
                      <div>
                        <img src={loginico} className="w-8 h-8" />
                      </div>
                      <div>Log In</div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div
        className=" bg-fixed bg-bottom bg-cover w-screen h-screen -z-50"
        style={{ backgroundImage: `url(${SignIn2})` }}
      >
        <div className="flex justify-center items-center w-screen h-screen">
          <div className="w-1/3 bg-white flex flex-col justify-center p-4">
            <div className="text-[30px]">Login</div>
            <form className="flex flex-col py-10 gap-5">
              <div className="flex">
                <input
                  placeholder="Email"
                  className=" w-full  hover:border-black top-[48%] right-[22%] border-b border-gray-300 focus:outline-none p-3 placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-500"
                />
              </div>
              <div className="flex">
                <input
                  placeholder="Password"
                  className=" w-full hover:border-black top-[60%] right-[22%] border-b border-gray-300 focus:outline-none p-3 placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-500"
                />
              </div>
              <p className="flex items-center justify-center mt-10">
                Forgot your password?
              </p>
            </form>
            <div className="flex items-center mt-3">
              <button className=" hover:border-pink-500 flex items-center justify-center border border-black py-2 px-3 rounded-xl cursor-pointer hover:text-pink-500">
                <div>
                  <img src={loginico} className="w-8 h-8" />
                </div>
                <div>Log In</div>
              </button>
            </div>
          </div>
        </div>
      </div> */}
      <Footer />
    </>
  );
};

export default SignIn;

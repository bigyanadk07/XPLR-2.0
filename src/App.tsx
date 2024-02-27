import AboutUs from "./components/AboutUs";
import HomePage from "./components/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./components/Contact";
import { ParallaxProvider } from "react-scroll-parallax";
import Destinations from "./components/Destinations";
import Bali from "./components/Bali";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";

const App = () => {
  return (
    <>
      <ParallaxProvider>
        <div className="overflow-x-hidden w-">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/destination" element={<Destinations />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/signin" element={<SignIn  />} />
              <Route path="/bali" element={<Bali />} />
            </Routes>
          </BrowserRouter>
          {/* <HomePage />
        <HomePagePart2 />
        <HomePagePart3 /> */}
        </div>
      </ParallaxProvider>
    </>
  );
};
export default App;

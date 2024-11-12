import AboutUs from "./components/AboutUs";
import HomePage from "./components/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./components/Contact";
import Destinations from "./components/Destinations";
import Bali from "./components/Bali";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import Bucketlist from "./components/Bucketlist";
import Hotels from "./components/Hotels";
 import Flights from "./components/Flights";
 import Header from "./components/Header";

const App = () => {
  return (
    <>
      <div className="overflow-x-hidden w-">
        <BrowserRouter>
        <Header/>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/destination" element={<Destinations />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/bali" element={<Bali />} />
            <Route path="/bucketlist" element={<Bucketlist />} />
            <Route path="/hotels" element={<Hotels />} />
            <Route path="/flights" element={<Flights />} />
          </Routes>
        </BrowserRouter>
        {/* <HomePage />
        <HomePagePart2 />
        <HomePagePart3 /> */}
      </div>
    </>
  );
};
export default App;

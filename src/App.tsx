import AboutUs from "./components/AboutUs";
import HomePage from "./components/HomePage";
import HomePagePart2 from "./components/HomePagePart2";
import HomePagePart3 from "./components/HomePagePart3";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <div className="overflow-x-hidden">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutUs />} />
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

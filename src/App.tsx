import AboutUs from "./components/AboutUs";
import HomePage from "./components/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./components/Contact";

const App = () => {
  return (
    <>
      <div className="overflow-x-hidden">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
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

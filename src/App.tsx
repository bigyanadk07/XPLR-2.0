import HomePage from "./components/HomePage";
import HomePagePart2 from "./components/HomePagePart2";
import HomePagePart3 from "./components/HomePagePart3";

const App = () => {
  return (
    <>
      <div className="overflow-x-hidden">
        <HomePage />
        <HomePagePart2 />
        <HomePagePart3 />
      </div>
    </>
  );
};
export default App;

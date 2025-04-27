import Navbar from "./componets/Navbar";
import Hero from "./componets/Hero";
import Highlights from "./componets/Highlights";
import Model from "./componets/Model";
import Features from "./componets/Features";

const App = () => {
  return (
    <main className="bg-black">
      <Navbar/>
      <Hero/>
      <Highlights/>
      <Model/>
      <Features/>
    </main>
  );
};
export default App;

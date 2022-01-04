import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import CallToAction from "../components/CallToAction";

function Homepage() {
  return (
    <div className="w-full h-full font-primary">
      <Navbar />
      <Hero />
      <CallToAction />
    </div>
  );
}

export default Homepage;

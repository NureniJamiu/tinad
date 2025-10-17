import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";

import Navbar from "./components/Navbar"
import Hero from "./components/Hero";
import Artist from "./components/Artist";

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Artist />
      {/* Spacer to allow scroll for all animation phases */}
      <div className="h-[300vh]"></div>
    </main>
  )
}

export default App

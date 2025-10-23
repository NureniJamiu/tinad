import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Artists from "./pages/Artists";
import Careers from "./pages/Careers";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <Router>
      <main className="pt-20">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/artists" element={<Artists />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/blogs" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </main>
    </Router>
  )
}

export default App

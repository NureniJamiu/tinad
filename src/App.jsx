import { useState } from "react";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import Artists from "./pages/Artists";
import ArtistDetail from "./pages/ArtistDetail";
import Careers from "./pages/Careers";
import Blog from "./pages/Blog";
import BlogDetail from "./pages/BlogDetail";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import Footer from "./components/Footer";
import LoadingScreen from "./components/LoadingScreen";
import MusicPlayer from "./components/MusicPlayer";
import { MusicProvider } from "./context/MusicContext";
import { useSanityData } from "./hooks/useSanityData";
import { siteSettingsQuery } from "./sanity/queries";
import { getFileUrl } from "./sanity/fileBuilder";

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { data: settings } = useSanityData(siteSettingsQuery);

  // Get music URL from Sanity
  const musicUrl = settings?.backgroundMusic ? getFileUrl(settings.backgroundMusic) : null;

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <MusicProvider musicUrl={musicUrl}>
      {isLoading && <LoadingScreen onComplete={handleLoadingComplete} />}
      <Router>
        <ScrollToTop />
        <main className="pt-20">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/artists" element={<Artists />} />
            <Route path="/artists/:id" element={<ArtistDetail />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/blogs" element={<Blog />} />
            <Route path="/blogs/:id" element={<BlogDetail />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
          </Routes>
          <Footer />
          <MusicPlayer />
        </main>
      </Router>
    </MusicProvider>
  )
}

export default App

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar.jsx";
import Hero from "./components/Hero/Hero.jsx";

import Stats from "./components/Stats/Stats.jsx";
import FAQ from "./components/FAQ/FAQ.jsx";
import CTA from "./components/CTA/CTA.jsx";
import Footer from "./components/Footer/Footer.jsx";

import Platform from "./pages/platfrom.jsx";
import Resources from "./pages/resources/resources.jsx";
import Blog from "./pages/resources/blog.jsx";
import Article from "./pages/resources/article.jsx";
import Changelog from "./components/Changelog/Changelog.jsx";
import Pricing from "./components/pricing/pricing.jsx";
import Testimonials from "./components/Testimonials/Testimonials.jsx";
function Home() {
  return (
    <>
      <Hero />
    
      <Stats />
      <Testimonials />
    
    
      <FAQ />
      <CTA />
      <Footer />
    </>
  );
}


function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/platform" element={<Platform />} />

        <Route path="/resources" element={<Resources />} />

        <Route path="/resources/blog" element={<Blog />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route
          path="/resources/blog/article"
          element={<Article />}
        />

        <Route
          path="/changelog"
          element={<Changelog />}
        />

      </Routes>

    </BrowserRouter>
  );
}


export default App;
import React, { useRef } from "react";
import { Outlet, useLocation } from "react-router-dom"; // Use useLocation to get current path
import { Header, Footer } from "./components";
import { Carousel, Properties, About, Review } from "./pages";

function App() {
  const location = useLocation(); // Hook to get the current route
  const footerRef = useRef(null);
  const propertiesRef = useRef(null);
  const homeRef = useRef(null);
  const aboutRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Determine if the current route is /residential
  const isResidentialRoute = location.pathname === "/residential";

  return (
    <div>
      {/* Header remains static */}
      <Header
        scrollToFooter={() => scrollToSection(footerRef)}
        scrollToProperties={() => scrollToSection(propertiesRef)}
        scrollToHome={() => scrollToSection(homeRef)}
        scrollToAbout={() => scrollToSection(aboutRef)}
      />

      {/* If we're on the residential route, only display the Residential component */}
      {isResidentialRoute ? (
        <Outlet /> 
      ) : (
        <>
          {/* These sections are only shown on the non-residential routes */}
          <Carousel />
          <section ref={propertiesRef}>
            <Properties />
          </section>
          <section ref={aboutRef}>
            <About />
          </section>
          <Review />
        </>
      )}

      {/* Footer remains static */}
      <footer ref={footerRef}>
        <Footer />
      </footer>
    </div>
  );
}

export default App;

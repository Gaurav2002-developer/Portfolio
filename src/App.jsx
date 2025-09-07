import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Team from "./components/Team";
import Experience from "./components/Experience";
import Workflow from "./components/Workflow";
import Education from "./components/Education";
import Certificates from "./components/Certificates"; // Capitalized
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        {/* Hero Section */}
        <HeroSection />

        {/* Skills Section */}
        <Team id="team" />

        {/* Professional Experience Section */}
        <Experience id="experience" />

        {/* Workflow / Projects Section */}
        <Workflow id="workflow" />

        {/* Education Section */}
        <Education id="education" />

        {/* Certificates Section */}
        <Certificates id="certificates" />

        {/* Contact Section */}
        <Contact />

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
};

export default App;

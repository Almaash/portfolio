import AboutBody from "../components/About/AboutBody";
import Experiences from "../components/About/Experiences";
import Header from "../components/About/Header";
import ServicesSection from "../components/About/ServicesSection";
import TechStack from "../components/About/TechStack";
import Footer from "../components/Footer/Footer";
import Transitation from "../components/Transitation";

const About = () => {
  return (
    <>
      <Header />
      <AboutBody />
      <TechStack />
      <Experiences />
      <ServicesSection />
      <Footer />
    </>
  );
};

export default Transitation(About);

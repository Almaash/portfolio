import Footer from "../components/Footer/Footer";
import Header from "../components/Home/Header";
import HomeBody from "../components/Home/HomeBody";
import Persentation from "../components/Home/Persentation";
import Transitation from "../components/Transitation";
// import SliderText from "../components/Home/SliderText";


const Home = () => {
  return (
    <>
      <Header/>
      <HomeBody/>
      <Persentation/>
      {/* <SliderText/> */}
      <Footer/>
    </>
  );
};

export default Transitation(Home);

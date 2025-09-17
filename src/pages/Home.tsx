import Footer from "../components/Footer/Footer";
import HeaderNew from "../components/Home/HeaderNew";
import HomeBody from "../components/Home/HomeBody";
import Persentation from "../components/Home/Persentation";
import Transitation from "../components/Transitation";

const Home = () => {
  return (
    <>
      {/* <Header /> */}
      <HeaderNew />
      <HomeBody />
      <Persentation />
      <Footer />
    </>
  );
};

export default Transitation(Home);

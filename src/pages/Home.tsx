import Footer from "../components/Footer/Footer";
import Header from "../components/Home/Header";
// import Header from "../components/Home/Header";
import HeaderNew from "../components/Home/Header2";
import HomeBody from "../components/Home/HomeBody";
import Persentation from "../components/Home/Persentation";
import Transitation from "../components/Transitation";

const Home = () => {
  return (
    <>
      <Header />
      {/* <HeaderNew /> */}
      <HomeBody />
      <Persentation />
      <Footer />
    </>
  );
};

export default Transitation(Home);

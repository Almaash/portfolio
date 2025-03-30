import { useLocation } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Transitation from "../components/Transitation";

const Contact = () => {
  const data = useLocation()

  return (
    <div>
      <Footer page={data?.pathname} />
    </div>
  );
};

export default Transitation(Contact);

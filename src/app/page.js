import Banner from "../components/Home/Banner/Banner";
import Footer from "../components/Shared/Footer/Footer";
import Navbar from "../components/Shared/Navbar/Navbar";

const home = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Footer />
    </div>
  );
};

export default home;

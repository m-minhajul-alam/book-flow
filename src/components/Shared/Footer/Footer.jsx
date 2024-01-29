import FooterStart from "./FooterStart/FooterStart";
import FooterEnd from "./FooterEnd/FooterEnd";

const Footer = () => {
  return (
    <footer className="bg-black text-white pb-20 md:pb-5 mt-96">
      <div className="max-w-7xl mx-auto px-5">
        <FooterStart />
        <FooterEnd />
      </div>
    </footer>
  );
};

export default Footer;

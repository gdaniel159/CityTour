import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { CarouselComponent } from "../components/Carousel";
import { OfertasComponent } from "../components/Ofertas";

function Homepage() {
  return (
    <div className="">
      <Navbar />
      <CarouselComponent />
      <OfertasComponent />
      <Footer />
    </div>
  );
}

export default Homepage;

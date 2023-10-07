import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { CarouselComponent } from "../components/Carousel";
import { OfertasComponent } from "../components/Ofertas";
import { FestividadesComponent } from "../components/Festividades";

function Homepage() {
  return (
    <div className="">
      <Navbar />
      <CarouselComponent />
      <OfertasComponent />
      <FestividadesComponent />
      <Footer />
    </div>
  );
}

export default Homepage;

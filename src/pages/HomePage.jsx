import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { CarouselComponent } from "../components/Carousel";
import { OfertasComponent } from "../components/Ofertas";
import { FestividadesComponent } from "../components/Festividades";
import { DestinosComponent } from "../components/Destinos";
import { ScrollTop } from "primereact/scrolltop";

function Homepage() {
  return (
    <div className="">
      <Navbar />
      <ScrollTop className="w-3rem h-3rem" />
      <CarouselComponent />
      <OfertasComponent />
      <FestividadesComponent />
      <DestinosComponent />
      <Footer />
    </div>
  );
}

export default Homepage;

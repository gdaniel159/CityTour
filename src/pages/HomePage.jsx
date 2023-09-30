import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Homepage() {
  return (
    <div className="container-fluid">
      <Navbar />
      <div className="container">
        <h1>Pagina de inicio</h1>
      </div>
      <Footer />
    </div>
  );
}

export default Homepage;

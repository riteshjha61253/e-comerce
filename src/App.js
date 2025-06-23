import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "./components/sidebar/sidebar";
import HeroSection from "./components/heroSection/hero";
function App() {
  return (
    <>
      <div className="App">
        <div className="head">
          <Header />
        </div>
        <div className="container" style={{ height: "100vh" }}>
          <div
            className="left"
            style={{ height: "100%", width: "20%", backgroundColor: "#f8f9fa" }}
          >
            <Sidebar />
          </div>
          <div className="right" style={{ height: "100%", width: "80%" }}>
            <HeroSection />
          </div>
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;

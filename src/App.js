import "./App.css";
import Footer from "./components/Footer";
import GrowAndSave from "./components/GrowAndSave";
import Header from "./components/Header";
import Mine from "./components/Mine";
import OurBenefits from "./components/OurBenefits";
import PreschoolManagement from "./components/PreschoolManagement";
import SchoolHangoutDemo from "./components/SchoolHangoutDemo";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <>
      <Header />
      <Mine />
      <PreschoolManagement />
      <GrowAndSave />
      <OurBenefits />
      <Testimonials />
      <SchoolHangoutDemo />
      <Footer />
    </>
  );
}

export default App;

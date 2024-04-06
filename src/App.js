import CallToAction from "./components/CallToAction";
import Category from "./components/Category";
import Faqs from "./components/Faqs";
import Footer from "./components/Footer";
import Integrate from "./components/Integrate";
import Navbar from "./components/Navbar";



  
function App() {
 
  return (
    <div>
      <Navbar/>
      <Integrate/>
      <Category/>
      <Faqs/>
      <CallToAction/>
      <Footer/>
    </div>
  );
}

export default App;

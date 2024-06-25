import AboutCompany from './AboutCompany/AboutCompany';
import './App.css';
import Banner from './Banner/Banner';
import ImageSlider from './ImageSlider/ImageSlider';
import Navbar from './Navbar/Navbar';
import OurServices from './OurServices/OurServices';

function App() {
  return (
    <>
      <header>
        <Navbar></Navbar>
        <Banner></Banner>
      </header>
      <ImageSlider></ImageSlider>
      <AboutCompany></AboutCompany>
      <OurServices></OurServices>
    </>
  );
}

export default App;

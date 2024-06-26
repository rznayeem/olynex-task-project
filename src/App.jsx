import AboutCompany from './AboutCompany/AboutCompany';
import './App.css';
import Banner from './Banner/Banner';
import Blogs from './Blogs/Blogs';
import ContactUs from './ContactUs/ContactUs';
import ImageSlider from './ImageSlider/ImageSlider';
import Navbar from './Navbar/Navbar';
import OurProjects from './OurProjects/OurProjects';
import OurServices from './OurServices/OurServices';
import Testimonials from './Testimonials/Testimonials';

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
      <OurProjects></OurProjects>
      <Testimonials></Testimonials>
      <Blogs></Blogs>
      <ContactUs></ContactUs>
    </>
  );
}

export default App;

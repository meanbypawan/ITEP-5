import logo from './logo.svg';
import './App.css';
import Footer from './components/footer/Footer';
import Testimonial from './components/testimonial/Testimonial';
import About from './components/about/About';
import Category from './components/category/Category';
import SpearingExperience from './components/spearing-exp/SpearingExperience';
import MainContent from './components/main-content/MainContent';

function App() {
  return <>
    <MainContent/>
    <SpearingExperience/>
    <Category/>
    <About/>
    <Testimonial/>    
    <Footer/>
  </>
}

export default App;

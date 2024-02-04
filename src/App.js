import logo from './logo.svg';
import './App.css';
import Home from './Pages/Navbar/Home/Home';
import ContactUspage from './Pages/ContactUS/ContactUspage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Services from './Pages/Services/Services';
import About_us from './About_us/About_us';
import ScrollToTop from './Scrool_Top/Scroll_Top';
import Testimonials from './Testimonials/Testimonials';
import { HelmetProvider } from 'react-helmet-async';
function App() {
  return (
    <div className="App">
      <HelmetProvider >

          <BrowserRouter>
        <Routes>
        <Route 
        exact 
        path={"/"} 
        element={<>
          <ScrollToTop />
          <Home />
        </>} />
        <Route path="/About-us"  element={<>
          <ScrollToTop />
          <About_us/>
        </>}  />
        <Route path="/Contact-us"  element={<>
          <ScrollToTop />
          <ContactUspage/>
        </>}  />
        <Route path="/Services"  element={<>
          <ScrollToTop />
          <Services/>
        </>}  />
        <Route path="/Testimonials"  element={<>
          <ScrollToTop />
          <Testimonials/>
        </>}  />

        
       </Routes>
             </BrowserRouter>
      </HelmetProvider>
    </div>
  );
}

export default App;

import React, { useState, useEffect } from 'react';
import './App.css';
import { Header } from './Components/Header/Header';
import { Home } from './Components/Home/Home';
import { Footer } from './Components/Footer/Footer';
import { About } from './Components/About/About';
import { Service } from './Components/Services/Service';
import { ServiceDetails } from './Components/ServiceDetails/ServiceDetails';
import { Contact } from './Components/Contact/Contact';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  const [loader, setLoader] = useState(false);

  useEffect(() => {
    setLoader(true);
    setTimeout(() => {
      setLoader(false);
    }, 1500);
  }, []);


  return (
    <div className="App">
      {loader ? (
        <div className='loader-container'>
          <div className='loader'></div><br></br>
          <div class="loading loading06">
            <span data-text="F">F</span>
            <span data-text="O">O</span>
            <span data-text="C">C</span>
            <span data-text="U">U</span>
            <span data-text="S">S</span>
            <span data-text="B">B</span>
            <span data-text="Y">Y</span>
            <span data-text="T">T</span>
            <span data-text="E">E</span>
            <span data-text="S">S</span>
          </div>
        </div>
      ) :
        (<Router>
          <Header />
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path="home" element={<Home />}></Route>
            <Route path="about" element={<About />}></Route>
            <Route path="service" element={<Service />}></Route>
            <Route path="service-details" element={<ServiceDetails />}></Route>
            <Route path='contact' element={<Contact />}></Route>
          </Routes>
          <Footer />
        </Router>)}
    </div>
  );
}

export default App;

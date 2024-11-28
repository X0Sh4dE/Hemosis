// import logo from './logo.svg';
// import './App.css';
// import Navbar from './Components/Navbar';
// import HeroSection from './Components/hero-section';
// import Footer from './Components/Footer'; 
// import Services from './Components/Services';
// import ContactUs from './Components/contact';
// import About from './Components/about';
// import Login from './Components/login';
// import Signup from './Components/signup';
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// function App() {
//   return (
//     <Navbar />
        
//     {/* Dynamic Main Content */}
//     <main>
//       <Routes>
//         <Route path="/" element={<HeroSection />} />
//         <Route path="/services" element={<Services />} />
//         <Route path="/contact" element={<ContactUs />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/signup" element={<Signup />} />
//       </Routes>
//     </main>
    
//     {/* Static Footer */}
//     <Footer />
//   </div>
// </Router>
//     // <Router>
//     //   <Routes>
//     //   <Route path='/' element={/HeroSection}>
//     //   <Route path='/Services' element={/Services}>
//     //   <Route path='/signup' element={/Signup}>
//     //   <Route path='/Login' element={/Login}>
//     //   <Route path='/Login' element={/Login}>
//     //   <Route path='/Login' element={/Login}>
//     //   <Route path='/Login' element={/Login}>
//     //   </Routes>
//     // </Router>
//     <div className="App">
//       <header>
//       <Navbar />      
//       <HeroSection/>
//       <Services/>
//       <ContactUs/>
//       <About/>
//       <Login/> 
//       <Signup/>
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//       <footer><Footer/></footer>
//     </div>
//   );
// }

// export default App;
// //       <div className="App">
//         {/* Static Navbar */}
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import HeroSection from "./Components/hero-section";
import Footer from "./Components/Footer";
import Services from "./Components/Services";
import ContactUs from "./Components/contact";
import About from "./Components/about";
import Login from "./Components/login";
import Signup from "./Components/signup";

function App() {
  return (
    <Router>
      <div className="App">
        {/* Static Navbar */}
        <Navbar />

        {/* Dynamic Main Content */}
        <main>
          <Routes>
            <Route path="/" element={<HeroSection />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </main>

        {/* Static Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;

      

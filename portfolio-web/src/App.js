import React from 'react';
import Header from './component/Header';
import Nav from './component/Nav';
import Experience from './component/Experience'
import About from './component/About';
import Contact from './component/contact';
import Footer from './component/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Nav/>
      <About/>
      <Experience/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Contact from './Contact';
const App = () => {
  return(
    <div>
      <div className='nav-home'>

        <Navbar />
        <Home />
      </div>
      <About />
      <Contact />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));

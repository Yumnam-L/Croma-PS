import { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from '../utils/Navbar';
import Footer from '../utils/Footer';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <div className='flex flex-col min-h-screen'>
        <Navbar />
        <Footer />
      </div>
    </Router>
  );
}

export default App;

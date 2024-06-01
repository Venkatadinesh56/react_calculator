
import './App.css';
import K from './k';
import Head from './header';
import Home from './Home';
import Cimage from './cimage';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
    <div>
      
     
        <Routes>
          <Route path="/" index element={<Head />} />
          <Route path="/k" element={<K />} />
          <Route path="/home" element={<Home />} />
          <Route path='/cimage' element={<Cimage />}/>
        
        </Routes>
      
    </div>
    </BrowserRouter>
  );
}

export default App;

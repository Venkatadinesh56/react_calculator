
import './App.css';
import K from './k';
import Head from './header';
import Home from './Home';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
    <div>
      
     
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="/k" element={<K />} />
          <Route path="/header" element={<Head />} />
        
        </Routes>
      
    </div>
    </BrowserRouter>
  );
}

export default App;

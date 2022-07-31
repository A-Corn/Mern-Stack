import './App.css';
import { BrowserRouter , Route , Routes} from 'react-router-dom';
import Home from './components/Home';
import FullDesign from './components/FullDesign';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Routes>
          <Route path="/home" element={ <Home /> } />
          <Route path="/:word" element={ <FullDesign />} />
          <Route path="/:word/:textColor/:backgroundColor" element={ <FullDesign />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

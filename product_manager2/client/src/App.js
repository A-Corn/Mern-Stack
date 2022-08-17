import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import Main from "./view/Home";
import OneProduct from './components/OneProduct';
const App = () => {
  return(
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="/products/:id" element={<OneProduct />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
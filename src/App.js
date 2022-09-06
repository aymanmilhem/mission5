import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import InsuranceComparePage from './pages/InsuranceComparePage';
import HomePage from './pages/HomePage';
function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path ="/Home" element={<HomePage/>}/>
        <Route path="/insurance-compare" element={<InsuranceComparePage />} />
        </Routes>
        </BrowserRouter>

    </>
  );
}

export default App;
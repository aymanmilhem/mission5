import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import InsuranceComparePage from './pages/InsuranceComparePage';

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/insurance-compare" element={<InsuranceComparePage />} />
        </Routes>
        </BrowserRouter>

    </>
  );
}

export default App;
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import InsuranceComparePage from './pages/InsuranceComparePage';
import FaqPage from './pages/FaqPage';

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/insurance-compare" element={<InsuranceComparePage />} />
        <Route path="/cars/faq" element={<FaqPage />} />
        </Routes>
        </BrowserRouter>

    </>
  );
}

export default App;
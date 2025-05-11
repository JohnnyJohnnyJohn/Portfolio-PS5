import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Welcome from './Welcome';
import Home from './Home';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router; 
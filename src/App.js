import { Link, Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import ApiReq from './pages/ApiReq';

const App = () => {
  return (
    <div>
      <Link to="/">Home</Link>  <br/>
      <Link to="/about">소개</Link> <br/>
      <Link to="/api">API 호출</Link>
      <hr/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/api" element={<ApiReq/>} />
      </Routes>
    </div>
  );
};

export default App;
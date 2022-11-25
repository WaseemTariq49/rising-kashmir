import Header from "./components/Header";
import Carousel1 from "./components/Carousel1";
import Home from "./components/Home";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Health from "./components/Health";
import TopStories from "./components/TopStories.jsx";
import City from "./components/City.jsx";
import Anchor from "./components/Anchor.jsx";
import Features from "./components/Features.jsx";
import Interviews from "./components/Interviews.jsx";
import More from "./components/More.jsx";

function App() {
  return (
    <>
    <Router>
      <Header />
      <Carousel1 />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/health" element={<Health />} />
        <Route path="/topstories" element={<TopStories />} />
        <Route path="/city" element={<City />} />                     //NEEDED to be implemented
        <Route path="/anchor" element={<Anchor />} />
        <Route path="/features" element={<Features />} />
        <Route path="/interviews" element={<Interviews />} />
        <Route path="/more" element={<More />} />
        <Route path="*" element={<div>404 Page Not Found</div>} />
      </Routes>
    </Router>
      
      
      
    </>
  );
}

export default App;

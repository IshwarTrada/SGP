import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact/>} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;

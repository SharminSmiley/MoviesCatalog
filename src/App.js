import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Movies from "./pages/Movies";
import Pagenotfound from "./pages/Pagenotfound";
import SignInSide from "./pages/Signin";
import SignUp from "./pages/Signup"; 
import Astarisborn from "./pages/Astarisborn";
import Theconjuring from "./pages/Theconjuring";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Movies" element={<Movies />} />
          <Route path="/signin" element={<SignInSide/>} />
          <Route path="/signup" element={<SignUp/>} />
          <Route path="astarisborn" element={<Astarisborn/>} />
          <Route path="theconjuring" element={<Theconjuring/>} />
          <Route path="*" element={<Pagenotfound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

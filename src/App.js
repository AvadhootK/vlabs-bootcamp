import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import QualifyingTask from "./pages/QualifyingTask";
import Participants from "./pages/Participants";
import FAQs from "./pages/FAQs";
import Resources from "./pages/Resources";
import PhotoGallery from "./pages/PhotoGallery";
import Contact from "./pages/Contact";
import ImpInstru from "./pages/ImpInstru";
import ScrollToTop from "./Components/ScrollToTop";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route index element={<Home />} />
        <Route exact path="/home" element={<Home />}></Route>
        <Route exact path="/about" element={<About />}></Route>
        <Route
          exact
          path="/qualifyingtask"
          element={<QualifyingTask />}
        ></Route>
        <Route exact path="/impinstru" element={<ImpInstru />}></Route>
        <Route exact path="/participants" element={<Participants />}></Route>
        <Route exact path="/FAQs" element={<FAQs />}></Route>
        <Route exact path="/resources" element={<Resources />}></Route>
        <Route exact path="/photogallery" element={<PhotoGallery />}></Route>
        <Route exact path="/contact" element={<Contact />}></Route>
      </Routes>
    </Router>
  );
}

export default App;

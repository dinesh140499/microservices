import Footer from "./components/Footer";
import Shortner from "./components/Shortner";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Shortner />}></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;

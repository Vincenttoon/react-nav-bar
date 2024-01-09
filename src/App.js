import Layout from "./components/Layout.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home.js";
import PageOne from "./pages/PageOne.js";
import PageTwo from "./pages/PageTwo.js";
import PageThree from "./pages/PageThree.js";
import PageCTA from "./pages/PageCTA.js";

function App() {
  return (
    <Layout>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pageOne" element={<PageOne />} />
          <Route path="/pageTwo" element={<PageTwo />} />
          <Route path="/pageThree" element={<PageThree />} />
          <Route path="/ctaPage" element={<PageCTA />} />
        </Routes>
      </Router>
    </Layout>
  );
}

export default App;

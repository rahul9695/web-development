import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Contact from "./pages/contact-us/Contact-us";
import Home from "./pages/home/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
           <Routes>
             <Route path="/" element={<Home />} />
             <Route path="/contact-us" element={<Contact-us />} />
           </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;

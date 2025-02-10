import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Features from "./components/Features";
import Story from "./components/Story";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Legalitas from "./pages/Legalitas";
import KeikenBlocks from "./pages/keiken-blocks";
import VisionMission from "./pages/VisionMission";

function Home() {
    return (
        <main className="relative min-h-screen w-screen overflow-x-hidden">
            <NavBar />
            <Hero />
            <About />
            <Features />
            <Story />
            <Contact />
            <Footer />
        </main>
    );
}

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} /> 
                <Route path="/legalitas" element={<Legalitas />} />
                <Route path="/keiken-blocks" element={<KeikenBlocks />} />
                <Route path="/vision-mission" element={<VisionMission />} />
            </Routes>
        </Router>
    );
}

export default App;

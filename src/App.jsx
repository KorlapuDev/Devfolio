import "./App.css";
import MainLayout from "./layout/mainLayout";
import HeroSection from "./sections/HeroSection";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<HeroSection />} />
      </Routes>
    </MainLayout>
  );
}

export default App;

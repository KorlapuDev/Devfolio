import "./App.css";
import MainLayout from "./layout/mainLayout";
import HeroSection from "./sections/HeroSection";
import { Routes, Route } from "react-router-dom";
import { DarkModeProvider, useDarkMode } from "./context/DarkModeContext";

function App() {
  return (
    <DarkModeProvider>
      <MainLayout>
        <Routes>
          <Route path="/" element={<HeroSection />} />
        </Routes>
      </MainLayout>
    </DarkModeProvider>
  );
}

export default App;

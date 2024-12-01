import "./App.css";
import MainLayout from "./layout/mainLayout";
import { Routes, Route } from "react-router-dom";
import { DarkModeProvider, useDarkMode } from "./context/DarkModeContext";
import HeroSectionLanding from "./sections/HeroSectionLanding";

function App() {
  return (
    <DarkModeProvider>
      <MainLayout>
        <Routes>
          <Route path="/" element={<HeroSectionLanding />} />
        </Routes>
      </MainLayout>
    </DarkModeProvider>
  );
}

export default App;

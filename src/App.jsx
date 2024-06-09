import Home from "./pages/Home.jsx";
import PassContextProvider from "./context/Pass.context.jsx";
import { Routes, Route } from "react-router-dom";
import PassGenerator from "./pages/Passgenerator.jsx";
import MainLayout from "./layout/MainLayout.jsx";
import KeepedPasswords from "./pages/KeepedPasswords.jsx";
const App = () => {
  return (
    <PassContextProvider>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/passgenerator" element={<PassGenerator />} />
          <Route path="/keepedpasswords" element={<KeepedPasswords />} />
        </Routes>
      </MainLayout>
    </PassContextProvider>
  );
};

export default App;

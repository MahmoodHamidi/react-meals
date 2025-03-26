import { Routes, Route, BrowserRouter } from "react-router-dom";
import NavLayoutComponent from "./components/NavLayoutComponent";
import AboutPage from "./page/AboutPage";
import HomePage from "./page/HomePage";
import MealsPage from "./page/MealsPage";
import MealsDetailsPage from "./page/MealsDetailsPage";
import NotFoundPage from "./page/NotFoundPage";
import DarkModeProvider from "./context/DarkModeContext";

function App() {
  return (
    <>
      <BrowserRouter>
        <DarkModeProvider>
          <Routes>
            <Route path="/" element={<NavLayoutComponent />}>
              <Route index element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/meals" element={<MealsPage />} />
              <Route path="/meals/:id" element={<MealsDetailsPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Route>
          </Routes>
        </DarkModeProvider>
      </BrowserRouter>
    </>
  );
}

export default App;

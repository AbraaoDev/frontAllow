import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CreateTripPage } from "./pages/consulta";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CreateTripPage />} />
      </Routes>
    </BrowserRouter>
  );
}

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/home/Home";
import { Ent } from "./pages/entertainment/Ent";
import { Portal } from "./pages/portal/Portal";
import { GlobalStyled } from "./style/GlobalStyled";

function Router() {
  return (
    <BrowserRouter>
      <GlobalStyled />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Ent" element={<Ent />} />
        <Route path="/Portal" element={<Portal />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
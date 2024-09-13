import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/home/Home";
import { Ent } from "./pages/entertainment/Ent";
import { Portal } from "./pages/portal/Portal";
import { GlobalStyled } from "./style/GlobalStyled";
import { PageNotFound } from "./pages/pageNotFound/PageNotFound";

function Router() {
  return (
    <BrowserRouter basename="/todo_app">
      <GlobalStyled />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Ent" element={<Ent />} />
        <Route path="/Portal" element={<Portal />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "@/pages/Home";
import { Analytics } from "@vercel/analytics/react";
import NotFound from "@/pages/NotFound";
import TseDocuments from "@/pages/TseDocuments";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/tse-belgeleri" element={<TseDocuments />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <Analytics />
    </>
  );
}

export default App;

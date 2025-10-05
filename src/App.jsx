import { Route, Routes } from "react-router-dom";
import { Home } from "@/pages/Home";
import { Suspense, lazy } from "react";


const LazyHome = lazy(() => import("@/pages/Home"));

function App() {
  return (
    <Routes>
      <Route index element={
        <Suspense fallback={<div>Loading...</div>}>
          <LazyHome />
        </Suspense>
      } />
    </Routes>
  )
}

export default App;
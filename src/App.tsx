import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Header/Navbar";
import { lazy, useEffect } from "react";
import Lenis from "lenis";
import { AnimatePresence } from "framer-motion";
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Work = lazy(() => import("./pages/Work"));
const Contact = lazy(() => import("./pages/Contact"));
const Exp = lazy(() => import("./pages/Exp"));

function App() {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  const location = useLocation();

  const allRoutes = [
    { path: "/", element: <Home /> },
    { path: "/exp", element: <Exp /> },
    { path: "/about", element: <About /> },
    { path: "/work", element: <Work /> },
    { path: "/contact", element: <Contact /> },
  ];

  return (
    <>
      <div>
        <Navbar />
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            {allRoutes.map((elem, index) => (
              <Route key={index} path={elem.path} element={elem.element} />
            ))}
          </Routes>
        </AnimatePresence>
      </div>
    </>
  );
}

export default App;

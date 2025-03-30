import { Routes, Route, useLocation } from "react-router-dom";
// import Sidebar from "./components/Sidebar";
import Navbar from "./components/Header/Navbar";
import { useEffect } from "react";
import Lenis from "lenis";
import { AnimatePresence } from "framer-motion";
import Home from "./pages/Home";
import About from "./pages/About";
import Work from "./pages/Work";
import Contact from "./pages/Contact";
import Exp from "./pages/Exp";

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
    { path: "/about/:id", element: <About /> },
    { path: "/work/:id", element: <Work /> },
    { path: "/contact/:id", element: <Contact /> },
  ];

  return (
    <>
      <div>
        {/* <Sidebar /> */}
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

import { useEffect } from "react";
import NavBar from "./components/NavBar";
import useTheme from "./store/themeContext";
import Footer from "./components/Footer";
import SearchBar from "./components/SearchBar";
import { Outlet } from "react-router-dom";
function App() {
  const theme = useTheme((state) => state.theme);

  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(theme);
  }, [theme]);

  return (
    <div className="flex flex-col min-h-screen dark:bg-slate-900">
      <NavBar />
      <div className="flex-grow">
        <div className="flex justify-center">
          <SearchBar className="flex sm:hidden py-2"></SearchBar>
        </div>
          <Outlet></Outlet>
      </div>
      <footer className=" sticky bottom-0">
      <Footer />
      </footer>
    </div>
  );
}

export default App;

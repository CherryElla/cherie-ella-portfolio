// import PageLoader from './components/PageLoader';
import { useState, useEffect } from 'react'
import Home from './components/pages/Home';
import {FaMoon, FaSun} from "react-icons/fa"


function App() {
  const [theme, setTheme] = useState("light")
  useEffect(()=>{
    if(theme === "dark"){
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  },[theme]);
  const handleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  }
  return (
    <div className="font-roboto ">
      <button className='dark:bg-cyan-800 bg-yellow-300 dark:text-yellow-400 text-blue-900 p-3 mt-1 rounded-3xl float-right'onClick={handleTheme}>{theme === "light" ? < FaSun/> : <FaMoon/>}</button>
    <Home />
    </div>
  );
}

export default App;

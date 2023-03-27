// import PageLoader from './components/PageLoader';
import { useState, useEffect } from 'react'
import Home from './components/pages/Home';


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
    <div className="font-roboto">
      <button className='bg-yellow-300 p-4 rounded-3xl float-right'onClick={handleTheme}>Sun Mode</button>
    <Home />
    </div>
  );
}

export default App;

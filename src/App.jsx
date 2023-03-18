import PortfolioMain from './components/PortfolioMain';
import { useState } from 'react'
import Home from './components/pages/Home';

function App() {
  const [count, setCount] = useState(0)
  return (
    <div className="font-roboto">
    <PortfolioMain />
    </div>
  );
}

export default App;

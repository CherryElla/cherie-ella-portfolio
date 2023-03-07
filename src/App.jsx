import PortfolioMain from './assets/PortfolioMain';
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)
  return (
    <div className="main-layout">
    <PortfolioMain />
    </div>
  );
}

export default App;

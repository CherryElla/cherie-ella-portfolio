import PortfolioMain from './components/PortfolioMain';
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)
  return (
    <div class="bg-[url('./images/tv-no-bg.png')] bg-cover bg-center flex flex-col h-screen">
    <PortfolioMain />
    </div>
  );
}

export default App;

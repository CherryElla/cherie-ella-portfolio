import PageLoader from './components/PageLoader';
import { useState } from 'react'
import Home from './components/pages/Home';

function App() {
  const [count, setCount] = useState(0)
  return (
    <div className="font-roboto">
    <PageLoader />
    </div>
  );
}

export default App;

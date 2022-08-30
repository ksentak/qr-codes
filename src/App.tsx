import { useState } from 'react';

const App: React.FC = () => {
  const [count, setCount] = useState(0);

  return (
    <div className='App'>
      <h1>Hello</h1>
    </div>
  );
};

export default App;

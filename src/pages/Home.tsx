import { useState } from 'react';

const Home = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Delivery Store</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/pages/Home.tsx</code> and save to test HMR
        </p>
      </div>
    </div>
  );
};

export default Home;

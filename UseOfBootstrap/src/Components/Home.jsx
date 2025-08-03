import React, { useState } from "react";

function Home() {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);
  
  return (
    <>

      <div className="container text-center">
        <div className="card">
          <div className="d-flex justify-content-start">
            <button onClick={() => setCount((count) => count + 1)}>
              count is {count}
            </button>
          </div>
        </div>
      </div>

      <div className="card">
        <button onClick={() => setCount1((count1) => count1 + 1)}>
          count - is = {count1}
        </button>
      </div>
    </>
  );
}

export default Home;

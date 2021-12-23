import React from "react";

function App() {
  const [count, setCount] = React.useState(0);

  function increase() {
    return setCount(count + 1);
  }
  function decrease() {
    return count <= 0 ? 0 : setCount(count - 1);
  }
  return (
    <div>
      <div className="container">
        <h1>{count}</h1>
        <button onClick={decrease}>-</button>
        <button onClick={increase}>+</button>
      </div>
    </div>
  );
}

export default App;

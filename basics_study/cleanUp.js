import { useState, useEffect } from "react";

function Hello2() {
  function destroyFn() {
    console.log("Destroyed");
  }
  function createFn() {
    console.log("Created");
    return destroyFn;
  }
  useEffect(createFn, []);
  return <h1>Hello</h1>;
} // identical to Hello() function

function Hello() {
  useEffect(() => {
    console.log("Created");
    return () => console.log("Destroyed"); // cleanUp function - executed when the componenet is destroyed
  }, []);
  return <h1>Hello</h1>;
}

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);
  return (
    <div>
      {showing ? <Hello2 /> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;

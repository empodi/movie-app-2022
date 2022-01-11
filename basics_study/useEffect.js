//copy paste to src/App.js
import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  console.log("I run all the time");
  useEffect(() => {
    console.log("CALL THE API...");
  }, []); // this code is called only once initially because array is empty
  useEffect(() => {
    if (keyword !== "" && keyword.length > 5) {
      // can configure search conditions
      console.log("Search For", keyword);
    }
  }, [keyword]); // this code is exectued only when keyword changes
  useEffect(() => {
    console.log("I run when counter changes");
  }, [counter]);
  useEffect(() => {
    console.log("I run when counter & keyword changes");
  }, [counter, keyword]);

  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search here..."
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>Click me</button>
    </div>
  );
}
export default App;

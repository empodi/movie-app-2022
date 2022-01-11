import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

function App() {
  return (
    <div>
      <h1 className={styles.title}>Welcome back to React</h1>
      <Button text={"Continue"} />
    </div>
  );
}

export default App;

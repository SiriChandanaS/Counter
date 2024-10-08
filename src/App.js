import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [count, setcount] = useState(
    parseInt(localStorage.getItem("count")) || 0
  );
  const l=[1,2,3,4,5,6]
  const handleDecrement = () => {
    setcount(count - 1);
    localStorage.setItem("count", count - 1);
  };

  const fl=l.filter((e)=>e%2!=0)

  /*

  l=[1,2,3]
  for i in l:
     print(i)
  1 
  2
  3
    l.map(i,ind)=>{
    console.log(i,ind)
    }

  */

  return (
    <div
      className="App"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f0f0f5",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      <h1 style={{ color: "#ff6b6b", fontSize: "2.5rem", marginBottom: "20px" }}>
        Counter App
      </h1>

      <div
        style={{
          display: "flex",
          gap: "15px",
          marginBottom: "20px",
        }}
      >
        <button
          onClick={() => {
            setcount(count + 1);
            localStorage.setItem("count", count + 1);
          }}
          style={{
            padding: "10px 20px",
            fontSize: "1.2rem",
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            transition: "background-color 0.3s ease",
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#45a049")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#4CAF50")}
        >
          Increment
        </button>

        <button
          onClick={handleDecrement}
          style={{
            padding: "10px 20px",
            fontSize: "1.2rem",
            backgroundColor: "#f44336",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            transition: "background-color 0.3s ease",
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#e53935")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#f44336")}
        >
          Decrement
        </button>
      </div>

      <div
        style={{
          fontSize: "1.5rem",
          color: count === 0 ? "#ffa500" : count > 0 ? "#4CAF50" : "#f44336",
        }}
      >
        {count === 0 ? (
          <div>The number is zero</div>
        ) : count > 0 ? (
          <div>The number is positive</div>
        ) : (
          <div>The number is negative</div>
        )}
      </div>

      <h1
        style={{
          fontSize: "4rem",
          color: count === 0 ? "#ffa500" : count > 0 ? "#4CAF50" : "#f44336",
          marginTop: "20px",
        }}
      >
        {count}
      </h1>
      
     
    </div>
  );
}

export default App;
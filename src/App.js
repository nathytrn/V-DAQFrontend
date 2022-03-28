import "./App.css";
import { useEffect, useState, useRef } from "react";
import { axiosInstance } from "./config";
function App() {
  const inputURL = useRef();
  const [status, setStatus] = useState("Status...");
  useEffect(() => {
    const getURL = async () => {
      try {
        const res = await axiosInstance.get();
        inputURL.current.value = res.data.url;
      } catch (error) {
        console.log(error);
      }
    };
    getURL();
  }, []);
  const handleClick = async (event) => {
    event.preventDefault();
    try {
      const res = await axiosInstance({
        method: "post",
        headers: { "Content-Type": "application/json" },
        data: {
          url: inputURL.current.value,
        },
      });

      if (res.status === 200) setStatus("Success");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="App">
      <form onSubmit={handleClick}>
        <label>Input Here:</label>
        <input id="url" type="text" ref={inputURL} maxLength="200" />

        <button type="submit">Submit</button>
      </form>
      <span>{status}</span>
    </div>
  );
}

export default App;

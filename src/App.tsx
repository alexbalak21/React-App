import { useEffect, useState } from "react";
import axios from "axios";

export default function App() {
  const [getMessage, setGetMessage] = useState("");
  const [postMessage, setPostMessage] = useState("");

  const API_URL = import.meta.env.API_URL;

  useEffect(() => {
    axios
      .get(`${API_URL}/api/message`)
      .then(res => setGetMessage(res.data.message))
      .catch(err => console.error("GET error:", err));
  }, [API_URL]);

  const sendPost = () => {
    axios
      .post(`${API_URL}/api/message`, { name: "Alex" })
      .then(res => setPostMessage(res.data.response))
      .catch(err => console.error("POST error:", err));
  };

  return (
    <div>
      <h1>React App</h1>

      <h2>GET Response:</h2>
      <p>{getMessage}</p>

      <h2>POST Response:</h2>
      <button onClick={sendPost}>Send POST</button>
      <p>{postMessage}</p>
    </div>
  );
}

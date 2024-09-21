import { useState, useEffect } from "react";
import { createConnection } from "./chat.js";

const serverUrl = "https://localhost:1234";

function ChatRoom({ roomId }) {
  useEffect(() => {
    const connection = createConnection(serverUrl, roomId);
    connection.connect();
    return () => connection.disconnect();
  }, [roomId]);

  return <h1>Welcome to the {roomId} room!</h1>;
}

export default function App() {
  const [roomId, setRoomId] = useState("general");
  const [show, setShow] = useState(false);
  return (
    <div className="centered">
      <label>
        <b>Choose a Chat Room</b>
        <br />
        <select value={roomId} onChange={(e) => setRoomId(e.target.value)}>
          <option value="general">General</option>
          <option value="travel">Travel</option>
          <option value="music">Music</option>
        </select>
      </label>
      <button onClick={() => setShow(!show)}>
        {show ? "Close Chat" : "Open Chat"}
      </button>
      <br />
      {show && <ChatRoom roomId={roomId} />}
    </div>
  );
}

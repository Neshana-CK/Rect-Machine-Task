import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./Pages/Login";
import ListView from "./Pages/ListView";
import DetailView from "./Pages/DetailView";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="/posts" element={<ListView />} />
      <Route path="/posts/:id" element={<DetailView />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;

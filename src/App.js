import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Admin from "./pages/Admin";
import Home from "./pages/Home";
import News from "./pages/News";
function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/news" element={<News/>} />
        <Route path="/admin" element={<Admin/>} />
      </Routes>
    </div>
  );
}
export default App;

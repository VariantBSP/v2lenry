import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ListPage from "./components/ListPage";
import Home from "./components/Home";
import Thanks from "./components/Thanks";


function App() {
  return (
    <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="listpage" element={<ListPage />} />
                <Route path="Thanks" element={<Thanks />} />
            </Routes>
        </BrowserRouter>
  );
}

export default App;

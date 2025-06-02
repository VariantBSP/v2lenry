import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ListPage from "./components/ListPage";
import Home from "./components/Home";


function App() {
  return (
    <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="listpage" element={<ListPage />} />
            </Routes>
        </BrowserRouter>
  );
}

export default App;

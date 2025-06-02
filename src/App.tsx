import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ListPage from "./components/ListPage";
import Home from "./components/Home";
import Thanks from "./components/Thanks";
import NotFound from "./components/NotFound";


function App() {
  return (
    <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="listpage" element={<ListPage />} />
                <Route path="Thanks" element={<Thanks />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
  );
}

export default App;

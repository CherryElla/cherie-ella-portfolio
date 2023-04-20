import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import BlogPost from "./components/pages/BlogPost";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="blog-post" element={<BlogPost />} />
            </Routes>
        </>
    );
}

export default App;

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Results from "./pages/Results";
import Header from "./components/Header";
import Feed from "./pages/Feed";
import VideoDetail from "./pages/VideoDetail";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/results" element={<Results />} />
        <Route path="/watch" element={<VideoDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

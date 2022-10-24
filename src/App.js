import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import SinglePage from "./Pages/singlePage";
import Error from "./Pages/Error";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies/:id" element={<SinglePage />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;

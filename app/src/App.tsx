import { Navigate, Route, Routes } from "react-router-dom";
import Root from "./routes/Root";

const App = () => (
  <Routes>
    <Route path="/" element={<Root />} />
    <Route path="*" element={<Navigate to="/" replace />} />
  </Routes>
);

export default App;

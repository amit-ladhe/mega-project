import { Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import Login from "./component/login";
import Jobs from "./component/Jobs";
import NotFound from "./component/Notfound";
import ProtectedRoute from "./component/protectedRoute";

const App = () => (
  
  <Routes>
    <Route path="/" element={<ProtectedRoute Component={Home} />}></Route>

    <Route path="/Jobs" element={<ProtectedRoute Component={Jobs} />}></Route>

    <Route path="/login" element={<Login/>}></Route>

    <Route path="/*" element={<NotFound/>}></Route>

  </Routes>
);

export default App;

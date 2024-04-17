import { Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import Login from "./component/login";
import Jobs from "./component/Jobs";
import NotFound from "./component/Notfound";

const App = () => (
  
  <Routes>
    <Route path="/" element={<Home />}></Route>

    <Route path="/Jobs" element={<Jobs />}></Route>

    <Route path="/login" Component={Login}></Route>

    <Route path="/*" Component={NotFound}></Route>

  </Routes>
);

export default App;

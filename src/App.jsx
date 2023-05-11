import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Help from "./pages/Help";
import Task from "./pages/Task";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/help" element={<Help />} />
        <Route path="/task" element={<Task />}/>
      </Routes>
    </Router>
  );
};

export default App;
/**
 * component
 * container
 */
/**
***--> when a component render ?
--> when props change
--> when state changes
--> when parent rerender
 */

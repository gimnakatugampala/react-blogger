import { BrowserRouter as Router,Route,Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
    <div className="App">
       <Navbar/>
       <Footer/>
    </div>
    </Router>
  );
}

export default App;

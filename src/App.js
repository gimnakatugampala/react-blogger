import { BrowserRouter as Router,Route,Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";

function App() {
  return (
    <Router>
    <div className="App">
       <Navbar/>
       <div className="content">
         <Switch>

           <Route path="/" exact>
            <Home/>
           </Route>

         </Switch>
       </div>
       <Footer/>
    </div>
    </Router>
  );
}

export default App;

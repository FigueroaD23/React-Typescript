import {
  BrowserRouter as Router,
  Switch,
  Route,  
} from "react-router-dom";
import './App.scss'
import {Navbar} from "./components/Navbar/Navbar";
import Inicio from "./pages/inicio/IndexInicio";
function App(): JSX.Element {  

  return (
    <Router>
      <Navbar/>        
      <div className="container">
        <Switch>
          <Route path="/" exact component={Inicio}/>
          {/* <Route path="/search/:keyword/:rating?" component={Search}/>
          <Route path="/gif/:id" component={GifEspecifico}/> */}
        </Switch>
      </div>    
    </Router>
  )
}

export default App

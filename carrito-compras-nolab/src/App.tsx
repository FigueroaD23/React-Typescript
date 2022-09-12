import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.scss'
import { Navbar } from "./components/Navbar/Navbar";
import Inicio from "./pages/inicio/IndexInicio";
import {CartProvider} from "./Context/ContextCarrito";
import Carrito from "./components/Carrito/CarritoIndex";
function App(): JSX.Element {

  return (
    <CartProvider>
      <Router>        
        <Navbar />
        <div className="container">
          <Switch>
            <Route path="/" exact component={Inicio} />
            {/* <Route path="/search/:keyword/:rating?" component={Search}/>
          <Route path="/gif/:id" component={GifEspecifico}/> */}
          </Switch>
        </div>
      </Router>
    </CartProvider>
  )
}

export default App

import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from './Components/Navbar';
import Home from "./pages/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/blog" exact component={Navbar} />
        <Route path="/a-propos" exact component={Navbar} />
        <Route path="/se-connecter" exact component={Navbar} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
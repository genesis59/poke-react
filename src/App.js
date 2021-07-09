import { BrowserRouter, Switch, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Pokemon from "./pages/Pokemon";
import Ghibli from "./pages/Ghibli";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Pokemon} />
          <Route path="/ghibli" exact component={Ghibli} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

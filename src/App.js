import { BrowserRouter, Switch, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Pokemon from "./pages/Pokemon";
import Ghibli from "./pages/Ghibli";
import Magic from "./pages/Magic";
import HarryPotter from "./pages/HarryPotter";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Pokemon} />
          <Route path="/ghibli" exact component={Ghibli} />
          <Route path="/magic-the-gathering" exact component={ Magic } />
          <Route path="/harry-potter" exact component={ HarryPotter } />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

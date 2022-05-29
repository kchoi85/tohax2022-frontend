import Routes from "./Routes";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Benefits from "./pages/Benefits/benefits";


function App() {
  return (
    <BrowserRouter>
      <Routes />
      <Benefits />
      
    </BrowserRouter>


  );
}

export default App;

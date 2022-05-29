import Routes from "./Routes";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Landing from "./pages/Landing/landing"

function App() {
  return (
    <BrowserRouter>
    <Landing />
      <Routes />
    </BrowserRouter>


  );
}

export default App;

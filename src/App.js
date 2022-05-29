import Routes from "./Routes";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./pages/Login/login";


function App() {
  return (
    <BrowserRouter>
      <Routes />
      <Login />
      
    </BrowserRouter>


  );
}

export default App;

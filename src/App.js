import "./App.css";
import { BrowserRouter as Routers, Switch, Route } from "react-router-dom";
import PostList from "./componentes/postList/PostList";
import Topbar from "./componentes/topbar/Topbar";
import Home from "./pages/Home";

function App() {
  return (
    <Routers>
      <Topbar />
      <Switch>
        <Route path="/posts" component={PostList} exact />
        <Route path="/" component={Home} exact />
        <Route path="/user" component={PostList} exact />
      </Switch>
    </Routers>
  );
}

export default App;

import { BrowserRouter, Route, Switch, NavLink, Redirect } from "react-router-dom";

import "./App.css"

// pages
import { Home, About, Products, ProductDetails, ArticlePage,Contact } from "./pages/index";

function App() {
  return (
    <div className="App">
      {/* first step add BrowserRouter */}
      <BrowserRouter>
        <nav>
          <h1>Shirtz.Cool</h1>
          <NavLink exact to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/products">Products</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/articles/1">Articles</NavLink>
        </nav>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/products/:id" component={ProductDetails} />
          <Route path="/products" component={Products} />
          <Route path="/contact*" component={Contact} />
          <Route path="/articles/:id" component={ArticlePage} />
          <Route path="*">
            <Redirect to="/" />  
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

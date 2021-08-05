import "./App.css";
import SearchBar from "./Components/Functionalities/SearchBar";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import Header from "./Components/UI/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <SearchBar />
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/products">
        <Products />
      </Route>
    </BrowserRouter>
  );
}

export default App;

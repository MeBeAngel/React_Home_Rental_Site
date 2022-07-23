import React from "react";
import { Switch, Route } from "react-router-dom";
import "./styles.css";
import Nav from "./components/nav/Nav";
import Home from "./pages/home/Home";
import Blog from "./pages/blog/Blog";
import Rental from "./pages/rental/Rental";
import Contact from "./pages/contact/Contact";
import Footer from "./components/footer/Footer";

export default function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route  path="/blog" component={Blog} />
        <Route exact path="/rental" component={Rental} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
      <Footer />
    </div>
  );
}

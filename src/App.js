import './App.css';
import { Header } from "./MyComponents/Header";
import { Main } from "./MyComponents/Main";
import { ItemsAndQuantity } from "./MyComponents/ItemsAndQuantity";

import {
  BrowserRouter as Router, Routes,
  // Switch,
  Routes,
  Route
} from "react-router-dom";
import { ThankYou } from './MyComponents/ThankYou';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Main />
        <Routes>
          <Route path="itemsandquantity" />
          <Route path="thankyou" />
        </Routes>
      </Router>
    </>
  );
}

export default App;

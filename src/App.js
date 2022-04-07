import React from "react"
import './main.css'

import Header from "./Components/Header/Header";
import Result from "./Components/Result/Result";
import SearchBar from "./Components/SearchBar/SearchBar";

const App = () => {
  return(
    <div className="app_container">
      
      <Header />
      <SearchBar />
      <Result />
      
    </div>
  );
}

export default App;

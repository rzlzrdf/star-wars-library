import React,{useState} from "react"
import './main.css'

import Header from "./Components/Header/Header";
import Result from "./Components/Result/Result";
import SearchBar from "./Components/SearchBar/SearchBar";

const App = () => {

  const [movieList, setMovieList] = useState([])

  return(
    <div className="app_container">
      
      <Header />
      <SearchBar setMovieList={setMovieList} />
      <Result movieList={movieList} />
      
    </div>
  );
}

export default App;

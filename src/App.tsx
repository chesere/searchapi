import { useState } from "react";
import "./App.css";
import { SearchBar } from "./components/searchBar";
import { SearchResultList } from "./components/searchResultList";

function App() {
  const [results, setResults] = useState([]);
  return (
    <div className="App">
      <div className="search-bar-container">
        <SearchBar setResults={setResults} />
        <SearchResultList results={results} />
      </div>
    </div>
  );
}

export default App;

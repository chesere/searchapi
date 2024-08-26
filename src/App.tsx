import "./App.css";
import { SearchBar } from "./components/searchBar";

function App() {
  return (
    <div className="App">
      <div className="search-bar-container">
        <SearchBar />
        <div>SearchDetails</div>
      </div>
    </div>
  );
}

export default App;

import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "./searchBar.css";

export const SearchBar = () => {
  const [input, setInput] = useState("");
  const fetchData = (value) => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
      });
  };
  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };
  return (
    <div className="input-wrap">
      <FaSearch id="search-icon" />
      <input
        placeholder="type to search"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
    </div>
  );
};

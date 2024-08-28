import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "./searchBar.css";

export const SearchBar = ({ setResults }) => {
  const [input, setInput] = useState("");
  const fetchData = (value) => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((json) => {
        const result = json.filter((user) => {
          return (
            value &&
            user &&
            user.name &&
            user.name.toLowerCase().includes(value)
          );
        });
        setResults(result);
      });
  };
  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };
  return (
    <div className="input-wrapper">
      <FaSearch id="search-icon" />
      <input
        placeholder="type to search"
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
};

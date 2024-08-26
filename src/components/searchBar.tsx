import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "./searchBar.css";

export const SearchBar = () => {
  const [input, setInput] = useState("");
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

import { FaSearch } from "react-icons/fa";
import "./searchBar.css";

export const SearchBar = () => {
  return (
    <div className="input-wrap">
      <FaSearch id="search-icon" />
      <input placeholder="type to search" />
    </div>
  );
};

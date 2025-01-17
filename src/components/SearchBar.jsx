import { useNavigate } from "react-router-dom";
import "./SearchBar.css";

const SearchBar = () => {
  const navigate = useNavigate();

  return (
    <div className="search-bar-container">
      <input
        type="text"
        placeholder="Search for movies..."
        className="search-bar"
        onClick={() => navigate("/search")}
      />
    </div>
  );
};

export default SearchBar;

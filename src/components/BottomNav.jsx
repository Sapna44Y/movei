import { NavLink } from "react-router-dom";
import "./BottomNav.css";

const BottomNav = () => {
  return (
    <div className="bottom-nav">
      <NavLink to="/home">Home</NavLink>
      <NavLink to="/search">Search</NavLink>
    </div>
  );
};

export default BottomNav;

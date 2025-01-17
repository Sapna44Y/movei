import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SplashScreen from "./pages/SplashScreen";
import HomeScreen from "./pages/HomeScreen";
import SearchScreen from "./pages/SearchScreen";
import DetailsScreen from "./pages/DetailsScreen";
import BottomNav from "./components/BottomNav";

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <BottomNav />
        <Routes>
          <Route path="/" element={<SplashScreen />} />
          <Route path="/home" element={<HomeScreen />} />
          <Route path="/search" element={<SearchScreen />} />
          <Route path="/details/:id" element={<DetailsScreen />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

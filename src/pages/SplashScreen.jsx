import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./SplashScreen.css";

const SplashScreen = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/home");
    }, 3000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="splash-container">
      <img
        src="./assets/splash-image.jpg"
        alt="Splash"
        className="splash-image"
      />
      <h1>Welcome to Movie Explorer</h1>
    </div>
  );
};

export default SplashScreen;

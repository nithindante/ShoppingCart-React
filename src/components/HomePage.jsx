import "../styles/HomePage.css";
import ShoppingImage from "../assets/clothing.jpg";
import Navigation from "./Navigation";
import {useNavigate} from 'react-router-dom';
function HomePage() {
  const navigate = useNavigate();
  return (
    <>
    <Navigation></Navigation>
      <div className="shopping-div">
        <div>
          <img src={ShoppingImage} className="wall-image"></img>
        </div>
        <h1>Clothes</h1>
        <button className="innerButton" onClick={()=>navigate('/shop')}>Enter Shop</button>
      </div>
    </>
  );
}

export default HomePage;

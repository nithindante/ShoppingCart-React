import "../styles/Navigation.css";
import { Link } from "react-router-dom";
import Cart from "../assets/cart.svg";
function Navigation({ count,showCart }) {
 

  
  return (
    <>
      <div className="nav-bar">
        <div className="left-nav-bar">
          <h4>My Clothes Store</h4>
        </div>
        <div className="right-nav-bar">
          <Link to="/shop">Shop</Link>
          <Link to="/">Home</Link>
          <div onClick={showCart}>
            <Link>
              <img src={Cart}></img>
            </Link>
            <div className="count">{count}</div>
          </div>
        </div>

      </div>
    </>
  );
}

export default Navigation;

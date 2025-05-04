import { useEffect, useState } from "react";
import Navigation from "./Navigation";
import "../styles/Shop-page.css";
import InnerForm from "./InnerForm";
import Carts from "./Cart";
function ShopPage() {
  
  const [clothes, setClothes] = useState(null);
  const [inactiveDivs,setInactiveDivs]= useState(false);
  const [count,setCount] = useState(0)
  const [displayCart,setDisplayCart] = useState(false);
  const [cartItems,setCartItems] = useState([]);
  const [total,setTotal] = useState(0);
  console.log(inactiveDivs)
  function showCart()
  {
    setDisplayCart(true)
    setInactiveDivs(true);
  }
  useEffect(() => {
    fetch("https://fakestoreapi.com/products", {
      mode: "cors",
    })
      .then((response) => response.json())
      .then((response) => setClothes(response));
  }, []);

function closeButton()
{
  setDisplayCart(false)
  setInactiveDivs(false);
}
  return (
    clothes && (
      <>
        <Navigation count = {count} showCart={showCart} className={inactiveDivs?'nav-bar inactive-divs':'nav-bar'}></Navigation>
          
            
            <Carts closeButton={closeButton} displayCart={displayCart} cartItems={cartItems} setTotal={setTotal} setCartItems={setCartItems} setCount={setCount} count={count}></Carts>
            
          
        <div className={inactiveDivs?'shop-grid inactive-divs':'shop-grid'}>
          {clothes.map((item) => {
            return (
              <div key={item.id} className="itemDiv">
                <InnerForm count = {count} setCount={setCount} setCartItems={setCartItems} item={item} cartItems={cartItems}></InnerForm>
              </div>
            );
          })}
        </div>
      </>
    )
  );
}

export default ShopPage;

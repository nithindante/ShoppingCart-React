import { useEffect, useState } from "react";
import Navigation from "./Navigation";
import "../styles/Shop-page.css";
import InnerForm from "./InnerForm";
import Carts from "./Cart";
function ShopPage() {
  const [clothes, setClothes] = useState(null);
  const [count,setCount] = useState(0)
  const [displayCart,setDisplayCart] = useState(false);
  function showCart()
  {
    setDisplayCart(true)
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
}
  return (
    clothes && (
      <>
        <Navigation count = {count} showCart={showCart}></Navigation>
          {displayCart && (
            
            <Carts closeButton={closeButton}></Carts>
            
          )}
        <div className="shop-grid">
          {clothes.map((item) => {
            return (
              <div key={item.id} className="itemDiv">
                <img src={item.image}></img>
                <h5>{item.title}</h5>
                <InnerForm count = {count} setCount={setCount}></InnerForm>
              </div>
            );
          })}
        </div>
      </>
    )
  );
}

export default ShopPage;

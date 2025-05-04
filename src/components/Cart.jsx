import "../styles/Cart.css";
import {useNavigate} from 'react-router-dom';

function Carts({ closeButton, displayCart, cartItems,setCartItems,setCount,count }) {
  let total = 0;
  const navigate = useNavigate();
  function decreaseQuantity(item)
  {
    setCartItems(()=>{
      return cartItems.map(cartItem => {      
         if(item.title===cartItem.title)
         {
          if(cartItem.quantity===1)
          {
            return cartItem
          }
           return {...cartItem,quantity:cartItem.quantity-1}
         }
         return cartItem
       });
     })
     if(count>1)
      {
        setCount(()=>count -1)
      }

  }

  function increaseQuantity(item)
  {
    setCartItems(()=>{
     return cartItems.map(cartItem => {
        if(item.title===cartItem.title)
        {
          return {...cartItem,quantity:cartItem.quantity+1}
        }
        return cartItem
      });
    })
    setCount(()=> count +1)

    
  }

  function removeItems(item)
  { 
    setCartItems(cartItems.filter((items)=>{
        return items.title != item.title
    }))

    setCount(() =>{
      const newItems = cartItems.filter(items => items.title !== item.title);
  return newItems.reduce((sum, item) => sum + item.quantity, 0);
    })
  }
  cartItems.map((item) => {
    total = total + item.quantity * item.price;
  });
  return (
    <>
      <div className={displayCart ? "cart" : "inactive"}>
        <button onClick={closeButton}>Close</button>
        <div className="itemsCart">
          {cartItems.map((item) => {
            return (
              <div key={item.title} className="inner-items">
                <img src={item.url}></img>
                <div className="innerDiv">
                  <strong>{item.title}</strong>
                  <div className="quantityDiv">
                    <div onClick={()=>decreaseQuantity(item)}>-</div>
                    <span>{item.quantity}</span>
                    <div onClick={()=> increaseQuantity(item)}>+</div>
                  </div>
                  <button className="button-13" role="button" onClick={()=>removeItems(item)}>Remove</button>
                </div>
                <p>${item.price}</p>
              </div>
            );
          })}
        </div>
        <div className="totalDiv">
          <p>Subtotal:${total}</p>
        </div>  
       {count && <button onClick={()=>navigate('/checkout')} >Checkout</button>}  
      </div>
    </>
  );
}

export default Carts;

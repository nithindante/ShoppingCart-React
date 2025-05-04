import { useState } from "react";
import "../styles/InnerForm.css";
function InnerForm({ count, setCount, setCartItems, item, cartItems }) {
  const [enabled, setEnabled] = useState(true);
  const [inputValue, setInputValue] = useState(0);
  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    if (value) {
      setEnabled(false);
    }
  };
  const handleSubmit = async (event) => {
    // eslint-disable-next-line no-debugger

    event.preventDefault();
    if (count) {
      setCount((prevCount) => Number(prevCount) + Number(inputValue));
      // setCount(Number(count) + Number(inputValue));
    } else {
      setCount(Number(inputValue));
    }

    const existingItemIndex = cartItems.findIndex(
      (cartItem) => cartItem.title === item.title
    );
    setCartItems(() => {
      if (existingItemIndex !== -1) {
        return cartItems.map((cartItem) => {
          // eslint-disable-next-line no-debugger
          debugger
          if (cartItem.title === item.title) {
            return {
              ...cartItem,
              quantity: cartItem.quantity + Number(inputValue),
            };
          }
          return cartItem;
        });
      } else {
        return [
          ...cartItems,
          {
            url: item.image,
            title: item.title,
            price: item.price,
            quantity: Number(inputValue),
          },
        ];
      }
    });

    setEnabled(true);
    setInputValue(0);
  };

  return (
    <>
      <img src={item.image}></img>
      <div className="title-div">
        <h5>{item.title}</h5>
        <h5>${item.price}</h5>
      </div>
      <form className="input-divs" onSubmit={() => handleSubmit(event)}>
        <input
          type="number"
          placeholder="Quantity"
          min={0}
          onChange={handleInputChange}
          value={inputValue}
        ></input>
        <button disabled={enabled} type="submit">
          Add to Cart
        </button>
      </form>
    </>
  );
}

export default InnerForm;

import { useState } from "react";
import "../styles/InnerForm.css";
function InnerForm({count,setCount}) {
    const [enabled,setEnabled] = useState(true);
    const [inputValue, setInputValue] = useState(0);
    
  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    if(value)
    {
        setEnabled(false)
    }

  };
    const handleSubmit = async (event) =>{
    event.preventDefault();
    if(count)
    {
        setCount(Number(count)  + Number(inputValue))
    }
    else{
        setCount(Number(inputValue))
    }
    
    setEnabled(true)
    setInputValue(0);
  }


  return (
    <>
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

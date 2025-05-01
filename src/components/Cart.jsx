import '../styles/Cart.css'

function Carts({closeButton}) {

return(
    <>
    <div className="cart">
        <button onClick={closeButton}>Close</button>
    </div>
    </>
)
}


export default Carts;
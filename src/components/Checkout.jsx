
import {useNavigate} from 'react-router-dom';
function Checkout()
{
    const navigate = useNavigate();

return (<div className="checkoutMain" style={{display:'flex',padding:'3rem',flexDirection:'column',alignItems:'center'}}>
<h2>Your Order is checked out</h2>
<button style={{width:'fit-content'}} onClick={()=> navigate('/')}>Back to Home</button>
</div>)
}

export default Checkout;

// display: flex
// ;
//     padding: 3rem;
//     flex-direction: column;
//     align-items: center;
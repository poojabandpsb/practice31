import { useNavigate,link } from "react-router-dom";

function Order() {

  const navigate = useNavigate();

  const onThanks = () => {
    navigate('/thankyou')
}
    return (
      <div className='card bg-base-200'>
        <header className="bg-dark text-white p-4">
        <div className="container">
          <h4 className="display-4">Order Summary </h4>
      
        </div>
        </header>
      <div className='card-body'>
        {/* SUBTOTAL */}
        <p className='flex justify-between text-xs border-b border-base-300 pb-2 text-accent-content'>
                    <span>Subtotal</span>
                    <span className='font-medium'>$</span>
          {/* <span className='font-medium'>${ Math.round(total) }</span> */}
        </p>
        {/* SHIPPING */}
        <p className='flex justify-between text-xs border-b border-base-300 pb-2 text-accent-content'>
                    <span>Shipping</span>
                    <span className='font-medium'></span>
          {/* <span className='font-medium'>${ shipping }</span> */}
        </p>
        {/* Tax */}
        <p className='flex justify-between text-xs border-b border-base-300 pb-2 text-accent-content'>
                    <span>Tax 20%</span>
                    <span className='font-medium'>$</span>
          {/* <span className='font-medium'>${Math.round(tax)}</span> */}
        </p>
        {/* Order Total */}
        <p className='flex justify-between text-sm mt-4 pb-2 text-accent-content'>
          <span>Order Total</span>
          {/* <span className='font-medium'>${ Math.round(total + shipping + tax) }</span> */}
        </p>
        </div>
        <button type="button" onClick={onThanks} className='mt-2 btn btn-success'> Place Order </button>
        




    </div>
    )
    
}

export default Order
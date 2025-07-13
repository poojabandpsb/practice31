import { useNavigate } from "react-router-dom";
import React from 'react';


const CartPage = () => {

    const navigate = useNavigate();
    const onProceed = () => {
        navigate('/order')
    }
  return (
    <div className="container mt-5">
        <header className="bg-dark text-white p-4">
        <div className="container">
          <h4 className="display-4">Your Cart </h4>
      
        </div>
        </header>
      <div className="row">
        {/* Cart Items Section */}
        <div className="col-md-8">
          <div className="card mb-4">
            <div className="card-header">
              <h4>Gadgets in Your Cart</h4>
            </div>
            <ul className="list-group list-group-flush">
              {/* Example cart item */}
              <li className="list-group-item d-flex justify-content-between align-items-center">
                <div className="cart-item-details">
                  <h5>Gadget Name</h5>
                  <p>Short description of the gadget</p>
                  <p><strong>Price:</strong> $XX/day</p>
                </div>
                <button className="btn btn-danger">Remove</button>
              </li>
              {/* Repeat the above block for more cart items */}
            </ul>
          </div>
        </div>

        {/* Summary Section */}
        <div className="col-md-4">
          <div className="card">
            <div className="card-header">
              <h4>Summary</h4>
            </div>
            <div className="card-body">
              <p><strong>Total Items:</strong> X</p>
              <p><strong>Total Price:</strong> $XXX</p>
              <button onClick={onProceed}  className="btn btn-primary btn-block">Proceed to Checkout</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartPage;

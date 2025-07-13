import { useNavigate } from "react-router-dom";

function OrderHistory() {
    const navigate = useNavigate();
    const onProduct = () => {
       navigate('/productdetailpage')

    }
    return (
        <div className="container mt-5">
      <header className="bg-dark text-white p-4">
        <div className="container">
          <h4 className="display-4">Order History </h4>
      
        </div>
        </header>
      <div className="card">
        <div className="card-header">
          <h4>Your Past Orders</h4>
        </div>
        <ul className="list-group list-group-flush">
          {/* Example order item */}
          <li className="list-group-item">
            <div className="d-flex justify-content-between">
              <div>
                <h5>Order #12345</h5>
                <p><strong>Date:</strong> 01/01/2023</p>
                <p><strong>Total:</strong> $150</p>
                <p><strong>Items:</strong></p>
                <ul>
                  <li>Gadget 1 - $50/day</li>
                  <li>Gadget 2 - $100/day</li>
                </ul>
              </div>
              <button  onClick={onProduct}  className="btn btn-info">View Details</button>
            </div>
          </li>
          {/* Repeat the above block for more orders */}
        </ul>
      </div>
    </div>
    )
}

export default OrderHistory
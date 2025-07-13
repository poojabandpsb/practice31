import { useNavigate ,Link} from "react-router-dom";

function ThankYou(){

    const navigate = useNavigate()
    
    

    return (
        <>
    
            <div className="thankyou-content text-center text-accent-content px-10 max-w-7xl mx-auto">
            <header className="bg-dark text-white p-4">
        <div className="container">
          <h4 className="display-4">Thank You</h4>
      
        </div>
        </header>
          <h2 className="text-6xl max-sm:text-4xl">
            Thank you for your rent purchase!
          </h2>
  
          <h3 className="text-2xl mt-10 max-sm:text-xl">
            We hope you love your rented gadgets! We appreciate your
            business and look forward to seeing you again soon.
          </h3>
          <h3 className="text-2xl mt-5 max-sm:text-xl">
            Here are some things you can do next:
          </h3>
          <ul className="text-xl mt-5 text-blue-500 max-sm:text-lg">
                    <li className="hover:text-blue-600 cursor-pointer">
                    {/* <Link to='/order-history'>See order history</Link> */}
              <Link to="/order-history">&rarr; See order history &larr;</Link>
            </li>
            <li className="hover:text-blue-600 cursor-pointer">
              <Link to="/home">&rarr; Browse more product and buy more &larr;</Link>
            </li>
            <li className="hover:text-blue-600 cursor-pointer">
              &rarr; Follow us on social media &larr;
            </li>
          </ul>
  
          <h4 className="text-xl mt-5 max-sm:text-lg">
            Thank you again for your purchase!
          </h4>
          <h4 className="text-xl max-sm:text-lg">
            Sincerely, The Rent Ease team
          </h4>
        </div>
      </>

        
    );

};

export default ThankYou
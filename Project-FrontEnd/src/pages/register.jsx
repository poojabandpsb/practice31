import { Link, useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import Select from "react-select"

function Register() {
    const navigate = useNavigate()

    const onCancel = () => {
        navigate('/login')
    }
    const onRegister = async () => {
    //     // client side validation
    //     if (firstName.length === 0) {
    //       alert('enter first name')
    //     } else if (lastName.length === 0) {
    //       alert('enter last name')
    //     } else if (email.length === 0) {
    //       alert('enter email')
    //     } else if (password.length === 0) {
    //       alert('enter password')
    //     } else if (confirmPassword.length === 0) {
    //       alert('confirm password')
    //     } else if (password !== confirmPassword) {
    //       alert('password does not match')
    //     } else {
    //       // make the API call and receive the result
    //       const result = await register(firstName, lastName, email, phone, password)
    //       if (result['status'] === 'success') {
            toast.success('successfully registered a user')
            navigate('/login')
    //       } else {
    //         alert('Failed to register the user')
    //       }
        }
    //   }

    return (
        <div>
        <header className="bg-dark text-white p-3">
        <div className="container">
        <h3 className="display-4">Rent Ease</h3>
        <p className="lead">Registration Page</p>
      
        </div>
        </header>
  
        <div className='row mt-5'>
          <div className='col-2'></div>
  
          <div className='col'>
            <div className='row'>
              <div className='col'>
                <div className='mb-3'>
                  <label htmlFor=''>First Name</label>
                  <input
                    // onChange={(e) => {
                    //   setFirstName(e.target.value)
                    // }}
                    type='text'
                    className='form-control'
                  />
                </div>
              </div>
  
              <div className='col'>
                <div className='mb-3'>
                  <label htmlFor=''>Last Name</label>
                  <input
                    // onChange={(e) => {
                    //   setLastName(e.target.value)
                    // }}
                    type='text'
                    className='form-control'
                  />
                </div>
              </div>
            </div>
  
            <div className='row'>
              <div className='col'>
                <div className='mb-3'>
                  <label htmlFor=''>Email</label>
                  <input
                    // onChange={(e) => {
                    //   setEmail(e.target.value)
                    // }}
                    type='email'
                    className='form-control'
                  />
                </div>
              </div>
  
              <div className='col'>
                <div className='mb-3'>
                  <label htmlFor=''>Phone Number</label>
                  <input
                    // onChange={(e) => {
                    //   setPhone(e.target.value)
                    // }}
                    type='tel'
                    className='form-control'
                  />
                </div>
              </div>
            </div>
  
            <div className='row'>
              <div className='col'>
                <div className='mb-3'>
                  <label htmlFor=''>Password</label>
                  <input
                    // onChange={(e) => {
                    //   setPassword(e.target.value)
                    // }}
                    type='password'
                    className='form-control'
                  />
                </div>
              </div>
  
              <div className='col'>
                <div className='mb-3'>
                  <label htmlFor=''>Confirm Password</label>
                  <input
                    // onChange={(e) => {
                    //   setConfirmPassword(e.target.value)
                    // }}
                    type='password'
                    className='form-control'
                  />
                </div>
              </div>
                    </div>
                    <div className='row'>
              <div className='col'>
                <div className='mb-3'>
                  <label htmlFor=''>Photo ID</label>
                  <input
                    // onChange={(e) => {
                    //   setEmail(e.target.value)
                    // }}
                    type='text'
                    className='form-control'
                  />
                </div>
              </div>
  
              <div className='col'>
                <div className='mb-3'>
                  <label htmlFor=''>Address</label>
                  <input
                    // onChange={(e) => {
                    //   setPhone(e.target.value)
                    // }}
                    type='text'
                    className='form-control'
                  />
                </div>
              </div>
                    </div>   <div className='row'>
              <div className='col'>
                <div className='mb-3'>
                  
                </div>
              </div>
  
              <div className='col'>
                <div className='mb-3'>
                  <label htmlFor=''>City</label>
                  <Select
                    name="city"
                     options={'cities'}
                    //   onChange={handleSelectChange}
                                />
                                <label htmlFor=''>State</label>
                  <Select
                    name="country"
                     options={'cities'}
                    //   onChange={handleSelectChange}
                                />
                                <label htmlFor=''>Country</label>
                  <Select
                    name="country"
                     options={'cities'}
                    //   onChange={handleSelectChange}
                     />
                </div>
              </div>
            </div>
  
                    

                    <div className='row'>
              <div className='col'>
                <div className='mb-3'>
                  
                </div>
              </div>
  
              <div className='col'>
                <div className='mb-3'>
                  <label htmlFor=''>Postal Code</label>
                  <input
                    // onChange={(e) => {
                    //   setPhone(e.target.value)
                    // }}
                    type='text'
                    className='form-control'
                  />
                </div>
              </div>
            </div>
  
  
  
            <div className='row'>
              <div className='col'>
                <div className='mb-3'>
                  Already have account ? <Link to='/login'>Login here</Link>
                </div>
  
                <button onClick={onRegister} className='btn btn-success'>
                  Register
                </button>
                <button onClick={onCancel} className='btn btn-danger ms-2'>
                  Cancel
                </button>
              </div>
            </div>
          </div>
  
          <div className='col-2'></div>
        </div>
      </div>

    )
    
}

export default Register
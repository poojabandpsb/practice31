
import { useDispatch } from "react-redux"
import { useNavigate, Link } from "react-router-dom"
import { toast } from "react-toastify"
import { loginAction } from "../features/userSlice"


function Login() {
    
  const navigate = useNavigate()
  
  const dispatch =useDispatch()
    
  const onLogin = async () => {
      dispatch(loginAction())
        toast.success('welcome to the application')
        navigate('/home')
    }

    return (
        <div>
        {/* <h2 className="page-title">Login</h2> */}
        <header className="bg-dark text-white p-2">
        <div className="container">
          <h6 className="display-4">Rent Ease </h6>
      
        </div>
        </header>
        <br />
        <br /><br />
            <div className='row'>
        <div className='col'></div>

        <div className='col'>
          <div className='form'>
            <div className='mb-3'>
              <label htmlFor=''>Email</label>
                            <input
                                //write code here
                // onChange={(e) => {
                //   setEmail(e.target.value)
                // }}
                type='email'
                className='form-control'
              />
            </div>
            <div className='mb-3'>
              <label htmlFor=''>Password</label>
                            <input
                                //write code here
                // onChange={(e) => {
                //   setPassword(e.target.value)
                // }}
                type='password'
                className='form-control'
              />
            </div>
            <div className='mb-3'>
              <div>
                Dont have an account yet?{' '}
                <Link to='/register'>Register here</Link>
              </div>
              <button onClick={onLogin} className='mt-2 btn btn-success'>
                Login
              </button>
            </div>
          </div>
        </div>

        <div className='col'></div>
      </div>

        </div>

    )
    
}

export default Login
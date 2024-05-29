import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'

function Signup() {
    const [name,setName] = useState();
    const [email,setEmail] = useState();
    const [password,setPassword] = useState();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/signup',{name, email, password})
        .then(result => {console.log(result)
            alert("Signup successfuly!! ");
            navigate('/login')
        })
        .catch(err => console.log(err))
    }
  return (
    <section className="vh-100" style={{ backgroundColor: "#eee" }}>
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-lg-12 col-xl-11">
            <div className="card text-black" style={{ borderRadius: "25px" }}>
              <div className="card-body p-md-5">
                <div className="row justify-content-center">
                  <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                    <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>
                    <form className="mx-1 mx-md-4" onSubmit={handleSubmit}>
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                        {/* --------------------Enter name ----------------------------*/}
                        <div className="form-outline flex-fill mb-0">
                          <input type="text" className="form-control" autoComplete="off" name="email" onChange={(e)=> setName(e.target.value)}/>
                          <label className="form-label" htmlFor="name">Your Name</label>
                        </div>
                      </div>
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                        {/* --------------------Enter mail ----------------------------*/}
                        <div className="form-outline flex-fill mb-0">
                          <input type="email" className="form-control" autoComplete="off" name="email" onChange={(e)=> setEmail(e.target.value)}/>
                          <label className="form-label" htmlFor="email">Your Email</label>
                        </div>
                      </div>
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                        {/* --------------------Enter pass ----------------------------*/}
                        <div className="form-outline flex-fill mb-0">
                          <input type="password" id="form3Example4c" className="form-control" onChange={(e)=> setPassword(e.target.value)}/>
                          <label className="form-label" htmlFor="form3Example4c">Password</label>
                        </div>
                      </div>
                      {/* <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input type="password" id="form3Example4cd" className="form-control" />
                          <label className="form-label" htmlFor="form3Example4cd">Repeat your password</label>
                        </div>
                      </div> */}
                      <div className="form-check d-flex justify-content-center mb-5">
                        <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3c" />
                        <label className="form-check-label" htmlFor="form2Example3">
                          I agree to all statements in <a href="#!">Terms of service</a>
                        </label>
                      </div>
                      <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                        <button type="submit" className="btn btn-primary btn-lg">Signup</button>
                      </div>
                    </form>
                    <div className="form-check d-flex justify-content-center mb-5">
                        
                        <label className="form-check-label" htmlFor="form2Example3">
                            <p>Already have an account</p>
                            <Link to="/login" className="btn tbn-default border w-100 bg-light rounded-0 text-decoration-none">Login</Link>
                        </label>
                      </div>
                  </div>
                  <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                      className="img-fluid" alt="Sample image" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Signup;

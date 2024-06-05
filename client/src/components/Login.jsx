import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Toast, ToastContainer } from "react-bootstrap";
import "../css/index.css";


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastType, setToastType] = useState(""); // Thêm trạng thái để xác định loại thông báo
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/login", { email, password })
      .then((result) => {
        console.log(result);
        if (result.data === "Success") {
          setToastMessage("Login successful");
          setToastType("success");
          setShowToast(true);
          setTimeout(() => {
            navigate('/');
          }, 2000);
        } else {
          setToastMessage(result.data);
          setToastType("error");
          setShowToast(true);
        }
      })
      .catch((err) => {
        console.log(err);
        setToastMessage("An error occurred. Please try again.");
        setToastType("error");
        setShowToast(true);
      });
  };

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-md-6">
          <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Login</p>
          <form onSubmit={handleSubmit}>
            {/* Email input */}
            <div className="form-outline mb-4">
              <input
                type="email"
                className="form-control"
              
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label className="form-label" htmlFor="email">
                Email address
              </label>
            </div>

            {/* Password input */}
            <div className="form-outline mb-4">
              <input
                type="password"
                autoComplete="off"
                name="password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <label className="form-label" htmlFor="password">
                Password
              </label>
            </div>

            {/* Submit button */}
            <button type="submit" className="btn btn-primary btn-block mb-4">
              Login
            </button>
          </form>
          
          {/* Register buttons */}
          <div className="col">
            <a href="#!">Forgot password?</a>
          </div>
          <div className="text-center">
            <p>
              Not a member? <a href="/signup">Register</a>
            </p>
            <p>or sign up with:</p>
            <button type="button" className="btn btn-link btn-floating mx-1">
              <i className="fab fa-facebook-f"></i>
            </button>
            <button type="button" className="btn btn-link btn-floating mx-1">
              <i className="fab fa-google"></i>
            </button>
            <button type="button" className="btn btn-link btn-floating mx-1">
              <i className="fab fa-twitter"></i>
            </button>
            <button type="button" className="btn btn-link btn-floating mx-1">
              <i className="fab fa-github"></i>
            </button>
          </div>
        </div>
      </div>
      
      {/* Toast hiển thị thông báo */}
      <ToastContainer position="top-end" className="p-3">
        <Toast onClose={() => setShowToast(false)} show={showToast} delay={3000} autohide className={`bg-${toastType}`}>
          <Toast.Body>{toastMessage}</Toast.Body>
        </Toast>
      </ToastContainer>
    </div>
  );
}

export default Login;

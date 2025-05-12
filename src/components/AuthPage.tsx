import { useEffect, useState } from "react";
import { authLogin, authSignup, resetAuthToastState } from "../Actions/auth";
import { useDispatch, useSelector } from "react-redux";
import "./AuthPage.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import {
  isLoginLoading,
  isLoginSuccess,
  isLoginFailure,
  isSignupLoading,
  isSignupSuccess,
  isSignupFailure,
} from "../Selectors/auth";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function AuthPage() {
  const dispatch = useDispatch();
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const loginLoading = useSelector(isLoginLoading);
  const loginSuccess = useSelector(isLoginSuccess);
  const loginFailure = useSelector(isLoginFailure);
  const signupLoading = useSelector(isSignupLoading);
  const signupSuccess = useSelector(isSignupSuccess);
  const signupFailure = useSelector(isSignupFailure);

  useEffect(() => {
    if (loginSuccess) {
      toast.success("Login successful!");
    }
    if (loginFailure) {
      toast.error("Login failed. Please try again.");
    }
    if (signupSuccess) {
      toast.success("Signup successful! Please login.");
      setIsLogin(true);
      setUsername("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
    }
    if (signupFailure) {
      toast.error("Signup failed. Please try again.");
    }

    dispatch(resetAuthToastState());
  }, [loginSuccess, loginFailure, signupSuccess, signupFailure]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isLogin) {
      // Login logic
      if (email && password) {
        dispatch(authLogin(email, password));
      }
    } else {
      // Signup logic
      if (username && email && password && password === confirmPassword) {
        dispatch(authSignup(username, email, password));
      } else if (password && confirmPassword && password !== confirmPassword) {
        toast.error("Passwords do not match");
      }
    }
  };

  return (
    <div className="auth-page">
      <ToastContainer position="top-right" autoClose={3000} />

      <div className="auth-card">
        <h1 className="auth-title">{isLogin ? "LOGIN" : "SIGN UP"}</h1>
        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
          )}

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <div className="password-input-container">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="button"
                className="password-toggle-btn"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>

          {!isLogin && (
            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <div className="password-input-container">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  id="confirmPassword"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
                <button
                  type="button"
                  className="password-toggle-btn"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>
          )}

          <button type="submit" className="submit-button">
            {loginLoading || signupLoading
              ? "Loading..."
              : isLogin
              ? "LOGIN"
              : "SIGN UP"}
          </button>
        </form>

        <div className="auth-toggle">
          <p>
            {isLogin ? "Don't have an account? " : "Already have an account? "}
            <button
              type="button"
              onClick={() => setIsLogin(!isLogin)}
              className="toggle-button"
            >
              {isLogin ? "Sign Up" : "Login"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default AuthPage;

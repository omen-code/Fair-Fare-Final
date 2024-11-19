import React, { useState } from "react";
import "./Login.css";
import { registerUser, loginUser } from "./services/api";

const Login = () => {
  const [section, setSection] = useState("login");
  const [formData, setFormData] = useState({
    loginInput: "",
    loginPassword: "",
    signupName: "",
    signupEmail: "",
    signupMobile: "",
    signupPassword: "",
    forgotEmail: "",
    forgotMobile: "",
    otpInput: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [generatedOTP, setGeneratedOTP] = useState(null);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validateMobile = (mobile) => {
    const re = /^[0-9]{10}$/;
    return re.test(mobile);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const { loginInput, loginPassword } = formData;

    if (!validateEmail(loginInput) && !validateMobile(loginInput)) {
      setErrorMessage("Please enter a valid email or mobile number.");
      return;
    }

    if (loginPassword.length < 6) {
      setErrorMessage("Password must be at least 6 characters long.");
      return;
    }

    setErrorMessage("");

    try {
      const response = await loginUser({ email: loginInput, password: loginPassword });
      localStorage.setItem('user', JSON.stringify(response));
      console.log("Login successful", response);
      // Redirect to another page or show user dashboard
    } catch (error) {
      setErrorMessage(error);
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    const { signupName, signupEmail, signupMobile, signupPassword } = formData;

    if (signupName.length < 3) {
      setErrorMessage("Name must be at least 3 characters long.");
      return;
    }

    if (!validateEmail(signupEmail)) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    if (!validateMobile(signupMobile)) {
      setErrorMessage("Please enter a valid mobile number.");
      return;
    }

    if (signupPassword.length < 6) {
      setErrorMessage("Password must be at least 6 characters long.");
      return;
    }

    setErrorMessage("");

    try {
      const response = await registerUser({ name: signupName, email: signupEmail, mobile: signupMobile, password: signupPassword });
      console.log("Signup successful", response);
      // Redirect to login or another page
    } catch (error) {
      setErrorMessage(error);
    }
  };

  const handleForgotPassword = (e) => {
    e.preventDefault();
    const { forgotEmail, forgotMobile } = formData;

    if (!validateEmail(forgotEmail)) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    if (!validateMobile(forgotMobile)) {
      setErrorMessage("Please enter a valid mobile number.");
      return;
    }

    // Simulate sending OTP
    const otp = Math.floor(100000 + Math.random() * 900000);
    setGeneratedOTP(otp);
    console.log(`OTP sent to ${forgotEmail} and ${forgotMobile}: ${otp}`);

    setErrorMessage("");
    setSection("otp");
  };

  const handleVerifyOTP = () => {
    const { otpInput } = formData;

    if (otpInput === generatedOTP.toString()) {
      setErrorMessage("");
      alert("OTP verified successfully! You can now reset your password.");
      // Add reset password logic here
    } else {
      setErrorMessage("Invalid OTP. Please try again.");
    }
  };

  return (
    <div>
      <header>
        <div className="head">
          <a href="home.html">FairFare</a>
        </div>
      </header>
      <div className="login-container">
        <div className="login-box">
          {section === "login" && (
            <div id="login-section">
              <h2>Login to FairFare</h2>
              <form id="login-form" onSubmit={handleLogin}>
                <div className="input-group">
                  <label htmlFor="loginInput">Email / Mobile Number:</label>
                  <input
                    type="text"
                    id="loginInput"
                    name="loginInput"
                    placeholder="Enter your email or mobile number"
                    value={formData.loginInput}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="input-group">
                  <label htmlFor="loginPassword">Password:</label>
                  <input
                    type="password"
                    id="loginPassword"
                    name="loginPassword"
                    placeholder="Enter your password"
                    value={formData.loginPassword}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <button type="submit" className="btn">
                  Login
                </button>
                <p className="error-message">{errorMessage}</p>
              </form>
              <div className="links">
                <a href="#" onClick={() => setSection("forgot")}>
                  Forgot Password?
                </a>
                <a href="#" onClick={() => setSection("signup")}>
                  Sign Up
                </a>
              </div>
            </div>
          )}

          {section === "signup" && (
            <div id="signup-section">
              <h2>Create an Account</h2>
              <form id="signup-form" onSubmit={handleSignup}>
                <div className="input-group">
                  <label htmlFor="signupName">Name:</label>
                  <input
                    type="text"
                    id="signupName"
                    name="signupName"
                    placeholder="Enter your name"
                    value={formData.signupName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="input-group">
                  <label htmlFor="signupEmail">Email:</label>
                  <input
                    type="email"
                    id="signupEmail"
                    name="signupEmail"
                    placeholder="Enter your email"
                    value={formData.signupEmail}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="input-group">
                  <label htmlFor="signupMobile">Mobile Number:</label>
                  <input
                    type="tel"
                    id="signupMobile"
                    name="signupMobile"
                    placeholder="Enter your mobile number"
                    value={formData.signupMobile}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="input-group">
                  <label htmlFor="signupPassword">Password:</label>
                  <input
                    type="password"
                    id="signupPassword"
                    name="signupPassword"
                    placeholder="Create a password"
                    value={formData.signupPassword}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <button type="submit" className="btn">
                  Sign Up
                </button>
                <p className="error-message">{errorMessage}</p>
              </form>
              <div className="links">
                <a href="#" onClick={() => setSection("login")}>
                  Login
                </a>
              </div>
            </div>
          )}

          {section === "forgot" && (
            <div id="forgot-password-section">
              <h2>Forgot Password</h2>
              <form id="forgot-password-form" onSubmit={handleForgotPassword}>
                <div className="input-group">
                  <label htmlFor="forgotEmail">Email:</label>
                  <input
                    type="email"
                    id="forgotEmail"
                    name="forgotEmail"
                    placeholder="Enter your email"
                    value={formData.forgotEmail}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="input-group">
                  <label htmlFor="forgotMobile">Mobile Number:</label>
                  <input
                    type="tel"
                    id="forgotMobile"
                    name="forgotMobile"
                    placeholder="Enter your mobile number"
                    value={formData.forgotMobile}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <button type="submit" className="btn">
                  Send OTP
                </button>
                <p className="error-message">{errorMessage}</p>
              </form>
              <div className="links">
                <a href="#" onClick={() => setSection("login")}>
                  Back to Login
                </a>
              </div>
            </div>
          )}

          {section === "otp" && (
            <div id="otp-section">
              <h2>Enter OTP</h2>
              <div className="input-group">
                <label htmlFor="otpInput">OTP:</label>
                <input
                  type="text"
                  id="otpInput"
                  name="otpInput"
                  placeholder="Enter the OTP"
                  value={formData.otpInput}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <button className="btn" onClick={handleVerifyOTP}>
                Verify OTP
              </button>
              <p className="error-message">{errorMessage}</p>
              <div className="links">
                <a href="#" onClick={() => setSection("login")}>
                  Back to Login
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
      <footer>
        <div className="foot">
          <hr color="white" />
          <p>Powered by MERN Stack &copy; 2023</p>
        </div>
      </footer>
    </div>
  );
};

export default Login;

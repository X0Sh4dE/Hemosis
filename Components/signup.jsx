import React from "react";
import loginImage from "../Assets/Login-image.jpg"; // Import your image

const Signup = () => {
  return (
    <>
      {/* Bootstrap CSS */}
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
        rel="stylesheet"
      />
      {/* Custom Styles */}
      <style>{`
        body {
            background-color: #f5faff;
            font-family: Arial, sans-serif;
        }

        /* Top Navigation Bar */
       
        /* Main Signup Container */
        .signup-container {
            display: flex;
            align-items: center;
            justify-content: center;
            min-height: 70vh;
        }
        .signup-card {
            display: flex;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            border-radius: 10px;
            overflow: hidden;
            max-width: 900px;
            width: 100%;
        }

        /* Image Section */
        .image-section {
            background-color: #e8f4ff;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 50%;
        }
        .image-section img {
            border-radius: 10px;
            object-fit: cover;
            object-position: center;
        }

        /* Form Section */
        .form-section {
            background-color: #ffffff;
            padding: 40px 30px;
            width: 50%;
            position: relative;
        }
        .form-section h2 {
            color: #007bff;
            font-weight: bold;
            margin-bottom: 10px;
        }
        .form-section p {
            color: #6c757d;
            font-size: 16px;
            margin-bottom: 30px;
        }
        .form-section .form-control {
            background-color: #e0f4ff;
            border: none;
            height: 45px;
            border-radius: 8px;
            margin-bottom: 15px;
            padding-left: 15px;
        }
        .form-section .form-control:focus {
            box-shadow: none;
            border: 1px solid #007bff;
        }
        .form-section .btn-primary {
            background-color: #007bff;
            border: none;
            width: 100%;
            padding: 12px;
            font-size: 16px;
            font-weight: bold;
            border-radius: 8px;
            margin-top: 20px;
        }
        .form-section .additional-links {
            text-align: right;
            font-size: 14px;
            color: #007bff;
            text-decoration: none;
            margin-top: -10px;
            margin-bottom: 20px;
        }
        .form-section .additional-links a {
            color: #007bff;
            text-decoration: none;
        }
        .form-section .additional-links a:hover {
            text-decoration: underline;
        }
        .footer-logo {
            position: absolute;
            bottom: 15px;
            right: 15px;
        }
      `}</style>

      {/* Signup Section */}
      <div className="container signup-container">
        <div className="signup-card">
          {/* Image Section */}
          <div className="image-section">
            <img
              src={loginImage}// Placeholder image
              alt="Doctor Illustration"
              className="img-fluid"
            />
          </div>

          {/* Form Section */}
          <div className="form-section">
            <h2>Sign Up</h2>
            <h3>Create a New Account.</h3>
            <p>
              Already a member?{" "}
              <a href="/login_form" className="additional-links">
                Log in
              </a>
            </p>
            <form>
              <input
                type="text"
                className="form-control"
                placeholder="Full Name"
              />
              <input
                type="text"
                className="form-control"
                placeholder="Phone Number"
              />
              <input
                type="email"
                className="form-control"
                placeholder="Email"
              />
              <input
                type="password"
                className="form-control"
                placeholder="Password"
              />
              <button type="submit" className="btn btn-primary">
                Create Account
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bootstrap Script */}
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
    </>
  );
};

export default Signup;

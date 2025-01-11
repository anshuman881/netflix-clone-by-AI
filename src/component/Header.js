import React from "react";
import "./Header.css";
import { ReactComponent as Logo } from '../assets/logo.svg';

function App() {
  return (
    <div className="app">
      <div className="navbar">
        <Logo className="logo" />
        <div className="nav-right">
          <select className="language-select">
            <option>English</option>
            <option>हिंदी</option>
          </select>
          <button className="signin-btn">Sign In</button>
        </div>
      </div>
      <div className="main-content">
        <h1>Unlimited movies, TV shows and more</h1>
        <h2>Starts at ₹149. Cancel at any time.</h2>
        <p>Ready to watch? Enter your email to create or restart your membership.</p>
        <div className="email-form row">
          <input type="email" placeholder="Email address" className="col-lg-6 col-sm-6 col-9" />
          <button className="get-started-btn col-lg-3 col-sm-3 col-5 mt-lg-0 mt-2">Get Started</button>
        </div>
      </div>
    </div>
  );
}

export default App;

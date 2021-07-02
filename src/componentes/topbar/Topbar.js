import React from "react";
import { Link } from "react-router-dom";
import "./Topbar.css";

export default function Topbar() {
  return (
    <nav className="nav-conteiner">
      <div className="nav-logo">
        <h1>Logo Blog</h1>
      </div>
      <div className="nav-menu">
        <ul>
          <li>
            <Link to="/" className="liItem">
              Home
            </Link>
          </li>
          <li>
            <Link to="/posts" className="liItem">
              Posts
            </Link>
          </li>
          <li>
            <Link to="/user" className="liItem">
              User
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

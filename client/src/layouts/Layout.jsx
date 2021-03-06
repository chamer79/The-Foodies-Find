import { NavLink } from "react-router-dom";

export default function Layout(props) {
  const { currentUser, handleLogout, children } = props;
  return (
    <div className="background-img">
      <header>
        {currentUser ? (
          <nav className="user-logout">
            <NavLink to="/recipes">
              <img src="http://i.imgur.com/aHMHpXc.png" />
            </NavLink>
            <div className="logout-nav">
            <p>Welcome, {currentUser.username}</p>
            <NavLink className="new-post-button" to="/post-recipe">New Post</NavLink>
            <button className="logout" onClick={handleLogout}>
              Logout
            </button>
            </div>
          </nav>
        ) : (
          <nav className="user-logged-in">
            <NavLink to="/recipes">
              <img className="nav-logo" src="http://i.imgur.com/aHMHpXc.png" />
            </NavLink>
            <div className="login-signup-buttons">
              <NavLink className="login-button" to="/login">Login</NavLink>
              <NavLink className="signup-button" to="/signup">Sign up</NavLink>
           </div>
          </nav>
        )}
      </header>
      {children}
    </div>
  );
}

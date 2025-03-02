import "./navbar.scss";
export const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src="logo.svg" alt="logo" />
        <span>React Admin</span>
      </div>
      <div className="icons">
        <img src="search.svg" alt="search image" className="icon" />
        <img src="app.svg" alt="app image" className="icon" />
        <img src="expand.svg" alt="expand image" className="icon" />
        <div className="notifications">
          <img
            src="notifications.svg"
            alt="notifications image"
            className="icon"
          />
          <span>1</span>
        </div>
        <div className="user">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnSA1zygA3rubv-VK0DrVcQ02Po79kJhXo_A&s"
            alt="user image"
            className="icon"
          />
          <span>Abanoub</span>
        </div>
        <img src="settings.svg" alt="settings image" className="icon" />
      </div>
    </nav>
  );
};

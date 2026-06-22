function Header() {
  return (
    <nav className="navbar">
      <div className="logo">
        <h2>My Todos List</h2>
      </div>

      <div className="nav-links">
        <a href="/">Home</a>
        <a href="/about">About</a>
      </div>
    </nav>
  );
}

export default Header;
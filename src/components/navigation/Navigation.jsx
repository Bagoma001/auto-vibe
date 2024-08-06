import NavigationHelper from "./NavigationHelper";

function Navigation() {
  return (
    <>
      <div className="navigation-flex-container">
        <ul className="navigation-list">
          <li className="navigation-single">
            <NavigationHelper href="/">Home</NavigationHelper>
          </li>

          <li className="navigation-single">
            <NavigationHelper href="/categories">Categories</NavigationHelper>
          </li>

          <li className="navigation-single">
            <NavigationHelper href="/company">Company</NavigationHelper>
          </li>
          <li className="navigation-single">
            <NavigationHelper href="/blog">Blog</NavigationHelper>
          </li>
          <li className="navigation-single">
            <NavigationHelper href="/contact">Contact</NavigationHelper>
          </li>
        </ul>

        <div>
          <a href="login" className="authentication login">
            Login
          </a>
          <a href="signup" className="authentication signup">
            Register
          </a>
        </div>
      </div>
    </>
  );
}

export default Navigation;

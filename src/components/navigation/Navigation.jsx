import NavigationHelper from "./NavigationHelper";
import Authentication from "../authentication/Authentication";
import Icons from "../../utils/Icons";

import logo from "../../assets/logo.png";

function Navigation() {
  return (
    <>
      <div className="navigation-flex-container">
        <div className="logo">
          <img src={logo} alt="" className="img" />
        </div>
        <ul className="navigation-list">
          <li className="navigation-single">
            <NavigationHelper href="/">Home</NavigationHelper>
          </li>

          <li>
            <NavigationHelper href="/categories" className="category">
              <span className="navigation-icons">
                Categories
                <Icons lightIcon>keyboard_arrow_down </Icons>
              </span>
            </NavigationHelper>
          </li>

          <li className="navigation-single">
            <NavigationHelper href="/company">Company</NavigationHelper>
          </li>
          <li>
            <NavigationHelper href="/blog">
              <span className="navigation-icons">
                Blog
                <Icons lightIcon>keyboard_arrow_down </Icons>
              </span>
            </NavigationHelper>
          </li>
          <li className="navigation-single">
            <NavigationHelper href="/contact">Contact</NavigationHelper>
          </li>
        </ul>
        <Authentication />
      </div>
    </>
  );
}

export default Navigation;

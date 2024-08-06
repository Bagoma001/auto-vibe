export default function NavigationHelper({ href, children }) {
  return (
    <nav>
      <header>
        <ul>
          <li>
            <a href={href} className="links">
              {children}
            </a>
          </li>
        </ul>
      </header>
    </nav>
  );
}

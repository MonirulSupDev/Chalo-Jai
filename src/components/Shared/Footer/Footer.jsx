import { NavLink } from "react-router";

const Footer = () => {
  const linkStyle = ({ isActive }) =>
    `link link-hover ${isActive ? "text-primary" : "text-white/70"}`;

  return (
    <footer className="footer sm:footer-horizontal bg-zinc-700 text-white/70 p-10">
      <nav>
        <h6 className="footer-title">Explore</h6>
        <NavLink to="/" className={linkStyle}>
          Home
        </NavLink>
        <NavLink to="/all-tourists-spot" className={linkStyle}>
          All Tourists Spots
        </NavLink>
        <NavLink to="/add-tourists-spot" className={linkStyle}>
          Add a Spot
        </NavLink>
        <NavLink to="/my-list" className={linkStyle}>
          My List
        </NavLink>
      </nav>
      <nav>
        <h6 className="footer-title">Company</h6>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
      </nav>
      <nav>
        <h6 className="footer-title">Support</h6>
        <a className="link link-hover">Help center</a>
        <a className="link link-hover">FAQ</a>
        <a className="link link-hover">Report an issue</a>
      </nav>
      <form>
        <h6 className="footer-title">Newsletter</h6>
        <p className="mb-4">
          Subscribe to get the latest travel guides and destination updates.
        </p>
        <fieldset className="w-80">
          <label>Enter your email address</label>
          <div className="join">
            <input
              type="email"
              placeholder="username@site.com"
              className="input join-item focus:outline-0"
            />
            <button type="submit" className="btn btn-primary join-item">
              Subscribe
            </button>
          </div>
        </fieldset>
      </form>
    </footer>
  );
};

export default Footer;

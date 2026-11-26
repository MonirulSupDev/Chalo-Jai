import { NavLink } from "react-router";
import Logo from "../../Logo/Logo";
import ThemeToggle from "../../ThemeToggle/ThemeToggle";
import { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthContext";
import Swal from "sweetalert2";

const Navbar = () => {
  const { user, logoutUser } = useContext(AuthContext);

  const handleLogout = (e) => {
    e.preventDefault();
    logoutUser()
      .then(() => {
        Swal.fire({
          title: "Logged Out!",
          text: "You have been logged out!",
          icon: "success",
        });
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${error.message}`,
        });
      });
  };

  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `py-[.45rem] px-[.7rem] font-semibold text-gray-600 dark:text-gray-300 hover:text-primary hover:bg-[#e6fffb] dark:hover:bg-teal-800 ${isActive ? "text-green-700 bg-green-100 dark:bg-teal-800 shadow-none" : ""}`
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/all-tourists-spot"
          className={({ isActive }) =>
            `py-[.45rem] px-[.7rem] font-semibold text-gray-600 dark:text-gray-300 hover:text-primary hover:bg-[#e6fffb] dark:hover:bg-teal-800 ${isActive ? "text-green-700 bg-green-100 dark:bg-teal-800 shadow-none" : ""}`
          }
        >
          All Tourists Spot
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/add-tourists-spot"
          className={({ isActive }) =>
            `py-[.45rem] px-[.7rem] font-semibold text-gray-600 dark:text-gray-300 hover:text-primary hover:bg-[#e6fffb] dark:hover:bg-teal-800 ${isActive ? "text-green-700 bg-green-100 dark:bg-teal-800 shadow-none" : ""}`
          }
        >
          Add Tourists Spot
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/my-list"
          className={({ isActive }) =>
            `py-[.45rem] px-[.7rem] font-semibold text-gray-600 dark:text-gray-300 hover:text-primary hover:bg-[#e6fffb] dark:hover:bg-teal-800 ${isActive ? "text-green-700 bg-green-100 dark:bg-teal-800 shadow-none" : ""}`
          }
        >
          My List
        </NavLink>
      </li>
      {!user && (
        <>
          <li>
            <NavLink
              to="/login"
              className={({ isActive }) =>
                `py-[.45rem] px-[.7rem] font-semibold text-gray-600 dark:text-gray-300 hover:text-primary hover:bg-[#e6fffb] dark:hover:bg-teal-800 ${isActive ? "text-green-700 bg-green-100 dark:bg-teal-800 shadow-none" : ""}`
              }
            >
              Login
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/register"
              className={({ isActive }) =>
                `py-[.45rem] px-[.7rem] font-semibold text-gray-600 dark:text-gray-300 hover:text-primary hover:bg-[#e6fffb] dark:hover:bg-teal-800 ${isActive ? "text-green-700 bg-green-100 dark:bg-teal-800 shadow-none" : ""}`
              }
            >
              Register
            </NavLink>
          </li>
        </>
      )}
    </>
  );

  return (
    <div className="navbar shadow-sm sticky top-0 bg-gray-50 dark:bg-gray-900 z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              aria-label="Menu"
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={-1}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2"
          >
            {navLinks}
          </ul>
        </div>
        <a href="#" className="text-xl font-bold">
          <Logo />
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal shadow-none px-1 space-x-10">
          {navLinks}
        </ul>
      </div>
      <div className="navbar-end">
        <ThemeToggle />
        {user && (
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn-circle cursor-pointer hover:scale-95 avatar relative group"
            >
              <div className="w-10 rounded-full">
                <img alt="User photo" src={user.photoURL} />
              </div>
              <div className="absolute top-10 -translate-x-22.5 text-zinc-800 dark:text-white text-nowrap pointer-events-none opacity-0 group-hover:opacity-100">
                {user.displayName}
              </div>
            </div>
            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a className="justify-between">{user.email}</a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a onClick={handleLogout}>Logout</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;

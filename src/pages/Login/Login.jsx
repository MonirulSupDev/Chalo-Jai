import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../../contexts/AuthContext";
import Swal from "sweetalert2";

const Login = () => {
  const { loginUser } = useContext(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    // login function
    loginUser(email, password)
      .then((result) => {
        console.log(result.user);
        Swal.fire({
          title: "Success!",
          text: "You Logged in successfully!",
          icon: "success",
          timer: 1500,
        });
        navigate(from, { replace: true });
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${error.message}`,
        });
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12 font-sans">
      <div className="w-full max-w-3xl rounded-2xl shadow-md shadow-zinc-500 p-8 sm:p-10">
        {/* Header */}
        <h1 className="text-[28px] tracking-tight">Welcome Back</h1>
        <p className="text-[14px] text-[#64748b] mt-1.5 mb-7">
          Login to continue exploring and managing your spots.
        </p>

        {/* Login Form */}
        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label
              htmlFor="email"
              className="block text-[13px] font-semibold mb-2"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              autoComplete="nope"
              required
              className="w-full h-11 px-3.5 rounded-lg border border-[#cbd5e1] text-secondary text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-[13px] font-semibold mb-2"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              autoComplete="new-password"
              required
              className="w-full h-11 px-3.5 rounded-lg border border-[#cbd5e1] text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition"
            />
          </div>

          <button
            type="submit"
            className="w-full h-11 mt-2 bg-primary dark:bg-zinc-700 hover:bg-green-900 dark:hover:bg-zinc-800 active:scale-[0.99] text-white font-semibold text-[14px] rounded-lg transition cursor-pointer"
          >
            Login
          </button>
        </form>

        {/* Divider */}
        <div className="my-5 text-center">
          <span className="text-[12px] text-[#64748b]">or continue with</span>
        </div>

        {/* Social Auth Buttons */}
        <div className="space-y-3">
          <button
            type="button"
            className="w-full h-11 hover:bg-green-200 dark:hover:bg-zinc-800 text-primary font-semibold text-[13px] border border-primary rounded-lg transition cursor-pointer"
          >
            Continue with Google
          </button>

          <button
            type="button"
            className="w-full h-11 hover:bg-green-200 dark:hover:bg-zinc-800 text-primary font-semibold text-[13px] border border-primary rounded-lg transition cursor-pointer"
          >
            Continue with GitHub
          </button>
        </div>

        {/* Footer Link */}
        <p className="mt-6 text-[13px] text-[#64748b]">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="font-semibold text-primary hover:underline"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;

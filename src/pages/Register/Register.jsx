import { useContext } from "react";
import { Link } from "react-router";
import { AuthContext } from "../../contexts/AuthContext";
import Swal from "sweetalert2";
import { updateProfile } from "firebase/auth";

const Register = () => {
  const { createUser } = useContext(AuthContext);

  const handleRegister = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photoUrl = form.photoUrl.value;
    const email = form.email.value;
    const password = form.password.value;

    try {
      // 1. Create the Firebase account first
      const result = await createUser(email, password);

      // 2. Set name and photo on the Firebase user
      await updateProfile(result.user, {
        displayName: name,
        photoURL: photoUrl,
      });

      // 3. Save to your DB (no password!)
      const res = await fetch("http://localhost:5000/users", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ name, photoUrl, email }),
      });
      const data = await res.json();
      console.log(data);

      form.reset();
      Swal.fire({
        title: "Success!",
        text: "User Created successfully!",
        icon: "success",
        timer: 1500,
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error.message,
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12 font-sans">
      <div className="w-full max-w-3xl rounded-2xl shadow-md shadow-zinc-500 p-8 sm:p-10">
        {/* Header */}
        <h1 className="text-[28px] tracking-tight">Create Account</h1>
        <p className="text-[14px] text-[#64748b] mt-1.5 mb-7">
          Join ChaloJai to add and manage your favorite tourist spots.
        </p>

        {/* Registration Form */}
        <form onSubmit={handleRegister} className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-[13px] font-semibold mb-2"
            >
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="w-full h-11 px-3.5 rounded-lg border border-[#cbd5e1] text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-[13px] font-semibold mb-2"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="nope"
              required
              className="w-full h-11 px-3.5 rounded-lg border border-[#cbd5e1] text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition"
            />
          </div>

          <div>
            <label
              htmlFor="photoUrl"
              className="block text-[13px] font-semibold mb-2"
            >
              Photo URL
            </label>
            <input
              id="photoUrl"
              name="photoUrl"
              type="url"
              placeholder="https://..."
              className="w-full h-11 px-3.5 rounded-lg border border-[#cbd5e1] placeholder-[#94a3b8] text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition"
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
              name="password"
              type="password"
              autoComplete="new-password"
              required
              className="w-full h-11 px-3.5 rounded-lg border border-[#cbd5e1] text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition"
            />
          </div>

          <button
            type="submit"
            className="w-full h-11 mt-3 bg-primary dark:bg-zinc-700 hover:bg-green-900 dark:hover:bg-zinc-800 active:scale-[0.99] text-white font-semibold text-[14px] rounded-lg transition cursor-pointer"
          >
            Register
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
          Already have an account?{" "}
          <Link
            to="/login"
            className="font-semibold text-primary hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;

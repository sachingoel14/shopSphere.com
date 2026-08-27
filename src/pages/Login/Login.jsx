import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { useLoginMutation } from "../../features/api/authApi";
import { setCredentials } from "../../features/auth/authSlice";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [login, { isLoading }] = useLoginMutation();

  const [username, setUsername] = useState("emilys");
  const [password, setPassword] = useState("emilyspass");

  const handleLogin = async () => {
    console.log("=== LOGIN STARTED ===");

    try {
      const data = await login({
        username,
        password,
      }).unwrap();

      console.log("API Response:", data);

      dispatch(
        setCredentials({
          user: data,
          token: data.token,
        })
      );

      localStorage.setItem("user", JSON.stringify(data));
      localStorage.setItem("token", data.token);

      console.log("Saved to Redux + localStorage");

      navigate("/dashboard");

      console.log("=== LOGIN SUCCESS ===");

    } catch (error) {
      console.log("Login Failed:", error);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500">

      <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-2xl">

        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold">
            Shop<span className="text-indigo-600">Sphere</span>
          </h1>

          <p className="mt-2 text-gray-500">
            Welcome back! Sign in to continue.
          </p>
        </div>

        <div className="space-y-4">

          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            className="w-full rounded-xl border px-4 py-3 focus:border-indigo-500 focus:outline-none"
          />

          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="w-full rounded-xl border px-4 py-3 focus:border-indigo-500 focus:outline-none"
          />

          <button
            onClick={handleLogin}
            disabled={isLoading}
            className="w-full rounded-xl bg-indigo-600 py-3 font-semibold text-white transition hover:bg-indigo-700 disabled:opacity-60"
          >
            {isLoading ? "Logging in..." : "Login"}
          </button>

        </div>

      </div>

    </div>
  );
}

export default Login;
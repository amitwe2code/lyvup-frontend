import { useState } from "react";
import { login } from "../../../api/api";
import { useDispatch } from "react-redux";
import { setToken } from "../../../features/token/tokenSlice";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [loading, setloading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const validators = () => {
    const formErrors = {
      email: "",
      password: "",
    };

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!email) {
      formErrors.email = "Email is required";
      console.log("error in email");
    } else if (!emailRegex.test(email)) {
      formErrors.email = "Please enter a valid email address";
      console.log("error in email regex");
    }

    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!password) {
      formErrors.password = "Password is required";
      console.log("error in password");
    } else if (!passwordRegex.test(password)) {
      formErrors.password =
        "Password must be at least 8 characters, with one uppercase, one lowercase, one number, and one special character";
      console.log("error in password regex");
    }
    setErrors(formErrors);
    return formErrors.email === "" && formErrors.password === "";
  };
  // FUNTION FOR LOGIN
  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    console.log("email=", email);
    console.log("password=", password);
    setEmail("");
    setPassword("");
    if (validators()) {
      setloading(true);
      try {
        const response = await login(email, password);
        console.log("response =>", response);
        const accessToken = response.data.data.access_token;
        const refreshToken = response.data.data.refresh_token;
        const user = response.data.data.user
        localStorage.setItem('user', JSON.stringify(user));
        dispatch(setToken({ accessToken, refreshToken, user }));
        alert("login successful");
        setEmail("");
        setPassword("");
        navigate("/users");
      } catch (error) {
        console.error("Login failed:", error);
        alert(error.response.data.message);
      } finally {
        setloading(false);
      }
    }
  };

  return (
    <div className="flex justify-center items-center p-4 min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
        <div className="logo   text-center flex justify-center items-center">
          <img
            src="https://lyvup.com/hs-fs/hubfs/Tekengebied%201%20(2).jpg?width=211&height=149&name=Tekengebied%201%20(2).jpg"
            alt="Lyvup Logo"
            className="logo-img w-30 h-20"
          />
        </div>
        <h2 className="text-xl text-left mb-2 font-semibold ">{t("LOGIN")}</h2>
        <form onSubmit={handleLoginSubmit}>
          <div className="mb-4">
            <input
              type="email"
              id="email"
              name="email"
              className="border rounded-md py-2 px-3 w-full focus:outline-none focus:ring-2 focus:ring-[#0095f6]"
              placeholder={t("Enter your username or email")}
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors?.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
          </div>
          <div className="mb-4">
            <input
              type="password"
              id="password"
              name="password"
              className="border rounded-md py-2 px-3 w-full focus:outline-none focus:ring-2 focus:ring-[#0095f6]"
              placeholder={t("Enter your password")}
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors?.password && (
              <p className="text-red-500 text-sm">{errors.password}</p>
            )}
          </div>
          <button
            type="submit"
            className="bg-[#0095f6] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md w-full"
          >
            {loading ? t("Logging In...") : t("Log In")}
          </button>
        </form>
        <div className="mt-4 text-center">
          <Link to="/forget" className="text-[#0095f6] hover:text-blue-700">
            {t("Forgot password?")}
          </Link>
          <p className="text-gray-700">
            Dot have an account?{" "}
            <Link to="/sign" className="text-[#0095f6] hover:text-blue-700">
              {t("Sign up")}
            </Link>
          </p>
          <div>
            <input
              className="mr-1 mt-1 border-none "
              type="checkbox"
              id="rememberMe"
              name="rememberMe"
            />
            <label htmlFor="rememberMe">Remember Me</label>
            <br></br>
          </div>
        </div>
      </div>
    </div>
  );
}

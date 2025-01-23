import { useState } from "react";
import { loginUser } from "../../../api/api";
import { useDispatch } from "react-redux";
import { setToken } from "../../../features/token/tokenSlice";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";
import LanguageSwitcher from "../../../components/common/languageSwitcher/LanguageSwitcher";
import useValidation from "../../../components/common/UseValidation";
import logo from "../../../assets/logo.png";
import { toast } from "react-toastify";
export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setloading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const initialFormState = {
    email: "",
    password: "",
  };

  const validators = {
    email: [
      (value) =>
        value === null || value.trim() === ""
          ? "email is required"
          : !/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(value)
            ? "Please enter a valid email address"
            : null,
    ],
    password: [
      (value) =>
        value === null || value.trim() === ""
          ? "password is required"
          : /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(value)
            ? "at least one speacial character one number and one upper and lower case letter"
            : null,
    ],
  };
  /*----LOGIN ONCHANGE FuNCTION----*/
  const { state, setState, onInputChange, errors, setErrors, validate } =
    useValidation(initialFormState, validators);

  //login form submit function
  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    console.log("email=", state);
    console.log("password=", password);

    if (validate()) {
      console.log("validation error =>", validate());
      setloading(true);
      try {
        const response = await loginUser(state.email, state.password);
        console.log("response =>", response);
        const accessToken = response.data.data.access_token;
        const refreshToken = response.data.data.refresh_token;
        const user = response.data.data.user;
        console.log(response.status === 200);
        if (response.status === 200) {
          toast.success("Replied Successfully", {
            // position: toast.POSITION.TOP_RIGHT,
            autoClose: 3000,
          });
          localStorage.setItem("user", JSON.stringify(user));
          localStorage.setItem("accessToken", accessToken);
          localStorage.setItem("refreshToken", refreshToken);
          dispatch(setToken({ accessToken, refreshToken, user }));

          setEmail("");
          setPassword("");
          // setErrors({ ...errors, password: ["invalid crendentials"] })
          setTimeout(() => {
            navigate(`/profile/${user?.id}`);
          }, 100);
          window.location.reload();
        }
      } catch (error) {
        console.error("Login failed:", error);
      } finally {
        setloading(false);
      }
    } else {
      console.log("validation error =>", validate());
    }
  };

  return (
    <div className="flex justify-center items-center p-4 min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
        <div className="logo   text-center flex justify-center items-center">
          <img src={logo} alt="Lyvup Logo" className="logo-img h-[50px] mb-3" />
        </div>
        <h2 className="text-xl text-left mb-2 font-semibold ">
          {t("lg_LOGIN")}
        </h2>
        <form onSubmit={handleLoginSubmit}>
          <div className="mb-4">
            <input
              type="email"
              id="email"
              name="email"
              className={` border ${errors.email ? " border-danger" : ""
                } rounded-md py-2 px-3 w-full focus:outline-none focus:ring-2 focus:ring-[#0095f6]`}
              placeholder={t("lg_Enter your username or email")}
              value={state.email}
              onChange={onInputChange}
            />
            {errors.email && (
              <span key={errors.email} className="text-danger font-size-3">
                {errors.email}
              </span>
            )}
          </div>
          <div className="mb-4">
            <input
              type="password"
              id="password"
              name="password"
              className={` border ${errors.email ? " border-danger" : ""
                } rounded-md py-2 px-3 w-full focus:outline-none focus:ring-2 focus:ring-[#0095f6]`}
              placeholder={t("lg_Enter your password")}
              value={state.password}
              onChange={onInputChange}
            />
            {/*----ERROR MESSAGE FOR password----*/}
            {errors.password && (
              <span key={errors.password} className="text-danger font-size-3">
                {errors.password}
              </span>
            )}
          </div>
          <button
            type="submit"
            className="bg-[#0095f6] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md w-full"
          >
            {loading ? t("lg_Logging In...") : t("lg_Log In")}
          </button>
        </form>
        <div className="mt-4 text-center">
          <Link to="/forget" className="text-[#0095f6] hover:text-blue-700">
            {t("lg_Forgot password?")}
          </Link>
          <p className="text-gray-700">
            {t("lg_Don't have an account?")}
            <Link to="/sign" className="text-[#0095f6] hover:text-blue-700">
              {t("lg_Sign up")}
            </Link>
          </p>
          <div>
            {/* <input
              className="mr-1 mt-1 border-none "
              type="checkbox"
              id="rememberMe"
              name="rememberMe"
            />
            <label htmlFor="rememberMe">Remember Me</label>
            <br></br> */}
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </div>
  );
}

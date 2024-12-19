import { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginForm from "./pages/common/login/LoginForm";
import RegisterForm from "./pages/common/login/RegisterForm";
import ForgetPasswordForm from "./pages/common/login/ForgetPasswordForm";
import Dashboard from "./pages/admin/Dashboard";
import PatientPage from "./pages/common/Patient";
// import User from './components/other/User'

export default function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="box-border ">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginForm />} />
            <Route path="/sign" element={<RegisterForm />} />
            <Route path="/forget" element={<ForgetPasswordForm />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/patient" element={<PatientPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </Suspense>
  );
}

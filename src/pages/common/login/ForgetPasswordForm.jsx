import React from 'react'
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router'

export default function ForgetPasswordForm() {
    const { t } = useTranslation();
    return (
        <>
            <div className="flex justify-center items-center p-4 h-screen bg-gray-100">
                <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
                    <div className="logo text-center flex justify-center items-center">
                        <img src="https://lyvup.com/hs-fs/hubfs/Tekengebied%201%20(2).jpg?width=211&height=149&name=Tekengebied%201%20(2).jpg" alt="Lyvup Logo" className="logo-img" />
                    </div>
                    <h2 className="text-2xl font-semibold text-center mb-2">{t("fp_Forgot Password")}</h2>
                    <p className="text-gray-600 mb-4 text-center">
                        {t("fp_Enter your email to reset your password.")}
                    </p>
                    <form>
                        <div className="mb-4">
                            {/* <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
                                Email
                            </label> */}
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="border rounded-md py-2 px-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder={t("fp_Enter your email")}
                            />
                        </div>
                        <button
                            type="submit"
                            className="bg-[#0095f6] hover:bg-blue-500 text-white font-bold py-2 px-4 rounded-md w-full"
                        >
                            {t("fp_Reset Password")}
                        </button>
                    </form>
                    <div className="pl-2">
                        <Link to="/" className="text-[#0095f6] hover:text-blue-700">
                            {t("fp_Go to Login")}
                        </Link>
                    </div>
                </div>
            </div>

        </>
    )
}

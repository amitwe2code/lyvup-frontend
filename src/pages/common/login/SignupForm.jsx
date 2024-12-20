import { useState } from 'react';
import { Link } from 'react-router';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../../../components/common/languageSwitcher/LanguageSwitcher';

export default function SignupForm() {
    const { t } = useTranslation();
    const [user, setUser] = useState({
        name: '',
        email: '',
        phone: '',
        user_type: 'PATIENT',
        profile_picture: null,
        language_preference: '',
        status: 'ACTIVE',
        password: '',
    });

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser((prevUser) => ({
            ...prevUser,
            [name]: value,
        }));
    };

    // Handle file input for profile picture
    const handleFileChange = (e) => {
        const { name, files } = e.target;
        setUser((prevUser) => ({
            ...prevUser,
            [name]: files[0],
        }));
    };

    // Form submit handler
    const handleSubmit = (e) => {
        e.preventDefault();
        // Submit form data to the backend (e.g., via an API call)
        console.log(user);
    };

    return (
        <div className="flex flex-col justify-center items-center p-4 min-h-screen bg-gray-100">
            <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
                <div className="logo text-center flex justify-center items-center">
                    <img
                        src="https://lyvup.com/hs-fs/hubfs/Tekengebied%201%20(2).jpg?width=211&height=149&name=Tekengebied%201%20(2).jpg"
                        alt="Lyvup Logo"
                        className="logo-img"
                    />
                </div>
                <h2 className="text-2xl font-semibold mb-2 text-center">{t("su_Sign up")}</h2>
                <p className="text-gray-600 mb-4 text-center">
                    {t("su_Create an account to join out community")}
                </p>
                <form onSubmit={handleSubmit}>
                    {/* Name */}
                    <div className="mb-3">
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={user.name}
                            onChange={handleChange}
                            className="border rounded-md py-2 px-3 w-full focus:outline-none focus:ring-2 focus:ring-[#0095f6]"
                            placeholder={t("su_Enter your username")}
                            required
                        />
                    </div>

                    {/* Email */}
                    <div className="mb-3">
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={user.email}
                            onChange={handleChange}
                            className="border rounded-md py-2 px-3 w-full focus:outline-none focus:ring-2 focus:ring-[#0095f6]"
                            placeholder={t("su_Enter your email")}
                            required
                        />
                    </div>

                    {/* Phone */}
                    <div className="mb-3">
                        <input
                            type="text"
                            id="phone"
                            name="phone"
                            value={user.phone}
                            onChange={handleChange}
                            className="border rounded-md py-2 px-3 w-full focus:outline-none focus:ring-2 focus:ring-[#0095f6]"
                            placeholder={t("su_Enter your phone number")}
                            required
                            pattern="\d{10}"
                            title={t("su_Phone number must be exactly 10 digits")}
                        />
                    </div>

                    {/* User Type */}
                    <div className="mb-3">
                        <select
                            id="user_type"
                            name="user_type"
                            value={user.user_type}
                            onChange={handleChange}
                            className="border rounded-md py-2 px-3 w-full focus:outline-none focus:ring-2 focus:ring-[#0095f6]"
                        >
                            <option value="PATIENT">{t("su_Patient")}</option>
                            <option value="TEAMLEAD">{t("su_Admin")}</option>
                        </select>
                    </div>

                    {/* Profile Picture */}
                    <div className="mb-3">
                        <input
                            type="file"
                            id="profile_picture"
                            name="profile_picture"
                            onChange={handleFileChange}
                            className="border rounded-md py-2 px-3 w-full focus:outline-none focus:ring-2 focus:ring-[#0095f6]"
                        />
                    </div>

                    {/* Language Preference */}
                    <div className="mb-3">
                        <input
                            type="text"
                            id="language_preference"
                            name="language_preference"
                            value={user.language_preference}
                            onChange={handleChange}
                            className="border rounded-md py-2 px-3 w-full focus:outline-none focus:ring-2 focus:ring-[#0095f6]"
                            placeholder={t("su_Language prefrence English/Dutch")}
                        />
                    </div>

                    {/* Status */}
                    <div className="mb-3">
                        <select
                            id="status"
                            name="status"
                            value={user.status}
                            onChange={handleChange}
                            className="border rounded-md py-2 px-3 w-full focus:outline-none focus:ring-2 focus:ring-[#0095f6]"
                        >
                            <option value="ACTIVE">Active</option>
                            <option value="INACTIVE">InActive</option>
                            <option value="SUSPENDED">Suspended</option>
                        </select>
                    </div>

                    {/* Password */}
                    <div className="mb-3">
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={user.password}
                            onChange={handleChange}
                            className="border rounded-md py-2 px-3 w-full focus:outline-none focus:ring-2 focus:ring-[#0095f6]"
                            placeholder={t("su_Enter your password")}
                            required
                            pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$"
                            title="Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character (@$!%*?&#)"
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="bg-[#0095f6] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md w-full"
                    >
                        {t("su_Sign up")}
                    </button>
                </form>
                <div className="mt-1 text-center">
                    <p className="text-gray-700">
                        {t("su_Already have an account?")}
                        <Link to="/" className="text-[#0095f6] hover:text-blue-700">
                            {t("su_Log In")}
                        </Link>
                    </p>
                </div>
                <LanguageSwitcher />
            </div>
        </div>
    );
}

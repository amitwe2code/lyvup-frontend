// import React, { useState } from 'react'

// export default function RegisterForm() {
//     // const [user.setUser]=useState({
//     // })
//     return (
//         <>
//             <div className="flex flex-col justify-center items-center p-4 min-h-screen bg-gray-100">
//                 <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
//                     <div className="logo text-center flex justify-center items-center">
//                         <img src="https://lyvup.com/hs-fs/hubfs/Tekengebied%201%20(2).jpg?width=211&height=149&name=Tekengebied%201%20(2).jpg" alt="Lyvup Logo" className="logo-img" />
//                     </div>
//                     <h2 className="text-2xl font-semibold mb-2 text-center ">Sign Up</h2>
//                     <p className="text-gray-600 mb-4 text-center">
//                         Create an account to join our community.
//                     </p>
//                     <form>
//                         <div className="mb-3">
//                             {/* <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
//                                 Name
//                             </label> */}
//                             <input
//                                 type="text"
//                                 id="name"
//                                 name="name"
//                                 className="border rounded-md py-2 px-3 w-full focus:outline-none focus:ring-2 focus:ring-[#0095f6]"
//                                 placeholder="Enter your name"
//                             />
//                         </div>
//                         <div className="mb-3">
//                             {/* <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
//                                 Email
//                             </label> */}
//                             <input
//                                 type="email"
//                                 id="email"
//                                 name="email"
//                                 className="border rounded-md py-2 px-3 w-full focus:outline-none focus:ring-2 focus:ring-[#0095f6]"
//                                 placeholder="Enter your email"
//                             />
//                         </div>
//                         <div className="mb-3">
//                             {/* <label htmlFor="password" className="block text-gray-700 font-bold mb-2">
//                                 Password
//                             </label> */}
//                             <input
//                                 type="password"
//                                 id="password"
//                                 name="password"
//                                 className="border rounded-md py-2 px-3 w-full focus:outline-none focus:ring-2 focus:ring-[#0095f6]"
//                                 placeholder="Enter your password"
//                             />
//                         </div>
//                         <button
//                             type="submit"
//                             className="bg-[#0095f6] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md w-full"
//                         >
//                             Sign Up
//                         </button>
//                     </form>
//                     <div className="mt-1 text-center">
//                         <p className="text-gray-700">
//                             Already have an account?{' '}
//                             <a href="#" className="text-[#0095f6] hover:text-blue-700">
//                                 Log In
//                             </a>
//                         </p>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }
import { useState } from 'react';
import { Link } from 'react-router';

export default function RegisterForm() {
    // State to manage form data
    const [user, setUser] = useState({
        name: '',
        email: '',
        phone: '',
        user_type: 'PATIENT',
        profile_picture: null,
        language_preference: 'en',
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
                <h2 className="text-2xl font-semibold mb-2 text-center">Sign Up</h2>
                <p className="text-gray-600 mb-4 text-center">
                    Create an account to join our community.
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
                            placeholder="Enter your name"
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
                            placeholder="Enter your email"
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
                            placeholder="Enter your phone number"
                            required
                            pattern="\d{10}"
                            title="Phone number must be exactly 10 digits"
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
                            <option value="SUPERADMIN">Superadmin</option>
                            <option value="PATIENT">Patient</option>
                            <option value="HEALTHCARE_PROVIDER">Healthcare Provider</option>
                            <option value="TEAMLEAD">Teamlead</option>
                            <option value="FRIEND">Friend</option>
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
                            placeholder="Language Preference (e.g., 'en')"
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
                            <option value="INACTIVE">Inactive</option>
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
                            placeholder="Enter your password"
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
                        Sign Up
                    </button>
                </form>
                <div className="mt-1 text-center">
                    <p className="text-gray-700">
                        Already have an account?{' '}
                        <Link to="/" className="text-[#0095f6] hover:text-blue-700">
                            Log In
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}

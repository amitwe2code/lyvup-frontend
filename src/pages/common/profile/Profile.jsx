import {
    Mail, Phone, MapPin, Languages,
    Calendar, UserCircle
} from 'lucide-react';
import TopBar from '../../../components/admin/TobBar';
import BottomNavbar from '../../../components/user/BottomNavbar';
export default function Profile() {
    const userData = {
        photoUrl: '/api/placeholder/200/200',
        name: 'Alex Thompson',
        email: 'alex.thompson@example.com',
        phone: '+1 (555) 123-4567',
        location: 'San Francisco, CA',
        occupation: 'Software Engineer',
        languages: ['English', 'Spanish'],
        joinDate: 'March 2022',
        skills: ['React', 'Node.js', 'Python', 'Cloud Computing'],
        interests: ['Technology', 'Travel', 'Photography']
    };

    return (
        <div className="flex ">
            <TopBar />
            <BottomNavbar />
            <div className="mt-14 mb-14 h-[calc(100vh-112px)] overflow-auto w-full border p-3 ">
                <div className="grid md:grid-cols-3">
                    {/* Left Column - Profile Photo */}
                    <div className="md:col-span-1 bg-gray-50 p-6 flex items-center justify-center">
                        <img
                            src={userData.photoUrl}
                            alt="Profile"
                            className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover border-4 border-white shadow-lg"
                        />
                    </div>

                    {/* Right Column - User Details */}
                    <div className="md:col-span-2 p-6">
                        {/* Name and Occupation */}
                        <div className="mb-6">
                            <h2 className="text-2xl font-bold text-gray-800">{userData.name}</h2>
                            <p className="text-gray-500">{userData.occupation}</p>
                        </div>

                        {/* Email and Language in One Row */}
                        <div className="grid md:grid-cols-2 gap-4 mb-6">
                            <div className="flex items-center space-x-3">
                                <Mail className="text-gray-500 flex-shrink-0" />
                                <p className="text-gray-700 truncate">{userData.email}</p>
                            </div>
                            <div className="flex items-center space-x-3">
                                <Languages className="text-gray-500 flex-shrink-0" />
                                <p className="text-gray-700">{userData.languages.join(', ')}</p>
                            </div>
                        </div>

                        {/* Detailed Information Grid */}
                        <div className="grid md:grid-cols-2 gap-4">
                            {/* Contact Information */}
                            <div className="space-y-3">
                                <div className="flex items-center space-x-3">
                                    <Phone className="text-gray-500 flex-shrink-0" />
                                    <p className="text-gray-700">{userData.phone}</p>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <MapPin className="text-gray-500 flex-shrink-0" />
                                    <p className="text-gray-700">{userData.location}</p>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <Calendar className="text-gray-500 flex-shrink-0" />
                                    <p className="text-gray-700">Joined {userData.joinDate}</p>
                                </div>
                            </div>

                            {/* Skills */}
                            <div>
                                <div className="flex items-start space-x-3">
                                    <UserCircle className="text-gray-500 flex-shrink-0 mt-1" />
                                    <div>
                                        <p className="text-gray-700 font-medium">Skills</p>
                                        <div className="flex flex-wrap gap-2 mt-2">
                                            {userData.skills.map((skill, index) => (
                                                <span
                                                    key={index}
                                                    className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs"
                                                >
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Interests */}
                                <div className="mt-4 flex items-start space-x-3">
                                    <UserCircle className="text-gray-500 flex-shrink-0 mt-1" />
                                    <div>
                                        <p className="text-gray-700 font-medium">Interests</p>
                                        <div className="flex flex-wrap gap-2 mt-2">
                                            {userData.interests.map((interest, index) => (
                                                <span
                                                    key={index}
                                                    className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs"
                                                >
                                                    {interest}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </div>
    )
}

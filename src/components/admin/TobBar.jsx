import { Link } from "react-router-dom";
import { useState } from "react";
import LanguageSwitcher from "../common/languageSwitcher/LanguageSwitcher";
import {
  Home,
  BarChart2,
  Users,
  Settings,
  FileText,
  MessageSquare,
} from "lucide-react";

export default function TopBar() {
  const [isOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(true);
  // const [isDarkMode, setIsDarkMode] = useState(false);

  const sidebarItems = [
    {
      icon: <Home className="w-5 h-5" />,
      label: "Dashboard",
      active: true,
    },
    {
      icon: <BarChart2 className="w-5 h-5" />,
      label: "Analytics",
      active: false,
    },
    {
      icon: <Users className="w-5 h-5" />,
      label: "Users",
      active: false,
    },
    {
      icon: <FileText className="w-5 h-5" />,
      label: "Reports",
      active: false,
    },
    {
      icon: <MessageSquare className="w-5 h-5" />,
      label: "Messages",
      active: false,
    },
    {
      icon: <Settings className="w-5 h-5" />,
      label: "Settings",
      active: false,
    },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 h-14 w-full bg-white border-b   text-black">
        <div className=" mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14">
            <div className="flex items-center">
              <Link to="/" className="text-xl font-bold">
                <img
                  src="https://app.lyvup.com/images/lyvupLogo.png"
                  alt="Logo"
                  className="h-10 w-20  object-contain"
                />
              </Link>
            </div>
            <div className="flex items-center justify-center gap-3 lg:gap-6">
              <div>
                <LanguageSwitcher />
              </div>
              <div className="hidden md:flex flex-row items-center justify-center ">
                <span className="pt-1 text-[#17686d] px-2 ">Amit</span>
                <img
                  src="https://app.lyvup.com:8443/img/user.png"
                  className="w-8 h-8 mx-2 rounded-full"
                  alt=""
                />
              </div>
              <div>
                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                  aria-expanded={isOpen}
                >
                  {isOpen ? "Close" : "Menu"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div
        className={`transition-all block  h-[calc(100vh-7rem)] duration-300 mb-14 mt-14  ease-in-out bg-[#f5f5f5] ${
          isExpanded ? "w-64" : "w-20"
        }`}
      >
        <nav className={`flex flex-col text-gray-400'`}>
          {sidebarItems.map((item, index) => (
            <div
              key={index}
              className={`
                            flex items-center p-3 cursor-pointer
                            hover:bg-gray-600 hover:text-white-600 transition-all 
                            ${item.active ? "bg-blue-600 text-white" : ""}
                            ${isExpanded ? "justify-start" : "justify-center"}
                            `}
            >
              {item.icon}
              <span
                className={`
                                    ml-3 transition-all duration-300 
                                    ${
                                      isExpanded
                                        ? "opacity-100"
                                        : "opacity-0 w-0"
                                    }
                                    `}
              >
                {item.label}
              </span>
            </div>
          ))}
        </nav>
      </div>
    </>
  );
}

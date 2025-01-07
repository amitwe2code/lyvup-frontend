import React, { useState, useEffect } from "react";
import {
  NotebookTabs,
  User,
  SquareUser,
  Dices,
  Footprints,
} from "lucide-react";
import Activity from "../../pages/admin/Activity";
import { Link } from "react-router";

export default function BottomNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("");
  const [userType, setUserType] = useState(null);

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("user"));
    if (userData) {
      setUserType(userData.user_type);
    }
  }, []);

  // if user is patient then return null
  if (userType === "patient") {
    return null;
  }

  return (
    <div>
      <nav className="fixed h-14 bottom-0 left-0 right-0 bg-secondary-color shadow-[0_-2px_10px_rgba(0,0,0,0.1)] py-2">
        <div className="flex h-full font-semibold justify-around items-center">

          <Link
            onClick={() => setActiveTab("users")}
            to={"/users"}
            className={`flex flex-col text-black items-center justify-center hover:text-[#17686d] transition-colors duration-200 no-underline hover:no-underline ${activeTab === "users" ? "text-[#17686d]" : ""
              }`}
          >
            <User size={20} />
            <span className="text-xs">Users</span>
          </Link>
          <Link
            onClick={() => setActiveTab("accounts")}
            to={"/accounts"}
            className={`flex flex-col text-black items-center justify-center ${activeTab === "accounts" ? "text-[#17686d]" : ""
              } hover:text-[#17686d] transition-colors duration-200 no-underline hover:no-underline `}
          >
            <SquareUser size={20} />
            <span className="text-xs">Accounts</span>
          </Link>
          <Link
            onClick={() => setActiveTab("programs")}
            to={"/programs"}
            className={`flex flex-col text-black items-center justify-center hover:text-[#17686d] transition-colors duration-200 no-underline hover:no-underline ${activeTab === "programs" ? "text-[#17686d]" : ""
              }`}
          >
            <NotebookTabs />
            <span className="text-xs">Programs</span>
          </Link>
          <Link
            onClick={() => setActiveTab("activitytype")}
            to={"/activitytype"}
            className={`flex flex-col text-black items-center justify-center hover:text-[#17686d] transition-colors duration-200 no-underline hover:no-underline ${activeTab === "activitytype" ? "text-[#17686d]" : ""
              }`}
          >
            <Dices size={20} />
            <span className="text-xs">ActivityType</span>
          </Link>
          <Link
            onClick={() => setActiveTab("activity")}
            to={"/activity"}
            className={`flex flex-col text-black items-center justify-center hover:text-[#17686d] transition-colors duration-200 no-underline hover:no-underline ${activeTab === "activity" ? "text-[#17686d]" : ""
              }`}
          >
            <Footprints size={20} />
            <span className="text-xs">Activity</span>
          </Link>
          <Link
            onClick={() => setActiveTab("task")}
            to={"/task"}
            className={`flex flex-col text-black items-center justify-center hover:text-[#17686d] transition-colors duration-200 no-underline hover:no-underline ${activeTab === "task" ? "text-[#17686d]" : ""
              }`}
          >
            <Footprints size={20} />
            <span className="text-xs">Task</span>
          </Link>
        </div>
      </nav>
    </div>
  );
}

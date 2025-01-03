import CustomButton from "../common/CustomButton";
import {
  LetterText,
  Trash,
  ChevronDown,
  Users,
  Settings2Icon,
  SettingsIcon,
} from "lucide-react";
import DateFormat from "./DateFormat";
import { Link } from "react-router-dom";
import { useState } from "react";
import AccountSidebar from "./AccountSidebar";
import Loader from "../common/Loader";

export default function ActivityActionTypeTable({
  activityTypes,
  setOrdering,
  handleActivityActionTypeDelete,
  handleActivityActionTypeUpdate,
}) {
  const [openDropdown, setOpenDropdown] = useState(null);

  const handleSort = (field, direction) => {
    setOrdering(direction === "asc" ? field : `-${field}`);
    setOpenDropdown(null);
  };

  const SortDropdown = ({ field }) => (
    <div className="relative inline-block">
      <button
        onClick={() => setOpenDropdown(openDropdown === field ? null : field)}
        className="inline-flex items-center"
      >
        {field} <ChevronDown className="w-4 h-4 ml-1" />
      </button>

      {openDropdown === field && (
        <div className="absolute z-10 mt-1 bg-white border rounded-md shadow-lg">
          <button
            className="block px-4 py-2 text-sm hover:bg-gray-100 w-full text-left"
            onClick={() => handleSort(field, "asc")}
          >
            'At_ascending'
          </button>
          <button
            className="block px-4 py-2 text-sm hover:bg-gray-100 w-full text-left"
            onClick={() => handleSort(field, "desc")}
          >
            'At_descending'
          </button>
        </div>
      )}
    </div>
  );

  return (
    <>
      <div className="  border-2 w-full my-1 overflow-auto ">
        <table className="table table-auto border-collapse">
          <thead className="">
            <tr className="h-10">
              <th className="leading-none text-sm" scope="col">
                <SortDropdown field="id" />
              </th>
              <th className="leading-none text-sm" scope="col">
                <SortDropdown field="activity_type" />
              </th>
              <th className="leading-none text-sm" scope="col">
                <SortDropdown field="activity" />
              </th>
              <th className="leading-none text-sm" scope="col">
                <SortDropdown field="amount" />
              </th>
              <th className="leading-none text-sm" scope="col">
                <SortDropdown field="unit" />
              </th>
              <th className="leading-none text-sm" scope="col">
                <SortDropdown field="key_activity" />
              </th>
              <th className="leading-none text-sm" scope="col">
                <SettingsIcon />
              </th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {activityTypes.map((activityType) => (
              <tr key={activityType?.id} className="border-collapse">
                <td> {activityType?.id} </td>
                <td>{activityType?.activity_type}</td>
                <td>{activityType?.activity}</td>
                <td>{activityType?.amount}</td>
                <td>{activityType?.unit}</td>
                <td>{activityType?.key_activity}</td>
                <td className="flex h-auto w-auto ">
                  <div className="inline-flex" role="group">
                    <CustomButton
                      id={activityType?.id}
                      variant="outline"
                      size="small"
                      onClick={() =>
                        handleActivityActionTypeUpdate(activityType)
                      }
                      className="border   border-r-0 rounded-none "
                    >
                      {" "}
                      <LetterText className="w-4 h-4 m-0" />
                    </CustomButton>
                    <CustomButton
                      id={activityType?.id}
                      variant="outline"
                      size="small"
                      onClick={() => handleActivityActionTypeDelete(activityType?.id)}
                      className="border border-r-0 rounded-none  "
                    >
                      {" "}
                      <Trash className="w-4 h-4 m-0" />
                    </CustomButton>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

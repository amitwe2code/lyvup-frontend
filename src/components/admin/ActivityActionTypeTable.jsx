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
  ordering,
  setOrdering,
  handleActivityActionTypeDelete,
  handleActivityActionTypeUpdate,
}) {

  const SortDropdown = ({ field }) => (
    <button
        onClick={() => {
            const newDirection = ordering === field ? `-${field}` : field;
            setOrdering(newDirection);
        }}
        className="inline-flex items-center"
    >
        {field} {(ordering===field)?( <ChevronUp className="w-4 h-4 ml-1" />):( <ChevronDown className="w-4 h-4 ml-1" />)} 
    </button>
);

  return (
    <>
      <div className="  border-2 w-full my-1 overflow-auto ">
        <table className="table table-auto border-collapse">
          <thead className="">
            <tr className="h-10">
              <th className="leading-none text-sm" scope="col">
                  s.no
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
            {activityTypes.map((activityType,index) => (
              <tr key={activityType?.id} className="border-collapse">
                <td> {index+1} </td>
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

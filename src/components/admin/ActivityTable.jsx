import CustomButton from "../common/CustomButton";
import { Delete, LetterText, Trash, ChevronDown } from "lucide-react";
import DateFormat from "./DateFormat";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function ActivityTable({ activitys, setOrdering, handleActivityDelete, handleActivityUpdate,setSelectedActivity }) {
    const [openDropdown, setOpenDropdown] = useState(null);

    const handleSort = (field, direction) => {
        setOrdering(direction === 'asc' ? field : `-${field}`);
        setOpenDropdown(null);
    };

    const SortDropdown = ({ field }) => (
        <div className="relative inline-block">
            <button
                onClick={() => setOpenDropdown(openDropdown === field ? null : field)}
                className="inline-flex items-center"
            >
                {field} <ChevronDown className="w-4 h-4 " />
            </button>

            {openDropdown === field && (
                <div className="absolute z-10 mt-1 bg-white border rounded-md shadow-lg">
                    <button
                        className="block px-4 py-2 text-sm hover:bg-gray-100 w-full text-left"
                        onClick={() => handleSort(field, 'asc')}
                    >
                        Ascending
                    </button>
                    <button
                        className="block px-4 py-2 text-sm hover:bg-gray-100 w-full text-left"
                        onClick={() => handleSort(field, 'desc')}
                    >
                        Descending
                    </button>
                </div>
            )}
        </div>
    );

    return (
        <>
            <div className="  border-2 w-full my-1 overflow-auto ">
                <table className=" table table-auto border-collapse">
                    <thead className="">
                        <tr className="h-10">
                            <th className="leading-none text-sm" scope="col">
                                <SortDropdown field="id" />
                            </th>
                            <th className="leading-none text-sm" scope="col">
                                <SortDropdown field="Intervention name" />
                            </th>
                            <th className="leading-none text-sm" scope="col">
                                <SortDropdown field="Intervention Type" />
                            </th>
                            <th className="leading-none text-sm" scope="col">
                                <SortDropdown field="label" />
                            </th>
                            <th className="leading-none text-sm" scope="col">
                                <SortDropdown field="Intervention Description" />
                            </th>

                            <th className="leading-none text-sm" scope="col">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody className="text-sm">
                        {(activitys || []).map((activity) => (
                            <tr key={activity.id} className="border-collapse" onClick={()=>setSelectedActivity(activity)} >
                                <td>{activity?.id}</td>
                                <td>{activity?.intervention_name}</td>
                                <td>{activity?.intervention_type}</td>
                                <td>{activity?.brand}</td>
                                <td>{activity?.intervention_description}</td>
                                <td className="flex h-auto w-auto ">
                                    <div className="inline-flex" role="group">
                                        <CustomButton
                                            id={activity?.id}
                                            variant="outline"
                                            size="small"
                                            onClick={() => handleActivityUpdate(user)}
                                            className="border   border-r-0 rounded-none "
                                        >
                                            {" "}
                                            <LetterText className="w-4 h-4 m-0" />
                                        </CustomButton>
                                        <CustomButton
                                            id={activity?.id}
                                            variant="outline"
                                            size="small"
                                            onClick={(e) => handleActivityDelete(activity?.id)}
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
            </div >

        </>
    );
}



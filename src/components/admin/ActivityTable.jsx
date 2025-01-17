import CustomButton from "../common/CustomButton";
import { Delete, LetterText, Trash, ChevronDown, ChevronUp } from "lucide-react";
import DateFormat from "./DateFormat";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function ActivityTable({ activitys, ordering, setOrdering, handleActivityDelete, handleActivityUpdate, setSelectedActivity }) {
    const SortDropdown = ({ field }) => (
        <button
            onClick={() => {
                const newDirection = ordering === field ? `-${field}` : field;
                props?.setOrdering(newDirection);
            }}
            className="inline-flex items-center"
        >
            {field} {(ordering === field) ? (<ChevronUp className="w-4 h-4 ml-1" />) : (<ChevronDown className="w-4 h-4 ml-1" />)}
        </button>
    );


    return (
        <>
            <div className="  border-2 w-full my-1 overflow-auto ">
                <table className=" table table-auto border-collapse">
                    <thead className="">
                        <tr className="h-10">
                            <th className="leading-none text-sm" scope="col">
                               s.no
                            </th>
                            <th className="leading-none text-sm" scope="col">
                                <SortDropdown field="activity name" />
                            </th>
                            <th className="leading-none text-sm" scope="col">
                                <SortDropdown field="activity Type" />
                            </th>
                            <th className="leading-none text-sm" scope="col">
                                <SortDropdown field="label" />
                            </th>
                            <th className="leading-none text-sm" scope="col">
                                <SortDropdown field="activity Description" />
                            </th>

                            <th className="leading-none text-sm" scope="col">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody className="text-sm">
                        {(activitys || []).map((activity,index) => (
                            <tr key={activity.id} className="border-collapse" onClick={() => setSelectedActivity(activity)} >
                                <td>{index+1}</td>
                                <td>{activity?.activity_name}</td>
                                <td>{activity?.activity_type}</td>
                                <td>{activity?.brand}</td>
                                <td>{activity?.activity_description}</td>
                                <td className="flex h-auto w-auto ">
                                    <div className="inline-flex" role="group">
                                        <CustomButton
                                            id={activity?.id}
                                            variant="outline"
                                            size="small"
                                            onClick={() => handleActivityUpdate(activity)}
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



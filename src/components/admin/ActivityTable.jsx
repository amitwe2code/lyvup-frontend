import CustomButton from "../common/CustomButton";
import { Delete, LetterText, Trash, ChevronDown } from "lucide-react";
import DateFormat from "./DateFormat";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function ActivityTable({ users, setOrdering, handleUserDelete, handleUserUpdate }) {
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
                                <SortDropdown field="Intervention for " />
                            </th>
                            <th className="leading-none text-sm" scope="col">
                                <SortDropdown field="Duration" />
                            </th>
                            <th className="leading-none text-sm" scope="col">
                                <SortDropdown field="Cost" />
                            </th>
                            <th className="leading-none text-sm" scope="col">
                                <SortDropdown field="price" />
                            </th>
                            <th className="leading-none text-sm" scope="col">
                                <SortDropdown field="Show in Tasks" />
                            </th>
                            <th className="leading-none text-sm" scope="col">
                                <SortDropdown field="Send Reminder" />
                            </th>
                            <th className="leading-none text-sm" scope="col">
                                <SortDropdown field="Add comment option" />
                            </th>
                            <th className="leading-none text-sm" scope="col">
                                setting
                            </th>
                        </tr>
                    </thead>
                    <tbody className="text-sm">
                        {users.map((user) => (
                            <tr key={user?.id} className="border-collapse">
                                <td><Link to={`/profile/${user?.id}`}>1</Link></td>
                                <td>Gll master test</td>
                                <td>survey</td>
                                <td>GLI</td>
                                <td>GLI-Master Test Description </td>
                                <td>Missing Title</td>
                                <td>cp_team</td>
                                <td>0</td>
                                <td>0</td>
                                <td>yes</td>
                                <td>yes</td>
                                <td>yes</td>

                                {/* <td><DateFormat updatedAt={user?.created_at} /></td>
                                <td><DateFormat updatedAt={user.updated_at} /></td> */}
                                <td className="flex h-auto w-auto ">
                                    <div className="inline-flex" role="group">
                                        <CustomButton
                                            id={user.id}
                                            variant="outline"
                                            size="small"
                                            onClick={() => handleUserUpdate(user)}
                                            className="border   border-r-0 rounded-none "
                                        >
                                            {" "}
                                            <LetterText className="w-4 h-4 m-0" />
                                        </CustomButton>
                                        <CustomButton
                                            id={user.id}
                                            variant="outline"
                                            size="small"
                                            onClick={(e) => handleUserDelete(e)}
                                            className="border border-r-0 rounded-none  "
                                        >
                                            {" "}
                                            <Trash className="w-4 h-4 m-0" />
                                        </CustomButton>
                                    </div>
                                </td>
                            </tr>
                        ))}
                        <tr>
                            <td>df</td>
                            <td>Gll master test</td>
                            <td>survey</td>
                            <td>GLI</td>
                            <td>GLI-Master Test Description </td>
                            <td>Missing Title</td>
                            <td>cp_team</td>
                            <td>0</td>
                            <td>0</td>
                            <td>yes</td>
                            <td>yes</td>
                            <td>yes</td>
                        </tr>
                    </tbody>
                </table>
            </div >

        </>
    );
}



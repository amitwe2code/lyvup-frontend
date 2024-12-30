import CustomButton from "../common/CustomButton";
import { Delete, LetterText, Trash, ChevronDown } from "lucide-react";
import DateFormat from "./DateFormat";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function UserTable({ users, setOrdering, handleUserDelete, handleUserUpdate }) {
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
                {field} <ChevronDown className="w-4 h-4 ml-1" />
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
                <table className="table table-auto border-collapse">
                    <thead className="">
                        <tr className="h-10">
                            <th className="leading-none text-sm" scope="col">
                                <SortDropdown field="id" />
                            </th>
                            <th className="leading-none text-sm" scope="col">
                                <SortDropdown field="name" />
                            </th>
                            <th className="leading-none text-sm" scope="col">
                                <SortDropdown field="email" />
                            </th>
                            <th className="leading-none text-sm" scope="col">
                                <SortDropdown field="phone" />
                            </th>
                            <th className="leading-none text-sm" scope="col">
                                <SortDropdown field="user_type" />
                            </th>
                            <th className="leading-none text-sm" scope="col">
                                <SortDropdown field="language" />
                            </th>
                            <th className="leading-none text-sm" scope="col">
                                <SortDropdown field="status" />
                            </th>
                            {/* <th className="leading-none text-sm" scope="col">
                                <SortDropdown field="created_at" />
                            </th>
                            <th className="leading-none text-sm" scope="col">
                                <SortDropdown field="updated_at" />
                            </th> */}
                            <th className="leading-none text-sm" scope="col">
                                setting
                            </th>
                        </tr>
                    </thead>
                    <tbody className="text-sm">
                        {users.map((user) => (
                            <tr key={user?.id} className="border-collapse">
                                <td> <Link to={`/profile/${user?.id}`}> {user?.id}</Link></td>
                                <td>{user?.name}</td>
                                <td>{user?.email}</td>
                                <td>{user?.phone}</td>
                                <td>{user?.user_type}</td>
                                <td>{user?.language_preference}</td>
                                <td>{user?.status}</td>

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
                    </tbody>
                </table>
            </div >

        </>
    );
}



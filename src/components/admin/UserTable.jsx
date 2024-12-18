import CustomButton from "../common/CustomButton";
import { Delete, LetterText, Trash } from "lucide-react";
import DateFormat from "./DateFormat";

export default function UserTable({ users, handleUserDelete, handleUserUpdate }) {

    return (
        <>
            <div className="  border-2 w-full overflow-auto ">
                <table className="table table-auto border-collapse">
                    <thead className="">
                        <tr className="h-10">
                            <th className="leading-none text-sm" scope="col">
                                ID
                            </th>
                            <th className="leading-none text-sm" scope="col">
                                Username
                            </th>
                            <th className="leading-none text-sm" scope="col">
                                Email
                            </th>
                            <th className="leading-none text-sm" scope="col">
                                Phone
                            </th>
                            <th className="leading-none text-sm" scope="col">
                                User_type
                            </th>
                            <th className="leading-none text-sm" scope="col">
                                Language
                            </th>
                            <th className="leading-none text-sm" scope="col">
                                is_active
                            </th>
                            <th className="leading-none text-sm" scope="col">
                                Create_on
                            </th>
                            <th className="leading-none text-sm" scope="col">
                                Updated_on
                            </th>
                            <th className="leading-none text-sm" scope="col">
                                setting
                            </th>
                        </tr>
                    </thead>
                    <tbody className="text-sm">
                        {users.map((user) => (
                            <tr key={user?.id} className="border-collapse">
                                <td>{user?.id}</td>
                                <td>{user?.name}</td>
                                <td>{user?.email}</td>
                                <td>{user?.phone}</td>
                                <td>{user?.user_type}</td>
                                <td>{user?.language_preference}</td>
                                <td>{user?.is_active}</td>
                                <td><DateFormat updatedAt={user?.created_at} /></td>
                                <td><DateFormat updatedAt={user.updated_at} /></td>
                                <td className="flex h-auto w-auto ">
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
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div >
            <div className="flex justify-start my-2">
                <CustomButton
                    variant="outline"
                    size="small"
                    className="rounded-none border px-3  "
                >
                    at_first page
                </CustomButton>
                <CustomButton
                    variant="outline"
                    size="small"
                    className="rounded-none border px-3  "
                >
                    previous
                </CustomButton>
                <CustomButton
                    variant="outline"
                    size="small"
                    className="rounded-none border px-3  "
                >
                    1
                </CustomButton>
                <CustomButton
                    variant="outline"
                    size="small"
                    className="rounded-none border px-3  "
                >
                    2
                </CustomButton>
                <CustomButton
                    variant="outline"
                    size="small"
                    className="rounded-none border px-3  "
                >
                    ...
                </CustomButton>
                <CustomButton
                    variant="outline"
                    size="small"
                    className="rounded-none border px-3  "
                >
                    last
                </CustomButton>
                <CustomButton
                    variant="outline"
                    size="small"
                    className="rounded-none border px-3  "
                >
                    next
                </CustomButton>
            </div>
        </>
    );
}



import CustomButton from "../../common/CustomButton";
import { Delete, LetterText, Trash, ChevronDown, ChevronUp } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { deleteUser, updateUser } from "../../../api/api";
import UserModelForm from "../modelforms/UserModelForm";
import Loader from "../../common/Loader";
import { useSelector } from "react-redux";

export default function UserTable(props) {
    const [isOpen, setIsOpen] = useState(false)
    const [updateUser, setUpdateUser] = useState({})
    const accessToken = useSelector((state) => state.token.accessToken);
    const [loading, setLoading] = useState(false)
    const handleUserUpdate = (user) => {
        setUpdateUser(user)
        setIsOpen(true)
    }

    //user delete apiFunction Call
    const handleUserDelete = async (id) => {
        try {
            setLoading(true);
            const response = await deleteUser(accessToken, id);
            console.log("res=>", response);
            props?.setApiCall(true);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };


    const SortDropdown = ({ field }) => (
        <button
            onClick={() => {
                const newDirection = props?.ordering === field ? `-${field}` : field;
                props?.setOrdering(newDirection);
            }}
            className="inline-flex capitalize items-center"
        >
            {field} {(props?.ordering === field) ? (<ChevronUp className="w-4 h-4 ml-1" />) : (<ChevronDown className="w-4 h-4 ml-1" />)}
        </button>
    );

    return (
        <>
            {loading ? <><Loader /></> : <>
                <div className="  border-2 w-full my-1  overflow-auto ">
                    <table className="table table-auto border-collapse">
                        <thead className="align-middle ">
                            <tr className="h-12  btn_theme_color">
                                <th className="leading-none" scope="col">
                                    s.no
                                </th>
                                <th className="leading-none " scope="col">
                                    <SortDropdown field="name" />
                                </th>
                                <th className="leading-none " scope="col">
                                    <SortDropdown field="email" />
                                </th>
                                <th className="leading-none " scope="col">
                                    <SortDropdown field="phone" />
                                </th>
                                <th className="leading-none " scope="col">
                                    <SortDropdown field="user_type" />
                                </th>
                                <th className="leading-none " scope="col">
                                    <SortDropdown field="language" />
                                </th>
                                <th className="leading-none" scope="col">
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
                            {props?.users.map((user, index) => (
                                <tr key={user?.id} className={`border-collapse ${(index+1) % 2 ==0?'bg_secondary_color':null}`}>
                                    <td> <Link to={`/profile/${user?.id}`}> {index + 1}</Link></td>
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
                                                className="border-gray-400  border-r-0 rounded-none "
                                            >
                                                {" "}
                                                <LetterText className="w-4 h-4 m-0" />
                                            </CustomButton>
                                            <CustomButton
                                                id={user.id}
                                                variant="outline"
                                                size="small"
                                                onClick={(e) => handleUserDelete(user?.id)}
                                                className="border-gray-400  rounded-none  "
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
            </>}
            <UserModelForm
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                setApiCall={props?.setApiCall}
                updateUser={updateUser}
                setUpdateUser={setUpdateUser}
            />

        </>
    );
}



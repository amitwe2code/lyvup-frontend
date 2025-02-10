import CustomButton from "../../common/CustomButton";
import { Delete, LetterText, Trash, ChevronDown, ChevronUp } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { deleteActivity } from "../../../api/api";
import { useSelector } from "react-redux";
import ActivityForm from "./ActivityForm";
import ActivityModelForm from "../modelforms/ActivityModelForm";
import DeleteDialog from "../../common/DeleteDialog";
import Toast from "../../common/Toast";

export default function ActivityTable(props) {

    const [isOpen, setIsOpen] = useState(false)
    const [updateActivity, setUpdateActivity] = useState({})
    const accessToken = useSelector((state) => state.token.accessToken);
    const [loading, setLoading] = useState(false)
    const [deleteOpen, setDeleteOpen] = useState(false)
    const [deleteData, setDeleteData] = useState("")

    //Activity delete apiFunction Call
    const handleActivityDelete = async () => {
        try {
            setLoading(true)
            const response = await deleteActivity(accessToken, deleteData?.id);
            Toast(response)
            console.log('response in delete=>', response);
            setDeleteOpen(false)
            setDeleteData('')
            props?.setApiCall(true)
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false)
        }
    };
    const handleOpenDeleteDialog = (e, data) => {
        setDeleteData(data)
        setDeleteOpen(true)
    }
    const handleActivityUpdate = (activity) => {
        setUpdateActivity(activity)
        setIsOpen(true)
    }

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
            <div className="  border-2 w-full my-1 overflow-auto ">
                <table className=" table table-auto border-collapse">
                    <thead className="">
                        <tr className="h-10 capitalize">
                            <th className="leading-none " scope="col">
                                s.no
                            </th>
                            <th className="leading-none " scope="col">
                                <SortDropdown field="activity_name" />
                            </th>
                            <th className="leading-none " scope="col">
                                <SortDropdown field="activity_type" />
                            </th>
                            <th className="leading-none " scope="col">
                                <SortDropdown field="label" />
                            </th>
                            <th className="leading-none " scope="col">
                                <SortDropdown field="activity_description" />
                            </th>

                            <th className="leading-none " scope="col">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody className="text-sm">
                        {(props?.activitys || []).map((activity, index) => (
                            <tr key={activity.id} className="border-collapse" >
                                <td>{index + 1}</td>
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
                                            onClick={(e) => handleOpenDeleteDialog(e, activity)}
                                            className="border border-r-0 rounded-none  "
                                        >
                                            <Trash className="w-4 h-4 m-0" />
                                        </CustomButton>
                                    </div>
                                </td>
                            </tr>
                        ))}

                    </tbody>
                </table>
                <ActivityModelForm
                    isOpen={isOpen}
                    setIsOpen={setIsOpen}
                    setApiCall={props?.setApiCall}
                    updateActivity={updateActivity}
                    setUpdateActivity={setUpdateActivity}
                />
                <DeleteDialog
                    name={deleteData.activity}
                    isOpen={deleteOpen}
                    setIsOpen={setDeleteOpen}
                    loading={loading}
                    handleDelete={handleActivityDelete}
                />

            </div >

        </>
    );
}



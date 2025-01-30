import CustomButton from "../../common/CustomButton";
import {
  LetterText,
  Trash,
  ChevronDown,
  SettingsIcon,
  ChevronUp,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux"; 
import ActivityActionTypeModelForm from "../modelforms/ActivityActionTypeModelForm";
import DeleteDialog from "../../common/DeleteDialog";
import { deleteActivityType } from "../../../api/api";

export default function ActivityActionTypeTable(props) {
  const [updateActivityActionType, setUpdateActivityActionType] = useState(null)
  const accessToken = useSelector((state) => state.token.accessToken);
  const [isOpen, setIsOpen] = useState(false)
  const [deleteOpen,setDeleteOpen]=useState(false)
  const [deleteData,setDeleteData]=useState("")
  const [loading,setLoading]=useState(false)


  const handleDeleteActivityActionType = async () => {
    try {
      setLoading(true);
      const response = await deleteActivityType(accessToken, deleteData?.id);
      setDeleteOpen(false)
      props?.setApiCall(true)
    } catch (error) {
      console.log(error); 
    } finally {
      setLoading(false);
    }
  };
  const handleOpenDeleteDialog=(e,data)=>{
    setDeleteData(data)
    setDeleteOpen(true)
  }

  const handleUpdateActivityActionType = (e,activityActionType) => {
    e.preventDefault()
    setUpdateActivityActionType(activityActionType)
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
        <table className="table table-auto border-collapse">
          <thead className="">
            <tr className="h-10 capitalize">
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
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {props?.activityTypes.map((activityType,index) => (
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
                      onClick={(e) =>
                        handleUpdateActivityActionType(e,activityType)
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
                      onClick={(e) => handleOpenDeleteDialog(e,activityType)}
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
        <ActivityActionTypeModelForm
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            setApiCall={props?.setApiCall}
            updateActivityActionType={updateActivityActionType}
          />
          <DeleteDialog
              name={deleteData.activity}
              isOpen={deleteOpen}
              setIsOpen={setDeleteOpen}
              handleDelete={handleDeleteActivityActionType}
              />
      </div>
    </>
  );
}

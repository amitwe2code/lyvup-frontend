
import { Delete, LetterText, Trash, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import CustomButton from "../../common/CustomButton";
import CustomInput from "../../common/CustomInput";
import Logout from "../../../pages/common/login/Logout";

export default function TaskTable() {
    const [search, setSearch] = useState('')
    const [filter, setFilter] = useState('')
    const [count, setCount] = useState(0)
    const [totalPage, setTotalPage] = useState(0)
    const [ordering, setOrdering] = useState("name");
    const [pageSize, setPageSize] = useState(10)
    const [currentPage, setCurrentPage] = useState(1)
    const [openDropdown, setOpenDropdown] = useState(null);
    const [isFilterDropdown, setIsFilterDropdown] = useState(false)


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
        <div>
            <div className=" flex flex-wrap relative justify-start m-1 my-2 gap-1  items-center">
                <div className="inline-flex rounded-md" role="group">
                    <CustomButton
                        className={`  capitalize rounded-none border-r-0 `}
                        variant="outline"
                    // onClick={() => setUserType("admin")}
                    >
                        admin
                    </CustomButton>
                    <CustomButton
                        className={`  capitalize rounded-none `}
                        variant="outline"
                    //   onClick={() => setUserType("patient")}
                    >
                        patient
                    </CustomButton>
                </div>
                <div className="flex flex-wrap justify-end gap-1 ">
                    <CustomInput
                        //   onChange={(e) => setSearch(e.target.value)}
                        placeholder="search"
                        size="medium"
                        className="border    rounded-md "
                    />
                    <div className=" ">  

                        <CustomButton  className="btn_theme_color h-auto   rounded-md" onClick={()=>setIsFilterDropdown(!isFilterDropdown)} >
                            Filters
                        </CustomButton>
                        {isFilterDropdown && (
                            <div className="absolute top-30 right-0 sm:right-auto mt-2 w-full sm:w-96 h-60 bg-gray-400 rounded-md overflow-auto p-3 shadow-lg py-1 z-50">
                                <div className="my-2 w-full flex flex-col gap-0">
                                    <label htmlFor="intervention" className="text_theme_color m-0">select intervention</label>
                                    <select id="intervention" className="w-full input p-2 rounded-md">
                                        <option value="all">all</option>
                                    </select>
                                </div>
                                <div className="my-2 w-full flex flex-col gap-0">
                                    <label htmlFor="intervention" className="text_theme_color m-0">select intervention</label>
                                    <select id="intervention" className="w-full input p-2 rounded-md">
                                        <option value="all">all</option>
                                    </select>
                                </div>
                                <div className="my-2 w-full flex flex-col  gap-0">
                                    <label htmlFor="intervention" className="text_theme_color m-0">select intervention</label>
                                    <select id="intervention" className="w-full input p-2 rounded-md">
                                        <option value="all">all</option>
                                    </select>
                                </div>
                                

                               
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <div className="  border-2 w-full my-1 overflow-auto ">
                <table className="table  table-auto border-collapse">
                    <thead className="">
                        <tr className="h-10">
                            <th className="leading-none text-sm" scope="col">
                                <SortDropdown field="Status" />
                            </th>
                            <th className="leading-none text-sm" scope="col">
                                <SortDropdown field="Activity" />
                            </th>
                            <th className="leading-none text-sm" scope="col">
                                <SortDropdown field="Activity since" />
                            </th>
                            <th className="leading-none text-sm" scope="col">
                                <SortDropdown field="Task type" />
                            </th>
                            <th className="leading-none text-sm" scope="col">
                                <SortDropdown field="Due date" />
                            </th>

                        </tr>
                    </thead>
                    <tbody className="text-sm">
                        {/* {tasks?.map((task) => (
                            <tr key={task?.id} className="border-collapse">
                                <td> <Link to={`/profile/${task?.id}`}> {task?.status}</Link></td>
                                <td>{task?.Activity}</td>
                                <td>{task?.activity_since}</td>
                                <td>{task?.task_type}</td>
                                <td>{task?.due_date}</td>
                            </tr>
                        ))} */}
                    </tbody>
                </table>
            </div >

        </div>

    );
}



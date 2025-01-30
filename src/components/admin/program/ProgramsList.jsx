import React, { useEffect, useState } from "react";
import Pagination from "../../common/Pagination";
import CustomButton from "../../common/CustomButton";
import { PanelRightClose, Search } from "lucide-react";
import ProgramDetail from "./ProgramDetail";
import ProgramForm from "./ProgramForm";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import useValidation from "../../common/UseValidation";
import ProgramActivityForm from "./ProgramActivityForm";
import ProgramAssignToTeam from "./ProgramAssignToTeamForm";
import AddWeekForm from "./AddWeekForm";
import { getProgram } from "../../../api/api";
import ProgramModelForm from "../modelforms/ProgramModelForm";

const ProgramList = (props) => {
  const [programs, setPrograms] = useState([])
  const { t } = useTranslation()
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [totalPage, setTotalPage] = useState(1);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("")
  const [ordering, setOrdering] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [count, setCount] = useState(0);
  const accessToken = useSelector((state) => state.token.accessToken);
  const [loading, setLoading] = useState(false);

  // get program list 
  const getProgramList = async () => {
    try {
      setLoading(true);
      const response = await getProgram({accessToken, search, currentPage, pageSize, ordering});
      setPrograms(response.data.data.results);
      //set default program for show if not 
      if (props.program === "") {
        props.setProgram(response.data.data.results[0])
      }
      setCount(response.data.data.pagination.count);
      setTotalPage(response.data.data.pagination.total_pages);
      setCurrentPage(response.data.data.pagination.current_page);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getProgramList();
    props.setApiCall(false);
  }, [props.apiCall, pageSize, currentPage, ordering, search]);


  return (

    <div className="p-3  flex flex-col justify-start  h-full overflow-auto  ">
      <h3 className="text-2xl  font-bold">List</h3>
      <div className="flex flex-col gap-2  ">
        <div className="">
          <input
            type="text"
            id="program_search"
            className="input  w-full "
            placeholder="Search"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
        </div>
        <div className=" ">
          <select
            className="input w-full"
            id="program_coach"
            value={filter}
            onChange={(e) => {
              setFilter(e.target.value);
            }}
          >
            <option value="">All</option>
            <option value="444">We2code coach</option>

          </select>
        </div>
        {/* comment for deploy */}
        {/* <div >
          <small className="flex items-center my-2 gap-1">
            <input
              type="checkbox"
              id="show_child_program"
              className=""
            // checked={showChildProgram}
            // onChange={(e) => {
            //   setShowChildProgram(e.target.checked);
            //   searchProgram("filter");
            // }}
            // style={{ display: "inline" }}
            />
            <span>Show child program</span>
          </small>
        </div> */}
      </div>

      <div className="min-h-32 h-96 border my-2 p-2   overflow-y-auto">
        <ol id="program_list_block" className="mt-3 flex flex-col gap-2">
          {(programs || []).map((program) => (
            <li key={program?.id} onClick={() => props.setProgram(program)} className={`  ${(program?.id === props.program.id) ? "bg-[#17686d] text-white" : "bg_secondary_color"} font-semibold  p-2  text-sm rounded-md`}>
              {program?.name}
            </li>
          ))}
        </ol>
        <Pagination
          nPages={totalPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          total={count}
          count={pageSize}
          setPageSize={setPageSize}
        />
      </div>
      <div className="flex justify-end items-end">
        <CustomButton
          className=" my-2  w-100 "
          onClick={() => setIsOpen(true)}
        >cp_create new program
        </CustomButton>
      </div>

      <ProgramModelForm
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        setApiCall={props?.setApiCall}
      />
    </div>
  );
};

export default ProgramList;

import React, { useEffect, useState } from "react";
import Pagination from "../common/Pagination";
import CustomButton from "../common/CustomButton";
import { Search } from "lucide-react";
import ProgramDetail from "./ProgramDetail";
import ProgramForm from "./ProgramForm";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import useValidation from "../common/UseValidation";
import WeekForm from "./weekForm";
import ProgramAssignToTeam from "./ProgramAssignToTeam";

const ProgramList = () => {
  const [program, setProgram] = useState([])
  const { t } = useTranslation()
  const [isBoolean, setIsBoolean] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [totalPage, setTotalPage] = useState(1);
  const [search, setSearch] = useState("");
  const [ordering, setOrdering] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [count, setCount] = useState(0);
  const accessToken = useSelector((state) => state.token.accessToken);
  const [loading, setLoading] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false)
  const initialFormState = {
    name: '',
    description: '',
    brand: '',
    language: '',
    written_by: '',
    version: '',
    price: ''
  }

  // const initialFormState = formData
  const validators = {
    name: [
      (value) =>
        value === null || value.trim() === ""
          ? "name is required"
          : null,
    ],
    description: [
      (value) =>
        value === null || value.trim() === ""
          ? "description is required"
          : null,
    ],
    brand: [
      (value) =>
        value === null
          ? "label is required"
          : null,
    ],
    language: [
      (value) =>
        value === null
          ? "language is required"
          : null,
    ],
    written_by: [
      (value) =>
        value === null || value.trim() === ""
          ? "written by is required"
          : null,
    ],
    version: [
      (value) =>
        value === null || value.trim() === ""
          ? "version is required"
          : null,
    ],
    price: [
      (value) =>
        value === null || value.trim() === ""
          ? "price is required"
          : null,
    ],
  }
  const { state, setState, onInputChange, errors, setErrors, validate } =
    useValidation(initialFormState, validators);

  const getActivityActionTypes = async () => {
    try {
      setLoading(true);
      const response = await getActivityTypes(accessToken, search, currentPage, pageSize, ordering);
      console.log("activitytypes =>", response.data.data)
      setActivityTypes(response.data.data.results);
      setCount(response.data.data.pagination.count);
      setTotalPage(response.data.data.pagination.total_pages);
      setCurrentPage(response.data.data.pagination.current_page);

    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  const handleProgramUpdate = async (activityType) => {
    setState({
      ...activityType
    });
    console.log("activity=>", activityType)
    setIsOpen(true);

  };

  const handleProgramDelete = async (id) => {
    try {
      setLoading(true);
      console.log("e in type delete =>", id);
      const response = await deleteActivityType(accessToken, id);
      console.log("res=>", response);
      setIsBoolean(true);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleProgramAddAndUpdate = async (e) => {
    if (validate) {

      try {
        e.preventDefault();
        setLoading(true);
        if (e.target.id == "" || e.target.id == "undefined" || e.target.id == "null") {
          const response = await addActivityType(accessToken, state);
          console.log("response=", response);
        } else {
          const response = await updateActivityType(accessToken, state, e.target.id);
          console.log("response=", response);
        }
        setIsBoolean(true);
        setIsOpen(false);
        setState(initialFormState);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    getActivityActionTypes();
    setIsBoolean(false);
  }, [isBoolean, pageSize, currentPage, ordering, search]);


  return (
    <div className="">
      <div className="program-list">
        <h3 className="text-xl mb-2 font-semibold">List</h3>
        <div className="flex flex-col gap-2 mb-4 ">
          <div className="">
            <input
              type="text"
              id="program_search"
              className="form-control program_search_class"
              placeholder="Search"
              value={search}
            // onChange={(e) => {
            //   setProgramSearch(e.target.value);
            //   searchProgram("search");
            // }}
            />
          </div>
          <div className=" ">
            <select
              className="form-control"
              id="program_coach"
            // value={programCoach}
            // onChange={(e) => {
            //   setProgramCoach(e.target.value);
            //   searchProgram("coach");
            // }}
            >
              <option value="">All</option>
              <option value="444">We2code coach</option>

            </select>
          </div>
          <div className="">
            <small>
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
          </div>
        </div>
       
        <div className="h-80 my-2 overflow-y-auto">
          <ol id="program_list_block" className="mt-3 flex flex-col gap-2">

            <li className=" bg-white px-4 py-1 rounded">
              <a
                href="#"
                className="act_list li_selected"
                onClick={() => viewActivity(892)}
              >
                GLI Survey Program (LyvPrg892)
              </a>
            </li>

            <li className=" bg-white px-4 py-1 rounded">
              <a
                href="#"
                className="act_list li_selected "
                onClick={() => viewActivity(892)}
              >
                GLI Survey Program (LyvPrg892)
              </a>
            </li>   <li className=" bg-white px-4 py-1 rounded">
              <a
                href="#"
                className="act_list li_selected"
                onClick={() => viewActivity(892)}
              >
                GLI Survey Program (LyvPrg892)
              </a>
            </li>   <li className=" bg-white px-4 py-1 rounded">
              <a
                href="#"
                className="act_list li_selected"
                onClick={() => viewActivity(892)}
              >
                GLI Survey Program (LyvPrg892)
              </a>
            </li>   <li className=" bg-white px-4 py-1 rounded">
              <a
                href="#"
                className="act_list li_selected"
                onClick={() => viewActivity(892)}
              >
                GLI Survey Program (LyvPrg892)
              </a>
            </li>   <li className=" bg-white px-4 py-1 rounded">
              <a
                href="#"
                className="act_list li_selected"
                onClick={() => viewActivity(892)}
              >
                GLI Survey Program (LyvPrg892)
              </a>
            </li>   <li className=" bg-white px-4 py-1 rounded">
              <a
                href="#"
                className="act_list li_selected"
                onClick={() => viewActivity(892)}
              >
                GLI Survey Program (LyvPrg892)
              </a>
            </li>
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




        <CustomButton
          className=" my-1  w-100 mt-3"
          onClick={() => setIsOpen(true)}
        >cp_create new program
        </CustomButton>
      </div>
      <ProgramAssignToTeam
        initialFormState={initialFormState}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        state={state}
        setState={setState}
        onInputChange={onInputChange}
        errors={errors}
        handleFormSubmit={handleProgramAddAndUpdate}
      />




      {/* <ProgramForm
        initialFormState={initialFormState}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        state={state}
        setState={setState}
        onInputChange={onInputChange}
        errors={errors}
        handleFormSubmit={handleProgramAddAndUpdate}
      /> */}
    </div>
  );
};

export default ProgramList;

import React, { useState } from "react";
import Pagination from "../common/Pagination";
import CustomButton from "../common/CustomButton";
import { Search } from "lucide-react";

const ProgramList = () => {
  const [programFilter, setProgramFilter] = useState("");
  const [programSearch, setProgramSearch] = useState("");
  const [programCoach, setProgramCoach] = useState("");
  const [showChildProgram, setShowChildProgram] = useState(false);

  const searchProgram = (type) => {
    // Implement search logic here based on type
    console.log("Searching for:", { programFilter, programSearch, programCoach, showChildProgram });
  };

  const viewActivity = (id) => {
    console.log("Viewing activity with ID:", id);
  };

  return (
    <div className="p-4">
      <div className="program-list">
        <h3>Program List</h3>
        <br />
        <div className="d-flex flex-col">
          <div className="form-group  position-relative">
        
            <input
              type="text"
              id="program_search"
              className="form-control program_search_class"
              placeholder="Search"
              value={programSearch}
              onChange={(e) => {
                setProgramSearch(e.target.value);
                searchProgram("search");
              }}
            />
          </div>

          <div className="form-group ">
            <select
              className="form-control"
              id="program_coach"
              value={programCoach}
              onChange={(e) => {
                setProgramCoach(e.target.value);
                searchProgram("coach");
              }}
            >
              <option value="">All</option>
              <option value="444">We2code coach</option>
              {/* Add other options here */}
            </select>
          </div>
        </div>

        <div className="form-group ">
          <small>
            <input
              type="checkbox"
              id="show_child_program"
              className=""
              checked={showChildProgram}
              onChange={(e) => {
                setShowChildProgram(e.target.checked);
                searchProgram("filter");
              }}
              style={{ display: "inline" }}
            />
            <span>Show child program</span>
          </small>
        </div>

        <ol id="program_list_block" className="mt-3">
          {/* Replace these list items with dynamic rendering based on state/data */}
          <li>
            <a
              href="#"
              className="act_list li_selected"
              onClick={() => viewActivity(892)}
            >
              GLI Survey Program (LyvPrg892)
            </a>
          </li>
          {/* Add other list items dynamically */}
        </ol>

        <Pagination />

        <CustomButton className="text-xs my-1 w-100 mt-3">
          cp_create new program        </CustomButton>
      </div>
    </div>
  );
};

export default ProgramList;

import { ArrowLeft, ArrowRight } from "lucide-react";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import CustomInput from "./CustomInput";
function Pagination({
  nPages,
  currentPage,
  setCurrentPage,
  total,
  count,
  setPageSize
}) {
  // Create state to manage visible page numbers
  const [visiblePageNumbers, setVisiblePageNumbers] = React.useState([]);
  useEffect(() => {
    // Calculate the start and end index for visible page numbers
    const pageSize = 10;
    const start = Math.max(1, currentPage - Math.floor(pageSize / 2));
    const end = Math.min(nPages, start + pageSize - 1);

    // Update visible page numbers
    const newVisiblePageNumbers = Array.from(
      { length: end - start + 1 },
      (_, i) => start + i
    );
    setVisiblePageNumbers(newVisiblePageNumbers);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage, nPages]);
  return (
    <div className="w-full overflow-x-auto flex flex-col items-center justify-center">
      {nPages > 1 ? (
        <>
          <nav aria-label="Page navigation example">
            <ul className="pagination pagination-hover-primary rounded-0 ml-n2  ">
              <li className="page-item text-[#17686d]px-1">
                <Link
                  onClick={() => {
                    setCurrentPage((currentPage) - 1);
                    localStorage.setItem("PageNo", "");
                  }}
                  className={
                    (currentPage) === 1
                      ? "disabled-link page-link text-[#17686d] font-size-3 py-2 font-weight-semibold px-3"
                      : "page-link text-[#17686d] font-size-3 py-2 font-weight-semibold px-3"
                  }
                  title="Previous"
                >
                  <ArrowLeft />
                </Link>
              </li>
              {visiblePageNumbers.map((pgNumber, index) => (
                <Link
                  key={index}
                  onClick={() => {
                    setCurrentPage(pgNumber);
                    localStorage.setItem("PageNo", pgNumber); // Store the current page number
                  }}
                  className={`page-link text-[#17686d] font-size-3 py-2 font-weight-semibold px-3 ${
                    (currentPage) === pgNumber ? "bg-[#17686d]text-white" : ""
                  }`}
                >
                  {pgNumber}
                </Link>
              ))}
              <li className="page-item px-1">
                <Link
                  onClick={() => {
                    setCurrentPage((currentPage) + 1);
                    localStorage.setItem("PageNo", "");
                  }}
                  className={
                    currentPage === nPages
                      ? "disabled-link page-link text-[#17686d] font-size-3 py-2 font-weight-semibold px-3"
                        : "page-link text-[#17686d] font-size-3 py-2 font-weight-semibold px-3"
                  }
                  title="Next"
                >
                  <ArrowRight />
                </Link>
              </li>
              <div className="flex items-center gap-2 border px-2 py-0">
                <span className="text-sm text-[#17686d]">Per Page:</span>
                <select 
                  className=" border-none outline-none text-sm"
                  value={count}
                  onChange={(e) => setPageSize(Number(e.target.value))}
                >
                  <option value={5}>5</option>
                  <option value={2}>2</option>
                  <option value={10}>10</option>
                  <option value={20}>20</option>
                  <option value={50}>50</option>
                  <option value={100}>100</option>
                </select>
              </div>
            </ul>
          </nav>
          <div className="d-flex justify-content-center">
            <small>
              {count === "1" || count === 1
                ? count + " record "
                : count + " records "}
              of {total} total records
            </small>
          </div>
        </>
      ) : null}
    </div>
  );
}

export default Pagination;

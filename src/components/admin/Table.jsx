import CustomButton from "../common/CustomButton";

export default function MainTable() {
  return (
    <>
      <div className="border-2 w-full overflow-auto">
        <table className="table table-auto border-collapse m-0">
          <thead className="bg-white-200">
            <tr className="h-10 border">
              <th className="text-xs p-2" scope="col">
                Account Type{" "}
              </th>
              <th className="text-xs p-2" scope="col">
                Organizations
              </th>
              <th className="text-xs p-2" scope="col">
                Amount name
              </th>
              <th className="text-xs p-2" scope="col">
                department
              </th>
              <th className="text-xs p-2" scope="col">
                Active period{" "}
              </th>
              <th className="text-xs p-2" scope="col">
                Number of members
              </th>
              <th className="text-xs p-2" scope="col">
                Number of family and friends
              </th>
              <th className="text-xs p-2" scope="col">
                at number of colleagues
              </th>
              <th className="text-xs p-2" scope="col">
                BOP active
              </th>
              <th className="text-xs p-2" scope="col">
                Date Created
              </th>
              <th className="text-xs p-2" scope="col">
                Language
              </th>
              <th className="text-xs p-2" scope="col">
                setting
              </th>
            </tr>
          </thead>
          <tbody className="">
            <tr className="border-collapse">
              <td className="text-sm p-2">1</td>
              <td className="text-sm p-2">Mark</td>
              <td className="text-sm p-2">Otto</td>
              <td className="text-sm p-2">@mdo</td>
              <td className="text-sm p-2">@mdo</td>
              <td className="text-sm p-2">@mdo</td>
              <td className="text-sm p-2">@mdo</td>
              <td className="text-sm p-2">@mdo</td>
              <td className="text-sm p-2">@mdo</td>
              <td className="text-sm p-2">@mdo</td>
              <td className="text-sm p-2">@mdo</td>
              <td className="text-sm p-2">
                <div className="inline-flex rounded-sm" role="group">
                  <button
                    type="button"
                    className="px-2 py-1 text-sm border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white rounded-md font-semibold transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 disabled:bg-gray-400 disabled:cursor-not-allowed border   border-r-0 rounded-none text-center"
                  >
                    <svg
                      className="w-3 h-3"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                    </svg>
                  </button>
                  <button
                    type="button"
                    className="px-2 py-1 text-sm border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white rounded-md font-semibold transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 disabled:bg-gray-400 disabled:cursor-not-allowed border   border-r-0 rounded-none text-center"
                  >
                    <svg
                      className="w-3 h-3"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 20"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 12.25V1m0 11.25a2.25 2.25 0 0 0 0 4.5m0-4.5a2.25 2.25 0 0 1 0 4.5M4 19v-2.25m6-13.5V1m0 2.25a2.25 2.25 0 0 0 0 4.5m0-4.5a2.25 2.25 0 0 1 0 4.5M10 19V7.75m6 4.5V1m0 11.25a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM16 19v-2"
                      />
                    </svg>
                  </button>
                  <button
                    type="button"
                    className="px-2 py-1 text-sm border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white rounded-md font-semibold transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 disabled:bg-gray-400 disabled:cursor-not-allowed border   border-r-0 rounded-none text-center"
                  >
                    <svg
                      className="w-3 h-3"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M14.707 7.793a1 1 0 0 0-1.414 0L11 10.086V1.5a1 1 0 0 0-2 0v8.586L6.707 7.793a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.416 0l4-4a1 1 0 0 0-.002-1.414Z" />
                      <path d="M18 12h-2.55l-2.975 2.975a3.5 3.5 0 0 1-4.95 0L4.55 12H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Zm-3 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" />
                    </svg>
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
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

import CustomButton from "../common/CustomButton";
import { LetterText } from "lucide-react";

export default function TeamTable() {
  return (
    <>
      <div className="  border-2 w-full overflow-auto ">
        <table className="table table-auto border-collapse">
          <thead className="">
            <tr className="h-10">
              <th className="leading-none text-sm" scope="col">
                Account Type{" "}
              </th>
              <th className="leading-none text-sm" scope="col">
                Organizations
              </th>
              <th className="leading-none text-sm" scope="col">
                Amount name
              </th>
              <th className="leading-none text-sm" scope="col">
                department
              </th>
              <th className="leading-none text-sm" scope="col">
                Active period{" "}
              </th>
              <th className="leading-none text-sm" scope="col">
                Number of members
              </th>
              <th className="leading-none text-sm" scope="col">
                Number of family and friends
              </th>
              <th className="leading-none text-sm" scope="col">
                at number of colleagues
              </th>
              <th className="leading-none text-sm" scope="col">
                BOP active
              </th>
              <th className="leading-none text-sm" scope="col">
                Date Created
              </th>
              <th className="leading-none text-sm" scope="col">
                Language
              </th>
              <th className="leading-none text-sm" scope="col">
                setting
              </th>
            </tr>
          </thead>
          <tbody className="">
            <tr className="border-collapse">
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>@mdo</td>
              <td>@mdo</td>
              <td>@mdo</td>
              <td>@mdo</td>
              <td>@mdo</td>
              <td>@mdo</td>
              <td>@mdo</td>
              <td className="flex h-auto w-auto ">
                <CustomButton
                  variant="outline"
                  size="small"
                  className="border   border-r-0 rounded-none "
                >
                  {" "}
                  <LetterText className="w-4 h-4 m-0" />
                </CustomButton>
                <CustomButton
                  variant="outline"
                  size="small"
                  className="border border-r-0 rounded-none  "
                >
                  {" "}
                  <LetterText className="w-4 h-4 m-0" />
                </CustomButton>
                <CustomButton
                  variant="outline"
                  size="small"
                  className="border rounded-none "
                >
                  {" "}
                  <LetterText className="w-4 h-4 m-0" />
                </CustomButton>
              </td>
            </tr>
            <tr className="border-collapse">
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>@mdo</td>
              <td>@mdo</td>
              <td>@mdo</td>
              <td>@mdo</td>
              <td>@mdo</td>
              <td>@mdo</td>
              <td>@mdo</td>
              <td className="flex h-auto w-auto ">
                <CustomButton
                  variant="outline"
                  size="small"
                  className="border   border-r-0 rounded-none "
                >
                  {" "}
                  <LetterText className="w-4 h-4 m-0" />
                </CustomButton>
                <CustomButton
                  variant="outline"
                  size="small"
                  className="border border-r-0 rounded-none  "
                >
                  {" "}
                  <LetterText className="w-4 h-4 m-0" />
                </CustomButton>
                <CustomButton
                  variant="outline"
                  size="small"
                  className="border rounded-none "
                >
                  {" "}
                  <LetterText className="w-4 h-4 m-0" />
                </CustomButton>
              </td>
            </tr>
            <tr className="border-collapse">
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>@mdo</td>
              <td>@mdo</td>
              <td>@mdo</td>
              <td>@mdo</td>
              <td>@mdo</td>
              <td>@mdo</td>
              <td>@mdo</td>
              <td className="flex h-auto w-auto ">
                <CustomButton
                  variant="outline"
                  size="small"
                  className="border   border-r-0 rounded-none "
                >
                  {" "}
                  <LetterText className="w-4 h-4 m-0" />
                </CustomButton>
                <CustomButton
                  variant="outline"
                  size="small"
                  className="border border-r-0 rounded-none  "
                >
                  {" "}
                  <LetterText className="w-4 h-4 m-0" />
                </CustomButton>
                <CustomButton
                  variant="outline"
                  size="small"
                  className="border rounded-none "
                >
                  {" "}
                  <LetterText className="w-4 h-4 m-0" />
                </CustomButton>
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

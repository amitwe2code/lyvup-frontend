import CustomButton from "../common/CustomButton";
import { LetterText, Trash, ChevronDown, Users } from "lucide-react";
import DateFormat from "./DateFormat";
import { Link } from "react-router-dom";
import { useState } from "react";
import AccountSidebar from "./AccountSidebar";
import Loader from "../common/Loader";

export default function AccountTable({
  accounts,
  ordering,
  setOrdering,
  handleAccountDelete,
  handleAccountUpdate,
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedAccount, setSelectedAccount] = useState(null);



  const SortDropdown = ({ field }) => (
    <button
      onClick={() => {
        const newDirection = ordering === field ? `-${field}` : field;
        setOrdering(newDirection);
      }}
      className="inline-flex items-center"
    >
      {field} <ChevronDown className="w-4 h-4 ml-1" />
    </button>

  )



  return (
    <>
      <div className="  border-2 w-full my-1 overflow-auto ">
        <table className="table table-auto border-collapse">
          <thead className="">
            <tr className="h-10">
              <th className="leading-none text-sm" scope="col">
               s.no
              </th>
              <th className="leading-none text-sm" scope="col">
                <SortDropdown field="account_type" />
              </th>
              <th className="leading-none text-sm" scope="col">
                <SortDropdown field="account_name" />
              </th>
              <th className="leading-none text-sm" scope="col">
                <SortDropdown field="team_leader_id" />
              </th>
              <th className="leading-none text-sm" scope="col">
                <SortDropdown field="language" />
              </th>
              <th className="leading-none text-sm" scope="col">
                setting
              </th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {accounts.map((account,index) => (
              <tr key={account?.id} className="border-collapse">

                <td> <Link to={`/account/${account?.id}`}>
                  {index+1} </Link>    </td>
                <td>{account?.account_type}</td>
                <td>{account?.account_name}</td>
                <td>{account?.team_leader_id}</td>
                <td>{account?.language}</td>
                <td className="flex h-auto w-auto ">
                  <div className="inline-flex" role="group">
                    <CustomButton
                      id={account.id}
                      variant="outline"
                      size="small"
                      onClick={() => handleAccountUpdate(account)}
                      className="border   border-r-0 rounded-none "
                    >
                      {" "}
                      <LetterText className="w-4 h-4 m-0" />
                    </CustomButton>
                    <CustomButton
                      id={account.id}
                      variant="outline"
                      size="small"
                      onClick={(e) => handleAccountDelete(e)}
                      className="border border-r-0 rounded-none  "
                    >
                      {" "}
                      <Trash className="w-4 h-4 m-0" />
                    </CustomButton>
                    <CustomButton
                      variant="outline"
                      size="small"
                      onClick={() => {
                        setSelectedAccount(account);
                        setIsSidebarOpen(true);
                      }}
                      className="border rounded-none"
                    >
                      <Users className="w-4 h-4 m-0" />
                    </CustomButton>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>

      <AccountSidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        selectedAccount={selectedAccount}
      />
    </>
  );
}

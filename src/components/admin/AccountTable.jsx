import CustomButton from "../common/CustomButton";
import { LetterText, Trash, ChevronDown } from "lucide-react";
import DateFormat from "./DateFormat";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function AccountTable({ accounts, setOrdering, handleAccountDelete, handleAccountUpdate }) {
    const [openDropdown, setOpenDropdown] = useState(null);

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
                        {t('At_ascending')}
                    </button>
                    <button 
                        className="block px-4 py-2 text-sm hover:bg-gray-100 w-full text-left"
                        onClick={() => handleSort(field, 'desc')}
                    >
                        {t('At_descending')}   
                    </button>
                </div>
            )}
        </div>
    );

    return (
        <>
            <div className="  border-2 w-full my-1 overflow-auto ">
                <table className="table table-auto border-collapse">
                    <thead className="">
                        <tr className="h-10">
                            <th className="leading-none text-sm" scope="col">
                                <SortDropdown field="id" />
                            </th>
                            {/* <th className="leading-none text-sm" scope="col">
                                <SortDropdown field="organization_id" />
                            </th> */}
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
                            {/* <th className="leading-none text-sm" scope="col">
                                <SortDropdown field="is_active" />
                            </th> */}
                            {/* <th className="leading-none text-sm" scope="col">
                                <SortDropdown field="created_at" />
                            </th>
                            <th className="leading-none text-sm" scope="col">
                                <SortDropdown field="updated_at" />
                            </th> */}
                            <th className="leading-none text-sm" scope="col">
                                setting
                            </th>
                        </tr>
                    </thead>
                    <tbody className="text-sm">
                        {accounts.map((account) => (
                            <tr key={account?.id} className="border-collapse">
                             <Link to={`/account/${account?.id}`}> <td>{account?.id}</td></Link>
                                {/* <td>{account?.organization_id}</td> */}
                                <td>{account?.account_type}</td>
                                <td>{account?.account_name}</td>
                                <td>{account?.team_leader_id}</td>
                                <td>{account?.language}</td>
                                {/* <td>{account?.is_active}</td> */}
                               
                                {/* <td><DateFormat updatedAt={account?.created_at} /></td>
                                <td><DateFormat updatedAt={account.updated_at} /></td> */}
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
                                  
                                        </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div >
            
        </>
    );
}



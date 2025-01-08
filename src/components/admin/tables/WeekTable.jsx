import React from 'react'

export default function WeekTable() {
    const SortDropdown = ({ field }) => (
        <button
            onClick={() => {
                const newDirection = ordering === field ? `-${field}` : field;
                setOrdering(newDirection);
            }}
            className="inline-flex items-center"
        >
            {field} {(ordering === field) ? (<ChevronUp className="w-4 h-4 ml-1" />) : (<ChevronDown className="w-4 h-4 ml-1" />)}
        </button>
    )
    return (
        <div className="  border-1 w-full my-1 overflow-auto ">
            <table className="table table-auto border-collapse">
                <thead className="">
                    <tr className="h-10">
                        <th className="leading-none text-sm" scope="col">
                            <SortDropdown field="id" />
                        </th>
                        <th className="leading-none text-sm" scope="col">
                            <SortDropdown field="name" />
                        </th>
                        <th className="leading-none text-sm" scope="col">
                            <SortDropdown field="email" />
                        </th>
                        <th className="leading-none text-sm" scope="col">
                            <SortDropdown field="phone" />
                        </th>
                        <th className="leading-none text-sm" scope="col">
                            <SortDropdown field="user_type" />
                        </th>
                        <th className="leading-none text-sm" scope="col">
                            <SortDropdown field="language" />
                        </th>
                        <th className="leading-none text-sm" scope="col">
                            <SortDropdown field="status" />
                        </th>
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
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>New Test NEw Lyvup setup Description</td>
                        <td>Survey</td>
                        <td>
                            <div className="inline-flex" role="group">
                                <button><PencilIcon className='icon_size_small' /></button>
                                <button><TrashIcon className='icon_size_small' /></button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

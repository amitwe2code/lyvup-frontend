import React from 'react'
import Loader from '../../components/common/Loader'
import ActivityActionTypeForm from '../../components/admin/ActivityActionTypeForm'

export default function ActivityActionType() {
    return (
        <div className="flex">
            <TopBar />
            <BottomNavbar />
            <div className="mt-14 mb-14 h-[calc(100vh-112px)] overflow-auto w-full border p-3 ">
                <div className="flex h-auto w-full flex-col md:flex-row justify-between">
                    <div className="md:w-1/2">
                        <h3 className="text-2xl  font-bold"> Activity</h3>
                    </div>
                    <div className="md:w-1/2 flex flex-wrap justify-start md:justify-end ">
                        <CustomInput
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder="search"
                            size="medium"
                            className="border m-1  rounded-md "
                        />
                        <CustomButton className="my-1" onClick={() => setIsOpen(true)}>
                            Add Activity
                        </CustomButton>
                    </div>
                </div>
                <div className="my-1">
                    {loading ? (
                        <div className="flex justify-center items-center h-64">
                            <Loader />
                        </div>
                    ) : (<>
                        <AccountTable
                            accounts={accounts}
                            setOrdering={setOrdering}
                            handleAccountDelete={handleAccountDelete}
                            handleAccountUpdate={handleAccountUpdate}
                        />
                        <Pagination
                            nPages={totalPage}
                            currentPage={currentPage}
                            setCurrentPage={setCurrentPage}
                            total={count}
                            count={pageSize}
                            setPageSize={setPageSize}
                        />
                    </>
                    )}
                </div>
                <ActivityActionTypeForm
                    isOpen={isOpen}
                    setIsOpen={setIsOpen}
                    formData={formData}
                    setFormData={setFormData}
                    handleFormSubmit={handleAccountAdd}
                />
            </div>
        </div>
    )
}

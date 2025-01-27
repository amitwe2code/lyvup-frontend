import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Loader } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import CustomInput from '../../common/CustomInput';
import Pagination from '../../common/Pagination';
import { getActivity, getActivityTypes } from '../../../api/api';
import ActivityTable from './ActivityTable';

export default function ActivityComponent(props) {
    const { t } = useTranslation();
    const [activitys, setActivitys] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(10);
    const [loading, setLoading] = useState(false)
    const [totalPage, setTotalPage] = useState(1);
    const [search, setSearch] = useState("");
    const [ordering, setOrdering] = useState("");
    const [count, setCount] = useState(0);
    const [filter, setFilter] = useState('')
    const accessToken = useSelector((state) => state.token.accessToken);


    const getActivitys = async () => {
        try {
            setLoading(true);
            const response = await getActivity({ accessToken, search, currentPage, pageSize, ordering,filter });
            console.log("activity =>", response.data.data)
            setActivitys(response.data.data.results);
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
        getActivitys();
        props?.setApiCall(false);
    }, [props?.apiCall, pageSize,filter, currentPage, ordering, search]);

    return (
        <>
            <div className='flex flex-wrap justify-start gap-4 mb-2 items-center'>
                <select
                    className="input w-48"
                    id="filter"
                    value={filter}
                    onChange={(e) => {
                        setFilter(e.target.value);
                    }}
                > 
                    <option value=" ">All</option>
                    <option value="survey">survey</option>
                    <option value="challenge">challenge</option>
                    <option value="interview">interview</option>
                    <option value="video">video</option>
                    <option value="workshop">workshop</option>
                    <option value="assignment">assignment</option>
                    <option value="excercise">excercise</option>
                    <option value="podcast">podcast</option>
                    <option value="other">other</option>

                </select>
                <CustomInput
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="search"
                    size="medium"
                    className="input"
                />
            </div>
            {loading ? (
                <div className="flex justify-center items-center h-64">
                    <Loader />
                </div>) : (
                <ActivityTable
                    activitys={activitys}
                    ordering={ordering}
                    setOrdering={setOrdering}
                    setApiCall={props?.setApiCall}
                />
            )}
            <Pagination
                nPages={totalPage}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                total={count}
                count={pageSize}
                setPageSize={setPageSize}
            />

        </>
    )
}

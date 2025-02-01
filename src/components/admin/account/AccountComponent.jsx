import React, { useEffect, useState } from 'react'
import CustomInput from '../../common/CustomInput';
import AccountTable from './AccountTable';
import Loader from '../../common/Loader';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import Pagination from '../../common/Pagination';
import { getAllAccountDetail } from '../../../api/api';
import { toast } from 'react-toastify';

export default function AccountComponent(props) {
    const { t } = useTranslation();
    const [accounts, setAccounts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(10);
    const [loading, setLoading] = useState(false)
    const [totalPage, setTotalPage] = useState(1);
    const [search, setSearch] = useState("");
    const [ordering, setOrdering] = useState("");
    const [count, setCount] = useState(0);
    const [filter, setFilter] = useState('');
    const accessToken = useSelector((state) => state.token.accessToken);

    //get account api call funtion
    const getAccountModelApiCall = async () => {
        try {
            setLoading(true);
            const response = await getAllAccountDetail({ accessToken, search, currentPage, pageSize, ordering, filter });
            setAccounts(response.data.data.results);
            console.log('response =>', response);
            setTotalPage(response.data.data.pagination.total_pages);
            setCount(response.data.data.pagination.count);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getAccountModelApiCall();
        if (props.apiCall === true) { props.setApiCall(false); }
    }, [props.apiCall, pageSize, currentPage, ordering, search]);

    return (
        <>
            {loading ? (
                <div className="flex justify-center items-center h-64">
                    <Loader />
                </div>
            ) : (<>
                <div className='flex flex-wrap justify-start gap-4 mb-2 items-center'>
                    <CustomInput
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="search"
                        size="medium"
                        className="input"
                    />
                </div>
                <AccountTable
                    accounts={accounts}
                    ordering={ordering}
                    setOrdering={setOrdering}
                    apiCall={props?.apiCall}
                    setApiCall={props?.setApiCall}
                />
                <Pagination
                    nPages={totalPage}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    total={count}
                    count={pageSize}
                    setPageSize={setPageSize}
                />
            </>)}
        </>
    )
}

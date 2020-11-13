import React, { useState, useEffect, useContext } from 'react'
import useHttp from '../hook/http.hook'
import { Pagination } from 'antd';
import { GlobalContext } from '../context/context';
import { PeopleList } from '../componenets/PeopleList'
import { Loader } from '../componenets/Loader'
export const People = () => {
    
    const { state: { people }, dispatch: { dataDispatch } } = useContext(GlobalContext);
    const { get } = useHttp(dataDispatch);
    const [count, setCount] = useState(JSON.parse(localStorage.getItem('pagenumber')) || 1)

   

    useEffect(() => {
        const fetchData = async () => {
            const payload = await get(`people/`, `?page=${count}`);
            await dataDispatch({ type: 'GET_PEOPLE', payload })
    
        };
        fetchData()
    }, [count]);

    const handleChange = (key) => {
        setCount(key)
        localStorage.setItem('pagenumber', JSON.stringify(key))
    }
    return (
        <div className='list-container'>
            {
                people.data ?
                    <div>
                        <PeopleList people={people.data.results}></PeopleList>
                        <Pagination
                            defaultCurrent={count}
                            total={people.data.count}
                            onChange={handleChange}
                        />
                    </div>
                    :
                    <Loader />
            }

        </div>
    )
}
import React, { useContext, useEffect } from 'react'
import { GlobalContext } from '../context/context';
import useHttp from '../hook/http.hook'
import { Loader } from './Loader'


export const Homeworld = () => {

    const { state: { char }, dispatch: { charDispatch } } = useContext(GlobalContext);
    const { get } = useHttp(charDispatch);

    useEffect(() => {

        const fetchData = async () => {
            let slicedELement = char.data.homeworld.split('/').filter(Boolean).slice(-1)[0]
            const payload = await get('planets/', slicedELement + '/');
            charDispatch({ type: 'GET_HOMEWORLD', payload })
        };

        fetchData()
    }, [char.data.homeworld])

    return (
        <div className='films-container'>
            {
                char.homeworld ?
                    <>
                        <p><strong>Name :</strong> {char.homeworld.name} </p>
                        <p><strong>Population:</strong> {char.homeworld.population === 'unknown' ? '-' : char.homeworld.population } </p>
                        <p><strong>Climate:</strong> {char.homeworld.climate} </p>
                    </>
                    :
                    <Loader/>

            }
        </div>
    )
}
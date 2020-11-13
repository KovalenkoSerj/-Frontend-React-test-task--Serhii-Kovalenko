import React, { useContext, useEffect } from 'react'
import { GlobalContext } from '../context/context';
import useHttp from '../hook/http.hook'
import { Loader } from './Loader'


export const Films = () => {

    const { state: { char }, dispatch: { charDispatch } } = useContext(GlobalContext);
    const { get } = useHttp(charDispatch);

    useEffect(() => {

        const fetchData = async () => {
            const filmsArray = []
            if (char.data.films) {
                for await (const element of char.data.films) {
                    let slicedELement = element.split('/').filter(Boolean).slice(-1)[0]
                    const payload = await get('films/', slicedELement + '/');
                    filmsArray.push(payload)
                }
                charDispatch({ type: 'GET_FILMS', payload: filmsArray })
            }
        };

        fetchData()
    }, [char.data.films])

    return (
        <div className='films-container'>
            {
                char.films ?
                    <ul className='films-block'>
                        {
                            char.films.map((film, index) => {
                                return (
                                    <li key={index}>
                                        <strong>Title:</strong> {film.title} &nbsp; <strong>Release Date: </strong> {film.release_date}
                                    </li>
                                )
                            })
                        }
                    </ul>
                    : <Loader />
            }
        </div>
    )
}
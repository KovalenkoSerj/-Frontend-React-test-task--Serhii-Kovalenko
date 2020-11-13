import React, { useContext } from 'react'
import { GlobalContext } from '../context/context'
import { Button } from 'antd'
import { DeleteTwoTone } from '@ant-design/icons';



export const Favorites = () => {
    const data = JSON.parse(localStorage.getItem('favorites'))
    const { dispatch: { favoritesDispatch } } = useContext(GlobalContext);

    const handleRemove = (url) => {
        favoritesDispatch({ type: 'REMOVE', payload: url })
        const filteredData = data.filter(el => el.url !== url)
        localStorage.setItem('favorites', JSON.stringify(filteredData))
    }


    return (
        <div className="favorites-container">
            {data && data.length ?
                <ul className='favorites_list'>
                    {
                        data.map((item, index) => {
                            return (
                                <li className='favorites-list__item' style={{ flexDirection: 'column' }} key={index} onClick={(e) => console.log(e)}>
                                    <h2>{item.name}</h2>
                                    <p>Height: {item.height}</p>
                                    <p>Mass: {item.mass}</p>
                                    <p>Gender: {item.gender}</p>
                                    <Button onClick={() => handleRemove(item.url)}>
                                        <DeleteTwoTone />
                                        Remove
                                    </Button>
                                </li>
                            )
                        })
                    }
                </ul> : <h2>No favorites yet</h2>
            }
        </div>
    )
}
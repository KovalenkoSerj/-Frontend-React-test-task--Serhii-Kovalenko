import React from 'react'
import { Link } from 'react-router-dom'
import  PropTypes from 'prop-types';


export const PeopleList = ({ people }) => (
    <ul className='list-block'>
        {
            people.map((item, index) => {
                return (
                    <li className='list-block__item' key={index}>
                        <Link to={`/detail/${item.url.slice(-3).replace('/', '')}`} >
                            <h2>{item.name}</h2>
                            <p>Height: {item.height}</p>
                            <p>Mass: {item.mass}</p>
                            <p>Gender: {item.gender}</p>
                        </Link>
                    </li>
                )
            })
        }
    </ul>   
)



import React, { useContext, useEffect, useState } from 'react'
import { useParams, useLocation } from 'react-router-dom'
import { GlobalContext } from '../context/context';
import useHttp from '../hook/http.hook'
import { Loader } from '../componenets/Loader'
import { Tabs, message, Button } from 'antd';
import { HeartTwoTone } from '@ant-design/icons';
import { Films } from '../componenets/Films'
import { Homeworld } from '../componenets/HomeWorld'


export const HeroDetails = () => {
    const { TabPane } = Tabs;
    const linkId = useParams()
    const location = useLocation()
    const { state: { char, favorites }, dispatch: { charDispatch, favoritesDispatch, } } = useContext(GlobalContext);
    const { get } = useHttp(charDispatch);


    useEffect(() => {
        const fetchData = async () => {
            if (char.data) {
                const payload = await get(`people/`, linkId.id);
                await charDispatch({ type: 'GET_CHAR', payload })

            }

        };
        fetchData()
        return () => {
            charDispatch({ type: 'CLEAR_STATE' })
            console.log(char);
        }

    }, [])


    const handleSubmit = () => {
        if (favorites.data) {
            for (const element of favorites.data) {
                if (element.url === char.data.url) {
                    message.error('This hero has already been added to favorites')
                    return;
                }
            }
            favorites.data.push(char.data)
            console.log(char.data.url);
            favoritesDispatch({ type: 'ADD_FAVORITES', payload: favorites.data })
            localStorage.setItem('favorites', JSON.stringify(favorites.data))
            message.success('Hero added to favorites')
        }
    }



    return (
        <div >
            {
                char.data ?
                    <div className='char-info'>
                        <div className='char-block'>
                            <h2 >Name : {char.data.name}</h2>
                            <span>Height: {char.data.height || '-'}</span>
                            <span>Mass: {char.data.mass || '-'}</span>
                            <span>Hair Color: {char.data.hair_color || '-'}</span>
                            <span>Skin Color: {char.data.skin_color || '-'}</span>
                            <span>Eye Color: {char.data.eye_color || '-'}</span>
                            <span>Birth Year: {char.data.birth_year || '-'}</span>
                            <span>Gender: {char.data.gender || '-'}</span>
                            <span>Home World: {char.data.home_world || '-'}</span>
                            <Button onClick={handleSubmit} className=''>
                                <HeartTwoTone />
                                Add to favorites</Button>
                        </div>
                        <Tabs style={{ width: '100%' }}>
                            <TabPane tab="Films" key="1">
                                <Films />
                            </TabPane>
                            <TabPane tab="Home world" key="2">
                                <Homeworld />
                            </TabPane>
                        </Tabs>
                    </div>
                    :
                    <Loader></Loader>
            }
        </div>
    )
}
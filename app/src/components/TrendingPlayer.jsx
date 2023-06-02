import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { Card, Col } from 'react-bootstrap';
import './styles/player.css'

const TrendingPlayer = () => {
    const [trendingPlayerData, setTrendingPlayerData] = useState('')
    useEffect(() => {
        const fetchData = async () => {
            const data = await axios.get("http://localhost:8000/api/gettrendingplayer")
            setTrendingPlayerData(data)
            console.log(data)
        }
        fetchData()
    }, [])
    return (
        <>
            <h4>Trending Players</h4>
            {
                trendingPlayerData && trendingPlayerData?.data.map((i) => {
                    return <Col md="2" className='col'>
                        <Card className='card-trending'>
                            <Card.Body className='card-body-trending'>
                                <span className='row-trending'>
                                    <p className='n-trending'>{i.name}</p>
                                    <p className='n-trending'>{i.avg}</p>
                                </span>
                                <span className='row-trending'>
                                    <p className='n-trending'>{i.team}</p>
                                    <p className='growth-trending'>+{i.growth}%</p>
                                </span>
                            </Card.Body>
                        </Card>
                    </Col>
                })
            }
        </>
    )
}

export default TrendingPlayer
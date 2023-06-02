import React, { useState } from 'react'
import './TopMovers.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Col } from 'react-bootstrap';
import { useEffect } from 'react'
import axios from 'axios'

const TopMovers = () => {
    const [topMoverData, setTopMoverData] = useState('')
    useEffect(() => {
        const fetchData = async () => {
            const data = await axios.get("http://localhost:8000/api/gettopmover")
            setTopMoverData(data)
            console.log(data)
        }
        fetchData()
    }, [])
    return (
        <>
            {
                topMoverData && topMoverData?.data.map((i) => {
                    return (
                        <Col md="2" className='col'>
                            <Card>
                                <Card.Body className='card-body-topmover'>
                                    <div className='name'>
                                        <Card.Title className='n'>{i.name}</Card.Title>
                                    </div>
                                    <Card.Text className='team'>{i.team}</Card.Text>
                                    <span className='playerDetails'>
                                        <p className="avg">{i.avg}</p>
                                        <p className='growth'>(+{i.growth}%)</p>
                                    </span>
                                </Card.Body>
                            </Card>
                        </Col>
                    )
                })
            }
        </>
    )
}

export default TopMovers
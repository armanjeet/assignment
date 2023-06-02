import React, { useState } from 'react'
import NewPlayer from '../../components/NewPlayer'
import TopMovers from '../../components/topMovers/TopMovers'
import TrendingPlayer from '../../components/TrendingPlayer'
import Slider from '../../components/slider/Slider'
import Sidebar from '../../components/sidebar/Sidebar'
import './Home.css'

const Home = () => {
    const [toggle, setToggle] = useState(false)

    const changeToggle = () => {
        if (!toggle) {
            return setToggle(true)
        } else {
            return setToggle(false)
        }
    }
    const trendingToggle = () => {
        if (!toggle) {
            return setToggle(true)
        } else {
            return setToggle(false)
        }
    }

    return (
        <div className='home'>
            <div className='sidebar-home'>
                <Sidebar />
            </div>
            <div className='slider-home'>
                <Slider />
            </div>
            <h4 className='h-home'>Top Movers</h4>
            <div className='topmovers-home'>
                 <TopMovers />
            </div>
            <h4 className='list-home'>All List</h4>

            <div className='b-home'>
                <div className='btn-home'>
                    <button className='btn-btn-home' onClick={changeToggle}>New Player</button>
                </div>

                <div className='btn'>
                    <button className='btn-btn-home' onClick={trendingToggle}>Trending Player</button>
                </div>
            </div>


            {
                (!toggle) ? (
                    <div className='newplayer-home'>
                        <h4 className='n-home'>New Player</h4>
                        <NewPlayer />
                    </div>
                ) : (
                    <div className='newplayer-home'>
                        <TrendingPlayer />
                    </div>
                )

            }

        </div>
    )
}

export default Home
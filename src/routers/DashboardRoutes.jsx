import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { DcScreen } from '../Components/dc/DcScreen'
import { HeroScreen } from '../Components/hero/HeroScreen'
import { MarvelScreen } from '../Components/marvel/MarvelScreen'
import { SearchScreen } from '../Components/search/SearchScreen'
import { Navbar } from '../ui/navbar'

export const DashboardRoutes = () => {
    return (
        <>
            <Navbar/>   

            <div className='container'>
                <Routes>
                    
                    <Route path="/marvel" element={<MarvelScreen />} />
                    <Route path="/dc" element={<DcScreen />} />

                    <Route path="/hero/:heroId" element={<HeroScreen/>} />

                    <Route path="/search" element={<SearchScreen />} />

                    <Route path="/" element={<MarvelScreen />} />
                </Routes>
            </div>
        </>
    )
}

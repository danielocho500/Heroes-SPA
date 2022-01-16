import React, { useMemo } from 'react'
import { useParams, Navigate, useNavigate } from 'react-router-dom'
import { getHeroById } from '../../selectors/getHeroById';

export const HeroScreen = () => {

    const {heroId} = useParams();

    const hero = useMemo(() => {
        return getHeroById(heroId);
    }, [heroId]);
    

    const navigation = useNavigate();

    if(!hero){
        return <Navigate to='/'/>
    }


    const {
        id,
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters
    } = hero

    const imagePath = `/assets/${hero.id}.jpg`


    const handleReturn = () => {
        navigation(-1);
    }

    return (
        <>
            <div className='row mt-5'>
                <div className='col-4'> 
                    <img 
                        src={imagePath}
                        alt={superhero}
                        className='img-thumbnail animate__animated animate__bounceInLeft'
                        /> 
                </div>

                <div className="col-8 animate__animated animate__fadeIn">
                    <h3> {hero.superhero}</h3>

                    <ul className="list-group">
                        <li className="list-group-item">
                            <b> Alterego: </b> {alter_ego}
                        </li>

                        <li className="list-group-item">
                            <b> Publisher: </b> {publisher}
                        </li>

                        <li className="list-group-item">
                            <b> First Apparence: </b> {first_appearance}
                        </li>      
                    </ul>

                    <h5> characters </h5>   
                    <p> {characters} </p>

                    <button
                        className="btn btn-outline-info"
                        onClick={handleReturn}
                    >
                        Return
                    </button>
                </div>
            </div>
        </>
    )
}

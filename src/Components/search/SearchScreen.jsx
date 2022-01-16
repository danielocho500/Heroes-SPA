import React, { useMemo } from 'react'
import queryString from 'query-string'
import { useNavigate, useLocation } from 'react-router-dom';

import { useForm } from '../../hooks/useForm';

import { getHerosByName } from '../../selectors/getHerosByName';
import {HeroCard} from '../hero/HeroCard'

export const SearchScreen = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const {q = ''} = queryString.parse(location.search);

    const initialForm = {
        searchText: q
    };
    
    const [formValues, handleInputChange ] = useForm( initialForm );

    const {searchText} = formValues;

    const heroesFilter = useMemo(() => {
        return getHerosByName(q);
    }, [q]);

    const handleSubmit = (e) => {
        e.preventDefault();

        navigate(`?q=${searchText.trim()}`);
    }

    return (
        <>
            <h1>Search</h1>
            <hr/>

            <div className="row">
                <div className="col-5">
                    <h4>Search Form</h4>
                    <hr/>

                    <form onSubmit={handleSubmit}>
                        <input
                            type='text'
                            placeholder='search a hero'
                            className='form-control'
                            name='searchText'
                            autoComplete='off'
                            value={searchText}
                            onChange={handleInputChange}
                        />

                        <button 
                            type="submit"
                            className='bnt btn-outline-primary mt-1'

                            >
                                search
                        </button>
                    </form>
                </div>

                <div className="col-7">
                    <h4> Resultados </h4>

                    <hr/>
                    {
                        (q == '') ? <div className='alert alert-info'> Search a heroe</div>
                                  : (heroesFilter.length == 0) && <div className='alert alert-danger'> No results of: <b> {q} </b>  </div>
                    }


                    {
                        heroesFilter.map(hero => (
                            <HeroCard
                                key={hero.id}
                                {...hero}
                            />
                        ))
                    }
                </div>

            </div>
        </>
    )
}

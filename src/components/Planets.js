import React from 'react';
import { useQuery } from 'react-query';
import Planet from './Planet';

const fetchPlanets = async () => {
    const res = await fetch('https://swapi.dev/api/planets/');
    return res.json();
}

const Planets = () => {

    const { data, isLoading, error } = useQuery('planets', fetchPlanets);
    console.log(data);

    return (
        <div>
            <h2>Planets</h2>

            {isLoading && (
                <div>Loading data...</div>
            )}

            { error && (
                <div>Error fetching output</div>
            )}

            { data && (
                <div>
                    { data.results.map(planet => <Planet key={planet.name} planet={planet} />)}
                </div>
            )}
        </div>
    );
}

export default Planets;
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Planet from './Planet';

const fetchPlanets = async (page) => {
    const res = await fetch(`http://swapi.dev/api/planets/?page=${page}`);
    return res.json();
}

const Planets = () => {

    const [page, setPage] = useState(1);

    const { data, isLoading, error } = useQuery(['planets', page], () => fetchPlanets(page));

    return (
        <div>
            <h2>Planets</h2>

            <button onClick={() => setPage(1)}>page 1</button>
            <button onClick={() => setPage(2)}>page 2</button>
            <button onClick={() => setPage(3)}>page 3</button>

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
import React from 'react';

const SetComponent = ({set, getSet}) => {
    
    return (
        <div className="set-container" key={set.code} onClick={() => {getSet(set.code,set.name)}} >
            <h2>{set.name}</h2>
            <p>{set.block}</p>
            <p>{set.releaseDate}</p>
        </div>
    );
};

export default SetComponent;
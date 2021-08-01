import React from 'react';

const CardWithoutMultiverseComponent = ({card}) => {
    return (
        <div className="card-magic-without-multiverse">
            <div className="content-card">
                <p>{card.name}</p>
            </div>
        </div>
    );
};

export default CardWithoutMultiverseComponent;
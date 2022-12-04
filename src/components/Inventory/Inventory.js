
import React from 'react';
const Inventory = ({student:checking}) => {

    return (
        <div>
            <h2>This is inventory. {checking.name}</h2>
        </div>
    );
};

export default Inventory;
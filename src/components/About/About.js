import React from 'react';
import Inventory from '../Inventory/Inventory'
const About = () => {
    const student = {name: 'shahjalal', age:19};
    return (
        <div>
            <h2>About us page dada vaiya</h2>
            <Inventory student={student}></Inventory>
        </div>
    );
};

export default About;
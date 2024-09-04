interface Course {
    name: string;
    parts: {
        name: string;
        exercises: number;
    }[];
}

import React from 'react'
import Header from './Header';
import Content from './Content';
import Total from './Total';

const Course: React.FC<Course> = ({ name, parts }) => {    
    const total = parts.reduce((acum, value) => acum + value.exercises, 0);
    return (
        <div>
            <Header course={name} />
            <Content content={parts} />
            <Total total={total} />
        </div>
    )
}

export default Course

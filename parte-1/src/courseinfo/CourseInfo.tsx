import React from 'react'
import Header from './components/Header'
import Content from './components/Content'
import Total from './components/Total'
const CourseInfo = () => {
    const courseInfo = {
        name: 'Half Stack application development',
        parts: [
            {
                name: 'Fundamentals of React',
                number: 10
            },
            {
                name: 'Using props to pass data',
                number: 7
            },
            {
                name: 'State of a component',
                number: 14
            }
        ]
    }
    const total = courseInfo.parts.reduce((acum, value) => acum + value.number, 0);
    
    return (
        <div>
            <Header course={courseInfo.name} />
            <Content content={courseInfo.parts} /> 
            <Total total={total} />
        </div>
    )
}


export default CourseInfo

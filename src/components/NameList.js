import React from 'react';
import Person from './Person'
function NameList(){
    // const names = ['Bruce', 'Clark', 'Diana']

    const persons = [
        {
            id:1,
            name:'Bruce',
            age:30,
            skill:'React'
        },
        {
            id:2,
            name:'Clark',
            age:26,
            skill:'Angular'
        },
        {
            id:3,
            name:'Diana',
            age:24,
            skill:'Vue'
        }
    ]
    const personList = persons.map(person => <Person key={person.id} person={person}/>)
    return <div>{personList}</div>
    
}


export default NameList
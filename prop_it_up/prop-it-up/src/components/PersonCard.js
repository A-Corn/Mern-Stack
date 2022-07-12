import React from 'react';

const PersonCard = (props) => {

    const {firstName, lastName, hairColor} = props;

    return (
        <div className="container">
            <h2> {lastName}, {firstName}</h2>
            <p> Age: {props.age}</p>
            <p>Hair Color: {hairColor}</p>
        </div>
    )
}

export default PersonCard;
import React, { useState } from "react";

function State() {
    const [name, setName] = useState('Murilo');
    const [age, setAge] = useState(35);
    
    console.log(name, age);

    const onClick = () => {
        setName('Murilo Locatelli');
        setAge(36);
    };

    return (
        <div>
            <p>State</p>
            <p>{ name }</p>
            <p>{ age }</p>
            <button onClick={ onClick }>Click</button>
        </div>
    );
}

export default State;
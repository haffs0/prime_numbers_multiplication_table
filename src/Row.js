import React from 'react';


const Row = ({ primeNumber }) => {
    return (
        <tr>
            {primeNumber.map((num, index) => (<td key={index}>{num}</td>))}
        </tr>
    )
} 

export default Row;
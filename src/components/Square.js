import React from 'react';
import '../App.css';

/**
 * Component for gameboard grid
 * Note: we use function components for components that just returns stuff,
 * Square is a function component b/c its state is handled on Board
 * @param {*} props     value = player mark on grid
 */
function Square (props) {
        return (
            // instead of calling a function defined in Square 
            // when clicked, we just invoke the onClick function 
            // defined in Board as a prop 
            <button className="square" onClick={props.onClick}>
                { /* takes in squares value from Board */ }
                { props.value } 
            </button>
    )
    
}

export default Square
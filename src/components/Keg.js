import React from 'react';
import PropTypes from 'prop-types';

function Keg(props) {

    const kegTypes = {
        height: '200px',
        width: '200px',
        border: '1px solid black',
        borderRadius: '25px',
        padding: '5%',
    }

    return (
        <React.Fragment>
           

            <div style={kegTypes}>
                <p>Name: {props.name}</p>
                <p>Brand: {props.brand}</p>
                <p>Price: {props.price}</p>
                <p>ALC: {props.ALC}%</p>
                <p>Pints: {props.pints}</p>
                <div>
                {props.pints <= 0 &&
                <p>Keg is empty.</p>
                }
                {props.pints > 0 && 
                <button onClick={()=> props.whenPintDrop(props.id)} type="submit">-1</button>
                }
                <button onClick={() => props.whenClicked(props.id)} type="submit">Details</button>
                
                 </div>
            </div>

        

        </React.Fragment>
    )

}

Keg.propTypes = {
    name: PropTypes.string.isRequired,
    brand: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    ALC: PropTypes.string.isRequired,
    pints: PropTypes.number.isRequired,
    id: PropTypes.string, 
    whenClicked: PropTypes.func,
    whenPintDrop: PropTypes.func
    
}

export default Keg;
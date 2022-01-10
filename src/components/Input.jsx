import React from 'react';

const Input = ( {onSearchChange} ) => {
    return (
        <div>
            <input type="text" name="search" onChange={ onSearchChange } placeholder="Search Your Cat"/>
        </div>
    )
}

export default Input

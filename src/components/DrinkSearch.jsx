import { TextInput } from './UI/input';
import { useState } from 'react';

export const DrinkSearch = () => {
    const [searchField, setSearchField] = useState ('');

    return (
        <>  
            <label>Or find your favourite drink:</label>
            <TextInput />
            <p>{searchField}</p>
        </>
    );
};
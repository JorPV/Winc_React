import { TextInput } from './UI/input';
import { useState } from 'react';
import { availableDrinks } from '../utils/data';
import { DrinkItems } from './DrinkItems';

export const DrinkSearch = () => {
    const [searchField, setSearchField] = useState ('test drink');

    return (
        <>  
            <label>Or find your favourite drink:</label>
            <TextInput />
            <DrinkItems drinks ={availableDrinks} />
        </>
    );
};
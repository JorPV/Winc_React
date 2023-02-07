import './DrinkButtons.css';
import { Button } from './UI/Button';
import { useState } from 'react';

export const DrinkButtons = ({ drinkOne, drinkTwo }) => {
    return (
        <>
            <h3>What can I offer you to drink, {drinkOne} or {drinkTwo}?</h3>
            <div className="button-group">
                <Button text={drinkOne} />
                <Button text={drinkTwo} />
            </div>
        </>
    );
};

// export const DrinkButtons = () => {
//     const [selectedDrink, setSelectedDrink] = useState('');

//     return (<p>Getting ready a cup of: {selectedDrink}</p>);
// };
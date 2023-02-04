import './DrinkButtons.css';
import { Button } from './UI/Button';

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
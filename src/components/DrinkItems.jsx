import { availableDrinks } from "../utils/data"

export const DrinkItems = ({drinks}) => {
    return (
        <>
            {availableDrinks.map((drink) => (
                <p key={drink.id}>{drink.name}</p>
            ))}    
        </>
    );
};


import { DrinkItem } from "./DrinkItem"

export const DrinkItems = ({drinks}) => {
    return (
        <>
            {drinks.map((drink) => (
                // <p key={drink.id}>{drink.name}</p>
            <DrinkItem key={drink.id} drink = {drink}/>
            ))}    
        </>
    );
};


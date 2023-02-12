
export const DrinkChoice = ({ drink }) => {
    return (
            <>
                <h3> You've got it, a {drink.name} </h3>
                <img src={drink.src} width={100} height={100} alt={drink.alt} />
                <p>Your drink will be ready in a moment</p>
            </>
    );
};
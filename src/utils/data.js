// const tea = {
//     id:self.crypto.randomUUID(),
//     name: "Tea",
//     // imgUrl: "https://media.wincacademy.nl/tea.jpeg",
//     // imgUrl: "https://unsplash.com/photos/8yBQQqH3q8Q?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink",
//     // scr:"images/tea.jpg",
//     alt: "a cup of tea",
// }; 

// const coffee = {
//     id:self.crypto.randomUUID(),
//     name: "Coffee",
//     imgUrl: "https://media.wincacademy.nl/coffee.jpeg",
//     // imgUrl: "https://unsplash.com/photos/jn-HaGWe4yw?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink",
//     src: "images/coffee.jpg",
//     alt: "a cup of coffee",
// }; 

// const cola = {
//     id:self.crypto.randomUUID(),
//     name: "Cola",
//     imgUrl: "https://media.wincacademy.nl/coffee.jpeg",
//     // imgUrl: "https://unsplash.com/photos/Fsmlw6gm_bE?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink",
//     scr:"images/cola.jpg",
//     alt: "a cola",
// }; 

// const bier = {
//     id:self.crypto.randomUUID(),
//     name: "Bier",
//     imgUrl: "https://media.wincacademy.nl/coffee.jpeg",
//     // imgUrl: "https://unsplash.com/photos/Qy2KMPRV3X4?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink",
//     scr:"images/bier.jpg",
//     alt: "a bier",
// }; 

// const wine = {
//     id:self.crypto.randomUUID(),
//     name: "Wine",
//     imgUrl: "https://media.wincacademy.nl/coffee.jpeg",
//     // imgUrl: "https://unsplash.com/photos/bWAHfy-lQVA?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink",
//     scr:"images/wine.jpg",
//     alt: "a glass of wine",
// }; 

// const chocolate = {
//     id:self.crypto.randomUUID(),
//     name: "Chocolate",
//     imgUrl: "https://media.wincacademy.nl/coffee.jpeg",
//     // imgUrl: "https://unsplash.com/photos/MjZq7A2RJxQ?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink",
//     scr:"images/chocolate.jpg",
//     alt: "a hot chocolate",
// }; 

// export const availableDrinks = [tea, coffee, cola, bier, wine, chocolate];

const tea = {
	id: self.crypto.randomUUID(),
	name: 'Tea',
	imgUrl: 'https://media.wincacademy.nl/tea.jpeg',
	alt: `Picture of a cup of tea`,
};

const coffee = {
	id: self.crypto.randomUUID(),
	name: 'Coffee',
	imgUrl: 'https://media.wincacademy.nl/coffee.jpeg',
	alt: `Picture of a cup coffee`,
};

const kombucha = {
	id: self.crypto.randomUUID(),
	name: 'Kombucha',
	imgUrl: 'https://media.wincacademy.nl/kombucha.jpg',
	alt: `Picture of a kombucha drink`,
};

const orangeJuice = {
	id: self.crypto.randomUUID(),
	name: 'Orange juice',
	imgUrl: 'https://media.wincacademy.nl/orange.png',
	alt: `Picture of a glass of orange juice`,
};

const water = {
	id: self.crypto.randomUUID(),
	name: 'Water',
	imgUrl: 'https://media.wincacademy.nl/water.png',
	alt: `Picture of a glass of water`,
};

const cola = {
	id: self.crypto.randomUUID(),
	name: 'Cola',
	imgUrl: 'https://media.wincacademy.nl/cola.png',
	alt: `Picture of a glass of cola`,
};

export const availableDrinks = [
	tea,
	coffee,
	kombucha,
	orangeJuice,
	water,
	cola,
];
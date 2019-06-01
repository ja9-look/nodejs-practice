// Object property shorthand

const name = 'Andrew';
const age = 27;

const user = {
    name,
    age,
    location: ''
};

console.log(user);


//Object destructuring

const product = {
    label: 'Red Notebook',
    price: 3,
    stock: 201,
    salePrice: undefined
};

// const label = product.label;
// const price = product.price;
// const stock = product.stock;
// const salePrice = product.salePrice;

// const {label, stock, rating = 5} = product
// console.log(label);
// console.log(stock);
// console.log(rating);

const transaction = (type, { label, stock }) => {
    console.log(type, label, stock)
};

transaction('order', product);
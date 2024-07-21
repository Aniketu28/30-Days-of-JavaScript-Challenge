var products = [
    {productId:1,productName:"tv",price:20000},
    {productId:2,productName:"mobile",price:10000},
    {productId:3,productName:"charger",price:250},
    {productId:4,productName:"pen",price:100},
    {productId:2,productName:"mixer",price:8000},
]

var Price = products.map(({price}) => price);

var filter = Price.filter((price) => price < 20000);

var filterSum = filter.reduce((sum,price)=>{
    return sum + price;
},0);

console.log("mid range products total price :",filterSum);


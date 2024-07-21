const library = {
    name: "City Library",
    books: [
        {
            title: "1984",
            author: "George Orwell",
        },
        {
            title: "Pride and Prejudice",
            author: "Jane Austen",
        }
    ],
    location: "india"
};

console.log(library['name']);

for(item of Object.keys(library)){
    if(item == "books"){
        library[item].forEach(element => {
            console.log(element);
        });
    }
}

// or

library.books.forEach(item => {
    console.log(item);
})
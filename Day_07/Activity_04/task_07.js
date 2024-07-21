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
    location: "india",
    getInfo :function(){
        return [this.name,this.books]
    }
};

console.log(library.getInfo())

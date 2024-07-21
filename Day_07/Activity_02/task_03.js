//make method and return author and title

const book = {
    author:"Aniket",
    title:"do it",
    year:2024,
    getData : function(){
        return [this.author,this.title];
    }
}

console.log(book.getData());
const book = {
    author:"Aniket",
    title:"do it",
    year:2024,
    getData : function(){
        return [this.author,this.title];
    },
    setYear:function(year){
        this.year = year;
        console.log(this.year);
    }
}

book.setYear(2020)

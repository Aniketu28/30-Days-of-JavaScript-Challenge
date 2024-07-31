function store(){
    let data = []; //data is private


    function add(item){
        data.push(item);
    }

    function remove(item){
        data = data.filter(i => i !== item);
    }

    function listItem(){
        console.log(data);
    }

    return {
        add:add,
        remove:remove,
        listItem:listItem
    }
}

let store1 = store()
store1.add("mango");
store1.add("banana");
store1.listItem();
store1.remove("banana");
store1.listItem();

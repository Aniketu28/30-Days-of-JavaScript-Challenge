let parent = document.getElementById("parent");

let lastchild = parent.lastElementChild;

if(lastchild){
    parent.removeChild(lastchild);
}
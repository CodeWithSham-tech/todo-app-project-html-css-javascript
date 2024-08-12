function addTodolist(){
    if(document.getElementById("todo-item").value==""){
      alert("plase enter the item");
    }else{
    var todo_item = document.getElementById('todo-item');
    todo_item.className = 'st';
    var li = document.createElement("li");
    var nodeText = document.createTextNode(todo_item.value);
    // console.log(nodeText.nodeValue.toUpperCase());
    li.appendChild(nodeText);
    li.setAttribute("class","color");
    var list = document.getElementById("list");
    list.appendChild(li);
    todo_item.value="";
    
    // create button dell
    var delBtn = document.createElement("button");
    var BtnText = document.createTextNode("Delete Item");
    delBtn.setAttribute("class","btn");
    delBtn.setAttribute("onclick","delItem(this)");
    delBtn.appendChild(BtnText);
    li.appendChild(delBtn);

    // create button Edit
    var editBtn = document.createElement("button");
    var BtnEditText = document.createTextNode("Edit Item");
    editBtn.setAttribute("class","style");
    editBtn.setAttribute("onclick","edititem(this)");
    editBtn.appendChild(BtnEditText);
    li.appendChild(editBtn);
 }
}
    // delete all item function
function deleteAllitem(){
   list.innerHTML="";
}
// delete one item function
function delItem(e){
    e.parentNode.remove();
}
// edit item function
function edititem(e){
    var a = prompt("Enter the Update item",e.parentNode.firstChild.nodeValue);
    e.parentNode.firstChild.nodeValue = a;
}


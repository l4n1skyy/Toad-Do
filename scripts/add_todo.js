// add todo
var ib = document.getElementById("input_bar");

ib.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    var len = document.getElementsByTagName("li").length+1;
    var text = document.createTextNode(ib.value);
    ib.value = "";
    // p
    var p = document.createElement("p");
    p.appendChild(text);
    p.setAttribute("class",'mx-2')
    // img
    var img = document.createElement("img");
    img.setAttribute("class","w-8 h-8 drop-shadow-lg hover:drop-shadow-[0_4px_16px_rgba(0,0,0,0.35)]");
    img.setAttribute("src","./images/todo.png");
    img.setAttribute("style","image-rendering: pixelated");
    img.setAttribute("id",'todo-img-'+len);
    img.setAttribute("onclick","switch_state(this.id)");
    // li
    var li = document.createElement("li");
    li.setAttribute("id",'todo-'+len);
    li.setAttribute("class", "flex my-0.5");
    li.appendChild(img);
    li.appendChild(p);
    // ul
    var ul = document.getElementById("todo_list");
    ul.appendChild(li);

    console.log(len);
  }
});



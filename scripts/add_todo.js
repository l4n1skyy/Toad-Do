// get input bar
var ib = document.getElementById("input_bar");

// add event listener that checks for when enter button is released
ib.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    // get number of elements
    var len = document.getElementsByTagName("li").length+1;

    // get input bar text
    var todo_name = document.createTextNode(ib.value);

    // clear input bar
    ib.value = "";

    // state button
    var state_button = document.createElement("img");
    state_button.setAttribute("id",'todo-state-'+ len);
    state_button.setAttribute("class","w-8 h-8 drop-shadow-lg hover:drop-shadow-[0_4px_16px_rgba(0,0,0,0.35)]");
    state_button.setAttribute("src","./images/todo.png");
    state_button.setAttribute("style","image-rendering: pixelated");
    state_button.setAttribute("onclick","switch_state(this.id)");

    // title
    var title = document.createElement("p");
    title.setAttribute("id",'todo-title-'+ len);
    title.setAttribute("class",'mx-2 grow');
    title.appendChild(todo_name);

    // time
    var time = document.createElement("p");
    time.setAttribute("id",'todo-time-'+ len);
    time.setAttribute("class",'text-sm place-content-center');
    time.innerHTML = "time";

    // delete button
    var delete_button = document.createElement("img");
    delete_button.setAttribute("id",'todo-delete-'+ len);
    delete_button.setAttribute("class","pt-0.5 mx-2 w-6 h-6 drop-shadow-lg hover:drop-shadow-[0_3px_10px_rgba(0,0,0,0.35)]");
    delete_button.setAttribute("src","./images/delete.png");
    delete_button.setAttribute("style","image-rendering: pixelated");
    delete_button.setAttribute("onclick","remove_todo(this.id)");

    // li
    var li = document.createElement("li");
    li.setAttribute("id",'todo-'+ len);
    li.setAttribute("class", "flex my-0.5 items-center");
    li.appendChild(state_button);
    li.appendChild(title);
    li.appendChild(time);
    li.appendChild(delete_button);

    // ul
    var ul = document.getElementById("todo_list");
    ul.appendChild(li);

    console.log(state_button);
    console.log(title);
    console.log(time);
    console.log(delete_button);
  }
});



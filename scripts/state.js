// change image and change list
function switch_state(id) {
    var img = document.getElementById(id);
    li = img.parentElement;
    ul = li.parentElement;

    var todo = new RegExp("todo.png");
    var doing = new RegExp("doing.png");
    var done = new RegExp("done.png");

    var todo_list = document.getElementById("todo_list");
    var doing_list = document.getElementById("doing_list");
    var done_list = document.getElementById("done_list");

    if (img.src.match(todo)) {
        img.setAttribute("src", "./images/doing.png");
        doing_list.appendChild(li);
    } else if (img.src.match(doing)) {
        img.setAttribute("src", "./images/done.png");
        done_list.appendChild(li);
    } else if (img.src.match(done)) {
        img.setAttribute("src", "./images/todo.png");
        todo_list.appendChild(li);
    }
}
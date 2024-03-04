// ADD TODO
var ib = document.getElementById("input_bar");
ib.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    var len = document.getElementsByTagName("li").length+1;
    var todo_name = document.createTextNode(ib.value);
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
    time.setAttribute("class",'text-sm place-content-center text-slate-400');
    time.innerHTML = "00:00";
    clock[len] = "00:00";

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
  }
});

// SWITCH IMAGE, SWITCH LIST (SWITCH STATE)
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
        timer_start(li.childNodes[2]);
    } else if (img.src.match(doing)) {
        img.setAttribute("src", "./images/done.png");
        done_list.appendChild(li);
        timer_stop(id.split("-")[2]);
    } else if (img.src.match(done)) {
        img.setAttribute("src", "./images/todo.png");
        todo_list.appendChild(li);
    }
}

// START TIMER
var clock = [];
function timer_start(p) {
    function clock_func() {
        // hh:mm
        var old_hours = parseFloat(p.innerHTML.split(":")[0]);
        var old_minutes = parseFloat(p.innerHTML.split(":")[1]);
        var add_minute = old_hours * 60 + old_minutes + 1;
        var new_hours = Math.floor(add_minute / 60);
        var new_minutes = add_minute % 60;
        if (new_hours / 10 < 1) {
            new_hours = "0" + String(new_hours);
        } else {
            new_hours = String(new_hours);
        }
        if (new_minutes / 10 < 1) {
            new_minutes = "0" + String(new_minutes);
        } else {
            new_minutes = String(new_minutes);
        }
        p.innerHTML = new_hours + ":" + new_minutes;
    }
    id = parseInt(p.id.split("-")[2]);
    clock[id] = setInterval(clock_func, 60000);
}

// END TIMER
function timer_stop(len) {
    clearInterval(clock[len]);
}

/* TIMER MATH
    h:m -> minutes
        m: h * 60 + m
    minutes -> h:m
        h: Math.floor(m / 60)
        m: m % 60
*/

// REMOVE TODO
function remove_todo(id) {
    var img = document.getElementById(id);
    li = img.parentElement;
    ul = li.parentElement;
    ul.removeChild(li);
    timer_stop(clock[id.split("-")[2]]);
}
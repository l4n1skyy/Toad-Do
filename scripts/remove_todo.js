// remove todo

function remove_todo (id) {
    var img = document.getElementById(id);
    li = img.parentElement;
    ul = li.parentElement;
    ul.removeChild(li);
}